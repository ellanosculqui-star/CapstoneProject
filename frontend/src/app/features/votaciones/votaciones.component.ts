import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
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
  @ViewChild('qrModal') qrModal!: TemplateRef<any>;

  asambleas: AsambleaResponse[] = [];
  selectedAsambleaId: number | null = null;
  votaciones: VotacionResponse[] = [];
  comunerosPresentes: AsistenciaPadronDto[] = [];
  loading = false;
  loadingPadron = false;

  votacionForm!: FormGroup;
  dialogRef?: MatDialogRef<any>;

  // Candidatos para elección de representantes
  candidatosLista: string[] = [''];

  // QR Modal
  votacionParaQr: VotacionResponse | null = null;

  // Emitir voto
  votacionSeleccionada: VotacionResponse | null = null;
  comuneroSeleccionadoId: number | null = null;
  opcionVotoSeleccionada: 'A_FAVOR' | 'EN_CONTRA' | 'ABSTENCION' = 'A_FAVOR';
  candidatoSeleccionadoAdmin: string = '';

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
      propuesta: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: [''],
      tipo: ['MAYORIA_SIMPLE', Validators.required],
      candidatos: this.fb.array([this.fb.control(''), this.fb.control('')])
    });
  }

  get candidatosFormArray(): FormArray {
    return this.votacionForm.get('candidatos') as FormArray;
  }

  getCandidatoControl(index: number): FormControl {
    return this.candidatosFormArray.at(index) as FormControl;
  }

  agregarCandidatoInput(): void {
    this.candidatosFormArray.push(this.fb.control(''));
  }

  removerCandidatoInput(index: number): void {
    if (this.candidatosFormArray.length > 2) {
      this.candidatosFormArray.removeAt(index);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  cargarAsambleas(): void {
    this.asambleaService.listar(0, 100).subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.content) {
          const todas = res.data.content;
          // Filtrar: Ocultar asambleas FINALIZADAS y CANCELADAS
          // Priorizar asambleas EN_CURSO
          const activas = todas.filter(a => a.estado === 'EN_CURSO');
          const programadas = todas.filter(a => a.estado === 'PROGRAMADA');

          if (activas.length > 0) {
            this.asambleas = activas;
            this.selectedAsambleaId = activas[0].id;
          } else if (programadas.length > 0) {
            // Si aún no se inició ninguna, permitir ver programadas para poder iniciarlas
            this.asambleas = programadas;
            this.selectedAsambleaId = programadas[0].id;
          } else {
            this.asambleas = [];
            this.selectedAsambleaId = null;
          }

          if (this.selectedAsambleaId) {
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

  iniciarAsambleaActual(): void {
    if (!this.selectedAsambleaId) return;
    this.asambleaService.cambiarEstado(this.selectedAsambleaId, 'EN_CURSO').subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('¡Asamblea iniciada con éxito! Ya se encuentra EN CURSO.');
          // Actualizar estado local
          const asamb = this.asambleas.find(a => a.id === this.selectedAsambleaId);
          if (asamb) asamb.estado = 'EN_CURSO';
        }
      },
      error: (err) => {
        this.notify.error(err.error?.message || 'Error al iniciar la asamblea');
      }
    });
  }

  onAsambleaChange(): void {
    this.cargarVotaciones();
    this.cargarPadronAsistentes();
  }

  esFormularioValido(): boolean {
    if (!this.votacionForm) return false;
    const tipo = this.votacionForm.get('tipo')?.value;
    const titulo = this.votacionForm.get('titulo')?.value;

    if (!titulo || titulo.trim().length < 3) return false;

    if (tipo === 'ELECCION_REPRESENTANTE') {
      const validCands = this.candidatosFormArray.controls
        .map(c => (c.value || '').trim())
        .filter(c => c.length > 0);
      return validCands.length >= 2;
    } else {
      const propuesta = this.votacionForm.get('propuesta')?.value;
      return !!propuesta && propuesta.trim().length >= 4;
    }
  }

  abrirCrearModal(): void {
    if (!this.selectedAsambleaId) {
      this.notify.warning('Seleccione una asamblea primero');
      return;
    }
    this.candidatosFormArray.clear();
    this.candidatosFormArray.push(this.fb.control(''));
    this.candidatosFormArray.push(this.fb.control(''));
    this.votacionForm.reset({
      titulo: '',
      propuesta: '',
      descripcion: '',
      tipo: 'MAYORIA_SIMPLE'
    });
    this.dialogRef = this.dialog.open(this.crearModal, {
      width: '640px',
      maxHeight: '90vh'
    });
  }

  guardarVotacion(): void {
    if (!this.esFormularioValido() || !this.selectedAsambleaId) {
      this.notify.warning('Por favor complete los campos requeridos');
      return;
    }

    const formVal = this.votacionForm.value;
    const req: CrearVotacionRequest = {
      titulo: formVal.titulo?.trim(),
      propuesta: formVal.propuesta?.trim() || `Elección democrática de representantes comunales`,
      descripcion: formVal.descripcion?.trim() || '',
      tipo: formVal.tipo
    };

    if (req.tipo === 'ELECCION_REPRESENTANTE') {
      const validCands = this.candidatosFormArray.controls
        .map(c => (c.value || '').trim())
        .filter(c => c.length > 0);

      if (validCands.length < 2) {
        this.notify.warning('Debe registrar al menos 2 candidatos para la elección');
        return;
      }
      req.candidatos = validCands;
      if (!req.propuesta || req.propuesta.trim().length === 0) {
        req.propuesta = `Elección entre candidatos: ${validCands.join(', ')}`;
      }
    }

    this.votacionService.crear(this.selectedAsambleaId, req).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const nuevaVotacion = res.data;
          this.notify.success('Votación registrada exitosamente. Abriendo proceso electoral...');
          this.dialogRef?.close();

          // Abrir automáticamente la votación creada para que quede activa de inmediato
          this.votacionService.abrir(nuevaVotacion.id).subscribe({
            next: (openRes) => {
              if (openRes.success) {
                this.notify.success('¡Votación ABIERTA! Se ha generado el código QR y la cédula digital.');
                this.cargarVotaciones();
                // Mostrar de inmediato el modal QR de la votación
                setTimeout(() => {
                  this.abrirModalQrVotacion(openRes.data);
                }, 400);
              } else {
                this.cargarVotaciones();
              }
            },
            error: () => {
              this.cargarVotaciones();
            }
          });
        }
      },
      error: (err) => {
        this.notify.error(err.error?.message || 'Error al crear la votación');
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

  abrirModalQrVotacion(v: VotacionResponse): void {
    this.votacionParaQr = v;
    this.dialogRef = this.dialog.open(this.qrModal, { width: '440px' });
  }

  get qrVotacionLink(): string {
    if (!this.votacionParaQr) return '';
    const origin = window.location.origin;
    return `${origin}/emitir-voto?votacionId=${this.votacionParaQr.id}`;
  }

  get qrVotacionUrl(): string {
    if (!this.votacionParaQr) return '';
    return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(this.qrVotacionLink)}`;
  }

  copiarQrVotacionLink(): void {
    const link = this.qrVotacionLink;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).then(() => {
        this.notify.success('Enlace de votación copiado al portapapeles');
      });
    }
  }

  probarQrVotacionLink(): void {
    window.open(this.qrVotacionLink, '_blank');
  }

  abrirModalVotar(v: VotacionResponse): void {
    this.votacionSeleccionada = v;
    this.comuneroSeleccionadoId = this.comunerosPresentes.length > 0 ? this.comunerosPresentes[0].comuneroId : null;
    this.opcionVotoSeleccionada = 'A_FAVOR';
    this.candidatoSeleccionadoAdmin = (v.candidatos && v.candidatos.length > 0) ? v.candidatos[0] : '';
    this.dialogRef = this.dialog.open(this.votarModal, { width: '540px' });
  }

  confirmarEmitirVoto(): void {
    if (!this.votacionSeleccionada || !this.comuneroSeleccionadoId) {
      this.notify.warning('Seleccione un comunero votante');
      return;
    }

    const esEleccion = this.votacionSeleccionada.tipo === 'ELECCION_REPRESENTANTE' ||
      (!!this.votacionSeleccionada.candidatos && this.votacionSeleccionada.candidatos.length > 0);

    const req: EmitirVotoRequest = {
      comuneroId: this.comuneroSeleccionadoId,
      opcion: esEleccion ? 'CANDIDATO' : this.opcionVotoSeleccionada,
      candidatoElegido: esEleccion ? this.candidatoSeleccionadoAdmin : undefined
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
    return this.votaciones.filter(v => v.resultado?.resultadoDecision === 'APROBADA' || v.resultado?.resultadoDecision?.startsWith('ELECTO')).length;
  }

  getCandidatosKeys(v: VotacionResponse): string[] {
    if (v.resultado?.votosPorCandidato) {
      return Object.keys(v.resultado.votosPorCandidato);
    }
    return v.candidatos || [];
  }

  getVotosCandidato(v: VotacionResponse, cand: string): number {
    return v.resultado?.votosPorCandidato?.[cand] || 0;
  }

  getPctCandidato(v: VotacionResponse, cand: string): number {
    if (v.resultado?.porcentajePorCandidato?.[cand] !== undefined) {
      return Number(v.resultado.porcentajePorCandidato[cand]);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round((this.getVotosCandidato(v, cand) / tot) * 100) : 0;
  }
}
