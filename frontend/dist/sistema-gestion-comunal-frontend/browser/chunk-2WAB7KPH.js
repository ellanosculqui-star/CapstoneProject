import {
  ɵɵdefinePipe
} from "./chunk-RAFJE6SV.js";

// src/app/shared/pipes/soles.pipe.ts
var SolesPipe = class _SolesPipe {
  transform(value) {
    if (value === null || value === void 0)
      return "S/ 0.00";
    const num = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(num))
      return "S/ 0.00";
    return `S/ ${num.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  static {
    this.\u0275fac = function SolesPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SolesPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "soles", type: _SolesPipe, pure: true, standalone: true });
  }
};

export {
  SolesPipe
};
//# sourceMappingURL=chunk-2WAB7KPH.js.map
