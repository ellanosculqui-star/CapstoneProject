import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../environments/environment';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';

@Component({
  selector: 'app-actas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
    EstadoBadgePipe
  ],
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit {
  @ViewChild('actaFormDialog') actaFormDialog!: TemplateRef<any>;
  @ViewChild('detalleDialog') detalleDialog!: TemplateRef<any>;

  displayedColumns: string[] = ['numeroActa', 'asambleaTitulo', 'fecha', 'lugar', 'estado', 'acciones'];
  actas: any[] = [];
  asambleasActivas: any[] = [];
  loading = false;
  estadoFiltro = '';

  actaForm!: FormGroup;
  selectedActa: any = null;
  dialogRef?: MatDialogRef<any>;

  constructor(
    private http: HttpClient,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarActas();
    this.cargarAsambleasActivas();
  }

  initForm(): void {
    this.actaForm = this.fb.group({
      asambleaId: ['', [Validators.required]],
      numeroActa: ['ACT-2026-001', [Validators.required]],
      fecha: [new Date().toISOString().substring(0, 10), [Validators.required]],
      lugar: ['Local Comunal Central', [Validators.required]],
      agenda: ['', [Validators.required]],
      resumen: [''],
      observaciones: ['']
    });
  }

  cargarActas(): void {
    this.loading = true;
    let url = `${environment.apiUrl}/actas`;
    if (this.estadoFiltro) {
      url += `?estado=${this.estadoFiltro}`;
    }

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.actas = res.data.content || res.data;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  // Carga únicamente las asambleas activas (EN_CURSO o PROGRAMADA) para vincular a nuevas actas
  cargarAsambleasActivas(): void {
    this.http.get<any>(`${environment.apiUrl}/asambleas?estado=EN_CURSO&size=50`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.asambleasActivas = res.data.content || res.data;
          // Si no hay en curso, cargar también programadas
          if (this.asambleasActivas.length === 0) {
            this.http.get<any>(`${environment.apiUrl}/asambleas?estado=PROGRAMADA&size=50`).subscribe({
              next: (resProg) => {
                if (resProg.success && resProg.data) {
                  this.asambleasActivas = resProg.data.content || resProg.data;
                }
              }
            });
          }
        }
      }
    });
  }

  onAsambleaSeleccionada(asambleaId: number): void {
    if (!asambleaId) return;
    // Generar borrador automático de datos desde la asamblea activa seleccionada
    this.http.get<any>(`${environment.apiUrl}/actas/asamblea/${asambleaId}/borrador-automatico`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const b = res.data;
          this.actaForm.patchValue({
            numeroActa: b.numeroActa || 'ACT-2026-00' + (this.actas.length + 1),
            lugar: b.lugar || 'Local Comunal Central',
            agenda: b.agenda || '',
            resumen: b.resumen || ''
          });
          this.notify.info('Se han precargado los datos y quórum de la asamblea seleccionada');
        }
      }
    });
  }

  abrirCrearModal(): void {
    this.cargarAsambleasActivas();
    this.actaForm.reset({
      numeroActa: 'ACT-2026-00' + (this.actas.length + 1),
      fecha: new Date().toISOString().substring(0, 10),
      lugar: 'Local Comunal Central'
    });
    this.dialogRef = this.dialog.open(this.actaFormDialog, { width: '600px' });
  }

  verDetalle(acta: any): void {
    this.selectedActa = acta;
    this.dialog.open(this.detalleDialog, { width: '650px' });
  }

  guardarActa(): void {
    if (this.actaForm.invalid) {
      this.actaForm.markAllAsTouched();
      return;
    }

    const req = this.actaForm.value;
    this.http.post<any>(`${environment.apiUrl}/actas`, req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Acta borrador registrada exitosamente');
          this.dialogRef?.close();
          this.cargarActas();
        }
      }
    });
  }

  firmarYAprobarActa(acta: any): void {
    this.http.patch<any>(`${environment.apiUrl}/actas/${acta.id}/aprobar`, {}).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success(`Acta N° ${acta.numeroActa} aprobada y firmada digitalmente`);
          this.cargarActas();
          if (this.selectedActa && this.selectedActa.id === acta.id) {
            this.selectedActa.estado = 'APROBADA';
          }
        }
      }
    });
  }

  imprimirActa(acta: any): void {
    this.selectedActa = acta;
    setTimeout(() => window.print(), 300);
  }
}
