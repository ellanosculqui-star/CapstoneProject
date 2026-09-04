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
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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

// src/app/features/auto-votacion/auto-votacion.component.ts
function AutoVotacionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "Cargando c\xE9dula de votaci\xF3n...");
    \u0275\u0275elementEnd()()();
  }
}
function AutoVotacionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Enlace de Votaci\xF3n Inv\xE1lido");
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
function AutoVotacionComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3, "Asunto:");
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.votacion.titulo, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.votacion.estado, "");
  }
}
function AutoVotacionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 7)(2, "div", 6);
    \u0275\u0275text(3, "\uF512");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Votaci\xF3n no disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Esta votaci\xF3n no se encuentra abierta en este momento.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AutoVotacionComponent_div_2_div_8_Template, 9, 2, "div", 8);
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10, "Espere a que la mesa directiva d\xE9 inicio al sufragio en la asamblea.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.votacion);
  }
}
function AutoVotacionComponent_div_3_div_10_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32)(1, "strong");
    \u0275\u0275text(2, "Propuesta / Moci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.votacion.propuesta, "");
  }
}
function AutoVotacionComponent_div_3_div_10_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.votacion.descripcion);
  }
}
function AutoVotacionComponent_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "span", 28);
    \u0275\u0275text(3, " VOTACI\xD3N ABIERTA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AutoVotacionComponent_div_3_div_10_p_6_Template, 4, 1, "p", 30)(7, AutoVotacionComponent_div_3_div_10_p_7_Template, 2, 1, "p", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.votacion.titulo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.votacion.propuesta);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.votacion.descripcion);
  }
}
function AutoVotacionComponent_div_3_div_11_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function AutoVotacionComponent_div_3_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function AutoVotacionComponent_div_3_div_11_div_4_Template_div_click_0_listener() {
      const cand_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.seleccionarCandidato(cand_r4));
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275template(2, AutoVotacionComponent_div_3_div_11_div_4_span_2_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7, "Candidato Postulante");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cand_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.candidatoSeleccionado === cand_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.candidatoSeleccionado === cand_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cand_r4);
  }
}
function AutoVotacionComponent_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "h3");
    \u0275\u0275text(2, "Seleccione su Representante:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275template(4, AutoVotacionComponent_div_3_div_11_div_4_Template, 8, 4, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.votacion == null ? null : ctx_r0.votacion.candidatos);
  }
}
function AutoVotacionComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "h3");
    \u0275\u0275text(2, "Su Voto:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "div", 46);
    \u0275\u0275listener("click", function AutoVotacionComponent_div_3_div_12_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarOpcionGeneral("A_FAVOR"));
    });
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6, "\uF44D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "A FAVOR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48);
    \u0275\u0275listener("click", function AutoVotacionComponent_div_3_div_12_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarOpcionGeneral("EN_CONTRA"));
    });
    \u0275\u0275elementStart(10, "span", 47);
    \u0275\u0275text(11, "\uF44E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "EN CONTRA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49);
    \u0275\u0275listener("click", function AutoVotacionComponent_div_3_div_12_Template_div_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarOpcionGeneral("ABSTENCION"));
    });
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16, "\u26AA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "ABSTENCI\xD3N");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("selected", ctx_r0.opcionGeneral === "A_FAVOR");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r0.opcionGeneral === "EN_CONTRA");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r0.opcionGeneral === "ABSTENCION");
  }
}
function AutoVotacionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 13)(3, "div", 14);
    \u0275\u0275text(4, "\uF5F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h1", 15);
    \u0275\u0275text(7, "C\xE9dula Digital de Sufragio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9, "Comunidad Campesina La Enca\xF1ada");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AutoVotacionComponent_div_3_div_10_Template, 8, 3, "div", 17)(11, AutoVotacionComponent_div_3_div_11_Template, 5, 1, "div", 18)(12, AutoVotacionComponent_div_3_div_12_Template, 19, 6, "div", 19);
    \u0275\u0275elementStart(13, "div", 20)(14, "div", 21)(15, "label", 22);
    \u0275\u0275text(16, "N\xFAmero de DNI del Comunero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AutoVotacionComponent_div_3_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dni, $event) || (ctx_r0.dni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 24);
    \u0275\u0275text(19, "Debe estar registrado como PRESENTE en la asamblea.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function AutoVotacionComponent_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.emitirVoto());
    });
    \u0275\u0275text(21, " \u2709 Emitir Mi Voto Oficial ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.votacion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.esEleccion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.esEleccion);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dni);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.dni.trim() || ctx_r0.dni.trim().length < 6 || ctx_r0.esEleccion && !ctx_r0.candidatoSeleccionado);
  }
}
function AutoVotacionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "Procesando y encriptando su voto...");
    \u0275\u0275elementEnd()()();
  }
}
function AutoVotacionComponent_div_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2, "Candidato Votado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.candidatoSeleccionado);
  }
}
function AutoVotacionComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2, "Opci\xF3n Registrada:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.opcionGeneral.replace("_", " "));
  }
}
function AutoVotacionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3, "\u2714");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\xA1Voto Registrado con \xC9xito!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 52);
    \u0275\u0275text(7, "Su voto ha sido contabilizado formalmente en el acta de escrutinio de la asamblea comunal.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AutoVotacionComponent_div_5_div_8_Template, 5, 1, "div", 53)(9, AutoVotacionComponent_div_5_div_9_Template, 5, 1, "div", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.esEleccion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.esEleccion);
  }
}
function AutoVotacionComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "No se pudo registrar el voto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 57);
    \u0275\u0275listener("click", function AutoVotacionComponent_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
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
var AutoVotacionComponent = class _AutoVotacionComponent {
  constructor(route, http) {
    this.route = route;
    this.http = http;
    this.votacionId = null;
    this.votacion = null;
    this.dni = "";
    this.candidatoSeleccionado = "";
    this.opcionGeneral = "A_FAVOR";
    this.pantalla = "cargando";
    this.mensajeError = "";
    this.apiBase = environment.apiUrl;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const id = params["votacionId"];
      if (!id || isNaN(+id)) {
        this.pantalla = "error_carga";
        this.mensajeError = "El enlace QR no es v\xE1lido o no contiene una votaci\xF3n activa.";
        return;
      }
      this.votacionId = +id;
      this.cargarVotacion();
    });
  }
  get esEleccion() {
    return this.votacion?.tipo === "ELECCION_REPRESENTANTE" || !!this.votacion?.candidatos && this.votacion.candidatos.length > 0;
  }
  cargarVotacion() {
    this.pantalla = "cargando";
    this.http.get(`${this.apiBase}/publico/votaciones/${this.votacionId}`).subscribe({
      next: (res) => {
        this.votacion = res.data ?? res;
        if (this.votacion?.estado !== "ABIERTA") {
          this.pantalla = "no_abierta";
        } else {
          if (this.votacion.candidatos && this.votacion.candidatos.length > 0) {
            this.candidatoSeleccionado = this.votacion.candidatos[0];
          }
          this.pantalla = "formulario";
        }
      },
      error: (err) => {
        this.pantalla = "error_carga";
        this.mensajeError = err?.error?.message || "No se pudo cargar la informaci\xF3n de la votaci\xF3n.";
      }
    });
  }
  seleccionarCandidato(c) {
    this.candidatoSeleccionado = c;
  }
  seleccionarOpcionGeneral(opc) {
    this.opcionGeneral = opc;
  }
  emitirVoto() {
    if (!this.dni.trim() || this.dni.trim().length < 6)
      return;
    if (this.esEleccion && !this.candidatoSeleccionado)
      return;
    this.pantalla = "enviando";
    const payload = {
      dni: this.dni.trim()
    };
    if (this.esEleccion) {
      payload.candidato = this.candidatoSeleccionado;
      payload.opcion = "CANDIDATO";
    } else {
      payload.opcion = this.opcionGeneral;
    }
    this.http.post(`${this.apiBase}/publico/votaciones/${this.votacionId}/votar`, payload).subscribe({
      next: () => {
        this.pantalla = "exito";
      },
      error: (err) => {
        this.mensajeError = err?.error?.message || "No se pudo registrar su voto. Verifique que sea comunero habilitado y est\xE9 presente en la asamblea.";
        this.pantalla = "error_registro";
      }
    });
  }
  reintentar() {
    this.mensajeError = "";
    this.pantalla = "formulario";
  }
  static {
    this.\u0275fac = function AutoVotacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoVotacionComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoVotacionComponent, selectors: [["app-auto-votacion"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [["class", "page-wrapper", 4, "ngIf"], [1, "page-wrapper"], [1, "card-central"], [1, "spinner"], [1, "cargando-txt"], [1, "card-central", "card-error"], [1, "icono-estado"], [1, "card-central", "card-advertencia"], ["class", "info-asamblea", 4, "ngIf"], [1, "hint"], [1, "info-asamblea"], [1, "info-item"], [1, "label"], [1, "header-comunidad"], [1, "logo-comunidad"], [1, "titulo-comunidad"], [1, "subtitulo-comunidad"], ["class", "asamblea-info", 4, "ngIf"], ["class", "seccion-candidatos", 4, "ngIf"], ["class", "seccion-opciones", 4, "ngIf"], [1, "formulario-dni"], [1, "input-grupo"], ["for", "dniVoto"], ["id", "dniVoto", "type", "text", "inputmode", "numeric", "placeholder", "Ej: 12345678", "maxlength", "8", 1, "input-dni", 3, "ngModelChange", "ngModel"], [1, "dni-help"], [1, "btn-emitir-voto", 3, "click", "disabled"], [1, "asamblea-info"], [1, "badge-en-curso"], [1, "punto-verde"], [1, "asamblea-titulo"], ["class", "propuesta-texto", 4, "ngIf"], ["class", "desc-texto", 4, "ngIf"], [1, "propuesta-texto"], [1, "desc-texto"], [1, "seccion-candidatos"], [1, "candidatos-lista"], ["class", "candidato-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "candidato-card", 3, "click"], [1, "candidato-radio"], ["class", "radio-dot", 4, "ngIf"], [1, "candidato-info"], [1, "candidato-nombre"], [1, "candidato-badge"], [1, "radio-dot"], [1, "seccion-opciones"], [1, "opciones-grid"], [1, "opc-card", "favor", 3, "click"], [1, "opc-icono"], [1, "opc-card", "contra", 3, "click"], [1, "opc-card", "abstencion", 3, "click"], [1, "card-central", "card-exito"], [1, "icono-exito"], [1, "mensaje-exito"], ["class", "voto-resumen", 4, "ngIf"], [1, "voto-resumen"], [1, "label-resumen"], [1, "cand-resumen"], [1, "btn-reintentar", 3, "click"]], template: function AutoVotacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AutoVotacionComponent_div_0_Template, 5, 0, "div", 0)(1, AutoVotacionComponent_div_1_Template, 8, 1, "div", 0)(2, AutoVotacionComponent_div_2_Template, 11, 1, "div", 0)(3, AutoVotacionComponent_div_3_Template, 22, 5, "div", 0)(4, AutoVotacionComponent_div_4_Template, 5, 0, "div", 0)(5, AutoVotacionComponent_div_5_Template, 10, 2, "div", 0)(6, AutoVotacionComponent_div_6_Template, 10, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.pantalla === "cargando");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "error_carga");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "no_abierta");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "formulario");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "enviando");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "exito");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pantalla === "error_registro");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, HttpClientModule], styles: ['\n\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #2563eb 50%,\n      #1e3a8a 100%);\n  padding: 16px;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n}\n.card-central[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 36px 30px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  animation: _ngcontent-%COMP%_slideUp 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.header-comunidad[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #f0f4f8;\n  text-align: left;\n}\n.logo-comunidad[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  flex-shrink: 0;\n}\n.titulo-comunidad[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e3a8a;\n  margin: 0;\n}\n.subtitulo-comunidad[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n.asamblea-info[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  text-align: left;\n}\n.badge-en-curso[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #dbeafe;\n  color: #1e40af;\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.punto-verde[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulsar 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulsar {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.asamblea-titulo[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.propuesta-texto[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #334155;\n  background: #f8fafc;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border-left: 4px solid #2563eb;\n  margin-bottom: 8px;\n}\n.desc-texto[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0;\n}\n.seccion-candidatos[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 24px;\n}\n.seccion-candidatos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 12px;\n}\n.candidatos-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.candidato-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #ffffff;\n}\n.candidato-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  background: #f8fafc;\n}\n.candidato-card.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.candidato-card.selected[_ngcontent-%COMP%]   .candidato-radio[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #2563eb;\n  color: #ffffff;\n}\n.candidato-radio[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #cbd5e1;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.candidato-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.candidato-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.candidato-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n}\n.seccion-opciones[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 24px;\n}\n.seccion-opciones[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 12px;\n}\n.opciones-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 8px;\n}\n.opc-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 14px 8px;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.8rem;\n  transition: all 0.2s ease;\n}\n.opc-card[_ngcontent-%COMP%]   .opc-icono[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.opc-card.favor.selected[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #ecfdf5;\n  color: #065f46;\n}\n.opc-card.contra.selected[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n  color: #991b1b;\n}\n.opc-card.abstencion.selected[_ngcontent-%COMP%] {\n  border-color: #64748b;\n  background: #f8fafc;\n  color: #334155;\n}\n.formulario-dni[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.input-grupo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.input-grupo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.input-grupo[_ngcontent-%COMP%]   .dni-help[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.input-dni[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 1.4rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-align: center;\n  color: #0f172a;\n  outline: none;\n  box-sizing: border-box;\n}\n.input-dni[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.btn-emitir-voto[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af,\n      #2563eb);\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-emitir-voto[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n}\n.btn-emitir-voto[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border: 5px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 0.8s linear infinite;\n  margin: 0 auto 20px;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cargando-txt[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.card-central.card-exito[_ngcontent-%COMP%] {\n  border-top: 5px solid #10b981;\n}\n.icono-exito[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: #fff;\n  font-size: 2.2rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.voto-resumen[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.voto-resumen[_ngcontent-%COMP%]   .label-resumen[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.voto-resumen[_ngcontent-%COMP%]   .cand-resumen[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #1e3a8a;\n}\n.card-central.card-error[_ngcontent-%COMP%] {\n  border-top: 5px solid #ef4444;\n}\n.card-central.card-advertencia[_ngcontent-%COMP%] {\n  border-top: 5px solid #f59e0b;\n}\n.icono-estado[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.btn-reintentar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 28px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.info-asamblea[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 14px 16px;\n  text-align: left;\n  margin-top: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #334155;\n  margin-bottom: 4px;\n  display: flex;\n  gap: 6px;\n}\n.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n/*# sourceMappingURL=auto-votacion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoVotacionComponent, { className: "AutoVotacionComponent", filePath: "src\\app\\features\\auto-votacion\\auto-votacion.component.ts", lineNumber: 29 });
})();
export {
  AutoVotacionComponent
};
//# sourceMappingURL=chunk-WNHODWV5.js.map
