import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';

export interface ComuneroResponse {
  id: number;
  codigoComunero: string;
  numeroPadron?: string;
  dni: string;
  nombres: string;
  apellidos: string;
  nombreCompleto: string;
  fechaNacimiento?: string;
  estadoCivil?: 'SOLTERO' | 'CASADO' | 'CONVIVIENTE' | 'VIUDO' | 'DIVORCIADO' | string;
  ocupacion?: string;
  tipoComunero?: 'CALIFICADO' | 'NO_CALIFICADO' | string;
  telefono?: string;
  direccion?: string;
  fotoUrl?: string;
  caserio?: string;
  sectorId?: number;
  sectorNombre?: string;
  condicionHabilitacion?: string;
  estado: 'ACTIVO' | 'INACTIVO' | 'SUSPENDIDO' | 'RETIRADO' | 'FALLECIDO' | string;
  fechaIncorporacion?: string;
  motivoInhabilitacion?: string;
  totalDeudaPendiente?: number;
  totalAsistencias?: number;
  totalInasistencias?: number;
  observaciones?: string;
}

export interface ComuneroRequest {
  codigoComunero?: string;
  numeroPadron?: string;
  dni: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento?: string;
  estadoCivil?: string;
  ocupacion?: string;
  tipoComunero?: string;
  telefono?: string;
  direccion?: string;
  fotoUrl?: string;
  caserio?: string;
  sectorId?: number;
  fechaIncorporacion?: string;
  condicionHabilitacion?: string;
  estado?: string;
  motivoInhabilitacion?: string;
  observaciones?: string;
}

@Injectable({ providedIn: 'root' })
export class ComuneroService {
  private apiUrl = `${environment.apiUrl}/comuneros`;

  constructor(private http: HttpClient) {}

  listar(page = 0, size = 10, busqueda?: string, sectorId?: number, condicion?: string, estado?: string): Observable<ApiResponse<PagedResponse<ComuneroResponse>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (busqueda) params = params.set('busqueda', busqueda);
    if (sectorId) params = params.set('sectorId', sectorId);
    if (condicion) params = params.set('condicion', condicion);
    if (estado) params = params.set('estado', estado);
    return this.http.get<ApiResponse<PagedResponse<ComuneroResponse>>>(this.apiUrl, { params });
  }

  obtenerPorId(id: number): Observable<ApiResponse<ComuneroResponse>> {
    return this.http.get<ApiResponse<ComuneroResponse>>(`${this.apiUrl}/${id}`);
  }

  crear(request: ComuneroRequest): Observable<ApiResponse<ComuneroResponse>> {
    return this.http.post<ApiResponse<ComuneroResponse>>(this.apiUrl, request);
  }

  actualizar(id: number, request: ComuneroRequest): Observable<ApiResponse<ComuneroResponse>> {
    return this.http.put<ApiResponse<ComuneroResponse>>(`${this.apiUrl}/${id}`, request);
  }

  eliminar(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }

  cambiarCondicion(id: number, condicion: string, motivo?: string): Observable<ApiResponse<ComuneroResponse>> {
    return this.http.patch<ApiResponse<ComuneroResponse>>(`${this.apiUrl}/${id}/condicion`, { condicion, motivo });
  }
}
