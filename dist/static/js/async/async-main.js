"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["async-main"], {
"./src/modern.runtime.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _modern_js_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@modern-js/runtime/dist/esm/core/config.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

/* ESM default export */ __webpack_exports__["default"] = ((0,_modern_js_runtime__WEBPACK_IMPORTED_MODULE_0__.defineRuntimeConfig)({}));

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/routes/layout.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return Layout; }
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function Layout() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_1__.Outlet, {}, void 0, false, {
            fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/routes/layout.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/routes/layout.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=async-main.js.map