import {
  SolesPipe
} from "./chunk-PYSKIPKV.js";
import {
  MatDividerModule
} from "./chunk-4QOWVM3R.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-M46Y3ZE6.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-2SF4ZNYJ.js";
import {
  PageHeaderComponent
} from "./chunk-T6RS2NFG.js";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-7XLWBOHN.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-YDVBR4EU.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NVPU2YFC.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/components/stat-card.component.ts
function StatCardComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
var StatCardComponent = class _StatCardComponent {
  constructor() {
    this.title = "";
    this.value = "";
    this.subtitle = "";
    this.icon = "analytics";
    this.color = "primary";
  }
  get themeClass() {
    return this.color;
  }
  static {
    this.\u0275fac = function StatCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatCardComponent, selectors: [["app-stat-card"]], inputs: { title: "title", value: "value", subtitle: "subtitle", icon: "icon", color: "color" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 5, consts: [[1, "stat-card", 3, "ngClass"], [1, "stat-content"], [1, "stat-title"], [1, "stat-value"], ["class", "stat-subtitle", 4, "ngIf"], [1, "stat-icon-wrapper"], [1, "stat-icon"], [1, "stat-subtitle"]], template: function StatCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, StatCardComponent_span_6_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "mat-icon", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.themeClass);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subtitle);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.icon);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, MatCardModule, MatIconModule, MatIcon], styles: ["\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-radius: 12px;\n  background: white;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f5f9;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #64748b;\n  margin-bottom: 6px;\n  display: block;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.85rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 4px;\n  display: block;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.stat-card.primary[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.stat-card.success[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.stat-card.warning[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.stat-card.danger[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.stat-card.indigo[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n/*# sourceMappingURL=stat-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatCardComponent, { className: "StatCardComponent", filePath: "src\\app\\shared\\components\\stat-card.component.ts", lineNumber: 96 });
})();

