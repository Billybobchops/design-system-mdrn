"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["__federation_expose_TabList"], {
"./src/components/tabular/TabList.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();

var TabList = (param)=>{
    var { children, ariaLabel } = param;
    _s();
    var refList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var onKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        var list = refList.current;
        if (!list) return;
        var tabs = Array.from(list.querySelectorAll('[role="tab"]:not([disabled])'));
        var index = tabs.indexOf(document.activeElement);
        if (index < 0) return;
        switch(e.key){
            case 'ArrowUp':
            case 'ArrowLeft':
                {
                    var _tabs_next;
                    var next = (index - 1 + tabs.length) % tabs.length;
                    (_tabs_next = tabs[next]) === null || _tabs_next === void 0 ? void 0 : _tabs_next.focus();
                    break;
                }
            case 'ArrowDown':
            case 'ArrowRight':
                {
                    var _tabs_next1;
                    var next1 = (index + 1 + tabs.length) % tabs.length;
                    (_tabs_next1 = tabs[next1]) === null || _tabs_next1 === void 0 ? void 0 : _tabs_next1.focus();
                    break;
                }
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "aria-label": ariaLabel,
        onKeyDown: onKeyDown,
        ref: refList,
        role: "tablist",
        children: children
    }, void 0, false, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/tabular/TabList.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, undefined);
};
_s(TabList, "hFszjBwxcKBJdVk9EiQ5r6kfsBk=");
_c = TabList;
/* ESM default export */ __webpack_exports__["default"] = (TabList);
var _c;
$RefreshReg$(_c, "TabList");

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
//# sourceMappingURL=__federation_expose_TabList.js.map