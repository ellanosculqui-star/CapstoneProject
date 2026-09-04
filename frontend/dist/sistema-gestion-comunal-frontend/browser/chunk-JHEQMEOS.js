import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-AFNCRAGG.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-D7XIIXT7.js";
import "./chunk-MVFAH5SO.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-OQ4BSNZS.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-BHVE2TS7.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-HQBFUF2C.js";
import "./chunk-GO5N7W3Y.js";
import {
  NotificationService
} from "./chunk-CLG3ONYS.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-XYNR5DL5.js";
import "./chunk-MDVRMOSI.js";
import "./chunk-DORXTRN2.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-FEQHF24J.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IS22GETV.js";
import "./chunk-6V3W7KQ5.js";
import {
  PageHeaderComponent
} from "./chunk-TR7KNON3.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-W26YCSNH.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption
} from "./chunk-JXQRCCZC.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-RAFJE6SV.js";
import "./chunk-TXDUYLVM.js";

// src/app/core/services/usuario.service.ts
var UsuarioService = class _UsuarioService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/usuarios`;
  }
  listar(page = 0, size = 20) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(this.apiUrl, { params });
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  crear(request) {
    return this.http.post(this.apiUrl, request);
  }
  cambiarRol(id, rol) {
    return this.http.patch(`${this.apiUrl}/${id}/rol`, { rol });
  }
  activar(id) {
    return this.http.patch(`${this.apiUrl}/${id}/activar`, {});
  }
  desactivar(id) {
    return this.http.patch(`${this.apiUrl}/${id}/desactivar`, {});
  }
  cambiarPassword(id, request) {
    return this.http.patch(`${this.apiUrl}/${id}/password`, request);
  }
  static {
    this.\u0275fac = function UsuarioService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsuarioService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuarioService, factory: _UsuarioService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/usuarios/usuarios.component.ts
var _c0 = ["usuarioFormDialog"];
var _c1 = ["passwordDialog"];
var _c2 = () => [10, 20, 50];
function UsuariosComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Usuario");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r2.username);
  }
}
function UsuariosComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Nombres y Apellidos");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", element_r3.nombres, " ", element_r3.apellidos, "");
  }
}
function UsuariosComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.email || "-");
  }
}
function UsuariosComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Rol Asignado");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.rolLabel(element_r5.rol));
  }
}
function UsuariosComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(element_r7.activo ? "badge badge-success" : "badge badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r7.activo ? "ACTIVO" : "INACTIVO", " ");
  }
}
function UsuariosComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 22)(1, "button", 24);
    \u0275\u0275listener("click", function UsuariosComponent_td_25_Template_button_click_1_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleEstado(element_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 25);
    \u0275\u0275listener("click", function UsuariosComponent_td_25_Template_button_click_4_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.abrirCambiarPassword(element_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "lock_reset");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", element_r9.activo ? "warn" : "primary")("matTooltip", element_r9.activo ? "Desactivar usuario" : "Activar usuario");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r9.activo ? "person_off" : "person");
  }
}
function UsuariosComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function UsuariosComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function UsuariosComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 29);
    \u0275\u0275text(2, " No hay usuarios registrados. ");
    \u0275\u0275elementEnd()();
  }
}
function UsuariosComponent_ng_template_30_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requerido");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_ng_template_30_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "M\xEDnimo 4 caracteres");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_ng_template_30_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requerida");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_ng_template_30_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_ng_template_30_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275property("value", r_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r11.label);
  }
}
function UsuariosComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 30)(1, "mat-icon");
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nuevo Usuario del Sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-dialog-content")(5, "form", 31)(6, "mat-form-field", 32)(7, "mat-label");
    \u0275\u0275text(8, "Username *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 33);
    \u0275\u0275template(10, UsuariosComponent_ng_template_30_mat_error_10_Template, 2, 0, "mat-error", 34)(11, UsuariosComponent_ng_template_30_mat_error_11_Template, 2, 0, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 32)(13, "mat-label");
    \u0275\u0275text(14, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 35);
    \u0275\u0275template(16, UsuariosComponent_ng_template_30_mat_error_16_Template, 2, 0, "mat-error", 34)(17, UsuariosComponent_ng_template_30_mat_error_17_Template, 2, 0, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 32)(19, "mat-label");
    \u0275\u0275text(20, "Nombres *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 36);
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23, "Requerido");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 32)(25, "mat-label");
    \u0275\u0275text(26, "Apellidos *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 37);
    \u0275\u0275elementStart(28, "mat-error");
    \u0275\u0275text(29, "Requerido");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-form-field", 32)(31, "mat-label");
    \u0275\u0275text(32, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 38);
    \u0275\u0275elementStart(34, "mat-error");
    \u0275\u0275text(35, "Email inv\xE1lido");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-form-field", 32)(37, "mat-label");
    \u0275\u0275text(38, "Rol *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 39);
    \u0275\u0275template(40, UsuariosComponent_ng_template_30_mat_option_40_Template, 2, 2, "mat-option", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "mat-dialog-actions", 41)(42, "button", 42);
    \u0275\u0275text(43, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 43);
    \u0275\u0275listener("click", function UsuariosComponent_ng_template_30_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.guardarUsuario());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Crear Usuario ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r5.usuarioForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r5.usuarioForm.get("username")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r5.usuarioForm.get("username")) == null ? null : tmp_5_0.hasError("minlength"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r5.usuarioForm.get("password")) == null ? null : tmp_6_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r5.usuarioForm.get("password")) == null ? null : tmp_7_0.hasError("minlength"));
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r5.roles);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r5.usuarioForm.invalid);
  }
}
function UsuariosComponent_ng_template_32_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requerida");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_ng_template_32_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_ng_template_32_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Las contrase\xF1as no coinciden");
    \u0275\u0275elementEnd();
  }
}
function UsuariosComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 30)(1, "mat-icon");
    \u0275\u0275text(2, "lock_reset");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-dialog-content")(5, "form", 45)(6, "mat-form-field", 46)(7, "mat-label");
    \u0275\u0275text(8, "Nueva Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 47);
    \u0275\u0275template(10, UsuariosComponent_ng_template_32_mat_error_10_Template, 2, 0, "mat-error", 34)(11, UsuariosComponent_ng_template_32_mat_error_11_Template, 2, 0, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 46)(13, "mat-label");
    \u0275\u0275text(14, "Confirmar Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 48);
    \u0275\u0275template(16, UsuariosComponent_ng_template_32_mat_error_16_Template, 2, 0, "mat-error", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "mat-dialog-actions", 41)(18, "button", 42);
    \u0275\u0275text(19, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 43);
    \u0275\u0275listener("click", function UsuariosComponent_ng_template_32_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.guardarPassword());
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Guardar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Cambiar Contrase\xF1a \u2014 ", ctx_r5.selectedUsuario == null ? null : ctx_r5.selectedUsuario.username, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r5.passwordForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r5.passwordForm.get("newPassword")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r5.passwordForm.get("newPassword")) == null ? null : tmp_6_0.hasError("minlength"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r5.passwordForm.hasError("mismatch"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r5.passwordForm.invalid);
  }
}
var UsuariosComponent = class _UsuariosComponent {
  constructor(usuarioService, notify, fb, dialog) {
    this.usuarioService = usuarioService;
    this.notify = notify;
    this.fb = fb;
    this.dialog = dialog;
    this.displayedColumns = ["username", "nombreCompleto", "email", "rol", "activo", "acciones"];
    this.usuarios = [];
    this.totalElements = 0;
    this.pageSize = 20;
    this.pageIndex = 0;
    this.loading = false;
    this.selectedUsuario = null;
    this.roles = [
      { value: "ROLE_ADMINISTRADOR", label: "Administrador" },
      { value: "ROLE_PRESIDENTE", label: "Presidente" },
      { value: "ROLE_SECRETARIO", label: "Secretario" },
      { value: "ROLE_TESORERO", label: "Tesorero" },
      { value: "ROLE_COMUNERO", label: "Comunero" }
    ];
  }
  ngOnInit() {
    this.initForms();
    this.cargarUsuarios();
  }
  initForms() {
    this.usuarioForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      nombres: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      email: ["", [Validators.email]],
      rol: ["ROLE_COMUNERO", [Validators.required]]
    });
    this.passwordForm = this.fb.group({
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordsMatch });
  }
  passwordsMatch(group) {
    const pw = group.get("newPassword")?.value;
    const cpw = group.get("confirmPassword")?.value;
    return pw === cpw ? null : { mismatch: true };
  }
  cargarUsuarios() {
    this.loading = true;
    this.usuarioService.listar(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.usuarios = res.data.content;
          this.totalElements = res.data.totalElements;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  abrirCrearModal() {
    this.usuarioForm.reset({ rol: "ROLE_COMUNERO" });
    this.dialogRef = this.dialog.open(this.usuarioFormDialog, { width: "560px" });
  }
  guardarUsuario() {
    if (this.usuarioForm.invalid) {
      this.usuarioForm.markAllAsTouched();
      return;
    }
    const req = this.usuarioForm.value;
    this.usuarioService.crear(req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Usuario creado exitosamente");
          this.dialogRef?.close();
          this.cargarUsuarios();
        }
      }
    });
  }
  cambiarRol(usuario, rol) {
    this.usuarioService.cambiarRol(usuario.id, rol).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success(`Rol de ${usuario.username} actualizado a ${rol}`);
          this.cargarUsuarios();
        }
      }
    });
  }
  toggleEstado(usuario) {
    const accion$ = usuario.activo ? this.usuarioService.desactivar(usuario.id) : this.usuarioService.activar(usuario.id);
    accion$.subscribe({
      next: (res) => {
        if (res.success) {
          const msg = usuario.activo ? "Usuario desactivado" : "Usuario activado";
          this.notify.success(msg);
          this.cargarUsuarios();
        }
      }
    });
  }
  abrirCambiarPassword(usuario) {
    this.selectedUsuario = usuario;
    this.passwordForm.reset();
    this.dialogRef = this.dialog.open(this.passwordDialog, { width: "420px" });
  }
  guardarPassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    const { newPassword } = this.passwordForm.value;
    this.usuarioService.cambiarPassword(this.selectedUsuario.id, { newPassword }).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Contrase\xF1a actualizada exitosamente");
          this.dialogRef?.close();
        }
      }
    });
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarUsuarios();
  }
  rolLabel(rol) {
    return this.roles.find((r) => r.value === rol)?.label ?? rol;
  }
  static {
    this.\u0275fac = function UsuariosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsuariosComponent)(\u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosComponent, selectors: [["app-usuarios"]], viewQuery: function UsuariosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.usuarioFormDialog = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.passwordDialog = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 8, consts: [["usuarioFormDialog", ""], ["passwordDialog", ""], ["title", "Gesti\xF3n de Usuarios del Sistema", "subtitle", "Control de accesos y asignaci\xF3n de roles directivos (Administrador, Presidente, Secretario, Tesorero)", "icon", "manage_accounts"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCompleto"], ["matColumnDef", "email"], ["matColumnDef", "rol"], ["matColumnDef", "activo"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "badge", "badge-primary"], ["mat-icon-button", "", 3, "click", "color", "matTooltip"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Cambiar contrase\xF1a", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "6", 1, "mat-cell", 2, "text-align", "center", "padding", "24px"], ["mat-dialog-title", ""], [1, "form-grid-2", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "username", "placeholder", "Ej: jperez"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres"], ["matInput", "", "formControlName", "nombres"], ["matInput", "", "formControlName", "apellidos"], ["matInput", "", "type", "email", "formControlName", "email"], ["formControlName", "rol"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [3, "value"], [1, "form-grid-1", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"]], template: function UsuariosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-page-header", 2)(1, "button", 3);
        \u0275\u0275listener("click", function UsuariosComponent_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.abrirCrearModal());
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " Nuevo Usuario ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-card", 4);
        \u0275\u0275template(6, UsuariosComponent_div_6_Template, 2, 0, "div", 5);
        \u0275\u0275elementStart(7, "table", 6);
        \u0275\u0275elementContainerStart(8, 7);
        \u0275\u0275template(9, UsuariosComponent_th_9_Template, 2, 0, "th", 8)(10, UsuariosComponent_td_10_Template, 3, 1, "td", 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 10);
        \u0275\u0275template(12, UsuariosComponent_th_12_Template, 2, 0, "th", 8)(13, UsuariosComponent_td_13_Template, 2, 2, "td", 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 11);
        \u0275\u0275template(15, UsuariosComponent_th_15_Template, 2, 0, "th", 8)(16, UsuariosComponent_td_16_Template, 2, 1, "td", 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 12);
        \u0275\u0275template(18, UsuariosComponent_th_18_Template, 2, 0, "th", 8)(19, UsuariosComponent_td_19_Template, 3, 1, "td", 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 13);
        \u0275\u0275template(21, UsuariosComponent_th_21_Template, 2, 0, "th", 8)(22, UsuariosComponent_td_22_Template, 3, 3, "td", 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(23, 14);
        \u0275\u0275template(24, UsuariosComponent_th_24_Template, 2, 0, "th", 8)(25, UsuariosComponent_td_25_Template, 7, 3, "td", 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(26, UsuariosComponent_tr_26_Template, 1, 0, "tr", 15)(27, UsuariosComponent_tr_27_Template, 1, 0, "tr", 16)(28, UsuariosComponent_tr_28_Template, 3, 0, "tr", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-paginator", 18);
        \u0275\u0275listener("page", function UsuariosComponent_Template_mat_paginator_page_29_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageChange($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, UsuariosComponent_ng_template_30_Template, 48, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, UsuariosComponent_ng_template_32_Template, 24, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.usuarios);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalElements)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c2));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatNoDataRow,
      MatPaginatorModule,
      MatPaginator,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      PageHeaderComponent
    ], styles: ["\n\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  position: relative;\n}\n.table-card[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding-top: 8px;\n}\n.form-grid-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n.form-grid-1[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=usuarios.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosComponent, { className: "UsuariosComponent", filePath: "src\\app\\features\\usuarios\\usuarios.component.ts", lineNumber: 44 });
})();
export {
  UsuariosComponent
};
//# sourceMappingURL=chunk-JHEQMEOS.js.map
