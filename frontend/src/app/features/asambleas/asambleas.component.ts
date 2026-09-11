import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AsambleaService, AsambleaResponse, AsambleaRequest } from '../../core/services/asamblea.service';
import { AsistenciaService, QuorumResponse, AsistenciaPadronDto } from '../../core/services/asistencia.service';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';

@Component({
  selector: 'app-asambleas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatBadgeModule,
    PageHeaderComponent,
    EstadoBadgePipe
  ],
  templateUrl: './asambleas.component.html',
  styleUrls: ['./asambleas.component.scss']
})
export class AsambleasComponent implements OnInit {
  @ViewChild('asambleaFormDialog') asambleaFormDialog!: TemplateRef<any>;
  @ViewChild('detalleDialog') detalleDialog!: TemplateRef<any>;

  displayedColumns: string[] = ['titulo', 'tipo', 'fecha', 'horaInicio', 'lugar', 'estado', 'quorumMinimoPct', 'acciones'];
  asambleas: AsambleaResponse[] = [];
  totalElements = 0;
  pageSize = 10;
  pageIndex = 0;
  loading = false;
  estadoFiltro = '';

  asambleaForm!: FormGroup;
  selectedAsamblea: AsambleaResponse | null = null;
  dialogRef?: MatDialogRef<any>;
  fechaMinima: string = new Date().toISOString().substring(0, 10);

  // Detalle y Asistencia
  quorumDetalle: QuorumResponse | null = null;
  padronDetalle: AsistenciaPadronDto[] = [];
  padronFiltrado: AsistenciaPadronDto[] = [];
  filtroAsistencia: string = 'TODOS';
  loadingDetalle = false;
  actaAsociada: any = null;

  constructor(
    private asambleaService: AsambleaService,
    private asistenciaService: AsistenciaService,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fechaMinima = new Date().toISOString().substring(0, 10);
    this.initForm();
    this.cargarAsambleas();
  }

  initForm(): void {
    this.asambleaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      agenda: ['', [Validators.required]],
      tipo: ['ORDINARIA', [Validators.required]],
      fecha: [this.fechaMinima, [Validators.required]],
      horaInicio: ['09:00', [Validators.required]],
      horaFin: ['13:00'],
      lugar: ['Local Comunal', [Validators.required]],
      quorumMinimoPct: [50, [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  cargarAsambleas(): void {
    this.loading = true;
    this.asambleaService.listar(this.pageIndex, this.pageSize, this.estadoFiltro).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.asambleas = res.data.content;
          this.totalElements = res.data.totalElements;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  abrirCrearModal(): void {
    this.fechaMinima = new Date().toISOString().substring(0, 10);
    this.asambleaForm.reset({
      tipo: 'ORDINARIA',
      fecha: this.fechaMinima,
      horaInicio: '09:00',
      horaFin: '13:00',
      lugar: 'Local Comunal Principal',
      quorumMinimoPct: 50
    });
    this.dialogRef = this.dialog.open(this.asambleaFormDialog, { width: '600px' });
  }

  verDetalle(asamblea: AsambleaResponse): void {
    this.selectedAsamblea = asamblea;
    this.quorumDetalle = null;
    this.padronDetalle = [];
    this.padronFiltrado = [];
    this.actaAsociada = null;
    this.filtroAsistencia = 'TODOS';
    this.loadingDetalle = true;

    this.dialog.open(this.detalleDialog, { width: '850px', maxHeight: '90vh' });

    // Obtener Quorum y estadísticas
    this.asistenciaService.calcularQuorum(asamblea.id).subscribe({
      next: (qRes) => {
        if (qRes.success && qRes.data) {
          this.quorumDetalle = qRes.data;
        }
      }
    });

    // Obtener Acta asociada a la asamblea
    this.http.get<any>(`${environment.apiUrl}/actas/asamblea/${asamblea.id}`).subscribe({
      next: (aRes) => {
        if (aRes.success && aRes.data) {
          this.actaAsociada = aRes.data;
        }
      },
      error: () => {
        // Si aún no existe creada en BD, consultar borrador automático para mostrarla integrada
        this.http.get<any>(`${environment.apiUrl}/actas/asamblea/${asamblea.id}/borrador-automatico`).subscribe({
          next: (bRes) => {
            if (bRes.success && bRes.data) {
              this.actaAsociada = bRes.data;
            }
          }
        });
      }
    });

    // Obtener Padrón completo con estados
    this.asistenciaService.obtenerPadron(asamblea.id).subscribe({
      next: (pRes) => {
        if (pRes.success && pRes.data) {
          this.padronDetalle = pRes.data;
          this.filtrarPadron();
        }
        this.loadingDetalle = false;
      },
      error: () => {
        this.loadingDetalle = false;
      }
    });
  }

  irAActas(): void {
    this.dialog.closeAll();
    this.router.navigate(['/actas']);
  }

  filtrarPadron(filtro?: string): void {
    if (filtro) {
      this.filtroAsistencia = filtro;
    }
    if (this.filtroAsistencia === 'TODOS') {
      this.padronFiltrado = [...this.padronDetalle];
    } else if (this.filtroAsistencia === 'PENDIENTE') {
      this.padronFiltrado = this.padronDetalle.filter(p => !p.estadoAsistencia);
    } else {
      this.padronFiltrado = this.padronDetalle.filter(p => p.estadoAsistencia === this.filtroAsistencia);
    }
  }

  guardarAsamblea(): void {
    if (this.asambleaForm.invalid) {
      this.asambleaForm.markAllAsTouched();
      return;
    }

    const req: AsambleaRequest = this.asambleaForm.value;
    const hoy = new Date().toISOString().substring(0, 10);
    if (req.fecha < hoy) {
      this.notify.error('No se puede programar una asamblea para una fecha anterior a hoy (' + hoy + ').');
      return;
    }

    this.asambleaService.crear(req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Asamblea convocada y acta borrador asociada exitosamente');
          this.dialogRef?.close();
          this.cargarAsambleas();
        }
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarAsambleas();
  }

  onFiltrar(): void {
    this.pageIndex = 0;
    this.cargarAsambleas();
  }

  cambiarEstado(asamblea: AsambleaResponse, nuevoEstado: string): void {
    this.asambleaService.cambiarEstado(asamblea.id, nuevoEstado).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success(`Asamblea actualizada a estado: ${nuevoEstado}`);
          this.cargarAsambleas();
        }
      }
    });
  }
}
