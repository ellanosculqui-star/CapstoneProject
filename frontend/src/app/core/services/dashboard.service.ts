import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { PrediccionQuorum } from './prediccion.service';

export interface AlertaItem {
  id: string;
  tipo: 'QUORUM' | 'MULTAS' | 'ACUERDOS' | 'PARTICIPACION' | string;
  nivel: 'DANGER' | 'WARNING' | 'INFO' | 'SUCCESS';
  titulo: string;
  mensaje: string;
  accionUrl?: string;
  accionTexto?: string;
}

export interface HistorialAsistenciaItem {
  asambleaId: number;
  asambleaTitulo: string;
  fecha: string;
  asistentes: number;
  ausentes: number;
  habilitados: number;
  porcentajeAsistencia: number;
  quorumAlcanzado: boolean;
}

export interface DashboardStats {
  totalComuneros: number;
  comunerosHabilitados: number;
  comunerosInhabilitados: number;
  comunerosInactivos: number;
  totalAsambleas: number;
  asambleasFinalizadas: number;
  asambleasProgramadas: number;
  proximaAsamblea?: any;
  ultimaAsamblea?: any;
  quorumUltimaAsamblea?: any;
  totalMultasPendientes: number;
  totalMultasRecaudadas: number;
  cantidadMultasPendientes: number;
  totalActasRegistradas: number;
  historialAsistencias?: HistorialAsistenciaItem[];
  prediccionProxima?: PrediccionQuorum;
  alertas?: AlertaItem[];
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private apiUrl = `${environment.apiUrl}/dashboard`;

  constructor(private http: HttpClient) {}

  getStats(): Observable<ApiResponse<DashboardStats>> {
    return this.http.get<ApiResponse<DashboardStats>>(`${this.apiUrl}/resumen`);
  }
}
