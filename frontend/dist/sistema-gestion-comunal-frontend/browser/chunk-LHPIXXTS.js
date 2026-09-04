import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-ODVPMSHY.js";
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
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-G5AK5GOQ.js";
import "./chunk-4QFLIVIW.js";
import {
  NotificationService
} from "./chunk-OL7LJQ7U.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-GOMAGJXZ.js";
import "./chunk-GQRCTAQD.js";
import "./chunk-QOKG7DIS.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  MatCardModule
} from "./chunk-7XLWBOHN.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption
} from "./chunk-YDVBR4EU.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  environment,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NVPU2YFC.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/actas/actas.component.ts
var _c0 = ["actaFormDialog"];
var _c1 = ["detalleDialog"];
function ActasComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "N\xB0 de Acta");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r2.numeroActa);
  }
}
function ActasComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Asamblea Vinculada");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.asambleaTitulo);
  }
}
function ActasComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.fecha);
  }
}
function ActasComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Lugar");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.lugar);
  }
}
function ActasComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Estado de Acta");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27)(1, "span");
    \u0275\u0275pipe(2, "estadoBadge");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, element_r6.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r6.estado);
  }
}
function ActasComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_td_38_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ActasComponent_td_38_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const element_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.firmarYAprobarActa(element_r8));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "draw");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Firmar ");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 27)(1, "button", 28);
    \u0275\u0275listener("click", function ActasComponent_td_38_Template_button_click_1_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.verDetalle(element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ActasComponent_td_38_button_4_Template, 4, 0, "button", 29);
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function ActasComponent_td_38_Template_button_click_5_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.imprimirActa(element_r8));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "print");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", element_r8.estado === "BORRADOR" || element_r8.estado === "OBSERVADA");
  }
}
function ActasComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
function ActasComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ActasComponent_ng_template_41_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r12 = ctx.$implicit;
    \u0275\u0275property("value", a_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" \u{1F7E2} ", a_r12.titulo, " (", a_r12.fecha, ") - ", a_r12.estado, " ");
  }
}
function ActasComponent_ng_template_41_mat_hint_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint", 53);
    \u0275\u0275text(1, " No hay asambleas activas en curso en este momento. ");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_ng_template_41_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Debe seleccionar una asamblea activa");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_ng_template_41_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Obligatorio");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 34);
    \u0275\u0275text(1, "Redactar Nueva Acta de Asamblea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 35)(4, "mat-form-field", 36)(5, "mat-label");
    \u0275\u0275text(6, "Seleccionar Asamblea Activa (En curso / Programada)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-select", 37);
    \u0275\u0275listener("selectionChange", function ActasComponent_ng_template_41_Template_mat_select_selectionChange_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onAsambleaSeleccionada($event.value));
    });
    \u0275\u0275template(8, ActasComponent_ng_template_41_mat_option_8_Template, 2, 4, "mat-option", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ActasComponent_ng_template_41_mat_hint_9_Template, 2, 0, "mat-hint", 39)(10, ActasComponent_ng_template_41_mat_error_10_Template, 2, 0, "mat-error", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 41)(12, "mat-form-field", 42)(13, "mat-label");
    \u0275\u0275text(14, "N\xFAmero de Acta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 43);
    \u0275\u0275template(16, ActasComponent_ng_template_41_mat_error_16_Template, 2, 0, "mat-error", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 42)(18, "mat-label");
    \u0275\u0275text(19, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 36)(22, "mat-label");
    \u0275\u0275text(23, "Lugar de Celebraci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 36)(26, "mat-label");
    \u0275\u0275text(27, "Agenda y Orden del D\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 36)(30, "mat-label");
    \u0275\u0275text(31, "Resumen de Debates y Acuerdos Tomados");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 36)(34, "mat-label");
    \u0275\u0275text(35, "Observaciones Adicionales");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "mat-dialog-actions", 49)(38, "button", 50);
    \u0275\u0275text(39, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 51);
    \u0275\u0275listener("click", function ActasComponent_ng_template_41_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.guardarActa());
    });
    \u0275\u0275elementStart(41, "mat-icon");
    \u0275\u0275text(42, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Guardar Borrador ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r8.actaForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r8.asambleasActivas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r8.asambleasActivas.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r8.actaForm.get("asambleaId")) == null ? null : tmp_6_0.hasError("required"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r8.actaForm.get("numeroActa")) == null ? null : tmp_7_0.hasError("required"));
  }
}
function ActasComponent_ng_template_43_mat_dialog_content_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "h3");
    \u0275\u0275text(2, "3. Acuerdos y Deliberaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r8.selectedActa.resumen);
  }
}
function ActasComponent_ng_template_43_mat_dialog_content_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-dialog-content")(1, "div", 57)(2, "div", 58)(3, "p")(4, "strong");
    \u0275\u0275text(5, "Asamblea:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9, "Fecha y Lugar:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Responsable / Secretario:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p")(16, "strong");
    \u0275\u0275text(17, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275pipe(19, "estadoBadge");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 59)(22, "h3");
    \u0275\u0275text(23, "1. Asistencia y Qu\xF3rum Computado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Habilitados: ");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " | Asistentes: ");
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " | Ausentes: ");
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Porcentaje Asistencia: ");
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 59)(40, "h3");
    \u0275\u0275text(41, "2. Agenda Tratada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 60);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, ActasComponent_ng_template_43_mat_dialog_content_2_div_44_Template, 5, 1, "div", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r8.selectedActa.asambleaTitulo, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r8.selectedActa.fecha, " \u2014 ", ctx_r8.selectedActa.lugar, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r8.selectedActa.responsableNombre, "");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(19, 14, ctx_r8.selectedActa.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r8.selectedActa.estado);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r8.selectedActa.totalHabilitados);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r8.selectedActa.totalAsistentes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r8.selectedActa.totalAusentes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r8.selectedActa.porcentajeAsistencia, "%");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (Qu\xF3rum ", ctx_r8.selectedActa.quorumAlcanzado ? "Alcanzado" : "No Alcanzado", ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r8.selectedActa.agenda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r8.selectedActa.resumen);
  }
}
function ActasComponent_ng_template_43_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function ActasComponent_ng_template_43_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r8.firmarYAprobarActa(ctx_r8.selectedActa));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "draw");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Firmar y Aprobar Acta ");
    \u0275\u0275elementEnd();
  }
}
function ActasComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ActasComponent_ng_template_43_mat_dialog_content_2_Template, 45, 16, "mat-dialog-content", 40);
    \u0275\u0275elementStart(3, "mat-dialog-actions", 49);
    \u0275\u0275template(4, ActasComponent_ng_template_43_button_4_Template, 4, 0, "button", 54);
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function ActasComponent_ng_template_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.imprimirActa(ctx_r8.selectedActa));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Imprimir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 56);
    \u0275\u0275text(10, "Cerrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Acta N\xB0 ", ctx_r8.selectedActa == null ? null : ctx_r8.selectedActa.numeroActa, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r8.selectedActa);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r8.selectedActa == null ? null : ctx_r8.selectedActa.estado) === "BORRADOR" || (ctx_r8.selectedActa == null ? null : ctx_r8.selectedActa.estado) === "OBSERVADA");
  }
}
var ActasComponent = class _ActasComponent {
  constructor(http, notify, fb, dialog) {
    this.http = http;
    this.notify = notify;
    this.fb = fb;
    this.dialog = dialog;
    this.displayedColumns = ["numeroActa", "asambleaTitulo", "fecha", "lugar", "estado", "acciones"];
    this.actas = [];
    this.asambleasActivas = [];
    this.loading = false;
    this.estadoFiltro = "";
    this.selectedActa = null;
  }
  ngOnInit() {
    this.initForm();
    this.cargarActas();
    this.cargarAsambleasActivas();
  }
  initForm() {
    this.actaForm = this.fb.group({
      asambleaId: ["", [Validators.required]],
      numeroActa: ["ACT-2026-001", [Validators.required]],
      fecha: [(/* @__PURE__ */ new Date()).toISOString().substring(0, 10), [Validators.required]],
      lugar: ["Local Comunal Central", [Validators.required]],
      agenda: ["", [Validators.required]],
      resumen: [""],
      observaciones: [""]
    });
  }
  cargarActas() {
    this.loading = true;
    let url = `${environment.apiUrl}/actas`;
    if (this.estadoFiltro) {
      url += `?estado=${this.estadoFiltro}`;
    }
    this.http.get(url).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.actas = res.data.content || res.data;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  // Carga únicamente las asambleas activas (EN_CURSO o PROGRAMADA) para vincular a nuevas actas
  cargarAsambleasActivas() {
    this.http.get(`${environment.apiUrl}/asambleas?estado=EN_CURSO&size=50`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.asambleasActivas = res.data.content || res.data;
          if (this.asambleasActivas.length === 0) {
            this.http.get(`${environment.apiUrl}/asambleas?estado=PROGRAMADA&size=50`).subscribe({
              next: (resProg) => {
                if (resProg.success && resProg.data) {
                  this.asambleasActivas = resProg.data.content || resProg.data;
                }
              }
            });
          }
        }
      }
    });
  }
  onAsambleaSeleccionada(asambleaId) {
    if (!asambleaId)
      return;
    this.http.get(`${environment.apiUrl}/actas/asamblea/${asambleaId}/borrador-automatico`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const b = res.data;
          this.actaForm.patchValue({
            numeroActa: b.numeroActa || "ACT-2026-00" + (this.actas.length + 1),
            lugar: b.lugar || "Local Comunal Central",
            agenda: b.agenda || "",
            resumen: b.resumen || ""
          });
          this.notify.info("Se han precargado los datos y qu\xF3rum de la asamblea seleccionada");
        }
      }
    });
  }
  abrirCrearModal() {
    this.cargarAsambleasActivas();
    this.actaForm.reset({
      numeroActa: "ACT-2026-00" + (this.actas.length + 1),
      fecha: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
      lugar: "Local Comunal Central"
    });
    this.dialogRef = this.dialog.open(this.actaFormDialog, { width: "600px" });
  }
  verDetalle(acta) {
    this.selectedActa = acta;
    this.dialog.open(this.detalleDialog, { width: "650px" });
  }
  guardarActa() {
    if (this.actaForm.invalid) {
      this.actaForm.markAllAsTouched();
      return;
    }
    const req = this.actaForm.value;
    this.http.post(`${environment.apiUrl}/actas`, req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Acta borrador registrada exitosamente");
          this.dialogRef?.close();
          this.cargarActas();
        }
      }
    });
  }
  firmarYAprobarActa(acta) {
    this.http.patch(`${environment.apiUrl}/actas/${acta.id}/aprobar`, {}).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success(`Acta N\xB0 ${acta.numeroActa} aprobada y firmada digitalmente`);
          this.cargarActas();
          if (this.selectedActa && this.selectedActa.id === acta.id) {
            this.selectedActa.estado = "APROBADA";
          }
        }
      }
    });
  }
  imprimirActa(acta) {
    this.selectedActa = acta;
    setTimeout(() => window.print(), 300);
  }
  static {
    this.\u0275fac = function ActasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActasComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActasComponent, selectors: [["app-actas"]], viewQuery: function ActasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actaFormDialog = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detalleDialog = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 5, consts: [["actaFormDialog", ""], ["detalleDialog", ""], ["title", "Registro de Actas y Acuerdos de Asambleas", "subtitle", "Redacci\xF3n de actas de asambleas activas, firmas digitales y archivo oficial", "icon", "description"], [1, "top-action-bar"], ["appearance", "outline", 1, "filter-select"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", ""], ["value", "BORRADOR"], ["value", "APROBADA"], ["value", "FINALIZADA"], ["mat-raised-button", "", "color", "primary", 1, "create-btn", 3, "click"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "numeroActa"], ["mat-header-cell", "", 4, "matHeader-cellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "asambleaTitulo"], ["matColumnDef", "fecha"], ["matColumnDef", "lugar"], ["matColumnDef", "estado"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeader-rowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "Ver detalle completo", 3, "click"], ["mat-raised-button", "", "color", "accent", "class", "action-firmar-btn", "matTooltip", "Firmar y Aprobar Acta", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Imprimir / PDF", 3, "click"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Firmar y Aprobar Acta", 1, "action-firmar-btn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], ["appearance", "outline", 1, "w-100"], ["formControlName", "asambleaId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "warn-hint", 4, "ngIf"], [4, "ngIf"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "numeroActa", "placeholder", "Ej. ACT-2026-001"], ["matInput", "", "type", "date", "formControlName", "fecha"], ["matInput", "", "formControlName", "lugar"], ["matInput", "", "formControlName", "agenda", "rows", "3", "placeholder", "Puntos aprobados en la reuni\xF3n..."], ["matInput", "", "formControlName", "resumen", "rows", "4", "placeholder", "Desarrollo de la asamblea y decisiones acordadas por mayor\xEDa..."], ["matInput", "", "formControlName", "observaciones"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "warn-hint"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [1, "acta-view"], [1, "acta-header-info"], [1, "acta-section"], [1, "content-text"], ["class", "acta-section", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ActasComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "mat-form-field", 4)(3, "mat-label");
        \u0275\u0275text(4, "Filtrar Estado de Actas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ActasComponent_Template_mat_select_ngModelChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.estadoFiltro, $event) || (ctx.estadoFiltro = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectionChange", function ActasComponent_Template_mat_select_selectionChange_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cargarActas());
        });
        \u0275\u0275elementStart(6, "mat-option", 6);
        \u0275\u0275text(7, "Todas las Actas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-option", 7);
        \u0275\u0275text(9, "Pendientes de Firma (Borradores)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-option", 8);
        \u0275\u0275text(11, "Aprobadas / Firmadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-option", 9);
        \u0275\u0275text(13, "Finalizadas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 10);
        \u0275\u0275listener("click", function ActasComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.abrirCrearModal());
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "post_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Redactar Nueva Acta ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "mat-card", 11);
        \u0275\u0275template(19, ActasComponent_div_19_Template, 2, 0, "div", 12);
        \u0275\u0275elementStart(20, "table", 13);
        \u0275\u0275elementContainerStart(21, 14);
        \u0275\u0275template(22, ActasComponent_th_22_Template, 2, 0, "th", 15)(23, ActasComponent_td_23_Template, 3, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 17);
        \u0275\u0275template(25, ActasComponent_th_25_Template, 2, 0, "th", 15)(26, ActasComponent_td_26_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 18);
        \u0275\u0275template(28, ActasComponent_th_28_Template, 2, 0, "th", 15)(29, ActasComponent_td_29_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 19);
        \u0275\u0275template(31, ActasComponent_th_31_Template, 2, 0, "th", 15)(32, ActasComponent_td_32_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 20);
        \u0275\u0275template(34, ActasComponent_th_34_Template, 2, 0, "th", 15)(35, ActasComponent_td_35_Template, 4, 5, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(36, 21);
        \u0275\u0275template(37, ActasComponent_th_37_Template, 2, 0, "th", 15)(38, ActasComponent_td_38_Template, 8, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(39, ActasComponent_tr_39_Template, 1, 0, "tr", 22)(40, ActasComponent_tr_40_Template, 1, 0, "tr", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, ActasComponent_ng_template_41_Template, 44, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(43, ActasComponent_ng_template_43_Template, 11, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.estadoFiltro);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.actas);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeader-rowDef", ctx.displayedColumns);
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
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatTableModule,
      MatTable,
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
      MatHint,
      MatError,
      MatFormFieldModule,
      MatSelectModule,
      MatSelect,
      MatOption,
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
    ], styles: ["\n\n.top-action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  gap: 16px;\n}\n.top-action-bar[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  width: 280px;\n  margin-bottom: -1.25em;\n}\n.top-action-bar[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  position: relative;\n}\n.table-card[_ngcontent-%COMP%]   .action-firmar-btn[_ngcontent-%COMP%] {\n  margin: 0 6px;\n  font-size: 0.8rem;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 10px;\n}\n.table-card[_ngcontent-%COMP%]   .action-firmar-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.table-card[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n}\n.dialog-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.dialog-form[_ngcontent-%COMP%]   .warn-hint[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 600;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -0.8em;\n}\n.acta-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.acta-view[_ngcontent-%COMP%]   .acta-header-info[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 12px 16px;\n  border-radius: 8px;\n  border-left: 4px solid #3b82f6;\n}\n.acta-view[_ngcontent-%COMP%]   .acta-header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 0.9rem;\n  color: #334155;\n}\n.acta-view[_ngcontent-%COMP%]   .acta-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1e293b;\n  margin: 0 0 6px;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 4px;\n}\n.acta-view[_ngcontent-%COMP%]   .acta-section[_ngcontent-%COMP%]   p.content-text[_ngcontent-%COMP%] {\n  color: #475569;\n  line-height: 1.5;\n  font-size: 0.9rem;\n  margin: 0;\n}\n/*# sourceMappingURL=actas.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActasComponent, { className: "ActasComponent", filePath: "src\\app\\features\\actas\\actas.component.ts", lineNumber: 43 });
})();
export {
  ActasComponent
};
//# sourceMappingURL=chunk-LHPIXXTS.js.map
