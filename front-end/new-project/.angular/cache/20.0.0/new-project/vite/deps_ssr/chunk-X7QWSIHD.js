import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MediaMatcher
} from "./chunk-DPJGN6T2.js";
import {
  ANIMATION_MODULE_TYPE,
  InjectionToken,
  NgModule,
  inject,
  require_operators,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-3345WB4T.js";
import {
  require_cjs
} from "./chunk-6KW2VHMK.js";
import {
  __toESM
} from "./chunk-YHCV7DAQ.js";

// node_modules/@angular/cdk/fesm2022/layout.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var LayoutModule = class _LayoutModule {
  static ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _LayoutModule
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/animation-DfMFjxHu.mjs
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
function _animationsDisabled() {
  if (inject(MATERIAL_ANIMATIONS, { optional: true })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, { optional: true }) === "NoopAnimations") {
    return true;
  }
  const mediaMatcher = inject(MediaMatcher);
  return mediaMatcher.matchMedia("(prefers-reduced-motion)").matches;
}

export {
  _animationsDisabled
};
//# sourceMappingURL=chunk-X7QWSIHD.js.map
