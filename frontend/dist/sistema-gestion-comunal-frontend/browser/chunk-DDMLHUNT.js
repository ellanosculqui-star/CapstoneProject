import {
  MatDivider,
  MatDividerModule
} from "./chunk-KDVQQOGW.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-5EEORT4S.js";
import {
  MatTooltipModule
} from "./chunk-D7XIIXT7.js";
import {
  AsistenciaService
} from "./chunk-WLDF356K.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-UIA6HSJT.js";
import {
  Router
} from "./chunk-PEKNYEHS.js";
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
import {
  UniqueSelectionDispatcher
} from "./chunk-DORXTRN2.js";
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
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators
} from "./chunk-IS22GETV.js";
import "./chunk-6V3W7KQ5.js";
import {
  PageHeaderComponent
} from "./chunk-TR7KNON3.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-W26YCSNH.js";
import {
  FocusMonitor,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  _MatInternalFormField
} from "./chunk-JXQRCCZC.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HttpClient,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  environment,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
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
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RAFJE6SV.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@angular/material/fesm2022/radio.mjs
var _c0 = ["input"];
var _c1 = ["formField"];
var _c2 = ["*"];
var nextUniqueId = 0;
var MatRadioChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var MatRadioGroup = class _MatRadioGroup {
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    this._value = null;
    this._name = `mat-radio-group-${nextUniqueId++}`;
    this._selected = null;
    this._isInitialized = false;
    this._labelPosition = "after";
    this._disabled = false;
    this._required = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this.onTouched = () => {
    };
    this.change = new EventEmitter();
    this._disabledInteractive = false;
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static {
    this.\u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioGroup)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatRadioGroup,
      selectors: [["mat-radio-group"]],
      contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
        }
      },
      hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
      inputs: {
        color: "color",
        name: "name",
        labelPosition: "labelPosition",
        value: "value",
        selected: "selected",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: _MatRadioGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** Whether the radio button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(radioGroup, _elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _defaultOptions, tabIndex) {
    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._defaultOptions = _defaultOptions;
    this._ngZone = inject(NgZone);
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    this.id = this._uniqueId;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.change = new EventEmitter();
    this._checked = false;
    this._value = null;
    this._removeUniqueSelectionListener = () => {
    };
    this._injector = inject(Injector);
    this._onInputClick = (event) => {
      if (this.disabled && this.disabledInteractive) {
        event.preventDefault();
      }
    };
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._disabledInteractive = _defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._inputElement.nativeElement.addEventListener("click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._inputElement?.nativeElement.removeEventListener("click", this._onInputClick);
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static {
    this.\u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioButton)(\u0275\u0275directiveInject(MAT_RADIO_GROUP, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(UniqueSelectionDispatcher), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_RADIO_DEFAULT_OPTIONS, 8), \u0275\u0275injectAttribute("tabindex"));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatRadioButton,
      selectors: [["mat-radio-button"]],
      viewQuery: function MatRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-radio-button"],
      hostVars: 19,
      hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
            return ctx._inputElement.nativeElement.focus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        id: "id",
        name: "name",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
        checked: [2, "checked", "checked", booleanAttribute],
        value: "value",
        labelPosition: "labelPosition",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioButton"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c2,
      decls: 13,
      vars: 17,
      consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
      template: function MatRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
          \u0275\u0275listener("click", function MatRadioButton_Template_div_click_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onTouchTargetClick($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "input", 5, 1);
          \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInputInteraction($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 6);
          \u0275\u0275element(7, "div", 7)(8, "div", 8);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "div", 9);
          \u0275\u0275element(10, "div", 10);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(11, "label", 11);
          \u0275\u0275projection(12);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("labelPosition", ctx.labelPosition);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
          \u0275\u0275advance(2);
          \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
          \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          \u0275\u0275advance(5);
          \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
          \u0275\u0275advance(2);
          \u0275\u0275property("for", ctx.inputId);
        }
      },
      dependencies: [MatRipple, _MatInternalFormField],
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" #formField>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>
    <input #input class="mdc-radio__native-control" type="radio"
           [id]="inputId"
           [checked]="checked"
           [disabled]="disabled && !disabledInteractive"
           [attr.name]="name"
           [attr.value]="value"
           [required]="required"
           [attr.aria-label]="ariaLabel"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
           (change)="_onInputInteraction($event)">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div mat-ripple class="mat-radio-ripple mat-mdc-focus-indicator"
         [matRippleTrigger]="_rippleTrigger.nativeElement"
         [matRippleDisabled]="_isRippleDisabled()"
         [matRippleCentered]="true">
      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>
    </div>
  </div>
  <label class="mdc-label" [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}']
    }]
  }], () => [{
    type: MatRadioGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_GROUP]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: UniqueSelectionDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static {
    this.\u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatRadioModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// src/app/core/services/votacion.service.ts
var VotacionService = class _VotacionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}`;
  }
  listarPorAsamblea(asambleaId) {
    return this.http.get(`${this.apiUrl}/asambleas/${asambleaId}/votaciones`);
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/votaciones/${id}`);
  }
  crear(asambleaId, request) {
    return this.http.post(`${this.apiUrl}/asambleas/${asambleaId}/votaciones`, request);
  }
  abrir(id) {
    return this.http.patch(`${this.apiUrl}/votaciones/${id}/abrir`, {});
  }
  cerrar(id) {
    return this.http.patch(`${this.apiUrl}/votaciones/${id}/cerrar`, {});
  }
  emitirVoto(id, request) {
    return this.http.post(`${this.apiUrl}/votaciones/${id}/votar`, request);
  }
  static {
    this.\u0275fac = function VotacionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VotacionService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VotacionService, factory: _VotacionService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/votaciones/votaciones.component.ts
var _c02 = ["crearModal"];
var _c12 = ["votarModal"];
var _c22 = ["actaModal"];
var _c3 = ["qrModal"];
var _c4 = (a0, a1, a2) => ({ "aprobada": a0, "rechazada": a1, "empate": a2 });
var _c5 = () => ({ standalone: true });
var _c6 = (a0, a1) => ({ "aprobado": a0, "rechazado": a1 });
function VotacionesComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("value", a_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" \u{1F3DB}\uFE0F ", a_r2.titulo, " (", a_r2.fecha, ") \u2014 ", a_r2.tipo || "General", " ");
  }
}
function VotacionesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "mat-icon");
    \u0275\u0275text(4, "how_to_vote");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "span", 22);
    \u0275\u0275text(7, "Total Propuestas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 24)(11, "div", 20)(12, "mat-icon");
    \u0275\u0275text(13, "play_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 21)(15, "span", 22);
    \u0275\u0275text(16, "Votaciones Activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 23);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 25)(20, "div", 20)(21, "mat-icon");
    \u0275\u0275text(22, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21)(24, "span", 22);
    \u0275\u0275text(25, "Acuerdos Aprobados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 23);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 26)(29, "div", 20)(30, "mat-icon");
    \u0275\u0275text(31, "groups");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 21)(33, "span", 22);
    \u0275\u0275text(34, "Comuneros Presentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 23);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.totalVotacionesGlobal);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.votacionesEnCursoCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.votacionesAprobadasCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.comunerosPresentes.length);
  }
}
function VotacionesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando propuestas de votaci\xF3n y padr\xF3n de asistentes...");
    \u0275\u0275elementEnd()();
  }
}
function VotacionesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No hay propuestas de votaci\xF3n en esta asamblea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Registre una nueva moci\xF3n o propuesta para abrir el proceso de votaci\xF3n entre los comuneros calificados.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 30);
    \u0275\u0275listener("click", function VotacionesComponent_div_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirCrearModal());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Crear Primera Propuesta ");
    \u0275\u0275elementEnd()();
  }
}
function VotacionesComponent_div_17_mat_card_1_span_9_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_span_9_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_span_9_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "balance");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275template(1, VotacionesComponent_div_17_mat_card_1_span_9_mat_icon_1_Template, 2, 0, "mat-icon", 44)(2, VotacionesComponent_div_17_mat_card_1_span_9_mat_icon_2_Template, 2, 0, "mat-icon", 44)(3, VotacionesComponent_div_17_mat_card_1_span_9_mat_icon_3_Template, 2, 0, "mat-icon", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c4, (v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision) === "APROBADA", (v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision) === "RECHAZADA", (v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision) === "EMPATE"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision) === "APROBADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision) === "RECHAZADA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision) === "EMPATE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision, " ");
  }
}
function VotacionesComponent_div_17_mat_card_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "strong");
    \u0275\u0275text(2, "Moci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", v_r5.propuesta, " ");
  }
}
function VotacionesComponent_div_17_mat_card_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r5.descripcion);
  }
}
function VotacionesComponent_div_17_mat_card_1_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "span");
    \u0275\u0275text(3, "\u{1F464} ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-progress-bar", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cand_r6 = ctx.$implicit;
    const v_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(cand_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r2.getVotosCandidato(v_r5, cand_r6), " votos)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.getPctCandidato(v_r5, cand_r6), "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.getPctCandidato(v_r5, cand_r6));
  }
}
function VotacionesComponent_div_17_mat_card_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, VotacionesComponent_div_17_mat_card_1_div_22_div_1_Template, 10, 4, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getCandidatosKeys(v_r5));
  }
}
function VotacionesComponent_div_17_mat_card_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 59)(2, "div", 57)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-progress-bar", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60)(9, "div", 57)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "mat-progress-bar", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 61)(16, "div", 57)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "mat-progress-bar", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F7E2} A FAVOR (", ctx_r2.getVotosAFavor(v_r5), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pctAFavor(v_r5), "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.pctAFavor(v_r5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F534} EN CONTRA (", ctx_r2.getVotosEnContra(v_r5), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pctEnContra(v_r5), "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.pctEnContra(v_r5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u26AA ABSTENCI\xD3N (", ctx_r2.getVotosAbstencion(v_r5), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pctAbstencion(v_r5), "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.pctAbstencion(v_r5));
  }
}
function VotacionesComponent_div_17_mat_card_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function VotacionesComponent_div_17_mat_card_1_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const v_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirVotacion(v_r5.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Abrir Votaci\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function VotacionesComponent_div_17_mat_card_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const v_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirModalVotar(v_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Registrar Voto ");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function VotacionesComponent_div_17_mat_card_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const v_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirModalQrVotacion(v_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " QR de Votaci\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function VotacionesComponent_div_17_mat_card_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const v_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cerrarVotacion(v_r5.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "stop");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cerrar Escrutinio ");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function VotacionesComponent_div_17_mat_card_1_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const v_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirActaModal(v_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ver Acta Oficial ");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_div_17_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 33)(1, "mat-card-header")(2, "div", 34)(3, "mat-chip-set")(4, "mat-chip", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275pipe(7, "estadoBadge");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, VotacionesComponent_div_17_mat_card_1_span_9_Template, 5, 9, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-card-title", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-card-content");
    \u0275\u0275template(13, VotacionesComponent_div_17_mat_card_1_div_13_Template, 4, 1, "div", 38)(14, VotacionesComponent_div_17_mat_card_1_p_14_Template, 2, 1, "p", 39);
    \u0275\u0275element(15, "mat-divider");
    \u0275\u0275elementStart(16, "div", 40)(17, "div", 41)(18, "span");
    \u0275\u0275text(19, "Escrutinio Digital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 42);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, VotacionesComponent_div_17_mat_card_1_div_22_Template, 2, 1, "div", 43)(23, VotacionesComponent_div_17_mat_card_1_ng_container_23_Template, 22, 9, "ng-container", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-card-actions", 45);
    \u0275\u0275template(25, VotacionesComponent_div_17_mat_card_1_button_25_Template, 4, 0, "button", 46)(26, VotacionesComponent_div_17_mat_card_1_button_26_Template, 4, 0, "button", 47)(27, VotacionesComponent_div_17_mat_card_1_button_27_Template, 4, 0, "button", 48)(28, VotacionesComponent_div_17_mat_card_1_button_28_Template, 4, 0, "button", 49)(29, VotacionesComponent_div_17_mat_card_1_button_29_Template, 4, 0, "button", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatTipo(v_r5.tipo));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(7, 16, v_r5.estado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r5.estado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.resultado == null ? null : v_r5.resultado.resultadoDecision);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r5.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r5.propuesta);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.descripcion);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.getTotalVotos(v_r5), " votos emitidos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.tipo === "ELECCION_REPRESENTANTE" || v_r5.candidatos && v_r5.candidatos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.tipo !== "ELECCION_REPRESENTANTE" && (!v_r5.candidatos || v_r5.candidatos.length === 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r5.estado === "BORRADOR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.estado === "ABIERTA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.estado === "ABIERTA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.estado === "ABIERTA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r5.estado === "CERRADA" || ctx_r2.getTotalVotos(v_r5) > 0);
  }
}
function VotacionesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, VotacionesComponent_div_17_mat_card_1_Template, 30, 18, "mat-card", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.votaciones);
  }
}
function VotacionesComponent_ng_template_18_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El t\xEDtulo es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_ng_template_18_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La propuesta es obligatoria");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_ng_template_18_div_39_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "mat-form-field", 88)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function VotacionesComponent_ng_template_18_div_39_div_10_Template_input_ngModelChange_4_listener($event) {
      const idx_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.candidatosLista[idx_r15], $event) || (ctx_r2.candidatosLista[idx_r15] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 90);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_18_div_39_div_10_Template_button_click_5_listener() {
      const idx_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removerCandidatoInput(idx_r15));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const idx_r15 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Candidato #", idx_r15 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.candidatosLista[idx_r15]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.candidatosLista.length <= 2);
  }
}
function VotacionesComponent_ng_template_18_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "h4");
    \u0275\u0275text(3, "\u{1F465} Lista de Candidatos Postulantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 84);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_18_div_39_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.agregarCandidatoInput());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Agregar Candidato ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 85);
    \u0275\u0275text(9, "Ingrese el nombre completo de los comuneros candidatos (ej: 4 postulantes):");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, VotacionesComponent_ng_template_18_div_39_div_10_Template, 8, 5, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.candidatosLista)("ngForTrackBy", ctx_r2.trackByIndex);
  }
}
function VotacionesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 66)(1, "mat-icon");
    \u0275\u0275text(2, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Registrar Nueva Propuesta de Votaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-dialog-content", 67)(5, "mat-form-field", 8)(6, "mat-label");
    \u0275\u0275text(7, "T\xEDtulo de la Propuesta / Moci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 68);
    \u0275\u0275template(9, VotacionesComponent_ng_template_18_mat_error_9_Template, 2, 0, "mat-error", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 8)(11, "mat-label");
    \u0275\u0275text(12, "Propuesta Espec\xEDfica Sometida a Voto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 69);
    \u0275\u0275template(14, VotacionesComponent_ng_template_18_mat_error_14_Template, 2, 0, "mat-error", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 8)(16, "mat-label");
    \u0275\u0275text(17, "Descripci\xF3n / Contexto Adicional (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "textarea", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 71)(20, "label", 72);
    \u0275\u0275text(21, "Tipo de Proceso / Regla:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-group", 73)(23, "mat-radio-button", 74)(24, "strong");
    \u0275\u0275text(25, "Mayor\xEDa Simple");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " (M\xE1s del 50% de los votos emitidos) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-radio-button", 75)(28, "strong");
    \u0275\u0275text(29, "Mayor\xEDa Calificada");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " (M\xEDnimo 2/3 de los votos emitidos) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-radio-button", 76)(32, "strong");
    \u0275\u0275text(33, "Unanimidad");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " (100% de aprobaci\xF3n sin votos en contra) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-radio-button", 77)(36, "strong");
    \u0275\u0275text(37, "Elecci\xF3n de Representante / Autoridad");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " (Postulantes/Candidatos) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(39, VotacionesComponent_ng_template_18_div_39_Template, 11, 2, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-dialog-actions", 79)(41, "button", 80);
    \u0275\u0275text(42, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 81);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_18_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardarVotacion());
    });
    \u0275\u0275elementStart(44, "mat-icon");
    \u0275\u0275text(45, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Registrar Votaci\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.votacionForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.votacionForm.get("titulo")) == null ? null : tmp_6_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r2.votacionForm.get("propuesta")) == null ? null : tmp_7_0.hasError("required"));
    \u0275\u0275advance(25);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r2.votacionForm.get("tipo")) == null ? null : tmp_8_0.value) === "ELECCION_REPRESENTANTE");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.votacionForm.invalid);
  }
}
function VotacionesComponent_ng_template_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.votacionSeleccionada.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', ctx_r2.votacionSeleccionada.propuesta || ctx_r2.votacionSeleccionada.descripcion, '"');
  }
}
function VotacionesComponent_ng_template_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "No hay comuneros registrados como PRESENTES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Solamente los comuneros con asistencia marcada como ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "PRESENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " en esta asamblea est\xE1n habilitados para sufragio.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 102);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_20_div_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.irAAsistencia());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "how_to_reg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Ir a Control de Asistencia ");
    \u0275\u0275elementEnd()();
  }
}
function VotacionesComponent_ng_template_20_mat_form_field_8_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19.comuneroId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" \u{1F464} ", c_r19.nombreCompleto, " (DNI: ", c_r19.dni, ") \u2014 ", c_r19.sectorNombre || "Comunero", " ");
  }
}
function VotacionesComponent_ng_template_20_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 8)(1, "mat-label");
    \u0275\u0275text(2, "Seleccionar Comunero Presente habilitado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function VotacionesComponent_ng_template_20_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.comuneroSeleccionadoId, $event) || (ctx_r2.comuneroSeleccionadoId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(4, VotacionesComponent_ng_template_20_mat_form_field_8_mat_option_4_Template, 2, 4, "mat-option", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.comuneroSeleccionadoId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.comunerosPresentes);
  }
}
function VotacionesComponent_ng_template_20_div_9_div_4_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 112);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function VotacionesComponent_ng_template_20_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_20_div_9_div_4_Template_div_click_0_listener() {
      const cand_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.candidatoSeleccionadoAdmin = cand_r21);
    });
    \u0275\u0275elementStart(1, "div", 109);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 110)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Postulante");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, VotacionesComponent_ng_template_20_div_9_div_4_mat_icon_8_Template, 2, 0, "mat-icon", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cand_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r2.candidatoSeleccionadoAdmin === cand_r21);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(cand_r21);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.candidatoSeleccionadoAdmin === cand_r21);
  }
}
function VotacionesComponent_ng_template_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "label", 105);
    \u0275\u0275text(2, "Seleccione el Candidato a Elegir:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 106);
    \u0275\u0275template(4, VotacionesComponent_ng_template_20_div_9_div_4_Template, 9, 4, "div", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.votacionSeleccionada == null ? null : ctx_r2.votacionSeleccionada.candidatos);
  }
}
function VotacionesComponent_ng_template_20_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_20_div_10_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.opcionVotoSeleccionada = "A_FAVOR");
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "thumb_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "A FAVOR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_20_div_10_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.opcionVotoSeleccionada = "EN_CONTRA");
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "thumb_down");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "EN CONTRA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 116);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_20_div_10_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.opcionVotoSeleccionada = "ABSTENCION");
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "remove_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "ABSTENCI\xD3N");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.opcionVotoSeleccionada === "A_FAVOR");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r2.opcionVotoSeleccionada === "EN_CONTRA");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r2.opcionVotoSeleccionada === "ABSTENCION");
  }
}
function VotacionesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 91)(1, "mat-icon");
    \u0275\u0275text(2, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Emisi\xF3n de Voto Comunero ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-dialog-content", 92);
    \u0275\u0275template(5, VotacionesComponent_ng_template_20_div_5_Template, 5, 2, "div", 93);
    \u0275\u0275elementStart(6, "div", 94);
    \u0275\u0275template(7, VotacionesComponent_ng_template_20_div_7_Template, 15, 0, "div", 95)(8, VotacionesComponent_ng_template_20_mat_form_field_8_Template, 5, 2, "mat-form-field", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, VotacionesComponent_ng_template_20_div_9_Template, 5, 1, "div", 97)(10, VotacionesComponent_ng_template_20_div_10_Template, 16, 6, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-dialog-actions", 79)(12, "button", 80);
    \u0275\u0275text(13, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 81);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_20_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmarEmitirVoto());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Registrar Voto ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.votacionSeleccionada);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.comunerosPresentes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.comunerosPresentes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.votacionSeleccionada == null ? null : ctx_r2.votacionSeleccionada.tipo) === "ELECCION_REPRESENTANTE" || (ctx_r2.votacionSeleccionada == null ? null : ctx_r2.votacionSeleccionada.candidatos) && ctx_r2.votacionSeleccionada.candidatos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.votacionSeleccionada == null ? null : ctx_r2.votacionSeleccionada.tipo) !== "ELECCION_REPRESENTANTE" && (!(ctx_r2.votacionSeleccionada == null ? null : ctx_r2.votacionSeleccionada.candidatos) || ctx_r2.votacionSeleccionada.candidatos.length === 0));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.comuneroSeleccionadoId);
  }
}
function VotacionesComponent_ng_template_22_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "strong");
    \u0275\u0275text(2, "Texto del Acuerdo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.votacionActa.propuesta, " ");
  }
}
function VotacionesComponent_ng_template_22_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119)(2, "div", 120)(3, "mat-icon");
    \u0275\u0275text(4, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "COMUNIDAD CAMPESINA DE LA ENCA\xD1ADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Distrito de La Enca\xF1ada \u2014 Provincia y Departamento de Cajamarca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 121);
    \u0275\u0275text(10, "Acta Oficial de Escrutinio y Certificaci\xF3n de Votaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-divider");
    \u0275\u0275elementStart(12, "div", 122)(13, "div", 123)(14, "strong");
    \u0275\u0275text(15, "Asamblea:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 123)(18, "strong");
    \u0275\u0275text(19, "Asunto / Moci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, VotacionesComponent_ng_template_22_div_0_div_21_Template, 4, 1, "div", 124);
    \u0275\u0275elementStart(22, "div", 123)(23, "strong");
    \u0275\u0275text(24, "Regla de Mayor\xEDa Exigida:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 125)(27, "h4");
    \u0275\u0275text(28, "Escrutinio Oficial de Sufragios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "table", 126)(30, "thead")(31, "tr")(32, "th");
    \u0275\u0275text(33, "Opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Conteo Votos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Porcentaje");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td");
    \u0275\u0275text(41, "\u{1F7E2} A Favor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td")(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td");
    \u0275\u0275text(49, "\u{1F534} En Contra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td")(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "tr")(56, "td");
    \u0275\u0275text(57, "\u26AA Abstenci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td")(59, "strong");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "tr", 127)(64, "td");
    \u0275\u0275text(65, "Total Sufragios Emitidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "td")(67, "strong");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70, "100%");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(71, "div", 128)(72, "h4");
    \u0275\u0275text(73, "DICTAMEN FINAL DEL ESCRUTINIO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 129);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 130)(77, "div", 131)(78, "span");
    \u0275\u0275text(79, "_______________________");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p");
    \u0275\u0275text(81, "Presidente Comunal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 131)(83, "span");
    \u0275\u0275text(84, "_______________________");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p");
    \u0275\u0275text(86, "Secretario de Actas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(87, "mat-dialog-actions", 132)(88, "button", 80);
    \u0275\u0275text(89, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 30);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_22_div_0_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.imprimirActa());
    });
    \u0275\u0275elementStart(91, "mat-icon");
    \u0275\u0275text(92, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " Imprimir Acta ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1(" ", ctx_r2.votacionActa.asambleaTitulo, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.votacionActa.titulo, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.votacionActa.propuesta);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatTipo(ctx_r2.votacionActa.tipo), " ");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r2.getVotosAFavor(ctx_r2.votacionActa));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pctAFavor(ctx_r2.votacionActa), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getVotosEnContra(ctx_r2.votacionActa));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pctEnContra(ctx_r2.votacionActa), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getVotosAbstencion(ctx_r2.votacionActa));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pctAbstencion(ctx_r2.votacionActa), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getTotalVotos(ctx_r2.votacionActa));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c6, (ctx_r2.votacionActa.resultado == null ? null : ctx_r2.votacionActa.resultado.resultadoDecision) === "APROBADA", (ctx_r2.votacionActa.resultado == null ? null : ctx_r2.votacionActa.resultado.resultadoDecision) === "RECHAZADA"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.votacionActa.resultado == null ? null : ctx_r2.votacionActa.resultado.resultadoDecision) || "PROCESO CERRADO", " ");
  }
}
function VotacionesComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VotacionesComponent_ng_template_22_div_0_Template, 94, 16, "div", 117);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.votacionActa);
  }
}
function VotacionesComponent_ng_template_24_div_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F5F3}\uFE0F Elecci\xF3n de Representante (", (ctx_r2.votacionParaQr.candidatos == null ? null : ctx_r2.votacionParaQr.candidatos.length) || 0, " Candidatos)");
  }
}
function VotacionesComponent_ng_template_24_div_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Moci\xF3n: ", ctx_r2.formatTipo(ctx_r2.votacionParaQr.tipo), "");
  }
}
function VotacionesComponent_ng_template_24_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "h2")(2, "mat-icon");
    \u0275\u0275text(3, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " C\xF3digo QR de Votaci\xF3n en Vivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Los comuneros presentes pueden escanear este c\xF3digo con su celular para votar directamente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 135);
    \u0275\u0275element(8, "img", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 137)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, VotacionesComponent_ng_template_24_div_0_span_12_Template, 2, 1, "span", 44)(13, VotacionesComponent_ng_template_24_div_0_span_13_Template, 2, 1, "span", 44);
    \u0275\u0275elementStart(14, "code", 138);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 139)(17, "button", 140);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_24_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copiarQrVotacionLink());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Copiar Enlace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 102);
    \u0275\u0275listener("click", function VotacionesComponent_ng_template_24_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.probarQrVotacionLink());
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Probar C\xE9dula ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 80);
    \u0275\u0275text(26, " Cerrar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r2.qrVotacionUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.votacionParaQr.titulo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.votacionParaQr.tipo === "ELECCION_REPRESENTANTE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.votacionParaQr.tipo !== "ELECCION_REPRESENTANTE");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.qrVotacionLink);
  }
}
function VotacionesComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VotacionesComponent_ng_template_24_div_0_Template, 27, 5, "div", 133);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.votacionParaQr);
  }
}
var VotacionesComponent = class _VotacionesComponent {
  constructor(votacionService, asambleaService, asistenciaService, notify, fb, dialog, router) {
    this.votacionService = votacionService;
    this.asambleaService = asambleaService;
    this.asistenciaService = asistenciaService;
    this.notify = notify;
    this.fb = fb;
    this.dialog = dialog;
    this.router = router;
    this.asambleas = [];
    this.selectedAsambleaId = null;
    this.votaciones = [];
    this.comunerosPresentes = [];
    this.loading = false;
    this.loadingPadron = false;
    this.candidatosLista = [""];
    this.votacionParaQr = null;
    this.votacionSeleccionada = null;
    this.comuneroSeleccionadoId = null;
    this.opcionVotoSeleccionada = "A_FAVOR";
    this.candidatoSeleccionadoAdmin = "";
    this.votacionActa = null;
  }
  get selectedAsamblea() {
    return this.asambleas.find((a) => a.id === this.selectedAsambleaId) || null;
  }
  irAAsistencia() {
    this.dialogRef?.close();
    this.router.navigate(["/asistencia"]);
  }
  ngOnInit() {
    this.initForm();
    this.cargarAsambleas();
  }
  initForm() {
    this.votacionForm = this.fb.group({
      titulo: ["", [Validators.required, Validators.minLength(4)]],
      propuesta: ["", [Validators.required, Validators.minLength(5)]],
      descripcion: [""],
      tipo: ["MAYORIA_SIMPLE", Validators.required]
    });
  }
  agregarCandidatoInput() {
    this.candidatosLista.push("");
  }
  removerCandidatoInput(index) {
    if (this.candidatosLista.length > 1) {
      this.candidatosLista.splice(index, 1);
    }
  }
  trackByIndex(index) {
    return index;
  }
  cargarAsambleas() {
    this.asambleaService.listar(0, 50).subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.content) {
          this.asambleas = res.data.content;
          if (this.asambleas.length > 0) {
            this.selectedAsambleaId = this.asambleas[0].id;
            this.cargarVotaciones();
            this.cargarPadronAsistentes();
          }
        }
      }
    });
  }
  cargarVotaciones() {
    if (!this.selectedAsambleaId)
      return;
    this.loading = true;
    this.votacionService.listarPorAsamblea(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.votaciones = res.data;
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  cargarPadronAsistentes() {
    if (!this.selectedAsambleaId)
      return;
    this.loadingPadron = true;
    this.asistenciaService.obtenerPadron(this.selectedAsambleaId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.comunerosPresentes = res.data.filter((c) => c.estadoAsistencia === "PRESENTE");
        }
        this.loadingPadron = false;
      },
      error: () => this.loadingPadron = false
    });
  }
  onAsambleaChange() {
    this.cargarVotaciones();
    this.cargarPadronAsistentes();
  }
  abrirCrearModal() {
    if (!this.selectedAsambleaId) {
      this.notify.warning("Seleccione una asamblea primero");
      return;
    }
    this.candidatosLista = ["", ""];
    this.votacionForm.reset({ tipo: "MAYORIA_SIMPLE" });
    this.dialogRef = this.dialog.open(this.crearModal, { width: "620px" });
  }
  guardarVotacion() {
    if (this.votacionForm.invalid || !this.selectedAsambleaId) {
      this.votacionForm.markAllAsTouched();
      return;
    }
    const req = __spreadValues({}, this.votacionForm.value);
    if (req.tipo === "ELECCION_REPRESENTANTE") {
      const validCands = this.candidatosLista.map((c) => c.trim()).filter((c) => c.length > 0);
      if (validCands.length < 2) {
        this.notify.warning("Debe registrar al menos 2 candidatos para la elecci\xF3n");
        return;
      }
      req.candidatos = validCands;
    }
    this.votacionService.crear(this.selectedAsambleaId, req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Propuesta de votaci\xF3n registrada exitosamente");
          this.dialogRef?.close();
          this.cargarVotaciones();
        }
      }
    });
  }
  abrirVotacion(id) {
    this.votacionService.abrir(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Votaci\xF3n abierta a sufragio");
          this.cargarVotaciones();
        }
      }
    });
  }
  cerrarVotacion(id) {
    this.votacionService.cerrar(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Votaci\xF3n cerrada formalmente y escrutinio finalizado");
          this.cargarVotaciones();
        }
      }
    });
  }
  abrirModalQrVotacion(v) {
    this.votacionParaQr = v;
    this.dialogRef = this.dialog.open(this.qrModal, { width: "440px" });
  }
  get qrVotacionLink() {
    if (!this.votacionParaQr)
      return "";
    const origin = window.location.origin;
    return `${origin}/emitir-voto?votacionId=${this.votacionParaQr.id}`;
  }
  get qrVotacionUrl() {
    if (!this.votacionParaQr)
      return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(this.qrVotacionLink)}`;
  }
  copiarQrVotacionLink() {
    const link = this.qrVotacionLink;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).then(() => {
        this.notify.success("Enlace de votaci\xF3n copiado al portapapeles");
      });
    }
  }
  probarQrVotacionLink() {
    window.open(this.qrVotacionLink, "_blank");
  }
  abrirModalVotar(v) {
    this.votacionSeleccionada = v;
    this.comuneroSeleccionadoId = this.comunerosPresentes.length > 0 ? this.comunerosPresentes[0].comuneroId : null;
    this.opcionVotoSeleccionada = "A_FAVOR";
    this.candidatoSeleccionadoAdmin = v.candidatos && v.candidatos.length > 0 ? v.candidatos[0] : "";
    this.dialogRef = this.dialog.open(this.votarModal, { width: "540px" });
  }
  confirmarEmitirVoto() {
    if (!this.votacionSeleccionada || !this.comuneroSeleccionadoId) {
      this.notify.warning("Seleccione un comunero votante");
      return;
    }
    const esEleccion = this.votacionSeleccionada.tipo === "ELECCION_REPRESENTANTE" || !!this.votacionSeleccionada.candidatos && this.votacionSeleccionada.candidatos.length > 0;
    const req = {
      comuneroId: this.comuneroSeleccionadoId,
      opcion: esEleccion ? "CANDIDATO" : this.opcionVotoSeleccionada,
      candidatoElegido: esEleccion ? this.candidatoSeleccionadoAdmin : void 0
    };
    this.votacionService.emitirVoto(this.votacionSeleccionada.id, req).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Voto emitido y registrado en el acta");
          this.dialogRef?.close();
          this.cargarVotaciones();
        }
      }
    });
  }
  abrirActaModal(v) {
    this.votacionActa = v;
    this.dialogRef = this.dialog.open(this.actaModal, { width: "680px" });
  }
  imprimirActa() {
    window.print();
  }
  // Métodos auxiliares de métricas
  getVotosAFavor(v) {
    return v.resultado ? v.resultado.votosAFavor : v.aFavor || 0;
  }
  getVotosEnContra(v) {
    return v.resultado ? v.resultado.votosEnContra : v.enContra || 0;
  }
  getVotosAbstencion(v) {
    return v.resultado ? v.resultado.votosAbstencion : v.abstenciones || 0;
  }
  getTotalVotos(v) {
    return v.resultado ? v.resultado.totalVotosEmitidos : v.totalVotos || 0;
  }
  pctAFavor(v) {
    if (v.resultado && v.resultado.porcentajeAFavor !== void 0) {
      return Number(v.resultado.porcentajeAFavor);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round(this.getVotosAFavor(v) / tot * 100) : 0;
  }
  pctEnContra(v) {
    if (v.resultado && v.resultado.porcentajeEnContra !== void 0) {
      return Number(v.resultado.porcentajeEnContra);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round(this.getVotosEnContra(v) / tot * 100) : 0;
  }
  pctAbstencion(v) {
    if (v.resultado && v.resultado.porcentajeAbstencion !== void 0) {
      return Number(v.resultado.porcentajeAbstencion);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round(this.getVotosAbstencion(v) / tot * 100) : 0;
  }
  formatTipo(tipo) {
    if (!tipo)
      return "ORDINARIA";
    return tipo.replace(/_/g, " ");
  }
  get totalVotacionesGlobal() {
    return this.votaciones.length;
  }
  get votacionesEnCursoCount() {
    return this.votaciones.filter((v) => v.estado === "ABIERTA").length;
  }
  get votacionesAprobadasCount() {
    return this.votaciones.filter((v) => v.resultado?.resultadoDecision === "APROBADA" || v.resultado?.resultadoDecision?.startsWith("ELECTO")).length;
  }
  getCandidatosKeys(v) {
    if (v.resultado?.votosPorCandidato) {
      return Object.keys(v.resultado.votosPorCandidato);
    }
    return v.candidatos || [];
  }
  getVotosCandidato(v, cand) {
    return v.resultado?.votosPorCandidato?.[cand] || 0;
  }
  getPctCandidato(v, cand) {
    if (v.resultado?.porcentajePorCandidato?.[cand] !== void 0) {
      return Number(v.resultado.porcentajePorCandidato[cand]);
    }
    const tot = this.getTotalVotos(v);
    return tot > 0 ? Math.round(this.getVotosCandidato(v, cand) / tot * 100) : 0;
  }
  static {
    this.\u0275fac = function VotacionesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VotacionesComponent)(\u0275\u0275directiveInject(VotacionService), \u0275\u0275directiveInject(AsambleaService), \u0275\u0275directiveInject(AsistenciaService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VotacionesComponent, selectors: [["app-votaciones"]], viewQuery: function VotacionesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c22, 5);
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.crearModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.votarModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actaModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.qrModal = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 6, consts: [["crearModal", ""], ["votarModal", ""], ["actaModal", ""], ["qrModal", ""], ["title", "Votaciones y Acuerdos Comunales", "subtitle", "Sistema digital de escrutinio en vivo y toma de decisiones transparentes para La Enca\xF1ada", "icon", "how_to_vote"], [1, "filter-card"], [1, "filter-content"], [1, "asamblea-selector"], ["appearance", "outline", 1, "full-width"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-buttons"], ["mat-raised-button", "", "color", "primary", 1, "btn-nueva-propuesta", 3, "click"], ["class", "stats-grid", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "votaciones-grid", 4, "ngIf"], [3, "value"], [1, "stats-grid"], [1, "stat-card", "blue"], [1, "stat-icon"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "green"], [1, "stat-card", "purple"], [1, "stat-card", "orange"], [1, "loading-container"], ["diameter", "48"], [1, "empty-state"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "votaciones-grid"], ["class", "votacion-card", 4, "ngFor", "ngForOf"], [1, "votacion-card"], [1, "card-header-top"], [1, "tipo-chip"], ["class", "decision-badge", 3, "ngClass", 4, "ngIf"], [1, "card-title"], ["class", "propuesta-box", 4, "ngIf"], ["class", "desc", 4, "ngIf"], [1, "results-box"], [1, "votos-total-head"], [1, "total-badge"], ["class", "candidatos-results-grid", 4, "ngIf"], [4, "ngIf"], [1, "card-actions"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "btn-votar", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "decision-badge", 3, "ngClass"], [1, "propuesta-box"], [1, "desc"], [1, "candidatos-results-grid"], ["class", "option-result candidato-res", 4, "ngFor", "ngForOf"], [1, "option-result", "candidato-res"], [1, "result-header"], ["mode", "determinate", 3, "value"], [1, "option-result", "favor"], [1, "option-result", "contra"], [1, "option-result", "abstencion"], ["mat-raised-button", "", 1, "btn-votar", 3, "click"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-dialog-title", "", 1, "dialog-header"], [1, "dialog-form", 3, "formGroup"], ["matInput", "", "formControlName", "titulo", "placeholder", "Ej: Aprobaci\xF3n del Presupuesto de Canal de Riego"], ["matInput", "", "formControlName", "propuesta", "rows", "3", "placeholder", "Redacte el acuerdo o resoluci\xF3n que ser\xE1 votado por los comuneros..."], ["matInput", "", "formControlName", "descripcion", "rows", "2", "placeholder", "Antecedentes, justificaci\xF3n t\xE9cnica o legal..."], [1, "tipo-votacion-group"], [1, "tipo-label"], ["formControlName", "tipo", 1, "radio-vertical"], ["value", "MAYORIA_SIMPLE"], ["value", "MAYORIA_CALIFICADA"], ["value", "UNANIMIDAD"], ["value", "ELECCION_REPRESENTANTE"], ["class", "candidatos-config-box", 4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "candidatos-config-box"], [1, "candidatos-config-header"], ["type", "button", "mat-stroked-button", "", "color", "primary", 3, "click"], [1, "candidatos-help"], ["class", "candidato-input-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "candidato-input-row"], ["appearance", "outline", 1, "candidato-field"], ["matInput", "", "placeholder", "Ej: Juan Quispe Morales", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", "mat-icon-button", "", "color", "warn", 3, "click", "disabled"], ["mat-dialog-title", "", 1, "dialog-header", "green-header"], [1, "dialog-votar-content"], ["class", "votar-info-card", 4, "ngIf"], [1, "voter-selection"], ["class", "empty-voters-alert", 4, "ngIf"], ["appearance", "outline", "class", "full-width", 4, "ngIf"], ["class", "candidatos-admin-vote", 4, "ngIf"], ["class", "opciones-voto-grid", 4, "ngIf"], [1, "votar-info-card"], [1, "propuesta-preview"], [1, "empty-voters-alert"], ["mat-raised-button", "", "color", "accent", 3, "click"], [3, "ngModelChange", "ngModel"], [1, "candidatos-admin-vote"], [1, "candidatos-vote-label"], [1, "candidatos-vote-grid"], ["class", "cand-vote-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "cand-vote-card", 3, "click"], [1, "cand-vote-icon"], [1, "cand-vote-text"], ["class", "check-icon", 4, "ngIf"], [1, "check-icon"], [1, "opciones-voto-grid"], [1, "voto-option", "favor", 3, "click"], [1, "voto-option", "contra", 3, "click"], [1, "voto-option", "abstencion", 3, "click"], ["class", "acta-container", 4, "ngIf"], [1, "acta-container"], [1, "acta-header"], [1, "acta-seal"], [1, "acta-sub"], [1, "acta-body"], [1, "acta-row"], ["class", "acta-row", 4, "ngIf"], [1, "acta-table-box"], [1, "acta-table"], [1, "total-row"], [1, "acta-dictamen", 3, "ngClass"], [1, "dictamen-value"], [1, "acta-signatures"], [1, "signature-line"], ["align", "end", 1, "no-print"], ["class", "qr-dialog-content", 4, "ngIf"], [1, "qr-dialog-content"], [1, "qr-image-box"], ["alt", "QR Votaci\xF3n", 1, "qr-img", 3, "src"], [1, "qr-info"], [1, "qr-link-text"], [1, "qr-actions"], ["mat-stroked-button", "", 3, "click"]], template: function VotacionesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 4);
        \u0275\u0275elementStart(1, "mat-card", 5)(2, "mat-card-content", 6)(3, "div", 7)(4, "mat-form-field", 8)(5, "mat-label");
        \u0275\u0275text(6, "Seleccionar Asamblea Comunitaria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function VotacionesComponent_Template_mat_select_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedAsambleaId, $event) || (ctx.selectedAsambleaId = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectionChange", function VotacionesComponent_Template_mat_select_selectionChange_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAsambleaChange());
        });
        \u0275\u0275template(8, VotacionesComponent_mat_option_8_Template, 2, 4, "mat-option", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 11)(10, "button", 12);
        \u0275\u0275listener("click", function VotacionesComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.abrirCrearModal());
        });
        \u0275\u0275elementStart(11, "mat-icon");
        \u0275\u0275text(12, "add_task");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nueva Propuesta a Voto ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(14, VotacionesComponent_div_14_Template, 37, 4, "div", 13)(15, VotacionesComponent_div_15_Template, 4, 0, "div", 14)(16, VotacionesComponent_div_16_Template, 11, 0, "div", 15)(17, VotacionesComponent_div_17_Template, 2, 1, "div", 16)(18, VotacionesComponent_ng_template_18_Template, 47, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(20, VotacionesComponent_ng_template_20_Template, 18, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(22, VotacionesComponent_ng_template_22_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(24, VotacionesComponent_ng_template_24_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedAsambleaId);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.asambleas);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.selectedAsambleaId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.votaciones.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.votaciones.length > 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatCardActions,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressBarModule,
      MatProgressBar,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatFormField,
      MatLabel,
      MatError,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      MatInputModule,
      MatInput,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatDividerModule,
      MatDivider,
      MatChipsModule,
      MatChip,
      MatChipSet,
      MatTooltipModule,
      PageHeaderComponent,
      EstadoBadgePipe
    ], styles: ['@charset "UTF-8";\n\n\n\n.filter-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   .asamblea-selector[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   .asamblea-selector[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -1.25em;\n}\n.filter-card[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   .btn-nueva-propuesta[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  height: 48px;\n  font-weight: 600;\n  border-radius: 8px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card.blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card.green[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card.purple[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card.orange[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 0;\n  gap: 16px;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px dashed #cbd5e1;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n.votaciones-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 24px;\n}\n.votacion-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.votacion-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding-bottom: 12px;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 12px;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-header-top[_ngcontent-%COMP%]   .tipo-chip[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #475569;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .decision-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .decision-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .decision-badge.aprobada[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .decision-badge.rechazada[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .decision-badge.empate[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.3;\n}\n.votacion-card[_ngcontent-%COMP%]   .propuesta-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-left: 4px solid #3b82f6;\n  padding: 10px 14px;\n  border-radius: 0 8px 8px 0;\n  margin-bottom: 12px;\n  font-size: 0.9rem;\n  color: #334155;\n}\n.votacion-card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.88rem;\n  margin-bottom: 14px;\n}\n.votacion-card[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin: 14px 0;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .votos-total-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #475569;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .votos-total-head[_ngcontent-%COMP%]   .total-badge[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 12px;\n  color: #0f172a;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .option-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 4px;\n  font-weight: 500;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .option-result.favor[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #047857;\n  font-weight: 600;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .option-result.favor[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner {\n  border-color: #10b981 !important;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .option-result.contra[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 600;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .option-result.contra[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner {\n  border-color: #ef4444 !important;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .option-result.abstencion[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n.votacion-card[_ngcontent-%COMP%]   .results-box[_ngcontent-%COMP%]   .option-result.abstencion[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner {\n  border-color: #94a3b8 !important;\n}\n.votacion-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 16px;\n  flex-wrap: wrap;\n}\n.votacion-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn-votar[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #0f172a;\n  font-weight: 700;\n}\n.dialog-header.green-header[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 10px;\n}\n.dialog-form[_ngcontent-%COMP%]   .tipo-votacion-group[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.dialog-form[_ngcontent-%COMP%]   .tipo-votacion-group[_ngcontent-%COMP%]   .tipo-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 8px;\n}\n.dialog-form[_ngcontent-%COMP%]   .tipo-votacion-group[_ngcontent-%COMP%]   .radio-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dialog-form[_ngcontent-%COMP%]   .tipo-votacion-group[_ngcontent-%COMP%]   .radio-vertical[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.dialog-votar-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .empty-voters-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  padding: 16px;\n  border-radius: 12px;\n  color: #9a3412;\n  flex-wrap: wrap;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .empty-voters-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f97316;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .empty-voters-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  color: #9a3412;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .empty-voters-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 8px 0;\n  font-size: 0.85rem;\n  color: #c2410c;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .empty-voters-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px 8px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 700;\n  font-size: 0.85rem;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.favor[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.favor[_ngcontent-%COMP%]:hover, \n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.favor.selected[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #ecfdf5;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.contra[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.contra[_ngcontent-%COMP%]:hover, \n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.contra.selected[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.abstencion[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.abstencion[_ngcontent-%COMP%]:hover, \n.dialog-votar-content[_ngcontent-%COMP%]   .opciones-voto-grid[_ngcontent-%COMP%]   .voto-option.abstencion.selected[_ngcontent-%COMP%] {\n  border-color: #64748b;\n  background: #f8fafc;\n}\n.acta-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #ffffff;\n  color: #0f172a;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-header[_ngcontent-%COMP%]   .acta-seal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #15803d;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin: 6px 0 2px 0;\n  color: #0f172a;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #475569;\n  margin: 0 0 6px 0;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-header[_ngcontent-%COMP%]   .acta-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-style: italic;\n  color: #64748b;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-row[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.4;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-table-box[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-table-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #334155;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-table-box[_ngcontent-%COMP%]   .acta-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-table-box[_ngcontent-%COMP%]   .acta-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-table-box[_ngcontent-%COMP%]   .acta-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  text-align: left;\n  font-size: 0.9rem;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-table-box[_ngcontent-%COMP%]   .acta-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-weight: 700;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-table-box[_ngcontent-%COMP%]   .acta-table[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  font-weight: 700;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-dictamen[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px solid #cbd5e1;\n  padding: 12px;\n  border-radius: 8px;\n  text-align: center;\n  margin-top: 10px;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-dictamen[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 0.85rem;\n  color: #475569;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-dictamen[_ngcontent-%COMP%]   .dictamen-value[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-dictamen.aprobado[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: #f0fdf4;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-dictamen.aprobado[_ngcontent-%COMP%]   .dictamen-value[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-dictamen.rechazado[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-dictamen.rechazado[_ngcontent-%COMP%]   .dictamen-value[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-signatures[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 40px;\n  text-align: center;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-signatures[_ngcontent-%COMP%]   .signature-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.acta-container[_ngcontent-%COMP%]   .acta-body[_ngcontent-%COMP%]   .acta-signatures[_ngcontent-%COMP%]   .signature-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: #334155;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   app-page-header[_ngcontent-%COMP%], \n   .filter-card[_ngcontent-%COMP%], \n   .stats-grid[_ngcontent-%COMP%], \n   .votaciones-grid[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .acta-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.candidatos-config-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  margin-top: 14px;\n}\n.candidatos-config-box[_ngcontent-%COMP%]   .candidatos-config-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.candidatos-config-box[_ngcontent-%COMP%]   .candidatos-config-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e293b;\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.candidatos-config-box[_ngcontent-%COMP%]   .candidatos-help[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.candidatos-config-box[_ngcontent-%COMP%]   .candidato-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.candidatos-config-box[_ngcontent-%COMP%]   .candidato-input-row[_ngcontent-%COMP%]   .candidato-field[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: -1.25em;\n}\n.candidatos-results-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 12px;\n}\n.candidatos-results-grid[_ngcontent-%COMP%]   .candidato-res[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.candidatos-results-grid[_ngcontent-%COMP%]   .candidato-res[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n  font-size: 0.85rem;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .candidatos-vote-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 10px;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .candidatos-vote-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  background: #ffffff;\n  transition: all 0.2s ease;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  background: #f8fafc;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card.selected[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card[_ngcontent-%COMP%]   .cand-vote-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card[_ngcontent-%COMP%]   .cand-vote-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card[_ngcontent-%COMP%]   .cand-vote-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #0f172a;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card[_ngcontent-%COMP%]   .cand-vote-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.candidatos-admin-vote[_ngcontent-%COMP%]   .cand-vote-card[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.qr-dialog-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 8px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 1.25rem;\n  color: #1e3a8a;\n  margin-bottom: 8px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-image-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px dashed #cbd5e1;\n  border-radius: 16px;\n  padding: 16px;\n  display: inline-block;\n  margin-bottom: 16px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-image-box[_ngcontent-%COMP%]   .qr-img[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  display: block;\n  border-radius: 8px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 20px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #0f172a;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #2563eb;\n  font-weight: 600;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-link-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: #f1f5f9;\n  padding: 6px 10px;\n  border-radius: 6px;\n  color: #475569;\n  word-break: break-all;\n  margin-top: 6px;\n}\n.qr-dialog-content[_ngcontent-%COMP%]   .qr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=votaciones.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VotacionesComponent, { className: "VotacionesComponent", filePath: "src\\app\\features\\votaciones\\votaciones.component.ts", lineNumber: 52 });
})();
export {
  VotacionesComponent
};
//# sourceMappingURL=chunk-DDMLHUNT.js.map
