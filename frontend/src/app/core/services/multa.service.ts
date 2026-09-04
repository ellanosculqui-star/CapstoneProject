import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';

export interface MultaResponse {
  id: number;
  comuneroId: number;
  comuneroNombreCompleto: string;
  comuneroDni: string;
  asambleaId: number;
  asambleaTitulo: string;
  montoOriginal: number;
  saldoPendiente: number;
  estado: string;
  fechaEmision: string;
  motivo?: string;
}

export interface PagoMultaResponse {
  id: number;
  multaId: number;
  montoPagado: number;
  fechaPago: string;
  numeroRecibo: string;
  metodoPago: string;
  observacion?: string;
}

export interface RegistrarPagoRequest {
  montoPagado: number;
  metodoPago: string;
  observacion?: string;
}

@Injectable({ providedIn: 'root' })
export class MultaService {
  private apiUrl = `${environment.apiUrl}/multas`;

  constructor(private http: HttpClient) {}

  listar(page = 0, size = 10, comuneroId?: number, estado?: string): Observable<ApiResponse<PagedResponse<MultaResponse>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (comuneroId) params = params.set('comuneroId', comuneroId);
    if (estado) params = params.set('estado', estado);
    return this.http.get<ApiResponse<PagedResponse<MultaResponse>>>(this.apiUrl, { params });
  }

  obtenerPorId(id: number): Observable<ApiResponse<MultaResponse>> {
    return this.http.get<ApiResponse<MultaResponse>>(`${this.apiUrl}/${id}`);
  }

  generarPorInasistencia(asambleaId: number): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/generar/${asambleaId}`, {});
  }

  registrarPago(multaId: number, request: RegistrarPagoRequest): Observable<ApiResponse<PagoMultaResponse>> {
    return this.http.post<ApiResponse<PagoMultaResponse>>(`${this.apiUrl}/${multaId}/pagos`, request);
  }

  obtenerEstadoCuenta(comuneroId: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/comunero/${comuneroId}/estado-cuenta`);
  }

  resumenFinanciero(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/resumen-financiero`);
  }
}
