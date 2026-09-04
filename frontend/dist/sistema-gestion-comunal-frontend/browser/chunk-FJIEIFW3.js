import {
  ActivatedRoute
} from "./chunk-PEKNYEHS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-IS22GETV.js";
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RAFJE6SV.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/auto-asistencia/auto-asistencia.component.ts
function AutoAsistenciaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "Cargando informacion de la asamblea...");
    \u0275\u0275elementEnd()()();
  }
}
function AutoAsistenciaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Enlace invalido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.mensajeError);
  }
}
function AutoAsistenciaComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3, "Asamblea:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "span", 12);
    \u0275\u0275text(7, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.asamblea.titulo, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.asamblea.estado, "");
  }
}
function AutoAsistenciaComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 7)(2, "div", 6);
    \u0275\u0275text(3, "\uF512");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Registro no disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Esta asamblea no esta en curso actualmente.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AutoAsistenciaComponent_div_2_div_8_Template, 9, 2, "div", 8);
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10, "Solo puedes registrar asistencia cuando la asamblea este EN CURSO.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.asamblea);
  }
}
function AutoAsistenciaComponent_div_3_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "\u23F0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatearHora(ctx_r0.asamblea.horaInicio));
  }
}
function AutoAsistenciaComponent_div_3_div_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "\uF4CD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.asamblea.lugar);
  }
}
function AutoAsistenciaComponent_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h2", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "div", 27)(5, "span", 28);
    \u0275\u0275text(6, "\uF4C5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AutoAsistenciaComponent_div_3_div_10_div_9_Template, 5, 1, "div", 29)(10, AutoAsistenciaComponent_div_3_div_10_div_10_Template, 5, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30);
    \u0275\u0275element(12, "span", 31);
    \u0275\u0275text(13, " EN CURSO ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.asamblea.titulo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatearFecha(ctx_r0.asamblea.fecha));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.asamblea.horaInicio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.asamblea.lugar);
  }
}
function AutoAsistenciaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 13)(3, "div", 14);
    \u0275\u0275text(4, "\uF3E0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h1", 15);
    \u0275\u0275text(7, "Comunidad Campesina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9, "La Enca\xF1ada \u2014 Cajamarca");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AutoAsistenciaComponent_div_3_div_10_Template, 14, 4, "div", 17);
    \u0275\u0275elementStart(11, "div", 18)(12, "h3");
    \u0275\u0275text(13, "Registra tu asistencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 19);
    \u0275\u0275text(15, "Ingresa tu numero de DNI para confirmar tu presencia en la asamblea.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 20)(17, "label", 21);
    \u0275\u0275text(18, "Numero de DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AutoAsistenciaComponent_div_3_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dni, $event) || (ctx_r0.dni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 23);
    \u0275\u0275listener("click", function AutoAsistenciaComponent_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.registrarAsistencia());
    });
    \u0275\u0275text(21, " \u2713 Marcar mi Asistencia ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.asamblea);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dni);
  }
}
function AutoAsistenciaComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "Registrando tu asistencia...");
    \u0275\u0275elementEnd()()();
  }
}
function AutoAsistenciaComponent_div_5_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nombreComunero);
  }
}
function AutoAsistenciaComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3, "Asamblea:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "span", 12);
    \u0275\u0275text(7, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.asamblea.titulo, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatearFecha(ctx_r0.asamblea.fecha), "");
  }
}
function AutoAsistenciaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 32)(2, "div", 33);
    \u0275\u0275text(3, "\u2714");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Asistencia Registrada");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AutoAsistenciaComponent_div_5_p_6_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8, "Tu presencia ha sido confirmada exitosamente en la asamblea.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AutoAsistenciaComponent_div_5_div_9_Template, 9, 2, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.nombreComunero);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.asamblea);
  }
}
function AutoAsistenciaComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "No se pudo registrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function AutoAsistenciaComponent_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reintentar());
    });
    \u0275\u0275text(9, " \u21BB Intentar de nuevo ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.mensajeError);
  }
}
var AutoAsistenciaComponent = class _AutoAsistenciaComponent {
  constructor(route, http) {
    this.route = route;
    this.http = http;
    this.asambleaId = null;
    this.asamblea = null;
    this.dni = "";
    this.pantalla = "cargando";
    this.mensajeError = "";
    this.nombreComunero = "";
    this.apiBase = environment.apiUrl;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const id = params["asambleaId"];
      if (!id || isNaN(+id)) {
        this.pantalla = "error_carga";
        this.mensajeError = "El enlace QR no es valido o no contiene un identificador de asamblea.";
        return;
      }
      this.asambleaId = +id;
      this.cargarAsamblea();
    });
  }
  cargarAsamblea() {
    this.pantalla = "cargando";
    this.http.get(`${this.apiBase}/publico/asambleas/${this.asambleaId}`).subscribe({
      next: (res) => {
        this.asamblea = res.data ?? res;
        if (this.asamblea?.estado !== "EN_CURSO") {
          this.pantalla = "no_en_curso";
        } else {
          this.pantalla = "formulario";
        }
      },
      error: (err) => {
        this.pantalla = "error_carga";
        this.mensajeError = err?.error?.message || "No se pudo cargar la informacion de la asamblea.";
      }
    });
  }
  registrarAsistencia() {
    if (!this.dni.trim() || this.dni.trim().length < 6) {
      return;
    }
    this.pantalla = "enviando";
    this.http.post(`${this.apiBase}/publico/asambleas/${this.asambleaId}/asistencia`, { dni: this.dni.trim() }).subscribe({
      next: (res) => {
        const data = res.data ?? res;
        this.nombreComunero = data?.comuneroNombreCompleto || "";
        this.pantalla = "exito";
      },
      error: (err) => {
        this.mensajeError = err?.error?.message || "No se pudo registrar la asistencia. Verifique su DNI.";
        this.pantalla = "error_registro";
      }
    });
  }
  reintentar() {
    this.dni = "";
    this.mensajeError = "";
    this.pantalla = "formulario";
  }
  formatearFecha(fecha) {
    if (!fecha)
      return "";
    const [anio, mes, dia] = fecha.split("-");
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    return `${dia} de ${meses[parseInt(mes) - 1]} del ${anio}`;
  }
  formatearHora(hora) {
    if (!hora)
      return "";
    const partes = hora.split(":");
    const h = parseInt(partes[0]);
    const m = partes[1];
    const ampm = h >= 12 ? "PM" : "AM";
    const hora12 = h % 12 || 12;
    return `${hora12}:${m} ${ampm}`;
  }
  static {
    this.\u0275fac = function AutoAsistenciaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoAsistenciaComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoAsistenciaComponent, selectors: [["app-auto-asistencia"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [["class", "page-wrapper", 4, "ngIf"], [1, "page-wrapper"], [1, "card-central"], [1, "spinner"], [1, "cargando-txt"], [1, "card-central", "card-error"], [1, "icono-estado"], [1, "card-central", "card-advertencia"], ["class", "info-asamblea", 4, "ngIf"], [1, "hint"], [1, "info-asamblea"], [1, "info-item"], [1, "label"], [1, "header-comunidad"], [1, "logo-comunidad"], [1, "titulo-comunidad"], [1, "subtitulo-comunidad"], ["class", "asamblea-info", 4, "ngIf"], [1, "formulario-dni"], [1, "instruccion"], [1, "input-grupo"], ["for", "dniInput"], ["id", "dniInput", "type", "text", "inputmode", "numeric", "placeholder", "Ej: 12345678", "maxlength", "8", "autofocus", "", 1, "input-dni", 3, "ngModelChange", "ngModel"], [1, "btn-registrar", 3, "click"], [1, "asamblea-info"], [1, "asamblea-titulo"], [1, "asamblea-detalles"], [1, "detalle-item"], [1, "detalle-icono"], ["class", "detalle-item", 4, "ngIf"], [1, "badge-en-curso"], [1, "punto-verde"], [1, "card-central", "card-exito"], [1, "icono-exito"], ["class", "nombre-comunero", 4, "ngIf"], [1, "mensaje-exito"], ["class", "info-asamblea compacta", 4, "ngIf"], [1, "nombre-comunero"], [1, "info-asamblea", "compacta"], [1, "btn-reintentar", 3, "click"]], template: function AutoAsistenciaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AutoAsistenciaComponent_div_0_Template, 5, 0, "div", 0)(1, AutoAsistenciaComponent_div_1_Template, 8, 1, "div", 0)(2, AutoAsistenciaComponent_div_2_Template, 11, 1, "div", 0)(3, AutoAsistenciaComponent_div_3_Template, 22, 2, "div", 0)(4, AutoAsistenciaComponent_div_4_Template, 5, 0, "div", 0)(5, AutoAsistenciaComponent_div_5_Template, 10, 2, "div", 0)(6, AutoAsistenciaComponent_div_6_Template, 10, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.pantalla === "cargando");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "error_carga");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "no_en_curso");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "formulario");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "enviando");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "exito");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "error_registro");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, HttpClientModule], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1a4731 0%,\n      #2d7a4f 50%,\n      #1a4731 100%);\n  padding: 16px;\n  font-family:\n    Segoe UI,\n    system-ui,\n    sans-serif;\n}\n.card-central[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 40px 36px;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  animation: _ngcontent-%COMP%_slideUp 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.header-comunidad[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #f0f4f0;\n  text-align: left;\n}\n.logo-comunidad[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  flex-shrink: 0;\n}\n.titulo-comunidad[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a4731;\n}\n.subtitulo-comunidad[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.asamblea-info[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  text-align: left;\n}\n.asamblea-titulo[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.asamblea-detalles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.detalle-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  color: #374151;\n}\n.detalle-icono[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 24px;\n  text-align: center;\n}\n.badge-en-curso[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.punto-verde[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #10b981;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulsar 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulsar {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.formulario-dni[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.formulario-dni[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a4731;\n  margin-bottom: 6px;\n}\n.instruccion[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.input-grupo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.input-grupo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.input-dni[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border: 2px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 1.4rem;\n  font-weight: 600;\n  text-align: center;\n  color: #111827;\n  transition: border-color 0.2s;\n  outline: none;\n  -moz-appearance: textfield;\n}\n.input-dni[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.input-dni[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.input-dni[_ngcontent-%COMP%]:focus {\n  border-color: #1a4731;\n  box-shadow: 0 0 0 3px rgba(26, 71, 49, 0.15);\n}\n.btn-registrar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a4731,\n      #2d7a4f);\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-registrar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.btn-registrar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border: 5px solid #e5e7eb;\n  border-top-color: #1a4731;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 0.8s linear infinite;\n  margin: 0 auto 20px;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cargando-txt[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.card-central.exito[_ngcontent-%COMP%] {\n  border-top: 5px solid #10b981;\n}\n.icono-exito[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: #fff;\n  font-size: 2.2rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.card-central.exito[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #065f46;\n  margin-bottom: 8px;\n}\n.nombre-comunero[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.mensaje-exito[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.card-central.error[_ngcontent-%COMP%] {\n  border-top: 5px solid #ef4444;\n}\n.card-central.advertencia[_ngcontent-%COMP%] {\n  border-top: 5px solid #f59e0b;\n}\n.icono-estado[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.card-central.error[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.card-central.advertencia[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #111827;\n  margin-bottom: 10px;\n}\n.card-central.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.card-central.advertencia[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin-bottom: 12px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #9ca3af;\n}\n.btn-reintentar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 28px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-reintentar[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.info-asamblea[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 14px 16px;\n  text-align: left;\n  margin-top: 16px;\n}\n.info-asamblea.compacta[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.info-item[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #374151;\n  margin-bottom: 4px;\n  display: flex;\n  gap: 6px;\n}\n.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .card-central[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n  .input-dni[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=auto-asistencia.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoAsistenciaComponent, { className: "AutoAsistenciaComponent", filePath: "src\\app\\features\\auto-asistencia\\auto-asistencia.component.ts", lineNumber: 26 });
})();
export {
  AutoAsistenciaComponent
};
//# sourceMappingURL=chunk-FJIEIFW3.js.map
