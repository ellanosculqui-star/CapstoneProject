import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

export interface QuorumResponse {
  asambleaId: number;
  asambleaTitulo: string;
  totalHabilitados: number;
  asistentes: number;
  ausentes: number;
  justificados: number;
  porcentajeAsistencia: number;
  quorumMinimoPct: number;
  quorumAlcanzado: boolean;
  estadoMensaje: string;
}

export interface AsistenciaPadronDto {
  comuneroId: number;
  codigoComunero: string;
  dni: string;
  nombreCompleto: string;
  sectorNombre?: string;
  condicionHabilitacion: string;
  asistenciaId?: number;
  estadoAsistencia?: string;
  fechaHoraRegistro?: string;
  observacion?: string;
}

@Injectable({ providedIn: 'root' })
export class AsistenciaService {
  private apiUrl = `${environment.apiUrl}/asambleas`;

  constructor(private http: HttpClient) {}

  obtenerPadron(asambleaId: number, silent = false): Observable<ApiResponse<AsistenciaPadronDto[]>> {
    let headers = new HttpHeaders();
    if (silent) {
      headers = headers.set('X-Silent', 'true');
    }
    return this.http.get<ApiResponse<AsistenciaPadronDto[]>>(`${this.apiUrl}/${asambleaId}/asistencia/padron`, { headers });
  }

  registrar(asambleaId: number, comuneroId: number, estado: string, observacion?: string, silent = false): Observable<ApiResponse<any>> {
    let headers = new HttpHeaders();
    if (silent) {
      headers = headers.set('X-Silent', 'true');
    }
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/${asambleaId}/asistencia`, {
      comuneroId,
      estado,
      observacion
    }, { headers });
  }

  marcarRapida(asambleaId: number, identificador: string, estado = 'PRESENTE'): Observable<ApiResponse<any>> {
    let params = new HttpParams().set('identificador', identificador).set('estado', estado);
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/${asambleaId}/asistencia/rapida`, {}, { params });
  }

  calcularQuorum(asambleaId: number, silent = false): Observable<ApiResponse<QuorumResponse>> {
    let headers = new HttpHeaders();
    if (silent) {
      headers = headers.set('X-Silent', 'true');
    }
    return this.http.get<ApiResponse<QuorumResponse>>(`${this.apiUrl}/${asambleaId}/asistencia/quorum`, { headers });
  }
}
