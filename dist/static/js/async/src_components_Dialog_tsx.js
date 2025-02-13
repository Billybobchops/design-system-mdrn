"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["src_components_Dialog_tsx"], {
"./src/components/Dialog.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"dialog":"src-components-Dialog-module__dialog-kb3Ga9","dialogGrid":"src-components-Dialog-module__dialogGrid-TKVRkf","dialogTitle":"src-components-Dialog-module__dialogTitle-PkyX17","actionBar":"src-components-Dialog-module__actionBar-G2khUn","actions":"src-components-Dialog-module__actions-z3GDHp","menuClose":"src-components-Dialog-module__menuClose-if8x2G","textCenter":"src-components-Dialog-module__textCenter-ZCic8E","buttonCenter":"src-components-Dialog-module__buttonCenter-gonhJr"});
    if(true) {
      (function() {
        var localsJsonString = "{\"dialog\":\"src-components-Dialog-module__dialog-kb3Ga9\",\"dialogGrid\":\"src-components-Dialog-module__dialogGrid-TKVRkf\",\"dialogTitle\":\"src-components-Dialog-module__dialogTitle-PkyX17\",\"actionBar\":\"src-components-Dialog-module__actionBar-G2khUn\",\"actions\":\"src-components-Dialog-module__actions-z3GDHp\",\"menuClose\":\"src-components-Dialog-module__menuClose-if8x2G\",\"textCenter\":\"src-components-Dialog-module__textCenter-ZCic8E\",\"buttonCenter\":\"src-components-Dialog-module__buttonCenter-gonhJr\"}";
        // 1739477389460
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
"./src/components/button/PrimaryButton.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"button":"src-components-button-PrimaryButton-module__button-s0o3b5","red":"src-components-button-PrimaryButton-module__red-nUbHfi","green":"src-components-button-PrimaryButton-module__green-tdFacN","blue":"src-components-button-PrimaryButton-module__blue-iMzHaF","disabled":"src-components-button-PrimaryButton-module__disabled-UHZ3DA","iconStart":"src-components-button-PrimaryButton-module__iconStart-jF2vhp","iconEnd":"src-components-button-PrimaryButton-module__iconEnd-WaE8oI","innerButton":"src-components-button-PrimaryButton-module__innerButton-NcxLum"});
    if(true) {
      (function() {
        var localsJsonString = "{\"button\":\"src-components-button-PrimaryButton-module__button-s0o3b5\",\"red\":\"src-components-button-PrimaryButton-module__red-nUbHfi\",\"green\":\"src-components-button-PrimaryButton-module__green-tdFacN\",\"blue\":\"src-components-button-PrimaryButton-module__blue-iMzHaF\",\"disabled\":\"src-components-button-PrimaryButton-module__disabled-UHZ3DA\",\"iconStart\":\"src-components-button-PrimaryButton-module__iconStart-jF2vhp\",\"iconEnd\":\"src-components-button-PrimaryButton-module__iconEnd-WaE8oI\",\"innerButton\":\"src-components-button-PrimaryButton-module__innerButton-NcxLum\"}";
        // 1739477389461
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
"./src/components/Dialog.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Icon.tsx");
/* ESM import */var _components_accessibility_VisuallyHidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/accessibility/VisuallyHidden.tsx");
/* ESM import */var _components_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/button/PrimaryButton.tsx");
/* ESM import */var _components_button_SimpleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/button/SimpleButton.tsx");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* ESM import */var _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Dialog.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();






var Dialog = (param)=>{
    var { handleDialogAction, actionButtonText, hasAction = false, children, color = 'var(--theme-a-4)', title, TriggerElement } = param;
    _s();
    var dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    var scrollPositionRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);
    var openDialog = ()=>{
        var _dialogRef_current;
        scrollPositionRef.current = window.scrollY;
        (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.showModal();
        document.body.style.top = "-".concat(scrollPositionRef.current, "px");
        document.body.classList.add('no-scroll');
    };
    var closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        var _dialogRef_current;
        (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.close();
        document.body.classList.remove('no-scroll');
        document.body.style.top = '';
        window.scrollTo(0, scrollPositionRef.current);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        var dialog = dialogRef.current;
        var handleBackdropClick = (e)=>{
            var dialogDimensions = dialog === null || dialog === void 0 ? void 0 : dialog.getBoundingClientRect();
            if (dialogDimensions && (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom)) {
                closeDialog();
            }
        };
        dialog === null || dialog === void 0 ? void 0 : dialog.addEventListener('close', closeDialog);
        dialog === null || dialog === void 0 ? void 0 : dialog.addEventListener('click', handleBackdropClick);
        return ()=>{
            dialog === null || dialog === void 0 ? void 0 : dialog.removeEventListener('close', closeDialog);
            dialog === null || dialog === void 0 ? void 0 : dialog.removeEventListener('click', handleBackdropClick);
        };
    }, [
        closeDialog
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dialog,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TriggerElement, {
                clickHandler: openDialog
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dialog", {
                ref: dialogRef,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].menuClose,
                        onClick: closeDialog,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_1__.MenuCloseLarge, {
                                    fill: color
                                }, void 0, false, {
                                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accessibility_VisuallyHidden__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                children: "Close Dialog"
                            }, void 0, false, {
                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "".concat(_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dialogGrid, " ").concat(hasAction ? '' : _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].textCenter),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                children: [
                                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                                        className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dialogTitle,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                        lineNumber: 82,
                                        columnNumber: 35
                                    }, undefined),
                                    children
                                ]
                            }, void 0, true, {
                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "".concat(hasAction ? _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].actionBar : ''),
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "".concat(_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].actions, " ").concat(hasAction ? '' : _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].buttonCenter),
                                    children: [
                                        hasAction && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_SimpleButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    text: "cancel",
                                                    clickHandler: closeDialog,
                                                    disabled: false,
                                                    variant: "blue"
                                                }, void 0, false, {
                                                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 37
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                    disabled: false,
                                                    clickHandler: handleDialogAction,
                                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_1__.Chevron, {}, void 0, false, {
                                                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 47
                                                    }, void 0),
                                                    text: actionButtonText ? actionButtonText : '',
                                                    variant: "blue"
                                                }, void 0, false, {
                                                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 37
                                                }, undefined)
                                            ]
                                        }, void 0, true),
                                        !hasAction && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            disabled: false,
                                            clickHandler: closeDialog,
                                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_1__.Chevron, {}, void 0, false, {
                                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                                lineNumber: 109,
                                                columnNumber: 43
                                            }, void 0),
                                            text: "Close",
                                            variant: "blue"
                                        }, void 0, false, {
                                            fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                            lineNumber: 106,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Dialog.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, undefined);
};
_s(Dialog, "l0dCeo5ooDbHtqJQ5GzJ0OTqqyk=");
_c = Dialog;
/* ESM default export */ __webpack_exports__["default"] = (Dialog);
var _c;
$RefreshReg$(_c, "Dialog");

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
"./src/components/button/PrimaryButton.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _PrimaryButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/button/PrimaryButton.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



