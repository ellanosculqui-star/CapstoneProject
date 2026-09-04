import {
  MatIcon,
  MatIconModule
} from "./chunk-JXQRCCZC.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RAFJE6SV.js";

// src/app/shared/components/page-header.component.ts
var _c0 = ["*"];
function PageHeaderComponent_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.icon);
  }
}
function PageHeaderComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
var PageHeaderComponent = class _PageHeaderComponent {
  constructor() {
    this.title = "";
    this.subtitle = "";
    this.icon = "";
  }
  static {
    this.\u0275fac = function PageHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: "title", subtitle: "subtitle", icon: "icon" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 9, vars: 3, consts: [[1, "page-header", "flex-row-between", "mb-24"], [1, "header-titles"], [1, "title-with-icon"], ["class", "header-icon", 4, "ngIf"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], [1, "header-actions"], [1, "header-icon"], [1, "page-subtitle"]], template: function PageHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, PageHeaderComponent_mat_icon_3_Template, 2, 1, "mat-icon", 3);
        \u0275\u0275elementStart(4, "h1", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, PageHeaderComponent_p_6_Template, 2, 1, "p", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275projection(8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subtitle);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .title-with-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .title-with-icon[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.page-header[_ngcontent-%COMP%]   .title-with-icon[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 4px 0 0 0;\n}\n/*# sourceMappingURL=page-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeaderComponent, { className: "PageHeaderComponent", filePath: "src\\app\\shared\\components\\page-header.component.ts", lineNumber: 56 });
})();

export {
  PageHeaderComponent
};
//# sourceMappingURL=chunk-TR7KNON3.js.map
