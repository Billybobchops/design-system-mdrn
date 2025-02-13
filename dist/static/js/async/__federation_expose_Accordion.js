"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["__federation_expose_Accordion"], {
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
"./src/components/Accordion.module.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* ESM default export */ __webpack_exports__["default"] = ({"section":"src-components-Accordion-module__section-r8FVCc","focusedSection":"src-components-Accordion-module__focusedSection-MDVQ0F","title":"src-components-Accordion-module__title-dOEq0e","button":"src-components-Accordion-module__button-HbFvky","activeButton":"src-components-Accordion-module__activeButton-JINIt4","icon":"src-components-Accordion-module__icon-ZXhtvX","activeIcon":"src-components-Accordion-module__activeIcon-h8sgYS","content":"src-components-Accordion-module__content-xhUEY2"});
    if(true) {
      (function() {
        var localsJsonString = "{\"section\":\"src-components-Accordion-module__section-r8FVCc\",\"focusedSection\":\"src-components-Accordion-module__focusedSection-MDVQ0F\",\"title\":\"src-components-Accordion-module__title-dOEq0e\",\"button\":\"src-components-Accordion-module__button-HbFvky\",\"activeButton\":\"src-components-Accordion-module__activeButton-JINIt4\",\"icon\":\"src-components-Accordion-module__icon-ZXhtvX\",\"activeIcon\":\"src-components-Accordion-module__activeIcon-h8sgYS\",\"content\":\"src-components-Accordion-module__content-xhUEY2\"}";
        // 1739477389444
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
"./src/components/Accordion.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Icon.tsx");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react?58b7");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Accordion.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();



var Accordion = (param)=>{
    var { children, title } = param;
    _s();
    var [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    var [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    var [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    var accordionID = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
    var accordionContentID = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
    var buttonClasses = "".concat(_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button, " ").concat(isOpen ? _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].activeButton : '');
    var iconClasses = "".concat(isOpen ? _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].activeIcon : _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].icon);
    var sectionClasses = "".concat(_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].section, " ").concat(isFocused ? _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].focusedSection : _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].section);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: sectionClasses,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    "aria-controls": accordionContentID,
                    "aria-expanded": isOpen,
                    className: buttonClasses,
                    id: accordionID,
                    onBlur: ()=>{
                        setIsHovered(false);
                        setIsFocused(false);
                    },
                    onClick: ()=>setIsOpen(!isOpen),
                    onFocus: ()=>setIsFocused(true),
                    onMouseEnter: ()=>setIsHovered(true),
                    onMouseLeave: ()=>setIsHovered(false),
                    type: "button",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            "aria-hidden": "true",
                            className: iconClasses,
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_1__.Chevron, {
                                fill: isHovered ? 'var(--theme-a-3)' : 'var(--theme-a-4)'
                            }, void 0, false, {
                                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Accordion.tsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Accordion.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, undefined),
                        title
                    ]
                }, void 0, true, {
                    fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Accordion.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Accordion.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, undefined),
            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "aria-labelledby": accordionID,
                className: _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content,
                id: accordionContentID,
                children: children
            }, void 0, false, {
                fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Accordion.tsx",
                lineNumber: 46,
                columnNumber: 17
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/billchlanda/Desktop/design-system-mdrn/src/components/Accordion.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, undefined);
};
_s(Accordion, "LhuEpLHzOnyAMKkG2vtPTngfqQE=", false, function() {
    return [
        react__WEBPACK_IMPORTED_MODULE_2__.useId,
        react__WEBPACK_IMPORTED_MODULE_2__.useId
    ];
});
_c = Accordion;
/* ESM default export */ __webpack_exports__["default"] = (Accordion);
var _c;
$RefreshReg$(_c, "Accordion");

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
//# sourceMappingURL=__federation_expose_Accordion.js.map