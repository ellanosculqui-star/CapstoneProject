import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';

export interface AuditoriaDto {
  id: number;
  fechaHora: string;
  username: string;
  accion: string;
  entidad: string;
  entidadId?: number;
  descripcion?: string;
  ipOrigen?: string;
  userAgent?: string;
}

@Injectable({ providedIn: 'root' })
export class AuditoriaService {
  private apiUrl = `${environment.apiUrl}/auditoria`;

  constructor(private http: HttpClient) {}

  listar(
    page = 0,
    size = 20,
    username?: string,
    accion?: string,
    fechaInicio?: string,
    fechaFin?: string
  ): Observable<ApiResponse<PagedResponse<AuditoriaDto>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (username) params = params.set('username', username);
    if (accion)   params = params.set('accion', accion);
    if (fechaInicio) params = params.set('fechaInicio', fechaInicio);
    if (fechaFin)    params = params.set('fechaFin', fechaFin);
    return this.http.get<ApiResponse<PagedResponse<AuditoriaDto>>>(this.apiUrl, { params });
  }
}
