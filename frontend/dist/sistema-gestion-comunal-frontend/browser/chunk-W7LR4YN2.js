import {
  SolesPipe
} from "./chunk-PYSKIPKV.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-CIRF7TGI.js";
import "./chunk-ODVPMSHY.js";
import {
  EstadoBadgePipe
} from "./chunk-7NYSSSH4.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MN5ZKVBO.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-XSKVQAAY.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatLabel
} from "./chunk-G5AK5GOQ.js";
import "./chunk-4QFLIVIW.js";
import {
  NotificationService
} from "./chunk-OL7LJQ7U.js";
import "./chunk-GQRCTAQD.js";
import "./chunk-QOKG7DIS.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-IDHEIUER.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-6HZFZQUW.js";
import "./chunk-5275AG3Z.js";
import {
  PageHeaderComponent
} from "./chunk-T6RS2NFG.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-7XLWBOHN.js";
import {
  MatButtonModule,
  MatIconModule,
  MatOption
} from "./chunk-YDVBR4EU.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NVPU2YFC.js";
import "./chunk-TXDUYLVM.js";

// src/app/core/services/multa.service.ts
var MultaService = class _MultaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/multas`;
  }
  listar(page = 0, size = 10, comuneroId, estado) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (comuneroId)
      params = params.set("comuneroId", comuneroId);
    if (estado)
      params = params.set("estado", estado);
    return this.http.get(this.apiUrl, { params });
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  generarPorInasistencia(asambleaId) {
    return this.http.post(`${this.apiUrl}/generar/${asambleaId}`, {});
  }
  registrarPago(multaId, request) {
    return this.http.post(`${this.apiUrl}/${multaId}/pagos`, request);
  }
  obtenerEstadoCuenta(comuneroId) {
    return this.http.get(`${this.apiUrl}/comunero/${comuneroId}/estado-cuenta`);
  }
  resumenFinanciero() {
    return this.http.get(`${this.apiUrl}/resumen-financiero`);
  }
  static {
    this.\u0275fac = function MultaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultaService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MultaService, factory: _MultaService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/multas/multas.component.ts
var _c0 = () => [5, 10, 25];
function MultasComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-card", 27)(2, "mat-card-content")(3, "span", 28);
    \u0275\u0275text(4, "Total Multas Emitidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "soles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "mat-card", 29)(11, "mat-card-content")(12, "span", 28);
    \u0275\u0275text(13, "Total Recaudado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h2");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "soles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, "Recaudaci\xF3n efectiva");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "mat-card", 30)(20, "mat-card-content")(21, "span", 28);
    \u0275\u0275text(22, "Saldo Pendiente de Cobro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h2");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "soles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, "Deuda acumulada por comuneros");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.resumenFinanciero.totalEmitidas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Monto: ", \u0275\u0275pipeBind1(9, 4, ctx_r0.resumenFinanciero.montoTotalEmitido), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 6, ctx_r0.resumenFinanciero.montoTotalRecaudado));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 8, ctx_r0.resumenFinanciero.montoTotalPendiente));
  }
}
function MultasComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "DNI");
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r2.comuneroDni);
  }
}
function MultasComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Comunero");
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r3.comuneroNombreCompleto);
  }
}
function MultasComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Asamblea Origen");
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.asambleaTitulo);
  }
}
function MultasComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Monto Multa");
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, element_r5.montoOriginal));
  }
}
function MultasComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Saldo Pendiente");
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "soles");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("danger-text", element_r6.saldoPendiente > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, element_r6.saldoPendiente));
  }
}
function MultasComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "span");
    \u0275\u0275pipe(2, "estadoBadge");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, element_r7.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r7.estado);
  }
}
function MultasComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Fecha Emisi\xF3n");
    \u0275\u0275elementEnd();
  }
}
function MultasComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.fechaEmision);
  }
}
function MultasComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function MultasComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
var MultasComponent = class _MultasComponent {
  constructor(multaService, notify) {
    this.multaService = multaService;
    this.notify = notify;
    this.displayedColumns = ["comuneroDni", "comuneroNombreCompleto", "asambleaTitulo", "montoOriginal", "saldoPendiente", "estado", "fechaEmision"];
    this.multas = [];
    this.totalElements = 0;
    this.pageSize = 10;
    this.pageIndex = 0;
    this.loading = false;
    this.estadoFiltro = "";
    this.resumenFinanciero = null;
  }
  ngOnInit() {
    this.cargarMultas();
    this.cargarResumen();
  }
  cargarMultas() {
    this.loading = true;
    this.multaService.listar(this.pageIndex, this.pageSize, void 0, this.estadoFiltro).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.multas = res.data.content;
          this.totalElements = res.data.totalElements;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  cargarResumen() {
    this.multaService.resumenFinanciero().subscribe({
      next: (res) => {
        if (res.success) {
          this.resumenFinanciero = res.data;
        }
      }
    });
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarMultas();
  }
  onFiltrar() {
    this.pageIndex = 0;
    this.cargarMultas();
  }
  static {
    this.\u0275fac = function MultasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultasComponent)(\u0275\u0275directiveInject(MultaService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultasComponent, selectors: [["app-multas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 10, consts: [["title", "Gesti\xF3n de Multas y Recaudaci\xF3n", "subtitle", "Control de sanciones por inasistencia, pagos de cuotas y saldos pendientes", "icon", "receipt_long"], ["class", "resumen-grid", 4, "ngIf"], [1, "filter-card"], [1, "filter-content"], ["appearance", "outline"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", ""], ["value", "PENDIENTE"], ["value", "PAGADA"], ["value", "CON_ABONO"], ["value", "CONDONADA"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "comuneroDni"], ["mat-header-cell", "", 4, "matHeader-cellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "comuneroNombreCompleto"], ["matColumnDef", "asambleaTitulo"], ["matColumnDef", "montoOriginal"], ["matColumnDef", "saldoPendiente"], ["matColumnDef", "estado"], ["matColumnDef", "fechaEmision"], ["mat-header-row", "", 4, "matHeader-rowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], [1, "resumen-grid"], [1, "resumen-card"], [1, "label"], [1, "resumen-card", "success"], [1, "resumen-card", "danger"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function MultasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275template(1, MultasComponent_div_1_Template, 28, 10, "div", 1);
        \u0275\u0275elementStart(2, "mat-card", 2)(3, "mat-card-content", 3)(4, "mat-form-field", 4)(5, "mat-label");
        \u0275\u0275text(6, "Filtrar por Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function MultasComponent_Template_mat_select_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.estadoFiltro, $event) || (ctx.estadoFiltro = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function MultasComponent_Template_mat_select_selectionChange_7_listener() {
          return ctx.onFiltrar();
        });
        \u0275\u0275elementStart(8, "mat-option", 6);
        \u0275\u0275text(9, "Todas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-option", 7);
        \u0275\u0275text(11, "Pendiente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-option", 8);
        \u0275\u0275text(13, "Pagada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-option", 9);
        \u0275\u0275text(15, "Con Abono");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-option", 10);
        \u0275\u0275text(17, "Condonada");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "mat-card", 11);
        \u0275\u0275template(19, MultasComponent_div_19_Template, 2, 0, "div", 12);
        \u0275\u0275elementStart(20, "table", 13);
        \u0275\u0275elementContainerStart(21, 14);
        \u0275\u0275template(22, MultasComponent_th_22_Template, 2, 0, "th", 15)(23, MultasComponent_td_23_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 17);
        \u0275\u0275template(25, MultasComponent_th_25_Template, 2, 0, "th", 15)(26, MultasComponent_td_26_Template, 3, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 18);
        \u0275\u0275template(28, MultasComponent_th_28_Template, 2, 0, "th", 15)(29, MultasComponent_td_29_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 19);
        \u0275\u0275template(31, MultasComponent_th_31_Template, 2, 0, "th", 15)(32, MultasComponent_td_32_Template, 3, 3, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 20);
        \u0275\u0275template(34, MultasComponent_th_34_Template, 2, 0, "th", 15)(35, MultasComponent_td_35_Template, 4, 5, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(36, 21);
        \u0275\u0275template(37, MultasComponent_th_37_Template, 2, 0, "th", 15)(38, MultasComponent_td_38_Template, 4, 5, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 22);
        \u0275\u0275template(40, MultasComponent_th_40_Template, 2, 0, "th", 15)(41, MultasComponent_td_41_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(42, MultasComponent_tr_42_Template, 1, 0, "tr", 23)(43, MultasComponent_tr_43_Template, 1, 0, "tr", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-paginator", 25);
        \u0275\u0275listener("page", function MultasComponent_Template_mat_paginator_page_44_listener($event) {
          return ctx.onPageChange($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resumenFinanciero);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.estadoFiltro);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.multas);
        \u0275\u0275advance(22);
        \u0275\u0275property("matHeader-rowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("length", ctx.totalElements)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(9, _c0));
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      FormsModule,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatTableModule,
      MatTable,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatPaginatorModule,
      MatPaginator,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      MatFormField,
      MatLabel,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      PageHeaderComponent,
      EstadoBadgePipe,
      SolesPipe
    ], styles: ["\n\n.resumen-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.resumen-grid[_ngcontent-%COMP%]   .resumen-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.resumen-grid[_ngcontent-%COMP%]   .resumen-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  font-weight: 600;\n}\n.resumen-grid[_ngcontent-%COMP%]   .resumen-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 4px 0;\n  color: #1e293b;\n}\n.resumen-grid[_ngcontent-%COMP%]   .resumen-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.resumen-grid[_ngcontent-%COMP%]   .resumen-card.success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.resumen-grid[_ngcontent-%COMP%]   .resumen-card.danger[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-radius: 12px;\n}\n.filter-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -1.25em;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  position: relative;\n}\n.table-card[_ngcontent-%COMP%]   .danger-text[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=multas.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultasComponent, { className: "MultasComponent", filePath: "src\\app\\features\\multas\\multas.component.ts", lineNumber: 42 });
})();
export {
  MultasComponent
};
//# sourceMappingURL=chunk-W7LR4YN2.js.map
