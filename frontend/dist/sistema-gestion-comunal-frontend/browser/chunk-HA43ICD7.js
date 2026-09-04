import {
  AuthService
} from "./chunk-2U7HEYPH.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-PEKNYEHS.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-HQBFUF2C.js";
import "./chunk-GO5N7W3Y.js";
import {
  NotificationService
} from "./chunk-CLG3ONYS.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-FEQHF24J.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IS22GETV.js";
import "./chunk-6V3W7KQ5.js";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardModule
} from "./chunk-W26YCSNH.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-JXQRCCZC.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RAFJE6SV.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El usuario es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "M\xEDnimo 3 caracteres");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La contrase\xF1a es obligatoria");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_spinner_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 25);
  }
}
function LoginComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon");
    \u0275\u0275text(2, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Iniciar Sesi\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Autenticando...");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, authService, router, route, notify) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.notify = notify;
    this.loading = false;
    this.hidePassword = true;
    this.returnUrl = "/dashboard";
  }
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["/dashboard"]);
      return;
    }
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const { username, password } = this.loginForm.value;
    this.authService.login({ username, password }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.notify.success(`Bienvenido, ${res.data.nombres}!`);
          this.router.navigateByUrl(this.returnUrl);
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get usernameCtrl() {
    return this.loginForm.get("username");
  }
  get passwordCtrl() {
    return this.loginForm.get("password");
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 83, vars: 13, consts: [[1, "login-page"], [1, "login-container"], [1, "branding-panel"], [1, "brand-content"], [1, "brand-icon-wrapper"], [1, "brand-icon"], [1, "brand-title"], [1, "brand-subtitle"], [1, "feature-list"], [1, "feature-item"], [1, "form-panel"], [1, "login-card"], [1, "login-header"], ["autocomplete", "off", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-100"], ["matPrefix", ""], ["matInput", "", "formControlName", "username", "placeholder", "Ingrese su nombre de usuario", "autocomplete", "username", 3, "disabled"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "placeholder", "Ingrese su contrase\xF1a", "autocomplete", "current-password", 3, "type", "disabled"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "w-100", "login-btn", 3, "disabled"], ["diameter", "20", "class", "spinner-inline", 4, "ngIf"], [1, "credentials-hint"], [1, "credential-chips"], [1, "chip"], ["diameter", "20", 1, "spinner-inline"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon", 5);
        \u0275\u0275text(6, "account_balance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 6);
        \u0275\u0275text(8, "Sistema de Gesti\xF3n Comunal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, "Digitalizaci\xF3n y automatizaci\xF3n de la gesti\xF3n de asambleas de comunidades campesinas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "mat-icon");
        \u0275\u0275text(14, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "Padr\xF3n de comuneros digital");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "mat-icon");
        \u0275\u0275text(19, "fact_check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "Control de asistencia en tiempo real");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "mat-icon");
        \u0275\u0275text(24, "how_to_vote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26, "Votaciones con resultados instant\xE1neos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 9)(28, "mat-icon");
        \u0275\u0275text(29, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "Gesti\xF3n de multas y recaudaci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 9)(33, "mat-icon");
        \u0275\u0275text(34, "description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36, "Actas digitales con firma y aprobaci\xF3n");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(37, "div", 10)(38, "mat-card", 11)(39, "mat-card-header")(40, "div", 12)(41, "h2");
        \u0275\u0275text(42, "Iniciar Sesi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "Ingrese sus credenciales para acceder al sistema");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "mat-card-content")(46, "form", 13);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_46_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(47, "mat-form-field", 14)(48, "mat-label");
        \u0275\u0275text(49, "Usuario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-icon", 15);
        \u0275\u0275text(51, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "input", 16);
        \u0275\u0275template(53, LoginComponent_mat_error_53_Template, 2, 0, "mat-error", 17)(54, LoginComponent_mat_error_54_Template, 2, 0, "mat-error", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-form-field", 14)(56, "mat-label");
        \u0275\u0275text(57, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-icon", 15);
        \u0275\u0275text(59, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "input", 18);
        \u0275\u0275elementStart(61, "button", 19);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_61_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(62, "mat-icon");
        \u0275\u0275text(63);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(64, LoginComponent_mat_error_64_Template, 2, 0, "mat-error", 17)(65, LoginComponent_mat_error_65_Template, 2, 0, "mat-error", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "button", 20);
        \u0275\u0275template(67, LoginComponent_mat_spinner_67_Template, 1, 0, "mat-spinner", 21)(68, LoginComponent_span_68_Template, 4, 0, "span", 17)(69, LoginComponent_span_69_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "mat-card-footer")(71, "div", 22)(72, "p");
        \u0275\u0275text(73, "Cuentas de prueba disponibles:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 23)(75, "span", 24);
        \u0275\u0275text(76, "admin / admin123");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 24);
        \u0275\u0275text(78, "presidente / presi123");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "span", 24);
        \u0275\u0275text(80, "secretario / secre123");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "span", 24);
        \u0275\u0275text(82, "tesorero / teso123");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(46);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.usernameCtrl == null ? null : ctx.usernameCtrl.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.usernameCtrl == null ? null : ctx.usernameCtrl.hasError("minlength"));
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text")("disabled", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.passwordCtrl == null ? null : ctx.passwordCtrl.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.passwordCtrl == null ? null : ctx.passwordCtrl.hasError("minlength"));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatFormFieldModule, MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 50%,\n      #0f172a 100%);\n  display: flex;\n  align-items: stretch;\n}\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n}\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-icon-wrapper[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-icon-wrapper[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: white;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #f1f5f9;\n  margin: 0 0 12px;\n  line-height: 1.2;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 36px;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #cbd5e1;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.login-container[_ngcontent-%COMP%]   .branding-panel[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%] {\n  width: 480px;\n  background: #f4f6f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px;\n}\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12) !important;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%] {\n  padding: 8px 0 16px;\n  text-align: center;\n  width: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 6px;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 8px 16px 0 !important;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  height: 48px;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 10px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .spinner-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .credentials-hint[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  border-radius: 0 0 16px 16px;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .credentials-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0 0 8px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .credentials-hint[_ngcontent-%COMP%]   .credential-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.login-container[_ngcontent-%COMP%]   .form-panel[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .credentials-hint[_ngcontent-%COMP%]   .credential-chips[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 30 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-HA43ICD7.js.map
