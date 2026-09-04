import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

export interface ResultadoVotacionDto {
  votosAFavor: number;
  votosEnContra: number;
  votosAbstencion: number;
  totalVotosEmitidos: number;
  porcentajeAFavor: number;
  porcentajeEnContra: number;
  porcentajeAbstencion: number;
  resultadoDecision: string; // 'APROBADA' | 'RECHAZADA' | 'EMPATE' | 'ELECTO: Nombre'
  votosPorCandidato?: { [candidato: string]: number };
  porcentajePorCandidato?: { [candidato: string]: number };
  candidatoGanador?: string;
}

export interface VotacionResponse {
  id: number;
  asambleaId: number;
  asambleaTitulo?: string;
  titulo: string;
  descripcion?: string;
  propuesta?: string;
  candidatos?: string[];
  tipo: 'MAYORIA_SIMPLE' | 'MAYORIA_CALIFICADA' | 'UNANIMIDAD' | 'ELECCION_REPRESENTANTE' | string;
  estado: 'BORRADOR' | 'ABIERTA' | 'CERRADA' | string;
  fechaApertura?: string;
  fechaCierre?: string;
  fechaCreacion?: string;
  resultado?: ResultadoVotacionDto;
  yaVotoUsuarioActual?: boolean;
}

export interface CrearVotacionRequest {
  titulo: string;
  descripcion?: string;
  propuesta: string;
  tipo: 'MAYORIA_SIMPLE' | 'MAYORIA_CALIFICADA' | 'UNANIMIDAD' | 'ELECCION_REPRESENTANTE' | string;
  candidatos?: string[];
}

export interface EmitirVotoRequest {
  comuneroId: number;
  opcion: 'A_FAVOR' | 'EN_CONTRA' | 'ABSTENCION' | 'CANDIDATO';
  candidatoElegido?: string;
}

@Injectable({ providedIn: 'root' })
export class VotacionService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  listarPorAsamblea(asambleaId: number): Observable<ApiResponse<VotacionResponse[]>> {
    return this.http.get<ApiResponse<VotacionResponse[]>>(`${this.apiUrl}/asambleas/${asambleaId}/votaciones`);
  }

  obtenerPorId(id: number): Observable<ApiResponse<VotacionResponse>> {
    return this.http.get<ApiResponse<VotacionResponse>>(`${this.apiUrl}/votaciones/${id}`);
  }

  crear(asambleaId: number, request: CrearVotacionRequest): Observable<ApiResponse<VotacionResponse>> {
    return this.http.post<ApiResponse<VotacionResponse>>(`${this.apiUrl}/asambleas/${asambleaId}/votaciones`, request);
  }

  abrir(id: number): Observable<ApiResponse<VotacionResponse>> {
    return this.http.patch<ApiResponse<VotacionResponse>>(`${this.apiUrl}/votaciones/${id}/abrir`, {});
  }

  cerrar(id: number): Observable<ApiResponse<VotacionResponse>> {
    return this.http.patch<ApiResponse<VotacionResponse>>(`${this.apiUrl}/votaciones/${id}/cerrar`, {});
  }

  emitirVoto(id: number, request: EmitirVotoRequest): Observable<ApiResponse<VotacionResponse>> {
    return this.http.post<ApiResponse<VotacionResponse>>(`${this.apiUrl}/votaciones/${id}/votar`, request);
  }
}
