import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { SectorService, SectorResponse, SectorRequest } from '../../core/services/sector.service';
import { ComuneroService } from '../../core/services/comunero.service';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';

export interface CaserioZoneData {
  id: number;
  nombre: string;
  descripcion: string;
  color: string;
  totalComuneros: number;
  calificados: number;
  noCalificados: number;
  asistenciaPct: number;
  coordenadasSvg: string;
  markerPos: { x: number; y: number };
  coordinador: string;
}

@Component({
  selector: 'app-caserios',
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
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    PageHeaderComponent
  ],
  templateUrl: './caserios.component.html',
  styleUrl: './caserios.component.scss'
})
export class CaseriosComponent implements OnInit {
  @ViewChild('sectorFormDialog') sectorFormDialog!: TemplateRef<any>;
  Math = Math;

  displayedColumns: string[] = ['zona', 'nombre', 'descripcion', 'totalComuneros', 'calificados', 'asistenciaPct', 'acciones'];
  sectores: SectorResponse[] = [];
  loading = false;

  // Los 5 Caseríos delimitados con sus zonas geográficas y métricas
  caseriosZonas: CaserioZoneData[] = [
    {
      id: 1,
      nombre: 'Sogorón Alto',
      descripcion: 'Zona de pastizales altos y ganadería lechera',
      color: '#10b981',
      totalComuneros: 7,
      calificados: 6,
      noCalificados: 1,
      asistenciaPct: 84.5,
      coordenadasSvg: '40,30 180,20 190,140 30,150',
      markerPos: { x: 105, y: 85 },
      coordinador: 'Zenón Alvarez Ramos'
    },
    {
      id: 2,
      nombre: 'Rodacocha',
      descripcion: 'Zona matriz central y agricultura tradicional',
      color: '#f59e0b',
      totalComuneros: 7,
      calificados: 6,
      noCalificados: 1,
      asistenciaPct: 78.2,
      coordenadasSvg: '200,20 370,30 360,160 195,145',
      markerPos: { x: 280, y: 90 },
      coordinador: 'Silverio Condori Larico'
    },
    {
      id: 3,
      nombre: 'Pedregal',
      descripcion: 'Ladera andina, tubérculos y cereales',
      color: '#6366f1',
      totalComuneros: 7,
      calificados: 6,
      noCalificados: 1,
      asistenciaPct: 72.0,
      coordenadasSvg: '380,40 540,50 530,170 370,165',
      markerPos: { x: 450, y: 105 },
      coordinador: 'Rosa Flores Calla'
    },
    {
      id: 4,
      nombre: 'Río Grande',
      descripcion: 'Valle ribereño, parcelas de riego e irrigación',
      color: '#8b5cf6',
      totalComuneros: 7,
      calificados: 6,
      noCalificados: 1,
      asistenciaPct: 81.0,
      coordenadasSvg: '50,165 240,160 250,280 40,290',
      markerPos: { x: 145, y: 220 },
      coordinador: 'Alejandro Vilca Sucasaca'
    },
    {
      id: 5,
      nombre: 'Chamcas',
      descripcion: 'Sector de pastoreo tradicional y agricultura familiar',
      color: '#3b82f6',
      totalComuneros: 7,
      calificados: 6,
      noCalificados: 1,
      asistenciaPct: 69.5,
      coordenadasSvg: '260,175 520,180 510,290 255,285',
      markerPos: { x: 385, y: 230 },
      coordinador: 'Faustino Ramos Cutipa'
    }
  ];

  caserioSeleccionado: CaserioZoneData = this.caseriosZonas[0];

  sectorForm!: FormGroup;
  selectedSector: SectorResponse | null = null;
  isEditing = false;
  dialogRef?: MatDialogRef<any>;

  constructor(
    private sectorService: SectorService,
    private comuneroService: ComuneroService,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarSectores();
  }

  initForm(): void {
    this.sectorForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['']
    });
  }

  cargarSectores(): void {
    this.loading = true;
    this.sectorService.listar().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.sectores = res.data;
          this.sectores.forEach(sec => {
            const z = this.caseriosZonas.find(cz => cz.nombre.toLowerCase().includes(sec.nombre.toLowerCase()) || sec.nombre.toLowerCase().includes(cz.nombre.toLowerCase()));
            if (z && sec.totalComuneros) {
              z.totalComuneros = sec.totalComuneros;
            }
          });
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });

    this.comuneroService.listar(0, 100).subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.content) {
          const list = res.data.content;
          this.caseriosZonas.forEach(z => {
            const match = list.filter(c => 
              (c.caserio && c.caserio.toLowerCase().includes(z.nombre.toLowerCase())) ||
              (c.sectorNombre && c.sectorNombre.toLowerCase().includes(z.nombre.toLowerCase()))
            );
            if (match.length > 0) {
              z.totalComuneros = match.length;
              z.calificados = match.filter(c => c.tipoComunero === 'CALIFICADO' || c.condicionHabilitacion === 'HABILITADO').length;
              z.noCalificados = z.totalComuneros - z.calificados;
            }
          });
        }
      }
    });
  }

  seleccionarCaserio(z: CaserioZoneData): void {
    this.caserioSeleccionado = z;
  }

  get totalComunerosGlobal(): number {
    return this.caseriosZonas.reduce((acc, curr) => acc + curr.totalComuneros, 0);
  }

  get asistenciaPromedioGlobal(): number {
    const sum = this.caseriosZonas.reduce((acc, curr) => acc + curr.asistenciaPct, 0);
    return Math.round(sum / this.caseriosZonas.length);
  }

  get caserioLider(): CaserioZoneData {
    return [...this.caseriosZonas].sort((a, b) => b.asistenciaPct - a.asistenciaPct)[0];
  }

  abrirCrearModal(): void {
    this.isEditing = false;
    this.selectedSector = null;
    this.sectorForm.reset();
    this.dialogRef = this.dialog.open(this.sectorFormDialog, { width: '480px' });
  }

  abrirEditarModal(sector: SectorResponse): void {
    this.isEditing = true;
    this.selectedSector = sector;
    this.sectorForm.patchValue({
      nombre: sector.nombre,
      descripcion: sector.descripcion || ''
    });
    this.dialogRef = this.dialog.open(this.sectorFormDialog, { width: '480px' });
  }

  guardarSector(): void {
    if (this.sectorForm.invalid) {
      this.sectorForm.markAllAsTouched();
      return;
    }

    const req: SectorRequest = this.sectorForm.value;

    if (this.isEditing && this.selectedSector) {
      this.sectorService.actualizar(this.selectedSector.id, req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success('Caserío actualizado exitosamente');
            this.dialogRef?.close();
            this.cargarSectores();
          }
        }
      });
    } else {
      this.sectorService.crear(req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success('Caserío registrado exitosamente');
            this.dialogRef?.close();
            this.cargarSectores();
          }
        }
      });
    }
  }

  eliminarSector(sector: SectorResponse): void {
    if (!confirm(`¿Eliminar el caserío "${sector.nombre}"? Esta acción no se puede deshacer.`)) return;
    this.sectorService.eliminar(sector.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Caserío eliminado');
          this.cargarSectores();
        }
      }
    });
  }
}
