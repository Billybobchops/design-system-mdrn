"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["__federation_expose_Textarea"], {
"./node_modules/@rspack/core/dist/cssExtractHmr.js": (function (module) {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/runtime/cssExtractHmr.ts
var cssExtractHmr_exports = {};
__export(cssExtractHmr_exports, {
  cssReload: () => cssReload,
  normalizeUrl: () => normalizeUrl
});
module.exports = __toCommonJS(cssExtractHmr_exports);
function normalizeUrl(url) {
  const urlString = url.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  const protocol = urlString.indexOf("//") !== -1 ? `${urlString.split("//")[0]}//` : "";
  const components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  const host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  const path = components.reduce((accumulator, item) => {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, []).join("/");
  return protocol + host + path;
}
var srcByModuleId = /* @__PURE__ */ Object.create(null);
var noDocument = typeof document === "undefined";
var { forEach } = Array.prototype;
function debounce(fn, time) {
  let timeout = 0;
  return function(...args) {
    const self = this;
    const functionCall = function functionCall2() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {
}
function getCurrentScriptUrl(moduleId) {
  let src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      ({ src } = document.currentScript);
    } else {
      const scripts = document.getElementsByTagName("script");
      const lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        ({ src } = lastScriptTag);
      }
    }
    srcByModuleId[moduleId] = src;
  }
  return (fileMap) => {
    if (!src) {
      return null;
    }
    const splitResult = src.match(/([^\\/]+)\.js$/);
    const filename = splitResult && splitResult[1];
    if (!filename || !fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map((mapRule) => {
      const reg = new RegExp(`${filename}\\.js$`, "g");
      return normalizeUrl(
        src.replace(reg, `${mapRule.replace(/{fileName}/g, filename)}.css`)
      );
    });
  };
}
function updateCss(el, url) {
  let normalizedUrl;
  if (!url) {
    if (!el.href) {
      return;
    }
    normalizedUrl = el.href.split("?")[0];
  } else {
    normalizedUrl = url;
  }
  if (!isUrlRequest(normalizedUrl)) {
    return;
  }
  if (el.isLoaded === false) {
    return;
  }
  if (!normalizedUrl || !(normalizedUrl.indexOf(".css") > -1)) {
    return;
  }
  el.visited = true;
  const newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", () => {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
  newEl.addEventListener("error", () => {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
  newEl.href = `${normalizedUrl}?${Date.now()}`;
  const parent = el.parentNode;
  if (!parent) {
    return;
  }
  if (el.nextSibling) {
    parent.insertBefore(newEl, el.nextSibling);
  } else {
    parent.appendChild(newEl);
  }
}
function getReloadUrl(href, src) {
  let ret = "";
  const normalizedHref = normalizeUrl(href);
  src.some((url) => {
    if (normalizedHref.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  const elements = document.querySelectorAll("link");
  let loaded = false;
  forEach.call(elements, (el) => {
    if (!el.href) {
      return;
    }
    const url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  const elements = document.querySelectorAll("link");
  forEach.call(elements, (el) => {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}
function isUrlRequest(url) {
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}
function cssReload(moduleId, options) {
  if (noDocument) {
    console.log("[HMR] No `window.document` found, CSS HMR disabled");
    return noop;
  }
  const getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    const src = getScriptSrc(options.filename);
    const reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local CSS Modules. Reload all CSS");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] CSS reload %s", src && src.join(" "));
    } else {
      console.log("[HMR] Reload all CSS");
      reloadAll();
    }
  }
  return debounce(update, 50);
}
// Annotate the CommonJS export names for ESM import in node:
0 && 0;


}),
"./src/components/form/HelperText.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"helperText":"src-components-form-HelperText-module__helperText-anzvNa"});
    if(true) {
      (function() {
        var localsJsonString = "{\"helperText\":\"src-components-form-HelperText-module__helperText-anzvNa\"}";
        // 1739477389369
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
"./src/components/form/Label.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"label":"src-components-form-Label-module__label-zC20Px","required":"src-components-form-Label-module__required-oQntt9"});
    if(true) {
      (function() {
        var localsJsonString = "{\"label\":\"src-components-form-Label-module__label-zC20Px\",\"required\":\"src-components-form-Label-module__required-oQntt9\"}";
        // 1739477389370
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
"./src/components/form/Textarea.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"inputContainer":"src-components-form-Textarea-module__inputContainer-_9NBJx","input":"src-components-form-Textarea-module__input-mTETfN"});
    if(true) {
      (function() {
        var localsJsonString = "{\"inputContainer\":\"src-components-form-Textarea-module__inputContainer-_9NBJx\",\"input\":\"src-components-form-Textarea-module__input-mTETfN\"}";
        // 1739477389459
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
"./src/components/form/HelperText.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _HelperText_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/form/HelperText.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var HelperText = (param)=>{
    var { helperID, helperText } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: _HelperText_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].helperText,
        id: helperID,
        children: helperText
    }, void 0, false, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/form/HelperText.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, undefined);
};
_c = HelperText;
/* ESM default export */ __webpack_exports__["default"] = (HelperText);
var _c;
$RefreshReg$(_c, "HelperText");

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
"./src/components/form/Label.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _Label_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/form/Label.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var Label = (param)=>{
    var { inputID, label, required } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: _Label_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
        htmlFor: inputID,
        children: [
            label,
            required && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: _Label_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].required,
                children: " *"
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/form/Label.tsx",
                lineNumber: 13,
                columnNumber: 26
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/form/Label.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, undefined);
};
_c = Label;
/* ESM default export */ __webpack_exports__["default"] = (Label);
var _c;
$RefreshReg$(_c, "Label");

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
"./src/components/form/Textarea.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _components_form_HelperText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/form/HelperText.tsx");
/* ESM import */var _components_form_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/form/Label.tsx");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var _Textarea_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/form/Textarea.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();




var Textarea = (param)=>{
    var { disabled = false, helperText = '', label, name, required = false } = param;
    _s();
    var inputID = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
    var helperID = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: _Textarea_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].inputContainer,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
                inputID: inputID,
                label: label,
                required: required
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/form/Textarea.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                "aria-invalid": false,
                "aria-describedby": helperID,
                className: _Textarea_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].input,
                disabled: disabled,
                id: inputID,
                name: name,
                required: required
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/form/Textarea.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_HelperText__WEBPACK_IMPORTED_MODULE_1__["default"], {
                helperID: helperID,
                helperText: helperText
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/form/Textarea.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/form/Textarea.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, undefined);
};
_s(Textarea, "xTsr71bHS3XCcrd0Fgk/4gBhEDE=", false, function() {
    return [
        react__WEBPACK_IMPORTED_MODULE_3__.useId,
        react__WEBPACK_IMPORTED_MODULE_3__.useId
    ];
});
_c = Textarea;
/* ESM default export */ __webpack_exports__["default"] = (Textarea);
var _c;
$RefreshReg$(_c, "Textarea");

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
//# sourceMappingURL=__federation_expose_Textarea.js.map