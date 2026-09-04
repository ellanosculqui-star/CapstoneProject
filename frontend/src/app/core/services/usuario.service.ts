import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';

export interface UsuarioDto {
  id: number;
  username: string;
  nombres: string;
  apellidos: string;
  email?: string;
  rol: string;
  activo: boolean;
}

export interface RegisterUserRequest {
  username: string;
  password: string;
  nombres: string;
  apellidos: string;
  email?: string;
  rol: string;
}

export interface CambiarRolRequest {
  rol: string;
}

export interface ChangePasswordRequest {
  currentPassword?: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  listar(page = 0, size = 20): Observable<ApiResponse<PagedResponse<UsuarioDto>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<PagedResponse<UsuarioDto>>>(this.apiUrl, { params });
  }

  obtenerPorId(id: number): Observable<ApiResponse<UsuarioDto>> {
    return this.http.get<ApiResponse<UsuarioDto>>(`${this.apiUrl}/${id}`);
  }

  crear(request: RegisterUserRequest): Observable<ApiResponse<UsuarioDto>> {
    return this.http.post<ApiResponse<UsuarioDto>>(this.apiUrl, request);
  }

  cambiarRol(id: number, rol: string): Observable<ApiResponse<UsuarioDto>> {
    return this.http.patch<ApiResponse<UsuarioDto>>(`${this.apiUrl}/${id}/rol`, { rol });
  }

  activar(id: number): Observable<ApiResponse<UsuarioDto>> {
    return this.http.patch<ApiResponse<UsuarioDto>>(`${this.apiUrl}/${id}/activar`, {});
  }

  desactivar(id: number): Observable<ApiResponse<UsuarioDto>> {
    return this.http.patch<ApiResponse<UsuarioDto>>(`${this.apiUrl}/${id}/desactivar`, {});
  }

  cambiarPassword(id: number, request: ChangePasswordRequest): Observable<ApiResponse<void>> {
    return this.http.patch<ApiResponse<void>>(`${this.apiUrl}/${id}/password`, request);
  }
}
