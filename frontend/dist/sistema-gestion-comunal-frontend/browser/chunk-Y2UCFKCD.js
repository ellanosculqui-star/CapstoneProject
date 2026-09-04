import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RAFJE6SV.js";

// src/app/core/services/comunero.service.ts
var ComuneroService = class _ComuneroService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/comuneros`;
  }
  listar(page = 0, size = 10, busqueda, sectorId, condicion, estado) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (busqueda)
      params = params.set("busqueda", busqueda);
    if (sectorId)
      params = params.set("sectorId", sectorId);
    if (condicion)
      params = params.set("condicion", condicion);
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
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  cambiarCondicion(id, condicion, motivo) {
    return this.http.patch(`${this.apiUrl}/${id}/condicion`, { condicion, motivo });
  }
  static {
    this.\u0275fac = function ComuneroService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComuneroService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ComuneroService, factory: _ComuneroService.\u0275fac, providedIn: "root" });
  }
};

export {
  ComuneroService
};
//# sourceMappingURL=chunk-Y2UCFKCD.js.map