// src/app/core/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/dashboard`;
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/resumen`);
  }
  static {
    this.\u0275fac = function DashboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_div_10_div_1_div_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "crisis_alert");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_10_div_1_div_1_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "warning_amber");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_10_div_1_div_1_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_10_div_1_div_1_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_10_div_1_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "a", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alerta_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", alerta_r1.accionUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(alerta_r1.accionTexto || "Ver");
  }
}
function DashboardComponent_div_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275template(2, DashboardComponent_div_10_div_1_div_1_mat_icon_2_Template, 2, 0, "mat-icon", 23)(3, DashboardComponent_div_10_div_1_div_1_mat_icon_3_Template, 2, 0, "mat-icon", 23)(4, DashboardComponent_div_10_div_1_div_1_mat_icon_4_Template, 2, 0, "mat-icon", 23)(5, DashboardComponent_div_10_div_1_div_1_mat_icon_5_Template, 2, 0, "mat-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, DashboardComponent_div_10_div_1_div_1_div_11_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alerta_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", alerta_r1.nivel.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", alerta_r1.nivel === "DANGER");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", alerta_r1.nivel === "WARNING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", alerta_r1.nivel === "INFO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", alerta_r1.nivel === "SUCCESS");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alerta_r1.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alerta_r1.mensaje);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", alerta_r1.accionUrl);
  }
}
function DashboardComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, DashboardComponent_div_10_div_1_div_1_Template, 12, 8, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.stats.alertas);
  }
}
function DashboardComponent_div_10_mat_card_9_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.stats.prediccionProxima.fecha, ")");
  }
}
function DashboardComponent_div_10_mat_card_9_div_43_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const factor_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(factor_r3);
  }
}
function DashboardComponent_div_10_mat_card_9_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45)(2, "mat-icon");
    \u0275\u0275text(3, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Factores considerados por el modelo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul");
    \u0275\u0275template(6, DashboardComponent_div_10_mat_card_9_div_43_li_6_Template, 2, 1, "li", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.stats.prediccionProxima.factoresAnalisis);
  }
}
function DashboardComponent_div_10_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 28)(1, "mat-card-header")(2, "div", 29)(3, "mat-icon");
    \u0275\u0275text(4, "psychology");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-title");
    \u0275\u0275text(6, "Predicci\xF3n de Qu\xF3rum con IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-card-subtitle");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-card-content")(10, "div", 30)(11, "mat-icon");
    \u0275\u0275text(12, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DashboardComponent_div_10_mat_card_9_span_15_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 31)(17, "div", 32)(18, "span", 33);
    \u0275\u0275text(19, "Asistencia Estimada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275text(21);
    \u0275\u0275elementStart(22, "small");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 35);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 32)(27, "span", 33);
    \u0275\u0275text(28, "Probabilidad de Qu\xF3rum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 36)(30, "span", 37);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 38);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "mat-progress-bar", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 40)(36, "mat-icon");
    \u0275\u0275text(37, "tips_and_updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 41)(39, "strong");
    \u0275\u0275text(40, "Diagn\xF3stico y Recomendaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, DashboardComponent_div_10_mat_card_9_div_43_Template, 7, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-card-actions")(45, "a", 43)(46, "mat-icon");
    \u0275\u0275text(47, "how_to_reg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Monitorear en Vivo ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Modelo: ", ctx_r1.stats.prediccionProxima.versionModelo, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats.prediccionProxima.asambleaTitulo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.prediccionProxima.fecha);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.prediccionProxima.asistenciaEstimada, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.stats.prediccionProxima.totalHabilitados, " comuneros");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.prediccionProxima.porcentajeEstimado, "% del padr\xF3n habilitado");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.prediccionProxima.probabilidadQuorumPct, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "risk-" + ctx_r1.stats.prediccionProxima.nivelRiesgo.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" RIESGO ", ctx_r1.stats.prediccionProxima.nivelRiesgo, " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.stats.prediccionProxima.probabilidadQuorumPct)("color", ctx_r1.stats.prediccionProxima.nivelRiesgo === "BAJO" ? "primary" : ctx_r1.stats.prediccionProxima.nivelRiesgo === "MEDIO" ? "accent" : "warn");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.prediccionProxima.mensajeRecomendacion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.prediccionProxima.factoresAnalisis == null ? null : ctx_r1.stats.prediccionProxima.factoresAnalisis.length);
  }
}
function DashboardComponent_div_10_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 54)(10, "div", 55);
    \u0275\u0275element(11, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 57)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.asambleaTitulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.fecha);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r4.quorumAlcanzado ? "badge-success" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.quorumAlcanzado ? "QU\xD3RUM ALCANZADO" : "SIN QU\xD3RUM", " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", item_r4.porcentajeAsistencia, "%");
    \u0275\u0275property("ngClass", item_r4.quorumAlcanzado ? "fill-success" : "fill-danger");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r4.asistentes, " presentes / ", item_r4.habilitados, " habilitados");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r4.porcentajeAsistencia, "%");
  }
}
function DashboardComponent_div_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, DashboardComponent_div_10_div_19_div_1_Template, 17, 10, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.stats.historialAsistencias);
  }
}
function DashboardComponent_div_10_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "mat-icon");
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "A\xFAn no hay asambleas finalizadas registradas para el an\xE1lisis hist\xF3rico.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, DashboardComponent_div_10_div_1_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275element(3, "app-stat-card", 9)(4, "app-stat-card", 10)(5, "app-stat-card", 11)(6, "app-stat-card", 12);
    \u0275\u0275pipe(7, "soles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275template(9, DashboardComponent_div_10_mat_card_9_Template, 49, 13, "mat-card", 14);
    \u0275\u0275elementStart(10, "mat-card", 15)(11, "mat-card-header")(12, "mat-icon", 16);
    \u0275\u0275text(13, "timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-card-title");
    \u0275\u0275text(15, "Evoluci\xF3n Hist\xF3rica de Qu\xF3rum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-card-subtitle");
    \u0275\u0275text(17, "Asistencia en las \xFAltimas asambleas de la comunidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-card-content");
    \u0275\u0275template(19, DashboardComponent_div_10_div_19_Template, 2, 1, "div", 17)(20, DashboardComponent_div_10_ng_template_20_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-card-actions")(23, "a", 18);
    \u0275\u0275text(24, " Ver Reportes Consolidados ");
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const noHistory_r5 = \u0275\u0275reference(21);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.alertas && ctx_r1.stats.alertas.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.stats.totalComuneros);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.stats.comunerosHabilitados)("subtitle", ctx_r1.porcentajeHabilitados + "% con derecho a voto");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.asistenciaPromedio + "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.stats.cantidadMultasPendientes)("subtitle", "Monto: " + \u0275\u0275pipeBind1(7, 10, ctx_r1.stats.totalMultasPendientes));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.stats.prediccionProxima);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.stats.historialAsistencias && ctx_r1.stats.historialAsistencias.length > 0)("ngIfElse", noHistory_r5);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
    this.stats = null;
    this.loading = true;
  }
  ngOnInit() {
    this.cargarStats();
  }
  cargarStats() {
    this.loading = true;
    this.dashboardService.getStats().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats = res.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get porcentajeHabilitados() {
    if (!this.stats || this.stats.totalComuneros === 0)
      return 0;
    return Math.round(this.stats.comunerosHabilitados / this.stats.totalComuneros * 100);
  }
  get asistenciaPromedio() {
    if (!this.stats || !this.stats.historialAsistencias || this.stats.historialAsistencias.length === 0)
      return 0;
    const sum = this.stats.historialAsistencias.reduce((acc, curr) => acc + curr.porcentajeAsistencia, 0);
    return Math.round(sum / this.stats.historialAsistencias.length);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(DashboardService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [["noHistory", ""], ["title", "Plataforma Inteligente de Gesti\xF3n Comunal", "subtitle", "Comunidad Campesina de La Enca\xF1ada, Cajamarca \u2014 2026", "icon", "insights"], [1, "header-actions"], ["mat-raised-button", "", "color", "accent", "routerLink", "/asistencia", 1, "btn-live"], ["mat-stroked-button", "", 3, "click"], ["class", "dashboard-container", 4, "ngIf"], [1, "dashboard-container"], ["class", "alertas-section mb-24", 4, "ngIf"], [1, "stats-grid"], ["title", "Padr\xF3n Total", "icon", "people", "color", "primary", "subtitle", "Comuneros registrados", 3, "value"], ["title", "Comuneros Habilitados", "icon", "verified", "color", "success", 3, "value", "subtitle"], ["title", "Asistencia Promedio", "icon", "pie_chart", "color", "indigo", "subtitle", "En asambleas finalizadas", 3, "value"], ["title", "Multas Pendientes", "icon", "receipt_long", "color", "warning", 3, "value", "subtitle"], [1, "main-content-grid"], ["class", "ia-prediction-card", 4, "ngIf"], [1, "history-card"], ["matCardAvatar", "", 1, "card-header-icon"], ["class", "historial-list", 4, "ngIf", "ngIfElse"], ["mat-button", "", "color", "primary", "routerLink", "/reportes"], [1, "alertas-section", "mb-24"], ["class", "alerta-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "alerta-card", 3, "ngClass"], [1, "alerta-icon"], [4, "ngIf"], [1, "alerta-body"], ["class", "alerta-action", 4, "ngIf"], [1, "alerta-action"], ["mat-stroked-button", "", 3, "routerLink"], [1, "ia-prediction-card"], ["matCardAvatar", "", 1, "ai-avatar-icon"], [1, "asamblea-target-badge"], [1, "prediction-stats-row"], [1, "p-stat"], [1, "label"], [1, "value"], [1, "sub"], [1, "prob-wrapper"], [1, "value", "highlight"], [1, "risk-badge", 3, "ngClass"], ["mode", "determinate", 3, "value", "color"], [1, "recommendation-box"], [1, "rec-text"], ["class", "factors-list", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "routerLink", "/asistencia"], [1, "factors-list"], [1, "factors-title"], [4, "ngFor", "ngForOf"], [1, "historial-list"], ["class", "historial-item", 4, "ngFor", "ngForOf"], [1, "historial-item"], [1, "item-header"], [1, "item-title"], [1, "item-date"], [1, "badge", 3, "ngClass"], [1, "progress-container"], [1, "progress-bar-custom"], [1, "progress-fill", 3, "ngClass"], [1, "progress-info"], [1, "empty-state"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-page-header", 1)(1, "div", 2)(2, "a", 3)(3, "mat-icon");
        \u0275\u0275text(4, "live_tv");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Modo Asamblea en Vivo ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_6_listener() {
          return ctx.cargarStats();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Actualizar ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, DashboardComponent_div_10_Template, 27, 12, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.stats);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatCard,
      MatCardActions,
      MatCardAvatar,
      MatCardContent,
      MatCardHeader,
      MatCardSubtitle,
      MatCardTitle,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatDividerModule,
      MatProgressBarModule,
      MatProgressBar,
      StatCardComponent,
      PageHeaderComponent,
      SolesPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.header-actions[_ngcontent-%COMP%]   .btn-live[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  font-weight: 600;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 20px;\n  border-radius: 12px;\n  border-left: 6px solid transparent;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card[_ngcontent-%COMP%]   .alerta-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card[_ngcontent-%COMP%]   .alerta-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card[_ngcontent-%COMP%]   .alerta-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card[_ngcontent-%COMP%]   .alerta-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-left-color: #ef4444;\n  color: #991b1b;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.danger[_ngcontent-%COMP%]   .alerta-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-left-color: #f59e0b;\n  color: #92400e;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.warning[_ngcontent-%COMP%]   .alerta-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-left-color: #3b82f6;\n  color: #1e40af;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.info[_ngcontent-%COMP%]   .alerta-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-left-color: #10b981;\n  color: #065f46;\n}\n.dashboard-container[_ngcontent-%COMP%]   .alertas-section[_ngcontent-%COMP%]   .alerta-card.success[_ngcontent-%COMP%]   .alerta-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .main-content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 960px) {\n  .dashboard-container[_ngcontent-%COMP%]   .main-content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n  position: relative;\n  overflow: hidden;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6,\n      #ec4899);\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .ai-avatar-icon[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6366f1;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .ai-avatar-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .asamblea-target-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin: 12px 0 16px;\n  color: #334155;\n  font-size: 0.9rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .asamblea-target-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #64748b;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border: 1px solid #f1f5f9;\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #64748b;\n  font-weight: 600;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .value.highlight[_ngcontent-%COMP%] {\n  color: #4338ca;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: normal;\n  color: #64748b;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .prob-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .prob-wrapper[_ngcontent-%COMP%]   .risk-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 12px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .prob-wrapper[_ngcontent-%COMP%]   .risk-badge.risk-bajo[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .prob-wrapper[_ngcontent-%COMP%]   .risk-badge.risk-medio[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .prediction-stats-row[_ngcontent-%COMP%]   .p-stat[_ngcontent-%COMP%]   .prob-wrapper[_ngcontent-%COMP%]   .risk-badge.risk-alto[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .recommendation-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 12px 14px;\n  margin-bottom: 14px;\n  color: #166534;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .recommendation-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #16a34a;\n  flex-shrink: 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .recommendation-box[_ngcontent-%COMP%]   .rec-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .recommendation-box[_ngcontent-%COMP%]   .rec-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .recommendation-box[_ngcontent-%COMP%]   .rec-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .factors-list[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.8rem;\n  color: #475569;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .factors-list[_ngcontent-%COMP%]   .factors-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 6px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .factors-list[_ngcontent-%COMP%]   .factors-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .factors-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .ia-prediction-card[_ngcontent-%COMP%]   .factors-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 12px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 12px 14px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #1e293b;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]   .item-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-custom[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-custom[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.4s ease;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-custom[_ngcontent-%COMP%]   .progress-fill.fill-success[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-custom[_ngcontent-%COMP%]   .progress-fill.fill-danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .historial-list[_ngcontent-%COMP%]   .historial-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #94a3b8;\n}\n.dashboard-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 32 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-CCME4FBA.js.map
