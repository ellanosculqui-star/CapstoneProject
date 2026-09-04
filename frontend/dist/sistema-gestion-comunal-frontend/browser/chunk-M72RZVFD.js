import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RAFJE6SV.js";

// src/app/core/services/asamblea.service.ts
var AsambleaService = class _AsambleaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/asambleas`;
  }
  listar(page = 0, size = 10, estado) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (estado)
      params = params.set("estado", estado);
    return this.http.get(this.apiUrl, { params });
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  crear(request) {
    return this.http.post(this.apiUrl, request);
  }
  actualizar(id, request) {
    return this.http.put(`${this.apiUrl}/${id}`, request);
  }
  cambiarEstado(id, estado, motivo) {
    return this.http.patch(`${this.apiUrl}/${id}/estado`, { estado, motivo });
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function AsambleaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsambleaService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsambleaService, factory: _AsambleaService.\u0275fac, providedIn: "root" });
  }
};

export {
  AsambleaService
};
//# sourceMappingURL=chunk-M72RZVFD.js.map
