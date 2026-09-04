import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Router } from '@angular/router';
import { VotacionService, VotacionResponse, CrearVotacionRequest, EmitirVotoRequest } from '../../core/services/votacion.service';
import { AsambleaService, AsambleaResponse } from '../../core/services/asamblea.service';
import { AsistenciaService, AsistenciaPadronDto } from '../../core/services/asistencia.service';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';

@Component({
  selector: 'app-votaciones',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule,
    PageHeaderComponent,
    EstadoBadgePipe
  ],
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.scss']
})
export class VotacionesComponent implements OnInit {
  @ViewChild('crearModal') crearModal!: TemplateRef<any>;
  @ViewChild('votarModal') votarModal!: TemplateRef<any>;
  @ViewChild('actaModal') actaModal!: TemplateRef<any>;

  asambleas: AsambleaResponse[] = [];
  selectedAsambleaId: number | null = null;
  votaciones: VotacionResponse[] = [];
  comunerosPresentes: AsistenciaPadronDto[] = [];
  loading = false;
  loadingPadron = false;

  votacionForm!: FormGroup;
  dialogRef?: MatDialogRef<any>;

  // Emitir voto
  votacionSeleccionada: VotacionResponse | null = null;
  comuneroSeleccionadoId: number | null = null;
  opcionVotoSeleccionada: 'A_FAVOR' | 'EN_CONTRA' | 'ABSTENCION' = 'A_FAVOR';

  // Acta / Certificado
  votacionActa: VotacionResponse | null = null;

  constructor(
    private votacionService: VotacionService,
    private asambleaService: AsambleaService,
    private asistenciaService: AsistenciaService,
    private notify: NotificationService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) {}

  get selectedAsamblea(): AsambleaResponse | null {
    return this.asambleas.find(a => a.id === this.selectedAsambleaId) || null;
  }

  irAAsistencia(): void {
    this.dialogRef?.close();
    this.router.navigate(['/asistencia']);
  }

  ngOnInit(): void {
    this.initForm();
    this.cargarAsambleas();
  }

  initForm(): void {
    this.votacionForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(4)]],
      propuesta: ['', [Validators.required, Validators.minLength(10)]],
      descripcion: [''],
      tipo: ['MAYORIA_SIMPLE', Validators.required]
    });
  }

  cargarAsambleas(): void {
    this.asambleaService.listar(0, 50).subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.content) {
          this.asambleas = res.data.content;
          if (this.asambleas.length > 0) {
            this.selectedAsambleaId = this.asambleas[0].id;
            this.cargarVotaciones();
            this.cargarPadronAsistentes();
          }
        }
      }
    });
  }

  cargarVotaciones(): void {
    if (!this.selectedAsambleaId) return;
    this.loading = true;
    this.votacionService.listarPorAsamblea(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.votaciones = res.data;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  cargarPadronAsistentes(): void {
    if (!this.selectedAsambleaId) return;
    this.loadingPadron = true;
    this.asistenciaService.obtenerPadron(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          // Filtrar comuneros con asistencia PRESENTE
          this.comunerosPresentes = res.data.filter(c => c.estadoAsistencia === 'PRESENTE');
        }
        this.loadingPadron = false;
      },
      error: () => this.loadingPadron = false
    });
  }

  onAsambleaChange(): void {
    this.cargarVotaciones();
    this.cargarPadronAsistentes();
  }

  abrirCrearModal(): void {
    if (!this.selectedAsambleaId) {
      this.notify.warning('Seleccione una asamblea primero');
      return;
    }
    this.votacionForm.reset({ tipo: 'MAYORIA_SIMPLE' });
    this.dialogRef = this.dialog.open(this.crearModal, { width: '580px' });
  }

  guardarVotacion(): void {
    if (this.votacionForm.invalid || !this.selectedAsambleaId) {
      this.votacionForm.markAllAsTouched();
      return;
    }

    const req: CrearVotacionRequest = this.votacionForm.value;
    this.votacionService.crear(this.selectedAsambleaId, req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Propuesta de votación registrada exitosamente');
          this.dialogRef?.close();
          this.cargarVotaciones();
        }
      }
    });
  }

  abrirVotacion(id: number): void {
    this.votacionService.abrir(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Votación abierta a sufragio');
          this.cargarVotaciones();
        }
      }
    });
  }

  cerrarVotacion(id: number): void {
    this.votacionService.cerrar(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Votación cerrada formalmente y escrutinio finalizado');
          this.cargarVotaciones();
        }
      }
    });
  }

  abrirModalVotar(v: VotacionResponse): void {
    this.votacionSeleccionada = v;
    this.comuneroSeleccionadoId = this.comunerosPresentes.length > 0 ? this.comunerosPresentes[0].comuneroId : null;
    this.opcionVotoSeleccionada = 'A_FAVOR';
    this.dialogRef = this.dialog.open(this.votarModal, { width: '520px' });
  }

  confirmarEmitirVoto(): void {
    if (!this.votacionSeleccionada || !this.comuneroSeleccionadoId) {
      this.notify.warning('Seleccione un comunero votante');
      return;
    }

    const req: EmitirVotoRequest = {
      comuneroId: this.comuneroSeleccionadoId,
      opcion: this.opcionVotoSeleccionada
    };

    this.votacionService.emitirVoto(this.votacionSeleccionada.id, req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Voto emitido y registrado en el acta');
          this.dialogRef?.close();
          this.cargarVotaciones();
        }
      }
    });
  }

  abrirActaModal(v: VotacionResponse): void {
    this.votacionActa = v;
    this.dialogRef = this.dialog.open(this.actaModal, { width: '680px' });
  }

  imprimirActa(): void {
    window.print();
  }

  // Métodos auxiliares de métricas
  getVotosAFavor(v: VotacionResponse): number {
    return v.resultado ? v.resultado.votosAFavor : (v as any).aFavor || 0;
  }

  getVotosEnContra(v: VotacionResponse): number {
    return v.resultado ? v.resultado.votosEnContra : (v as any).enContra || 0;
  }

  getVotosAbstencion(v: VotacionResponse): number {
    return v.resultado ? v.resultado.votosAbstencion : (v as any).abstenciones || 0;
  }

  getTotalVotos(v: VotacionResponse): number {
    return v.resultado ? v.resultado.totalVotosEmitidos : (v as any).totalVotos || 0;
  }

  pctAFavor(v: VotacionResponse): number {
    if (v.resultado && v.resultado.porcentajeAFavor !== undefined) {
      return Number(v.resultado.porcentajeAFavor);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round((this.getVotosAFavor(v) / tot) * 100) : 0;
  }

  pctEnContra(v: VotacionResponse): number {
    if (v.resultado && v.resultado.porcentajeEnContra !== undefined) {
      return Number(v.resultado.porcentajeEnContra);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round((this.getVotosEnContra(v) / tot) * 100) : 0;
  }

  pctAbstencion(v: VotacionResponse): number {
    if (v.resultado && v.resultado.porcentajeAbstencion !== undefined) {
      return Number(v.resultado.porcentajeAbstencion);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round((this.getVotosAbstencion(v) / tot) * 100) : 0;
  }

  formatTipo(tipo: string): string {
    if (!tipo) return 'ORDINARIA';
    return tipo.replace(/_/g, ' ');
  }

  get totalVotacionesGlobal(): number {
    return this.votaciones.length;
  }

  get votacionesEnCursoCount(): number {
    return this.votaciones.filter(v => v.estado === 'ABIERTA').length;
  }

  get votacionesAprobadasCount(): number {
    return this.votaciones.filter(v => v.resultado?.resultadoDecision === 'APROBADA').length;
  }
}
