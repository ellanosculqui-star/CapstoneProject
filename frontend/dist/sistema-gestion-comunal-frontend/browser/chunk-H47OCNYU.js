import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-AFNCRAGG.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-D7XIIXT7.js";
import {
  AsambleaService
} from "./chunk-M72RZVFD.js";
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
  MatHeaderRow,
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
  NgModel,
  NumberValueAccessor,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RAFJE6SV.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/asambleas/asambleas.component.ts
var _c0 = ["asambleaFormDialog"];
var _c1 = ["detalleDialog"];
var _c2 = () => [5, 10, 25];
function AsambleasComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "T\xEDtulo de Asamblea");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r2.titulo);
  }
}
function AsambleasComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Tipo");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.tipo);
  }
}
function AsambleasComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.fecha);
  }
}
function AsambleasComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Hora Inicio");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.horaInicio);
  }
}
function AsambleasComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Lugar");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.lugar);
  }
}
function AsambleasComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33)(1, "span");
    \u0275\u0275pipe(2, "estadoBadge");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, element_r7.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r7.estado, " ");
  }
}
function AsambleasComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Qu\xF3rum M\xEDn");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", element_r8.quorumMinimoPct, "%");
  }
}
function AsambleasComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_td_48_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function AsambleasComponent_td_48_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const element_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.cambiarEstado(element_r10, "EN_CURSO"));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd()();
  }
}
function AsambleasComponent_td_48_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function AsambleasComponent_td_48_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const element_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.cambiarEstado(element_r10, "FINALIZADA"));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "stop");
    \u0275\u0275elementEnd()();
  }
}
function AsambleasComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "button", 34);
    \u0275\u0275listener("click", function AsambleasComponent_td_48_Template_button_click_1_listener() {
      const element_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.verDetalle(element_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AsambleasComponent_td_48_button_4_Template, 3, 0, "button", 35)(5, AsambleasComponent_td_48_button_5_Template, 3, 0, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", element_r10.estado === "PROGRAMADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r10.estado === "EN_CURSO");
  }
}
function AsambleasComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function AsambleasComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
}
function AsambleasComponent_ng_template_52_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El t\xEDtulo es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_ng_template_52_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La agenda es obligatoria");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_ng_template_52_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La fecha es obligatoria");
    \u0275\u0275elementEnd();
  }
}
function AsambleasComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 41);
    \u0275\u0275text(1, "Convocar Nueva Asamblea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 42)(4, "mat-form-field", 43)(5, "mat-label");
    \u0275\u0275text(6, "T\xEDtulo de la Convocatoria");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 44);
    \u0275\u0275template(8, AsambleasComponent_ng_template_52_mat_error_8_Template, 2, 0, "mat-error", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 43)(10, "mat-label");
    \u0275\u0275text(11, "Agenda / Puntos a Tratar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 46);
    \u0275\u0275template(13, AsambleasComponent_ng_template_52_mat_error_13_Template, 2, 0, "mat-error", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 47)(15, "mat-form-field", 7)(16, "mat-label");
    \u0275\u0275text(17, "Tipo de Asamblea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 48)(19, "mat-option", 49);
    \u0275\u0275text(20, "Ordinaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 50);
    \u0275\u0275text(22, "Extraordinaria");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "mat-form-field", 7)(24, "mat-label");
    \u0275\u0275text(25, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 51);
    \u0275\u0275template(27, AsambleasComponent_ng_template_52_mat_error_27_Template, 2, 0, "mat-error", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 47)(29, "mat-form-field", 7)(30, "mat-label");
    \u0275\u0275text(31, "Hora Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 7)(34, "mat-label");
    \u0275\u0275text(35, "Qu\xF3rum M\xEDnimo (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "mat-form-field", 43)(38, "mat-label");
    \u0275\u0275text(39, "Lugar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "mat-dialog-actions", 55)(42, "button", 56);
    \u0275\u0275text(43, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 57);
    \u0275\u0275listener("click", function AsambleasComponent_ng_template_52_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.guardarAsamblea());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Publicar Convocatoria ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r10.asambleaForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r10.asambleaForm.get("titulo")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r10.asambleaForm.get("agenda")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r10.asambleaForm.get("fecha")) == null ? null : tmp_6_0.hasError("required"));
  }
}
function AsambleasComponent_ng_template_54_mat_dialog_content_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-dialog-content")(1, "div", 59)(2, "div", 60)(3, "span");
    \u0275\u0275text(4, "T\xEDtulo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60)(8, "span");
    \u0275\u0275text(9, "Tipo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 60)(13, "span");
    \u0275\u0275text(14, "Fecha y Hora:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "span");
    \u0275\u0275text(19, "Lugar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "span");
    \u0275\u0275text(24, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275pipe(26, "estadoBadge");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 60)(29, "span");
    \u0275\u0275text(30, "Qu\xF3rum M\xEDnimo Requerido:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 61)(34, "span");
    \u0275\u0275text(35, "Agenda:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r10.selectedAsamblea.titulo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r10.selectedAsamblea.tipo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r10.selectedAsamblea.fecha, " a las ", ctx_r10.selectedAsamblea.horaInicio, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r10.selectedAsamblea.lugar);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(26, 10, ctx_r10.selectedAsamblea.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r10.selectedAsamblea.estado);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r10.selectedAsamblea.quorumMinimoPct, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r10.selectedAsamblea.agenda);
  }
}
function AsambleasComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 41);
    \u0275\u0275text(1, "Detalle de la Asamblea");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AsambleasComponent_ng_template_54_mat_dialog_content_2_Template, 38, 12, "mat-dialog-content", 45);
    \u0275\u0275elementStart(3, "mat-dialog-actions", 55)(4, "button", 58);
    \u0275\u0275text(5, "Cerrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r10.selectedAsamblea);
  }
}
var AsambleasComponent = class _AsambleasComponent {
  constructor(asambleaService, notify, fb, dialog) {
    this.asambleaService = asambleaService;
    this.notify = notify;
    this.fb = fb;
    this.dialog = dialog;
    this.displayedColumns = ["titulo", "tipo", "fecha", "horaInicio", "lugar", "estado", "quorumMinimoPct", "acciones"];
    this.asambleas = [];
    this.totalElements = 0;
    this.pageSize = 10;
    this.pageIndex = 0;
    this.loading = false;
    this.estadoFiltro = "";
    this.selectedAsamblea = null;
  }
  ngOnInit() {
    this.initForm();
    this.cargarAsambleas();
  }
  initForm() {
    this.asambleaForm = this.fb.group({
      titulo: ["", [Validators.required]],
      agenda: ["", [Validators.required]],
      tipo: ["ORDINARIA", [Validators.required]],
      fecha: ["", [Validators.required]],
      horaInicio: ["09:00", [Validators.required]],
      horaFin: ["13:00"],
      lugar: ["Local Comunal", [Validators.required]],
      quorumMinimoPct: [50, [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }
  cargarAsambleas() {
    this.loading = true;
    this.asambleaService.listar(this.pageIndex, this.pageSize, this.estadoFiltro).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.asambleas = res.data.content;
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
    this.asambleaForm.reset({
      tipo: "ORDINARIA",
      horaInicio: "09:00",
      horaFin: "13:00",
      lugar: "Local Comunal Principal",
      quorumMinimoPct: 50
    });
    this.dialogRef = this.dialog.open(this.asambleaFormDialog, { width: "600px" });
  }
  verDetalle(asamblea) {
    this.selectedAsamblea = asamblea;
    this.dialog.open(this.detalleDialog, { width: "500px" });
  }
  guardarAsamblea() {
    if (this.asambleaForm.invalid) {
      this.asambleaForm.markAllAsTouched();
      return;
    }
    const req = this.asambleaForm.value;
    this.asambleaService.crear(req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Asamblea convocada exitosamente");
          this.dialogRef?.close();
          this.cargarAsambleas();
        }
      }
    });
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarAsambleas();
  }
  onFiltrar() {
    this.pageIndex = 0;
    this.cargarAsambleas();
  }
  cambiarEstado(asamblea, nuevoEstado) {
    this.asambleaService.cambiarEstado(asamblea.id, nuevoEstado).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success(`Asamblea actualizada a estado: ${nuevoEstado}`);
          this.cargarAsambleas();
        }
      }
    });
  }
  static {
    this.\u0275fac = function AsambleasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsambleasComponent)(\u0275\u0275directiveInject(AsambleaService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AsambleasComponent, selectors: [["app-asambleas"]], viewQuery: function AsambleasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.asambleaFormDialog = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detalleDialog = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 9, consts: [["asambleaFormDialog", ""], ["detalleDialog", ""], ["title", "Gesti\xF3n de Asambleas", "subtitle", "Convocatoria, control de estados y actas de asambleas comunales", "icon", "gavel"], [1, "top-action-bar"], ["mat-raised-button", "", "color", "primary", 1, "create-btn", 3, "click"], [1, "filter-card"], [1, "filter-content"], ["appearance", "outline"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", ""], ["value", "PROGRAMADA"], ["value", "EN_CURSO"], ["value", "FINALIZADA"], ["value", "CANCELADA"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "titulo"], ["mat-header-cell", "", 4, "matHeader-cellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tipo"], ["matColumnDef", "fecha"], ["matColumnDef", "horaInicio"], ["matColumnDef", "lugar"], ["matColumnDef", "estado"], ["matColumnDef", "quorumMinimoPct"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeader-rowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "Ver detalle", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Iniciar Asamblea", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Finalizar Asamblea", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Iniciar Asamblea", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Finalizar Asamblea", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "titulo", "placeholder", "Ej. Asamblea General Ordinaria - Agosto 2026"], [4, "ngIf"], ["matInput", "", "formControlName", "agenda", "rows", "3", "placeholder", "1. Lectura del acta anterior. 2. Informe financiero. 3. Votaci\xF3n de faena comunal."], [1, "form-row"], ["formControlName", "tipo"], ["value", "ORDINARIA"], ["value", "EXTRAORDINARIA"], ["matInput", "", "type", "date", "formControlName", "fecha"], ["matInput", "", "type", "time", "formControlName", "horaInicio"], ["matInput", "", "type", "number", "formControlName", "quorumMinimoPct"], ["matInput", "", "formControlName", "lugar", "placeholder", "Ej. Local Comunal Central"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [1, "detail-box"], [1, "detail-item"], [1, "detail-agenda"]], template: function AsambleasComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "button", 4);
        \u0275\u0275listener("click", function AsambleasComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.abrirCrearModal());
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "add_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Convocar Nueva Asamblea ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-card", 5)(7, "mat-card-content", 6)(8, "mat-form-field", 7)(9, "mat-label");
        \u0275\u0275text(10, "Filtrar por Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AsambleasComponent_Template_mat_select_ngModelChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.estadoFiltro, $event) || (ctx.estadoFiltro = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectionChange", function AsambleasComponent_Template_mat_select_selectionChange_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFiltrar());
        });
        \u0275\u0275elementStart(12, "mat-option", 9);
        \u0275\u0275text(13, "Todas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-option", 10);
        \u0275\u0275text(15, "Programadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-option", 11);
        \u0275\u0275text(17, "En Curso");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-option", 12);
        \u0275\u0275text(19, "Finalizadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-option", 13);
        \u0275\u0275text(21, "Canceladas");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "mat-card", 14);
        \u0275\u0275template(23, AsambleasComponent_div_23_Template, 2, 0, "div", 15);
        \u0275\u0275elementStart(24, "table", 16);
        \u0275\u0275elementContainerStart(25, 17);
        \u0275\u0275template(26, AsambleasComponent_th_26_Template, 2, 0, "th", 18)(27, AsambleasComponent_td_27_Template, 3, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(28, 20);
        \u0275\u0275template(29, AsambleasComponent_th_29_Template, 2, 0, "th", 18)(30, AsambleasComponent_td_30_Template, 2, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(31, 21);
        \u0275\u0275template(32, AsambleasComponent_th_32_Template, 2, 0, "th", 18)(33, AsambleasComponent_td_33_Template, 2, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(34, 22);
        \u0275\u0275template(35, AsambleasComponent_th_35_Template, 2, 0, "th", 18)(36, AsambleasComponent_td_36_Template, 2, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(37, 23);
        \u0275\u0275template(38, AsambleasComponent_th_38_Template, 2, 0, "th", 18)(39, AsambleasComponent_td_39_Template, 2, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(40, 24);
        \u0275\u0275template(41, AsambleasComponent_th_41_Template, 2, 0, "th", 18)(42, AsambleasComponent_td_42_Template, 4, 5, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(43, 25);
        \u0275\u0275template(44, AsambleasComponent_th_44_Template, 2, 0, "th", 18)(45, AsambleasComponent_td_45_Template, 2, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(46, 26);
        \u0275\u0275template(47, AsambleasComponent_th_47_Template, 2, 0, "th", 18)(48, AsambleasComponent_td_48_Template, 6, 2, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(49, AsambleasComponent_tr_49_Template, 1, 0, "tr", 27)(50, AsambleasComponent_tr_50_Template, 1, 0, "tr", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "mat-paginator", 29);
        \u0275\u0275listener("page", function AsambleasComponent_Template_mat_paginator_page_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageChange($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(52, AsambleasComponent_ng_template_52_Template, 48, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(54, AsambleasComponent_ng_template_54_Template, 6, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.estadoFiltro);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.asambleas);
        \u0275\u0275advance(25);
        \u0275\u0275property("matHeader-rowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("length", ctx.totalElements)("pageSize", ctx.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(8, _c2));
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
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
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatSelectModule,
      MatFormField,
      MatLabel,
      MatError,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
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
      PageHeaderComponent,
      EstadoBadgePipe
    ], styles: ["\n\n.top-action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.top-action-bar[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-radius: 12px;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -1.25em;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  position: relative;\n}\n.table-card[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n}\n.dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -0.8em;\n}\n.detail-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px 0;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 8px;\n  font-size: 0.9rem;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #64748b;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-agenda[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-agenda[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  display: block;\n  margin-bottom: 4px;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-agenda[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 10px;\n  border-radius: 8px;\n  margin: 0;\n  color: #334155;\n}\n/*# sourceMappingURL=asambleas.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AsambleasComponent, { className: "AsambleasComponent", filePath: "src\\app\\features\\asambleas\\asambleas.component.ts", lineNumber: 44 });
})();
export {
  AsambleasComponent
};
//# sourceMappingURL=chunk-H47OCNYU.js.map
