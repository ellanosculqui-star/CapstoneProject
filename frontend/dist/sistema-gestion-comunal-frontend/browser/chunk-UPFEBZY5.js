import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-AFNCRAGG.js";
import "./chunk-D7XIIXT7.js";
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
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-HQBFUF2C.js";
import "./chunk-GO5N7W3Y.js";
import "./chunk-MDVRMOSI.js";
import "./chunk-DORXTRN2.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-FEQHF24J.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  MatIconModule,
  MatOption
} from "./chunk-JXQRCCZC.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  HttpParams,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RAFJE6SV.js";
import "./chunk-TXDUYLVM.js";

// src/app/core/services/auditoria.service.ts
var AuditoriaService = class _AuditoriaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/auditoria`;
  }
  listar(page = 0, size = 20, username, accion, fechaInicio, fechaFin) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (username)
      params = params.set("username", username);
    if (accion)
      params = params.set("accion", accion);
    if (fechaInicio)
      params = params.set("fechaInicio", fechaInicio);
    if (fechaFin)
      params = params.set("fechaFin", fechaFin);
    return this.http.get(this.apiUrl, { params });
  }
  static {
    this.\u0275fac = function AuditoriaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditoriaService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditoriaService, factory: _AuditoriaService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/auditoria/auditoria.component.ts
var _c0 = () => [10, 20, 50, 100];
function AuditoriaComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("value", a_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1);
  }
}
function AuditoriaComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "mat-spinner", 30);
    \u0275\u0275elementEnd();
  }
}
function AuditoriaComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Fecha y Hora");
    \u0275\u0275elementEnd();
  }
}
function AuditoriaComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, element_r2.fechaHora, "dd/MM/yyyy HH:mm:ss"));
  }
}
function AuditoriaComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Usuario");
    \u0275\u0275elementEnd();
  }
}
function AuditoriaComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r3.username);
  }
}
function AuditoriaComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Acci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function AuditoriaComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.accion);
  }
}
function AuditoriaComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Entidad");
    \u0275\u0275elementEnd();
  }
}
function AuditoriaComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.entidad);
  }
}
function AuditoriaComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "ID Registro");
    \u0275\u0275elementEnd();
  }
}
function AuditoriaComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.entidadId || "-");
  }
}
function AuditoriaComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "IP Origen");
    \u0275\u0275elementEnd();
  }
}
function AuditoriaComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r7.ipOrigen);
  }
}
function AuditoriaComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function AuditoriaComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function AuditoriaComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37);
    \u0275\u0275text(2, " No hay registros de auditor\xEDa con los filtros aplicados. ");
    \u0275\u0275elementEnd()();
  }
}
var AuditoriaComponent = class _AuditoriaComponent {
  constructor(auditoriaService) {
    this.auditoriaService = auditoriaService;
    this.displayedColumns = ["fechaHora", "username", "accion", "entidad", "entidadId", "ipOrigen"];
    this.logs = [];
    this.totalElements = 0;
    this.pageSize = 20;
    this.pageIndex = 0;
    this.loading = false;
    this.filtroUsername = "";
    this.filtroAccion = "";
    this.filtroFechaInicio = "";
    this.filtroFechaFin = "";
    this.acciones = [
      "CREAR",
      "ACTUALIZAR",
      "ELIMINAR",
      "CONSULTAR",
      "LOGIN",
      "LOGOUT",
      "APROBAR",
      "RECHAZAR",
      "PAGAR",
      "ABRIR",
      "CERRAR",
      "REGISTRAR"
    ];
  }
  ngOnInit() {
    this.cargarLogs();
  }
  cargarLogs() {
    this.loading = true;
    this.auditoriaService.listar(this.pageIndex, this.pageSize, this.filtroUsername || void 0, this.filtroAccion || void 0, this.filtroFechaInicio || void 0, this.filtroFechaFin || void 0).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.logs = res.data.content;
          this.totalElements = res.data.totalElements;
        } else {
          this.logs = [];
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  onFiltrar() {
    this.pageIndex = 0;
    this.cargarLogs();
  }
  limpiarFiltros() {
    this.filtroUsername = "";
    this.filtroAccion = "";
    this.filtroFechaInicio = "";
    this.filtroFechaFin = "";
    this.pageIndex = 0;
    this.cargarLogs();
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarLogs();
  }
  static {
    this.\u0275fac = function AuditoriaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditoriaComponent)(\u0275\u0275directiveInject(AuditoriaService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditoriaComponent, selectors: [["app-auditoria"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 13, consts: [["title", "Bit\xE1cora de Auditor\xEDa del Sistema", "subtitle", "Trazabilidad inmutable de todas las acciones, modificaciones e inicios de sesi\xF3n", "icon", "security"], [1, "filter-card", 2, "margin-bottom", "16px"], [1, "filter-row"], ["appearance", "outline", 1, "filter-field"], ["matInput", "", "placeholder", "Ej: jperez", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "date", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "fechaHora"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "username"], ["matColumnDef", "accion"], ["matColumnDef", "entidad"], ["matColumnDef", "entidadId"], ["matColumnDef", "ipOrigen"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], [3, "value"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "badge", "badge-info"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "6", 1, "mat-cell", 2, "text-align", "center", "padding", "24px"]], template: function AuditoriaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "mat-card", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        \u0275\u0275text(5, "Usuario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function AuditoriaComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filtroUsername, $event) || (ctx.filtroUsername = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-icon", 5);
        \u0275\u0275text(8, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
        \u0275\u0275text(11, "Acci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AuditoriaComponent_Template_mat_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filtroAccion, $event) || (ctx.filtroAccion = $event);
          return $event;
        });
        \u0275\u0275elementStart(13, "mat-option", 7);
        \u0275\u0275text(14, "Todas");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, AuditoriaComponent_mat_option_15_Template, 2, 2, "mat-option", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "mat-form-field", 3)(17, "mat-label");
        \u0275\u0275text(18, "Desde");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AuditoriaComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filtroFechaInicio, $event) || (ctx.filtroFechaInicio = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-form-field", 3)(21, "mat-label");
        \u0275\u0275text(22, "Hasta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AuditoriaComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filtroFechaFin, $event) || (ctx.filtroFechaFin = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "button", 11);
        \u0275\u0275listener("click", function AuditoriaComponent_Template_button_click_25_listener() {
          return ctx.onFiltrar();
        });
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " Filtrar ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 12);
        \u0275\u0275listener("click", function AuditoriaComponent_Template_button_click_29_listener() {
          return ctx.limpiarFiltros();
        });
        \u0275\u0275elementStart(30, "mat-icon");
        \u0275\u0275text(31, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " Limpiar ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "mat-card", 13);
        \u0275\u0275template(34, AuditoriaComponent_div_34_Template, 2, 0, "div", 14);
        \u0275\u0275elementStart(35, "table", 15);
        \u0275\u0275elementContainerStart(36, 16);
        \u0275\u0275template(37, AuditoriaComponent_th_37_Template, 2, 0, "th", 17)(38, AuditoriaComponent_td_38_Template, 4, 4, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 19);
        \u0275\u0275template(40, AuditoriaComponent_th_40_Template, 2, 0, "th", 17)(41, AuditoriaComponent_td_41_Template, 3, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(42, 20);
        \u0275\u0275template(43, AuditoriaComponent_th_43_Template, 2, 0, "th", 17)(44, AuditoriaComponent_td_44_Template, 3, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(45, 21);
        \u0275\u0275template(46, AuditoriaComponent_th_46_Template, 2, 0, "th", 17)(47, AuditoriaComponent_td_47_Template, 2, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(48, 22);
        \u0275\u0275template(49, AuditoriaComponent_th_49_Template, 2, 0, "th", 17)(50, AuditoriaComponent_td_50_Template, 2, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(51, 23);
        \u0275\u0275template(52, AuditoriaComponent_th_52_Template, 2, 0, "th", 17)(53, AuditoriaComponent_td_53_Template, 3, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(54, AuditoriaComponent_tr_54_Template, 1, 0, "tr", 24)(55, AuditoriaComponent_tr_55_Template, 1, 0, "tr", 25)(56, AuditoriaComponent_tr_56_Template, 3, 0, "tr", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-paginator", 27);
        \u0275\u0275listener("page", function AuditoriaComponent_Template_mat_paginator_page_57_listener($event) {
          return ctx.onPageChange($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroUsername);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroAccion);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.acciones);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroFechaInicio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroFechaFin);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.logs);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalElements)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(12, _c0));
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatCardModule, MatCard, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatPaginatorModule, MatPaginator, MatProgressSpinnerModule, MatProgressSpinner, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconModule, MatIcon, PageHeaderComponent], styles: ["\n\n.filter-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  padding: 8px 0;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%] {\n  min-width: 180px;\n  flex: 1;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding-bottom: 4px;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  position: relative;\n}\n.table-card[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=auditoria.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditoriaComponent, { className: "AuditoriaComponent", filePath: "src\\app\\features\\auditoria\\auditoria.component.ts", lineNumber: 36 });
})();
export {
  AuditoriaComponent
};
//# sourceMappingURL=chunk-UPFEBZY5.js.map
