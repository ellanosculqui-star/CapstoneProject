import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsistenciaService } from './asistencia.service';
import { NotificationService } from './notification.service';

export interface AsistenciaOfflineItem {
  id: string; // UUID local
  asambleaId: number;
  comuneroId: number;
  nombreComunero?: string;
  estado: string; // "PRESENTE", "AUSENTE", "JUSTIFICADO"
  fechaHora: string;
  sincronizado: boolean;
  error?: string;
}

const STORAGE_KEY = 'ASISTENCIA_OFFLINE_QUEUE_V1';

@Injectable({ providedIn: 'root' })
export class OfflineAsistenciaService {
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  public isOnline$ = this.isOnlineSubject.asObservable();

  private pendingQueueSubject = new BehaviorSubject<AsistenciaOfflineItem[]>([]);
  public pendingQueue$ = this.pendingQueueSubject.asObservable();

  constructor(
    private asistenciaService: AsistenciaService,
    private notify: NotificationService
  ) {
    this.cargarCola();

    window.addEventListener('online', () => {
      this.isOnlineSubject.next(true);
      this.notify.info('Conexión reestablecida. Procediendo a sincronizar registros pendientes...');
      this.sincronizarPendientes();
    });

    window.addEventListener('offline', () => {
      this.isOnlineSubject.next(false);
      this.notify.warning('Sin conexión a internet. El sistema operará en MODO OFFLINE guardando localmente.');
    });
  }

  get isOnline(): boolean {
    return this.isOnlineSubject.value;
  }

  get pendingCount(): number {
    return this.pendingQueueSubject.value.length;
  }

  guardarOffline(asambleaId: number, comuneroId: number, estado: string, nombreComunero?: string): AsistenciaOfflineItem {
    const item: AsistenciaOfflineItem = {
      id: 'OFF-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      asambleaId,
      comuneroId,
      nombreComunero,
      estado,
      fechaHora: new Date().toISOString(),
      sincronizado: false
    };

    const colaActual = this.pendingQueueSubject.value;
    // Evitar duplicados del mismo comunero en la misma asamblea
    const index = colaActual.findIndex(c => c.asambleaId === asambleaId && c.comuneroId === comuneroId);
    if (index >= 0) {
      colaActual[index] = item;
    } else {
      colaActual.push(item);
    }

    this.guardarEnStorage(colaActual);
    this.pendingQueueSubject.next(colaActual);
    return item;
  }

  sincronizarPendientes(callback?: (exitosos: number, fallidos: number) => void): void {
    const pendientes = [...this.pendingQueueSubject.value];
    if (pendientes.length === 0) {
      if (callback) callback(0, 0);
      return;
    }

    let completados = 0;
    let exitosos = 0;
    let fallidos = 0;
    const restantes: AsistenciaOfflineItem[] = [];

    pendientes.forEach(item => {
      this.asistenciaService.registrar(item.asambleaId, item.comuneroId, item.estado).subscribe({
        next: (res) => {
          completados++;
          if (res.success) {
            exitosos++;
          } else {
            fallidos++;
            restantes.push(item);
          }
          this.verificarFinSincronizacion(completados, pendientes.length, exitosos, fallidos, restantes, callback);
        },
        error: () => {
          completados++;
          fallidos++;
          restantes.push(item);
          this.verificarFinSincronizacion(completados, pendientes.length, exitosos, fallidos, restantes, callback);
        }
      });
    });
  }

  private verificarFinSincronizacion(
    completados: number,
    total: number,
    exitosos: number,
    fallidos: number,
    restantes: AsistenciaOfflineItem[],
    callback?: (exitosos: number, fallidos: number) => void
  ): void {
    if (completados >= total) {
      this.guardarEnStorage(restantes);
      this.pendingQueueSubject.next(restantes);

      if (exitosos > 0) {
        this.notify.success(`Sincronización completada: ${exitosos} asistencias guardadas en el servidor.`);
      }
      if (fallidos > 0) {
        this.notify.warning(`${fallidos} registros quedaron pendientes por error de red.`);
      }
      if (callback) callback(exitosos, fallidos);
    }
  }

  private cargarCola(): void {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        this.pendingQueueSubject.next(JSON.parse(data));
      }
    } catch {
      this.pendingQueueSubject.next([]);
    }
  }

  private guardarEnStorage(cola: AsistenciaOfflineItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cola));
    } catch (e) {
      console.error('Error al guardar cola offline', e);
    }
  }
}
