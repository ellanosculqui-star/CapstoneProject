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
import { AsambleaService, AsambleaResponse, AsambleaRequest } from '../../core/services/asamblea.service';
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

  constructor(
    private asambleaService: AsambleaService,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarAsambleas();
  }

  initForm(): void {
    this.asambleaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      agenda: ['', [Validators.required]],
      tipo: ['ORDINARIA', [Validators.required]],
      fecha: ['', [Validators.required]],
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
    this.asambleaForm.reset({
      tipo: 'ORDINARIA',
      horaInicio: '09:00',
      horaFin: '13:00',
      lugar: 'Local Comunal Principal',
      quorumMinimoPct: 50
    });
    this.dialogRef = this.dialog.open(this.asambleaFormDialog, { width: '600px' });
  }

  verDetalle(asamblea: AsambleaResponse): void {
    this.selectedAsamblea = asamblea;
    this.dialog.open(this.detalleDialog, { width: '500px' });
  }

  guardarAsamblea(): void {
    if (this.asambleaForm.invalid) {
      this.asambleaForm.markAllAsTouched();
      return;
    }

    const req: AsambleaRequest = this.asambleaForm.value;
    this.asambleaService.crear(req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Asamblea convocada exitosamente');
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
