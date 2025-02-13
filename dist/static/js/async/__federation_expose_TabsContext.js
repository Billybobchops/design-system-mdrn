"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["__federation_expose_TabsContext"], {
"./src/components/tabular/TabsContext.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TabsProvider: function() { return TabsProvider; },
  useTabsContext: function() { return useTabsContext; }
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$(), _s1 = $RefreshSig$();

var contextErrorString = 'useTabsContext must be used within a TabsProvider';
var TabsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
var useTabsContext = ()=>{
    _s();
    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabsContext);
    if (!context) {
        throw new Error(contextErrorString);
    }
    return context;
};
_s(useTabsContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var TabsProvider = (param)=>{
    var { children, defaultSelectedTab, tabsPrefix = '' } = param;
    _s1();
    var [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSelectedTab);
    var contextValue = {
        selectedTab,
        setSelectedTab,
        tabsPrefix
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabsContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/tabular/TabsContext.tsx",
        lineNumber: 36,
        columnNumber: 12
    }, undefined);
};
_s1(TabsProvider, "fOkAiOXAYJ3VzBr9v25BLIHK9y8=");
_c = TabsProvider;
var _c;
$RefreshReg$(_c, "TabsProvider");

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
//# sourceMappingURL=__federation_expose_TabsContext.js.map