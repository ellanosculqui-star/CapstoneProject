import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RAFJE6SV.js";

// src/app/core/services/asistencia.service.ts
var AsistenciaService = class _AsistenciaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/asambleas`;
  }
  obtenerPadron(asambleaId) {
    return this.http.get(`${this.apiUrl}/${asambleaId}/asistencia/padron`);
  }
  registrar(asambleaId, comuneroId, estado, observacion) {
    return this.http.post(`${this.apiUrl}/${asambleaId}/asistencia`, {
      comuneroId,
      estado,
      observacion
    });
  }
  marcarRapida(asambleaId, identificador, estado = "PRESENTE") {
    let params = new HttpParams().set("identificador", identificador).set("estado", estado);
    return this.http.post(`${this.apiUrl}/${asambleaId}/asistencia/rapida`, {}, { params });
  }
  calcularQuorum(asambleaId) {
    return this.http.get(`${this.apiUrl}/${asambleaId}/asistencia/quorum`);
  }
  static {
    this.\u0275fac = function AsistenciaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsistenciaService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsistenciaService, factory: _AsistenciaService.\u0275fac, providedIn: "root" });
  }
};

export {
  AsistenciaService
};
//# sourceMappingURL=chunk-WLDF356K.js.map
