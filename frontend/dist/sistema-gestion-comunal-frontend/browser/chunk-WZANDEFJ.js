import {
  MatChipsModule
} from "./chunk-5EEORT4S.js";
import {
  ComuneroService
} from "./chunk-Y2UCFKCD.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-AFNCRAGG.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-D7XIIXT7.js";
import {
  EstadoBadgePipe
} from "./chunk-MVFAH5SO.js";
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
  MatLabel,
  MatPrefix
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
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  MatCardContent,
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
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RAFJE6SV.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/comuneros/comuneros.component.ts
var _c0 = ["comuneroFormDialog"];
var _c1 = ["detalleDialog"];
var _c2 = () => [10, 20, 50];
function ComunerosComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("value", c_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2);
  }
}
function ComunerosComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("value", t_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3 === "CALIFICADO" ? "CALIFICADO" : "NO CALIFICADO");
  }
}
function ComunerosComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    \u0275\u0275property("value", e_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r4);
  }
}
function ComunerosComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "mat-spinner", 39);
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "N\xB0 Padr\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.numeroPadron || element_r5.codigoComunero);
  }
}
function ComunerosComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "DNI");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r6.dni);
  }
}
function ComunerosComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Apellidos y Nombres");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r7.nombreCompleto);
  }
}
function ComunerosComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Fec. Nacimiento");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.fechaNacimiento || "-");
  }
}
function ComunerosComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Estado Civil");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.estadoCivil || "-");
  }
}
function ComunerosComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Ocupaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.ocupacion || "Agricultor");
  }
}
function ComunerosComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Tel\xE9fono");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.telefono || "-");
  }
}
function ComunerosComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Tipo");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", element_r12.tipoComunero === "NO_CALIFICADO" ? "badge-secondary" : "badge-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r12.tipoComunero === "NO_CALIFICADO" ? "NO CALIFICADO" : "CALIFICADO", " ");
  }
}
function ComunerosComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Caser\xEDo");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "span", 43)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", element_r13.caserio || element_r13.sectorNombre || "-", " ");
  }
}
function ComunerosComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "span");
    \u0275\u0275pipe(2, "estadoBadge");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, element_r14.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r14.estado);
  }
}
function ComunerosComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 44)(2, "button", 45);
    \u0275\u0275listener("click", function ComunerosComponent_td_79_Template_button_click_2_listener() {
      const element_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.verDetalle(element_r16));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function ComunerosComponent_td_79_Template_button_click_5_listener() {
      const element_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.abrirEditarModal(element_r16));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 47);
    \u0275\u0275listener("click", function ComunerosComponent_td_79_Template_button_click_8_listener() {
      const element_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.eliminarComunero(element_r16));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "person_remove");
    \u0275\u0275elementEnd()()()();
  }
}
function ComunerosComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function ComunerosComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
}
function ComunerosComponent_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275text(2, " No se encontraron comuneros registrados con los filtros aplicados. ");
    \u0275\u0275elementEnd()();
  }
}
function ComunerosComponent_ng_template_84_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El N\xB0 de Padr\xF3n es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_ng_template_84_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "DNI obligatorio");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_ng_template_84_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Debe contener 8 d\xEDgitos");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_ng_template_84_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Los nombres son obligatorios");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_ng_template_84_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Los apellidos son obligatorios");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_ng_template_84_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ec_r19 = ctx.$implicit;
    \u0275\u0275property("value", ec_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ec_r19);
  }
}
function ComunerosComponent_ng_template_84_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Ocupaci\xF3n obligatoria");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_ng_template_84_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    \u0275\u0275property("value", c_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r20, " ");
  }
}
function ComunerosComponent_ng_template_84_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El caser\xEDo es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function ComunerosComponent_ng_template_84_mat_option_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const est_r21 = ctx.$implicit;
    \u0275\u0275property("value", est_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(est_r21);
  }
}
function ComunerosComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 53)(4, "div", 54)(5, "mat-form-field", 9)(6, "mat-label");
    \u0275\u0275text(7, "N\xB0 de Padr\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 55);
    \u0275\u0275template(9, ComunerosComponent_ng_template_84_mat_error_9_Template, 2, 0, "mat-error", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 9)(11, "mat-label");
    \u0275\u0275text(12, "DNI (8 d\xEDgitos)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 57);
    \u0275\u0275template(14, ComunerosComponent_ng_template_84_mat_error_14_Template, 2, 0, "mat-error", 56)(15, ComunerosComponent_ng_template_84_mat_error_15_Template, 2, 0, "mat-error", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 54)(17, "mat-form-field", 9)(18, "mat-label");
    \u0275\u0275text(19, "Nombres");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 58);
    \u0275\u0275template(21, ComunerosComponent_ng_template_84_mat_error_21_Template, 2, 0, "mat-error", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 9)(23, "mat-label");
    \u0275\u0275text(24, "Apellidos");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 59);
    \u0275\u0275template(26, ComunerosComponent_ng_template_84_mat_error_26_Template, 2, 0, "mat-error", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 54)(28, "mat-form-field", 9)(29, "mat-label");
    \u0275\u0275text(30, "Fecha de Nacimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 9)(33, "mat-label");
    \u0275\u0275text(34, "Estado Civil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-select", 61);
    \u0275\u0275template(36, ComunerosComponent_ng_template_84_mat_option_36_Template, 2, 2, "mat-option", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 54)(38, "mat-form-field", 9)(39, "mat-label");
    \u0275\u0275text(40, "Ocupaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 62);
    \u0275\u0275template(42, ComunerosComponent_ng_template_84_mat_error_42_Template, 2, 0, "mat-error", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 9)(44, "mat-label");
    \u0275\u0275text(45, "Tel\xE9fono de Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 54)(48, "mat-form-field", 9)(49, "mat-label");
    \u0275\u0275text(50, "Caser\xEDo de Pertenencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-select", 64);
    \u0275\u0275template(52, ComunerosComponent_ng_template_84_mat_option_52_Template, 2, 2, "mat-option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, ComunerosComponent_ng_template_84_mat_error_53_Template, 2, 0, "mat-error", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field", 9)(55, "mat-label");
    \u0275\u0275text(56, "Tipo de Comunero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-select", 65)(58, "mat-option", 66);
    \u0275\u0275text(59, "CALIFICADO (Con voz y voto)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-option", 67);
    \u0275\u0275text(61, "NO CALIFICADO");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div", 68)(63, "mat-form-field", 69)(64, "mat-label");
    \u0275\u0275text(65, "Estado en la Comunidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "mat-select", 70);
    \u0275\u0275template(67, ComunerosComponent_ng_template_84_mat_option_67_Template, 2, 2, "mat-option", 12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(68, "mat-dialog-actions", 71)(69, "button", 72);
    \u0275\u0275text(70, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 3);
    \u0275\u0275listener("click", function ComunerosComponent_ng_template_84_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.guardarComunero());
    });
    \u0275\u0275elementStart(72, "mat-icon");
    \u0275\u0275text(73, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    const ctx_r16 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r16.isEditing ? "Editar Comunero" : "Registrar Comunero en el Padr\xF3n");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r16.comuneroForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r16.comuneroForm.get("numeroPadron")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r16.comuneroForm.get("dni")) == null ? null : tmp_6_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r16.comuneroForm.get("dni")) == null ? null : tmp_7_0.hasError("pattern"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r16.comuneroForm.get("nombres")) == null ? null : tmp_8_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_9_0 = ctx_r16.comuneroForm.get("apellidos")) == null ? null : tmp_9_0.hasError("required"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r16.estadosCiviles);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_11_0 = ctx_r16.comuneroForm.get("ocupacion")) == null ? null : tmp_11_0.hasError("required"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r16.caserios);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r16.comuneroForm.get("caserio")) == null ? null : tmp_13_0.hasError("required"));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r16.estados);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r16.isEditing ? "Guardar Cambios" : "Registrar en Padr\xF3n", " ");
  }
}
function ComunerosComponent_ng_template_86_mat_dialog_content_2_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span", 78);
    \u0275\u0275text(2, "Deuda Multas:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("S/ ", ctx_r16.selectedComunero.totalDeudaPendiente, "");
  }
}
function ComunerosComponent_ng_template_86_mat_dialog_content_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-dialog-content")(1, "div", 74)(2, "div", 75)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "N\xB0 Padr\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "DNI:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 76)(13, "div", 77)(14, "span", 78);
    \u0275\u0275text(15, "Caser\xEDo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 79)(17, "mat-icon");
    \u0275\u0275text(18, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 77)(21, "span", 78);
    \u0275\u0275text(22, "Tipo Comunero:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 77)(26, "span", 78);
    \u0275\u0275text(27, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275pipe(29, "estadoBadge");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 77)(32, "span", 78);
    \u0275\u0275text(33, "Estado Civil:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 80);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 77)(37, "span", 78);
    \u0275\u0275text(38, "Ocupaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 80);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 77)(42, "span", 78);
    \u0275\u0275text(43, "Fec. Nacimiento:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 80);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 77)(47, "span", 78);
    \u0275\u0275text(48, "Tel\xE9fono:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 80);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, ComunerosComponent_ng_template_86_mat_dialog_content_2_div_51_Template, 5, 1, "div", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r16.selectedComunero.nombreCompleto);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r16.selectedComunero.numeroPadron || ctx_r16.selectedComunero.codigoComunero, " \xA0|\xA0 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r16.selectedComunero.dni, "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r16.selectedComunero.caserio || ctx_r16.selectedComunero.sectorNombre || "-", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r16.selectedComunero.tipoComunero === "NO_CALIFICADO" ? "badge-secondary" : "badge-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r16.selectedComunero.tipoComunero === "NO_CALIFICADO" ? "NO CALIFICADO" : "CALIFICADO", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(29, 14, ctx_r16.selectedComunero.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r16.selectedComunero.estado);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r16.selectedComunero.estadoCivil || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r16.selectedComunero.ocupacion || "Agricultor");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r16.selectedComunero.fechaNacimiento || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r16.selectedComunero.telefono || "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r16.selectedComunero.totalDeudaPendiente !== void 0);
  }
}
function ComunerosComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 52);
    \u0275\u0275text(1, "Ficha Oficial del Comunero");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ComunerosComponent_ng_template_86_mat_dialog_content_2_Template, 52, 16, "mat-dialog-content", 56);
    \u0275\u0275elementStart(3, "mat-dialog-actions", 71)(4, "button", 73);
    \u0275\u0275text(5, "Cerrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r16.selectedComunero);
  }
}
var ComunerosComponent = class _ComunerosComponent {
  constructor(comuneroService, notify, fb, dialog) {
    this.comuneroService = comuneroService;
    this.notify = notify;
    this.fb = fb;
    this.dialog = dialog;
    this.displayedColumns = [
      "numeroPadron",
      "dni",
      "nombreCompleto",
      "fechaNacimiento",
      "estadoCivil",
      "ocupacion",
      "telefono",
      "tipoComunero",
      "caserio",
      "estado",
      "acciones"
    ];
    this.caserios = [
      "Sogor\xF3n Alto",
      "Rodacocha",
      "Pedregal",
      "R\xEDo Grande",
      "Chamcas"
    ];
    this.estadosCiviles = [
      "SOLTERO",
      "CASADO",
      "CONVIVIENTE",
      "VIUDO",
      "DIVORCIADO"
    ];
    this.tiposComunero = [
      "CALIFICADO",
      "NO_CALIFICADO"
    ];
    this.estados = [
      "ACTIVO",
      "INACTIVO",
      "SUSPENDIDO",
      "RETIRADO",
      "FALLECIDO"
    ];
    this.comuneros = [];
    this.totalElements = 0;
    this.pageSize = 10;
    this.pageIndex = 0;
    this.loading = false;
    this.busqueda = "";
    this.caserioFiltro = "";
    this.estadoFiltro = "";
    this.tipoFiltro = "";
    this.selectedComunero = null;
    this.isEditing = false;
  }
  ngOnInit() {
    this.initForm();
    this.cargarComuneros();
  }
  initForm() {
    this.comuneroForm = this.fb.group({
      numeroPadron: ["", [Validators.required]],
      dni: ["", [Validators.required, Validators.pattern("^[0-9]{8}$")]],
      nombres: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      fechaNacimiento: [""],
      estadoCivil: ["CASADO", [Validators.required]],
      ocupacion: ["Agricultor", [Validators.required]],
      telefono: [""],
      tipoComunero: ["CALIFICADO", [Validators.required]],
      caserio: ["Sogor\xF3n Alto", [Validators.required]],
      estado: ["ACTIVO", [Validators.required]]
    });
  }
  cargarComuneros() {
    this.loading = true;
    let terminoBusqueda = this.busqueda.trim();
    if (this.caserioFiltro) {
      terminoBusqueda = terminoBusqueda ? `${terminoBusqueda} ${this.caserioFiltro}` : this.caserioFiltro;
    }
    this.comuneroService.listar(this.pageIndex, this.pageSize, terminoBusqueda, void 0, this.tipoFiltro, this.estadoFiltro).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.comuneros = res.data.content;
          this.totalElements = res.data.totalElements;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  abrirCrearModal() {
    this.isEditing = false;
    this.selectedComunero = null;
    const nextNum = "PAD-" + String(this.totalElements + 1).padStart(3, "0");
    this.comuneroForm.reset({
      numeroPadron: nextNum,
      dni: "",
      nombres: "",
      apellidos: "",
      fechaNacimiento: "",
      estadoCivil: "CASADO",
      ocupacion: "Agricultor",
      telefono: "",
      tipoComunero: "CALIFICADO",
      caserio: "Sogor\xF3n Alto",
      estado: "ACTIVO"
    });
    this.dialogRef = this.dialog.open(this.comuneroFormDialog, { width: "680px" });
  }
  abrirEditarModal(comunero) {
    this.isEditing = true;
    this.selectedComunero = comunero;
    this.comuneroForm.patchValue({
      numeroPadron: comunero.numeroPadron || comunero.codigoComunero,
      dni: comunero.dni,
      nombres: comunero.nombres,
      apellidos: comunero.apellidos,
      fechaNacimiento: comunero.fechaNacimiento || "",
      estadoCivil: comunero.estadoCivil || "CASADO",
      ocupacion: comunero.ocupacion || "Agricultor",
      telefono: comunero.telefono || "",
      tipoComunero: comunero.tipoComunero || "CALIFICADO",
      caserio: comunero.caserio || "Sogor\xF3n Alto",
      estado: comunero.estado || "ACTIVO"
    });
    this.dialogRef = this.dialog.open(this.comuneroFormDialog, { width: "680px" });
  }
  verDetalle(comunero) {
    this.selectedComunero = comunero;
    this.dialog.open(this.detalleDialog, { width: "540px" });
  }
  guardarComunero() {
    if (this.comuneroForm.invalid) {
      this.comuneroForm.markAllAsTouched();
      this.notify.warning("Por favor complete los campos obligatorios.");
      return;
    }
    const val = this.comuneroForm.value;
    const req = {
      codigoComunero: val.numeroPadron,
      numeroPadron: val.numeroPadron,
      dni: val.dni,
      nombres: val.nombres,
      apellidos: val.apellidos,
      fechaNacimiento: val.fechaNacimiento || void 0,
      estadoCivil: val.estadoCivil,
      ocupacion: val.ocupacion,
      telefono: val.telefono,
      tipoComunero: val.tipoComunero,
      caserio: val.caserio,
      estado: val.estado,
      condicionHabilitacion: val.tipoComunero === "CALIFICADO" ? "HABILITADO" : "INHABILITADO"
    };
    if (this.isEditing && this.selectedComunero) {
      this.comuneroService.actualizar(this.selectedComunero.id, req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success("Comunero actualizado exitosamente.");
            this.dialogRef?.close();
            this.cargarComuneros();
          }
        }
      });
    } else {
      this.comuneroService.crear(req).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success("Comunero registrado en el padr\xF3n exitosamente.");
            this.dialogRef?.close();
            this.cargarComuneros();
          }
        }
      });
    }
  }
  eliminarComunero(comunero) {
    if (confirm(`\xBFEst\xE1 seguro de retirar del padr\xF3n activo a ${comunero.nombreCompleto}?`)) {
      this.comuneroService.eliminar(comunero.id).subscribe({
        next: (res) => {
          if (res.success) {
            this.notify.success("Comunero dado de baja del padr\xF3n.");
            this.cargarComuneros();
          }
        }
      });
    }
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarComuneros();
  }
  buscar() {
    this.pageIndex = 0;
    this.cargarComuneros();
  }
  limpiarFiltros() {
    this.busqueda = "";
    this.caserioFiltro = "";
    this.estadoFiltro = "";
    this.tipoFiltro = "";
    this.pageIndex = 0;
    this.cargarComuneros();
  }
  static {
    this.\u0275fac = function ComunerosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComunerosComponent)(\u0275\u0275directiveInject(ComuneroService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComunerosComponent, selectors: [["app-comuneros"]], viewQuery: function ComunerosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comuneroFormDialog = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detalleDialog = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 88, vars: 15, consts: [["comuneroFormDialog", ""], ["detalleDialog", ""], ["title", "Padr\xF3n Oficial de Comuneros", "subtitle", "Comunidad Campesina de La Enca\xF1ada \u2014 Registro de comuneros calificados y no calificados", "icon", "people"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-card"], [1, "filter-content"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Ej. 45892341 o PAD-005", 3, "ngModelChange", "keyup.enter", "ngModel"], ["appearance", "outline"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-actions"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", 3, "click"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], [1, "table-container"], ["mat-table", "", 1, "w-100", "main-table", 3, "dataSource"], ["matColumnDef", "numeroPadron"], ["mat-header-cell", "", "class", "table-header-cell", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dni"], ["matColumnDef", "nombreCompleto"], ["matColumnDef", "fechaNacimiento"], ["matColumnDef", "estadoCivil"], ["matColumnDef", "ocupacion"], ["matColumnDef", "telefono"], ["matColumnDef", "tipoComunero"], ["matColumnDef", "caserio"], ["matColumnDef", "estado"], ["matColumnDef", "acciones"], ["mat-header-row", "", "class", "table-header-row", 4, "matHeaderRowDef"], ["mat-row", "", "class", "table-data-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], [3, "value"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", "", 1, "table-header-cell"], ["mat-cell", ""], [1, "badge", 3, "ngClass"], [1, "badge-caserio"], [1, "action-buttons"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Ver Ficha", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Editar", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Dar de baja", 3, "click"], ["mat-header-row", "", 1, "table-header-row"], ["mat-row", "", 1, "table-data-row"], [1, "mat-row"], ["colspan", "11", 1, "mat-cell", 2, "text-align", "center", "padding", "32px"], ["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], [1, "form-row"], ["matInput", "", "formControlName", "numeroPadron", "placeholder", "Ej. PAD-036"], [4, "ngIf"], ["matInput", "", "formControlName", "dni", "placeholder", "Ej. 42345678", "maxlength", "8"], ["matInput", "", "formControlName", "nombres", "placeholder", "Ej. Juan"], ["matInput", "", "formControlName", "apellidos", "placeholder", "Ej. Quispe Huam\xE1n"], ["matInput", "", "type", "date", "formControlName", "fechaNacimiento"], ["formControlName", "estadoCivil"], ["matInput", "", "formControlName", "ocupacion", "placeholder", "Ej. Agricultor, Ganadero"], ["matInput", "", "formControlName", "telefono", "placeholder", "Ej. 987654321"], ["formControlName", "caserio"], ["formControlName", "tipoComunero"], ["value", "CALIFICADO"], ["value", "NO_CALIFICADO"], [1, "form-row", "single"], ["appearance", "outline", 1, "w-100"], ["formControlName", "estado"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [1, "detail-box"], [1, "detail-header-info"], [1, "detail-grid"], [1, "d-item"], [1, "d-label"], [1, "d-val", "highlight-caserio"], [1, "d-val"], ["class", "d-item", 4, "ngIf"], [1, "d-val", "text-danger"]], template: function ComunerosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-page-header", 2)(1, "button", 3);
        \u0275\u0275listener("click", function ComunerosComponent_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.abrirCrearModal());
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " Registrar Nuevo Comunero ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-card", 4)(6, "mat-card-content", 5)(7, "mat-form-field", 6)(8, "mat-label");
        \u0275\u0275text(9, "Buscar por DNI, Nombres o N\xB0 Padr\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-icon", 7);
        \u0275\u0275text(11, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ComunerosComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.busqueda, $event) || (ctx.busqueda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keyup.enter", function ComunerosComponent_Template_input_keyup_enter_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-form-field", 9)(14, "mat-label");
        \u0275\u0275text(15, "Caser\xEDo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ComunerosComponent_Template_mat_select_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.caserioFiltro, $event) || (ctx.caserioFiltro = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectionChange", function ComunerosComponent_Template_mat_select_selectionChange_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar());
        });
        \u0275\u0275elementStart(17, "mat-option", 11);
        \u0275\u0275text(18, "Todos los Caser\xEDos");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, ComunerosComponent_mat_option_19_Template, 2, 2, "mat-option", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-form-field", 9)(21, "mat-label");
        \u0275\u0275text(22, "Tipo Comunero");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ComunerosComponent_Template_mat_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.tipoFiltro, $event) || (ctx.tipoFiltro = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectionChange", function ComunerosComponent_Template_mat_select_selectionChange_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar());
        });
        \u0275\u0275elementStart(24, "mat-option", 11);
        \u0275\u0275text(25, "Todos los Tipos");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ComunerosComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-form-field", 9)(28, "mat-label");
        \u0275\u0275text(29, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ComunerosComponent_Template_mat_select_ngModelChange_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.estadoFiltro, $event) || (ctx.estadoFiltro = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectionChange", function ComunerosComponent_Template_mat_select_selectionChange_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar());
        });
        \u0275\u0275elementStart(31, "mat-option", 11);
        \u0275\u0275text(32, "Todos los Estados");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, ComunerosComponent_mat_option_33_Template, 2, 2, "mat-option", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 13)(35, "button", 14);
        \u0275\u0275listener("click", function ComunerosComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar());
        });
        \u0275\u0275elementStart(36, "mat-icon");
        \u0275\u0275text(37, "filter_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " Filtrar ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 15);
        \u0275\u0275listener("click", function ComunerosComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.limpiarFiltros());
        });
        \u0275\u0275elementStart(40, "mat-icon");
        \u0275\u0275text(41, "restart_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " Limpiar ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "mat-card", 16);
        \u0275\u0275template(44, ComunerosComponent_div_44_Template, 2, 0, "div", 17);
        \u0275\u0275elementStart(45, "div", 18)(46, "table", 19);
        \u0275\u0275elementContainerStart(47, 20);
        \u0275\u0275template(48, ComunerosComponent_th_48_Template, 2, 0, "th", 21)(49, ComunerosComponent_td_49_Template, 3, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(50, 23);
        \u0275\u0275template(51, ComunerosComponent_th_51_Template, 2, 0, "th", 21)(52, ComunerosComponent_td_52_Template, 3, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(53, 24);
        \u0275\u0275template(54, ComunerosComponent_th_54_Template, 2, 0, "th", 21)(55, ComunerosComponent_td_55_Template, 3, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(56, 25);
        \u0275\u0275template(57, ComunerosComponent_th_57_Template, 2, 0, "th", 21)(58, ComunerosComponent_td_58_Template, 2, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(59, 26);
        \u0275\u0275template(60, ComunerosComponent_th_60_Template, 2, 0, "th", 21)(61, ComunerosComponent_td_61_Template, 2, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(62, 27);
        \u0275\u0275template(63, ComunerosComponent_th_63_Template, 2, 0, "th", 21)(64, ComunerosComponent_td_64_Template, 2, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(65, 28);
        \u0275\u0275template(66, ComunerosComponent_th_66_Template, 2, 0, "th", 21)(67, ComunerosComponent_td_67_Template, 2, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(68, 29);
        \u0275\u0275template(69, ComunerosComponent_th_69_Template, 2, 0, "th", 21)(70, ComunerosComponent_td_70_Template, 3, 2, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(71, 30);
        \u0275\u0275template(72, ComunerosComponent_th_72_Template, 2, 0, "th", 21)(73, ComunerosComponent_td_73_Template, 5, 1, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(74, 31);
        \u0275\u0275template(75, ComunerosComponent_th_75_Template, 2, 0, "th", 21)(76, ComunerosComponent_td_76_Template, 4, 5, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(77, 32);
        \u0275\u0275template(78, ComunerosComponent_th_78_Template, 2, 0, "th", 21)(79, ComunerosComponent_td_79_Template, 11, 0, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(80, ComunerosComponent_tr_80_Template, 1, 0, "tr", 33)(81, ComunerosComponent_tr_81_Template, 1, 0, "tr", 34)(82, ComunerosComponent_tr_82_Template, 3, 0, "tr", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "mat-paginator", 36);
        \u0275\u0275listener("page", function ComunerosComponent_Template_mat_paginator_page_83_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageChange($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(84, ComunerosComponent_ng_template_84_Template, 75, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(86, ComunerosComponent_ng_template_86_Template, 6, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.busqueda);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.caserioFiltro);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.caserios);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.tipoFiltro);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.tiposComunero);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.estadoFiltro);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.estados);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.comuneros);
        \u0275\u0275advance(34);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalElements)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(14, _c2));
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatCardContent,
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
      MatPrefix,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      PageHeaderComponent,
      EstadoBadgePipe
    ], styles: ["\n\n.top-action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.top-action-bar[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-radius: 12px;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -1.25em;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n  height: 540px;\n}\n.table-card[_ngcontent-%COMP%]   .main-table[_ngcontent-%COMP%]   .table-header-row[_ngcontent-%COMP%] {\n  background-color: #1e293b !important;\n  border-bottom: 2px solid #334155 !important;\n  height: 52px;\n}\n.table-card[_ngcontent-%COMP%]   .main-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 700 !important;\n  font-size: 0.85rem !important;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-card[_ngcontent-%COMP%]   .main-table[_ngcontent-%COMP%]   .table-data-row[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n}\n.table-card[_ngcontent-%COMP%]   .badge-caserio[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  padding: 4px 10px;\n  border-radius: 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.table-card[_ngcontent-%COMP%]   .badge-caserio[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.table-card[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table-container[_ngcontent-%COMP%] {\n  height: 470px;\n  overflow-y: auto;\n  overflow-x: auto;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n}\n.dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.dialog-form[_ngcontent-%COMP%]   .form-row.single[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -0.8em;\n}\n.detail-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-header-info[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #f8fafc;\n  padding: 14px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  color: #0f172a;\n  font-size: 1.2rem;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .d-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #fafafa;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .d-item[_ngcontent-%COMP%]   .d-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: #64748b;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .d-item[_ngcontent-%COMP%]   .d-val[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #1e293b;\n  font-weight: 500;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .d-item[_ngcontent-%COMP%]   .d-val.highlight-caserio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #2563eb;\n  font-weight: 700;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .d-item[_ngcontent-%COMP%]   .d-val.highlight-caserio[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .d-item[_ngcontent-%COMP%]   .d-val.text-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  white-space: nowrap;\n}\n  .mat-mdc-row:nth-child(odd) {\n  background-color: #ffffff;\n}\n  .mat-mdc-row:nth-child(even) {\n  background-color: #f8fafc;\n}\n/*# sourceMappingURL=comuneros.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComunerosComponent, { className: "ComunerosComponent", filePath: "src\\app\\features\\comuneros\\comuneros.component.ts", lineNumber: 46 });
})();
export {
  ComunerosComponent
};
//# sourceMappingURL=chunk-WZANDEFJ.js.map
