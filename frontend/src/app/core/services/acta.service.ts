import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';

export interface ActaResponse {
  id: number;
  numeroActa: string;
  asambleaId: number;
  asambleaTitulo: string;
  fecha: string;
  lugar: string;
  agenda: string;
  resumen?: string;
  observaciones?: string;
  estado: string;
  creadoPor?: string;
  fechaCreacion?: string;
  acuerdos?: AcuerdoDto[];
}

export interface AcuerdoDto {
  id?: number;
  descripcion: string;
  responsable?: string;
  fechaLimite?: string;
  estado?: string;
}

export interface ActaRequest {
  asambleaId: number;
  numeroActa: string;
  fecha: string;
  lugar: string;
  agenda: string;
  resumen?: string;
  observaciones?: string;
  acuerdos?: AcuerdoDto[];
}

@Injectable({ providedIn: 'root' })
export class ActaService {
  private apiUrl = `${environment.apiUrl}/actas`;

  constructor(private http: HttpClient) {}

  listar(page = 0, size = 10, estado?: string): Observable<ApiResponse<PagedResponse<ActaResponse>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (estado) params = params.set('estado', estado);
    return this.http.get<ApiResponse<PagedResponse<ActaResponse>>>(this.apiUrl, { params });
  }

  obtenerPorId(id: number): Observable<ApiResponse<ActaResponse>> {
    return this.http.get<ApiResponse<ActaResponse>>(`${this.apiUrl}/${id}`);
  }

  obtenerPorAsamblea(asambleaId: number): Observable<ApiResponse<ActaResponse[]>> {
    return this.http.get<ApiResponse<ActaResponse[]>>(`${this.apiUrl}/asamblea/${asambleaId}`);
  }

  borradorAutomatico(asambleaId: number): Observable<ApiResponse<Partial<ActaRequest>>> {
    return this.http.get<ApiResponse<Partial<ActaRequest>>>(`${this.apiUrl}/asamblea/${asambleaId}/borrador-automatico`);
  }

  crear(request: ActaRequest): Observable<ApiResponse<ActaResponse>> {
    return this.http.post<ApiResponse<ActaResponse>>(this.apiUrl, request);
  }

  aprobar(id: number): Observable<ApiResponse<ActaResponse>> {
    return this.http.patch<ApiResponse<ActaResponse>>(`${this.apiUrl}/${id}/aprobar`, {});
  }

  eliminar(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }
}
