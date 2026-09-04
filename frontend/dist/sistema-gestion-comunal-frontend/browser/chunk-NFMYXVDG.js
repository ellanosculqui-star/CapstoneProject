import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-KG76ENZS.js";
import {
  SolesPipe
} from "./chunk-PYSKIPKV.js";
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
import "./chunk-4QFLIVIW.js";
import "./chunk-QOKG7DIS.js";
import {
  MatProgressSpinnerModule
} from "./chunk-6HZFZQUW.js";
import "./chunk-5275AG3Z.js";
import {
  PageHeaderComponent
} from "./chunk-T6RS2NFG.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-7XLWBOHN.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-YDVBR4EU.js";
import {
  CommonModule,
  HttpClient,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NVPU2YFC.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/reportes/reportes.component.ts
var _c0 = () => ["codigoComunero", "dni", "nombreCompleto", "condicionHabilitacion"];
var _c1 = () => ["comuneroNombreCompleto", "asambleaTitulo", "montoOriginal", "saldoPendiente"];
var _c2 = () => ["numeroRecibo", "comuneroNombreCompleto", "montoPagado", "fechaPago"];
function ReportesComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.codigoComunero);
  }
}
function ReportesComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "DNI");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.dni);
  }
}
function ReportesComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Nombres y Apellidos");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.nombreCompleto);
  }
}
function ReportesComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Condici\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.condicionHabilitacion);
  }
}
function ReportesComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function ReportesComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function ReportesComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Comunero");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.comuneroNombreCompleto);
  }
}
function ReportesComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Asamblea");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.asambleaTitulo);
  }
}
function ReportesComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Monto Original");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r7.montoOriginal));
  }
}
function ReportesComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Saldo Pendiente");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r8.saldoPendiente));
  }
}
function ReportesComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function ReportesComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function ReportesComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Recibo N\xB0");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.numeroRecibo);
  }
}
function ReportesComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Comunero");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.comuneroNombreCompleto);
  }
}
function ReportesComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Monto Pagado");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r11.montoPagado));
  }
}
function ReportesComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Fecha Pago");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.fechaPago);
  }
}
function ReportesComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function ReportesComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
var ReportesComponent = class _ReportesComponent {
  constructor(http) {
    this.http = http;
    this.padronData = [];
    this.multasData = [];
    this.pagosData = [];
    this.loading = false;
  }
  ngOnInit() {
    this.cargarReportePadron();
  }
  cargarReportePadron() {
    this.loading = true;
    this.http.get(`${environment.apiUrl}/reportes/padron`).subscribe({
      next: (res) => {
        if (res.success && res.data)
          this.padronData = res.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  cargarReporteMultas() {
    this.loading = true;
    this.http.get(`${environment.apiUrl}/reportes/multas`).subscribe({
      next: (res) => {
        if (res.success && res.data)
          this.multasData = res.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  cargarReportePagos() {
    this.loading = true;
    this.http.get(`${environment.apiUrl}/reportes/pagos`).subscribe({
      next: (res) => {
        if (res.success && res.data)
          this.pagosData = res.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  imprimir() {
    window.print();
  }
  exportarCSV(tipo) {
    let data = [];
    let filename = "";
    let headers = [];
    switch (tipo) {
      case "padron":
        data = this.padronData;
        filename = "reporte-padron-comuneros.csv";
        headers = ["DNI", "Nombres", "Apellidos", "Condici\xF3n", "Estado", "Sector", "Fecha Incorporaci\xF3n"];
        break;
      case "multas":
        data = this.multasData;
        filename = "reporte-multas.csv";
        headers = ["DNI", "Comunero", "Asamblea", "Monto", "Saldo Pendiente", "Estado", "Fecha Emisi\xF3n"];
        break;
      case "pagos":
        data = this.pagosData;
        filename = "reporte-pagos.csv";
        headers = ["Fecha Pago", "Comunero", "Monto Pagado", "M\xE9todo Pago", "Referencia"];
        break;
    }
    if (!data.length) {
      alert("No hay datos para exportar. Cargue primero el reporte correspondiente.");
      return;
    }
    const csvRows = [];
    csvRows.push("\uFEFF" + headers.join(";"));
    for (const row of data) {
      const values = Object.values(row).map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`);
      csvRows.push(values.join(";"));
    }
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function ReportesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportesComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportesComponent, selectors: [["app-reportes"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 15, consts: [["title", "Reportes Generales y Exportaci\xF3n", "subtitle", "Consolidados de padr\xF3n, asistencias, multas y caudales comunales para impresi\xF3n", "icon", "assessment"], [1, "print-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "accent", 2, "margin-left", "8px", 3, "click"], [1, "tab-card"], [3, "selectedTabChange"], ["label", "Reporte de Padr\xF3n"], [1, "tab-content"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "codigoComunero"], ["mat-header-cell", "", 4, "matHeader-cellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dni"], ["matColumnDef", "nombreCompleto"], ["matColumnDef", "condicionHabilitacion"], ["mat-header-row", "", 4, "matHeader-rowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Reporte de Multas"], ["mat-stroked-button", "", 1, "mb-3", 3, "click"], ["matColumnDef", "comuneroNombreCompleto"], ["matColumnDef", "asambleaTitulo"], ["matColumnDef", "montoOriginal"], ["matColumnDef", "saldoPendiente"], ["label", "Reporte de Recaudaci\xF3n"], ["matColumnDef", "numeroRecibo"], ["matColumnDef", "montoPagado"], ["matColumnDef", "fechaPago"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ReportesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ReportesComponent_Template_button_click_2_listener() {
          return ctx.imprimir();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Imprimir / Guardar PDF ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function ReportesComponent_Template_button_click_6_listener() {
          return ctx.exportarCSV("padron");
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Exportar CSV (Padr\xF3n) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-card", 4)(11, "mat-tab-group", 5);
        \u0275\u0275listener("selectedTabChange", function ReportesComponent_Template_mat_tab_group_selectedTabChange_11_listener() {
          return ctx.loading = false;
        });
        \u0275\u0275elementStart(12, "mat-tab", 6)(13, "div", 7)(14, "table", 8);
        \u0275\u0275elementContainerStart(15, 9);
        \u0275\u0275template(16, ReportesComponent_th_16_Template, 2, 0, "th", 10)(17, ReportesComponent_td_17_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 12);
        \u0275\u0275template(19, ReportesComponent_th_19_Template, 2, 0, "th", 10)(20, ReportesComponent_td_20_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 13);
        \u0275\u0275template(22, ReportesComponent_th_22_Template, 2, 0, "th", 10)(23, ReportesComponent_td_23_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 14);
        \u0275\u0275template(25, ReportesComponent_th_25_Template, 2, 0, "th", 10)(26, ReportesComponent_td_26_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(27, ReportesComponent_tr_27_Template, 1, 0, "tr", 15)(28, ReportesComponent_tr_28_Template, 1, 0, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "mat-tab", 17)(30, "div", 7)(31, "button", 18);
        \u0275\u0275listener("click", function ReportesComponent_Template_button_click_31_listener() {
          return ctx.cargarReporteMultas();
        });
        \u0275\u0275elementStart(32, "mat-icon");
        \u0275\u0275text(33, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " Cargar Datos de Multas ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "table", 8);
        \u0275\u0275elementContainerStart(36, 19);
        \u0275\u0275template(37, ReportesComponent_th_37_Template, 2, 0, "th", 10)(38, ReportesComponent_td_38_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 20);
        \u0275\u0275template(40, ReportesComponent_th_40_Template, 2, 0, "th", 10)(41, ReportesComponent_td_41_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(42, 21);
        \u0275\u0275template(43, ReportesComponent_th_43_Template, 2, 0, "th", 10)(44, ReportesComponent_td_44_Template, 3, 3, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(45, 22);
        \u0275\u0275template(46, ReportesComponent_th_46_Template, 2, 0, "th", 10)(47, ReportesComponent_td_47_Template, 3, 3, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(48, ReportesComponent_tr_48_Template, 1, 0, "tr", 15)(49, ReportesComponent_tr_49_Template, 1, 0, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "mat-tab", 23)(51, "div", 7)(52, "button", 18);
        \u0275\u0275listener("click", function ReportesComponent_Template_button_click_52_listener() {
          return ctx.cargarReportePagos();
        });
        \u0275\u0275elementStart(53, "mat-icon");
        \u0275\u0275text(54, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " Cargar Historial de Pagos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "table", 8);
        \u0275\u0275elementContainerStart(57, 24);
        \u0275\u0275template(58, ReportesComponent_th_58_Template, 2, 0, "th", 10)(59, ReportesComponent_td_59_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(60, 19);
        \u0275\u0275template(61, ReportesComponent_th_61_Template, 2, 0, "th", 10)(62, ReportesComponent_td_62_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(63, 25);
        \u0275\u0275template(64, ReportesComponent_th_64_Template, 2, 0, "th", 10)(65, ReportesComponent_td_65_Template, 3, 3, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(66, 26);
        \u0275\u0275template(67, ReportesComponent_th_67_Template, 2, 0, "th", 10)(68, ReportesComponent_td_68_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(69, ReportesComponent_tr_69_Template, 1, 0, "tr", 15)(70, ReportesComponent_tr_70_Template, 1, 0, "tr", 16);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("dataSource", ctx.padronData);
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeader-rowDef", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(7);
        \u0275\u0275property("dataSource", ctx.multasData);
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeader-rowDef", \u0275\u0275pureFunction0(11, _c1));
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(12, _c1));
        \u0275\u0275advance(7);
        \u0275\u0275property("dataSource", ctx.pagosData);
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeader-rowDef", \u0275\u0275pureFunction0(13, _c2));
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(14, _c2));
      }
    }, dependencies: [
      CommonModule,
      MatCardModule,
      MatCard,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatTableModule,
      MatTable,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatProgressSpinnerModule,
      PageHeaderComponent,
      SolesPipe
    ], styles: ["\n\n.print-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.tab-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.tab-card[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=reportes.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportesComponent, { className: "ReportesComponent", filePath: "src\\app\\features\\reportes\\reportes.component.ts", lineNumber: 31 });
})();
export {
  ReportesComponent
};
//# sourceMappingURL=chunk-NFMYXVDG.js.map
