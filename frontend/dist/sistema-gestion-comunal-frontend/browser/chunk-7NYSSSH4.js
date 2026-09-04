import {
  ɵɵdefinePipe
} from "./chunk-NVPU2YFC.js";

// src/app/shared/pipes/estado-badge.pipe.ts
var EstadoBadgePipe = class _EstadoBadgePipe {
  transform(estado) {
    if (!estado)
      return { label: "N/A", cssClass: "badge-secondary" };
    switch (estado) {
      case "ACTIVO":
      case "HABILITADO":
      case "PRESENTE":
      case "PAGADA":
      case "APROBADA":
      case "CUMPLIDO":
        return { label: estado, cssClass: "badge-success" };
      case "INACTIVO":
      case "INHABILITADO":
      case "AUSENTE":
      case "PENDIENTE":
      case "CANCELADA":
      case "RECHAZADA":
        return { label: estado, cssClass: "badge-danger" };
      case "JUSTIFICADO":
      case "PROGRAMADA":
      case "BORRADOR":
      case "EN_PROCESO":
        return { label: estado, cssClass: "badge-warning" };
      case "EN_CURSO":
      case "ABIERTA":
      case "FINALIZADA":
      case "CERRADA":
        return { label: estado, cssClass: "badge-info" };
      default:
        return { label: estado, cssClass: "badge-secondary" };
    }
  }
  static {
    this.\u0275fac = function EstadoBadgePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EstadoBadgePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "estadoBadge", type: _EstadoBadgePipe, pure: true, standalone: true });
  }
};

export {
  EstadoBadgePipe
};
//# sourceMappingURL=chunk-7NYSSSH4.js.map
