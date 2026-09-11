import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';

export interface AsambleaResponse {
  id: number;
  titulo: string;
  agenda: string;
  tipo: string;
  fecha: string;
  horaInicio: string;
  horaFin?: string;
  lugar: string;
  estado: string;
  quorumMinimoPct: number;
  totalHabilitadosCorte?: number;
  totalAsistentes?: number;
  totalAusentes?: number;
  totalJustificados?: number;
  porcentajeAsistencia?: number;
  quorumAlcanzado?: boolean;
  multasGeneradas: boolean;
  fechaCreacion?: string;
  fechaModificacion?: string;
}

export interface AsambleaRequest {
  titulo: string;
  agenda: string;
  tipo: string;
  fecha: string;
  horaInicio: string;
  horaFin?: string;
  lugar: string;
  quorumMinimoPct?: number;
}

@Injectable({ providedIn: 'root' })
export class AsambleaService {
  private apiUrl = `${environment.apiUrl}/asambleas`;

  constructor(private http: HttpClient) {}

  listar(page = 0, size = 10, estado?: string): Observable<ApiResponse<PagedResponse<AsambleaResponse>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (estado) params = params.set('estado', estado);
    return this.http.get<ApiResponse<PagedResponse<AsambleaResponse>>>(this.apiUrl, { params });
  }

  obtenerPorId(id: number): Observable<ApiResponse<AsambleaResponse>> {
    return this.http.get<ApiResponse<AsambleaResponse>>(`${this.apiUrl}/${id}`);
  }

  crear(request: AsambleaRequest): Observable<ApiResponse<AsambleaResponse>> {
    return this.http.post<ApiResponse<AsambleaResponse>>(this.apiUrl, request);
  }

  actualizar(id: number, request: AsambleaRequest): Observable<ApiResponse<AsambleaResponse>> {
    return this.http.put<ApiResponse<AsambleaResponse>>(`${this.apiUrl}/${id}`, request);
  }

  cambiarEstado(id: number, estado: string, motivo?: string): Observable<ApiResponse<AsambleaResponse>> {
    return this.http.patch<ApiResponse<AsambleaResponse>>(`${this.apiUrl}/${id}/estado`, { estado, motivo });
  }

  eliminar(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }
}
