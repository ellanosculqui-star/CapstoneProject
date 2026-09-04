import {
  AsistenciaService
} from "./chunk-64ZKMFJM.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-M46Y3ZE6.js";
import {
  Router,
  RouterModule
} from "./chunk-2SF4ZNYJ.js";
import {
  AsambleaService
} from "./chunk-DPKTCUNK.js";
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
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-XSKVQAAY.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix
} from "./chunk-G5AK5GOQ.js";
import "./chunk-4QFLIVIW.js";
import {
  NotificationService
} from "./chunk-OL7LJQ7U.js";
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-GOMAGJXZ.js";
import "./chunk-GQRCTAQD.js";
import "./chunk-QOKG7DIS.js";
import {
  DefaultValueAccessor,
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
  A11yModule,
  AriaDescriber,
  InteractivityChecker,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  MatOption
} from "./chunk-YDVBR4EU.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  Inject,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  Subscription,
  ViewEncapsulation$1,
  booleanAttribute,
  createComponent,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// node_modules/@angular/material/fesm2022/badge.mjs
var nextId = 0;
var BADGE_CONTENT_CLASS = "mat-badge-content";
var badgeApps = /* @__PURE__ */ new Set();
var _MatBadgeStyleLoader = class __MatBadgeStyleLoader {
  static {
    this.\u0275fac = function _MatBadgeStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __MatBadgeStyleLoader)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: __MatBadgeStyleLoader,
      selectors: [["ng-component"]],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function _MatBadgeStyleLoader_Template(rf, ctx) {
      },
      styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-app-error));color:var(--mat-badge-text-color, var(--mat-app-on-error));font-family:var(--mat-badge-text-font, var(--mat-app-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-app-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-app-corner-full))}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color, var(--mat-app-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size);height:var(--mat-badge-legacy-small-size-container-size);min-width:var(--mat-badge-small-size-container-size);min-height:var(--mat-badge-small-size-container-size);line-height:var(--mat-badge-small-size-line-height);padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size);height:var(--mat-badge-legacy-container-size);min-width:var(--mat-badge-container-size);min-height:var(--mat-badge-container-size);line-height:var(--mat-badge-line-height);padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size);height:var(--mat-badge-legacy-large-size-container-size);min-width:var(--mat-badge-large-size-container-size);min-height:var(--mat-badge-large-size-container-size);line-height:var(--mat-badge-large-size-line-height);padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatBadgeStyleLoader, [{
    type: Component,
    args: [{
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-app-error));color:var(--mat-badge-text-color, var(--mat-app-on-error));font-family:var(--mat-badge-text-font, var(--mat-app-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-app-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-app-corner-full))}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color, var(--mat-app-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size);height:var(--mat-badge-legacy-small-size-container-size);min-width:var(--mat-badge-small-size-container-size);min-height:var(--mat-badge-small-size-container-size);line-height:var(--mat-badge-small-size-line-height);padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size);height:var(--mat-badge-legacy-container-size);min-width:var(--mat-badge-container-size);min-height:var(--mat-badge-container-size);line-height:var(--mat-badge-line-height);padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size);height:var(--mat-badge-legacy-large-size-container-size);min-width:var(--mat-badge-large-size-container-size);min-height:var(--mat-badge-large-size-container-size);line-height:var(--mat-badge-large-size-line-height);padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size, var(--mat-app-label-small-size));margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"]
    }]
  }], null, null);
})();
var MatBadge = class _MatBadge {
  /**
   * Theme color of the badge. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color;
  }
  set color(value) {
    this._setColor(value);
    this._color = value;
  }
  /** The content for the badge */
  get content() {
    return this._content;
  }
  set content(newContent) {
    this._updateRenderedContent(newContent);
  }
  /** Message used to describe the decorated element via aria-describedby */
  get description() {
    return this._description;
  }
  set description(newDescription) {
    this._updateDescription(newDescription);
  }
  constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._renderer = _renderer;
    this._animationMode = _animationMode;
    this._color = "primary";
    this.overlap = true;
    this.position = "above after";
    this.size = "medium";
    this._id = nextId++;
    this._isInitialized = false;
    this._interactivityChecker = inject(InteractivityChecker);
    this._document = inject(DOCUMENT);
    const appRef = inject(ApplicationRef);
    if (!badgeApps.has(appRef)) {
      badgeApps.add(appRef);
      const componentRef = createComponent(_MatBadgeStyleLoader, {
        environmentInjector: inject(EnvironmentInjector)
      });
      appRef.onDestroy(() => {
        badgeApps.delete(appRef);
        componentRef.destroy();
      });
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const nativeElement = _elementRef.nativeElement;
      if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
        throw Error("matBadge must be attached to an element node.");
      }
      const matIconTagName = "mat-icon";
      if (nativeElement.tagName.toLowerCase() === matIconTagName && nativeElement.getAttribute("aria-hidden") === "true") {
        console.warn(`Detected a matBadge on an "aria-hidden" "<mat-icon>". Consider setting aria-hidden="false" in order to surface the information assistive technology.
${nativeElement.outerHTML}`);
      }
    }
  }
  /** Whether the badge is above the host or not */
  isAbove() {
    return this.position.indexOf("below") === -1;
  }
  /** Whether the badge is after the host or not */
  isAfter() {
    return this.position.indexOf("before") === -1;
  }
  /**
   * Gets the element into which the badge's content is being rendered. Undefined if the element
   * hasn't been created (e.g. if the badge doesn't have content).
   */
  getBadgeElement() {
    return this._badgeElement;
  }
  ngOnInit() {
    this._clearExistingBadges();
    if (this.content && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
      this._updateRenderedContent(this.content);
    }
    this._isInitialized = true;
  }
  ngOnDestroy() {
    if (this._renderer.destroyNode) {
      this._renderer.destroyNode(this._badgeElement);
      this._inlineBadgeDescription?.remove();
    }
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
  }
  /** Gets whether the badge's host element is interactive. */
  _isHostInteractive() {
    return this._interactivityChecker.isFocusable(this._elementRef.nativeElement, {
      ignoreVisibility: true
    });
  }
  /** Creates the badge element */
  _createBadgeElement() {
    const badgeElement = this._renderer.createElement("span");
    const activeClass = "mat-badge-active";
    badgeElement.setAttribute("id", `mat-badge-content-${this._id}`);
    badgeElement.setAttribute("aria-hidden", "true");
    badgeElement.classList.add(BADGE_CONTENT_CLASS);
    if (this._animationMode === "NoopAnimations") {
      badgeElement.classList.add("_mat-animation-noopable");
    }
    this._elementRef.nativeElement.appendChild(badgeElement);
    if (typeof requestAnimationFrame === "function" && this._animationMode !== "NoopAnimations") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          badgeElement.classList.add(activeClass);
        });
      });
    } else {
      badgeElement.classList.add(activeClass);
    }
    return badgeElement;
  }
  /** Update the text content of the badge element in the DOM, creating the element if necessary. */
  _updateRenderedContent(newContent) {
    const newContentNormalized = `${newContent ?? ""}`.trim();
    if (this._isInitialized && newContentNormalized && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
    }
    if (this._badgeElement) {
      this._badgeElement.textContent = newContentNormalized;
    }
    this._content = newContentNormalized;
  }
  /** Updates the host element's aria description via AriaDescriber. */
  _updateDescription(newDescription) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
    if (!newDescription || this._isHostInteractive()) {
      this._removeInlineDescription();
    }
    this._description = newDescription;
    if (this._isHostInteractive()) {
      this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
    } else {
      this._updateInlineDescription();
    }
  }
  _updateInlineDescription() {
    if (!this._inlineBadgeDescription) {
      this._inlineBadgeDescription = this._document.createElement("span");
      this._inlineBadgeDescription.classList.add("cdk-visually-hidden");
    }
    this._inlineBadgeDescription.textContent = this.description;
    this._badgeElement?.appendChild(this._inlineBadgeDescription);
  }
  _removeInlineDescription() {
    this._inlineBadgeDescription?.remove();
    this._inlineBadgeDescription = void 0;
  }
  /** Adds css theme class given the color to the component host */
  _setColor(colorPalette) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(`mat-badge-${this._color}`);
    if (colorPalette) {
      classList.add(`mat-badge-${colorPalette}`);
    }
  }
  /** Clears any existing badges that might be left over from server-side rendering. */
  _clearExistingBadges() {
    const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);
    for (const badgeElement of Array.from(badges)) {
      if (badgeElement !== this._badgeElement) {
        badgeElement.remove();
      }
    }
  }
  static {
    this.\u0275fac = function MatBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatBadge)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AriaDescriber), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatBadge,
      selectors: [["", "matBadge", ""]],
      hostAttrs: [1, "mat-badge"],
      hostVars: 20,
      hostBindings: function MatBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
        }
      },
      inputs: {
        color: [0, "matBadgeColor", "color"],
        overlap: [2, "matBadgeOverlap", "overlap", booleanAttribute],
        disabled: [2, "matBadgeDisabled", "disabled", booleanAttribute],
        position: [0, "matBadgePosition", "position"],
        content: [0, "matBadge", "content"],
        description: [0, "matBadgeDescription", "description"],
        size: [0, "matBadgeSize", "size"],
        hidden: [2, "matBadgeHidden", "hidden", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadge, [{
    type: Directive,
    args: [{
      selector: "[matBadge]",
      host: {
        "class": "mat-badge",
        "[class.mat-badge-overlap]": "overlap",
        "[class.mat-badge-above]": "isAbove()",
        "[class.mat-badge-below]": "!isAbove()",
        "[class.mat-badge-before]": "!isAfter()",
        "[class.mat-badge-after]": "isAfter()",
        "[class.mat-badge-small]": 'size === "small"',
        "[class.mat-badge-medium]": 'size === "medium"',
        "[class.mat-badge-large]": 'size === "large"',
        "[class.mat-badge-hidden]": "hidden || !content",
        "[class.mat-badge-disabled]": "disabled"
      },
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: AriaDescriber
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    color: [{
      type: Input,
      args: ["matBadgeColor"]
    }],
    overlap: [{
      type: Input,
      args: [{
        alias: "matBadgeOverlap",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matBadgeDisabled",
        transform: booleanAttribute
      }]
    }],
    position: [{
      type: Input,
      args: ["matBadgePosition"]
    }],
    content: [{
      type: Input,
      args: ["matBadge"]
    }],
    description: [{
      type: Input,
      args: ["matBadgeDescription"]
    }],
    size: [{
      type: Input,
      args: ["matBadgeSize"]
    }],
    hidden: [{
      type: Input,
      args: [{
        alias: "matBadgeHidden",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatBadgeModule = class _MatBadgeModule {
  static {
    this.\u0275fac = function MatBadgeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatBadgeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatBadgeModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [A11yModule, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadgeModule, [{
    type: NgModule,
    args: [{
      // Note: we _shouldn't_ have to import `_MatBadgeStyleLoader`,
      // but it seems to be necessary for tests.
      imports: [A11yModule, MatCommonModule, MatBadge, _MatBadgeStyleLoader],
      exports: [MatBadge, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/core/services/offline-asistencia.service.ts
var STORAGE_KEY = "ASISTENCIA_OFFLINE_QUEUE_V1";
var OfflineAsistenciaService = class _OfflineAsistenciaService {
  constructor(asistenciaService, notify) {
    this.asistenciaService = asistenciaService;
    this.notify = notify;
    this.isOnlineSubject = new BehaviorSubject(navigator.onLine);
    this.isOnline$ = this.isOnlineSubject.asObservable();
    this.pendingQueueSubject = new BehaviorSubject([]);
    this.pendingQueue$ = this.pendingQueueSubject.asObservable();
    this.cargarCola();
    window.addEventListener("online", () => {
      this.isOnlineSubject.next(true);
      this.notify.info("Conexi\xF3n reestablecida. Procediendo a sincronizar registros pendientes...");
      this.sincronizarPendientes();
    });
    window.addEventListener("offline", () => {
      this.isOnlineSubject.next(false);
      this.notify.warning("Sin conexi\xF3n a internet. El sistema operar\xE1 en MODO OFFLINE guardando localmente.");
    });
  }
  get isOnline() {
    return this.isOnlineSubject.value;
  }
  get pendingCount() {
    return this.pendingQueueSubject.value.length;
  }
  guardarOffline(asambleaId, comuneroId, estado, nombreComunero) {
    const item = {
      id: "OFF-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7),
      asambleaId,
      comuneroId,
      nombreComunero,
      estado,
      fechaHora: (/* @__PURE__ */ new Date()).toISOString(),
      sincronizado: false
    };
    const colaActual = this.pendingQueueSubject.value;
    const index = colaActual.findIndex((c) => c.asambleaId === asambleaId && c.comuneroId === comuneroId);
    if (index >= 0) {
      colaActual[index] = item;
    } else {
      colaActual.push(item);
    }
    this.guardarEnStorage(colaActual);
    this.pendingQueueSubject.next(colaActual);
    return item;
  }
  sincronizarPendientes(callback) {
    const pendientes = [...this.pendingQueueSubject.value];
    if (pendientes.length === 0) {
      if (callback)
        callback(0, 0);
      return;
    }
    let completados = 0;
    let exitosos = 0;
    let fallidos = 0;
    const restantes = [];
    pendientes.forEach((item) => {
      this.asistenciaService.registrar(item.asambleaId, item.comuneroId, item.estado).subscribe({
        next: (res) => {
          completados++;
          if (res.success) {
            exitosos++;
          } else {
            fallidos++;
            restantes.push(item);
          }
          this.verificarFinSincronizacion(completados, pendientes.length, exitosos, fallidos, restantes, callback);
        },
        error: () => {
          completados++;
          fallidos++;
          restantes.push(item);
          this.verificarFinSincronizacion(completados, pendientes.length, exitosos, fallidos, restantes, callback);
        }
      });
    });
  }
  verificarFinSincronizacion(completados, total, exitosos, fallidos, restantes, callback) {
    if (completados >= total) {
      this.guardarEnStorage(restantes);
      this.pendingQueueSubject.next(restantes);
      if (exitosos > 0) {
        this.notify.success(`Sincronizaci\xF3n completada: ${exitosos} asistencias guardadas en el servidor.`);
      }
      if (fallidos > 0) {
        this.notify.warning(`${fallidos} registros quedaron pendientes por error de red.`);
      }
      if (callback)
        callback(exitosos, fallidos);
    }
  }
  cargarCola() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        this.pendingQueueSubject.next(JSON.parse(data));
      }
    } catch {
      this.pendingQueueSubject.next([]);
    }
  }
  guardarEnStorage(cola) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cola));
    } catch (e) {
      console.error("Error al guardar cola offline", e);
    }
  }
  static {
    this.\u0275fac = function OfflineAsistenciaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OfflineAsistenciaService)(\u0275\u0275inject(AsistenciaService), \u0275\u0275inject(NotificationService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OfflineAsistenciaService, factory: _OfflineAsistenciaService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/asistencia/asistencia.component.ts
var _c0 = ["qrDialog"];
var _c1 = (a0, a1) => ({ "programada": a0, "finalizada": a1 });
function AsistenciaComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F7E2} Conectado");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F7E1} Conectado (", ctx_r1.pendingOfflineCount, " pendientes)");
  }
}
function AsistenciaComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F534} Modo Offline (", ctx_r1.pendingOfflineCount, " pendientes)");
  }
}
function AsistenciaComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AsistenciaComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sincronizarAhora());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.isOnline);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Sincronizar (", ctx_r1.pendingOfflineCount, ") ");
  }
}
function AsistenciaComponent_div_12_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10, "DE PARTICIPACI\xD3N");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 34);
    \u0275\u0275element(12, "mat-progress-bar", 35);
    \u0275\u0275elementStart(13, "span", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 37)(16, "div", 38)(17, "span", 39);
    \u0275\u0275text(18, "Habilitados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 40);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 41)(22, "span", 39);
    \u0275\u0275text(23, "Presentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 40);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 42)(27, "span", 39);
    \u0275\u0275text(28, "Ausentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 40);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.quorumInfo.quorumAlcanzado ? "hero-reached" : "hero-pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.quorumAlcanzado ? "check_circle" : "hourglass_top");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.quorumAlcanzado ? "QU\xD3RUM ALCANZADO" : "QU\xD3RUM PENDIENTE");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.quorumInfo.porcentajeAsistencia, "%");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.quorumInfo.porcentajeAsistencia)("color", ctx_r1.quorumInfo.quorumAlcanzado ? "primary" : "warn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Meta reglamentaria: ", ctx_r1.quorumInfo.quorumMinimoPct, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.totalHabilitados);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.asistentes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.ausentes);
  }
}
function AsistenciaComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-card", 12)(2, "div", 13)(3, "div", 14)(4, "span", 15);
    \u0275\u0275text(5, "SESI\xD3N EN VIVO \u2014 COMUNIDAD CAMPESINA LA ENCA\xD1ADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "mat-icon");
    \u0275\u0275text(10, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 16)(16, "button", 17);
    \u0275\u0275listener("click", function AsistenciaComponent_div_12_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirQrDialog());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Proyectar QR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 18);
    \u0275\u0275listener("click", function AsistenciaComponent_div_12_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleModoAsamblea());
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Salir de Pantalla Completa ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, AsistenciaComponent_div_12_div_24_Template, 31, 10, "div", 19);
    \u0275\u0275elementStart(25, "div", 20)(26, "button", 21);
    \u0275\u0275listener("click", function AsistenciaComponent_div_12_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirQrDialog());
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " MOSTRAR QR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 22);
    \u0275\u0275listener("click", function AsistenciaComponent_div_12_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navegarA("/votaciones"));
    });
    \u0275\u0275elementStart(31, "mat-icon");
    \u0275\u0275text(32, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " INICIAR VOTACI\xD3N ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 23);
    \u0275\u0275listener("click", function AsistenciaComponent_div_12_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navegarA("/actas"));
    });
    \u0275\u0275elementStart(35, "mat-icon");
    \u0275\u0275text(36, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " REGISTRAR ACUERDO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 24);
    \u0275\u0275listener("click", function AsistenciaComponent_div_12_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navegarA("/actas"));
    });
    \u0275\u0275elementStart(39, "mat-icon");
    \u0275\u0275text(40, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " GENERAR ACTA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 25)(43, "mat-form-field", 26)(44, "mat-label");
    \u0275\u0275text(45, "Escanear DNI de Comunero o C\xF3digo para Asistencia Instant\xE1nea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-icon", 27);
    \u0275\u0275text(47, "qr_code_scanner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AsistenciaComponent_div_12_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.scanDni, $event) || (ctx_r1.scanDni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AsistenciaComponent_div_12_Template_input_keyup_enter_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScanDni());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 10);
    \u0275\u0275listener("click", function AsistenciaComponent_div_12_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScanDni());
    });
    \u0275\u0275elementStart(50, "mat-icon");
    \u0275\u0275text(51, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Registrar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedAsamblea.titulo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedAsamblea.fecha, " \xA0|\xA0 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedAsamblea.lugar, "");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.quorumInfo);
    \u0275\u0275advance(24);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.scanDni);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.scanDni);
  }
}
function AsistenciaComponent_div_13_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275property("value", a_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" [", a_r6.estado, "] ", a_r6.titulo, " (", a_r6.fecha, ") ");
  }
}
function AsistenciaComponent_div_13_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 53)(1, "mat-card-content", 54)(2, "div", 55)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 56)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 57)(11, "div", 58)(12, "span");
    \u0275\u0275text(13, "Asistentes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 58)(17, "span");
    \u0275\u0275text(18, "Ausentes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 58)(22, "span");
    \u0275\u0275text(23, "Habilitados:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("reached", ctx_r1.quorumInfo.quorumAlcanzado)("not-reached", !ctx_r1.quorumInfo.quorumAlcanzado);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.quorumAlcanzado ? "check_circle" : "cancel");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.quorumInfo.porcentajeAsistencia, "% DE ASISTENCIA");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.quorumInfo.estadoMensaje, " (Qu\xF3rum m\xEDn: ", ctx_r1.quorumInfo.quorumMinimoPct, "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.asistentes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.ausentes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.quorumInfo.totalHabilitados);
  }
}
function AsistenciaComponent_div_13_mat_card_10_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_10_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_10_strong_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Asamblea Programada");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_10_strong_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Asamblea Finalizada");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_10_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Para tomar asistencia e iniciar las votaciones digitales en vivo, inicie la sesi\xF3n de la asamblea.");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_10_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Esta asamblea ha concluido y los registros de asistencia han sido archivados.");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_10_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function AsistenciaComponent_div_13_mat_card_10_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.iniciarAsamblea());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Iniciar Asamblea (Poner EN CURSO) ");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 59)(1, "mat-card-content", 60)(2, "div", 61);
    \u0275\u0275template(3, AsistenciaComponent_div_13_mat_card_10_mat_icon_3_Template, 2, 0, "mat-icon", 5)(4, AsistenciaComponent_div_13_mat_card_10_mat_icon_4_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275template(6, AsistenciaComponent_div_13_mat_card_10_strong_6_Template, 2, 0, "strong", 5)(7, AsistenciaComponent_div_13_mat_card_10_strong_7_Template, 2, 0, "strong", 5)(8, AsistenciaComponent_div_13_mat_card_10_p_8_Template, 2, 0, "p", 5)(9, AsistenciaComponent_div_13_mat_card_10_p_9_Template, 2, 0, "p", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AsistenciaComponent_div_13_mat_card_10_button_10_Template, 4, 0, "button", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c1, ctx_r1.selectedAsamblea.estado === "PROGRAMADA", ctx_r1.selectedAsamblea.estado === "FINALIZADA"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea.estado === "PROGRAMADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea.estado === "FINALIZADA");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea.estado === "PROGRAMADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea.estado === "FINALIZADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea.estado === "PROGRAMADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea.estado === "FINALIZADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea.estado === "PROGRAMADA");
  }
}
function AsistenciaComponent_div_13_mat_card_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 64)(1, "mat-card-content")(2, "div", 65)(3, "mat-form-field", 66)(4, "mat-label");
    \u0275\u0275text(5, "Esc\xE1ner de DNI / Registro R\xE1pido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-icon", 27);
    \u0275\u0275text(7, "qr_code_scanner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AsistenciaComponent_div_13_mat_card_11_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.scanDni, $event) || (ctx_r1.scanDni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AsistenciaComponent_div_13_mat_card_11_Template_input_keyup_enter_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScanDni());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 68);
    \u0275\u0275listener("click", function AsistenciaComponent_div_13_mat_card_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScanDni());
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Presente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 69)(14, "mat-label");
    \u0275\u0275text(15, "Filtrar comunero en tabla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-icon", 27);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function AsistenciaComponent_div_13_mat_card_11_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.filtroTexto, $event) || (ctx_r1.filtroTexto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function AsistenciaComponent_div_13_mat_card_11_Template_input_input_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aplicarFiltro());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 71);
    \u0275\u0275listener("click", function AsistenciaComponent_div_13_mat_card_11_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirQrDialog());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Ver QR Asamblea ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.scanDni);
    \u0275\u0275property("disabled", (ctx_r1.selectedAsamblea == null ? null : ctx_r1.selectedAsamblea.estado) !== "EN_CURSO");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.scanDni || (ctx_r1.selectedAsamblea == null ? null : ctx_r1.selectedAsamblea.estado) !== "EN_CURSO");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filtroTexto);
  }
}
function AsistenciaComponent_div_13_mat_card_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "mat-spinner", 87);
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r9.codigoComunero);
  }
}
function AsistenciaComponent_div_13_mat_card_12_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, "DNI");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.dni);
  }
}
function AsistenciaComponent_div_13_mat_card_12_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, "Comunero");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.nombreCompleto);
  }
}
function AsistenciaComponent_div_13_mat_card_12_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, "Condici\xF3n");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89)(1, "span");
    \u0275\u0275pipe(2, "estadoBadge");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, element_r12.condicionHabilitacion));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r12.condicionHabilitacion);
  }
}
function AsistenciaComponent_div_13_mat_card_12_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "estadoBadge");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, element_r13.estadoAsistencia));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r13.estadoAsistencia, " ");
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "PENDIENTE");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275template(1, AsistenciaComponent_div_13_mat_card_12_td_17_span_1_Template, 3, 5, "span", 90)(2, AsistenciaComponent_div_13_mat_card_12_td_17_span_2_Template, 2, 0, "span", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r13.estadoAsistencia);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !element_r13.estadoAsistencia);
  }
}
function AsistenciaComponent_div_13_mat_card_12_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, "Acci\xF3n R\xE1pida");
    \u0275\u0275elementEnd();
  }
}
function AsistenciaComponent_div_13_mat_card_12_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 89)(1, "button", 93);
    \u0275\u0275listener("click", function AsistenciaComponent_div_13_mat_card_12_td_20_Template_button_click_1_listener() {
      const element_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.marcarAsistencia(element_r15, "PRESENTE"));
    });
    \u0275\u0275text(2, " PRESENTE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 94);
    \u0275\u0275listener("click", function AsistenciaComponent_div_13_mat_card_12_td_20_Template_button_click_3_listener() {
      const element_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.marcarAsistencia(element_r15, "AUSENTE"));
    });
    \u0275\u0275text(4, " AUSENTE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 95);
    \u0275\u0275listener("click", function AsistenciaComponent_div_13_mat_card_12_td_20_Template_button_click_5_listener() {
      const element_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.marcarAsistencia(element_r15, "JUSTIFICADO"));
    });
    \u0275\u0275text(6, " JUSTIFICADO ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r1.selectedAsamblea == null ? null : ctx_r1.selectedAsamblea.estado) !== "EN_CURSO");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (ctx_r1.selectedAsamblea == null ? null : ctx_r1.selectedAsamblea.estado) !== "EN_CURSO");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (ctx_r1.selectedAsamblea == null ? null : ctx_r1.selectedAsamblea.estado) !== "EN_CURSO");
  }
}
function AsistenciaComponent_div_13_mat_card_12_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 96);
  }
}
function AsistenciaComponent_div_13_mat_card_12_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 97);
  }
}
function AsistenciaComponent_div_13_mat_card_12_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 98)(1, "td", 99);
    \u0275\u0275text(2, " No se encontraron comuneros que coincidan con la b\xFAsqueda. ");
    \u0275\u0275elementEnd()();
  }
}
function AsistenciaComponent_div_13_mat_card_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 72);
    \u0275\u0275template(1, AsistenciaComponent_div_13_mat_card_12_div_1_Template, 2, 0, "div", 73);
    \u0275\u0275elementStart(2, "table", 74);
    \u0275\u0275elementContainerStart(3, 75);
    \u0275\u0275template(4, AsistenciaComponent_div_13_mat_card_12_th_4_Template, 2, 0, "th", 76)(5, AsistenciaComponent_div_13_mat_card_12_td_5_Template, 3, 1, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 78);
    \u0275\u0275template(7, AsistenciaComponent_div_13_mat_card_12_th_7_Template, 2, 0, "th", 76)(8, AsistenciaComponent_div_13_mat_card_12_td_8_Template, 2, 1, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 79);
    \u0275\u0275template(10, AsistenciaComponent_div_13_mat_card_12_th_10_Template, 2, 0, "th", 76)(11, AsistenciaComponent_div_13_mat_card_12_td_11_Template, 2, 1, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 80);
    \u0275\u0275template(13, AsistenciaComponent_div_13_mat_card_12_th_13_Template, 2, 0, "th", 76)(14, AsistenciaComponent_div_13_mat_card_12_td_14_Template, 4, 5, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 81);
    \u0275\u0275template(16, AsistenciaComponent_div_13_mat_card_12_th_16_Template, 2, 0, "th", 76)(17, AsistenciaComponent_div_13_mat_card_12_td_17_Template, 3, 2, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 82);
    \u0275\u0275template(19, AsistenciaComponent_div_13_mat_card_12_th_19_Template, 2, 0, "th", 76)(20, AsistenciaComponent_div_13_mat_card_12_td_20_Template, 7, 3, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(21, AsistenciaComponent_div_13_mat_card_12_tr_21_Template, 1, 0, "tr", 83)(22, AsistenciaComponent_div_13_mat_card_12_tr_22_Template, 1, 0, "tr", 84)(23, AsistenciaComponent_div_13_mat_card_12_tr_23_Template, 3, 0, "tr", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.padronFiltrado);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function AsistenciaComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "mat-card", 45)(3, "mat-card-content")(4, "mat-form-field", 26)(5, "mat-label");
    \u0275\u0275text(6, "Seleccionar Asamblea Comunitaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AsistenciaComponent_div_13_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAsambleaId, $event) || (ctx_r1.selectedAsambleaId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function AsistenciaComponent_div_13_Template_mat_select_selectionChange_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAsambleaChange());
    });
    \u0275\u0275template(8, AsistenciaComponent_div_13_mat_option_8_Template, 2, 4, "mat-option", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(9, AsistenciaComponent_div_13_mat_card_9_Template, 26, 11, "mat-card", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AsistenciaComponent_div_13_mat_card_10_Template, 11, 11, "mat-card", 49)(11, AsistenciaComponent_div_13_mat_card_11_Template, 23, 4, "mat-card", 50)(12, AsistenciaComponent_div_13_mat_card_12_Template, 24, 4, "mat-card", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAsambleaId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.asambleas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quorumInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsamblea && ctx_r1.selectedAsamblea.estado !== "EN_CURSO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsambleaId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAsambleaId);
  }
}
function AsistenciaComponent_ng_template_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "img", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.qrUrl, \u0275\u0275sanitizeUrl);
  }
}
function AsistenciaComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "h2")(2, "mat-icon");
    \u0275\u0275text(3, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " C\xF3digo QR de Asistencia en Vivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Escanee este c\xF3digo para ingresar directamente al control de asistencia de la asamblea seleccionada.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AsistenciaComponent_ng_template_14_div_7_Template, 2, 1, "div", 101);
    \u0275\u0275elementStart(8, "div", 102)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "code", 103);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 104)(16, "p", 105);
    \u0275\u0275text(17, "\u{1F4F1} ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19, "\xBFC\xF3mo comprobar el QR?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ul")(21, "li")(22, "strong");
    \u0275\u0275text(23, "Desde el Celular:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Abre la app de ");
    \u0275\u0275elementStart(25, "em");
    \u0275\u0275text(26, "C\xE1mara");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " de tu celular y apunta hacia el c\xF3digo QR de arriba. Aparecer\xE1 una notificaci\xF3n emergente para abrir el enlace.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li")(29, "strong");
    \u0275\u0275text(30, "Desde la Laptop:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Haz clic en el bot\xF3n ");
    \u0275\u0275elementStart(32, "em");
    \u0275\u0275text(33, '"Probar Enlace en Nueva Pesta\xF1a"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " o copia la URL directa para abrirla en cualquier navegador.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 106)(36, "button", 17);
    \u0275\u0275listener("click", function AsistenciaComponent_ng_template_14_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copiarQrLink());
    });
    \u0275\u0275elementStart(37, "mat-icon");
    \u0275\u0275text(38, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Copiar Enlace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 107);
    \u0275\u0275listener("click", function AsistenciaComponent_ng_template_14_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.probarQrLink());
    });
    \u0275\u0275elementStart(41, "mat-icon");
    \u0275\u0275text(42, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Probar Enlace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 108);
    \u0275\u0275text(45, "Cerrar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedAsambleaId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedAsamblea == null ? null : ctx_r1.selectedAsamblea.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("ID de Asamblea: #", ctx_r1.selectedAsambleaId, " \u2014 ", ctx_r1.selectedAsamblea == null ? null : ctx_r1.selectedAsamblea.estado, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.qrLinkDirecto);
  }
}
var AsistenciaComponent = class _AsistenciaComponent {
  constructor(asistenciaService, asambleaService, offlineService, notify, dialog, router) {
    this.asistenciaService = asistenciaService;
    this.asambleaService = asambleaService;
    this.offlineService = offlineService;
    this.notify = notify;
    this.dialog = dialog;
    this.router = router;
    this.displayedColumns = ["codigoComunero", "dni", "nombreCompleto", "condicionHabilitacion", "estadoAsistencia", "acciones"];
    this.asambleas = [];
    this.selectedAsambleaId = null;
    this.selectedAsamblea = null;
    this.padron = [];
    this.padronFiltrado = [];
    this.filtroTexto = "";
    this.quorumInfo = null;
    this.loading = false;
    this.scanDni = "";
    this.modoAsamblea = false;
    this.isOnline = true;
    this.pendingOfflineCount = 0;
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.subs.add(this.offlineService.isOnline$.subscribe((online) => {
      this.isOnline = online;
    }));
    this.subs.add(this.offlineService.pendingQueue$.subscribe((queue) => {
      this.pendingOfflineCount = queue.length;
    }));
    this.cargarAsambleas();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  cargarAsambleas() {
    this.asambleaService.listar(0, 50).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.asambleas = res.data.content;
          const enCurso = this.asambleas.find((a) => a.estado === "EN_CURSO");
          if (enCurso) {
            this.selectedAsambleaId = enCurso.id;
            this.selectedAsamblea = enCurso;
          } else if (this.asambleas.length > 0) {
            this.selectedAsambleaId = this.asambleas[0].id;
            this.selectedAsamblea = this.asambleas[0];
          }
          if (this.selectedAsambleaId) {
            this.cargarPadronYQuorum();
          }
        }
      }
    });
  }
  onAsambleaChange() {
    this.selectedAsamblea = this.asambleas.find((a) => a.id === this.selectedAsambleaId) || null;
    this.cargarPadronYQuorum();
  }
  cargarPadronYQuorum() {
    if (!this.selectedAsambleaId)
      return;
    this.loading = true;
    this.asistenciaService.obtenerPadron(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.padron = res.data;
          this.aplicarFiltro();
        }
        this.actualizarQuorum();
      },
      error: () => {
        this.loading = false;
        this.aplicarFiltro();
      }
    });
  }
  actualizarQuorum() {
    if (!this.selectedAsambleaId)
      return;
    this.asistenciaService.calcularQuorum(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.quorumInfo = res.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.recalcularQuorumLocal();
      }
    });
  }
  recalcularQuorumLocal() {
    if (!this.padron || this.padron.length === 0)
      return;
    const habilitados = this.padron.filter((p) => p.condicionHabilitacion === "HABILITADO").length;
    const presentes = this.padron.filter((p) => p.estadoAsistencia === "PRESENTE").length;
    const ausentes = this.padron.filter((p) => p.estadoAsistencia === "AUSENTE").length;
    const pct = habilitados > 0 ? Math.round(presentes * 100 / habilitados) : 0;
    const minPct = this.selectedAsamblea?.quorumMinimoPct || 50;
    const alcanzado = pct >= minPct;
    this.quorumInfo = {
      asambleaId: this.selectedAsambleaId,
      asambleaTitulo: this.selectedAsamblea?.titulo || "",
      totalHabilitados: habilitados,
      asistentes: presentes,
      ausentes,
      justificados: 0,
      porcentajeAsistencia: pct,
      quorumMinimoPct: minPct,
      quorumAlcanzado: alcanzado,
      estadoMensaje: alcanzado ? "QU\xD3RUM ALCANZADO" : "QU\xD3RUM NO ALCANZADO"
    };
  }
  iniciarAsamblea() {
    if (!this.selectedAsambleaId)
      return;
    this.asambleaService.cambiarEstado(this.selectedAsambleaId, "EN_CURSO").subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Asamblea puesta EN CURSO. Asistencia habilitada.");
          if (this.selectedAsamblea) {
            this.selectedAsamblea.estado = "EN_CURSO";
          }
          this.cargarAsambleas();
        }
      }
    });
  }
  marcarAsistencia(comunero, estado) {
    if (!this.selectedAsambleaId)
      return;
    if (this.selectedAsamblea?.estado === "FINALIZADA" || this.selectedAsamblea?.estado === "CANCELADA") {
      this.notify.warning(`La asamblea se encuentra ${this.selectedAsamblea.estado}. No se permite registrar ni modificar asistencia.`);
      return;
    }
    if (!this.isOnline) {
      this.offlineService.guardarOffline(this.selectedAsambleaId, comunero.comuneroId, estado, comunero.nombreCompleto);
      comunero.estadoAsistencia = estado;
      this.notify.warning(`[MODO OFFLINE] Asistencia de ${comunero.nombreCompleto} guardada localmente.`);
      this.recalcularQuorumLocal();
      return;
    }
    this.asistenciaService.registrar(this.selectedAsambleaId, comunero.comuneroId, estado).subscribe({
      next: (res) => {
        if (res.success) {
          comunero.estadoAsistencia = estado;
          this.notify.success(`Asistencia de ${comunero.nombreCompleto} registrada (${estado})`);
          this.actualizarQuorum();
        }
      },
      error: () => {
        this.offlineService.guardarOffline(this.selectedAsambleaId, comunero.comuneroId, estado, comunero.nombreCompleto);
        comunero.estadoAsistencia = estado;
        this.notify.warning(`Error de red: guardado localmente en modo offline.`);
        this.recalcularQuorumLocal();
      }
    });
  }
  onScanDni() {
    if (!this.scanDni || !this.selectedAsambleaId)
      return;
    if (this.selectedAsamblea?.estado === "FINALIZADA" || this.selectedAsamblea?.estado === "CANCELADA") {
      this.notify.warning(`La asamblea se encuentra ${this.selectedAsamblea.estado}. No se permite registrar asistencia.`);
      return;
    }
    const dniBuscado = this.scanDni.trim();
    if (!this.isOnline) {
      const comunero = this.padron.find((p) => p.dni === dniBuscado || p.codigoComunero === dniBuscado);
      if (comunero) {
        this.marcarAsistencia(comunero, "PRESENTE");
        this.scanDni = "";
      } else {
        this.notify.error(`DNI ${dniBuscado} no encontrado en el padr\xF3n local.`);
      }
      return;
    }
    this.asistenciaService.marcarRapida(this.selectedAsambleaId, dniBuscado, "PRESENTE").subscribe({
      next: (res) => {
        if (res.success) {
          const comuneroNombre = res.data?.comuneroNombreCompleto || dniBuscado;
          this.notify.success(`\u2705 Asistencia registrada: ${comuneroNombre} marcado como PRESENTE`);
          this.scanDni = "";
          this.cargarPadronYQuorum();
        }
      },
      error: () => {
        const comunero = this.padron.find((p) => p.dni === dniBuscado || p.codigoComunero === dniBuscado);
        if (comunero) {
          this.marcarAsistencia(comunero, "PRESENTE");
          this.scanDni = "";
        } else {
          this.notify.error(`No se encontr\xF3 comunero con DNI o c\xF3digo: ${dniBuscado}`);
        }
      }
    });
  }
  sincronizarAhora() {
    this.loading = true;
    this.offlineService.sincronizarPendientes(() => {
      this.loading = false;
      this.cargarPadronYQuorum();
    });
  }
  aplicarFiltro() {
    if (!this.filtroTexto) {
      this.padronFiltrado = [...this.padron];
      return;
    }
    const t = this.filtroTexto.toLowerCase().trim();
    this.padronFiltrado = this.padron.filter((p) => p.dni.toLowerCase().includes(t) || p.codigoComunero.toLowerCase().includes(t) || p.nombreCompleto.toLowerCase().includes(t));
  }
  toggleModoAsamblea() {
    this.modoAsamblea = !this.modoAsamblea;
  }
  abrirQrDialog() {
    this.dialog.open(this.qrDialog, {
      width: "420px"
    });
  }
  get qrLinkDirecto() {
    if (!this.selectedAsambleaId)
      return "";
    const origin = window.location.origin;
    return `${origin}/asistencia?asambleaId=${this.selectedAsambleaId}`;
  }
  get qrUrl() {
    if (!this.selectedAsambleaId)
      return "";
    const link = this.qrLinkDirecto;
    return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(link)}`;
  }
  copiarQrLink() {
    const link = this.qrLinkDirecto;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).then(() => {
        this.notify.success("\u{1F4CB} Enlace del QR copiado al portapapeles");
      });
    } else {
      this.notify.info(`Enlace: ${link}`);
    }
  }
  probarQrLink() {
    if (this.qrLinkDirecto) {
      window.open(this.qrLinkDirecto, "_blank");
    }
  }
  navegarA(ruta) {
    this.router.navigate([ruta]);
  }
  static {
    this.\u0275fac = function AsistenciaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsistenciaComponent)(\u0275\u0275directiveInject(AsistenciaService), \u0275\u0275directiveInject(AsambleaService), \u0275\u0275directiveInject(OfflineAsistenciaService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AsistenciaComponent, selectors: [["app-asistencia"]], viewQuery: function AsistenciaComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.qrDialog = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 9, consts: [["qrDialog", ""], ["title", "Control de Asistencia y Qu\xF3rum", "subtitle", "Registro en tiempo real, validaci\xF3n con QR y c\xE1lculo autom\xE1tico de qu\xF3rum", "icon", "how_to_reg"], [1, "header-tools"], [1, "connection-badge", 3, "ngClass"], [1, "status-dot"], [4, "ngIf"], ["mat-flat-button", "", "color", "accent", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn-modo-asamblea", 3, "click"], ["class", "modo-asamblea-container", 4, "ngIf"], ["class", "asistencia-standard-container", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 3, "click", "disabled"], [1, "modo-asamblea-container"], [1, "asamblea-console-card"], [1, "console-header"], [1, "console-title"], [1, "eyebrow"], [1, "console-actions-top"], ["mat-stroked-button", "", 3, "click"], ["mat-button", "", 3, "click"], ["class", "quorum-hero-banner", 3, "ngClass", 4, "ngIf"], [1, "quick-actions-bar"], ["mat-raised-button", "", "color", "primary", 1, "q-btn", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "q-btn", 3, "click"], ["mat-raised-button", "", 1, "q-btn", "btn-actas", 3, "click"], ["mat-stroked-button", "", "color", "primary", 1, "q-btn", 3, "click"], [1, "console-scan-bar"], ["appearance", "outline", 1, "w-100"], ["matPrefix", ""], ["matInput", "", "placeholder", "Ingrese DNI y presione Enter", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "quorum-hero-banner", 3, "ngClass"], [1, "hero-status-pill"], [1, "hero-percentage"], [1, "pct-num"], [1, "pct-label"], [1, "hero-progress-wrapper"], ["mode", "determinate", 3, "value", "color"], [1, "threshold-hint"], [1, "hero-metrics-grid"], [1, "h-metric"], [1, "h-label"], [1, "h-val"], [1, "h-metric", "present"], [1, "h-metric", "absent"], [1, "asistencia-standard-container"], [1, "asistencia-header-grid"], [1, "select-card"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "quorum-card", 3, "reached", "not-reached", 4, "ngIf"], ["class", "estado-asamblea-banner", 3, "ngClass", 4, "ngIf"], ["class", "scan-card", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], [3, "value"], [1, "quorum-card"], [1, "quorum-content"], [1, "quorum-status"], [1, "quorum-text"], [1, "quorum-metrics"], [1, "metric"], [1, "estado-asamblea-banner", 3, "ngClass"], [1, "banner-content"], [1, "banner-info"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "scan-card"], [1, "scan-grid"], ["appearance", "outline", 1, "scan-input"], ["matInput", "", "placeholder", "Ingrese DNI de 8 d\xEDgitos y presione Enter", 3, "ngModelChange", "keyup.enter", "ngModel", "disabled"], ["mat-raised-button", "", "color", "accent", 1, "btn-scan", 3, "click", "disabled"], ["appearance", "outline", 1, "search-input"], ["matInput", "", "placeholder", "Buscar por nombre o DNI", 3, "ngModelChange", "input", "ngModel"], ["mat-stroked-button", "", 1, "btn-qr", 3, "click"], [1, "table-card"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "codigoComunero"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dni"], ["matColumnDef", "nombreCompleto"], ["matColumnDef", "condicionHabilitacion"], ["matColumnDef", "estadoAsistencia"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "loading-shade"], ["diameter", "40"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "class", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], [1, "badge", "badge-secondary"], ["mat-flat-button", "", "color", "primary", 1, "action-btn", 3, "click", "disabled"], ["mat-flat-button", "", "color", "warn", 1, "action-btn", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "action-btn", 3, "click", "disabled"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "6", 1, "mat-cell", 2, "text-align", "center", "padding", "24px"], [1, "qr-dialog-content"], ["class", "qr-image-box", 4, "ngIf"], [1, "qr-info"], [1, "qr-link-text"], [1, "qr-testing-guide"], [1, "guide-title"], [1, "dialog-actions", "qr-actions"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-button", "", "mat-dialog-close", "", "color", "primary"], [1, "qr-image-box"], ["alt", "QR Asamblea", 1, "qr-img", 3, "src"]], template: function AsistenciaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-page-header", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275element(3, "span", 4);
        \u0275\u0275template(4, AsistenciaComponent_span_4_Template, 2, 0, "span", 5)(5, AsistenciaComponent_span_5_Template, 2, 1, "span", 5)(6, AsistenciaComponent_span_6_Template, 2, 1, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, AsistenciaComponent_button_7_Template, 4, 2, "button", 6);
        \u0275\u0275elementStart(8, "button", 7);
        \u0275\u0275listener("click", function AsistenciaComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleModoAsamblea());
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AsistenciaComponent_div_12_Template, 53, 6, "div", 8)(13, AsistenciaComponent_div_13_Template, 13, 6, "div", 9)(14, AsistenciaComponent_ng_template_14_Template, 46, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.isOnline ? "online" : "offline");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isOnline && ctx.pendingOfflineCount === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isOnline && ctx.pendingOfflineCount > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isOnline);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pendingOfflineCount > 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.modoAsamblea ? "view_list" : "fullscreen");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.modoAsamblea ? "Vista Normal" : "Modo Asamblea", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modoAsamblea && ctx.selectedAsamblea);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.modoAsamblea);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      RouterModule,
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
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatProgressBarModule,
      MatProgressBar,
      MatDialogModule,
      MatDialogClose,
      MatBadgeModule,
      PageHeaderComponent,
      EstadoBadgePipe
    ], styles: ['@charset "UTF-8";\n\n\n\n.header-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-tools[_ngcontent-%COMP%]   .connection-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 20px;\n}\n.header-tools[_ngcontent-%COMP%]   .connection-badge.online[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.header-tools[_ngcontent-%COMP%]   .connection-badge.online[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #22c55e;\n}\n.header-tools[_ngcontent-%COMP%]   .connection-badge.offline[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.header-tools[_ngcontent-%COMP%]   .connection-badge.offline[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ef4444;\n}\n.header-tools[_ngcontent-%COMP%]   .btn-modo-asamblea[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.modo-asamblea-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 24px;\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .console-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 16px;\n  margin-bottom: 20px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .console-header[_ngcontent-%COMP%]   .console-title[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #6366f1;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 4px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .console-header[_ngcontent-%COMP%]   .console-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.8rem;\n  color: #0f172a;\n  font-weight: 800;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .console-header[_ngcontent-%COMP%]   .console-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .console-header[_ngcontent-%COMP%]   .console-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .console-header[_ngcontent-%COMP%]   .console-actions-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 24px;\n  text-align: center;\n  margin-bottom: 24px;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner.hero-reached[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ecfdf5,\n      #d1fae5);\n  border: 2px solid #10b981;\n  color: #065f46;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner.hero-reached[_ngcontent-%COMP%]   .hero-status-pill[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner.hero-reached[_ngcontent-%COMP%]   .pct-num[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner.hero-pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff7ed,\n      #ffedd5);\n  border: 2px solid #f97316;\n  color: #9a3412;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner.hero-pending[_ngcontent-%COMP%]   .hero-status-pill[_ngcontent-%COMP%] {\n  background: #ea580c;\n  color: white;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner.hero-pending[_ngcontent-%COMP%]   .pct-num[_ngcontent-%COMP%] {\n  color: #c2410c;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n  margin-bottom: 12px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-status-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-percentage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-percentage[_ngcontent-%COMP%]   .pct-num[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 900;\n  line-height: 1;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-percentage[_ngcontent-%COMP%]   .pct-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  margin-top: 4px;\n  opacity: 0.8;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-progress-wrapper[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto 20px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-progress-wrapper[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-progress-wrapper[_ngcontent-%COMP%]   .threshold-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-top: 6px;\n  opacity: 0.85;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-metrics-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 32px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-metrics-grid[_ngcontent-%COMP%]   .h-metric[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-metrics-grid[_ngcontent-%COMP%]   .h-metric[_ngcontent-%COMP%]   .h-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n  opacity: 0.75;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-metrics-grid[_ngcontent-%COMP%]   .h-metric[_ngcontent-%COMP%]   .h-val[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1e293b;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-metrics-grid[_ngcontent-%COMP%]   .h-metric.present[_ngcontent-%COMP%]   .h-val[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quorum-hero-banner[_ngcontent-%COMP%]   .hero-metrics-grid[_ngcontent-%COMP%]   .h-metric.absent[_ngcontent-%COMP%]   .h-val[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quick-actions-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quick-actions-bar[_ngcontent-%COMP%]   .q-btn[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  border-radius: 10px;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .quick-actions-bar[_ngcontent-%COMP%]   .q-btn.btn-actas[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: white;\n}\n.modo-asamblea-container[_ngcontent-%COMP%]   .asamblea-console-card[_ngcontent-%COMP%]   .console-scan-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  background: #f8fafc;\n  padding: 12px 16px;\n  border-radius: 12px;\n}\n.asistencia-header-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n@media (max-width: 860px) {\n  .asistencia-header-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.quorum-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.quorum-card.reached[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 2px solid #22c55e;\n}\n.quorum-card.reached[_ngcontent-%COMP%]   .quorum-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.quorum-card.reached[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.quorum-card.not-reached[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 2px solid #ef4444;\n}\n.quorum-card.not-reached[_ngcontent-%COMP%]   .quorum-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.quorum-card.not-reached[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%]   .quorum-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%]   .quorum-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%]   .quorum-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%]   .quorum-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #475569;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%]   .quorum-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%]   .quorum-metrics[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #475569;\n}\n.quorum-card[_ngcontent-%COMP%]   .quorum-content[_ngcontent-%COMP%]   .quorum-metrics[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #1e293b;\n  display: block;\n}\n.estado-asamblea-banner[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n.estado-asamblea-banner.programada[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n}\n.estado-asamblea-banner.programada[_ngcontent-%COMP%]   .banner-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.estado-asamblea-banner.programada[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.estado-asamblea-banner.programada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n}\n.estado-asamblea-banner.finalizada[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n}\n.estado-asamblea-banner.finalizada[_ngcontent-%COMP%]   .banner-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.estado-asamblea-banner.finalizada[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.estado-asamblea-banner.finalizada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.estado-asamblea-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.estado-asamblea-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.estado-asamblea-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.estado-asamblea-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  display: block;\n  margin-bottom: 2px;\n}\n.estado-asamblea-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n}\n.scan-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-radius: 12px;\n}\n.scan-card[_ngcontent-%COMP%]   .scan-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.scan-card[_ngcontent-%COMP%]   .scan-grid[_ngcontent-%COMP%]   .scan-input[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 260px;\n  margin-bottom: -1.25em;\n}\n.scan-card[_ngcontent-%COMP%]   .scan-grid[_ngcontent-%COMP%]   .btn-scan[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.scan-card[_ngcontent-%COMP%]   .scan-grid[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n  margin-bottom: -1.25em;\n}\n.scan-card[_ngcontent-%COMP%]   .scan-grid[_ngcontent-%COMP%]   .btn-qr[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.table-card[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table-card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 0.75rem;\n  padding: 0 10px;\n}\n.qr-dialog-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1e293b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-image-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 16px;\n  border-radius: 16px;\n  border: 2px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  display: inline-block;\n  margin-bottom: 16px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-image-box[_ngcontent-%COMP%]   .qr-img[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  border-radius: 8px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 1.05rem;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-link-text[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  color: #3b82f6;\n  word-break: break-all;\n  margin-top: 4px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-testing-guide[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-left: 4px solid #3b82f6;\n  padding: 12px 16px;\n  border-radius: 0 8px 8px 0;\n  text-align: left;\n  margin-bottom: 20px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-testing-guide[_ngcontent-%COMP%]   .guide-title[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 0.88rem;\n  color: #1e293b;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-testing-guide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  font-size: 0.82rem;\n  color: #475569;\n  line-height: 1.5;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-testing-guide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=asistencia.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AsistenciaComponent, { className: "AsistenciaComponent", filePath: "src\\app\\features\\asistencia\\asistencia.component.ts", lineNumber: 50 });
})();
export {
  AsistenciaComponent
};
//# sourceMappingURL=chunk-RJHYAF6J.js.map
