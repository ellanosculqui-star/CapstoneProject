import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-RAFJE6SV.js";

// src/app/core/services/loading.service.ts
var LoadingService = class _LoadingService {
  constructor() {
    this.loadingSubject = new BehaviorSubject(false);
    this.loading$ = this.loadingSubject.asObservable();
    this.requestCount = 0;
  }
  show() {
    this.requestCount++;
    this.loadingSubject.next(true);
  }
  hide() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.loadingSubject.next(false);
    }
  }
  static {
    this.\u0275fac = function LoadingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
  }
};

export {
  LoadingService
};
//# sourceMappingURL=chunk-BN3C26DI.js.map
