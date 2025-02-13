"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["src_components_navigation_Header_tsx"], {
"./src/components/navigation/Header.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"header":"src-components-navigation-Header-module__header-eRyNIn","container":"src-components-navigation-Header-module__container-C6cquA","homeLink":"src-components-navigation-Header-module__homeLink-xsujwO","menuButton":"src-components-navigation-Header-module__menuButton-mz1Et0"});
    if(true) {
      (function() {
        var localsJsonString = "{\"header\":\"src-components-navigation-Header-module__header-eRyNIn\",\"container\":\"src-components-navigation-Header-module__container-C6cquA\",\"homeLink\":\"src-components-navigation-Header-module__homeLink-xsujwO\",\"menuButton\":\"src-components-navigation-Header-module__menuButton-mz1Et0\"}";
        // 1739477389385
        var cssReload = (__webpack_require__("./node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/components/navigation/MenuToggle.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"menuToggle":"src-components-navigation-MenuToggle-module__menuToggle-nBQcl8","open":"src-components-navigation-MenuToggle-module__open-zmEfKA"});
    if(true) {
      (function() {
        var localsJsonString = "{\"menuToggle\":\"src-components-navigation-MenuToggle-module__menuToggle-nBQcl8\",\"open\":\"src-components-navigation-MenuToggle-module__open-zmEfKA\"}";
        // 1739477389448
        var cssReload = (__webpack_require__("./node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/components/navigation/Nav.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"nav":"src-components-navigation-Nav-module__nav-IXFx__","navOpen":"src-components-navigation-Nav-module__navOpen-_CJmEG","navList":"src-components-navigation-Nav-module__navList-OF43sI","navItem":"src-components-navigation-Nav-module__navItem-gXZQ26","navLink":"src-components-navigation-Nav-module__navLink-tkp5s2","linkGrid":"src-components-navigation-Nav-module__linkGrid-bV_UKj","linkGridSingleColumn":"src-components-navigation-Nav-module__linkGridSingleColumn-u4KN9Q","dropdownToggle":"src-components-navigation-Nav-module__dropdownToggle-mHz1XO","iconWrapper":"src-components-navigation-Nav-module__iconWrapper-zi9l9E","iconRotate":"src-components-navigation-Nav-module__iconRotate-zq9foS","subMenu":"src-components-navigation-Nav-module__subMenu-RnA_20"});
    if(true) {
      (function() {
        var localsJsonString = "{\"nav\":\"src-components-navigation-Nav-module__nav-IXFx__\",\"navOpen\":\"src-components-navigation-Nav-module__navOpen-_CJmEG\",\"navList\":\"src-components-navigation-Nav-module__navList-OF43sI\",\"navItem\":\"src-components-navigation-Nav-module__navItem-gXZQ26\",\"navLink\":\"src-components-navigation-Nav-module__navLink-tkp5s2\",\"linkGrid\":\"src-components-navigation-Nav-module__linkGrid-bV_UKj\",\"linkGridSingleColumn\":\"src-components-navigation-Nav-module__linkGridSingleColumn-u4KN9Q\",\"dropdownToggle\":\"src-components-navigation-Nav-module__dropdownToggle-mHz1XO\",\"iconWrapper\":\"src-components-navigation-Nav-module__iconWrapper-zi9l9E\",\"iconRotate\":\"src-components-navigation-Nav-module__iconRotate-zq9foS\",\"subMenu\":\"src-components-navigation-Nav-module__subMenu-RnA_20\"}";
        // 1739477389455
        var cssReload = (__webpack_require__("./node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/components/navigation/Header.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _components_navigation_MenuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/navigation/MenuToggle.tsx");
/* ESM import */var _components_navigation_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/navigation/Nav.tsx");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/navigation/Header.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();




var Header = (param)=>{
    var { homeLink, logoAltText, logoSrc, navLinks } = param;
    _s();
    var [isMobileNavOpen, setIsMobileNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].header,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container,
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: homeLink,
                    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].homeLink,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                        src: logoSrc,
                        alt: logoAltText
                    }, void 0, false, {
                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Header.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Header.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    "aria-expanded": isMobileNavOpen,
                    "aria-label": "Toggle navigation",
                    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].menuButton,
                    onClick: ()=>setIsMobileNavOpen((prev)=>!prev),
                    type: "button",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_MenuToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        isOpen: isMobileNavOpen
                    }, void 0, false, {
                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Header.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Header.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    links: navLinks,
                    isMobileNavOpen: isMobileNavOpen
                }, void 0, false, {
                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Header.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Header.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Header.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, undefined);
};
_s(Header, "nSq1pit461dlfAajByU2m/wIFZo=");
_c = Header;
/* ESM default export */ __webpack_exports__["default"] = (Header);
var _c;
$RefreshReg$(_c, "Header");

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
"./src/components/navigation/MenuToggle.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _MenuToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/navigation/MenuToggle.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var MenuToggle = (param)=>{
    var { isOpen } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "".concat(_MenuToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].menuToggle, " ").concat(isOpen ? _MenuToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].open : ''),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/MenuToggle.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/MenuToggle.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/MenuToggle.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/MenuToggle.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/MenuToggle.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, undefined);
};
_c = MenuToggle;
/* ESM default export */ __webpack_exports__["default"] = (MenuToggle);
var _c;
$RefreshReg$(_c, "MenuToggle");

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
"./src/components/navigation/Nav.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Icon.tsx");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/navigation/Nav.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();



var Nav = (param)=>{
    var { links, isMobileNavOpen } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].nav, " ").concat(isMobileNavOpen ? _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].navOpen : ''),
        "aria-label": "Main Navigation",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].navList,
            children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                    link: link
                }, link.label, false, {
                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                    lineNumber: 16,
                    columnNumber: 21
                }, undefined))
        }, void 0, false, {
            fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, undefined);
};
_c = Nav;
var NavItem = (param)=>{
    var { link } = param;
    _s();
    var [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    var [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    var handleKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen((prev)=>!prev);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].navItem,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>{
            setIsHovered(false);
            setIsOpen(false);
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].linkGrid, " ").concat(link.subMenu ? '' : _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].linkGridSingleColumn),
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: link.href,
                        className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].navLink,
                        children: [
                            !link.iconOnly && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                children: link.label
                            }, void 0, false, {
                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                                lineNumber: 45,
                                columnNumber: 40
                            }, undefined),
                            link.icon && link.icon
                        ]
                    }, void 0, true, {
                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, undefined),
                    link.subMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        "aria-expanded": isOpen,
                        "aria-haspopup": "true",
                        className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownToggle,
                        onClick: ()=>setIsOpen((prev)=>!prev),
                        onKeyDown: handleKeyDown,
                        type: "button",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            "aria-hidden": "true",
                            className: "".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].iconWrapper, " ").concat(isOpen ? _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].iconRotate : ''),
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_1__.DropdownChevron, {
                                fill: isHovered ? 'var(--nav-link-hover-color)' : 'var(--nav-link-color)'
                            }, void 0, false, {
                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                                lineNumber: 62,
                                columnNumber: 29
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, undefined),
            link.subMenu && isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].subMenu,
                children: link.subMenu.map((subLink)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                        link: subLink
                    }, subLink.label, false, {
                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                        lineNumber: 73,
                        columnNumber: 25
                    }, undefined))
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
                lineNumber: 71,
                columnNumber: 17
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/navigation/Nav.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, undefined);
};
_s(NavItem, "iwyrMDFweRaAN28WGPqiupBS3ak=");
_c1 = NavItem;
/* ESM default export */ __webpack_exports__["default"] = (Nav);
var _c, _c1;
$RefreshReg$(_c, "Nav");
$RefreshReg$(_c1, "NavItem");

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
//# sourceMappingURL=src_components_navigation_Header_tsx.js.map