var PrimaryButton = (param)=>{
    var { clickHandler, disabled = false, icon, iconPosition = 'end', text, type = 'button', variant = 'blue' } = param;
    var fillColor = disabled ? 'var(--utility-neutral-60)' : 'var(--utility-neutral-0)';
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "".concat(_PrimaryButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button, " ").concat(variant ? _PrimaryButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][variant] : '', " ").concat(disabled ? _PrimaryButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].disabled : ''),
        disabled: disabled,
        onClick: clickHandler,
        type: type,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: _PrimaryButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].innerButton,
            children: [
                icon && iconPosition === 'start' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    "aria-hidden": "true",
                    className: _PrimaryButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iconStart,
                    children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(icon, {
                        fill: fillColor
                    })
                }, void 0, false, {
                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/button/PrimaryButton.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, undefined),
                text,
                icon && iconPosition === 'end' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    "aria-hidden": "true",
                    className: _PrimaryButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].iconEnd,
                    children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(icon, {
                        fill: fillColor
                    })
                }, void 0, false, {
                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/button/PrimaryButton.tsx",
                    lineNumber: 40,
                    columnNumber: 21
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/button/PrimaryButton.tsx",
            lineNumber: 32,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/button/PrimaryButton.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, undefined);
};
_c = PrimaryButton;
/* ESM default export */ __webpack_exports__["default"] = (PrimaryButton);
var _c;
$RefreshReg$(_c, "PrimaryButton");

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
//# sourceMappingURL=src_components_Dialog_tsx.js.map