import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { Subscription } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AsistenciaService, AsistenciaPadronDto, QuorumResponse } from '../../core/services/asistencia.service';
import { AsambleaService, AsambleaResponse } from '../../core/services/asamblea.service';
import { OfflineAsistenciaService, AsistenciaOfflineItem } from '../../core/services/offline-asistencia.service';
import { NotificationService } from '../../core/services/notification.service';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { EstadoBadgePipe } from '../../shared/pipes/estado-badge.pipe';

@Component({
  selector: 'app-asistencia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatBadgeModule,
    PageHeaderComponent,
    EstadoBadgePipe
  ],
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit, OnDestroy {
  @ViewChild('qrDialog') qrDialog!: TemplateRef<any>;

  displayedColumns: string[] = ['codigoComunero', 'dni', 'nombreCompleto', 'condicionHabilitacion', 'estadoAsistencia', 'acciones'];
  asambleas: AsambleaResponse[] = [];
  selectedAsambleaId: number | null = null;
  selectedAsamblea: AsambleaResponse | null = null;
  padron: AsistenciaPadronDto[] = [];
  padronFiltrado: AsistenciaPadronDto[] = [];
  filtroTexto: string = '';
  quorumInfo: QuorumResponse | null = null;
  loading = false;
  scanDni = '';

  // Modo Asamblea (Prompt Sección 25)
  modoAsamblea = false;

  // Estado Offline / Sincronización (Prompt Sección 20 & Caso 5)
  isOnline = true;
  pendingOfflineCount = 0;
  private subs = new Subscription();
  private pollingTimer: any = null;

  // Integración con Acta Oficial y Firma
  @ViewChild('actaCuadernoDialog') actaCuadernoDialog!: TemplateRef<any>;
  @ViewChild('qrFirmaDialog') qrFirmaDialog!: TemplateRef<any>;

  actaAsociada: any = null;
  nuevoAcuerdoTexto: string = '';
  guardandoAcuerdo: boolean = false;

  constructor(
    private asistenciaService: AsistenciaService,
    private asambleaService: AsambleaService,
    public offlineService: OfflineAsistenciaService,
    private notify: NotificationService,
    private dialog: MatDialog,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.offlineService.isOnline$.subscribe(online => {
        this.isOnline = online;
      })
    );

    this.subs.add(
      this.offlineService.pendingQueue$.subscribe(queue => {
        this.pendingOfflineCount = queue.length;
      })
    );

    this.cargarAsambleas();
    this.iniciarAutoRefresco();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.detenerAutoRefresco();
  }

  iniciarAutoRefresco(): void {
    this.detenerAutoRefresco();
    // Refresco silencioso cada 3 segundos para reflejar en tiempo real registros por QR
    this.pollingTimer = setInterval(() => {
      if (this.selectedAsambleaId && this.selectedAsamblea?.estado === 'EN_CURSO' && this.isOnline) {
        this.refrescarSilencioso();
      }
    }, 3000);
  }

  detenerAutoRefresco(): void {
    if (this.pollingTimer) {
      clearInterval(this.pollingTimer);
      this.pollingTimer = null;
    }
  }

  refrescarSilencioso(): void {
    if (!this.selectedAsambleaId) return;

    this.asistenciaService.obtenerPadron(this.selectedAsambleaId, true).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          // Actualizar en el mismo objeto sin re-renderizar toda la tabla si no hubo cambios
          const nuevos = res.data;
          let huboCambios = false;

          nuevos.forEach(nuevo => {
            const actual = this.padron.find(p => p.comuneroId === nuevo.comuneroId);
            if (actual && actual.estadoAsistencia !== nuevo.estadoAsistencia) {
              actual.estadoAsistencia = nuevo.estadoAsistencia;
              huboCambios = true;
            }
          });

          if (huboCambios || this.padron.length !== nuevos.length) {
            this.aplicarFiltro();
            this.actualizarQuorumSilencioso();
          }
        }
      }
    });
  }

  actualizarQuorumSilencioso(): void {
    if (!this.selectedAsambleaId) return;
    this.asistenciaService.calcularQuorum(this.selectedAsambleaId, true).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.quorumInfo = res.data;
        }
      }
    });
  }

  cargarAsambleas(): void {
    this.asambleaService.listar(0, 50).subscribe({
      next: (res) => {
          const todas = res.data.content;
          const activas = todas.filter(a => a.estado === 'EN_CURSO');
          const programadas = todas.filter(a => a.estado === 'PROGRAMADA');

          this.asambleas = activas.length > 0 ? activas : programadas;
          if (this.asambleas.length > 0) {
            this.selectedAsambleaId = this.asambleas[0].id;
            this.selectedAsamblea = this.asambleas[0];
          } else {
            this.selectedAsambleaId = null;
            this.selectedAsamblea = null;
          }
          if (this.selectedAsambleaId) {
            this.cargarPadronYQuorum();
          }
      }
    });
  }

  onAsambleaChange(): void {
    this.selectedAsamblea = this.asambleas.find(a => a.id === this.selectedAsambleaId) || null;
    this.cargarPadronYQuorum();
  }

  cargarPadronYQuorum(): void {
    if (!this.selectedAsambleaId) return;
    this.loading = true;

    this.asistenciaService.obtenerPadron(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.padron = res.data;
          this.aplicarFiltro();
        }
        this.actualizarQuorum();
      },
      error: () => {
        this.loading = false;
        // Si hay fallo de red, se mantiene el padrón local
        this.aplicarFiltro();
      }
    });
  }

  actualizarQuorum(): void {
    if (!this.selectedAsambleaId) return;
    this.asistenciaService.calcularQuorum(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.quorumInfo = res.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.recalcularQuorumLocal();
      }
    });
  }

  recalcularQuorumLocal(): void {
    if (!this.padron || this.padron.length === 0) return;
    const habilitados = this.padron.filter(p => p.condicionHabilitacion === 'HABILITADO').length;
    const presentes = this.padron.filter(p => p.estadoAsistencia === 'PRESENTE').length;
    const ausentes = this.padron.filter(p => p.estadoAsistencia === 'AUSENTE').length;
    const pct = habilitados > 0 ? Math.round((presentes * 100) / habilitados) : 0;
    const minPct = this.selectedAsamblea?.quorumMinimoPct || 50;
    const alcanzado = pct >= minPct;

    this.quorumInfo = {
      asambleaId: this.selectedAsambleaId!,
      asambleaTitulo: this.selectedAsamblea?.titulo || '',
      totalHabilitados: habilitados,
      asistentes: presentes,
      ausentes: ausentes,
      justificados: 0,
      porcentajeAsistencia: pct,
      quorumMinimoPct: minPct,
      quorumAlcanzado: alcanzado,
      estadoMensaje: alcanzado ? 'QUÓRUM ALCANZADO' : 'QUÓRUM NO ALCANZADO'
    };
  }

  iniciarAsamblea(): void {
    if (!this.selectedAsambleaId) return;
    this.asambleaService.cambiarEstado(this.selectedAsambleaId, 'EN_CURSO').subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Asamblea puesta EN CURSO. Asistencia habilitada.');
          if (this.selectedAsamblea) {
            this.selectedAsamblea.estado = 'EN_CURSO';
          }
          this.cargarAsambleas();
        }
      }
    });
  }

  marcarAsistencia(comunero: AsistenciaPadronDto, estado: string): void {
    if (!this.selectedAsambleaId) return;

    if (this.selectedAsamblea?.estado === 'FINALIZADA' || this.selectedAsamblea?.estado === 'CANCELADA') {
      this.notify.warning(`La asamblea se encuentra ${this.selectedAsamblea.estado}. No se permite registrar ni modificar asistencia.`);
      return;
    }

    // Actualización instantánea (Optimistic UI) para máxima velocidad de clic
    const estadoAnterior = comunero.estadoAsistencia;
    comunero.estadoAsistencia = estado;
    this.recalcularQuorumLocal();

    if (!this.isOnline) {
      // Guardar en cola offline
      this.offlineService.guardarOffline(
        this.selectedAsambleaId,
        comunero.comuneroId,
        estado,
        comunero.nombreCompleto
      );
      return;
    }

    // Guardado silencioso en segundo plano sin bloquear con notificaciones ni spinners
    this.asistenciaService.registrar(
      this.selectedAsambleaId,
      comunero.comuneroId,
      estado,
      undefined,
      true
    ).subscribe({
      next: (res) => {
        if (res.success) {
          this.actualizarQuorumSilencioso();
        }
      },
      error: () => {
        // En caso de fallo de red, recurrir a offline y avisar
        this.offlineService.guardarOffline(
          this.selectedAsambleaId!,
          comunero.comuneroId,
          estado,
          comunero.nombreCompleto
        );
        this.notify.warning(`Sin conexión: se guardó localmente para sincronizar luego.`);
      }
    });
  }

  onScanDni(): void {
    if (!this.scanDni || !this.selectedAsambleaId) return;

    if (this.selectedAsamblea?.estado === 'FINALIZADA' || this.selectedAsamblea?.estado === 'CANCELADA') {
      this.notify.warning(`La asamblea se encuentra ${this.selectedAsamblea.estado}. No se permite registrar asistencia.`);
      return;
    }

    const dniBuscado = this.scanDni.trim();

    if (!this.isOnline) {
      const comunero = this.padron.find(p => p.dni === dniBuscado || p.codigoComunero === dniBuscado);
      if (comunero) {
        this.marcarAsistencia(comunero, 'PRESENTE');
        this.scanDni = '';
      } else {
        this.notify.error(`DNI ${dniBuscado} no encontrado en el padrón local.`);
      }
      return;
    }

    this.asistenciaService.marcarRapida(this.selectedAsambleaId, dniBuscado, 'PRESENTE').subscribe({
      next: (res) => {
        if (res.success) {
          const comuneroNombre = res.data?.comuneroNombreCompleto || dniBuscado;
          this.notify.success(`✅ Asistencia registrada: ${comuneroNombre} marcado como PRESENTE`);
          this.scanDni = '';
          this.cargarPadronYQuorum();
        }
      },
      error: () => {
        // Intentar búsqueda local si falla
        const comunero = this.padron.find(p => p.dni === dniBuscado || p.codigoComunero === dniBuscado);
        if (comunero) {
          this.marcarAsistencia(comunero, 'PRESENTE');
          this.scanDni = '';
        } else {
          this.notify.error(`No se encontró comunero con DNI o código: ${dniBuscado}`);
        }
      }
    });
  }

  sincronizarAhora(): void {
    this.loading = true;
    this.offlineService.sincronizarPendientes(() => {
      this.loading = false;
      this.cargarPadronYQuorum();
    });
  }

  aplicarFiltro(): void {
    if (!this.filtroTexto) {
      this.padronFiltrado = [...this.padron];
      return;
    }
    const t = this.filtroTexto.toLowerCase().trim();
    this.padronFiltrado = this.padron.filter(p =>
      p.dni.toLowerCase().includes(t) ||
      p.codigoComunero.toLowerCase().includes(t) ||
      p.nombreCompleto.toLowerCase().includes(t)
    );
  }

  toggleModoAsamblea(): void {
    this.modoAsamblea = !this.modoAsamblea;
  }

  abrirQrDialog(): void {
    this.dialog.open(this.qrDialog, {
      width: '420px'
    });
  }

  get qrLinkDirecto(): string {
    if (!this.selectedAsambleaId) return '';
    const origin = window.location.origin;
    return `${origin}/registrar-asistencia?asambleaId=${this.selectedAsambleaId}`;
  }

  get qrUrl(): string {
    if (!this.selectedAsambleaId) return '';
    const link = this.qrLinkDirecto;
    return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(link)}`;
  }

  copiarQrLink(): void {
    const link = this.qrLinkDirecto;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).then(() => {
        this.notify.success('📋 Enlace del QR copiado al portapapeles');
      });
    } else {
      this.notify.info(`Enlace: ${link}`);
    }
  }

  probarQrLink(): void {
    if (this.qrLinkDirecto) {
      window.open(this.qrLinkDirecto, '_blank');
    }
  }

  navegarA(ruta: string): void {
    this.router.navigate([ruta]);
  }

  // --- Funcionalidades del Acta en Vivo y Firma Colectiva ---
  abrirCuadernoActa(): void {
    if (!this.selectedAsambleaId) return;
    this.cargarActaAsociada(() => {
      this.dialog.open(this.actaCuadernoDialog, {
        width: '650px'
      });
    });
  }

  cargarActaAsociada(callback?: () => void): void {
    if (!this.selectedAsambleaId) return;
    this.http.get<any>(`${environment.apiUrl}/actas/asamblea/${this.selectedAsambleaId}`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.actaAsociada = res.data;
          if (callback) callback();
        }
      },
      error: () => {
        this.notify.warning('El acta aún se está generando para esta asamblea.');
      }
    });
  }

  agregarAcuerdoEnVivo(): void {
    if (!this.nuevoAcuerdoTexto.trim() || !this.actaAsociada) return;
    this.guardandoAcuerdo = true;
    this.http.post<any>(`${environment.apiUrl}/actas/${this.actaAsociada.id}/acuerdos`, {
      descripcion: this.nuevoAcuerdoTexto.trim()
    }).subscribe({
      next: (res) => {
        this.guardandoAcuerdo = false;
        if (res.success && res.data) {
          this.actaAsociada = res.data;
          this.nuevoAcuerdoTexto = '';
          this.notify.success('✓ Acuerdo registrado en el acta');
        }
      },
      error: (err) => {
        this.guardandoAcuerdo = false;
        this.notify.error(err.error?.message || 'Error al guardar el acuerdo.');
      }
    });
  }

  eliminarAcuerdoEnVivo(acuerdoId: number): void {
    if (!this.actaAsociada) return;
    this.http.delete<any>(`${environment.apiUrl}/actas/${this.actaAsociada.id}/acuerdos/${acuerdoId}`).subscribe({
      next: () => {
        this.actaAsociada.acuerdos = this.actaAsociada.acuerdos.filter((a: any) => a.id !== acuerdoId);
        // Renumerar local
        this.actaAsociada.acuerdos.forEach((a: any, idx: number) => a.numero = idx + 1);
        this.notify.info('Acuerdo removido del acta');
      }
    });
  }

  abrirQrFirmaDialog(): void {
    if (!this.selectedAsambleaId) return;
    this.cargarActaAsociada(() => {
      this.dialog.open(this.qrFirmaDialog, {
        width: '450px'
      });
    });
  }

  get qrFirmaLinkDirecto(): string {
    if (!this.selectedAsambleaId) return '';
    const origin = window.location.origin;
    return `${origin}/firmar-acta?asambleaId=${this.selectedAsambleaId}`;
  }

  get qrFirmaUrl(): string {
    if (!this.selectedAsambleaId) return '';
    const link = this.qrFirmaLinkDirecto;
    return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(link)}`;
  }

  copiarQrFirmaLink(): void {
    const link = this.qrFirmaLinkDirecto;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).then(() => {
        this.notify.success('📋 Enlace de firma de acta copiado');
      });
    } else {
      this.notify.info(`Enlace: ${link}`);
    }
  }

  probarQrFirmaLink(): void {
    if (this.qrFirmaLinkDirecto) {
      window.open(this.qrFirmaLinkDirecto, '_blank');
    }
  }
}
