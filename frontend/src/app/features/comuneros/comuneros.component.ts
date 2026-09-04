import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComuneroService, ComuneroResponse, ComuneroRequest } from '../../core/services/comunero.service';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';

@Component({
  selector: 'app-comuneros',
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
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
    EstadoBadgePipe
  ],
  templateUrl: './comuneros.component.html',
  styleUrls: ['./comuneros.component.scss']
})
export class ComunerosComponent implements OnInit {
  @ViewChild('comuneroFormDialog') comuneroFormDialog!: TemplateRef<any>;
  @ViewChild('detalleDialog') detalleDialog!: TemplateRef<any>;

  // Columnas oficiales según los atributos solicitados
  displayedColumns: string[] = [
    'numeroPadron',
    'dni',
    'nombreCompleto',
    'fechaNacimiento',
    'estadoCivil',
    'ocupacion',
    'telefono',
    'tipoComunero',
    'caserio',
    'estado',
    'acciones'
  ];

  // Los 5 caseríos oficiales de la Comunidad Campesina
  readonly caserios: string[] = [
    'Sogorón Alto',
    'Rodacocha',
    'Pedregal',
    'Río Grande',
    'Chamcas'
  ];

  readonly estadosCiviles: string[] = [
    'SOLTERO',
    'CASADO',
    'CONVIVIENTE',
    'VIUDO',
    'DIVORCIADO'
  ];

  readonly tiposComunero: string[] = [
    'CALIFICADO',
    'NO_CALIFICADO'
  ];

  readonly estados: string[] = [
    'ACTIVO',
    'INACTIVO',
    'SUSPENDIDO',
    'RETIRADO',
    'FALLECIDO'
  ];

  comuneros: ComuneroResponse[] = [];
  totalElements = 0;
  pageSize = 10;
  pageIndex = 0;
  loading = false;
  busqueda = '';
  caserioFiltro = '';
  estadoFiltro = '';
  tipoFiltro = '';

  comuneroForm!: FormGroup;
  selectedComunero: ComuneroResponse | null = null;
  isEditing = false;
  dialogRef?: MatDialogRef<any>;

  constructor(
    private comuneroService: ComuneroService,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarComuneros();
  }

  initForm(): void {
    this.comuneroForm = this.fb.group({
      numeroPadron: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      fechaNacimiento: [''],
      estadoCivil: ['CASADO', [Validators.required]],
      ocupacion: ['Agricultor', [Validators.required]],
      telefono: [''],
      tipoComunero: ['CALIFICADO', [Validators.required]],
      caserio: ['Sogorón Alto', [Validators.required]],
      estado: ['ACTIVO', [Validators.required]]
    });
  }

  cargarComuneros(): void {
    this.loading = true;
    let terminoBusqueda = this.busqueda.trim();
    if (this.caserioFiltro) {
      terminoBusqueda = terminoBusqueda ? `${terminoBusqueda} ${this.caserioFiltro}` : this.caserioFiltro;
    }

    this.comuneroService.listar(
      this.pageIndex,
      this.pageSize,
      terminoBusqueda,
      undefined,
      this.tipoFiltro,
      this.estadoFiltro
    ).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.comuneros = res.data.content;
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
    this.isEditing = false;
    this.selectedComunero = null;
    const nextNum = 'PAD-' + String(this.totalElements + 1).padStart(3, '0');
    this.comuneroForm.reset({
      numeroPadron: nextNum,
      dni: '',
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      estadoCivil: 'CASADO',
      ocupacion: 'Agricultor',
      telefono: '',
      tipoComunero: 'CALIFICADO',
      caserio: 'Sogorón Alto',
      estado: 'ACTIVO'
    });
    this.dialogRef = this.dialog.open(this.comuneroFormDialog, { width: '680px' });
  }

  abrirEditarModal(comunero: ComuneroResponse): void {
    this.isEditing = true;
    this.selectedComunero = comunero;

    this.comuneroForm.patchValue({
      numeroPadron: comunero.numeroPadron || comunero.codigoComunero,
      dni: comunero.dni,
      nombres: comunero.nombres,
      apellidos: comunero.apellidos,
      fechaNacimiento: comunero.fechaNacimiento || '',
      estadoCivil: comunero.estadoCivil || 'CASADO',
      ocupacion: comunero.ocupacion || 'Agricultor',
      telefono: comunero.telefono || '',
      tipoComunero: comunero.tipoComunero || 'CALIFICADO',
      caserio: comunero.caserio || 'Sogorón Alto',
      estado: comunero.estado || 'ACTIVO'
    });

    this.dialogRef = this.dialog.open(this.comuneroFormDialog, { width: '680px' });
  }

  verDetalle(comunero: ComuneroResponse): void {
    this.selectedComunero = comunero;
    this.dialog.open(this.detalleDialog, { width: '540px' });
  }

  guardarComunero(): void {
    if (this.comuneroForm.invalid) {
      this.comuneroForm.markAllAsTouched();
      this.notify.warning('Por favor complete los campos obligatorios.');
      return;
    }

    const val = this.comuneroForm.value;
    const req: ComuneroRequest = {
      codigoComunero: val.numeroPadron,
      numeroPadron: val.numeroPadron,
      dni: val.dni,
      nombres: val.nombres,
      apellidos: val.apellidos,
      fechaNacimiento: val.fechaNacimiento || undefined,
      estadoCivil: val.estadoCivil,
      ocupacion: val.ocupacion,
      telefono: val.telefono,
      tipoComunero: val.tipoComunero,
      caserio: val.caserio,
      estado: val.estado,
      condicionHabilitacion: val.tipoComunero === 'CALIFICADO' ? 'HABILITADO' : 'INHABILITADO'
    };

    if (this.isEditing && this.selectedComunero) {
      this.comuneroService.actualizar(this.selectedComunero.id, req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success('Comunero actualizado exitosamente.');
            this.dialogRef?.close();
            this.cargarComuneros();
          }
        }
      });
    } else {
      this.comuneroService.crear(req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success('Comunero registrado en el padrón exitosamente.');
            this.dialogRef?.close();
            this.cargarComuneros();
          }
        }
      });
    }
  }

  eliminarComunero(comunero: ComuneroResponse): void {
    if (confirm(`¿Está seguro de retirar del padrón activo a ${comunero.nombreCompleto}?`)) {
      this.comuneroService.eliminar(comunero.id).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success('Comunero dado de baja del padrón.');
            this.cargarComuneros();
          }
        }
      });
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarComuneros();
  }

  buscar(): void {
    this.pageIndex = 0;
    this.cargarComuneros();
  }

  limpiarFiltros(): void {
    this.busqueda = '';
    this.caserioFiltro = '';
    this.estadoFiltro = '';
    this.tipoFiltro = '';
    this.pageIndex = 0;
    this.cargarComuneros();
  }
}
