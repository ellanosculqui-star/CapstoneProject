import {
  MatTabsModule
} from "./chunk-G46ZEDB3.js";
import {
  ComuneroService
} from "./chunk-Y2UCFKCD.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-D7XIIXT7.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-UIA6HSJT.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
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
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
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
  HttpClient,
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-RAFJE6SV.js";
import "./chunk-TXDUYLVM.js";

// src/app/core/services/sector.service.ts
var SectorService = class _SectorService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/sectores`;
  }
  listar() {
    return this.http.get(this.apiUrl);
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  crear(request) {
    return this.http.post(this.apiUrl, request);
  }
  actualizar(id, request) {
    return this.http.put(`${this.apiUrl}/${id}`, request);
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function SectorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SectorService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SectorService, factory: _SectorService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/caserios/caserios.component.ts
var _c0 = ["sectorFormDialog"];
function CaseriosComponent__svg_g_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 38);
    \u0275\u0275listener("click", function CaseriosComponent__svg_g_52_Template_g_click_0_listener() {
      const z_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.seleccionarCaserio(z_r3));
    });
    \u0275\u0275element(1, "polygon", 39);
    \u0275\u0275elementStart(2, "g", 40);
    \u0275\u0275element(3, "circle", 41);
    \u0275\u0275elementStart(4, "text", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "rect", 43);
    \u0275\u0275elementStart(7, "text", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const z_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r3.caserioSeleccionado == null ? null : ctx_r3.caserioSeleccionado.id) === z_r3.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("points", z_r3.coordenadasSvg)("fill", z_r3.color)("stroke", z_r3.color);
    \u0275\u0275advance();
    \u0275\u0275attribute("transform", "translate(" + z_r3.markerPos.x + "," + z_r3.markerPos.y + ")");
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", z_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(z_r3.totalComuneros);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(z_r3.nombre);
  }
}
function CaseriosComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function CaseriosComponent_div_54_Template_div_click_0_listener() {
      const z_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.seleccionarCaserio(z_r6));
    });
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const z_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r3.caserioSeleccionado == null ? null : ctx_r3.caserioSeleccionado.id) === z_r6.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", z_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(z_r6.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", z_r6.totalComuneros, " hab.");
  }
}
function CaseriosComponent_mat_card_55_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275element(4, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const z_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(z_r7.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", z_r7.asistenciaPct, "%")("background", z_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", z_r7.asistenciaPct, "%");
  }
}
function CaseriosComponent_mat_card_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 49)(1, "mat-card-header", 50)(2, "div", 51)(3, "mat-icon");
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-title");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-card-subtitle");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-card-content", 52)(10, "div", 53)(11, "div", 54)(12, "div", 55)(13, "span", 56);
    \u0275\u0275text(14, "Padr\xF3n Registrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 55)(18, "span", 56);
    \u0275\u0275text(19, "Comuneros Calificados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 58);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 59)(23, "div", 60)(24, "span");
    \u0275\u0275text(25, "Asistencia Promedio a Asambleas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "mat-progress-bar", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 62)(30, "div", 63)(31, "mat-icon");
    \u0275\u0275text(32, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "strong");
    \u0275\u0275text(35, "Coordinador de Sector:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 63)(39, "mat-icon");
    \u0275\u0275text(40, "terrain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div")(42, "strong");
    \u0275\u0275text(43, "Ubicaci\xF3n Territorial:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45, "Comunidad Campesina de La Enca\xF1ada, Cajamarca");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 63)(47, "mat-icon");
    \u0275\u0275text(48, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div")(50, "strong");
    \u0275\u0275text(51, "Voto en Asambleas:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 64)(55, "span", 65)(56, "mat-icon");
    \u0275\u0275text(57, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Comparativa de Participaci\xF3n por Caser\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 66);
    \u0275\u0275template(60, CaseriosComponent_mat_card_55_div_60_Template, 7, 6, "div", 67);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-left-color", ctx_r3.caserioSeleccionado.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r3.caserioSeleccionado.color);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ficha T\xE9cnica: ", ctx_r3.caserioSeleccionado.nombre, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.caserioSeleccionado.descripcion);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r3.caserioSeleccionado.totalComuneros, " comuneros");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.caserioSeleccionado.calificados, " (", ctx_r3.Math.round(ctx_r3.caserioSeleccionado.calificados / ctx_r3.caserioSeleccionado.totalComuneros * 100), "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.caserioSeleccionado.asistenciaPct, "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.caserioSeleccionado.asistenciaPct)("color", ctx_r3.caserioSeleccionado.asistenciaPct >= 75 ? "primary" : "accent");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.caserioSeleccionado.coordinador);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("Representaci\xF3n activa con ", ctx_r3.caserioSeleccionado.calificados, " comuneros calificados con voz y voto.");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.caseriosZonas);
  }
}
function CaseriosComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "mat-spinner", 74);
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Zona");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275element(1, "span", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", element_r8.color);
  }
}
function CaseriosComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Nombre del Caser\xEDo");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r9.nombre);
  }
}
function CaseriosComponent_th_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Descripci\xF3n / Actividad");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_td_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.descripcion);
  }
}
function CaseriosComponent_th_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Comuneros Totales");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_td_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r11.totalComuneros);
  }
}
function CaseriosComponent_th_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Calificados");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_td_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r12.calificados);
  }
}
function CaseriosComponent_th_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Asistencia Prom.");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_td_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", element_r13.asistenciaPct, "%");
  }
}
function CaseriosComponent_th_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_td_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 76)(1, "button", 79);
    \u0275\u0275listener("click", function CaseriosComponent_td_86_Template_button_click_1_listener() {
      const element_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.seleccionarCaserio(element_r15));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd()()();
  }
}
function CaseriosComponent_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 80);
  }
}
function CaseriosComponent_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 81);
    \u0275\u0275listener("click", function CaseriosComponent_tr_88_Template_tr_click_0_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.seleccionarCaserio(row_r17));
    });
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_ng_template_89_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Nombre obligatorio");
    \u0275\u0275elementEnd();
  }
}
function CaseriosComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 83)(4, "mat-form-field", 84)(5, "mat-label");
    \u0275\u0275text(6, "Nombre del Caser\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 85);
    \u0275\u0275template(8, CaseriosComponent_ng_template_89_mat_error_8_Template, 2, 0, "mat-error", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 84)(10, "mat-label");
    \u0275\u0275text(11, "Descripci\xF3n / Vocaci\xF3n Productiva");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-dialog-actions", 88)(14, "button", 89);
    \u0275\u0275text(15, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 2);
    \u0275\u0275listener("click", function CaseriosComponent_ng_template_89_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.guardarSector());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.isEditing ? "Editar Caser\xEDo" : "Registrar Nuevo Caser\xEDo");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.sectorForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r3.sectorForm.get("nombre")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing ? "Guardar Cambios" : "Registrar", " ");
  }
}
var CaseriosComponent = class _CaseriosComponent {
  constructor(sectorService, comuneroService, notify, fb, dialog) {
    this.sectorService = sectorService;
    this.comuneroService = comuneroService;
    this.notify = notify;
    this.fb = fb;
    this.dialog = dialog;
    this.Math = Math;
    this.displayedColumns = ["zona", "nombre", "descripcion", "totalComuneros", "calificados", "asistenciaPct", "acciones"];
    this.sectores = [];
    this.loading = false;
    this.caseriosZonas = [
      {
        id: 1,
        nombre: "Sogor\xF3n Alto",
        descripcion: "Zona de pastizales altos y ganader\xEDa lechera",
        color: "#10b981",
        totalComuneros: 7,
        calificados: 6,
        noCalificados: 1,
        asistenciaPct: 84.5,
        coordenadasSvg: "40,30 180,20 190,140 30,150",
        markerPos: { x: 105, y: 85 },
        coordinador: "Zen\xF3n Alvarez Ramos"
      },
      {
        id: 2,
        nombre: "Rodacocha",
        descripcion: "Zona matriz central y agricultura tradicional",
        color: "#f59e0b",
        totalComuneros: 7,
        calificados: 6,
        noCalificados: 1,
        asistenciaPct: 78.2,
        coordenadasSvg: "200,20 370,30 360,160 195,145",
        markerPos: { x: 280, y: 90 },
        coordinador: "Silverio Condori Larico"
      },
      {
        id: 3,
        nombre: "Pedregal",
        descripcion: "Ladera andina, tub\xE9rculos y cereales",
        color: "#6366f1",
        totalComuneros: 7,
        calificados: 6,
        noCalificados: 1,
        asistenciaPct: 72,
        coordenadasSvg: "380,40 540,50 530,170 370,165",
        markerPos: { x: 450, y: 105 },
        coordinador: "Rosa Flores Calla"
      },
      {
        id: 4,
        nombre: "R\xEDo Grande",
        descripcion: "Valle ribere\xF1o, parcelas de riego e irrigaci\xF3n",
        color: "#8b5cf6",
        totalComuneros: 7,
        calificados: 6,
        noCalificados: 1,
        asistenciaPct: 81,
        coordenadasSvg: "50,165 240,160 250,280 40,290",
        markerPos: { x: 145, y: 220 },
        coordinador: "Alejandro Vilca Sucasaca"
      },
      {
        id: 5,
        nombre: "Chamcas",
        descripcion: "Sector de pastoreo tradicional y agricultura familiar",
        color: "#3b82f6",
        totalComuneros: 7,
        calificados: 6,
        noCalificados: 1,
        asistenciaPct: 69.5,
        coordenadasSvg: "260,175 520,180 510,290 255,285",
        markerPos: { x: 385, y: 230 },
        coordinador: "Faustino Ramos Cutipa"
      }
    ];
    this.caserioSeleccionado = this.caseriosZonas[0];
    this.selectedSector = null;
    this.isEditing = false;
  }
  ngOnInit() {
    this.initForm();
    this.cargarSectores();
  }
  initForm() {
    this.sectorForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      descripcion: [""]
    });
  }
  cargarSectores() {
    this.loading = true;
    this.sectorService.listar().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.sectores = res.data;
          this.sectores.forEach((sec) => {
            const z = this.caseriosZonas.find((cz) => cz.nombre.toLowerCase().includes(sec.nombre.toLowerCase()) || sec.nombre.toLowerCase().includes(cz.nombre.toLowerCase()));
            if (z && sec.totalComuneros) {
              z.totalComuneros = sec.totalComuneros;
            }
          });
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
    this.comuneroService.listar(0, 100).subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.content) {
          const list = res.data.content;
          this.caseriosZonas.forEach((z) => {
            const match = list.filter((c) => c.caserio && c.caserio.toLowerCase().includes(z.nombre.toLowerCase()) || c.sectorNombre && c.sectorNombre.toLowerCase().includes(z.nombre.toLowerCase()));
            if (match.length > 0) {
              z.totalComuneros = match.length;
              z.calificados = match.filter((c) => c.tipoComunero === "CALIFICADO" || c.condicionHabilitacion === "HABILITADO").length;
              z.noCalificados = z.totalComuneros - z.calificados;
            }
          });
        }
      }
    });
  }
  seleccionarCaserio(z) {
    this.caserioSeleccionado = z;
  }
  get totalComunerosGlobal() {
    return this.caseriosZonas.reduce((acc, curr) => acc + curr.totalComuneros, 0);
  }
  get asistenciaPromedioGlobal() {
    const sum = this.caseriosZonas.reduce((acc, curr) => acc + curr.asistenciaPct, 0);
    return Math.round(sum / this.caseriosZonas.length);
  }
  get caserioLider() {
    return [...this.caseriosZonas].sort((a, b) => b.asistenciaPct - a.asistenciaPct)[0];
  }
  abrirCrearModal() {
    this.isEditing = false;
    this.selectedSector = null;
    this.sectorForm.reset();
    this.dialogRef = this.dialog.open(this.sectorFormDialog, { width: "480px" });
  }
  abrirEditarModal(sector) {
    this.isEditing = true;
    this.selectedSector = sector;
    this.sectorForm.patchValue({
      nombre: sector.nombre,
      descripcion: sector.descripcion || ""
    });
    this.dialogRef = this.dialog.open(this.sectorFormDialog, { width: "480px" });
  }
  guardarSector() {
    if (this.sectorForm.invalid) {
      this.sectorForm.markAllAsTouched();
      return;
    }
    const req = this.sectorForm.value;
    if (this.isEditing && this.selectedSector) {
      this.sectorService.actualizar(this.selectedSector.id, req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success("Caser\xEDo actualizado exitosamente");
            this.dialogRef?.close();
            this.cargarSectores();
          }
        }
      });
    } else {
      this.sectorService.crear(req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success("Caser\xEDo registrado exitosamente");
            this.dialogRef?.close();
            this.cargarSectores();
          }
        }
      });
    }
  }
  eliminarSector(sector) {
    if (!confirm(`\xBFEliminar el caser\xEDo "${sector.nombre}"? Esta acci\xF3n no se puede deshacer.`))
      return;
    this.sectorService.eliminar(sector.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Caser\xEDo eliminado");
          this.cargarSectores();
        }
      }
    });
  }
  static {
    this.\u0275fac = function CaseriosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaseriosComponent)(\u0275\u0275directiveInject(SectorService), \u0275\u0275directiveInject(ComuneroService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseriosComponent, selectors: [["app-caserios"]], viewQuery: function CaseriosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sectorFormDialog = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 91, vars: 11, consts: [["sectorFormDialog", ""], ["title", "Mapa Territorial y Gesti\xF3n de Caser\xEDos", "subtitle", "Comunidad Campesina de La Enca\xF1ada \u2014 Delimitaci\xF3n de los 5 caser\xEDos oficiales y anal\xEDtica comunitaria", "icon", "map"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "kpi-grid", "mb-24"], [1, "kpi-card"], [1, "kpi-icon", "color-blue"], [1, "kpi-info"], [1, "kpi-val"], [1, "kpi-label"], [1, "kpi-icon", "color-green"], [1, "kpi-icon", "color-amber"], [1, "kpi-icon", "color-purple"], [1, "territorial-split-container", "mb-24"], [1, "map-card"], ["matCardAvatar", "", 1, "card-icon"], [1, "map-content"], [1, "svg-map-wrapper"], ["viewBox", "0 0 580 320", 1, "territorial-svg-map"], ["x", "0", "y", "0", "width", "580", "height", "320", "rx", "14", "fill", "#0f172a", 1, "bg-rect"], ["d", "M 20,20 Q 300,10 560,20 Q 570,160 560,300 Q 280,310 20,300 Q 10,160 20,20 Z", "fill", "#1e293b", "opacity", "0.5", "stroke", "#334155", "stroke-dasharray", "4,4"], ["class", "map-zone", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "map-legend"], ["class", "legend-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "detail-card", 4, "ngIf"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "w-100", "main-table", 3, "dataSource"], ["matColumnDef", "zona"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "descripcion"], ["matColumnDef", "totalComuneros"], ["matColumnDef", "calificados"], ["matColumnDef", "asistenciaPct"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "clickable-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "map-zone", 3, "click"], ["fill-opacity", "0.35", "stroke-width", "3", "stroke-linejoin", "round", 1, "zone-polygon"], [1, "map-marker-group"], ["r", "16", "stroke", "#ffffff", "stroke-width", "2", 1, "marker-circle"], ["y", "4", "text-anchor", "middle", "fill", "#ffffff", "font-size", "11", "font-weight", "bold"], ["x", "-45", "y", "20", "width", "90", "height", "20", "rx", "6", "fill", "#0f172a", "fill-opacity", "0.85", "stroke", "#334155"], ["y", "34", "text-anchor", "middle", "fill", "#ffffff", "font-size", "11", "font-weight", "bold"], [1, "legend-item", 3, "click"], [1, "legend-dot"], [1, "legend-name"], [1, "legend-count"], [1, "detail-card"], [1, "detail-card-header"], ["matCardAvatar", "", 1, "caserio-avatar"], [1, "detail-content"], [1, "caserio-stats-box", "mb-20"], [1, "stat-row"], [1, "s-item"], [1, "s-label"], [1, "s-val"], [1, "s-val", "text-success"], [1, "progress-section"], [1, "p-header"], ["mode", "determinate", 3, "value", "color"], [1, "info-list"], [1, "info-item"], [1, "chart-bars-box"], [1, "chart-title"], [1, "bar-chart-list"], ["class", "chart-bar-item", 4, "ngFor", "ngForOf"], [1, "chart-bar-item"], [1, "bar-name"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-val"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "color-dot-badge"], [1, "badge", "badge-success"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Ver en Mapa", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable-row", 3, "click"], ["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "nombre", "placeholder", "Ej. Sogor\xF3n Alto"], [4, "ngIf"], ["matInput", "", "formControlName", "descripcion", "rows", "3", "placeholder", "Ej. Zona alta ganadera y de pastizales"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]], template: function CaseriosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-page-header", 1)(1, "button", 2);
        \u0275\u0275listener("click", function CaseriosComponent_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.abrirCrearModal());
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "add_location_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " Nuevo Caser\xEDo ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "mat-icon", 5);
        \u0275\u0275text(8, "location_city");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
        \u0275\u0275text(11, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "Caser\xEDos Delimitados");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 4)(15, "mat-icon", 9);
        \u0275\u0275text(16, "groups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 6)(18, "span", 7);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 8);
        \u0275\u0275text(21, "Comuneros en Padr\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 4)(23, "mat-icon", 10);
        \u0275\u0275text(24, "how_to_reg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 6)(26, "span", 7);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 8);
        \u0275\u0275text(29, "Asistencia Promedio Comunal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 4)(31, "mat-icon", 11);
        \u0275\u0275text(32, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 6)(34, "span", 7);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 8);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 12)(39, "mat-card", 13)(40, "mat-card-header")(41, "mat-icon", 14);
        \u0275\u0275text(42, "map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-card-title");
        \u0275\u0275text(44, "Mapa Territorial Delimitado por Caser\xEDos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-card-subtitle");
        \u0275\u0275text(46, "Haga clic en una zona del mapa para inspeccionar sus m\xE9tricas comunales");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "mat-card-content", 15)(48, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(49, "svg", 17);
        \u0275\u0275element(50, "rect", 18)(51, "path", 19);
        \u0275\u0275template(52, CaseriosComponent__svg_g_52_Template, 9, 9, "g", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(53, "div", 21);
        \u0275\u0275template(54, CaseriosComponent_div_54_Template, 6, 6, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(55, CaseriosComponent_mat_card_55_Template, 61, 15, "mat-card", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-card", 24)(57, "mat-card-header")(58, "mat-icon", 14);
        \u0275\u0275text(59, "list_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-card-title");
        \u0275\u0275text(61, "Listado de Sectores y Caser\xEDos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-card-subtitle");
        \u0275\u0275text(63, "Registro administrativo oficial de la comunidad");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(64, CaseriosComponent_div_64_Template, 2, 0, "div", 25);
        \u0275\u0275elementStart(65, "table", 26);
        \u0275\u0275elementContainerStart(66, 27);
        \u0275\u0275template(67, CaseriosComponent_th_67_Template, 2, 0, "th", 28)(68, CaseriosComponent_td_68_Template, 2, 2, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(69, 30);
        \u0275\u0275template(70, CaseriosComponent_th_70_Template, 2, 0, "th", 28)(71, CaseriosComponent_td_71_Template, 3, 1, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(72, 31);
        \u0275\u0275template(73, CaseriosComponent_th_73_Template, 2, 0, "th", 28)(74, CaseriosComponent_td_74_Template, 2, 1, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(75, 32);
        \u0275\u0275template(76, CaseriosComponent_th_76_Template, 2, 0, "th", 28)(77, CaseriosComponent_td_77_Template, 3, 1, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(78, 33);
        \u0275\u0275template(79, CaseriosComponent_th_79_Template, 2, 0, "th", 28)(80, CaseriosComponent_td_80_Template, 3, 1, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(81, 34);
        \u0275\u0275template(82, CaseriosComponent_th_82_Template, 2, 0, "th", 28)(83, CaseriosComponent_td_83_Template, 3, 1, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(84, 35);
        \u0275\u0275template(85, CaseriosComponent_th_85_Template, 2, 0, "th", 28)(86, CaseriosComponent_td_86_Template, 4, 0, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(87, CaseriosComponent_tr_87_Template, 1, 0, "tr", 36)(88, CaseriosComponent_tr_88_Template, 1, 0, "tr", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(89, CaseriosComponent_ng_template_89_Template, 20, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.totalComunerosGlobal);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.asistenciaPromedioGlobal, "%");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.caserioLider.nombre);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("L\xEDder en Participaci\xF3n (", ctx.caserioLider.asistenciaPct, "%)");
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.caseriosZonas);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.caseriosZonas);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.caserioSeleccionado);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.caseriosZonas);
        \u0275\u0275advance(22);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
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
      MatCardAvatar,
      MatCardContent,
      MatCardHeader,
      MatCardSubtitle,
      MatCardTitle,
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
      MatProgressBarModule,
      MatProgressBar,
      MatTabsModule,
      PageHeaderComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);\n  border: 1px solid #e2e8f0;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon.color-blue[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon.color-green[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon.color-amber[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon.color-purple[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.territorial-split-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 1024px) {\n  .territorial-split-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .svg-map-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: #0b1120;\n  border-radius: 12px;\n  padding: 10px;\n  overflow: hidden;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .svg-map-wrapper[_ngcontent-%COMP%]   .territorial-svg-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .svg-map-wrapper[_ngcontent-%COMP%]   .territorial-svg-map[_ngcontent-%COMP%]   .map-zone[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .svg-map-wrapper[_ngcontent-%COMP%]   .territorial-svg-map[_ngcontent-%COMP%]   .map-zone[_ngcontent-%COMP%]   .zone-polygon[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .svg-map-wrapper[_ngcontent-%COMP%]   .territorial-svg-map[_ngcontent-%COMP%]   .map-zone[_ngcontent-%COMP%]:hover   .zone-polygon[_ngcontent-%COMP%] {\n  fill-opacity: 0.65;\n  stroke-width: 4;\n  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .svg-map-wrapper[_ngcontent-%COMP%]   .territorial-svg-map[_ngcontent-%COMP%]   .map-zone[_ngcontent-%COMP%]:hover   .marker-circle[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .svg-map-wrapper[_ngcontent-%COMP%]   .territorial-svg-map[_ngcontent-%COMP%]   .map-zone.active[_ngcontent-%COMP%]   .zone-polygon[_ngcontent-%COMP%] {\n  fill-opacity: 0.75;\n  stroke: #ffffff;\n  stroke-width: 4;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding-top: 8px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-count[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.75rem;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover, \n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #3b82f6;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover   .legend-name[_ngcontent-%COMP%], \n.territorial-split-container[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item.active[_ngcontent-%COMP%]   .legend-name[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-card-header[_ngcontent-%COMP%] {\n  border-left: 6px solid #3b82f6;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-card-header[_ngcontent-%COMP%]   .caserio-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-card-header[_ngcontent-%COMP%]   .caserio-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid #f1f5f9;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .s-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .s-item[_ngcontent-%COMP%]   .s-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: #64748b;\n  font-weight: 600;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .s-item[_ngcontent-%COMP%]   .s-val[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .s-item[_ngcontent-%COMP%]   .s-val.text-success[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%]   .progress-section[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .caserio-stats-box[_ngcontent-%COMP%]   .progress-section[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 5px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  margin-top: 2px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #1e293b;\n  display: block;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-radius: 12px;\n  padding: 14px;\n  border: 1px solid #f1f5f9;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: #1e293b;\n  margin-bottom: 12px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6366f1;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .bar-chart-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .bar-chart-list[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.75rem;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .bar-chart-list[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-name[_ngcontent-%COMP%] {\n  width: 90px;\n  font-weight: 600;\n  color: #475569;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .bar-chart-list[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .bar-chart-list[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.territorial-split-container[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .chart-bars-box[_ngcontent-%COMP%]   .bar-chart-list[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-val[_ngcontent-%COMP%] {\n  width: 40px;\n  font-weight: 700;\n  color: #1e293b;\n  text-align: right;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n  position: relative;\n  overflow: hidden;\n}\n.table-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.table-card[_ngcontent-%COMP%]   .main-table[_ngcontent-%COMP%]   .color-dot-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.table-card[_ngcontent-%COMP%]   .main-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-card[_ngcontent-%COMP%]   .main-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n}\n.table-card[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n}\n/*# sourceMappingURL=caserios.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseriosComponent, { className: "CaseriosComponent", filePath: "src\\app\\features\\caserios\\caserios.component.ts", lineNumber: 57 });
})();
export {
  CaseriosComponent
};
//# sourceMappingURL=chunk-YROVWUFW.js.map
