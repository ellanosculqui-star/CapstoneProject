import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

export interface PrediccionQuorum {
  asambleaId?: number;
  asambleaTitulo?: string;
  fecha?: string;
  totalHabilitados: number;
  asistenciaEstimada: number;
  porcentajeEstimado: number;
  quorumRequeridoPct: number;
  quorumRequeridoVotos: number;
  probabilidadQuorumPct: number;
  nivelRiesgo: 'BAJO' | 'MEDIO' | 'ALTO';
  mensajeRecomendacion: string;
  versionModelo: string;
  factoresAnalisis: string[];
}

@Injectable({ providedIn: 'root' })
export class PrediccionService {
  private apiUrl = `${environment.apiUrl}/predicciones`;

  constructor(private http: HttpClient) {}

  predecirProximaAsamblea(): Observable<ApiResponse<PrediccionQuorum>> {
    return this.http.get<ApiResponse<PrediccionQuorum>>(`${this.apiUrl}/proxima-asamblea`);
  }

  predecirPorAsamblea(asambleaId: number): Observable<ApiResponse<PrediccionQuorum>> {
    return this.http.get<ApiResponse<PrediccionQuorum>>(`${this.apiUrl}/asamblea/${asambleaId}`);
  }
}
