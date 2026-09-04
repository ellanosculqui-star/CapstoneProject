import {
  Router
} from "./chunk-PEKNYEHS.js";
import {
  BehaviorSubject,
  HttpClient,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RAFJE6SV.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = `${environment.apiUrl}/auth`;
    this.currentUserSubject = new BehaviorSubject(this.getUserFromStorage());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  get token() {
    return localStorage.getItem("token");
  }
  isAuthenticated() {
    return !!this.token;
  }
  hasRole(roles) {
    const user = this.currentUserValue;
    if (!user || !user.rol)
      return false;
    return roles.includes(user.rol);
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(tap((res) => {
      if (res.success && res.data) {
        const user = {
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
          nombres: res.data.nombres,
          apellidos: res.data.apellidos,
          rol: res.data.rol,
          token: res.data.token
        };
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
    }));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.currentUserSubject.next(null);
    this.router.navigate(["/auth/login"]);
  }
  cambiarPassword(data) {
    return this.http.post(`${this.apiUrl}/cambiar-password`, data);
  }
  getUserFromStorage() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-2U7HEYPH.js.map
