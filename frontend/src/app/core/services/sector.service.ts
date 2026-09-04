import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';

export interface SectorResponse {
  id: number;
  nombre: string;
  descripcion?: string;
  totalComuneros?: number;
}

export interface SectorRequest {
  nombre: string;
  descripcion?: string;
}

@Injectable({ providedIn: 'root' })
export class SectorService {
  private apiUrl = `${environment.apiUrl}/sectores`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ApiResponse<SectorResponse[]>> {
    return this.http.get<ApiResponse<SectorResponse[]>>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<ApiResponse<SectorResponse>> {
    return this.http.get<ApiResponse<SectorResponse>>(`${this.apiUrl}/${id}`);
  }

  crear(request: SectorRequest): Observable<ApiResponse<SectorResponse>> {
    return this.http.post<ApiResponse<SectorResponse>>(this.apiUrl, request);
  }

  actualizar(id: number, request: SectorRequest): Observable<ApiResponse<SectorResponse>> {
    return this.http.put<ApiResponse<SectorResponse>>(`${this.apiUrl}/${id}`, request);
  }

  eliminar(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }
}
