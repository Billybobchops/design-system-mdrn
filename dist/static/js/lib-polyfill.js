"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["lib-polyfill"], {
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-data-view.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");

var $TypeError = TypeError;

module.exports = function (argument) {
  if (classof(argument) === 'DataView') return argument;
  throw new $TypeError('Argument is not a DataView');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var has = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js")/* .has */.has);

// Perform ? RequireInternalSlot(M, [[MapData]])
module.exports = function (it) {
  has(it);
  return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-possible-prototype.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isPossiblePrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-possible-prototype.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var has = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js")/* .has */.has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-string.js": (function (module) {

var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'string') return argument;
  throw new $TypeError('Argument is not a string');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-weak-map.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var has = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-helpers.js")/* .has */.has);

// Perform ? RequireInternalSlot(M, [[WeakMapData]])
module.exports = function (it) {
  has(it);
  return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/a-weak-set.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var has = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-set-helpers.js")/* .has */.has);

// Perform ? RequireInternalSlot(M, [[WeakSetData]])
module.exports = function (it) {
  has(it);
  return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/add-disposable-resource.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var ASYNC_DISPOSE = wellKnownSymbol('asyncDispose');
var DISPOSE = wellKnownSymbol('dispose');

var push = uncurryThis([].push);

// `GetDisposeMethod` abstract operation
// https://tc39.es/proposal-explicit-resource-management/#sec-getdisposemethod
var getDisposeMethod = function (V, hint) {
  if (hint === 'async-dispose') {
    var method = getMethod(V, ASYNC_DISPOSE);
    if (method !== undefined) return method;
    method = getMethod(V, DISPOSE);
    if (method === undefined) return method;
    return function () {
      call(method, this);
    };
  } return getMethod(V, DISPOSE);
};

// `CreateDisposableResource` abstract operation
// https://tc39.es/proposal-explicit-resource-management/#sec-createdisposableresource
var createDisposableResource = function (V, hint, method) {
  if (arguments.length < 3 && !isNullOrUndefined(V)) {
    method = aCallable(getDisposeMethod(anObject(V), hint));
  }

  return method === undefined ? function () {
    return undefined;
  } : bind(method, V);
};

// `AddDisposableResource` abstract operation
// https://tc39.es/proposal-explicit-resource-management/#sec-adddisposableresource
module.exports = function (disposable, V, hint, method) {
  var resource;
  if (arguments.length < 4) {
    // When `V`` is either `null` or `undefined` and hint is `async-dispose`,
    // we record that the resource was evaluated to ensure we will still perform an `Await` when resources are later disposed.
    if (isNullOrUndefined(V) && hint === 'sync-dispose') return;
    resource = createDisposableResource(V, hint);
  } else {
    resource = createDisposableResource(undefined, hint, method);
  }

  push(disposable.stack, resource);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/advance-string-index.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var charAt = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-multibyte.js")/* .charAt */.charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object-or-undefined.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (argument === undefined || isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object or undefined');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/an-uint8-array.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(argument, [[TypedArrayName]])
// If argument.[[TypedArrayName]] is not "Uint8Array", throw a TypeError exception
module.exports = function (argument) {
  if (classof(argument) === 'Uint8Array') return argument;
  throw new $TypeError('Argument is not an Uint8Array');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-basic-detection.js": (function (module) {

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-byte-length.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThisAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");

var ArrayBuffer = globalThis.ArrayBuffer;
var TypeError = globalThis.TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = ArrayBuffer && uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new TypeError('ArrayBuffer expected');
  return O.byteLength;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-is-detached.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js");
var arrayBufferByteLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-byte-length.js");

var ArrayBuffer = globalThis.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer && ArrayBuffer.prototype;
var slice = ArrayBufferPrototype && uncurryThis(ArrayBufferPrototype.slice);

module.exports = function (O) {
  if (arrayBufferByteLength(O) !== 0) return false;
  if (!slice) return false;
  try {
    slice(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-non-extensible.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-not-detached.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isDetached = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-is-detached.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isDetached(it)) throw new $TypeError('ArrayBuffer is detached');
  return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-transfer.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var uncurryThisAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var toIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-index.js");
var notDetached = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-not-detached.js");
var arrayBufferByteLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-byte-length.js");
var detachTransferable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/detach-transferable.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/structured-clone-proper-transfer.js");

var structuredClone = globalThis.structuredClone;
var ArrayBuffer = globalThis.ArrayBuffer;
var DataView = globalThis.DataView;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  notDetached(arrayBuffer);
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_ARRAY_BUFFER = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-basic-detection.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var tryToString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/try-to-string.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var uid = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uid.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = globalThis.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = globalThis.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = globalThis.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = globalThis[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = globalThis[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = globalThis[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = globalThis[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = globalThis[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (globalThis[NAME]) {
    createNonEnumerableProperty(globalThis[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var NATIVE_ARRAY_BUFFER = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-basic-detection.js");
var FunctionName = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-name.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-index.js");
var fround = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-fround.js");
var IEEE754 = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/ieee754.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var arrayFill = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-fill.js");
var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");
var inheritIfRequired = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inherit-if-required.js");
var copyConstructorProperties = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/copy-constructor-properties.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule.getterFor(DATA_VIEW);
var setInternalState = InternalStateModule.set;
var NativeArrayBuffer = globalThis[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = globalThis[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = globalThis.Array;
var RangeError = globalThis.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(fround(number), 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key, getInternalState) {
  defineBuiltInAccessor(Constructor[PROTOTYPE], key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex(index);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return boolIsLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex(index);
  var pack = conversion(+value);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, ArrayBufferPrototype);
    var byteLength = toIndex(length);
    setInternalState(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw new RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw new RangeError(WRONG_LENGTH);
    setInternalState(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
    addGetter($DataView, 'buffer', getInternalDataViewState);
    addGetter($DataView, 'byteLength', getInternalDataViewState);
    addGetter($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new, sonarjs/inconsistent-function-call -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return inheritIfRequired(new NativeArrayBuffer(toIndex(length)), this, $ArrayBuffer);
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    ArrayBufferPrototype.constructor = $ArrayBuffer;

    copyConstructorProperties($ArrayBuffer, NativeArrayBuffer);
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-fill.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-for-each.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var $forEach = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js")/* .forEach */.forEach);
var arrayMethodIsStrict = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-async.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");
var getAsyncIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-async-iterator.js");
var getIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var getBuiltInPrototypeMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in-prototype-method.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var AsyncFromSyncIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-from-sync-iterator.js");
var toArray = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-iteration.js")/* .toArray */.toArray);

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');
var arrayIterator = uncurryThis(getBuiltInPrototypeMethod('Array', 'values'));
var arrayIteratorNext = uncurryThis(arrayIterator([]).next);

var safeArrayIterator = function () {
  return new SafeArrayIterator(this);
};

var SafeArrayIterator = function (O) {
  this.iterator = arrayIterator(O);
};

SafeArrayIterator.prototype.next = function () {
  return arrayIteratorNext(this.iterator);
};

// `Array.fromAsync` method implementation
// https://github.com/tc39/proposal-array-from-async
module.exports = function fromAsync(asyncItems /* , mapfn = undefined, thisArg = undefined */) {
  var C = this;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var thisArg = argumentsLength > 2 ? arguments[2] : undefined;
  return new (getBuiltIn('Promise'))(function (resolve) {
    var O = toObject(asyncItems);
    if (mapfn !== undefined) mapfn = bind(mapfn, thisArg);
    var usingAsyncIterator = getMethod(O, ASYNC_ITERATOR);
    var usingSyncIterator = usingAsyncIterator ? undefined : getIteratorMethod(O) || safeArrayIterator;
    var A = isConstructor(C) ? new C() : [];
    var iterator = usingAsyncIterator
      ? getAsyncIterator(O, usingAsyncIterator)
      : new AsyncFromSyncIterator(getIteratorDirect(getIterator(O, usingSyncIterator)));
    resolve(toArray(iterator, mapfn, A));
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array-iterator-method.js");
var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js");
var getIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-group-to-map.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");

var Map = MapHelpers.Map;
var mapGet = MapHelpers.get;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;
var push = uncurryThis([].push);

// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
module.exports = function groupToMap(callbackfn /* , thisArg */) {
  var O = toObject(this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var map = new Map();
  var length = lengthOfArrayLike(self);
  var index = 0;
  var key, value;
  for (;length > index; index++) {
    value = self[index];
    key = boundFunction(value, index, O);
    if (mapHas(map, key)) push(mapGet(map, key), value);
    else mapSet(map, key, [value]);
  } return map;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-group.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var toPropertyKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var objectCreate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");

var $Array = Array;
var push = uncurryThis([].push);

module.exports = function ($this, callbackfn, that, specificConstructor) {
  var O = toObject($this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, that);
  var target = objectCreate(null);
  var length = lengthOfArrayLike(self);
  var index = 0;
  var Constructor, key, value;
  for (;length > index; index++) {
    value = self[index];
    key = toPropertyKey(boundFunction(value, index, O));
    // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
    // but since it's a `null` prototype object, we can safely use `in`
    if (key in target) push(target[key], value);
    else target[key] = [value];
  }
  // TODO: Remove this block from `core-js@4`
  if (specificConstructor) {
    Constructor = specificConstructor(O);
    if (Constructor !== $Array) {
      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
    }
  } return target;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-includes.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration-from-last.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var index = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-method-is-strict.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-reduce.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-set-length.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-sort.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");

var floor = Math.floor;

var sort = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor(length / 2);
    var left = sort(arraySlice(array, 0, middle), comparefn);
    var right = sort(arraySlice(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

module.exports = sort;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-species-constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-species-create.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-to-reversed.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-unique-by.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;
var push = uncurryThis([].push);

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = lengthOfArrayLike(that);
  var result = [];
  var map = new Map();
  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
    return value;
  };
  var index, item, key;
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!mapHas(map, key)) mapSet(map, key, item);
  }
  iterate(map, function (value) {
    push(result, value);
  });
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/array-with.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-from-sync-iterator.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var AsyncIteratorPrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-prototype.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");

var Promise = getBuiltIn('Promise');

var ASYNC_FROM_SYNC_ITERATOR = 'AsyncFromSyncIterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ASYNC_FROM_SYNC_ITERATOR);

var asyncFromSyncIteratorContinuation = function (result, resolve, reject) {
  var done = result.done;
  Promise.resolve(result.value).then(function (value) {
    resolve(createIterResultObject(value, done));
  }, reject);
};

var AsyncFromSyncIterator = function AsyncIterator(iteratorRecord) {
  iteratorRecord.type = ASYNC_FROM_SYNC_ITERATOR;
  setInternalState(this, iteratorRecord);
};

AsyncFromSyncIterator.prototype = defineBuiltIns(create(AsyncIteratorPrototype), {
  next: function next() {
    var state = getInternalState(this);
    return new Promise(function (resolve, reject) {
      var result = anObject(call(state.next, state.iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject);
    });
  },
  'return': function () {
    var iterator = getInternalState(this).iterator;
    return new Promise(function (resolve, reject) {
      var $return = getMethod(iterator, 'return');
      if ($return === undefined) return resolve(createIterResultObject(undefined, true));
      var result = anObject(call($return, iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject);
    });
  }
});

module.exports = AsyncFromSyncIterator;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-close.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, method, argument, reject) {
  try {
    var returnMethod = getMethod(iterator, 'return');
    if (returnMethod) {
      return getBuiltIn('Promise').resolve(call(returnMethod, iterator)).then(function () {
        method(argument);
      }, function (error) {
        reject(error);
      });
    }
  } catch (error2) {
    return reject(error2);
  } method(argument);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-create-proxy.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var perform = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var AsyncIteratorPrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-prototype.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");

var Promise = getBuiltIn('Promise');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ASYNC_ITERATOR_HELPER = 'AsyncIteratorHelper';
var WRAP_FOR_VALID_ASYNC_ITERATOR = 'WrapForValidAsyncIterator';
var setInternalState = InternalStateModule.set;

var createAsyncIteratorProxyPrototype = function (IS_ITERATOR) {
  var IS_GENERATOR = !IS_ITERATOR;
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER);

  var getStateOrEarlyExit = function (that) {
    var stateCompletion = perform(function () {
      return getInternalState(that);
    });

    var stateError = stateCompletion.error;
    var state = stateCompletion.value;

    if (stateError || (IS_GENERATOR && state.done)) {
      return { exit: true, value: stateError ? Promise.reject(state) : Promise.resolve(createIterResultObject(undefined, true)) };
    } return { exit: false, value: state };
  };

  return defineBuiltIns(create(AsyncIteratorPrototype), {
    next: function next() {
      var stateCompletion = getStateOrEarlyExit(this);
      var state = stateCompletion.value;
      if (stateCompletion.exit) return state;
      var handlerCompletion = perform(function () {
        return anObject(state.nextHandler(Promise));
      });
      var handlerError = handlerCompletion.error;
      var value = handlerCompletion.value;
      if (handlerError) state.done = true;
      return handlerError ? Promise.reject(value) : Promise.resolve(value);
    },
    'return': function () {
      var stateCompletion = getStateOrEarlyExit(this);
      var state = stateCompletion.value;
      if (stateCompletion.exit) return state;
      state.done = true;
      var iterator = state.iterator;
      var returnMethod, result;
      var completion = perform(function () {
        if (state.inner) try {
          iteratorClose(state.inner.iterator, 'normal');
        } catch (error) {
          return iteratorClose(iterator, 'throw', error);
        }
        return getMethod(iterator, 'return');
      });
      returnMethod = result = completion.value;
      if (completion.error) return Promise.reject(result);
      if (returnMethod === undefined) return Promise.resolve(createIterResultObject(undefined, true));
      completion = perform(function () {
        return call(returnMethod, iterator);
      });
      result = completion.value;
      if (completion.error) return Promise.reject(result);
      return IS_ITERATOR ? Promise.resolve(result) : Promise.resolve(result).then(function (resolved) {
        anObject(resolved);
        return createIterResultObject(undefined, true);
      });
    }
  });
};

var WrapForValidAsyncIteratorPrototype = createAsyncIteratorProxyPrototype(true);
var AsyncIteratorHelperPrototype = createAsyncIteratorProxyPrototype(false);

createNonEnumerableProperty(AsyncIteratorHelperPrototype, TO_STRING_TAG, 'Async Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR) {
  var AsyncIteratorProxy = function AsyncIterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  AsyncIteratorProxy.prototype = IS_ITERATOR ? WrapForValidAsyncIteratorPrototype : AsyncIteratorHelperPrototype;

  return AsyncIteratorProxy;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-indexed.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var map = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-map.js");

var callback = function (value, counter) {
  return [counter, value];
};

// `AsyncIterator.prototype.indexed` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function indexed() {
  return call(map, this, callback);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-iteration.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-iterator-helpers
// https://github.com/tc39/proposal-array-from-async
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var doesNotExceedSafeInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var closeAsyncIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-close.js");

var createMethod = function (TYPE) {
  var IS_TO_ARRAY = TYPE === 0;
  var IS_FOR_EACH = TYPE === 1;
  var IS_EVERY = TYPE === 2;
  var IS_SOME = TYPE === 3;
  return function (object, fn, target) {
    anObject(object);
    var MAPPING = fn !== undefined;
    if (MAPPING || !IS_TO_ARRAY) aCallable(fn);
    var record = getIteratorDirect(object);
    var Promise = getBuiltIn('Promise');
    var iterator = record.iterator;
    var next = record.next;
    var counter = 0;

    return new Promise(function (resolve, reject) {
      var ifAbruptCloseAsyncIterator = function (error) {
        closeAsyncIteration(iterator, reject, error, reject);
      };

      var loop = function () {
        try {
          if (MAPPING) try {
            doesNotExceedSafeInteger(counter);
          } catch (error5) { ifAbruptCloseAsyncIterator(error5); }
          Promise.resolve(anObject(call(next, iterator))).then(function (step) {
            try {
              if (anObject(step).done) {
                if (IS_TO_ARRAY) {
                  target.length = counter;
                  resolve(target);
                } else resolve(IS_SOME ? false : IS_EVERY || undefined);
              } else {
                var value = step.value;
                try {
                  if (MAPPING) {
                    var result = fn(value, counter);

                    var handler = function ($result) {
                      if (IS_FOR_EACH) {
                        loop();
                      } else if (IS_EVERY) {
                        $result ? loop() : closeAsyncIteration(iterator, resolve, false, reject);
                      } else if (IS_TO_ARRAY) {
                        try {
                          target[counter++] = $result;
                          loop();
                        } catch (error4) { ifAbruptCloseAsyncIterator(error4); }
                      } else {
                        $result ? closeAsyncIteration(iterator, resolve, IS_SOME || value, reject) : loop();
                      }
                    };

                    if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                    else handler(result);
                  } else {
                    target[counter++] = value;
                    loop();
                  }
                } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
              }
            } catch (error2) { reject(error2); }
          }, reject);
        } catch (error) { reject(error); }
      };

      loop();
    });
  };
};

module.exports = {
  toArray: createMethod(0),
  forEach: createMethod(1),
  every: createMethod(2),
  some: createMethod(3),
  find: createMethod(4)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-map.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var createAsyncIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-create-proxy.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var closeAsyncIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-close.js");

var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var mapper = state.mapper;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      closeAsyncIteration(iterator, doneAndReject, error, doneAndReject);
    };

    Promise.resolve(anObject(call(state.next, iterator))).then(function (step) {
      try {
        if (anObject(step).done) {
          state.done = true;
          resolve(createIterResultObject(undefined, true));
        } else {
          var value = step.value;
          try {
            var result = mapper(value, state.counter++);

            var handler = function (mapped) {
              resolve(createIterResultObject(mapped, false));
            };

            if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
            else handler(result);
          } catch (error2) { ifAbruptCloseAsyncIterator(error2); }
        }
      } catch (error) { doneAndReject(error); }
    }, doneAndReject);
  });
});

// `AsyncIterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new AsyncIteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-prototype.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var shared = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-store.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var USE_FUNCTION_CONSTRUCTOR = 'USE_FUNCTION_CONSTRUCTOR';
var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');
var AsyncIterator = globalThis.AsyncIterator;
var PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
var AsyncIteratorPrototype, prototype;

if (PassedAsyncIteratorPrototype) {
  AsyncIteratorPrototype = PassedAsyncIteratorPrototype;
} else if (isCallable(AsyncIterator)) {
  AsyncIteratorPrototype = AsyncIterator.prototype;
} else if (shared[USE_FUNCTION_CONSTRUCTOR] || globalThis[USE_FUNCTION_CONSTRUCTOR]) {
  try {
    // eslint-disable-next-line no-new-func -- we have no alternatives without usage of modern syntax
    prototype = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function('return async function*(){}()')())));
    if (getPrototypeOf(prototype) === Object.prototype) AsyncIteratorPrototype = prototype;
  } catch (error) { /* empty */ }
}

if (!AsyncIteratorPrototype) AsyncIteratorPrototype = {};
else if (IS_PURE) AsyncIteratorPrototype = create(AsyncIteratorPrototype);

if (!isCallable(AsyncIteratorPrototype[ASYNC_ITERATOR])) {
  defineBuiltIn(AsyncIteratorPrototype, ASYNC_ITERATOR, function () {
    return this;
  });
}

module.exports = AsyncIteratorPrototype;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-wrap.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var createAsyncIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-create-proxy.js");

module.exports = createAsyncIteratorProxy(function () {
  return call(this.next, this.iterator);
}, true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/base64-map.js": (function (module) {

var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var base64Alphabet = commonAlphabet + '+/';
var base64UrlAlphabet = commonAlphabet + '-_';

var inverse = function (characters) {
  // TODO: use `Object.create(null)` in `core-js@4`
  var result = {};
  var index = 0;
  for (; index < 64; index++) result[characters.charAt(index)] = index;
  return result;
};

module.exports = {
  i2c: base64Alphabet,
  c2i: inverse(base64Alphabet),
  i2cUrl: base64UrlAlphabet,
  c2iUrl: inverse(base64UrlAlphabet)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/call-with-safe-iteration-closing.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/check-correctness-of-iteration.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-from.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");

module.exports = function (C, adder, ENTRY) {
  return function from(source /* , mapFn, thisArg */) {
    var O = toObject(source);
    var length = arguments.length;
    var mapFn = length > 1 ? arguments[1] : undefined;
    var mapping = mapFn !== undefined;
    var boundFunction = mapping ? bind(mapFn, length > 2 ? arguments[2] : undefined) : undefined;
    var result = new C();
    var n = 0;
    iterate(O, function (nextItem) {
      var entry = mapping ? boundFunction(nextItem, n++) : nextItem;
      if (ENTRY) adder(result, anObject(entry)[0], entry[1]);
      else adder(result, entry);
    });
    return result;
  };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-of.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

// https://tc39.github.io/proposal-setmap-offrom/
module.exports = function (C, adder, ENTRY) {
  return function of() {
    var result = new C();
    var length = arguments.length;
    for (var index = 0; index < length; index++) {
      var entry = arguments[index];
      if (ENTRY) adder(result, anObject(entry)[0], entry[1]);
      else adder(result, entry);
    } return result;
  };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-strong.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var setSpecies = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var fastKey = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-metadata.js")/* .fastKey */.fastKey);
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: null,
        last: null,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: null,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = null;
          entry = entry.next;
        }
        state.first = state.last = null;
        state.index = create(null);
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: null
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = null;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-weak.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var getWeakData = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-metadata.js")/* .getWeakData */.getWeakData);
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var ArrayIterationModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: null
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          if (data) return data[state.id];
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/collection.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-forced.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var InternalMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/composite-key.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.map.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.weak-map.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

var $Object = Object;
var $TypeError = TypeError;
var Map = getBuiltIn('Map');
var WeakMap = getBuiltIn('WeakMap');

var Node = function () {
  // keys
  this.object = null;
  this.symbol = null;
  // child nodes
  this.primitives = null;
  this.objectsByIndex = create(null);
};

Node.prototype.get = function (key, initializer) {
  return this[key] || (this[key] = initializer());
};

Node.prototype.next = function (i, it, IS_OBJECT) {
  var store = IS_OBJECT
    ? this.objectsByIndex[i] || (this.objectsByIndex[i] = new WeakMap())
    : this.primitives || (this.primitives = new Map());
  var entry = store.get(it);
  if (!entry) store.set(it, entry = new Node());
  return entry;
};

var root = new Node();

module.exports = function () {
  var active = root;
  var length = arguments.length;
  var i, it;
  // for prevent leaking, start from objects
  for (i = 0; i < length; i++) {
    if (isObject(it = arguments[i])) active = active.next(i, it, true);
  }
  if (this === $Object && active === root) throw new $TypeError('Composite keys must contain a non-primitive component');
  for (i = 0; i < length; i++) {
    if (!isObject(it = arguments[i])) active = active.next(i, it, false);
  } return active;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/copy-constructor-properties.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/correct-is-regexp-logic.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/correct-prototype-getter.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js": (function (module) {

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js": (function (module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var makeBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/make-built-in.js");
var defineProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/define-global-property.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/delete-property-or-throw.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var tryToString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/detach-transferable.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var getBuiltInNodeModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in-node-module.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/structured-clone-proper-transfer.js");

var structuredClone = globalThis.structuredClone;
var $ArrayBuffer = globalThis.ArrayBuffer;
var $MessageChannel = globalThis.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER) {
  detach = function (transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = getBuiltInNodeModule('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

module.exports = detach;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/document-create-element.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/does-not-exceed-safe-integer.js": (function (module) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-exception-constants.js": (function (module) {

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-iterables.js": (function (module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-token-list-prototype.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/enum-bug-keys.js": (function (module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-ff-version.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ie-or-edge.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var UA = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

module.exports = /MSIE|Trident/.test(UA);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ios-pebble.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ios.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-node.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var ENVIRONMENT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment.js");

module.exports = ENVIRONMENT === 'NODE';


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-webos-webkit.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-webkit-version.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/environment.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* global Bun, Deno -- detection */
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-clear.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable, sonarjs/slow-regex -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-install.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var clearErrorStack = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-clear.js");
var ERROR_STACK_INSTALLABLE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-installable.js");

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-installable.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/error-to-string.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var normalizeStringArgument = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/normalize-string-argument.js");

var nativeErrorToString = Error.prototype.toString;

var INCORRECT_TO_STRING = fails(function () {
  if (DESCRIPTORS) {
    // Chrome 32- incorrectly call accessor
    // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
    var object = Object.create(Object.defineProperty({}, 'name', { get: function () {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== 'true') return true;
  }
  // FF10- does not properly handle non-strings
  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
});

module.exports = INCORRECT_TO_STRING ? function toString() {
  var O = anObject(this);
  var name = normalizeStringArgument(O.name, 'Error');
  var message = normalizeStringArgument(O.message);
  return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js")/* .f */.f);
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js": (function (module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.exec.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var regexpExec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/flatten-into-array.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/freezing.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-native.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-demethodize.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");

module.exports = function demethodize() {
  return uncurryThis(aCallable(this));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-name.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-accessor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classofRaw = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-alphabet-option.js": (function (module) {

var $TypeError = TypeError;

module.exports = function (options) {
  var alphabet = options && options.alphabet;
  if (alphabet === undefined || alphabet === 'base64' || alphabet === 'base64url') return alphabet || 'base64';
  throw new $TypeError('Incorrect `alphabet` option');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-async-iterator-flattenable.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var AsyncFromSyncIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-from-sync-iterator.js");

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');

module.exports = function (obj) {
  var object = anObject(obj);
  var alreadyAsync = true;
  var method = getMethod(object, ASYNC_ITERATOR);
  var iterator;
  if (!isCallable(method)) {
    method = getIteratorMethod(object);
    alreadyAsync = false;
  }
  if (method !== undefined) {
    iterator = call(method, object);
  } else {
    iterator = object;
    alreadyAsync = true;
  }
  anObject(iterator);
  return getIteratorDirect(alreadyAsync ? iterator : new AsyncFromSyncIterator(getIteratorDirect(iterator)));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-async-iterator.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var AsyncFromSyncIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-from-sync-iterator.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');

module.exports = function (it, usingIterator) {
  var method = arguments.length < 2 ? getMethod(it, ASYNC_ITERATOR) : usingIterator;
  return method ? anObject(call(method, it)) : new AsyncFromSyncIterator(getIteratorDirect(getIterator(it)));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in-node-module.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var IS_NODE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-node.js");

module.exports = function (name) {
  if (IS_NODE) {
    try {
      return globalThis.process.getBuiltinModule(name);
    } catch (error) { /* empty */ }
    try {
      // eslint-disable-next-line no-new-func -- safe
      return Function('return require("' + name + '")')();
    } catch (error) { /* empty */ }
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in-prototype-method.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

module.exports = function (CONSTRUCTOR, METHOD) {
  var Constructor = globalThis[CONSTRUCTOR];
  var Prototype = Constructor && Constructor.prototype;
  return Prototype && Prototype[METHOD];
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js": (function (module) {

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-flattenable.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (obj, stringHandling) {
  if (!stringHandling || typeof obj !== 'string') anObject(obj);
  var method = getIteratorMethod(obj);
  return getIteratorDirect(anObject(method !== undefined ? call(method, obj) : obj));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var Iterators = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-json-replacer-function.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var isArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/get-substitution.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/hidden-keys.js": (function (module) {

module.exports = {};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/host-report-errors.js": (function (module) {

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/html.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/ie8-dom-define.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/ieee754.js": (function (module) {

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number !== number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number !== number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent += eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[index - 1] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa += pow(2, mantissaLength);
    exponent -= eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/inherit-if-required.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/inspect-source.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/install-error-cause.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-metadata.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var getOwnPropertyNamesModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/freezing.js");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-basic-detection.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array-iterator-method.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-big-int-array.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js": (function (module) {

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-data-descriptor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-forced.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-integral-number.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-iterable.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var $Object = Object;

module.exports = function (it) {
  if (isNullOrUndefined(it)) return false;
  var O = $Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || hasOwn(Iterators, classof(O));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js": (function (module) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-possible-prototype.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js": (function (module) {

module.exports = false;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-raw-json.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var getInternalState = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js")/* .get */.get);

module.exports = function isRawJSON(O) {
  if (!isObject(O)) return false;
  var state = getInternalState(O);
  return !!state && state.type === 'RawJSON';
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-regexp.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/is-symbol.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var IteratorPrototype = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators-core.js")/* .IteratorPrototype */.IteratorPrototype);
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-proxy.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var IteratorPrototype = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators-core.js")/* .IteratorPrototype */.IteratorPrototype);
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      try {
        var result = state.done ? undefined : state.nextHandler();
        return createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, 'normal');
      } catch (error) {
        return iteratorClose(iterator, 'throw', error);
      }
      if (iterator) iteratorClose(iterator, 'normal');
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-define.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-indexed.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var map = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-map.js");

var callback = function (value, counter) {
  return [counter, value];
};

// `Iterator.prototype.indexed` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function indexed() {
  return call(map, this, callback);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-map.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var createIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-proxy.js");
var callWithSafeIterationClosing = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new IteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators-core.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators.js": (function (module) {

module.exports = {};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/make-built-in.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-name.js")/* .CONFIGURABLE */.CONFIGURABLE);
var inspectSource = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");

var Map = MapHelpers.Map;
var MapPrototype = MapHelpers.proto;
var forEach = uncurryThis(MapPrototype.forEach);
var entries = uncurryThis(MapPrototype.entries);
var next = entries(new Map()).next;

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
    return fn(entry[1], entry[0]);
  }) : forEach(map, fn);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/map-upsert.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var $TypeError = TypeError;

// `Map.prototype.upsert` method
// https://github.com/tc39/proposal-upsert
module.exports = function upsert(key, updateFn /* , insertFn */) {
  var map = anObject(this);
  var get = aCallable(map.get);
  var has = aCallable(map.has);
  var set = aCallable(map.set);
  var insertFn = arguments.length > 2 ? arguments[2] : undefined;
  var value;
  if (!isCallable(updateFn) && !isCallable(insertFn)) {
    throw new $TypeError('At least one callback required');
  }
  if (call(has, map, key)) {
    value = call(get, map, key);
    if (isCallable(updateFn)) {
      value = updateFn(value);
      call(set, map, key, value);
    }
  } else if (isCallable(insertFn)) {
    value = insertFn();
    call(set, map, key, value);
  } return value;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-f16round.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var floatRound = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-float-round.js");

var FLOAT16_EPSILON = 0.0009765625;
var FLOAT16_MAX_VALUE = 65504;
var FLOAT16_MIN_VALUE = 6.103515625e-05;

// `Math.f16round` method implementation
// https://github.com/tc39/proposal-float16array
module.exports = Math.f16round || function f16round(x) {
  return floatRound(x, FLOAT16_EPSILON, FLOAT16_MAX_VALUE, FLOAT16_MIN_VALUE);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-float-round.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var sign = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-sign.js");

var abs = Math.abs;

var EPSILON = 2.220446049250313e-16; // Number.EPSILON
var INVERSE_EPSILON = 1 / EPSILON;

var roundTiesToEven = function (n) {
  return n + INVERSE_EPSILON - INVERSE_EPSILON;
};

module.exports = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
  var n = +x;
  var absolute = abs(n);
  var s = sign(n);
  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
  var result = a - (a - absolute);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
  return s * result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-fround.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var floatRound = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-float-round.js");

var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
module.exports = Math.fround || function fround(x) {
  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-log10.js": (function (module) {

var log = Math.log;
var LOG10E = Math.LOG10E;

// eslint-disable-next-line es/no-math-log10 -- safe
module.exports = Math.log10 || function log10(x) {
  return log(x) * LOG10E;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-log1p.js": (function (module) {

var log = Math.log;

// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
module.exports = Math.log1p || function log1p(x) {
  var n = +x;
  return n > -1e-8 && n < 1e-8 ? n - n * n / 2 : log(1 + n);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-scale.js": (function (module) {

// `Math.scale` method implementation
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  var nx = +x;
  var nInLow = +inLow;
  var nInHigh = +inHigh;
  var nOutLow = +outLow;
  var nOutHigh = +outHigh;
  // eslint-disable-next-line no-self-compare -- NaN check
  if (nx !== nx || nInLow !== nInLow || nInHigh !== nInHigh || nOutLow !== nOutLow || nOutHigh !== nOutHigh) return NaN;
  if (nx === Infinity || nx === -Infinity) return nx;
  return (nx - nInLow) * (nOutHigh - nOutLow) / (nInHigh - nInLow) + nOutLow;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-sign.js": (function (module) {

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/math-trunc.js": (function (module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/microtask.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var safeGetBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/safe-get-built-in.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var macrotask = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/task.js")/* .set */.set);
var Queue = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/queue.js");
var IS_IOS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ios.js");
var IS_IOS_PEBBLE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ios-pebble.js");
var IS_WEBOS_WEBKIT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-webos-webkit.js");
var IS_NODE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-node.js");

var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
var document = globalThis.document;
var process = globalThis.process;
var Promise = globalThis.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, globalThis);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/native-raw-json.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-json -- safe */
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  var unsafeInt = '9007199254740993';
  var raw = JSON.rawJSON(unsafeInt);
  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/normalize-string-argument.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-nan.js": (function (module) {

var $RangeError = RangeError;

module.exports = function (it) {
  // eslint-disable-next-line no-self-compare -- NaN check
  if (it === it) return it;
  throw new $RangeError('NaN is not allowed');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-regexp.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isRegExp = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-regexp.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/number-is-finite.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

var globalIsFinite = globalThis.isFinite;

// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
module.exports = Number.isFinite || function isFinite(it) {
  return typeof it == 'number' && globalIsFinite(it);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/number-parse-float.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim.js")/* .trim */.trim);
var whitespaces = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var $parseFloat = globalThis.parseFloat;
var Symbol = globalThis.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
} : $parseFloat;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/number-parse-int.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim.js")/* .trim */.trim);
var whitespaces = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/whitespaces.js");

var $parseInt = globalThis.parseInt;
var Symbol = globalThis.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/numeric-range-iterator.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var createIteratorConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");

var INCORRECT_RANGE = 'Incorrect Iterator.range arguments';
var NUMERIC_RANGE_ITERATOR = 'NumericRangeIterator';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(NUMERIC_RANGE_ITERATOR);

var $RangeError = RangeError;
var $TypeError = TypeError;

var $RangeIterator = createIteratorConstructor(function NumericRangeIterator(start, end, option, type, zero, one) {
  // TODO: Drop the first `typeof` check after removing legacy methods in `core-js@4`
  if (typeof start != type || (end !== Infinity && end !== -Infinity && typeof end != type)) {
    throw new $TypeError(INCORRECT_RANGE);
  }
  if (start === Infinity || start === -Infinity) {
    throw new $RangeError(INCORRECT_RANGE);
  }
  var ifIncrease = end > start;
  var inclusiveEnd = false;
  var step;
  if (option === undefined) {
    step = undefined;
  } else if (isObject(option)) {
    step = option.step;
    inclusiveEnd = !!option.inclusive;
  } else if (typeof option == type) {
    step = option;
  } else {
    throw new $TypeError(INCORRECT_RANGE);
  }
  if (isNullOrUndefined(step)) {
    step = ifIncrease ? one : -one;
  }
  if (typeof step != type) {
    throw new $TypeError(INCORRECT_RANGE);
  }
  if (step === Infinity || step === -Infinity || (step === zero && start !== end)) {
    throw new $RangeError(INCORRECT_RANGE);
  }
  // eslint-disable-next-line no-self-compare -- NaN check
  var hitsEnd = start !== start || end !== end || step !== step || (end > start) !== (step > zero);
  setInternalState(this, {
    type: NUMERIC_RANGE_ITERATOR,
    start: start,
    end: end,
    step: step,
    inclusive: inclusiveEnd,
    hitsEnd: hitsEnd,
    currentCount: zero,
    zero: zero
  });
  if (!DESCRIPTORS) {
    this.start = start;
    this.end = end;
    this.step = step;
    this.inclusive = inclusiveEnd;
  }
}, NUMERIC_RANGE_ITERATOR, function next() {
  var state = getInternalState(this);
  if (state.hitsEnd) return createIterResultObject(undefined, true);
  var start = state.start;
  var end = state.end;
  var step = state.step;
  var currentYieldingValue = start + (step * state.currentCount++);
  if (currentYieldingValue === end) state.hitsEnd = true;
  var inclusiveEnd = state.inclusive;
  var endCondition;
  if (end > start) {
    endCondition = inclusiveEnd ? currentYieldingValue > end : currentYieldingValue >= end;
  } else {
    endCondition = inclusiveEnd ? end > currentYieldingValue : end >= currentYieldingValue;
  }
  if (endCondition) {
    state.hitsEnd = true;
    return createIterResultObject(undefined, true);
  } return createIterResultObject(currentYieldingValue, false);
});

var addGetter = function (key) {
  defineBuiltInAccessor($RangeIterator.prototype, key, {
    get: function () {
      return getInternalState(this)[key];
    },
    set: function () { /* empty */ },
    configurable: true,
    enumerable: false
  });
};

if (DESCRIPTORS) {
  addGetter('start');
  addGetter('end');
  addGetter('inclusive');
  addGetter('step');
}

module.exports = $RangeIterator;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-assign.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-properties.js": (function (__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js": (function (__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js": (function (__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names-external.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names.js")/* .f */.f);
var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names.js": (function (__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-symbols.js": (function (__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-extensible.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-iterator.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var createIteratorConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var objectKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");

var OBJECT_ITERATOR = 'Object Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(OBJECT_ITERATOR);

module.exports = createIteratorConstructor(function ObjectIterator(source, mode) {
  var object = toObject(source);
  setInternalState(this, {
    type: OBJECT_ITERATOR,
    mode: mode,
    object: object,
    keys: objectKeys(object),
    index: 0
  });
}, 'Object', function next() {
  var state = getInternalState(this);
  var keys = state.keys;
  while (true) {
    if (keys === null || state.index >= keys.length) {
      state.object = state.keys = null;
      return createIterResultObject(undefined, true);
    }
    var key = keys[state.index++];
    var object = state.object;
    if (!hasOwn(object, key)) continue;
    switch (state.mode) {
      case 'keys': return createIterResultObject(key, false);
      case 'values': return createIterResultObject(object[key], false);
    } /* entries */ return createIterResultObject([key, object[key]], false);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys-internal.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-includes.js")/* .indexOf */.indexOf);
var hiddenKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-property-is-enumerable.js": (function (__unused_webpack_module, exports) {

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-prototype-accessors-forced.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-undef, no-useless-call, sonarjs/no-reference-error -- required for testing */
/* eslint-disable es/no-legacy-object-prototype-accessor-methods -- required for testing */
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var WEBKIT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-webkit-version.js");

// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function () {
  // This feature detection crashes old WebKit
  // https://github.com/zloirock/core-js/issues/232
  if (WEBKIT && WEBKIT < 535) return;
  var key = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete globalThis[key];
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var aPossiblePrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/object-to-array.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var objectGetPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var objectKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var $propertyIsEnumerable = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-property-is-enumerable.js")/* .f */.f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/ordinary-to-primitive.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/own-keys.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/parse-json-string.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");

var $SyntaxError = SyntaxError;
var $parseInt = parseInt;
var fromCharCode = String.fromCharCode;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

module.exports = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at(source, i);
    if (chr === '\\') {
      var twoChars = slice(source, i, i + 2);
      if (hasOwn(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars === '\\u') {
        i += 2;
        var fourHexDigits = slice(source, i, i + 4);
        if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
        value += fromCharCode($parseInt(fourHexDigits, 16));
        i += 4;
      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr === '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  return { value: value, end: i };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/path.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

module.exports = globalThis;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js": (function (module) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-constructor-detection.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var NativePromiseConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-native-constructor.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isForced = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-forced.js");
var inspectSource = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inspect-source.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var ENVIRONMENT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var V8_VERSION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-native-constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

module.exports = globalThis.Promise;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-resolve.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-statics-incorrect-iteration.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var NativePromiseConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-native-constructor.js");
var checkCorrectnessOfIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/check-correctness-of-iteration.js");
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-constructor-detection.js")/* .CONSTRUCTOR */.CONSTRUCTOR);

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/proxy-accessor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/queue.js": (function (module) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.map.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.weak-map.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var shared = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared.js");

var Map = getBuiltIn('Map');
var WeakMap = getBuiltIn('WeakMap');
var push = uncurryThis([].push);

var metadata = shared('metadata');
var store = metadata.store || (metadata.store = new WeakMap());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};

var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};

var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};

var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};

var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { push(keys, key); });
  return keys;
};

var toMetadataKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};

module.exports = {
  store: store,
  getMap: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  toKey: toMetadataKey
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec-abstract.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec.js");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var getInternalState = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js")/* .get */.get);
var UNSUPPORTED_DOT_ALL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-flags.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-get-flags.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var regExpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-flags.js");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-sticky-helpers.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = globalThis.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-unsupported-dot-all.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-unsupported-ncg.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/safe-get-built-in.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return globalThis[name];
  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  return descriptor && descriptor.value;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/same-value-zero.js": (function (module) {

// `SameValueZero` abstract operation
// https://tc39.es/ecma262/#sec-samevaluezero
module.exports = function (x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y || x !== x && y !== y;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/same-value.js": (function (module) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/schedulers-fix.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var ENVIRONMENT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment.js");
var USER_AGENT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");
var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");

var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && (function () {
  var version = globalThis.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable(handler) ? handler : Function(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-clone.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-difference.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var clone = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-clone.js");
var size = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js");
var iterateSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(O, e)) remove(result, e);
  });
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-intersection.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var size = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js");
var iterateSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-disjoint-from.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var has = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js")/* .has */.has);
var size = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js");
var iterateSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-subset-of.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var size = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-size.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");
var getSetRecord = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js");

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-superset-of.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var has = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js")/* .has */.has);
var size = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

module.exports = function (name) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-size.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThisAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-species.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-symmetric-difference.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var clone = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-clone.js");
var getSetRecord = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/set-union.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var add = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js")/* .add */.add);
var clone = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-clone.js");
var getSetRecord = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-set-record.js");
var iterateSimple = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate-simple.js");

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-key.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-store.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var defineGlobalProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.39.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/shared.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared-store.js");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/species-constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-constructor.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-cooked.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;
var push = uncurryThis([].push);
var join = uncurryThis([].join);

// `String.cooked` method
// https://tc39.es/proposal-string-cooked/
module.exports = function cooked(template /* , ...substitutions */) {
  var cookedTemplate = toIndexedObject(template);
  var literalSegments = lengthOfArrayLike(cookedTemplate);
  if (!literalSegments) return '';
  var argumentsLength = arguments.length;
  var elements = [];
  var i = 0;
  while (true) {
    var nextVal = cookedTemplate[i++];
    if (nextVal === undefined) throw new $TypeError('Incorrect template');
    push(elements, toString(nextVal));
    if (i === literalSegments) return join(elements, '');
    if (i < argumentsLength) push(elements, toString(arguments[i]));
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-multibyte.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-pad-webkit-bug.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-user-agent.js");

module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-pad.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var $repeat = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-repeat.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-parse.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// adapted from https://github.com/jridgewell/string-dedent
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

var fromCharCode = String.fromCharCode;
var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var ZERO_CODE = 48;
var NINE_CODE = 57;
var LOWER_A_CODE = 97;
var LOWER_F_CODE = 102;
var UPPER_A_CODE = 65;
var UPPER_F_CODE = 70;

var isDigit = function (str, index) {
  var c = charCodeAt(str, index);
  return c >= ZERO_CODE && c <= NINE_CODE;
};

var parseHex = function (str, index, end) {
  if (end >= str.length) return -1;
  var n = 0;
  for (; index < end; index++) {
    var c = hexToInt(charCodeAt(str, index));
    if (c === -1) return -1;
    n = n * 16 + c;
  }
  return n;
};

var hexToInt = function (c) {
  if (c >= ZERO_CODE && c <= NINE_CODE) return c - ZERO_CODE;
  if (c >= LOWER_A_CODE && c <= LOWER_F_CODE) return c - LOWER_A_CODE + 10;
  if (c >= UPPER_A_CODE && c <= UPPER_F_CODE) return c - UPPER_A_CODE + 10;
  return -1;
};

module.exports = function (raw) {
  var out = '';
  var start = 0;
  // We need to find every backslash escape sequence, and cook the escape into a real char.
  var i = 0;
  var n;
  while ((i = stringIndexOf(raw, '\\', i)) > -1) {
    out += stringSlice(raw, start, i);
    // If the backslash is the last char of the string, then it was an invalid sequence.
    // This can't actually happen in a tagged template literal, but could happen if you manually
    // invoked the tag with an array.
    if (++i === raw.length) return;
    var next = charAt(raw, i++);
    switch (next) {
      // Escaped control codes need to be individually processed.
      case 'b':
        out += '\b';
        break;
      case 't':
        out += '\t';
        break;
      case 'n':
        out += '\n';
        break;
      case 'v':
        out += '\v';
        break;
      case 'f':
        out += '\f';
        break;
      case 'r':
        out += '\r';
        break;
      // Escaped line terminators just skip the char.
      case '\r':
        // Treat `\r\n` as a single terminator.
        if (i < raw.length && charAt(raw, i) === '\n') ++i;
      // break omitted
      case '\n':
      case '\u2028':
      case '\u2029':
        break;
      // `\0` is a null control char, but `\0` followed by another digit is an illegal octal escape.
      case '0':
        if (isDigit(raw, i)) return;
        out += '\0';
        break;
      // Hex escapes must contain 2 hex chars.
      case 'x':
        n = parseHex(raw, i, i + 2);
        if (n === -1) return;
        i += 2;
        out += fromCharCode(n);
        break;
      // Unicode escapes contain either 4 chars, or an unlimited number between `{` and `}`.
      // The hex value must not overflow 0x10FFFF.
      case 'u':
        if (i < raw.length && charAt(raw, i) === '{') {
          var end = stringIndexOf(raw, '}', ++i);
          if (end === -1) return;
          n = parseHex(raw, i, end);
          i = end + 1;
        } else {
          n = parseHex(raw, i, i + 4);
          i += 4;
        }
        if (n === -1 || n > 0x10FFFF) return;
        out += fromCodePoint(n);
        break;
      default:
        if (isDigit(next, 0)) return;
        out += next;
    }
    start = i;
  }
  return out + stringSlice(raw, start);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-punycode-to-ascii.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var $RangeError = RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.
        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push(output, value);
        counter--;
      }
    } else {
      push(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor(delta / baseMinusTMin);
    k += base;
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw new $RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw new $RangeError(OVERFLOW_ERROR);
      }
      if (currentValue === n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
          k += base;
        }

        push(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join(output, '');
};

module.exports = function (input) {
  var encoded = [];
  var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join(encoded, '.');
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-repeat.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-end.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var $trimEnd = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim.js")/* .end */.end);
var forcedStringTrimMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
module.exports = forcedStringTrimMethod('trimEnd') ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-forced.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-name.js")/* .PROPER */.PROPER);
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-start.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var $trimStart = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim.js")/* .start */.start);
var forcedStringTrimMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
module.exports = forcedStringTrimMethod('trimStart') ? function trimStart() {
  return $trimStart(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/structured-clone-proper-transfer.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var V8 = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js");
var ENVIRONMENT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment.js");

var structuredClone = globalThis.structuredClone;

module.exports = !!structuredClone && !fails(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((ENVIRONMENT === 'DENO' && V8 > 92) || (ENVIRONMENT === 'NODE' && V8 > 94) || (ENVIRONMENT === 'BROWSER' && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-constructor-detection.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-is-registered.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

var Symbol = getBuiltIn('Symbol');
var keyFor = Symbol.keyFor;
var thisSymbolValue = uncurryThis(Symbol.prototype.valueOf);

// `Symbol.isRegisteredSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
module.exports = Symbol.isRegisteredSymbol || function isRegisteredSymbol(value) {
  try {
    return keyFor(thisSymbolValue(value)) !== undefined;
  } catch (error) {
    return false;
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-is-well-known.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var isSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-symbol.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var Symbol = getBuiltIn('Symbol');
var $isWellKnownSymbol = Symbol.isWellKnownSymbol;
var getOwnPropertyNames = getBuiltIn('Object', 'getOwnPropertyNames');
var thisSymbolValue = uncurryThis(Symbol.prototype.valueOf);
var WellKnownSymbolsStore = shared('wks');

for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
  // some old engines throws on access to some keys like `arguments` or `caller`
  try {
    var symbolKey = symbolKeys[i];
    if (isSymbol(Symbol[symbolKey])) wellKnownSymbol(symbolKey);
  } catch (error) { /* empty */ }
}

// `Symbol.isWellKnownSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
module.exports = function isWellKnownSymbol(value) {
  if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
  try {
    var symbol = thisSymbolValue(value);
    for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
      // eslint-disable-next-line eqeqeq -- polyfilled symbols case
      if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
    }
  } catch (error) { /* empty */ }
  return false;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/task.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var html = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/html.js");
var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");
var createElement = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/document-create-element.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var IS_IOS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ios.js");
var IS_NODE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-node.js");

var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    globalThis.addEventListener &&
    isCallable(globalThis.postMessage) &&
    !globalThis.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/this-number-value.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-absolute-index.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-big-int.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-primitive.js");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-index.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-offset.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-positive-integer.js");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError('Wrong offset');
  return offset;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-positive-integer.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw new $RangeError("The argument can't be less than 0");
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-primitive.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isIterable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-iterable.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");

var Set = getBuiltIn('Set');

var isSetLike = function (it) {
  return isObject(it)
    && typeof it.size == 'number'
    && isCallable(it.has)
    && isCallable(it.keys);
};

// fallback old -> new set methods proposal arguments
module.exports = function (it) {
  if (isSetLike(it)) return it;
  return isIterable(it) ? new Set(it) : it;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string-tag-support.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/to-uint8-clamped.js": (function (module) {

var round = Math.round;

module.exports = function (it) {
  var value = round(it);
  return value < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/try-to-string.js": (function (module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayBufferModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var isIntegralNumber = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-integral-number.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-index.js");
var toOffset = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-offset.js");
var toUint8Clamped = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-uint8-clamped.js");
var toPropertyKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-symbol.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names.js")/* .f */.f);
var typedArrayFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-from.js");
var forEach = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js")/* .forEach */.forEach);
var setSpecies = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-species.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var inheritIfRequired = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inherit-if-required.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var RangeError = globalThis.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var addGetter = function (it, key) {
  defineBuiltInAccessor(it, key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject(descriptor)
    && hasOwn(descriptor, 'value')
    && !hasOwn(descriptor, 'get')
    && !hasOwn(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = globalThis[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw new RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw new RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw new RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return arrayFromConstructorAndList(TypedArrayConstructor, data);
        } else {
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return arrayFromConstructorAndList(TypedArrayConstructor, data);
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructors-require-wrappers.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/check-correctness-of-iteration.js");
var NATIVE_ARRAY_BUFFER_VIEWS = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js")/* .NATIVE_ARRAY_BUFFER_VIEWS */.NATIVE_ARRAY_BUFFER_VIEWS);

var ArrayBuffer = globalThis.ArrayBuffer;
var Int8Array = globalThis.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-from-same-type-and-list.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");
var getTypedArrayConstructor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js")/* .getTypedArrayConstructor */.getTypedArrayConstructor);

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(getTypedArrayConstructor(instance), list);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-from.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-constructor.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var getIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");
var isArrayIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array-iterator-method.js");
var isBigIntArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-big-int-array.js");
var aTypedArrayConstructor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js")/* .aTypedArrayConstructor */.aTypedArrayConstructor);
var toBigInt = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-big-int.js");

module.exports = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike(O);
  result = new (aTypedArrayConstructor(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt(value) : +value;
  }
  return result;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/uid.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/uint8-from-base64.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var anObjectOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object-or-undefined.js");
var aString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-string.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var base64Map = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/base64-map.js");
var getAlphabetOption = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-alphabet-option.js");
var notDetached = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-not-detached.js");

var base64Alphabet = base64Map.c2i;
var base64UrlAlphabet = base64Map.c2iUrl;

var SyntaxError = globalThis.SyntaxError;
var TypeError = globalThis.TypeError;
var at = uncurryThis(''.charAt);

var skipAsciiWhitespace = function (string, index) {
  var length = string.length;
  for (;index < length; index++) {
    var chr = at(string, index);
    if (chr !== ' ' && chr !== '\t' && chr !== '\n' && chr !== '\f' && chr !== '\r') break;
  } return index;
};

var decodeBase64Chunk = function (chunk, alphabet, throwOnExtraBits) {
  var chunkLength = chunk.length;

  if (chunkLength < 4) {
    chunk += chunkLength === 2 ? 'AA' : 'A';
  }

  var triplet = (alphabet[at(chunk, 0)] << 18)
    + (alphabet[at(chunk, 1)] << 12)
    + (alphabet[at(chunk, 2)] << 6)
    + alphabet[at(chunk, 3)];

  var chunkBytes = [
    (triplet >> 16) & 255,
    (triplet >> 8) & 255,
    triplet & 255
  ];

  if (chunkLength === 2) {
    if (throwOnExtraBits && chunkBytes[1] !== 0) {
      throw new SyntaxError('Extra bits');
    }
    return [chunkBytes[0]];
  }

  if (chunkLength === 3) {
    if (throwOnExtraBits && chunkBytes[2] !== 0) {
      throw new SyntaxError('Extra bits');
    }
    return [chunkBytes[0], chunkBytes[1]];
  }

  return chunkBytes;
};

var writeBytes = function (bytes, elements, written) {
  var elementsLength = elements.length;
  for (var index = 0; index < elementsLength; index++) {
    bytes[written + index] = elements[index];
  }
  return written + elementsLength;
};

/* eslint-disable max-statements, max-depth -- TODO */
module.exports = function (string, options, into, maxLength) {
  aString(string);
  anObjectOrUndefined(options);
  var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
  var lastChunkHandling = options ? options.lastChunkHandling : undefined;

  if (lastChunkHandling === undefined) lastChunkHandling = 'loose';

  if (lastChunkHandling !== 'loose' && lastChunkHandling !== 'strict' && lastChunkHandling !== 'stop-before-partial') {
    throw new TypeError('Incorrect `lastChunkHandling` option');
  }

  if (into) notDetached(into.buffer);

  var bytes = into || [];
  var written = 0;
  var read = 0;
  var chunk = '';
  var index = 0;

  if (maxLength) while (true) {
    index = skipAsciiWhitespace(string, index);
    if (index === string.length) {
      if (chunk.length > 0) {
        if (lastChunkHandling === 'stop-before-partial') {
          break;
        }
        if (lastChunkHandling === 'loose') {
          if (chunk.length === 1) {
            throw new SyntaxError('Malformed padding: exactly one additional character');
          }
          written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
        } else {
          throw new SyntaxError('Missing padding');
        }
      }
      read = string.length;
      break;
    }
    var chr = at(string, index);
    ++index;
    if (chr === '=') {
      if (chunk.length < 2) {
        throw new SyntaxError('Padding is too early');
      }
      index = skipAsciiWhitespace(string, index);
      if (chunk.length === 2) {
        if (index === string.length) {
          if (lastChunkHandling === 'stop-before-partial') {
            break;
          }
          throw new SyntaxError('Malformed padding: only one =');
        }
        if (at(string, index) === '=') {
          ++index;
          index = skipAsciiWhitespace(string, index);
        }
      }
      if (index < string.length) {
        throw new SyntaxError('Unexpected character after padding');
      }
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === 'strict'), written);
      read = string.length;
      break;
    }
    if (!hasOwn(alphabet, chr)) {
      throw new SyntaxError('Unexpected character');
    }
    var remainingBytes = maxLength - written;
    if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) {
      // special case: we can fit exactly the number of bytes currently represented by chunk, so we were just checking for `=`
      break;
    }

    chunk += chr;
    if (chunk.length === 4) {
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
      chunk = '';
      read = index;
      if (written === maxLength) {
        break;
      }
    }
  }

  return { bytes: bytes, read: read, written: written };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/uint8-from-hex.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

var Uint8Array = globalThis.Uint8Array;
var SyntaxError = globalThis.SyntaxError;
var parseInt = globalThis.parseInt;
var min = Math.min;
var NOT_HEX = /[^\da-f]/i;
var exec = uncurryThis(NOT_HEX.exec);
var stringSlice = uncurryThis(''.slice);

module.exports = function (string, into) {
  var stringLength = string.length;
  if (stringLength % 2 !== 0) throw new SyntaxError('String should be an even number of characters');
  var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
  var bytes = into || new Uint8Array(maxLength);
  var read = 0;
  var written = 0;
  while (written < maxLength) {
    var hexits = stringSlice(string, read, read += 2);
    if (exec(NOT_HEX, hexits)) throw new SyntaxError('String should only contain hex characters');
    bytes[written++] = parseInt(hexits, 16);
  }
  return { bytes: bytes, read: read };
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/url-constructor-detection.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'https://a');
  var params = url.searchParams;
  var params2 = new URLSearchParams('a=1&a=2&b=3');
  var result = '';
  url.pathname = 'c%20d';
  params.forEach(function (value, key) {
    params['delete']('b');
    result += key + value;
  });
  params2['delete']('a', 2);
  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  params2['delete']('b', undefined);
  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
    || (!params.size && (IS_PURE || !DESCRIPTORS))
    || !params.sort
    || url.href !== 'https://a/c%20d?a=1&c=3'
    || params.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !params[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('https://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('https://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('https://x', undefined).host !== 'x';
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/use-symbol-as-uid.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/v8-prototype-define-bug.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js": (function (module) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-basic-detection.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-helpers.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-weak-map -- safe
var WeakMapPrototype = WeakMap.prototype;

module.exports = {
  // eslint-disable-next-line es/no-weak-map -- safe
  WeakMap: WeakMap,
  set: uncurryThis(WeakMapPrototype.set),
  get: uncurryThis(WeakMapPrototype.get),
  has: uncurryThis(WeakMapPrototype.has),
  remove: uncurryThis(WeakMapPrototype['delete'])
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-set-helpers.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-weak-set -- safe
var WeakSetPrototype = WeakSet.prototype;

module.exports = {
  // eslint-disable-next-line es/no-weak-set -- safe
  WeakSet: WeakSet,
  add: uncurryThis(WeakSetPrototype.add),
  has: uncurryThis(WeakSetPrototype.has),
  remove: uncurryThis(WeakSetPrototype['delete'])
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/path.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var wrappedWellKnownSymbolModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-wrapped.js": (function (__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var shared = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/whitespaces.js": (function (module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


}),
"./node_modules/@rsbuild/core/node_modules/core-js/internals/wrap-error-constructor-with-cause.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var copyConstructorProperties = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/copy-constructor-properties.js");
var proxyAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/proxy-accessor.js");
var inheritIfRequired = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inherit-if-required.js");
var normalizeStringArgument = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/normalize-string-argument.js");
var installErrorCause = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/install-error-cause.js");
var installErrorStack = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-install.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.aggregate-error.cause.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var wrapErrorConstructorWithCause = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/wrap-error-constructor-with-cause.js");

var AGGREGATE_ERROR = 'AggregateError';
var $AggregateError = getBuiltIn(AGGREGATE_ERROR);

var FORCED = !fails(function () {
  return $AggregateError([1]).errors[0] !== 1;
}) && fails(function () {
  return $AggregateError([1], AGGREGATE_ERROR, { cause: 7 }).cause !== 7;
});

// https://tc39.es/ecma262/#sec-aggregate-error
$({ global: true, constructor: true, arity: 2, forced: FORCED }, {
  AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function (init) {
    // eslint-disable-next-line no-unused-vars -- required for functions `.length`
    return function AggregateError(errors, message) { return apply(init, this, arguments); };
  }, FORCED, true)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.aggregate-error.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var copyConstructorProperties = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/copy-constructor-properties.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var installErrorCause = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/install-error-cause.js");
var installErrorStack = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-install.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var normalizeStringArgument = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/normalize-string-argument.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  installErrorStack(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2) installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.aggregate-error.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.aggregate-error.constructor.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array-buffer.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var arrayBufferModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer.js");
var setSpecies = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-species.js");

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = globalThis[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$({ global: true, constructor: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array-buffer.detached.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var isDetached = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-is-detached.js");

var ArrayBufferPrototype = ArrayBuffer.prototype;

// `ArrayBuffer.prototype.detached` getter
// https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.detached
if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array-buffer.slice.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var ArrayBufferModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var DataViewPrototype = DataView.prototype;
var nativeArrayBufferSlice = uncurryThis(ArrayBuffer.prototype.slice);
var getUint8 = uncurryThis(DataViewPrototype.getUint8);
var setUint8 = uncurryThis(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new ArrayBuffer(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $transfer = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-transfer.js");

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array-buffer.transfer.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $transfer = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-transfer.js");

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.at.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.at` method
// https://tc39.es/ecma262/#sec-array.prototype.at
$({ target: 'Array', proto: true }, {
  at: function at(index) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : O[k];
  }
});

addToUnscopables('at');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.find-last-index.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $findLastIndex = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration-from-last.js")/* .findLastIndex */.findLastIndex);
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findlastindex
$({ target: 'Array', proto: true }, {
  findLastIndex: function findLastIndex(callbackfn /* , that = undefined */) {
    return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('findLastIndex');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.find-last.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $findLast = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration-from-last.js")/* .findLast */.findLast);
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.findLast` method
// https://tc39.es/ecma262/#sec-array.prototype.findlast
$({ target: 'Array', proto: true }, {
  findLast: function findLast(callbackfn /* , that = undefined */) {
    return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('findLast');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.flat-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/flatten-into-array.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.flat.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/flatten-into-array.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var arraySpeciesCreate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.includes.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-includes.js")/* .includes */.includes);
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.iterator.js": (function (module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var defineIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.push.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.reduce-right.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $reduceRight = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-reduce.js")/* .right */.right);
var arrayMethodIsStrict = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js");
var IS_NODE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-node.js");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduceRight');

// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.reduce.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-reduce.js")/* .left */.left);
var arrayMethodIsStrict = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js");
var IS_NODE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-node.js");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.reverse.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var isArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js");

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.sort.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var deletePropertyOrThrow = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/delete-property-or-throw.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var internalSort = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-sort.js");
var arrayMethodIsStrict = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-method-is-strict.js");
var FF = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-ff-version.js");
var IE_OR_EDGE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ie-or-edge.js");
var V8 = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js");
var WEBKIT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-webkit-version.js");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.to-reversed.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var arrayToReversed = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-to-reversed.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

var $Array = Array;

// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
$({ target: 'Array', proto: true }, {
  toReversed: function toReversed() {
    return arrayToReversed(toIndexedObject(this), $Array);
  }
});

addToUnscopables('toReversed');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.to-sorted.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");
var getBuiltInPrototypeMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in-prototype-method.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

var $Array = Array;
var sort = uncurryThis(getBuiltInPrototypeMethod('Array', 'sort'));

// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
$({ target: 'Array', proto: true }, {
  toSorted: function toSorted(compareFn) {
    if (compareFn !== undefined) aCallable(compareFn);
    var O = toIndexedObject(this);
    var A = arrayFromConstructorAndList($Array, O);
    return sort(A, compareFn);
  }
});

addToUnscopables('toSorted');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.to-spliced.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");
var doesNotExceedSafeInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-absolute-index.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");

var $Array = Array;
var max = Math.max;
var min = Math.min;

// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
$({ target: 'Array', proto: true }, {
  toSpliced: function toSpliced(start, deleteCount /* , ...items */) {
    var O = toIndexedObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var k = 0;
    var insertCount, actualDeleteCount, newLen, A;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    newLen = doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = $Array(newLen);

    for (; k < actualStart; k++) A[k] = O[k];
    for (; k < actualStart + insertCount; k++) A[k] = arguments[k - actualStart + 2];
    for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

    return A;
  }
});

addToUnscopables('toSpliced');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.unscopables.flat-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.unscopables.flat.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.unshift.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-set-length.js");
var deletePropertyOrThrow = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/delete-property-or-throw.js");
var doesNotExceedSafeInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/does-not-exceed-safe-integer.js");

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength(O, len + argCount);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.with.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var arrayWith = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-with.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");

var $Array = Array;

// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
$({ target: 'Array', proto: true }, {
  'with': function (index, value) {
    return arrayWith(toIndexedObject(this), $Array, index, value);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.error.cause.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var wrapErrorConstructorWithCause = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/wrap-error-constructor-with-cause.js");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = globalThis[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.global-this.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: globalThis.globalThis !== globalThis }, {
  globalThis: globalThis
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var createProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var IteratorPrototype = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators-core.js")/* .IteratorPrototype */.IteratorPrototype);
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.drop.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var notANaN = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-nan.js");
var toPositiveInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-positive-integer.js");
var createIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-proxy.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var next = this.next;
  var result, done;
  while (this.remaining) {
    this.remaining--;
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
  }
  result = anObject(call(next, iterator));
  done = this.done = !!result.done;
  if (!done) return result.value;
});

// `Iterator.prototype.drop` method
// https://tc39.es/ecma262/#sec-iterator.prototype.drop
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  drop: function drop(limit) {
    anObject(this);
    var remaining = toPositiveInteger(notANaN(+limit));
    return new IteratorProxy(getIteratorDirect(this), {
      remaining: remaining
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.every.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");

// `Iterator.prototype.every` method
// https://tc39.es/ecma262/#sec-iterator.prototype.every
$({ target: 'Iterator', proto: true, real: true }, {
  every: function every(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return !iterate(record, function (value, stop) {
      if (!predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.filter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var createIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-proxy.js");
var callWithSafeIterationClosing = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.find.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");

// `Iterator.prototype.find` method
// https://tc39.es/ecma262/#sec-iterator.prototype.find
$({ target: 'Iterator', proto: true, real: true }, {
  find: function find(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.flat-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var getIteratorFlattenable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-flattenable.js");
var createIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-proxy.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var mapper = this.mapper;
  var result, inner;

  while (true) {
    if (inner = this.inner) try {
      result = anObject(call(inner.next, inner.iterator));
      if (!result.done) return result.value;
      this.inner = null;
    } catch (error) { iteratorClose(iterator, 'throw', error); }

    result = anObject(call(this.next, iterator));

    if (this.done = !!result.done) return;

    try {
      this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
    } catch (error) { iteratorClose(iterator, 'throw', error); }
  }
});

// `Iterator.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-iterator.prototype.flatmap
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  flatMap: function flatMap(mapper) {
    anObject(this);
    aCallable(mapper);
    return new IteratorProxy(getIteratorDirect(this), {
      mapper: mapper,
      inner: null
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.for-each.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var IteratorPrototype = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators-core.js")/* .IteratorPrototype */.IteratorPrototype);
var createIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-proxy.js");
var getIteratorFlattenable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-flattenable.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var IteratorProxy = createIteratorProxy(function () {
  return call(this.next, this.iterator);
}, true);

// `Iterator.from` method
// https://tc39.es/ecma262/#sec-iterator.from
$({ target: 'Iterator', stat: true, forced: IS_PURE }, {
  from: function from(O) {
    var iteratorRecord = getIteratorFlattenable(typeof O == 'string' ? toObject(O) : O, true);
    return isPrototypeOf(IteratorPrototype, iteratorRecord.iterator)
      ? iteratorRecord.iterator
      : new IteratorProxy(iteratorRecord);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var map = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-map.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  map: map
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.reduce.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");

var $TypeError = TypeError;

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    aCallable(reducer);
    var record = getIteratorDirect(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.some.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");

// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
$({ target: 'Iterator', proto: true, real: true }, {
  some: function some(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.take.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var notANaN = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-nan.js");
var toPositiveInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-positive-integer.js");
var createIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-proxy.js");
var iteratorClose = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-close.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return iteratorClose(iterator, 'normal', undefined);
  }
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return result.value;
});

// `Iterator.prototype.take` method
// https://tc39.es/ecma262/#sec-iterator.prototype.take
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  take: function take(limit) {
    anObject(this);
    var remaining = toPositiveInteger(notANaN(+limit));
    return new IteratorProxy(getIteratorDirect(this), {
      remaining: remaining
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.to-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");

var push = [].push;

// `Iterator.prototype.toArray` method
// https://tc39.es/ecma262/#sec-iterator.prototype.toarray
$({ target: 'Iterator', proto: true, real: true }, {
  toArray: function toArray() {
    var result = [];
    iterate(getIteratorDirect(anObject(this)), push, { that: result, IS_RECORD: true });
    return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.json.stringify.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-symbol.js");
var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");
var getReplacerFunction = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-json-replacer-function.js");
var NATIVE_SYMBOL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-constructor-detection.js");

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.map.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var collection = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.map.group-by.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var Map = MapHelpers.Map;
var has = MapHelpers.has;
var get = MapHelpers.get;
var set = MapHelpers.set;
var push = uncurryThis([].push);

var DOES_NOT_WORK_WITH_PRIMITIVES = IS_PURE || fails(function () {
  return Map.groupBy('ab', function (it) {
    return it;
  }).get('a').length !== 1;
});

// `Map.groupBy` method
// https://tc39.es/ecma262/#sec-map.groupby
$({ target: 'Map', stat: true, forced: IS_PURE || DOES_NOT_WORK_WITH_PRIMITIVES }, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible(items);
    aCallable(callbackfn);
    var map = new Map();
    var k = 0;
    iterate(items, function (value) {
      var key = callbackfn(value, k++);
      if (!has(map, key)) set(map, key, [value]);
      else push(get(map, key), value);
    });
    return map;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.map.constructor.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.math.acosh.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var log1p = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-log1p.js");

// eslint-disable-next-line es/no-math-acosh -- required for testing
var $acosh = Math.acosh;
var log = Math.log;
var sqrt = Math.sqrt;
var LN2 = Math.LN2;

var FORCED = !$acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  || Math.floor($acosh(Number.MAX_VALUE)) !== 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  || $acosh(Infinity) !== Infinity;

// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
$({ target: 'Math', stat: true, forced: FORCED }, {
  acosh: function acosh(x) {
    var n = +x;
    return n < 1 ? NaN : n > 94906265.62425156
      ? log(n) + LN2
      : log1p(n - 1 + sqrt(n - 1) * sqrt(n + 1));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.math.hypot.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// eslint-disable-next-line es/no-math-hypot -- required for testing
var $hypot = Math.hypot;
var abs = Math.abs;
var sqrt = Math.sqrt;

// Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546
var FORCED = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
$({ target: 'Math', stat: true, arity: 2, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  hypot: function hypot(value1, value2) {
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * sqrt(sum);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.number.parse-float.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var parseFloat = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/number-parse-float.js");

// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseFloat !== parseFloat }, {
  parseFloat: parseFloat
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.number.parse-int.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var parseInt = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/number-parse-int.js");

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt !== parseInt }, {
  parseInt: parseInt
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.number.to-exponential.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var thisNumberValue = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/this-number-value.js");
var $repeat = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-repeat.js");
var log10 = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-log10.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var $RangeError = RangeError;
var $String = String;
var $isFinite = isFinite;
var abs = Math.abs;
var floor = Math.floor;
var pow = Math.pow;
var round = Math.round;
var nativeToExponential = uncurryThis(1.0.toExponential);
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);

// Edge 17-
var ROUNDS_PROPERLY = nativeToExponential(-6.9e-11, 4) === '-6.9000e-11'
  // IE11- && Edge 14-
  && nativeToExponential(1.255, 2) === '1.25e+0'
  // FF86-, V8 ~ Chrome 49-50
  && nativeToExponential(12345, 3) === '1.235e+4'
  // FF86-, V8 ~ Chrome 49-50
  && nativeToExponential(25, 0) === '3e+1';

// IE8-
var throwsOnInfinityFraction = function () {
  return fails(function () {
    nativeToExponential(1, Infinity);
  }) && fails(function () {
    nativeToExponential(1, -Infinity);
  });
};

// Safari <11 && FF <50
var properNonFiniteThisCheck = function () {
  return !fails(function () {
    nativeToExponential(Infinity, Infinity);
    nativeToExponential(NaN, Infinity);
  });
};

var FORCED = !ROUNDS_PROPERLY || !throwsOnInfinityFraction() || !properNonFiniteThisCheck();

// `Number.prototype.toExponential` method
// https://tc39.es/ecma262/#sec-number.prototype.toexponential
$({ target: 'Number', proto: true, forced: FORCED }, {
  toExponential: function toExponential(fractionDigits) {
    var x = thisNumberValue(this);
    if (fractionDigits === undefined) return nativeToExponential(x);
    var f = toIntegerOrInfinity(fractionDigits);
    if (!$isFinite(x)) return String(x);
    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (f < 0 || f > 20) throw new $RangeError('Incorrect fraction digits');
    if (ROUNDS_PROPERLY) return nativeToExponential(x, f);
    var s = '';
    var m, e, c, d;
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x === 0) {
      e = 0;
      m = repeat('0', f + 1);
    } else {
      // this block is based on https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08
      // TODO: improve accuracy with big fraction digits
      var l = log10(x);
      e = floor(l);
      var w = pow(10, e - f);
      var n = round(x / w);
      if (2 * x >= (2 * n + 1) * w) {
        n += 1;
      }
      if (n >= pow(10, f + 1)) {
        n /= 10;
        e += 1;
      }
      m = $String(n);
    }
    if (f !== 0) {
      m = stringSlice(m, 0, 1) + '.' + stringSlice(m, 1);
    }
    if (e === 0) {
      c = '+';
      d = '0';
    } else {
      c = e > 0 ? '+' : '-';
      d = $String(abs(e));
    }
    m += 'e' + c + d;
    return s + m;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.number.to-fixed.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var thisNumberValue = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/this-number-value.js");
var $repeat = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw new $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number !== number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.assign.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var assign = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.define-getter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-prototype-accessors-forced.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");

// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule.f(toObject(this), P, { get: aCallable(getter), enumerable: true, configurable: true });
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.define-setter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-prototype-accessors-forced.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");

// `Object.prototype.__defineSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineSetter__: function __defineSetter__(P, setter) {
      definePropertyModule.f(toObject(this), P, { set: aCallable(setter), enumerable: true, configurable: true });
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.entries.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $entries = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-to-array.js")/* .entries */.entries);

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.from-entries.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var createProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js");

// `Object.fromEntries` method
// https://tc39.es/ecma262/#sec-object.fromentries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.get-own-property-descriptors.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.group-by.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toPropertyKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-groupby -- testing
var nativeGroupBy = Object.groupBy;
var create = getBuiltIn('Object', 'create');
var push = uncurryThis([].push);

var DOES_NOT_WORK_WITH_PRIMITIVES = !nativeGroupBy || fails(function () {
  return nativeGroupBy('ab', function (it) {
    return it;
  }).a.length !== 1;
});

// `Object.groupBy` method
// https://tc39.es/ecma262/#sec-object.groupby
$({ target: 'Object', stat: true, forced: DOES_NOT_WORK_WITH_PRIMITIVES }, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible(items);
    aCallable(callbackfn);
    var obj = create(null);
    var k = 0;
    iterate(items, function (value) {
      var key = toPropertyKey(callbackfn(value, k++));
      // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
      // but since it's a `null` prototype object, we can safely use `in`
      if (key in obj) push(obj[key], value);
      else obj[key] = [value];
    });
    return obj;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.has-own.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");

// `Object.hasOwn` method
// https://tc39.es/ecma262/#sec-object.hasown
$({ target: 'Object', stat: true }, {
  hasOwn: hasOwn
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.lookup-getter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-prototype-accessors-forced.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var toPropertyKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js")/* .f */.f);

// `Object.prototype.__lookupGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this);
      var key = toPropertyKey(P);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
      } while (O = getPrototypeOf(O));
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.lookup-setter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-prototype-accessors-forced.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var toPropertyKey = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-property-key.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js")/* .f */.f);

// `Object.prototype.__lookupSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = toObject(this);
      var key = toPropertyKey(P);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
      } while (O = getPrototypeOf(O));
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.object.values.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $values = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-to-array.js")/* .values */.values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.parse-float.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat !== $parseFloat }, {
  parseFloat: $parseFloat
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.parse-int.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt !== $parseInt }, {
  parseInt: $parseInt
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.all-settled.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.any.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.catch.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-constructor-detection.js")/* .CONSTRUCTOR */.CONSTRUCTOR);
var NativePromiseConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-native-constructor.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var IS_NODE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-node.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-species.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var speciesConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/species-constructor.js");
var task = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/task.js")/* .set */.set);
var microtask = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/microtask.js");
var hostReportErrors = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/host-report-errors.js");
var perform = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js");
var Queue = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/queue.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var NativePromiseConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-native-constructor.js");
var PromiseConstructorDetection = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-constructor-detection.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = globalThis.TypeError;
var document = globalThis.document;
var process = globalThis.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

// `Promise` constructor
// https://tc39.es/ecma262/#sec-promise-executor
$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.finally.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var NativePromiseConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-native-constructor.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var speciesConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-resolve.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.constructor.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.all.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.catch.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.race.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.reject.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.resolve.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.race.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.reject.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-constructor-detection.js")/* .CONSTRUCTOR */.CONSTRUCTOR);

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.resolve.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var NativePromiseConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-native-constructor.js");
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-constructor-detection.js")/* .CONSTRUCTOR */.CONSTRUCTOR);
var promiseResolve = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/promise-resolve.js");

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.try.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var slice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var perform = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/perform.js");

var Promise = globalThis.Promise;

var ACCEPT_ARGUMENTS = false;
// Avoiding the use of polyfills of the previous iteration of this proposal
// that does not accept arguments of the callback
var FORCED = !Promise || !Promise['try'] || perform(function () {
  Promise['try'](function (argument) {
    ACCEPT_ARGUMENTS = argument === 8;
  }, 8);
}).error || !ACCEPT_ARGUMENTS;

// `Promise.try` method
// https://tc39.es/ecma262/#sec-promise.try
$({ target: 'Promise', stat: true, forced: FORCED }, {
  'try': function (callbackfn /* , ...args */) {
    var args = arguments.length > 1 ? slice(arguments, 1) : [];
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(function () {
      return apply(aCallable(callbackfn), undefined, args);
    });
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.with-resolvers.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var newPromiseCapabilityModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/new-promise-capability.js");

// `Promise.withResolvers` method
// https://tc39.es/ecma262/#sec-promise.withResolvers
$({ target: 'Promise', stat: true }, {
  withResolvers: function withResolvers() {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    return {
      promise: promiseCapability.promise,
      resolve: promiseCapability.resolve,
      reject: promiseCapability.reject
    };
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.reflect.set.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var isDataDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-data-descriptor.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var definePropertyModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");

// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype, setter;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (isDataDescriptor(ownDescriptor)) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
  } else {
    setter = ownDescriptor.set;
    if (setter === undefined) return false;
    call(setter, receiver, V);
  } return true;
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var Constructor = function () { /* empty */ };
  var object = definePropertyModule.f(new Constructor(), 'a', { configurable: true });
  // eslint-disable-next-line es/no-reflect -- required for testing
  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.reflect.to-string-tag.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(globalThis.Reflect, 'Reflect', true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inherit-if-required.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-names.js")/* .f */.f);
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var isRegExp = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var getRegExpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-get-flags.js");
var stickyHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-sticky-helpers.js");
var proxyAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/proxy-accessor.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var enforceInternalState = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js")/* .enforce */.enforce);
var setSpecies = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var UNSUPPORTED_DOT_ALL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-unsupported-ncg.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = globalThis.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = globalThis.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    // eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr += charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        result += chr;
        // ignore non-capturing groups
        if (stringSlice(string, index + 1, index + 3) === '?:') {
          continue;
        }
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(globalThis, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.dot-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var UNSUPPORTED_DOT_ALL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var getInternalState = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js")/* .get */.get);

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.exec.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var exec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.flags.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var regExpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-flags.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;
var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.test.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.exec.js");
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.regexp.to-string.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-name.js")/* .PROPER */.PROPER);
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var $toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var getRegExpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-get-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.set.difference.v2.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var difference = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-difference.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js");

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {
  difference: difference
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.set.intersection.v2.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var intersection = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-intersection.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js");

var INCORRECT = !setMethodAcceptSetLike('intersection') || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isDisjointFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-disjoint-from.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js");

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isDisjointFrom') }, {
  isDisjointFrom: isDisjointFrom
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.set.is-subset-of.v2.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isSubsetOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-subset-of.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js");

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSubsetOf') }, {
  isSubsetOf: isSubsetOf
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.set.is-superset-of.v2.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isSupersetOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-superset-of.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js");

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSupersetOf') }, {
  isSupersetOf: isSupersetOf
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.set.symmetric-difference.v2.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var symmetricDifference = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-symmetric-difference.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js");

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.set.union.v2.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var union = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-union.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-method-accept-set-like.js");

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
  union: union
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.at-alternative.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var charAt = uncurryThis(''.charAt);

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-string-prototype-at -- safe
  return '𠮷'.at(-2) !== '\uD842';
});

// `String.prototype.at` method
// https://tc39.es/ecma262/#sec-string.prototype.at
$({ target: 'String', proto: true, forced: FORCED }, {
  at: function at(index) {
    var S = toString(requireObjectCoercible(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : charAt(S, k);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.ends-with.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js");
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js")/* .f */.f);
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return slice(that, end - search.length, end) === search;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.from-code-point.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-absolute-index.js");

var $RangeError = RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw new $RangeError(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join(elements, '');
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.includes.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.is-well-formed.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");

var charCodeAt = uncurryThis(''.charCodeAt);

// `String.prototype.isWellFormed` method
// https://tc39.es/ecma262/#sec-string.prototype.iswellformed
$({ target: 'String', proto: true }, {
  isWellFormed: function isWellFormed() {
    var S = toString(requireObjectCoercible(this));
    var length = S.length;
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) !== 0xD800) continue;
      // unpaired surrogate
      if (charCode >= 0xDC00 || ++i >= length || (charCodeAt(S, i) & 0xFC00) !== 0xDC00) return false;
    } return true;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.iterator.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var charAt = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-multibyte.js")/* .charAt */.charAt);
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.match-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-string-prototype-matchall -- safe */
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js");
var createIteratorConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof-raw.js");
var isRegExp = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-regexp.js");
var getRegExpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-get-flags.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var speciesConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec-abstract.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var MATCH_ALL = wellKnownSymbol('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;
var stringIndexOf = uncurryThis(''.indexOf);
var nativeMatchAll = uncurryThis(''.matchAll);

var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function () {
  nativeMatchAll('a', /./);
});

var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
  setInternalState(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: $global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState(this);
  if (state.done) return createIterResultObject(undefined, true);
  var R = state.regexp;
  var S = state.string;
  var match = regExpExec(R, S);
  if (match === null) {
    state.done = true;
    return createIterResultObject(undefined, true);
  }
  if (state.global) {
    if (toString(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
    return createIterResultObject(match, false);
  }
  state.done = true;
  return createIterResultObject(match, false);
});

var $matchAll = function (string) {
  var R = anObject(this);
  var S = toString(string);
  var C = speciesConstructor(R, RegExp);
  var flags = toString(getRegExpFlags(R));
  var matcher, $global, fullUnicode;
  matcher = new C(C === RegExp ? R.source : R, flags);
  $global = !!~stringIndexOf(flags, 'g');
  fullUnicode = !!~stringIndexOf(flags, 'u');
  matcher.lastIndex = toLength(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
};

// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
$({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible(this);
    var flags, S, matcher, rx;
    if (!isNullOrUndefined(regexp)) {
      if (isRegExp(regexp)) {
        flags = toString(requireObjectCoercible(getRegExpFlags(regexp)));
        if (!~stringIndexOf(flags, 'g')) throw new $TypeError('`.matchAll` does not allow non-global regexes');
      }
      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
      matcher = getMethod(regexp, MATCH_ALL);
      if (matcher === undefined && IS_PURE && classof(regexp) === 'RegExp') matcher = $matchAll;
      if (matcher) return call(matcher, regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
    S = toString(O);
    rx = new RegExp(regexp, 'g');
    return IS_PURE ? call($matchAll, rx, S) : rx[MATCH_ALL](S);
  }
});

IS_PURE || MATCH_ALL in RegExpPrototype || defineBuiltIn(RegExpPrototype, MATCH_ALL, $matchAll);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.match.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.pad-end.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $padEnd = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-pad.js")/* .end */.end);
var WEBKIT_BUG = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-pad-webkit-bug.js");

// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.pad-start.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $padStart = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-pad.js")/* .start */.start);
var WEBKIT_BUG = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-pad-webkit-bug.js");

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.replace-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var isRegExp = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var getRegExpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-get-flags.js");
var getSubstitution = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-substitution.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) return call(replacer, searchValue, O, replaceValue);
      if (IS_PURE && IS_REG_EXP) return replace(toString(O), searchValue, replaceValue);
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.replace.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.search.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.split.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-exec-abstract.js");
var stickyHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.starts-with.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js");
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js")/* .f */.f);
var toLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return stringSlice(that, index, index + search.length) === search;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.to-well-formed.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var $Array = Array;
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
// eslint-disable-next-line es/no-string-prototype-towellformed -- safe
var $toWellFormed = ''.toWellFormed;
var REPLACEMENT_CHARACTER = '\uFFFD';

// Safari bug
var TO_STRING_CONVERSION_BUG = $toWellFormed && fails(function () {
  return call($toWellFormed, 1) !== '1';
});

// `String.prototype.toWellFormed` method
// https://tc39.es/ecma262/#sec-string.prototype.towellformed
$({ target: 'String', proto: true, forced: TO_STRING_CONVERSION_BUG }, {
  toWellFormed: function toWellFormed() {
    var S = toString(requireObjectCoercible(this));
    if (TO_STRING_CONVERSION_BUG) return call($toWellFormed, S);
    var length = S.length;
    var result = $Array(length);
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) !== 0xD800) result[i] = charAt(S, i);
      // unpaired surrogate
      else if (charCode >= 0xDC00 || i + 1 >= length || (charCodeAt(S, i + 1) & 0xFC00) !== 0xDC00) result[i] = REPLACEMENT_CHARACTER;
      // surrogate pair
      else {
        result[i] = charAt(S, i);
        result[++i] = charAt(S, i);
      }
    } return join(result, '');
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.trim-end.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this line from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.trim-right.js");
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var trimEnd = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-end.js");

// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimEnd !== trimEnd }, {
  trimEnd: trimEnd
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.trim-left.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var trimStart = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-start.js");

// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimLeft !== trimStart }, {
  trimLeft: trimStart
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.trim-right.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var trimEnd = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-end.js");

// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimRight !== trimEnd }, {
  trimRight: trimEnd
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.trim-start.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this line from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.trim-left.js");
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var trimStart = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-start.js");

// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimStart !== trimStart }, {
  trimStart: trimStart
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.trim.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim.js")/* .trim */.trim);
var forcedStringTrimMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.symbol.async-iterator.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.symbol.description.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var copyConstructorProperties = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = globalThis.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      // eslint-disable-next-line sonarjs/inconsistent-function-call -- ok
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.symbol.match-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.symbol.match.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.symbol.replace.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.symbol.search.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.symbol.split.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.at.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.fill.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var $fill = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-fill.js");
var toBigInt = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-big-int.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var slice = uncurryThis(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray(this);
  var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.find-last-index.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var $findLastIndex = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration-from-last.js")/* .findLastIndex */.findLastIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.find-last.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var $findLast = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration-from-last.js")/* .findLast */.findLast);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.float32-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.float64-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");
var exportTypedArrayStaticMethod = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js")/* .exportTypedArrayStaticMethod */.exportTypedArrayStaticMethod);
var typedArrayFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-from.js");

// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
exportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.int16-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.int32-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.int8-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod;

// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
exportTypedArrayStaticMethod('of', function of(/* ...items */) {
  var index = 0;
  var length = arguments.length;
  var result = new (aTypedArrayConstructor(this))(length);
  while (length > index) result[index] = arguments[index++];
  return result;
}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.set.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var toOffset = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-offset.js");
var toIndexedObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var RangeError = globalThis.RangeError;
var Int8Array = globalThis.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw new RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.sort.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this-clause.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var internalSort = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-sort.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var FF = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-ff-version.js");
var IE_OR_EDGE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-is-ie-or-edge.js");
var V8 = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-v8-version.js");
var WEBKIT = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/environment-webkit-version.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = globalThis.Uint16Array;
var nativeSort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.to-locale-string.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");

var Int8Array = globalThis.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() !== new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.to-reversed.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var arrayToReversed = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-to-reversed.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.to-sorted.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.uint16-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.uint32-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.uint8-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.typed-array.with.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var arrayWith = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-with.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var isBigIntArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-big-int-array.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toBigInt = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-big-int.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.weak-map.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var FREEZING = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/freezing.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var InternalMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-metadata.js");
var collection = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-weak.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var enforceInternalState = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js")/* .enforce */.enforce);
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var NATIVE_WEAK_MAP = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-basic-detection.js");

var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;

var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);

// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function () {
  return FREEZING && fails(function () {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) if (IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
// Chakra Edge frozen keys fix
} else if (hasMSEdgeFreezingBug()) {
  defineBuiltIns(WeakMapPrototype, {
    set: function set(key, value) {
      var arrayIntegrityLevel;
      if (isArray(key)) {
        if (isFrozen(key)) arrayIntegrityLevel = freeze;
        else if (isSealed(key)) arrayIntegrityLevel = seal;
      }
      nativeSet(this, key, value);
      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
      return this;
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/es.weak-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.weak-map.constructor.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.filter-out.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $filterReject = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js")/* .filterReject */.filterReject);
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
$({ target: 'Array', proto: true, forced: true }, {
  filterOut: function filterOut(callbackfn /* , thisArg */) {
    return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('filterOut');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.filter-reject.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $filterReject = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js")/* .filterReject */.filterReject);
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
$({ target: 'Array', proto: true, forced: true }, {
  filterReject: function filterReject(callbackfn /* , thisArg */) {
    return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('filterReject');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.from-async.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var fromAsync = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-async.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var nativeFromAsync = Array.fromAsync;
// https://bugs.webkit.org/show_bug.cgi?id=271703
var INCORRECT_CONSTRUCTURING = !nativeFromAsync || fails(function () {
  var counter = 0;
  nativeFromAsync.call(function () {
    counter++;
    return [];
  }, { length: 0 });
  return counter !== 1;
});

// `Array.fromAsync` method
// https://github.com/tc39/proposal-array-from-async
$({ target: 'Array', stat: true, forced: INCORRECT_CONSTRUCTURING }, {
  fromAsync: fromAsync
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.group-by-to-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var arrayMethodIsStrict = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-method-is-strict.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");
var $groupToMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-group-to-map.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

// `Array.prototype.groupByToMap` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
$({ target: 'Array', proto: true, name: 'groupToMap', forced: IS_PURE || !arrayMethodIsStrict('groupByToMap') }, {
  groupByToMap: $groupToMap
});

addToUnscopables('groupByToMap');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.group-by.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $group = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-group.js");
var arrayMethodIsStrict = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-method-is-strict.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
$({ target: 'Array', proto: true, forced: !arrayMethodIsStrict('groupBy') }, {
  groupBy: function groupBy(callbackfn /* , thisArg */) {
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    return $group(this, callbackfn, thisArg);
  }
});

addToUnscopables('groupBy');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.group-to-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");
var $groupToMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-group-to-map.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
$({ target: 'Array', proto: true, forced: IS_PURE }, {
  groupToMap: $groupToMap
});

addToUnscopables('groupToMap');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.group.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $group = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-group.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.group` method
// https://github.com/tc39/proposal-array-grouping
$({ target: 'Array', proto: true }, {
  group: function group(callbackfn /* , thisArg */) {
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    return $group(this, callbackfn, thisArg);
  }
});

addToUnscopables('group');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.is-template-object.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js");

// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = Object.isFrozen;

var isFrozenStringArray = function (array, allowUndefined) {
  if (!isFrozen || !isArray(array) || !isFrozen(array)) return false;
  var index = 0;
  var length = array.length;
  var element;
  while (index < length) {
    element = array[index++];
    if (!(typeof element == 'string' || (allowUndefined && element === undefined))) {
      return false;
    }
  } return length !== 0;
};

// `Array.isTemplateObject` method
// https://github.com/tc39/proposal-array-is-template-object
$({ target: 'Array', stat: true, sham: true, forced: true }, {
  isTemplateObject: function isTemplateObject(value) {
    if (!isFrozenStringArray(value, true)) return false;
    var raw = value.raw;
    return raw.length === value.length && isFrozenStringArray(raw, false);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.last-index.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");

// `Array.prototype.lastIndex` getter
// https://github.com/keithamus/proposal-array-last
if (DESCRIPTORS) {
  defineBuiltInAccessor(Array.prototype, 'lastIndex', {
    configurable: true,
    get: function lastIndex() {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return len === 0 ? 0 : len - 1;
    }
  });

  addToUnscopables('lastIndex');
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.last-item.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");

// `Array.prototype.lastIndex` accessor
// https://github.com/keithamus/proposal-array-last
if (DESCRIPTORS) {
  defineBuiltInAccessor(Array.prototype, 'lastItem', {
    configurable: true,
    get: function lastItem() {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return len === 0 ? undefined : O[len - 1];
    },
    set: function lastItem(value) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return O[len === 0 ? 0 : len - 1] = value;
    }
  });

  addToUnscopables('lastItem');
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.array.unique-by.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var addToUnscopables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-to-unscopables.js");
var uniqueBy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-unique-by.js");

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
$({ target: 'Array', proto: true, forced: true }, {
  uniqueBy: uniqueBy
});

addToUnscopables('uniqueBy');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-disposable-stack.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-async-explicit-resource-management
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var addDisposableResource = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-disposable-resource.js");

var Promise = getBuiltIn('Promise');
var SuppressedError = getBuiltIn('SuppressedError');
var $ReferenceError = ReferenceError;

var ASYNC_DISPOSE = wellKnownSymbol('asyncDispose');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var ASYNC_DISPOSABLE_STACK = 'AsyncDisposableStack';
var setInternalState = InternalStateModule.set;
var getAsyncDisposableStackInternalState = InternalStateModule.getterFor(ASYNC_DISPOSABLE_STACK);

var HINT = 'async-dispose';
var DISPOSED = 'disposed';
var PENDING = 'pending';

var getPendingAsyncDisposableStackInternalState = function (stack) {
  var internalState = getAsyncDisposableStackInternalState(stack);
  if (internalState.state === DISPOSED) throw new $ReferenceError(ASYNC_DISPOSABLE_STACK + ' already disposed');
  return internalState;
};

var $AsyncDisposableStack = function AsyncDisposableStack() {
  setInternalState(anInstance(this, AsyncDisposableStackPrototype), {
    type: ASYNC_DISPOSABLE_STACK,
    state: PENDING,
    stack: []
  });

  if (!DESCRIPTORS) this.disposed = false;
};

var AsyncDisposableStackPrototype = $AsyncDisposableStack.prototype;

defineBuiltIns(AsyncDisposableStackPrototype, {
  disposeAsync: function disposeAsync() {
    var asyncDisposableStack = this;
    return new Promise(function (resolve, reject) {
      var internalState = getAsyncDisposableStackInternalState(asyncDisposableStack);
      if (internalState.state === DISPOSED) return resolve(undefined);
      internalState.state = DISPOSED;
      if (!DESCRIPTORS) asyncDisposableStack.disposed = true;
      var stack = internalState.stack;
      var i = stack.length;
      var thrown = false;
      var suppressed;

      var handleError = function (result) {
        if (thrown) {
          suppressed = new SuppressedError(result, suppressed);
        } else {
          thrown = true;
          suppressed = result;
        }

        loop();
      };

      var loop = function () {
        if (i) {
          var disposeMethod = stack[--i];
          stack[i] = null;
          try {
            Promise.resolve(disposeMethod()).then(loop, handleError);
          } catch (error) {
            handleError(error);
          }
        } else {
          internalState.stack = null;
          thrown ? reject(suppressed) : resolve(undefined);
        }
      };

      loop();
    });
  },
  use: function use(value) {
    addDisposableResource(getPendingAsyncDisposableStackInternalState(this), value, HINT);
    return value;
  },
  adopt: function adopt(value, onDispose) {
    var internalState = getPendingAsyncDisposableStackInternalState(this);
    aCallable(onDispose);
    addDisposableResource(internalState, undefined, HINT, function () {
      return onDispose(value);
    });
    return value;
  },
  defer: function defer(onDispose) {
    var internalState = getPendingAsyncDisposableStackInternalState(this);
    aCallable(onDispose);
    addDisposableResource(internalState, undefined, HINT, onDispose);
  },
  move: function move() {
    var internalState = getPendingAsyncDisposableStackInternalState(this);
    var newAsyncDisposableStack = new $AsyncDisposableStack();
    getAsyncDisposableStackInternalState(newAsyncDisposableStack).stack = internalState.stack;
    internalState.stack = [];
    internalState.state = DISPOSED;
    if (!DESCRIPTORS) this.disposed = true;
    return newAsyncDisposableStack;
  }
});

if (DESCRIPTORS) defineBuiltInAccessor(AsyncDisposableStackPrototype, 'disposed', {
  configurable: true,
  get: function disposed() {
    return getAsyncDisposableStackInternalState(this).state === DISPOSED;
  }
});

defineBuiltIn(AsyncDisposableStackPrototype, ASYNC_DISPOSE, AsyncDisposableStackPrototype.disposeAsync, { name: 'disposeAsync' });
defineBuiltIn(AsyncDisposableStackPrototype, TO_STRING_TAG, ASYNC_DISPOSABLE_STACK, { nonWritable: true });

$({ global: true, constructor: true }, {
  AsyncDisposableStack: $AsyncDisposableStack
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.as-indexed-pairs.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var indexed = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-indexed.js");

// `AsyncIterator.prototype.asIndexedPairs` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'AsyncIterator', name: 'indexed', proto: true, real: true, forced: true }, {
  asIndexedPairs: indexed
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.async-dispose.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-async-explicit-resource-management
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var AsyncIteratorPrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-prototype.js");

var ASYNC_DISPOSE = wellKnownSymbol('asyncDispose');
var Promise = getBuiltIn('Promise');

if (!hasOwn(AsyncIteratorPrototype, ASYNC_DISPOSE)) {
  defineBuiltIn(AsyncIteratorPrototype, ASYNC_DISPOSE, function () {
    var O = this;
    return new Promise(function (resolve, reject) {
      var $return = getMethod(O, 'return');
      if ($return) {
        Promise.resolve(call($return, O)).then(function () {
          resolve(undefined);
        }, reject);
      } else resolve(undefined);
    });
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var AsyncIteratorPrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-prototype.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;

var AsyncIteratorConstructor = function AsyncIterator() {
  anInstance(this, AsyncIteratorPrototype);
  if (getPrototypeOf(this) === AsyncIteratorPrototype) throw new $TypeError('Abstract class AsyncIterator not directly constructable');
};

AsyncIteratorConstructor.prototype = AsyncIteratorPrototype;

if (!hasOwn(AsyncIteratorPrototype, TO_STRING_TAG)) {
  createNonEnumerableProperty(AsyncIteratorPrototype, TO_STRING_TAG, 'AsyncIterator');
}

if (IS_PURE || !hasOwn(AsyncIteratorPrototype, 'constructor') || AsyncIteratorPrototype.constructor === Object) {
  createNonEnumerableProperty(AsyncIteratorPrototype, 'constructor', AsyncIteratorConstructor);
}

// `AsyncIterator` constructor
// https://github.com/tc39/proposal-async-iterator-helpers
$({ global: true, constructor: true, forced: IS_PURE }, {
  AsyncIterator: AsyncIteratorConstructor
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.drop.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var notANaN = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-nan.js");
var toPositiveInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-positive-integer.js");
var createAsyncIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-create-proxy.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
  var state = this;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var loop = function () {
      try {
        Promise.resolve(anObject(call(state.next, state.iterator))).then(function (step) {
          try {
            if (anObject(step).done) {
              state.done = true;
              resolve(createIterResultObject(undefined, true));
            } else if (state.remaining) {
              state.remaining--;
              loop();
            } else resolve(createIterResultObject(step.value, false));
          } catch (err) { doneAndReject(err); }
        }, doneAndReject);
      } catch (error) { doneAndReject(error); }
    };

    loop();
  });
});

// `AsyncIterator.prototype.drop` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: IS_PURE }, {
  drop: function drop(limit) {
    anObject(this);
    var remaining = toPositiveInteger(notANaN(+limit));
    return new AsyncIteratorProxy(getIteratorDirect(this), {
      remaining: remaining
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.every.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $every = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-iteration.js")/* .every */.every);

// `AsyncIterator.prototype.every` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  every: function every(predicate) {
    return $every(this, predicate);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.filter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var createAsyncIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-create-proxy.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var closeAsyncIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-close.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var predicate = state.predicate;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      closeAsyncIteration(iterator, doneAndReject, error, doneAndReject);
    };

    var loop = function () {
      try {
        Promise.resolve(anObject(call(state.next, iterator))).then(function (step) {
          try {
            if (anObject(step).done) {
              state.done = true;
              resolve(createIterResultObject(undefined, true));
            } else {
              var value = step.value;
              try {
                var result = predicate(value, state.counter++);

                var handler = function (selected) {
                  selected ? resolve(createIterResultObject(value, false)) : loop();
                };

                if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                else handler(result);
              } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
            }
          } catch (error2) { doneAndReject(error2); }
        }, doneAndReject);
      } catch (error) { doneAndReject(error); }
    };

    loop();
  });
});

// `AsyncIterator.prototype.filter` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new AsyncIteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.find.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $find = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-iteration.js")/* .find */.find);

// `AsyncIterator.prototype.find` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  find: function find(predicate) {
    return $find(this, predicate);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.flat-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var createAsyncIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-create-proxy.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var getAsyncIteratorFlattenable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-async-iterator-flattenable.js");
var closeAsyncIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-close.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var mapper = state.mapper;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      closeAsyncIteration(iterator, doneAndReject, error, doneAndReject);
    };

    var outerLoop = function () {
      try {
        Promise.resolve(anObject(call(state.next, iterator))).then(function (step) {
          try {
            if (anObject(step).done) {
              state.done = true;
              resolve(createIterResultObject(undefined, true));
            } else {
              var value = step.value;
              try {
                var result = mapper(value, state.counter++);

                var handler = function (mapped) {
                  try {
                    state.inner = getAsyncIteratorFlattenable(mapped);
                    innerLoop();
                  } catch (error4) { ifAbruptCloseAsyncIterator(error4); }
                };

                if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                else handler(result);
              } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
            }
          } catch (error2) { doneAndReject(error2); }
        }, doneAndReject);
      } catch (error) { doneAndReject(error); }
    };

    var innerLoop = function () {
      var inner = state.inner;
      if (inner) {
        try {
          Promise.resolve(anObject(call(inner.next, inner.iterator))).then(function (result) {
            try {
              if (anObject(result).done) {
                state.inner = null;
                outerLoop();
              } else resolve(createIterResultObject(result.value, false));
            } catch (error1) { ifAbruptCloseAsyncIterator(error1); }
          }, ifAbruptCloseAsyncIterator);
        } catch (error) { ifAbruptCloseAsyncIterator(error); }
      } else outerLoop();
    };

    innerLoop();
  });
});

// `AsyncIterator.prototype.flaMap` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: IS_PURE }, {
  flatMap: function flatMap(mapper) {
    anObject(this);
    aCallable(mapper);
    return new AsyncIteratorProxy(getIteratorDirect(this), {
      mapper: mapper,
      inner: null
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.for-each.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $forEach = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-iteration.js")/* .forEach */.forEach);

// `AsyncIterator.prototype.forEach` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    return $forEach(this, fn);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var getAsyncIteratorFlattenable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-async-iterator-flattenable.js");
var AsyncIteratorPrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-prototype.js");
var WrapAsyncIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-wrap.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

// `AsyncIterator.from` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', stat: true, forced: IS_PURE }, {
  from: function from(O) {
    var iteratorRecord = getAsyncIteratorFlattenable(typeof O == 'string' ? toObject(O) : O);
    return isPrototypeOf(AsyncIteratorPrototype, iteratorRecord.iterator)
      ? iteratorRecord.iterator
      : new WrapAsyncIterator(iteratorRecord);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.indexed.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var indexed = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-indexed.js");

// `AsyncIterator.prototype.indexed` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
  indexed: indexed
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var map = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-map.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

// `AsyncIterator.prototype.map` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: IS_PURE }, {
  map: map
});



}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.reduce.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var closeAsyncIteration = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-close.js");

var Promise = getBuiltIn('Promise');
var $TypeError = TypeError;

// `AsyncIterator.prototype.reduce` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    aCallable(reducer);
    var record = getIteratorDirect(this);
    var iterator = record.iterator;
    var next = record.next;
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;

    return new Promise(function (resolve, reject) {
      var ifAbruptCloseAsyncIterator = function (error) {
        closeAsyncIteration(iterator, reject, error, reject);
      };

      var loop = function () {
        try {
          Promise.resolve(anObject(call(next, iterator))).then(function (step) {
            try {
              if (anObject(step).done) {
                noInitial ? reject(new $TypeError('Reduce of empty iterator with no initial value')) : resolve(accumulator);
              } else {
                var value = step.value;
                if (noInitial) {
                  noInitial = false;
                  accumulator = value;
                  loop();
                } else try {
                  var result = reducer(accumulator, value, counter);

                  var handler = function ($result) {
                    accumulator = $result;
                    loop();
                  };

                  if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                  else handler(result);
                } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
              }
              counter++;
            } catch (error2) { reject(error2); }
          }, reject);
        } catch (error) { reject(error); }
      };

      loop();
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.some.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $some = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-iteration.js")/* .some */.some);

// `AsyncIterator.prototype.some` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  some: function some(predicate) {
    return $some(this, predicate);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.take.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var notANaN = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/not-a-nan.js");
var toPositiveInteger = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-positive-integer.js");
var createAsyncIteratorProxy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-create-proxy.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var returnMethod;

  if (!state.remaining--) {
    var resultDone = createIterResultObject(undefined, true);
    state.done = true;
    returnMethod = iterator['return'];
    if (returnMethod !== undefined) {
      return Promise.resolve(call(returnMethod, iterator, undefined)).then(function () {
        return resultDone;
      });
    }
    return resultDone;
  } return Promise.resolve(call(state.next, iterator)).then(function (step) {
    if (anObject(step).done) {
      state.done = true;
      return createIterResultObject(undefined, true);
    } return createIterResultObject(step.value, false);
  }).then(null, function (error) {
    state.done = true;
    throw error;
  });
});

// `AsyncIterator.prototype.take` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: IS_PURE }, {
  take: function take(limit) {
    anObject(this);
    var remaining = toPositiveInteger(notANaN(+limit));
    return new AsyncIteratorProxy(getIteratorDirect(this), {
      remaining: remaining
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.async-iterator.to-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var $toArray = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-iteration.js")/* .toArray */.toArray);

// `AsyncIterator.prototype.toArray` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  toArray: function toArray() {
    return $toArray(this, undefined, []);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.bigint.range.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-bigint -- safe */
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var NumericRangeIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/numeric-range-iterator.js");

// `BigInt.range` method
// https://github.com/tc39/proposal-Number.range
// TODO: Remove from `core-js@4`
if (typeof BigInt == 'function') {
  $({ target: 'BigInt', stat: true, forced: true }, {
    range: function range(start, end, option) {
      return new NumericRangeIterator(start, end, option, 'bigint', BigInt(0), BigInt(1));
    }
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.composite-key.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var getCompositeKeyNode = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/composite-key.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");

var $Object = Object;

var initializer = function () {
  var freeze = getBuiltIn('Object', 'freeze');
  return freeze ? freeze(create(null)) : create(null);
};

// https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey
$({ global: true, forced: true }, {
  compositeKey: function compositeKey() {
    return apply(getCompositeKeyNode, $Object, arguments).get('object', initializer);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.composite-symbol.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getCompositeKeyNode = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/composite-key.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");

// https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey
$({ global: true, forced: true }, {
  compositeSymbol: function compositeSymbol() {
    if (arguments.length === 1 && typeof arguments[0] == 'string') return getBuiltIn('Symbol')['for'](arguments[0]);
    return apply(getCompositeKeyNode, null, arguments).get('symbol', getBuiltIn('Symbol'));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.data-view.get-float16.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var unpackIEEE754 = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/ieee754.js")/* .unpack */.unpack);

// eslint-disable-next-line es/no-typed-arrays -- safe
var getUint16 = uncurryThis(DataView.prototype.getUint16);

// `DataView.prototype.getFloat16` method
// https://github.com/tc39/proposal-float16array
$({ target: 'DataView', proto: true }, {
  getFloat16: function getFloat16(byteOffset /* , littleEndian */) {
    var uint16 = getUint16(this, byteOffset, arguments.length > 1 ? arguments[1] : false);
    return unpackIEEE754([uint16 & 0xFF, uint16 >> 8 & 0xFF], 10);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.data-view.get-uint8-clamped.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-typed-arrays -- safe
var getUint8 = uncurryThis(DataView.prototype.getUint8);

// `DataView.prototype.getUint8Clamped` method
// https://github.com/tc39/proposal-dataview-get-set-uint8clamped
$({ target: 'DataView', proto: true, forced: true }, {
  getUint8Clamped: function getUint8Clamped(byteOffset) {
    return getUint8(this, byteOffset);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.data-view.set-float16.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aDataView = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-data-view.js");
var toIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-index.js");
var packIEEE754 = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/ieee754.js")/* .pack */.pack);
var f16round = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-f16round.js");

// eslint-disable-next-line es/no-typed-arrays -- safe
var setUint16 = uncurryThis(DataView.prototype.setUint16);

// `DataView.prototype.setFloat16` method
// https://github.com/tc39/proposal-float16array
$({ target: 'DataView', proto: true }, {
  setFloat16: function setFloat16(byteOffset, value /* , littleEndian */) {
    aDataView(this);
    var offset = toIndex(byteOffset);
    var bytes = packIEEE754(f16round(value), 10, 2);
    return setUint16(this, offset, bytes[1] << 8 | bytes[0], arguments.length > 2 ? arguments[2] : false);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.data-view.set-uint8-clamped.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aDataView = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-data-view.js");
var toIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-index.js");
var toUint8Clamped = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-uint8-clamped.js");

// eslint-disable-next-line es/no-typed-arrays -- safe
var setUint8 = uncurryThis(DataView.prototype.setUint8);

// `DataView.prototype.setUint8Clamped` method
// https://github.com/tc39/proposal-dataview-get-set-uint8clamped
$({ target: 'DataView', proto: true, forced: true }, {
  setUint8Clamped: function setUint8Clamped(byteOffset, value) {
    aDataView(this);
    var offset = toIndex(byteOffset);
    return setUint8(this, offset, toUint8Clamped(value));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.disposable-stack.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-explicit-resource-management
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var addDisposableResource = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/add-disposable-resource.js");

var SuppressedError = getBuiltIn('SuppressedError');
var $ReferenceError = ReferenceError;

var DISPOSE = wellKnownSymbol('dispose');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var DISPOSABLE_STACK = 'DisposableStack';
var setInternalState = InternalStateModule.set;
var getDisposableStackInternalState = InternalStateModule.getterFor(DISPOSABLE_STACK);

var HINT = 'sync-dispose';
var DISPOSED = 'disposed';
var PENDING = 'pending';

var getPendingDisposableStackInternalState = function (stack) {
  var internalState = getDisposableStackInternalState(stack);
  if (internalState.state === DISPOSED) throw new $ReferenceError(DISPOSABLE_STACK + ' already disposed');
  return internalState;
};

var $DisposableStack = function DisposableStack() {
  setInternalState(anInstance(this, DisposableStackPrototype), {
    type: DISPOSABLE_STACK,
    state: PENDING,
    stack: []
  });

  if (!DESCRIPTORS) this.disposed = false;
};

var DisposableStackPrototype = $DisposableStack.prototype;

defineBuiltIns(DisposableStackPrototype, {
  dispose: function dispose() {
    var internalState = getDisposableStackInternalState(this);
    if (internalState.state === DISPOSED) return;
    internalState.state = DISPOSED;
    if (!DESCRIPTORS) this.disposed = true;
    var stack = internalState.stack;
    var i = stack.length;
    var thrown = false;
    var suppressed;
    while (i) {
      var disposeMethod = stack[--i];
      stack[i] = null;
      try {
        disposeMethod();
      } catch (errorResult) {
        if (thrown) {
          suppressed = new SuppressedError(errorResult, suppressed);
        } else {
          thrown = true;
          suppressed = errorResult;
        }
      }
    }
    internalState.stack = null;
    if (thrown) throw suppressed;
  },
  use: function use(value) {
    addDisposableResource(getPendingDisposableStackInternalState(this), value, HINT);
    return value;
  },
  adopt: function adopt(value, onDispose) {
    var internalState = getPendingDisposableStackInternalState(this);
    aCallable(onDispose);
    addDisposableResource(internalState, undefined, HINT, function () {
      onDispose(value);
    });
    return value;
  },
  defer: function defer(onDispose) {
    var internalState = getPendingDisposableStackInternalState(this);
    aCallable(onDispose);
    addDisposableResource(internalState, undefined, HINT, onDispose);
  },
  move: function move() {
    var internalState = getPendingDisposableStackInternalState(this);
    var newDisposableStack = new $DisposableStack();
    getDisposableStackInternalState(newDisposableStack).stack = internalState.stack;
    internalState.stack = [];
    internalState.state = DISPOSED;
    if (!DESCRIPTORS) this.disposed = true;
    return newDisposableStack;
  }
});

if (DESCRIPTORS) defineBuiltInAccessor(DisposableStackPrototype, 'disposed', {
  configurable: true,
  get: function disposed() {
    return getDisposableStackInternalState(this).state === DISPOSED;
  }
});

defineBuiltIn(DisposableStackPrototype, DISPOSE, DisposableStackPrototype.dispose, { name: 'dispose' });
defineBuiltIn(DisposableStackPrototype, TO_STRING_TAG, DISPOSABLE_STACK, { nonWritable: true });

$({ global: true, constructor: true }, {
  DisposableStack: $DisposableStack
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.function.demethodize.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var demethodize = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-demethodize.js");

// `Function.prototype.demethodize` method
// https://github.com/js-choi/proposal-function-demethodize
$({ target: 'Function', proto: true, forced: true }, {
  demethodize: demethodize
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.function.is-callable.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var $isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inspect-source.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var classRegExp = /^\s*class\b/;
var exec = uncurryThis(classRegExp.exec);

var isClassConstructor = function (argument) {
  try {
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    if (!DESCRIPTORS || !exec(classRegExp, inspectSource(argument))) return false;
  } catch (error) { /* empty */ }
  var prototype = getOwnPropertyDescriptor(argument, 'prototype');
  return !!prototype && hasOwn(prototype, 'writable') && !prototype.writable;
};

// `Function.isCallable` method
// https://github.com/caitp/TC39-Proposals/blob/trunk/tc39-reflect-isconstructor-iscallable.md
$({ target: 'Function', stat: true, sham: true, forced: true }, {
  isCallable: function isCallable(argument) {
    return $isCallable(argument) && !isClassConstructor(argument);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.function.is-constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");

// `Function.isConstructor` method
// https://github.com/caitp/TC39-Proposals/blob/trunk/tc39-reflect-isconstructor-iscallable.md
$({ target: 'Function', stat: true, forced: true }, {
  isConstructor: isConstructor
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.function.metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);

var METADATA = wellKnownSymbol('metadata');
var FunctionPrototype = Function.prototype;

// Function.prototype[@@metadata]
// https://github.com/tc39/proposal-decorator-metadata
if (FunctionPrototype[METADATA] === undefined) {
  defineProperty(FunctionPrototype, METADATA, {
    value: null
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.function.un-this.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var demethodize = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-demethodize.js");

// `Function.prototype.unThis` method
// https://github.com/js-choi/proposal-function-demethodize
// TODO: Remove from `core-js@4`
$({ target: 'Function', proto: true, forced: true, name: 'demethodize' }, {
  unThis: demethodize
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.as-indexed-pairs.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var indexed = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-indexed.js");

// `Iterator.prototype.asIndexedPairs` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'Iterator', name: 'indexed', proto: true, real: true, forced: true }, {
  asIndexedPairs: indexed
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.constructor.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.dispose.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-explicit-resource-management
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var IteratorPrototype = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterators-core.js")/* .IteratorPrototype */.IteratorPrototype);

var DISPOSE = wellKnownSymbol('dispose');

if (!hasOwn(IteratorPrototype, DISPOSE)) {
  defineBuiltIn(IteratorPrototype, DISPOSE, function () {
    var $return = getMethod(this, 'return');
    if ($return) call($return, this);
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.drop.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.drop.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.every.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.every.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.filter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.filter.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.find.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.find.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.flat-map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.flat-map.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.for-each.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.for-each.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.from.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.indexed.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var indexed = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-indexed.js");

// `Iterator.prototype.indexed` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'Iterator', proto: true, real: true, forced: true }, {
  indexed: indexed
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.map.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.range.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-bigint -- safe */
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var NumericRangeIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/numeric-range-iterator.js");

var $TypeError = TypeError;

// `Iterator.range` method
// https://github.com/tc39/proposal-Number.range
$({ target: 'Iterator', stat: true, forced: true }, {
  range: function range(start, end, option) {
    if (typeof start == 'number') return new NumericRangeIterator(start, end, option, 'number', 0, 1);
    if (typeof start == 'bigint') return new NumericRangeIterator(start, end, option, 'bigint', BigInt(0), BigInt(1));
    throw new $TypeError('Incorrect Iterator.range arguments');
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.reduce.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.reduce.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.some.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.some.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.take.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.take.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.to-array.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.iterator.to-array.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.iterator.to-async.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var AsyncFromSyncIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-from-sync-iterator.js");
var WrapAsyncIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/async-iterator-wrap.js");
var getIteratorDirect = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-direct.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

// `Iterator.prototype.toAsync` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  toAsync: function toAsync() {
    return new WrapAsyncIterator(getIteratorDirect(new AsyncFromSyncIterator(getIteratorDirect(anObject(this)))));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.json.is-raw-json.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var NATIVE_RAW_JSON = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/native-raw-json.js");
var isRawJSON = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-raw-json.js");

// `JSON.parse` method
// https://tc39.es/proposal-json-parse-with-source/#sec-json.israwjson
// https://github.com/tc39/proposal-json-parse-with-source
$({ target: 'JSON', stat: true, forced: !NATIVE_RAW_JSON }, {
  isRawJSON: isRawJSON
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.json.parse.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-array.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var parseJSONString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/parse-json-string.js");
var NATIVE_SYMBOL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-constructor-detection.js");

var JSON = globalThis.JSON;
var Number = globalThis.Number;
var SyntaxError = globalThis.SyntaxError;
var nativeParse = JSON && JSON.parse;
var enumerableOwnProperties = getBuiltIn('Object', 'keys');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);
var push = uncurryThis([].push);

var IS_DIGIT = /^\d$/;
var IS_NON_ZERO_DIGIT = /^[1-9]$/;
var IS_NUMBER_START = /^[\d-]$/;
var IS_WHITESPACE = /^[\t\n\r ]$/;

var PRIMITIVE = 0;
var OBJECT = 1;

var $parse = function (source, reviver) {
  source = toString(source);
  var context = new Context(source, 0, '');
  var root = context.parse();
  var value = root.value;
  var endIndex = context.skip(IS_WHITESPACE, root.end);
  if (endIndex < source.length) {
    throw new SyntaxError('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
  }
  return isCallable(reviver) ? internalize({ '': value }, '', reviver, root) : value;
};

var internalize = function (holder, name, reviver, node) {
  var val = holder[name];
  var unmodified = node && val === node.value;
  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
  var elementRecordsLen, keys, len, i, P;
  if (isObject(val)) {
    var nodeIsArray = isArray(val);
    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
    if (nodeIsArray) {
      elementRecordsLen = nodes.length;
      len = lengthOfArrayLike(val);
      for (i = 0; i < len; i++) {
        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
      }
    } else {
      keys = enumerableOwnProperties(val);
      len = lengthOfArrayLike(keys);
      for (i = 0; i < len; i++) {
        P = keys[i];
        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : undefined));
      }
    }
  }
  return call(reviver, holder, name, val, context);
};

var internalizeProperty = function (object, key, value) {
  if (DESCRIPTORS) {
    var descriptor = getOwnPropertyDescriptor(object, key);
    if (descriptor && !descriptor.configurable) return;
  }
  if (value === undefined) delete object[key];
  else createProperty(object, key, value);
};

var Node = function (value, end, source, nodes) {
  this.value = value;
  this.end = end;
  this.source = source;
  this.nodes = nodes;
};

var Context = function (source, index) {
  this.source = source;
  this.index = index;
};

// https://www.json.org/json-en.html
Context.prototype = {
  fork: function (nextIndex) {
    return new Context(this.source, nextIndex);
  },
  parse: function () {
    var source = this.source;
    var i = this.skip(IS_WHITESPACE, this.index);
    var fork = this.fork(i);
    var chr = at(source, i);
    if (exec(IS_NUMBER_START, chr)) return fork.number();
    switch (chr) {
      case '{':
        return fork.object();
      case '[':
        return fork.array();
      case '"':
        return fork.string();
      case 't':
        return fork.keyword(true);
      case 'f':
        return fork.keyword(false);
      case 'n':
        return fork.keyword(null);
    } throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  },
  node: function (type, value, start, end, nodes) {
    return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
  },
  object: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectKeypair = false;
    var object = {};
    var nodes = {};
    while (i < source.length) {
      i = this.until(['"', '}'], i);
      if (at(source, i) === '}' && !expectKeypair) {
        i++;
        break;
      }
      // Parsing the key
      var result = this.fork(i).string();
      var key = result.value;
      i = result.end;
      i = this.until([':'], i) + 1;
      // Parsing value
      i = this.skip(IS_WHITESPACE, i);
      result = this.fork(i).parse();
      createProperty(nodes, key, result);
      createProperty(object, key, result.value);
      i = this.until([',', '}'], result.end);
      var chr = at(source, i);
      if (chr === ',') {
        expectKeypair = true;
        i++;
      } else if (chr === '}') {
        i++;
        break;
      }
    }
    return this.node(OBJECT, object, this.index, i, nodes);
  },
  array: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectElement = false;
    var array = [];
    var nodes = [];
    while (i < source.length) {
      i = this.skip(IS_WHITESPACE, i);
      if (at(source, i) === ']' && !expectElement) {
        i++;
        break;
      }
      var result = this.fork(i).parse();
      push(nodes, result);
      push(array, result.value);
      i = this.until([',', ']'], result.end);
      if (at(source, i) === ',') {
        expectElement = true;
        i++;
      } else if (at(source, i) === ']') {
        i++;
        break;
      }
    }
    return this.node(OBJECT, array, this.index, i, nodes);
  },
  string: function () {
    var index = this.index;
    var parsed = parseJSONString(this.source, this.index + 1);
    return this.node(PRIMITIVE, parsed.value, index, parsed.end);
  },
  number: function () {
    var source = this.source;
    var startIndex = this.index;
    var i = startIndex;
    if (at(source, i) === '-') i++;
    if (at(source, i) === '0') i++;
    else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
    else throw new SyntaxError('Failed to parse number at: ' + i);
    if (at(source, i) === '.') i = this.skip(IS_DIGIT, i + 1);
    if (at(source, i) === 'e' || at(source, i) === 'E') {
      i++;
      if (at(source, i) === '+' || at(source, i) === '-') i++;
      var exponentStartIndex = i;
      i = this.skip(IS_DIGIT, i);
      if (exponentStartIndex === i) throw new SyntaxError("Failed to parse number's exponent value at: " + i);
    }
    return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
  },
  keyword: function (value) {
    var keyword = '' + value;
    var index = this.index;
    var endIndex = index + keyword.length;
    if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError('Failed to parse value at: ' + index);
    return this.node(PRIMITIVE, value, index, endIndex);
  },
  skip: function (regex, i) {
    var source = this.source;
    for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
    return i;
  },
  until: function (array, i) {
    i = this.skip(IS_WHITESPACE, i);
    var chr = at(this.source, i);
    for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
    throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  }
};

var NO_SOURCE_SUPPORT = fails(function () {
  var unsafeInt = '9007199254740993';
  var source;
  nativeParse(unsafeInt, function (key, value, context) {
    source = context.source;
  });
  return source !== unsafeInt;
});

var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function () {
  // Safari 9 bug
  return 1 / nativeParse('-0 \t') !== -Infinity;
});

// `JSON.parse` method
// https://tc39.es/ecma262/#sec-json.parse
// https://github.com/tc39/proposal-json-parse-with-source
$({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
  parse: function parse(text, reviver) {
    return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.json.raw-json.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var FREEZING = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/freezing.js");
var NATIVE_RAW_JSON = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/native-raw-json.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isRawJSON = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-raw-json.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var createProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js");
var parseJSONString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/parse-json-string.js");
var getReplacerFunction = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-json-replacer-function.js");
var uid = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uid.js");
var setInternalState = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js")/* .set */.set);

var $String = String;
var $SyntaxError = SyntaxError;
var parse = getBuiltIn('JSON', 'parse');
var $stringify = getBuiltIn('JSON', 'stringify');
var create = getBuiltIn('Object', 'create');
var freeze = getBuiltIn('Object', 'freeze');
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var push = uncurryThis([].push);

var MARK = uid();
var MARK_LENGTH = MARK.length;
var ERROR_MESSAGE = 'Unacceptable as raw JSON';

var isWhitespace = function (it) {
  return it === ' ' || it === '\t' || it === '\n' || it === '\r';
};

// `JSON.parse` method
// https://tc39.es/proposal-json-parse-with-source/#sec-json.israwjson
// https://github.com/tc39/proposal-json-parse-with-source
$({ target: 'JSON', stat: true, forced: !NATIVE_RAW_JSON }, {
  rawJSON: function rawJSON(text) {
    var jsonString = toString(text);
    if (jsonString === '' || isWhitespace(at(jsonString, 0)) || isWhitespace(at(jsonString, jsonString.length - 1))) {
      throw new $SyntaxError(ERROR_MESSAGE);
    }
    var parsed = parse(jsonString);
    if (typeof parsed == 'object' && parsed !== null) throw new $SyntaxError(ERROR_MESSAGE);
    var obj = create(null);
    setInternalState(obj, { type: 'RawJSON' });
    createProperty(obj, 'rawJSON', jsonString);
    return FREEZING ? freeze(obj) : obj;
  }
});

// `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-json-parse-with-source
if ($stringify) $({ target: 'JSON', stat: true, arity: 3, forced: !NATIVE_RAW_JSON }, {
  stringify: function stringify(text, replacer, space) {
    var replacerFunction = getReplacerFunction(replacer);
    var rawStrings = [];

    var json = $stringify(text, function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      var v = isCallable(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value;
      return isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
    }, space);

    if (typeof json != 'string') return json;

    var result = '';
    var length = json.length;

    for (var i = 0; i < length; i++) {
      var chr = at(json, i);
      if (chr === '"') {
        var end = parseJSONString(json, ++i).end - 1;
        var string = slice(json, i, end);
        result += slice(string, 0, MARK_LENGTH) === MARK
          ? rawStrings[slice(string, MARK_LENGTH)]
          : '"' + string + '"';
        i = end;
      } else result += chr;
    }

    return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.delete-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var remove = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js")/* .remove */.remove);

// `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aMap(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.emplace.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");

var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.emplace` method
// https://github.com/tc39/proposal-upsert
$({ target: 'Map', proto: true, real: true, forced: true }, {
  emplace: function emplace(key, handler) {
    var map = aMap(this);
    var value, inserted;
    if (has(map, key)) {
      value = get(map, key);
      if ('update' in handler) {
        value = handler.update(value, key, map);
        set(map, key, value);
      } return value;
    }
    inserted = handler.insert(key, map);
    set(map, key, inserted);
    return inserted;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.every.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (!boundFunction(value, key, map)) return false;
    }, true) !== false;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.filter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) set(newMap, key, value);
    });
    return newMap;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.find-key.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  findKey: function findKey(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { key: key };
    }, true);
    return result && result.key;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.find.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { value: value };
    }, true);
    return result && result.value;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var createCollectionFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-from.js");

// `Map.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
$({ target: 'Map', stat: true, forced: true }, {
  from: createCollectionFrom(MapHelpers.Map, MapHelpers.set, true)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.includes.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var sameValueZero = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/same-value-zero.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  includes: function includes(searchElement) {
    return iterate(aMap(this), function (value) {
      if (sameValueZero(value, searchElement)) return true;
    }, true) === true;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.key-by.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var Map = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js")/* .Map */.Map);

// `Map.keyBy` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', stat: true, forced: true }, {
  keyBy: function keyBy(iterable, keyDerivative) {
    var C = isCallable(this) ? this : Map;
    var newMap = new C();
    aCallable(keyDerivative);
    var setter = aCallable(newMap.set);
    iterate(iterable, function (element) {
      call(setter, newMap, keyDerivative(element), element);
    });
    return newMap;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.key-of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.keyOf` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  keyOf: function keyOf(searchElement) {
    var result = iterate(aMap(this), function (value, key) {
      if (value === searchElement) return { key: key };
    }, true);
    return result && result.key;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.map-keys.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, boundFunction(value, key, map), value);
    });
    return newMap;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.map-values.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapValues: function mapValues(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, key, boundFunction(value, key, map));
    });
    return newMap;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.merge.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var set = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js")/* .set */.set);

// `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  merge: function merge(iterable /* ...iterables */) {
    var map = aMap(this);
    var argumentsLength = arguments.length;
    var i = 0;
    while (i < argumentsLength) {
      iterate(arguments[i++], function (key, value) {
        set(map, key, value);
      }, { AS_ENTRIES: true });
    }
    return map;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var createCollectionOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-of.js");

// `Map.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
$({ target: 'Map', stat: true, forced: true }, {
  of: createCollectionOf(MapHelpers.Map, MapHelpers.set, true)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.reduce.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

var $TypeError = TypeError;

// `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var map = aMap(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(map, function (value, key) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    });
    if (noInitial) throw new $TypeError('Reduce of empty map with no initial value');
    return accumulator;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.some.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return true;
    }, true) === true;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.update-or-insert.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var upsert = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-upsert.js");

// `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
// https://github.com/thumbsupep/proposal-upsert
$({ target: 'Map', proto: true, real: true, name: 'upsert', forced: true }, {
  updateOrInsert: upsert
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.update.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var aMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");

var $TypeError = TypeError;
var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  update: function update(key, callback /* , thunk */) {
    var map = aMap(this);
    var length = arguments.length;
    aCallable(callback);
    var isPresentInMap = has(map, key);
    if (!isPresentInMap && length < 3) {
      throw new $TypeError('Updating absent value');
    }
    var value = isPresentInMap ? get(map, key) : aCallable(length > 2 ? arguments[2] : undefined)(key, map);
    set(map, key, callback(value, key, map));
    return map;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.map.upsert.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var upsert = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-upsert.js");

// `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
// https://github.com/thumbsupep/proposal-upsert
$({ target: 'Map', proto: true, real: true, forced: true }, {
  upsert: upsert
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.clamp.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

var min = Math.min;
var max = Math.max;

// `Math.clamp` method
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, forced: true }, {
  clamp: function clamp(x, lower, upper) {
    return min(upper, max(lower, x));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.deg-per-rad.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// `Math.DEG_PER_RAD` constant
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, nonConfigurable: true, nonWritable: true }, {
  DEG_PER_RAD: Math.PI / 180
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.degrees.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

var RAD_PER_DEG = 180 / Math.PI;

// `Math.degrees` method
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, forced: true }, {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.f16round.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var f16round = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-f16round.js");

// `Math.f16round` method
// https://github.com/tc39/proposal-float16array
$({ target: 'Math', stat: true }, { f16round: f16round });


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.fscale.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

var scale = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-scale.js");
var fround = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-fround.js");

// `Math.fscale` method
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, forced: true }, {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.iaddh.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// `Math.iaddh` method
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
// TODO: Remove from `core-js@4`
$({ target: 'Math', stat: true, forced: true }, {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.imulh.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// `Math.imulh` method
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
// TODO: Remove from `core-js@4`
$({ target: 'Math', stat: true, forced: true }, {
  imulh: function imulh(u, v) {
    var UINT16 = 0xFFFF;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.isubh.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// `Math.isubh` method
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
// TODO: Remove from `core-js@4`
$({ target: 'Math', stat: true, forced: true }, {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.rad-per-deg.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// `Math.RAD_PER_DEG` constant
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, nonConfigurable: true, nonWritable: true }, {
  RAD_PER_DEG: 180 / Math.PI
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.radians.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

var DEG_PER_RAD = Math.PI / 180;

// `Math.radians` method
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, forced: true }, {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.scale.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var scale = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/math-scale.js");

// `Math.scale` method
// https://rwaldron.github.io/proposal-math-extensions/
$({ target: 'Math', stat: true, forced: true }, {
  scale: scale
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.seeded-prng.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var numberIsFinite = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/number-is-finite.js");
var createIteratorConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var SEEDED_RANDOM = 'Seeded Random';
var SEEDED_RANDOM_GENERATOR = SEEDED_RANDOM + ' Generator';
var SEED_TYPE_ERROR = 'Math.seededPRNG() argument should have a "seed" field with a finite value.';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SEEDED_RANDOM_GENERATOR);
var $TypeError = TypeError;

var $SeededRandomGenerator = createIteratorConstructor(function SeededRandomGenerator(seed) {
  setInternalState(this, {
    type: SEEDED_RANDOM_GENERATOR,
    seed: seed % 2147483647
  });
}, SEEDED_RANDOM, function next() {
  var state = getInternalState(this);
  var seed = state.seed = (state.seed * 1103515245 + 12345) % 2147483647;
  return createIterResultObject((seed & 1073741823) / 1073741823, false);
});

// `Math.seededPRNG` method
// https://github.com/tc39/proposal-seeded-random
// based on https://github.com/tc39/proposal-seeded-random/blob/78b8258835b57fc2100d076151ab506bc3202ae6/demo.html
$({ target: 'Math', stat: true, forced: true }, {
  seededPRNG: function seededPRNG(it) {
    var seed = anObject(it).seed;
    if (!numberIsFinite(seed)) throw new $TypeError(SEED_TYPE_ERROR);
    return new $SeededRandomGenerator(seed);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.signbit.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// `Math.signbit` method
// https://github.com/tc39/proposal-Math.signbit
$({ target: 'Math', stat: true, forced: true }, {
  signbit: function signbit(x) {
    var n = +x;
    // eslint-disable-next-line no-self-compare -- NaN check
    return n === n && n === 0 ? 1 / n === -Infinity : n < 0;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.sum-precise.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// based on Shewchuk's algorithm for exactly floating point addition
// adapted from https://github.com/tc39/proposal-math-sum/blob/3513d58323a1ae25560e8700aa5294500c6c9287/polyfill/polyfill.mjs
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");

var $RangeError = RangeError;
var $TypeError = TypeError;
var $Infinity = Infinity;
var $NaN = NaN;
var abs = Math.abs;
var pow = Math.pow;
var push = uncurryThis([].push);

var POW_2_1023 = pow(2, 1023);
var MAX_SAFE_INTEGER = pow(2, 53) - 1; // 2 ** 53 - 1 === 9007199254740992
var MAX_DOUBLE = Number.MAX_VALUE; // 2 ** 1024 - 2 ** (1023 - 52) === 1.79769313486231570815e+308
var MAX_ULP = pow(2, 971); // 2 ** (1023 - 52) === 1.99584030953471981166e+292

var NOT_A_NUMBER = {};
var MINUS_INFINITY = {};
var PLUS_INFINITY = {};
var MINUS_ZERO = {};
var FINITE = {};

// prerequisite: abs(x) >= abs(y)
var twosum = function (x, y) {
  var hi = x + y;
  var lo = y - (hi - x);
  return { hi: hi, lo: lo };
};

// `Math.sumPrecise` method
// https://github.com/tc39/proposal-math-sum
$({ target: 'Math', stat: true }, {
  // eslint-disable-next-line max-statements -- ok
  sumPrecise: function sumPrecise(items) {
    var numbers = [];
    var count = 0;
    var state = MINUS_ZERO;

    iterate(items, function (n) {
      if (++count >= MAX_SAFE_INTEGER) throw new $RangeError('Maximum allowed index exceeded');
      if (typeof n != 'number') throw new $TypeError('Value is not a number');
      if (state !== NOT_A_NUMBER) {
        // eslint-disable-next-line no-self-compare -- NaN check
        if (n !== n) state = NOT_A_NUMBER;
        else if (n === $Infinity) state = state === MINUS_INFINITY ? NOT_A_NUMBER : PLUS_INFINITY;
        else if (n === -$Infinity) state = state === PLUS_INFINITY ? NOT_A_NUMBER : MINUS_INFINITY;
        else if ((n !== 0 || (1 / n) === $Infinity) && (state === MINUS_ZERO || state === FINITE)) {
          state = FINITE;
          push(numbers, n);
        }
      }
    });

    switch (state) {
      case NOT_A_NUMBER: return $NaN;
      case MINUS_INFINITY: return -$Infinity;
      case PLUS_INFINITY: return $Infinity;
      case MINUS_ZERO: return -0;
    }

    var partials = [];
    var overflow = 0; // conceptually 2 ** 1024 times this value; the final partial is biased by this amount
    var x, y, sum, hi, lo, tmp;

    for (var i = 0; i < numbers.length; i++) {
      x = numbers[i];
      var actuallyUsedPartials = 0;
      for (var j = 0; j < partials.length; j++) {
        y = partials[j];
        if (abs(x) < abs(y)) {
          tmp = x;
          x = y;
          y = tmp;
        }
        sum = twosum(x, y);
        hi = sum.hi;
        lo = sum.lo;
        if (abs(hi) === $Infinity) {
          var sign = hi === $Infinity ? 1 : -1;
          overflow += sign;

          x = (x - (sign * POW_2_1023)) - (sign * POW_2_1023);
          if (abs(x) < abs(y)) {
            tmp = x;
            x = y;
            y = tmp;
          }
          sum = twosum(x, y);
          hi = sum.hi;
          lo = sum.lo;
        }
        if (lo !== 0) partials[actuallyUsedPartials++] = lo;
        x = hi;
      }
      partials.length = actuallyUsedPartials;
      if (x !== 0) push(partials, x);
    }

    // compute the exact sum of partials, stopping once we lose precision
    var n = partials.length - 1;
    hi = 0;
    lo = 0;

    if (overflow !== 0) {
      var next = n >= 0 ? partials[n] : 0;
      n--;
      if (abs(overflow) > 1 || (overflow > 0 && next > 0) || (overflow < 0 && next < 0)) {
        return overflow > 0 ? $Infinity : -$Infinity;
      }
      // here we actually have to do the arithmetic
      // drop a factor of 2 so we can do it without overflow
      // assert(abs(overflow) === 1)
      sum = twosum(overflow * POW_2_1023, next / 2);
      hi = sum.hi;
      lo = sum.lo;
      lo *= 2;
      if (abs(2 * hi) === $Infinity) {
        // rounding to the maximum value
        if (hi > 0) {
          return (hi === POW_2_1023 && lo === -(MAX_ULP / 2) && n >= 0 && partials[n] < 0) ? MAX_DOUBLE : $Infinity;
        } return (hi === -POW_2_1023 && lo === (MAX_ULP / 2) && n >= 0 && partials[n] > 0) ? -MAX_DOUBLE : -$Infinity;
      }

      if (lo !== 0) {
        partials[++n] = lo;
        lo = 0;
      }

      hi *= 2;
    }

    while (n >= 0) {
      sum = twosum(hi, partials[n--]);
      hi = sum.hi;
      lo = sum.lo;
      if (lo !== 0) break;
    }

    if (n >= 0 && ((lo < 0 && partials[n] < 0) || (lo > 0 && partials[n] > 0))) {
      y = lo * 2;
      x = hi + y;
      if (y === x - hi) hi = x;
    }

    return hi;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.math.umulh.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");

// `Math.umulh` method
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
// TODO: Remove from `core-js@4`
$({ target: 'Math', stat: true, forced: true }, {
  umulh: function umulh(u, v) {
    var UINT16 = 0xFFFF;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.number.from-string.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");

var INVALID_NUMBER_REPRESENTATION = 'Invalid number representation';
var INVALID_RADIX = 'Invalid radix';
var $RangeError = RangeError;
var $SyntaxError = SyntaxError;
var $TypeError = TypeError;
var $parseInt = parseInt;
var pow = Math.pow;
var valid = /^[\d.a-z]+$/;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(valid.exec);
var numberToString = uncurryThis(1.0.toString);
var stringSlice = uncurryThis(''.slice);
var split = uncurryThis(''.split);

// `Number.fromString` method
// https://github.com/tc39/proposal-number-fromstring
$({ target: 'Number', stat: true, forced: true }, {
  fromString: function fromString(string, radix) {
    var sign = 1;
    if (typeof string != 'string') throw new $TypeError(INVALID_NUMBER_REPRESENTATION);
    if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    if (charAt(string, 0) === '-') {
      sign = -1;
      string = stringSlice(string, 1);
      if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    }
    var R = radix === undefined ? 10 : toIntegerOrInfinity(radix);
    if (R < 2 || R > 36) throw new $RangeError(INVALID_RADIX);
    if (!exec(valid, string)) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    var parts = split(string, '.');
    var mathNum = $parseInt(parts[0], R);
    if (parts.length > 1) mathNum += $parseInt(parts[1], R) / pow(R, parts[1].length);
    if (R === 10 && numberToString(mathNum, R) !== string) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    return sign * mathNum;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.number.range.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var NumericRangeIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/numeric-range-iterator.js");

// `Number.range` method
// https://github.com/tc39/proposal-Number.range
// TODO: Remove from `core-js@4`
$({ target: 'Number', stat: true, forced: true }, {
  range: function range(start, end, option) {
    return new NumericRangeIterator(start, end, option, 'number', 0, 1);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.object.iterate-entries.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ObjectIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-iterator.js");

// `Object.iterateEntries` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true, forced: true }, {
  iterateEntries: function iterateEntries(object) {
    return new ObjectIterator(object, 'entries');
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.object.iterate-keys.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ObjectIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-iterator.js");

// `Object.iterateKeys` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true, forced: true }, {
  iterateKeys: function iterateKeys(object) {
    return new ObjectIterator(object, 'keys');
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.object.iterate-values.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ObjectIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-iterator.js");

// `Object.iterateValues` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true, forced: true }, {
  iterateValues: function iterateValues(object) {
    return new ObjectIterator(object, 'values');
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.observable.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-observable
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var setSpecies = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-species.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var hostReportErrors = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/host-report-errors.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var $$OBSERVABLE = wellKnownSymbol('observable');
var OBSERVABLE = 'Observable';
var SUBSCRIPTION = 'Subscription';
var SUBSCRIPTION_OBSERVER = 'SubscriptionObserver';
var getterFor = InternalStateModule.getterFor;
var setInternalState = InternalStateModule.set;
var getObservableInternalState = getterFor(OBSERVABLE);
var getSubscriptionInternalState = getterFor(SUBSCRIPTION);
var getSubscriptionObserverInternalState = getterFor(SUBSCRIPTION_OBSERVER);

var SubscriptionState = function (observer) {
  this.observer = anObject(observer);
  this.cleanup = null;
  this.subscriptionObserver = null;
};

SubscriptionState.prototype = {
  type: SUBSCRIPTION,
  clean: function () {
    var cleanup = this.cleanup;
    if (cleanup) {
      this.cleanup = null;
      try {
        cleanup();
      } catch (error) {
        hostReportErrors(error);
      }
    }
  },
  close: function () {
    if (!DESCRIPTORS) {
      var subscription = this.facade;
      var subscriptionObserver = this.subscriptionObserver;
      subscription.closed = true;
      if (subscriptionObserver) subscriptionObserver.closed = true;
    } this.observer = null;
  },
  isClosed: function () {
    return this.observer === null;
  }
};

var Subscription = function (observer, subscriber) {
  var subscriptionState = setInternalState(this, new SubscriptionState(observer));
  var start;
  if (!DESCRIPTORS) this.closed = false;
  try {
    if (start = getMethod(observer, 'start')) call(start, observer, this);
  } catch (error) {
    hostReportErrors(error);
  }
  if (subscriptionState.isClosed()) return;
  var subscriptionObserver = subscriptionState.subscriptionObserver = new SubscriptionObserver(subscriptionState);
  try {
    var cleanup = subscriber(subscriptionObserver);
    var subscription = cleanup;
    if (!isNullOrUndefined(cleanup)) subscriptionState.cleanup = isCallable(cleanup.unsubscribe)
      ? function () { subscription.unsubscribe(); }
      : aCallable(cleanup);
  } catch (error) {
    subscriptionObserver.error(error);
    return;
  } if (subscriptionState.isClosed()) subscriptionState.clean();
};

Subscription.prototype = defineBuiltIns({}, {
  unsubscribe: function unsubscribe() {
    var subscriptionState = getSubscriptionInternalState(this);
    if (!subscriptionState.isClosed()) {
      subscriptionState.close();
      subscriptionState.clean();
    }
  }
});

if (DESCRIPTORS) defineBuiltInAccessor(Subscription.prototype, 'closed', {
  configurable: true,
  get: function closed() {
    return getSubscriptionInternalState(this).isClosed();
  }
});

var SubscriptionObserver = function (subscriptionState) {
  setInternalState(this, {
    type: SUBSCRIPTION_OBSERVER,
    subscriptionState: subscriptionState
  });
  if (!DESCRIPTORS) this.closed = false;
};

SubscriptionObserver.prototype = defineBuiltIns({}, {
  next: function next(value) {
    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
    if (!subscriptionState.isClosed()) {
      var observer = subscriptionState.observer;
      try {
        var nextMethod = getMethod(observer, 'next');
        if (nextMethod) call(nextMethod, observer, value);
      } catch (error) {
        hostReportErrors(error);
      }
    }
  },
  error: function error(value) {
    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
    if (!subscriptionState.isClosed()) {
      var observer = subscriptionState.observer;
      subscriptionState.close();
      try {
        var errorMethod = getMethod(observer, 'error');
        if (errorMethod) call(errorMethod, observer, value);
        else hostReportErrors(value);
      } catch (err) {
        hostReportErrors(err);
      } subscriptionState.clean();
    }
  },
  complete: function complete() {
    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
    if (!subscriptionState.isClosed()) {
      var observer = subscriptionState.observer;
      subscriptionState.close();
      try {
        var completeMethod = getMethod(observer, 'complete');
        if (completeMethod) call(completeMethod, observer);
      } catch (error) {
        hostReportErrors(error);
      } subscriptionState.clean();
    }
  }
});

if (DESCRIPTORS) defineBuiltInAccessor(SubscriptionObserver.prototype, 'closed', {
  configurable: true,
  get: function closed() {
    return getSubscriptionObserverInternalState(this).subscriptionState.isClosed();
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, ObservablePrototype);
  setInternalState(this, {
    type: OBSERVABLE,
    subscriber: aCallable(subscriber)
  });
};

var ObservablePrototype = $Observable.prototype;

defineBuiltIns(ObservablePrototype, {
  subscribe: function subscribe(observer) {
    var length = arguments.length;
    return new Subscription(isCallable(observer) ? {
      next: observer,
      error: length > 1 ? arguments[1] : undefined,
      complete: length > 2 ? arguments[2] : undefined
    } : isObject(observer) ? observer : {}, getObservableInternalState(this).subscriber);
  }
});

defineBuiltIn(ObservablePrototype, $$OBSERVABLE, function () { return this; });

$({ global: true, constructor: true, forced: true }, {
  Observable: $Observable
});

setSpecies(OBSERVABLE);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.observable.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");
var getIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js");
var getMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-method.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var $$OBSERVABLE = wellKnownSymbol('observable');

// `Observable.from` method
// https://github.com/tc39/proposal-observable
$({ target: 'Observable', stat: true, forced: true }, {
  from: function from(x) {
    var C = isConstructor(this) ? this : getBuiltIn('Observable');
    var observableMethod = getMethod(anObject(x), $$OBSERVABLE);
    if (observableMethod) {
      var observable = anObject(call(observableMethod, x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    var iterator = getIterator(x);
    return new C(function (observer) {
      iterate(iterator, function (it, stop) {
        observer.next(it);
        if (observer.closed) return stop();
      }, { IS_ITERATOR: true, INTERRUPTED: true });
      observer.complete();
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.observable.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.observable.constructor.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.observable.from.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.observable.of.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.observable.of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");

var Array = getBuiltIn('Array');

// `Observable.of` method
// https://github.com/tc39/proposal-observable
$({ target: 'Observable', stat: true, forced: true }, {
  of: function of() {
    var C = isConstructor(this) ? this : getBuiltIn('Observable');
    var length = arguments.length;
    var items = Array(length);
    var index = 0;
    while (index < length) items[index] = arguments[index++];
    return new C(function (observer) {
      for (var i = 0; i < length; i++) {
        observer.next(items[i]);
        if (observer.closed) return;
      } observer.complete();
    });
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.promise.try.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.promise.try.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.define-metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.defineMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  defineMetadata: function defineMetadata(metadataKey, metadataValue, target /* , targetKey */) {
    var targetKey = arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), targetKey);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.delete-metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var toMetadataKey = ReflectMetadataModule.toKey;
var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
var store = ReflectMetadataModule.store;

// `Reflect.deleteMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var $arrayUniqueBy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-unique-by.js");

var arrayUniqueBy = uncurryThis($arrayUniqueBy);
var concat = uncurryThis([].concat);
var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? arrayUniqueBy(concat(oKeys, pKeys)) : pKeys : oKeys;
};

// `Reflect.getMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryMetadataKeys(anObject(target), targetKey);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.get-metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

// `Reflect.getMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetMetadata(metadataKey, anObject(target), targetKey);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryOwnMetadataKeys(anObject(target), targetKey);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.get-own-metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.has-metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

// `Reflect.hasMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasMetadata(metadataKey, anObject(target), targetKey);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.has-own-metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.hasOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.reflect.metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var ReflectMetadataModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/reflect-metadata.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.metadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, key) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetadataKey(key));
    };
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.regexp.escape.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-string.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var padStart = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-pad.js")/* .start */.start);
var WHITESPACES = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/whitespaces.js");

var $Array = Array;
var $escape = RegExp.escape;
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var numberToString = uncurryThis(1.1.toString);
var join = uncurryThis([].join);
var FIRST_DIGIT_OR_ASCII = /^[0-9a-z]/i;
var SYNTAX_SOLIDUS = /^[$()*+./?[\\\]^{|}]/;
var OTHER_PUNCTUATORS_AND_WHITESPACES = RegExp('^[!"#%&\',\\-:;<=>@`~' + WHITESPACES + ']');
var exec = uncurryThis(FIRST_DIGIT_OR_ASCII.exec);

var ControlEscape = {
  '\u0009': 't',
  '\u000A': 'n',
  '\u000B': 'v',
  '\u000C': 'f',
  '\u000D': 'r'
};

var escapeChar = function (chr) {
  var hex = numberToString(charCodeAt(chr, 0), 16);
  return hex.length < 3 ? '\\x' + padStart(hex, 2, '0') : '\\u' + padStart(hex, 4, '0');
};

// Avoiding the use of polyfills of the previous iteration of this proposal
var FORCED = !$escape || $escape('ab') !== '\\x61b';

// `RegExp.escape` method
// https://github.com/tc39/proposal-regex-escaping
$({ target: 'RegExp', stat: true, forced: FORCED }, {
  escape: function escape(S) {
    aString(S);
    var length = S.length;
    var result = $Array(length);

    for (var i = 0; i < length; i++) {
      var chr = charAt(S, i);
      if (i === 0 && exec(FIRST_DIGIT_OR_ASCII, chr)) {
        result[i] = escapeChar(chr);
      } else if (hasOwn(ControlEscape, chr)) {
        result[i] = '\\' + ControlEscape[chr];
      } else if (exec(SYNTAX_SOLIDUS, chr)) {
        result[i] = '\\' + chr;
      } else if (exec(OTHER_PUNCTUATORS_AND_WHITESPACES, chr)) {
        result[i] = escapeChar(chr);
      } else {
        var charCode = charCodeAt(chr, 0);
        // single UTF-16 code unit
        if ((charCode & 0xF800) !== 0xD800) result[i] = chr;
        // unpaired surrogate
        else if (charCode >= 0xDC00 || i + 1 >= length || (charCodeAt(S, i + 1) & 0xFC00) !== 0xDC00) result[i] = escapeChar(chr);
        // surrogate pair
        else {
          result[i] = chr;
          result[++i] = charAt(S, i);
        }
      }
    }

    return join(result, '');
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.add-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var add = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js")/* .add */.add);

// `Set.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  addAll: function addAll(/* ...elements */) {
    var set = aSet(this);
    for (var k = 0, len = arguments.length; k < len; k++) {
      add(set, arguments[k]);
    } return set;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.delete-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var remove = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js")/* .remove */.remove);

// `Set.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aSet(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.difference.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js");
var $difference = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-difference.js");

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  difference: function difference(other) {
    return call($difference, this, toSetLike(other));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.every.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");

// `Set.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(set, function (value) {
      if (!boundFunction(value, value, set)) return false;
    }, true) !== false;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.filter.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;

// `Set.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new Set();
    iterate(set, function (value) {
      if (boundFunction(value, value, set)) add(newSet, value);
    });
    return newSet;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.find.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");

// `Set.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(set, function (value) {
      if (boundFunction(value, value, set)) return { value: value };
    }, true);
    return result && result.value;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var createCollectionFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-from.js");

// `Set.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
$({ target: 'Set', stat: true, forced: true }, {
  from: createCollectionFrom(SetHelpers.Set, SetHelpers.add, false)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.intersection.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js");
var $intersection = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-intersection.js");

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  intersection: function intersection(other) {
    return call($intersection, this, toSetLike(other));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.is-disjoint-from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js");
var $isDisjointFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-disjoint-from.js");

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isDisjointFrom: function isDisjointFrom(other) {
    return call($isDisjointFrom, this, toSetLike(other));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.is-subset-of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js");
var $isSubsetOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-subset-of.js");

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSubsetOf: function isSubsetOf(other) {
    return call($isSubsetOf, this, toSetLike(other));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.is-superset-of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js");
var $isSupersetOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-is-superset-of.js");

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSupersetOf: function isSupersetOf(other) {
    return call($isSupersetOf, this, toSetLike(other));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.join.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");

var arrayJoin = uncurryThis([].join);
var push = uncurryThis([].push);

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  join: function join(separator) {
    var set = aSet(this);
    var sep = separator === undefined ? ',' : toString(separator);
    var array = [];
    iterate(set, function (value) {
      push(array, value);
    });
    return arrayJoin(array, sep);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.map.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;

// `Set.prototype.map` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  map: function map(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new Set();
    iterate(set, function (value) {
      add(newSet, boundFunction(value, value, set));
    });
    return newSet;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var createCollectionOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-of.js");

// `Set.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
$({ target: 'Set', stat: true, forced: true }, {
  of: createCollectionOf(SetHelpers.Set, SetHelpers.add, false)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.reduce.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");

var $TypeError = TypeError;

// `Set.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var set = aSet(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(set, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, value, set);
      }
    });
    if (noInitial) throw new $TypeError('Reduce of empty set with no initial value');
    return accumulator;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.some.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(set, function (value) {
      if (boundFunction(value, value, set)) return true;
    }, true) === true;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.symmetric-difference.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js");
var $symmetricDifference = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-symmetric-difference.js");

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  symmetricDifference: function symmetricDifference(other) {
    return call($symmetricDifference, this, toSetLike(other));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.set.union.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-set-like.js");
var $union = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-union.js");

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  union: function union(other) {
    return call($union, this, toSetLike(other));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.string.at.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var charAt = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-multibyte.js")/* .charAt */.charAt);
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");

// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
$({ target: 'String', proto: true, forced: true }, {
  at: function at(index) {
    var S = toString(requireObjectCoercible(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : charAt(S, k);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.string.code-points.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var requireObjectCoercible = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var StringMultibyteModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-multibyte.js");

var codeAt = StringMultibyteModule.codeAt;
var charAt = StringMultibyteModule.charAt;
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// TODO: unify with String#@@iterator
var $StringIterator = createIteratorConstructor(function StringIterator(string) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: string,
    index: 0
  });
}, 'String', function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject({ codePoint: codeAt(point, 0), position: index }, false);
});

// `String.prototype.codePoints` method
// https://github.com/tc39/proposal-string-prototype-codepoints
$({ target: 'String', proto: true, forced: true }, {
  codePoints: function codePoints() {
    return new $StringIterator(toString(requireObjectCoercible(this)));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.string.cooked.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var cooked = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-cooked.js");

// `String.cooked` method
// https://github.com/tc39/proposal-string-cooked
$({ target: 'String', stat: true, forced: true }, {
  cooked: cooked
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.string.dedent.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var FREEZING = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/freezing.js");
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var makeBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/make-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var apply = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-apply.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-object.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var createArrayFromList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");
var WeakMapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-helpers.js");
var cooked = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-cooked.js");
var parse = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-parse.js");
var whitespaces = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/whitespaces.js");

var DedentMap = new WeakMapHelpers.WeakMap();
var weakMapGet = WeakMapHelpers.get;
var weakMapHas = WeakMapHelpers.has;
var weakMapSet = WeakMapHelpers.set;

var $Array = Array;
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = Object.freeze || Object;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = Object.isFrozen;
var min = Math.min;
var charAt = uncurryThis(''.charAt);
var stringSlice = uncurryThis(''.slice);
var split = uncurryThis(''.split);
var exec = uncurryThis(/./.exec);

var NEW_LINE = /([\n\u2028\u2029]|\r\n?)/g;
var LEADING_WHITESPACE = RegExp('^[' + whitespaces + ']*');
var NON_WHITESPACE = RegExp('[^' + whitespaces + ']');
var INVALID_TAG = 'Invalid tag';
var INVALID_OPENING_LINE = 'Invalid opening line';
var INVALID_CLOSING_LINE = 'Invalid closing line';

var dedentTemplateStringsArray = function (template) {
  var rawInput = template.raw;
  // https://github.com/tc39/proposal-string-dedent/issues/75
  if (FREEZING && !isFrozen(rawInput)) throw new $TypeError('Raw template should be frozen');
  if (weakMapHas(DedentMap, rawInput)) return weakMapGet(DedentMap, rawInput);
  var raw = dedentStringsArray(rawInput);
  var cookedArr = cookStrings(raw);
  defineProperty(cookedArr, 'raw', {
    value: freeze(raw)
  });
  freeze(cookedArr);
  weakMapSet(DedentMap, rawInput, cookedArr);
  return cookedArr;
};

var dedentStringsArray = function (template) {
  var t = toObject(template);
  var length = lengthOfArrayLike(t);
  var blocks = $Array(length);
  var dedented = $Array(length);
  var i = 0;
  var lines, common, quasi, k;

  if (!length) throw new $TypeError(INVALID_TAG);

  for (; i < length; i++) {
    var element = t[i];
    if (typeof element == 'string') blocks[i] = split(element, NEW_LINE);
    else throw new $TypeError(INVALID_TAG);
  }

  for (i = 0; i < length; i++) {
    var lastSplit = i + 1 === length;
    lines = blocks[i];
    if (i === 0) {
      if (lines.length === 1 || lines[0].length > 0) {
        throw new $TypeError(INVALID_OPENING_LINE);
      }
      lines[1] = '';
    }
    if (lastSplit) {
      if (lines.length === 1 || exec(NON_WHITESPACE, lines[lines.length - 1])) {
        throw new $TypeError(INVALID_CLOSING_LINE);
      }
      lines[lines.length - 2] = '';
      lines[lines.length - 1] = '';
    }
    // eslint-disable-next-line sonarjs/no-redundant-assignments -- false positive, https://github.com/SonarSource/SonarJS/issues/4767
    for (var j = 2; j < lines.length; j += 2) {
      var text = lines[j];
      var lineContainsTemplateExpression = j + 1 === lines.length && !lastSplit;
      var leading = exec(LEADING_WHITESPACE, text)[0];
      if (!lineContainsTemplateExpression && leading.length === text.length) {
        lines[j] = '';
        continue;
      }
      common = commonLeadingIndentation(leading, common);
    }
  }

  var count = common ? common.length : 0;

  for (i = 0; i < length; i++) {
    lines = blocks[i];
    quasi = lines[0];
    k = 1;
    for (; k < lines.length; k += 2) {
      quasi += lines[k] + stringSlice(lines[k + 1], count);
    }
    dedented[i] = quasi;
  }

  return dedented;
};

var commonLeadingIndentation = function (a, b) {
  if (b === undefined || a === b) return a;
  var i = 0;
  for (var len = min(a.length, b.length); i < len; i++) {
    if (charAt(a, i) !== charAt(b, i)) break;
  }
  return stringSlice(a, 0, i);
};

var cookStrings = function (raw) {
  var i = 0;
  var length = raw.length;
  var result = $Array(length);
  for (; i < length; i++) {
    result[i] = parse(raw[i]);
  } return result;
};

var makeDedentTag = function (tag) {
  return makeBuiltIn(function (template /* , ...substitutions */) {
    var args = createArrayFromList(arguments);
    args[0] = dedentTemplateStringsArray(anObject(template));
    return apply(tag, this, args);
  }, '');
};

var cookedDedentTag = makeDedentTag(cooked);

// `String.dedent` method
// https://github.com/tc39/proposal-string-dedent
$({ target: 'String', stat: true, forced: true }, {
  dedent: function dedent(templateOrFn /* , ...substitutions */) {
    anObject(templateOrFn);
    if (isCallable(templateOrFn)) return makeDedentTag(templateOrFn);
    return apply(cookedDedentTag, this, arguments);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.suppressed-error.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var isPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-is-prototype-of.js");
var getPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-set-prototype-of.js");
var copyConstructorProperties = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/copy-constructor-properties.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var installErrorStack = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-install.js");
var normalizeStringArgument = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/normalize-string-argument.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var NativeSuppressedError = globalThis.SuppressedError;
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;

// https://github.com/oven-sh/bun/issues/9282
var WRONG_ARITY = !!NativeSuppressedError && NativeSuppressedError.length !== 3;

// https://github.com/oven-sh/bun/issues/9283
var EXTRA_ARGS_SUPPORT = !!NativeSuppressedError && fails(function () {
  return new NativeSuppressedError(1, 2, 3, { cause: 4 }).cause === 4;
});

var PATCH = WRONG_ARITY || EXTRA_ARGS_SUPPORT;

var $SuppressedError = function SuppressedError(error, suppressed, message) {
  var isInstance = isPrototypeOf(SuppressedErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = PATCH && (!isInstance || getPrototypeOf(this) === SuppressedErrorPrototype)
      ? new NativeSuppressedError()
      : setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : SuppressedErrorPrototype);
  } else {
    that = isInstance ? this : create(SuppressedErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  installErrorStack(that, $SuppressedError, that.stack, 1);
  createNonEnumerableProperty(that, 'error', error);
  createNonEnumerableProperty(that, 'suppressed', suppressed);
  return that;
};

if (setPrototypeOf) setPrototypeOf($SuppressedError, $Error);
else copyConstructorProperties($SuppressedError, $Error, { name: true });

var SuppressedErrorPrototype = $SuppressedError.prototype = PATCH ? NativeSuppressedError.prototype : create($Error.prototype, {
  constructor: createPropertyDescriptor(1, $SuppressedError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'SuppressedError')
});

if (PATCH && !IS_PURE) SuppressedErrorPrototype.constructor = $SuppressedError;

// `SuppressedError` constructor
// https://github.com/tc39/proposal-explicit-resource-management
$({ global: true, constructor: true, arity: 3, forced: PATCH }, {
  SuppressedError: $SuppressedError
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.async-dispose.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js")/* .f */.f);

var Symbol = globalThis.Symbol;

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-async-explicit-resource-management
defineWellKnownSymbol('asyncDispose');

if (Symbol) {
  var descriptor = getOwnPropertyDescriptor(Symbol, 'asyncDispose');
  // workaround of NodeJS 20.4 bug
  // https://github.com/nodejs/node/issues/48699
  // and incorrect descriptor from some transpilers and userland helpers
  if (descriptor.enumerable && descriptor.configurable && descriptor.writable) {
    defineProperty(Symbol, 'asyncDispose', { value: descriptor.value, enumerable: false, configurable: false, writable: false });
  }
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.custom-matcher.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.customMatcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('customMatcher');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.dispose.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-get-own-property-descriptor.js")/* .f */.f);

var Symbol = globalThis.Symbol;

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
defineWellKnownSymbol('dispose');

if (Symbol) {
  var descriptor = getOwnPropertyDescriptor(Symbol, 'dispose');
  // workaround of NodeJS 20.4 bug
  // https://github.com/nodejs/node/issues/48699
  // and incorrect descriptor from some transpilers and userland helpers
  if (descriptor.enumerable && descriptor.configurable && descriptor.writable) {
    defineProperty(Symbol, 'dispose', { value: descriptor.value, enumerable: false, configurable: false, writable: false });
  }
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.is-registered-symbol.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isRegisteredSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-is-registered.js");

// `Symbol.isRegisteredSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
$({ target: 'Symbol', stat: true }, {
  isRegisteredSymbol: isRegisteredSymbol
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.is-registered.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isRegisteredSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-is-registered.js");

// `Symbol.isRegistered` method
// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
$({ target: 'Symbol', stat: true, name: 'isRegisteredSymbol' }, {
  isRegistered: isRegisteredSymbol
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.is-well-known-symbol.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-is-well-known.js");

// `Symbol.isWellKnownSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
$({ target: 'Symbol', stat: true, forced: true }, {
  isWellKnownSymbol: isWellKnownSymbol
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.is-well-known.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var isWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/symbol-is-well-known.js");

// `Symbol.isWellKnown` method
// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
$({ target: 'Symbol', stat: true, name: 'isWellKnownSymbol', forced: true }, {
  isWellKnown: isWellKnownSymbol
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.matcher.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('matcher');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.metadata-key.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.metadataKey` well-known symbol
// https://github.com/tc39/proposal-decorator-metadata
defineWellKnownSymbol('metadataKey');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.metadata.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol('metadata');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.observable.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.pattern-match.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.symbol.replace-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol-define.js");

defineWellKnownSymbol('replaceAll');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.typed-array.filter-out.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var $filterReject = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js")/* .filterReject */.filterReject);
var fromSameTypeAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-from-same-type-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
exportTypedArrayMethod('filterOut', function filterOut(callbackfn /* , thisArg */) {
  var list = $filterReject(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
}, true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.typed-array.filter-reject.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var $filterReject = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-iteration.js")/* .filterReject */.filterReject);
var fromSameTypeAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/typed-array-from-same-type-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
exportTypedArrayMethod('filterReject', function filterReject(callbackfn /* , thisArg */) {
  var list = $filterReject(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
}, true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.typed-array.from-async.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var aConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-constructor.js");
var arrayFromAsync = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-async.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod;

// `%TypedArray%.fromAsync` method
// https://github.com/tc39/proposal-array-from-async
exportTypedArrayStaticMethod('fromAsync', function fromAsync(asyncItems /* , mapfn = undefined, thisArg = undefined */) {
  var C = this;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var thisArg = argumentsLength > 2 ? arguments[2] : undefined;
  return new (getBuiltIn('Promise'))(function (resolve) {
    aConstructor(C);
    resolve(arrayFromAsync(asyncItems, mapfn, thisArg));
  }).then(function (list) {
    return arrayFromConstructorAndList(aTypedArrayConstructor(C), list);
  });
}, true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.typed-array.group-by.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var $group = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-group.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
exportTypedArrayMethod('groupBy', function groupBy(callbackfn /* , thisArg */) {
  var thisArg = arguments.length > 1 ? arguments[1] : undefined;
  return $group(aTypedArray(this), callbackfn, thisArg, getTypedArrayConstructor);
}, true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.typed-array.to-spliced.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var isBigIntArray = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-big-int-array.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-absolute-index.js");
var toBigInt = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-big-int.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-integer-or-infinity.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var max = Math.max;
var min = Math.min;

// some early implementations, like WebKit, does not follow the final semantic
var PROPER_ORDER = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Int8Array([1]);

  var spliced = array.toSpliced(1, 0, {
    valueOf: function () {
      array[0] = 2;
      return 3;
    }
  });

  return spliced[0] !== 2 || spliced[1] !== 3;
});

// `%TypedArray%.prototype.toSpliced` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toSpliced
exportTypedArrayMethod('toSpliced', function toSpliced(start, deleteCount /* , ...items */) {
  var O = aTypedArray(this);
  var C = getTypedArrayConstructor(O);
  var len = lengthOfArrayLike(O);
  var actualStart = toAbsoluteIndex(start, len);
  var argumentsLength = arguments.length;
  var k = 0;
  var insertCount, actualDeleteCount, thisIsBigIntArray, convertedItems, value, newLen, A;
  if (argumentsLength === 0) {
    insertCount = actualDeleteCount = 0;
  } else if (argumentsLength === 1) {
    insertCount = 0;
    actualDeleteCount = len - actualStart;
  } else {
    actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    insertCount = argumentsLength - 2;
    if (insertCount) {
      convertedItems = new C(insertCount);
      thisIsBigIntArray = isBigIntArray(convertedItems);
      for (var i = 2; i < argumentsLength; i++) {
        value = arguments[i];
        // FF30- typed arrays doesn't properly convert objects to typed array values
        convertedItems[i - 2] = thisIsBigIntArray ? toBigInt(value) : +value;
      }
    }
  }
  newLen = len + insertCount - actualDeleteCount;
  A = new C(newLen);

  for (; k < actualStart; k++) A[k] = O[k];
  for (; k < actualStart + insertCount; k++) A[k] = convertedItems[k - actualStart];
  for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

  return A;
}, !PROPER_ORDER);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.typed-array.unique-by.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-view-core.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");
var $arrayUniqueBy = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-unique-by.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var arrayUniqueBy = uncurryThis($arrayUniqueBy);

// `%TypedArray%.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
exportTypedArrayMethod('uniqueBy', function uniqueBy(resolver) {
  aTypedArray(this);
  return arrayFromConstructorAndList(getTypedArrayConstructor(this), arrayUniqueBy(this, resolver));
}, true);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.uint8-array.from-base64.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from-constructor-and-list.js");
var $fromBase64 = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uint8-from-base64.js");

var Uint8Array = globalThis.Uint8Array;

// `Uint8Array.fromBase64` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', stat: true }, {
  fromBase64: function fromBase64(string /* , options */) {
    var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : undefined, null, 0x1FFFFFFFFFFFFF);
    return arrayFromConstructorAndList(Uint8Array, result.bytes);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.uint8-array.from-hex.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var aString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-string.js");
var $fromHex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uint8-from-hex.js");

// `Uint8Array.fromHex` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (globalThis.Uint8Array) $({ target: 'Uint8Array', stat: true }, {
  fromHex: function fromHex(string) {
    return $fromHex(aString(string)).bytes;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.uint8-array.set-from-base64.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var $fromBase64 = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uint8-from-base64.js");
var anUint8Array = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-uint8-array.js");

var Uint8Array = globalThis.Uint8Array;

// `Uint8Array.prototype.setFromBase64` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', proto: true }, {
  setFromBase64: function setFromBase64(string /* , options */) {
    anUint8Array(this);

    var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : undefined, this, this.length);

    return { read: result.read, written: result.written };
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.uint8-array.set-from-hex.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var aString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-string.js");
var anUint8Array = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-uint8-array.js");
var notDetached = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-not-detached.js");
var $fromHex = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uint8-from-hex.js");

// `Uint8Array.prototype.setFromHex` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (globalThis.Uint8Array) $({ target: 'Uint8Array', proto: true }, {
  setFromHex: function setFromHex(string) {
    anUint8Array(this);
    aString(string);
    notDetached(this.buffer);
    var read = $fromHex(string, this).read;
    return { read: read, written: read / 2 };
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.uint8-array.to-base64.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var anObjectOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object-or-undefined.js");
var anUint8Array = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-uint8-array.js");
var notDetached = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-not-detached.js");
var base64Map = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/base64-map.js");
var getAlphabetOption = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-alphabet-option.js");

var base64Alphabet = base64Map.i2c;
var base64UrlAlphabet = base64Map.i2cUrl;

var charAt = uncurryThis(''.charAt);

// `Uint8Array.prototype.toBase64` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (globalThis.Uint8Array) $({ target: 'Uint8Array', proto: true }, {
  toBase64: function toBase64(/* options */) {
    var array = anUint8Array(this);
    var options = arguments.length ? anObjectOrUndefined(arguments[0]) : undefined;
    var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
    var omitPadding = !!options && !!options.omitPadding;
    notDetached(this.buffer);

    var result = '';
    var i = 0;
    var length = array.length;
    var triplet;

    var at = function (shift) {
      return charAt(alphabet, (triplet >> (6 * shift)) & 63);
    };

    for (; i + 2 < length; i += 3) {
      triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
      result += at(3) + at(2) + at(1) + at(0);
    }
    if (i + 2 === length) {
      triplet = (array[i] << 16) + (array[i + 1] << 8);
      result += at(3) + at(2) + at(1) + (omitPadding ? '' : '=');
    } else if (i + 1 === length) {
      triplet = array[i] << 16;
      result += at(3) + at(2) + (omitPadding ? '' : '==');
    }

    return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.uint8-array.to-hex.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var anUint8Array = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-uint8-array.js");
var notDetached = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-buffer-not-detached.js");

var numberToString = uncurryThis(1.0.toString);

// `Uint8Array.prototype.toHex` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (globalThis.Uint8Array) $({ target: 'Uint8Array', proto: true }, {
  toHex: function toHex() {
    anUint8Array(this);
    notDetached(this.buffer);
    var result = '';
    for (var i = 0, length = this.length; i < length; i++) {
      var hex = numberToString(this[i], 16);
      result += hex.length === 1 ? '0' + hex : hex;
    }
    return result;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-map.delete-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aWeakMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-weak-map.js");
var remove = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-helpers.js")/* .remove */.remove);

// `WeakMap.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aWeakMap(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-map.emplace.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aWeakMap = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-weak-map.js");
var WeakMapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-helpers.js");

var get = WeakMapHelpers.get;
var has = WeakMapHelpers.has;
var set = WeakMapHelpers.set;

// `WeakMap.prototype.emplace` method
// https://github.com/tc39/proposal-upsert
$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
  emplace: function emplace(key, handler) {
    var map = aWeakMap(this);
    var value, inserted;
    if (has(map, key)) {
      value = get(map, key);
      if ('update' in handler) {
        value = handler.update(value, key, map);
        set(map, key, value);
      } return value;
    }
    inserted = handler.insert(key, map);
    set(map, key, inserted);
    return inserted;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-map.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var WeakMapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-helpers.js");
var createCollectionFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-from.js");

// `WeakMap.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
$({ target: 'WeakMap', stat: true, forced: true }, {
  from: createCollectionFrom(WeakMapHelpers.WeakMap, WeakMapHelpers.set, true)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-map.of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var WeakMapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-map-helpers.js");
var createCollectionOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-of.js");

// `WeakMap.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
$({ target: 'WeakMap', stat: true, forced: true }, {
  of: createCollectionOf(WeakMapHelpers.WeakMap, WeakMapHelpers.set, true)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-map.upsert.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var upsert = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-upsert.js");

// `WeakMap.prototype.upsert` method (replaced by `WeakMap.prototype.emplace`)
// https://github.com/tc39/proposal-upsert
$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
  upsert: upsert
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-set.add-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aWeakSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-weak-set.js");
var add = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-set-helpers.js")/* .add */.add);

// `WeakSet.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
  addAll: function addAll(/* ...elements */) {
    var set = aWeakSet(this);
    for (var k = 0, len = arguments.length; k < len; k++) {
      add(set, arguments[k]);
    } return set;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-set.delete-all.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var aWeakSet = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-weak-set.js");
var remove = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-set-helpers.js")/* .remove */.remove);

// `WeakSet.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aWeakSet(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-set.from.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var WeakSetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-set-helpers.js");
var createCollectionFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-from.js");

// `WeakSet.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
$({ target: 'WeakSet', stat: true, forced: true }, {
  from: createCollectionFrom(WeakSetHelpers.WeakSet, WeakSetHelpers.add, false)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/esnext.weak-set.of.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var WeakSetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/weak-set-helpers.js");
var createCollectionOf = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/collection-of.js");

// `WeakSet.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
$({ target: 'WeakSet', stat: true, forced: true }, {
  of: createCollectionOf(WeakSetHelpers.WeakSet, WeakSetHelpers.add, false)
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.atob.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var c2i = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/base64-map.js")/* .c2i */.c2i);

var disallowed = /[^\d+/a-z]/i;
var whitespaces = /[\t\n\f\r ]+/g;
var finalEq = /[=]{1,2}$/;

var $atob = getBuiltIn('atob');
var fromCharCode = String.fromCharCode;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var exec = uncurryThis(disallowed.exec);

var BASIC = !!$atob && !fails(function () {
  return $atob('aGk=') !== 'hi';
});

var NO_SPACES_IGNORE = BASIC && fails(function () {
  return $atob(' ') !== '';
});

var NO_ENCODING_CHECK = BASIC && !fails(function () {
  $atob('a');
});

var NO_ARG_RECEIVING_CHECK = BASIC && !fails(function () {
  $atob();
});

var WRONG_ARITY = BASIC && $atob.length !== 1;

var FORCED = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;

// `atob` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
$({ global: true, bind: true, enumerable: true, forced: FORCED }, {
  atob: function atob(data) {
    validateArgumentsLength(arguments.length, 1);
    // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
    if (BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call($atob, globalThis, data);
    var string = replace(toString(data), whitespaces, '');
    var output = '';
    var position = 0;
    var bc = 0;
    var length, chr, bs;
    if (string.length % 4 === 0) {
      string = replace(string, finalEq, '');
    }
    length = string.length;
    if (length % 4 === 1 || exec(disallowed, string)) {
      throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
    }
    while (position < length) {
      chr = charAt(string, position++);
      bs = bc % 4 ? bs * 64 + c2i[chr] : c2i[chr];
      if (bc++ % 4) output += fromCharCode(255 & bs >> (-2 * bc & 6));
    } return output;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.btoa.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var i2c = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/base64-map.js")/* .i2c */.i2c);

var $btoa = getBuiltIn('btoa');
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);

var BASIC = !!$btoa && !fails(function () {
  return $btoa('hi') !== 'aGk=';
});

var NO_ARG_RECEIVING_CHECK = BASIC && !fails(function () {
  $btoa();
});

var WRONG_ARG_CONVERSION = BASIC && fails(function () {
  return $btoa(null) !== 'bnVsbA==';
});

var WRONG_ARITY = BASIC && $btoa.length !== 1;

// `btoa` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa
$({ global: true, bind: true, enumerable: true, forced: !BASIC || NO_ARG_RECEIVING_CHECK || WRONG_ARG_CONVERSION || WRONG_ARITY }, {
  btoa: function btoa(data) {
    validateArgumentsLength(arguments.length, 1);
    // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
    if (BASIC) return call($btoa, globalThis, toString(data));
    var string = toString(data);
    var output = '';
    var position = 0;
    var map = i2c;
    var block, charCode;
    while (charAt(string, position) || (map = '=', position % 1)) {
      charCode = charCodeAt(string, position += 3 / 4);
      if (charCode > 0xFF) {
        throw new (getBuiltIn('DOMException'))('The string contains characters outside of the Latin1 range', 'InvalidCharacterError');
      }
      block = block << 8 | charCode;
      output += charAt(map, 63 & block >> 8 - position % 1 * 8);
    } return output;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.clear-immediate.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var clearImmediate = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/task.js")/* .clear */.clear);

// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({ global: true, bind: true, enumerable: true, forced: globalThis.clearImmediate !== clearImmediate }, {
  clearImmediate: clearImmediate
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.dom-collections.for-each.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var DOMIterables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.dom-collections.iterator.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var DOMIterables = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.dom-exception.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var getBuiltInNodeModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in-node-module.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var errorToString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-to-string.js");
var normalizeStringArgument = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/normalize-string-argument.js");
var DOMExceptionConstants = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-exception-constants.js");
var clearErrorStack = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-clear.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var DOM_EXCEPTION = 'DOMException';
var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
var Error = getBuiltIn('Error');
// NodeJS < 17.0 does not expose `DOMException` to global
var NativeDOMException = getBuiltIn(DOM_EXCEPTION) || (function () {
  try {
    // NodeJS < 15.0 does not expose `MessageChannel` to global
    var MessageChannel = getBuiltIn('MessageChannel') || getBuiltInNodeModule('worker_threads').MessageChannel;
    // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
    new MessageChannel().port1.postMessage(new WeakMap());
  } catch (error) {
    if (error.name === DATA_CLONE_ERR && error.code === 25) return error.constructor;
  }
})();
var NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype;
var ErrorPrototype = Error.prototype;
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION);
var HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);

var codeFor = function (name) {
  return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
};

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var code = codeFor(name);
  setInternalState(this, {
    type: DOM_EXCEPTION,
    name: name,
    message: message,
    code: code
  });
  if (!DESCRIPTORS) {
    this.name = name;
    this.message = message;
    this.code = code;
  }
  if (HAS_STACK) {
    var error = new Error(message);
    error.name = DOM_EXCEPTION;
    defineProperty(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  }
};

var DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype);

var createGetterDescriptor = function (get) {
  return { enumerable: true, configurable: true, get: get };
};

var getterFor = function (key) {
  return createGetterDescriptor(function () {
    return getInternalState(this)[key];
  });
};

if (DESCRIPTORS) {
  // `DOMException.prototype.code` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'code', getterFor('code'));
  // `DOMException.prototype.message` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'message', getterFor('message'));
  // `DOMException.prototype.name` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'name', getterFor('name'));
}

defineProperty(DOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, $DOMException));

// FF36- DOMException is a function, but can't be constructed
var INCORRECT_CONSTRUCTOR = fails(function () {
  return !(new NativeDOMException() instanceof Error);
});

// Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function () {
  return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== '2: 1';
});

// Deno 1.6.3- DOMException.prototype.code just missed
var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function () {
  return new NativeDOMException(1, 'DataCloneError').code !== 25;
});

// Deno 1.6.3- DOMException constants just missed
var MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR
  || NativeDOMException[DATA_CLONE_ERR] !== 25
  || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;

var FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;

// `DOMException` constructor
// https://webidl.spec.whatwg.org/#idl-DOMException
$({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, {
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException)) {
  defineBuiltIn(PolyfilledDOMExceptionPrototype, 'toString', errorToString);
}

if (INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException) {
  defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, 'code', createGetterDescriptor(function () {
    return codeFor(anObject(this).name);
  }));
}

// `DOMException` constants
for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
  var constant = DOMExceptionConstants[key];
  var constantName = constant.s;
  var descriptor = createPropertyDescriptor(6, constant.c);
  if (!hasOwn(PolyfilledDOMException, constantName)) {
    defineProperty(PolyfilledDOMException, constantName, descriptor);
  }
  if (!hasOwn(PolyfilledDOMExceptionPrototype, constantName)) {
    defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor);
  }
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.dom-exception.stack.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var defineProperty = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-define-property.js")/* .f */.f);
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var inheritIfRequired = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/inherit-if-required.js");
var normalizeStringArgument = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/normalize-string-argument.js");
var DOMExceptionConstants = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/dom-exception-constants.js");
var clearErrorStack = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-clear.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.dom-exception.to-string-tag.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");

var DOM_EXCEPTION = 'DOMException';

// `DOMException.prototype[@@toStringTag]` property
setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.immediate.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/web.clear-immediate.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/web.set-immediate.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.queue-microtask.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var microtask = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/microtask.js");
var aCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/a-callable.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");

// Bun ~ 1.0.30 bug
// https://github.com/oven-sh/bun/issues/9249
var WRONG_ARITY = fails(function () {
  // getOwnPropertyDescriptor for prevent experimental warning in Node 11
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  return DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, 'queueMicrotask').value.length !== 1;
});

// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
$({ global: true, enumerable: true, dontCallGetSet: true, forced: WRONG_ARITY }, {
  queueMicrotask: function queueMicrotask(fn) {
    validateArgumentsLength(arguments.length, 1);
    microtask(aCallable(fn));
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.self.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var INCORRECT_VALUE = globalThis.self !== globalThis;

// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
try {
  if (DESCRIPTORS) {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var descriptor = Object.getOwnPropertyDescriptor(globalThis, 'self');
    // some engines have `self`, but with incorrect descriptor
    // https://github.com/denoland/deno/issues/15765
    if (INCORRECT_VALUE || !descriptor || !descriptor.get || !descriptor.enumerable) {
      defineBuiltInAccessor(globalThis, 'self', {
        get: function self() {
          return globalThis;
        },
        set: function self(value) {
          if (this !== globalThis) throw new $TypeError('Illegal invocation');
          defineProperty(globalThis, 'self', {
            value: value,
            writable: true,
            configurable: true,
            enumerable: true
          });
        },
        configurable: true,
        enumerable: true
      });
    }
  } else $({ global: true, simple: true, forced: INCORRECT_VALUE }, {
    self: globalThis
  });
} catch (error) { /* empty */ }


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.set-immediate.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var setTask = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/task.js")/* .set */.set);
var schedulersFix = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/schedulers-fix.js");

// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;

// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({ global: true, bind: true, enumerable: true, forced: globalThis.setImmediate !== setImmediate }, {
  setImmediate: setImmediate
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.structured-clone.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-pure.js");
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var uid = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/uid.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var isConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-constructor.js");
var isNullOrUndefined = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-symbol.js");
var iterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterate.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var createProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-non-enumerable-property.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/length-of-array-like.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var getRegExpFlags = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/regexp-get-flags.js");
var MapHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/map-helpers.js");
var SetHelpers = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-helpers.js");
var setIterate = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-iterate.js");
var detachTransferable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/detach-transferable.js");
var ERROR_STACK_INSTALLABLE = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/error-stack-installable.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/structured-clone-proper-transfer.js");

var Object = globalThis.Object;
var Array = globalThis.Array;
var Date = globalThis.Date;
var Error = globalThis.Error;
var TypeError = globalThis.TypeError;
var PerformanceMark = globalThis.PerformanceMark;
var DOMException = getBuiltIn('DOMException');
var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set = SetHelpers.Set;
var setAdd = SetHelpers.add;
var setHas = SetHelpers.has;
var objectKeys = getBuiltIn('Object', 'keys');
var push = uncurryThis([].push);
var thisBooleanValue = uncurryThis(true.valueOf);
var thisNumberValue = uncurryThis(1.0.valueOf);
var thisStringValue = uncurryThis(''.valueOf);
var thisTimeValue = uncurryThis(Date.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';

var checkBasicSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var set1 = new globalThis.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object(7));
    return set2 === set1 || !set2.has(7) || !isObject(number) || +number !== 7;
  }) && structuredCloneImplementation;
};

var checkErrorsCloning = function (structuredCloneImplementation, $Error) {
  return !fails(function () {
    var error = new $Error();
    var test = structuredCloneImplementation({ a: error, b: error });
    return !(test && test.a === test.b && test.a instanceof $Error && test.a.stack === error.stack);
  });
};

// https://github.com/whatwg/html/pull/5749
var checkNewErrorsCloningSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var test = structuredCloneImplementation(new globalThis.AggregateError([1], PERFORMANCE_MARK, { cause: 3 }));
    return test.name !== 'AggregateError' || test.errors[0] !== 1 || test.message !== PERFORMANCE_MARK || test.cause !== 3;
  });
};

// FF94+, Safari 15.4+, Chrome 98+, NodeJS 17.0+, Deno 1.13+
// FF<103 and Safari implementations can't clone errors
// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
// FF103 can clone errors, but `.stack` of clone is an empty string
// https://bugzilla.mozilla.org/show_bug.cgi?id=1778762
// FF104+ fixed it on usual errors, but not on DOMExceptions
// https://bugzilla.mozilla.org/show_bug.cgi?id=1777321
// Chrome <102 returns `null` if cloned object contains multiple references to one error
// https://bugs.chromium.org/p/v8/issues/detail?id=12542
// NodeJS implementation can't clone DOMExceptions
// https://github.com/nodejs/node/issues/41038
// only FF103+ supports new (html/5749) error cloning semantic
var nativeStructuredClone = globalThis.structuredClone;

var FORCED_REPLACEMENT = IS_PURE
  || !checkErrorsCloning(nativeStructuredClone, Error)
  || !checkErrorsCloning(nativeStructuredClone, DOMException)
  || !checkNewErrorsCloningSemantic(nativeStructuredClone);

// Chrome 82+, Safari 14.1+, Deno 1.11+
// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
// Chrome returns `null` if cloned object contains multiple references to one error
// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
// Safari implementation can't clone errors
// Deno 1.2-1.10 implementations too naive
// NodeJS 16.0+ does not have `PerformanceMark` constructor
// NodeJS <17.2 structured cloning implementation from `performance.mark` is too naive
// and can't clone, for example, `RegExp` or some boxed primitives
// https://github.com/nodejs/node/issues/40840
// no one of those implementations supports new (html/5749) error cloning semantic
var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
  return new PerformanceMark(PERFORMANCE_MARK, { detail: value }).detail;
});

var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

var throwUncloneable = function (type) {
  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
};

var throwUnpolyfillable = function (type, action) {
  throw new DOMException((action || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
};

var tryNativeRestrictedStructuredClone = function (value, type) {
  if (!nativeRestrictedStructuredClone) throwUnpolyfillable(type);
  return nativeRestrictedStructuredClone(value);
};

var createDataTransfer = function () {
  var dataTransfer;
  try {
    dataTransfer = new globalThis.DataTransfer();
  } catch (error) {
    try {
      dataTransfer = new globalThis.ClipboardEvent('').clipboardData;
    } catch (error2) { /* empty */ }
  }
  return dataTransfer && dataTransfer.items && dataTransfer.files ? dataTransfer : null;
};

var cloneBuffer = function (value, map, $type) {
  if (mapHas(map, value)) return mapGet(map, value);

  var type = $type || classof(value);
  var clone, length, options, source, target, i;

  if (type === 'SharedArrayBuffer') {
    if (nativeRestrictedStructuredClone) clone = nativeRestrictedStructuredClone(value);
    // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
    else clone = value;
  } else {
    var DataView = globalThis.DataView;

    // `ArrayBuffer#slice` is not available in IE10
    // `ArrayBuffer#slice` and `DataView` are not available in old FF
    if (!DataView && !isCallable(value.slice)) throwUnpolyfillable('ArrayBuffer');
    // detached buffers throws in `DataView` and `.slice`
    try {
      if (isCallable(value.slice) && !value.resizable) {
        clone = value.slice(0);
      } else {
        length = value.byteLength;
        options = 'maxByteLength' in value ? { maxByteLength: value.maxByteLength } : undefined;
        // eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- safe
        clone = new ArrayBuffer(length, options);
        source = new DataView(value);
        target = new DataView(clone);
        for (i = 0; i < length; i++) {
          target.setUint8(i, source.getUint8(i));
        }
      }
    } catch (error) {
      throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
    }
  }

  mapSet(map, value, clone);

  return clone;
};

var cloneView = function (value, type, offset, length, map) {
  var C = globalThis[type];
  // in some old engines like Safari 9, typeof C is 'object'
  // on Uint8ClampedArray or some other constructors
  if (!isObject(C)) throwUnpolyfillable(type);
  return new C(cloneBuffer(value.buffer, map), offset, length);
};

var structuredCloneInternal = function (value, map) {
  if (isSymbol(value)) throwUncloneable('Symbol');
  if (!isObject(value)) return value;
  // effectively preserves circular references
  if (map) {
    if (mapHas(map, value)) return mapGet(map, value);
  } else map = new Map();

  var type = classof(value);
  var C, name, cloned, dataTransfer, i, length, keys, key;

  switch (type) {
    case 'Array':
      cloned = Array(lengthOfArrayLike(value));
      break;
    case 'Object':
      cloned = {};
      break;
    case 'Map':
      cloned = new Map();
      break;
    case 'Set':
      cloned = new Set();
      break;
    case 'RegExp':
      // in this block because of a Safari 14.1 bug
      // old FF does not clone regexes passed to the constructor, so get the source and flags directly
      cloned = new RegExp(value.source, getRegExpFlags(value));
      break;
    case 'Error':
      name = value.name;
      switch (name) {
        case 'AggregateError':
          cloned = new (getBuiltIn(name))([]);
          break;
        case 'EvalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SuppressedError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
          cloned = new (getBuiltIn(name))();
          break;
        case 'CompileError':
        case 'LinkError':
        case 'RuntimeError':
          cloned = new (getBuiltIn('WebAssembly', name))();
          break;
        default:
          cloned = new Error();
      }
      break;
    case 'DOMException':
      cloned = new DOMException(value.message, value.name);
      break;
    case 'ArrayBuffer':
    case 'SharedArrayBuffer':
      cloned = cloneBuffer(value, map, type);
      break;
    case 'DataView':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float16Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      length = type === 'DataView' ? value.byteLength : value.length;
      cloned = cloneView(value, type, value.byteOffset, length, map);
      break;
    case 'DOMQuad':
      try {
        cloned = new DOMQuad(
          structuredCloneInternal(value.p1, map),
          structuredCloneInternal(value.p2, map),
          structuredCloneInternal(value.p3, map),
          structuredCloneInternal(value.p4, map)
        );
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      }
      break;
    case 'File':
      if (nativeRestrictedStructuredClone) try {
        cloned = nativeRestrictedStructuredClone(value);
        // NodeJS 20.0.0 bug, https://github.com/nodejs/node/issues/47612
        if (classof(cloned) !== type) cloned = undefined;
      } catch (error) { /* empty */ }
      if (!cloned) try {
        cloned = new File([value], value.name, value);
      } catch (error) { /* empty */ }
      if (!cloned) throwUnpolyfillable(type);
      break;
    case 'FileList':
      dataTransfer = createDataTransfer();
      if (dataTransfer) {
        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
          dataTransfer.items.add(structuredCloneInternal(value[i], map));
        }
        cloned = dataTransfer.files;
      } else cloned = tryNativeRestrictedStructuredClone(value, type);
      break;
    case 'ImageData':
      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
      try {
        cloned = new ImageData(
          structuredCloneInternal(value.data, map),
          value.width,
          value.height,
          { colorSpace: value.colorSpace }
        );
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      } break;
    default:
      if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else switch (type) {
        case 'BigInt':
          // can be a 3rd party polyfill
          cloned = Object(value.valueOf());
          break;
        case 'Boolean':
          cloned = Object(thisBooleanValue(value));
          break;
        case 'Number':
          cloned = Object(thisNumberValue(value));
          break;
        case 'String':
          cloned = Object(thisStringValue(value));
          break;
        case 'Date':
          cloned = new Date(thisTimeValue(value));
          break;
        case 'Blob':
          try {
            cloned = value.slice(0, value.size, value.type);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMPoint':
        case 'DOMPointReadOnly':
          C = globalThis[type];
          try {
            cloned = C.fromPoint
              ? C.fromPoint(value)
              : new C(value.x, value.y, value.z, value.w);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMRect':
        case 'DOMRectReadOnly':
          C = globalThis[type];
          try {
            cloned = C.fromRect
              ? C.fromRect(value)
              : new C(value.x, value.y, value.width, value.height);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMMatrix':
        case 'DOMMatrixReadOnly':
          C = globalThis[type];
          try {
            cloned = C.fromMatrix
              ? C.fromMatrix(value)
              : new C(value);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'AudioData':
        case 'VideoFrame':
          if (!isCallable(value.clone)) throwUnpolyfillable(type);
          try {
            cloned = value.clone();
          } catch (error) {
            throwUncloneable(type);
          } break;
        case 'CropTarget':
        case 'CryptoKey':
        case 'FileSystemDirectoryHandle':
        case 'FileSystemFileHandle':
        case 'FileSystemHandle':
        case 'GPUCompilationInfo':
        case 'GPUCompilationMessage':
        case 'ImageBitmap':
        case 'RTCCertificate':
        case 'WebAssembly.Module':
          throwUnpolyfillable(type);
          // break omitted
        default:
          throwUncloneable(type);
      }
  }

  mapSet(map, value, cloned);

  switch (type) {
    case 'Array':
    case 'Object':
      keys = objectKeys(value);
      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
        key = keys[i];
        createProperty(cloned, key, structuredCloneInternal(value[key], map));
      } break;
    case 'Map':
      value.forEach(function (v, k) {
        mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
      });
      break;
    case 'Set':
      value.forEach(function (v) {
        setAdd(cloned, structuredCloneInternal(v, map));
      });
      break;
    case 'Error':
      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));
      if (hasOwn(value, 'cause')) {
        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
      }
      if (name === 'AggregateError') {
        cloned.errors = structuredCloneInternal(value.errors, map);
      } else if (name === 'SuppressedError') {
        cloned.error = structuredCloneInternal(value.error, map);
        cloned.suppressed = structuredCloneInternal(value.suppressed, map);
      } // break omitted
    case 'DOMException':
      if (ERROR_STACK_INSTALLABLE) {
        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
      }
  }

  return cloned;
};

var tryToTransfer = function (rawTransfer, map) {
  if (!isObject(rawTransfer)) throw new TypeError('Transfer option cannot be converted to a sequence');

  var transfer = [];

  iterate(rawTransfer, function (value) {
    push(transfer, anObject(value));
  });

  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var buffers = new Set();
  var value, type, C, transferred, canvas, context;

  while (i < length) {
    value = transfer[i++];

    type = classof(value);

    if (type === 'ArrayBuffer' ? setHas(buffers, value) : mapHas(map, value)) {
      throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
    }

    if (type === 'ArrayBuffer') {
      setAdd(buffers, value);
      continue;
    }

    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      transferred = nativeStructuredClone(value, { transfer: [value] });
    } else switch (type) {
      case 'ImageBitmap':
        C = globalThis.OffscreenCanvas;
        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          canvas = new C(value.width, value.height);
          context = canvas.getContext('bitmaprenderer');
          context.transferFromImageBitmap(value);
          transferred = canvas.transferToImageBitmap();
        } catch (error) { /* empty */ }
        break;
      case 'AudioData':
      case 'VideoFrame':
        if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          transferred = value.clone();
          value.close();
        } catch (error) { /* empty */ }
        break;
      case 'MediaSourceHandle':
      case 'MessagePort':
      case 'MIDIAccess':
      case 'OffscreenCanvas':
      case 'ReadableStream':
      case 'RTCDataChannel':
      case 'TransformStream':
      case 'WebTransportReceiveStream':
      case 'WebTransportSendStream':
      case 'WritableStream':
        throwUnpolyfillable(type, TRANSFERRING);
    }

    if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);

    mapSet(map, value, transferred);
  }

  return buffers;
};

var detachBuffers = function (buffers) {
  setIterate(buffers, function (buffer) {
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      nativeRestrictedStructuredClone(buffer, { transfer: [buffer] });
    } else if (isCallable(buffer.transfer)) {
      buffer.transfer();
    } else if (detachTransferable) {
      detachTransferable(buffer);
    } else {
      throwUnpolyfillable('ArrayBuffer', TRANSFERRING);
    }
  });
};

// `structuredClone` method
// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
$({ global: true, enumerable: true, sham: !PROPER_STRUCTURED_CLONE_TRANSFER, forced: FORCED_REPLACEMENT }, {
  structuredClone: function structuredClone(value /* , { transfer } */) {
    var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
    var transfer = options ? options.transfer : undefined;
    var map, buffers;

    if (transfer !== undefined) {
      map = new Map();
      buffers = tryToTransfer(transfer, map);
    }

    var clone = structuredCloneInternal(value, map);

    // since of an issue with cloning views of transferred buffers, we a forced to detach them later
    // https://github.com/zloirock/core-js/issues/1265
    if (buffers) detachBuffers(buffers);

    return clone;
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url-search-params.constructor.js": (function (module, __unused_webpack_exports, __webpack_require__) {

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.from-code-point.js");
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var safeGetBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/safe-get-built-in.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/url-constructor-detection.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var defineBuiltIns = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-ins.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/iterator-create-constructor.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var classof = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/classof.js");
var anObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/is-object.js");
var $toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var create = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-property-descriptor.js");
var getIterator = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-iterator-method.js");
var createIterResultObject = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/create-iter-result-object.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var wellKnownSymbol = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/well-known-symbol.js");
var arraySort = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-sort.js");

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var TypeError = globalThis.TypeError;
var encodeURIComponent = globalThis.encodeURIComponent;
var fromCharCode = String.fromCharCode;
var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
var $parseInt = parseInt;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var plus = /\+/g;
var FALLBACK_REPLACER = '\uFFFD';
var VALID_HEX = /^[0-9a-f]+$/i;

var parseHexOctet = function (string, start) {
  var substr = stringSlice(string, start, start + 2);
  if (!exec(VALID_HEX, substr)) return NaN;

  return $parseInt(substr, 16);
};

var getLeadingOnes = function (octet) {
  var count = 0;
  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
    count++;
  }
  return count;
};

var utf8Decode = function (octets) {
  var codePoint = null;

  switch (octets.length) {
    case 1:
      codePoint = octets[0];
      break;
    case 2:
      codePoint = (octets[0] & 0x1F) << 6 | (octets[1] & 0x3F);
      break;
    case 3:
      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | (octets[2] & 0x3F);
      break;
    case 4:
      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | (octets[3] & 0x3F);
      break;
  }

  return codePoint > 0x10FFFF ? null : codePoint;
};

var decode = function (input) {
  input = replace(input, plus, ' ');
  var length = input.length;
  var result = '';
  var i = 0;

  while (i < length) {
    var decodedChar = charAt(input, i);

    if (decodedChar === '%') {
      if (charAt(input, i + 1) === '%' || i + 3 > length) {
        result += '%';
        i++;
        continue;
      }

      var octet = parseHexOctet(input, i + 1);

      // eslint-disable-next-line no-self-compare -- NaN check
      if (octet !== octet) {
        result += decodedChar;
        i++;
        continue;
      }

      i += 2;
      var byteSequenceLength = getLeadingOnes(octet);

      if (byteSequenceLength === 0) {
        decodedChar = fromCharCode(octet);
      } else {
        if (byteSequenceLength === 1 || byteSequenceLength > 4) {
          result += FALLBACK_REPLACER;
          i++;
          continue;
        }

        var octets = [octet];
        var sequenceIndex = 1;

        while (sequenceIndex < byteSequenceLength) {
          i++;
          if (i + 3 > length || charAt(input, i) !== '%') break;

          var nextByte = parseHexOctet(input, i + 1);

          // eslint-disable-next-line no-self-compare -- NaN check
          if (nextByte !== nextByte) {
            i += 3;
            break;
          }
          if (nextByte > 191 || nextByte < 128) break;

          push(octets, nextByte);
          i += 2;
          sequenceIndex++;
        }

        if (octets.length !== byteSequenceLength) {
          result += FALLBACK_REPLACER;
          continue;
        }

        var codePoint = utf8Decode(octets);
        if (codePoint === null) {
          result += FALLBACK_REPLACER;
        } else {
          decodedChar = fromCodePoint(codePoint);
        }
      }
    }

    result += decodedChar;
    i++;
  }

  return result;
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    target: getInternalParamsState(params).entries,
    index: 0,
    kind: kind
  });
}, URL_SEARCH_PARAMS, function next() {
  var state = getInternalIteratorState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  var entry = target[index];
  switch (state.kind) {
    case 'keys': return createIterResultObject(entry.key, false);
    case 'values': return createIterResultObject(entry.value, false);
  } return createIterResultObject([entry.key, entry.value], false);
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var entries = this.entries;
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call(entryNext, entryIterator)).done ||
          (second = call(entryNext, entryIterator)).done ||
          !call(entryNext, entryIterator).done
        ) throw new TypeError('Expected sequence with length 2');
        push(entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn(object, key)) {
      push(entries, { key: key, value: $toString(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var entries = this.entries;
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push(entries, {
            key: decode(shift(entry)),
            value: decode(join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var state = setInternalState(this, new URLSearchParamsState(init));
  if (!DESCRIPTORS) this.size = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength(arguments.length, 2);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name /* , value */) {
    var state = getInternalParamsState(this);
    var length = validateArgumentsLength(arguments.length, 1);
    var entries = state.entries;
    var key = $toString(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index];
      if (entry.key === key && (value === undefined || entry.value === value)) {
        splice(entries, index, 1);
        if (value !== undefined) break;
      } else index++;
    }
    if (!DESCRIPTORS) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength(arguments.length, 1);
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength(arguments.length, 1);
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name /* , value */) {
    var entries = getInternalParamsState(this).entries;
    var length = validateArgumentsLength(arguments.length, 1);
    var key = $toString(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index++];
      if (entry.key === key && (value === undefined || entry.value === value)) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength(arguments.length, 1);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    if (!DESCRIPTORS) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(nativeFetch)) {
    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url-search-params.delete.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url-search-params.has.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url-search-params.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url-search-params.constructor.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url-search-params.size.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url.can-parse.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var fails = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/fails.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var USE_NATIVE_URL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/url-constructor-detection.js");

var URL = getBuiltIn('URL');

// https://github.com/nodejs/node/issues/47505
// https://github.com/denoland/deno/issues/18893
var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function () {
  URL.canParse();
});

// Bun ~ 1.0.30 bug
// https://github.com/oven-sh/bun/issues/9250
var WRONG_ARITY = fails(function () {
  return URL.canParse.length !== 1;
});

// `URL.canParse` method
// https://url.spec.whatwg.org/#dom-url-canparse
$({ target: 'URL', stat: true, forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY }, {
  canParse: function canParse(url) {
    var length = validateArgumentsLength(arguments.length, 1);
    var urlString = toString(url);
    var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);
    try {
      return !!new URL(urlString, base);
    } catch (error) {
      return false;
    }
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url.constructor.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/es.string.iterator.js");
var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/url-constructor-detection.js");
var globalThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/global-this.js");
var bind = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/define-built-in-accessor.js");
var anInstance = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/an-instance.js");
var hasOwn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/has-own-property.js");
var assign = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/object-assign.js");
var arrayFrom = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-from.js");
var arraySlice = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/array-slice.js");
var codeAt = (__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-multibyte.js")/* .codeAt */.codeAt);
var toASCII = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/string-punycode-to-ascii.js");
var $toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var setToStringTag = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/set-to-string-tag.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var URLSearchParamsModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url-search-params.constructor.js");
var InternalStateModule = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = globalThis.URL;
var TypeError = globalThis.TypeError;
var parseInt = globalThis.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] === '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part === '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) === '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix === 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index === partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() === ':') {
    if (charAt(input, 1) !== ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex === 8) return;
    if (chr() === ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() === '.') {
      if (length === 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() === '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece === 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
      }
      if (numbersSeen !== 4) return;
      break;
    } else if (chr() === ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex !== 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex !== 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  return currLength > maxLength ? currStart : maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;

  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    }
    return join(result, '.');
  }

  // ipv6
  if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  }

  return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length === 2 && exec(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) === ':' || (!normalized && second === '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length === 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw new TypeError(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw new TypeError(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
      input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
            buffer += toLowerCase(chr);
          } else if (chr === ':') {
            if (stateOverride && (
              (url.isSpecial() !== hasOwn(specialSchemes, buffer)) ||
              (buffer === 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme === 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme === 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme === url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] === '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr !== '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr === '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme === 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr === '/' && codePoints[pointer + 1] === '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr === '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr === EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr === '/' || (chr === '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr === '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr === '/' || chr === '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr === '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr !== '/' && chr !== '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr === '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint === ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer === '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme === 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr === ':' && !seenBracket) {
            if (buffer === '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride === HOSTNAME) return;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer === '') return INVALID_HOST;
            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr === '[') seenBracket = true;
            else if (chr === ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer !== '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr === '/' || chr === '\\') state = FILE_SLASH;
          else if (base && base.scheme === 'file') {
            switch (chr) {
              case EOF:
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = base.query;
                break;
              case '?':
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = '';
                state = QUERY;
                break;
              case '#':
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
                break;
              default:
                if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.shortenPath();
                }
                state = PATH;
                continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr === '/' || chr === '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer === '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host === 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr !== '/' && chr !== '\\') continue;
          } else if (!stateOverride && chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            state = PATH;
            if (chr !== '/') continue;
          } break;

        case PATH:
          if (
            chr === EOF || chr === '/' ||
            (chr === '\\' && url.isSpecial()) ||
            (!stateOverride && (chr === '?' || chr === '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            if (chr === "'" && url.isSpecial()) url.query += '%27';
            else if (chr === '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) === '[') {
      if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username !== '' || this.password !== '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme === 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw new TypeError(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme === 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme === 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port === '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search === '') {
      this.query = null;
    } else {
      if (charAt(search, 0) === '?') search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash === '') {
      this.fragment = null;
      return;
    }
    if (charAt(hash, 0) === '#') hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url.constructor.js");


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url.parse.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/get-built-in.js");
var validateArgumentsLength = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/validate-arguments-length.js");
var toString = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/to-string.js");
var USE_NATIVE_URL = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/url-constructor-detection.js");

var URL = getBuiltIn('URL');

// `URL.parse` method
// https://url.spec.whatwg.org/#dom-url-canparse
$({ target: 'URL', stat: true, forced: !USE_NATIVE_URL }, {
  parse: function parse(url) {
    var length = validateArgumentsLength(arguments.length, 1);
    var urlString = toString(url);
    var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);
    try {
      return new URL(urlString, base);
    } catch (error) {
      return null;
    }
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/core-js/modules/web.url.to-json.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/@rsbuild/core/node_modules/core-js/internals/function-call.js");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call(URL.prototype.toString, this);
  }
});


}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_array_like_to_array.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _array_like_to_array; }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_array_with_holes.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _array_with_holes; }
});
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_array_without_holes.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _array_without_holes; }
});
/* ESM import */var _array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_array_like_to_array.js");


function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0,_array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__._)(arr);
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_async_to_generator.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _async_to_generator; }
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;

        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
        });
    };
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_define_property.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _define_property; }
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else obj[key] = value;

    return obj;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_instanceof.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _instanceof; }
});
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else return left instanceof right;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_iterable_to_array.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _iterable_to_array; }
});
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _iterable_to_array_limit; }
});
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;

    try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally {
            if (_d) throw _e;
        }
    }

    return _arr;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_non_iterable_rest.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _non_iterable_rest; }
});
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_non_iterable_spread.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _non_iterable_spread; }
});
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_object_spread.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _object_spread; }
});
/* ESM import */var _define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_define_property.js");


function _object_spread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                })
            );
        }

        ownKeys.forEach(function(key) {
            (0,_define_property_js__WEBPACK_IMPORTED_MODULE_0__._)(target, key, source[key]);
        });
    }

    return target;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_object_spread_props.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _object_spread_props; }
});
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }

    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};

    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }

    return target;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_object_without_properties.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _object_without_properties; }
});
/* ESM import */var _object_without_properties_loose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_object_without_properties_loose.js");


function _object_without_properties(source, excluded) {
    if (source == null) return {};

    var target = (0,_object_without_properties_loose_js__WEBPACK_IMPORTED_MODULE_0__._)(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }

    return target;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_object_without_properties_loose.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _object_without_properties_loose; }
});
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }

    return target;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_sliced_to_array.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _sliced_to_array; }
});
/* ESM import */var _array_with_holes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_array_with_holes.js");
/* ESM import */var _iterable_to_array_limit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js");
/* ESM import */var _non_iterable_rest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_non_iterable_rest.js");
/* ESM import */var _unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js");





function _sliced_to_array(arr, i) {
    return (0,_array_with_holes_js__WEBPACK_IMPORTED_MODULE_0__._)(arr) || (0,_iterable_to_array_limit_js__WEBPACK_IMPORTED_MODULE_1__._)(arr, i) || (0,_unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_2__._)(arr, i) || (0,_non_iterable_rest_js__WEBPACK_IMPORTED_MODULE_3__._)();
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_to_consumable_array.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _to_consumable_array; }
});
/* ESM import */var _array_without_holes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_array_without_holes.js");
/* ESM import */var _iterable_to_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_iterable_to_array.js");
/* ESM import */var _non_iterable_spread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_non_iterable_spread.js");
/* ESM import */var _unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js");





function _to_consumable_array(arr) {
    return (0,_array_without_holes_js__WEBPACK_IMPORTED_MODULE_0__._)(arr) || (0,_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_1__._)(arr) || (0,_unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_2__._)(arr) || (0,_non_iterable_spread_js__WEBPACK_IMPORTED_MODULE_3__._)();
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_type_of.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _type_of; }
});
function _type_of(obj) {
    "@swc/helpers - typeof";

    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}



}),
"./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _unsupported_iterable_to_array; }
});
/* ESM import */var _array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_array_like_to_array.js");


function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0,_array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__._)(o, minLen);

    var n = Object.prototype.toString.call(o).slice(8, -1);

    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__._)(o, minLen);
}



}),
"./node_modules/tslib/tslib.es6.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __addDisposableResource: function() { return __addDisposableResource; },
  __assign: function() { return __assign; },
  __asyncDelegator: function() { return __asyncDelegator; },
  __asyncGenerator: function() { return __asyncGenerator; },
  __asyncValues: function() { return __asyncValues; },
  __await: function() { return __await; },
  __awaiter: function() { return __awaiter; },
  __classPrivateFieldGet: function() { return __classPrivateFieldGet; },
  __classPrivateFieldIn: function() { return __classPrivateFieldIn; },
  __classPrivateFieldSet: function() { return __classPrivateFieldSet; },
  __createBinding: function() { return __createBinding; },
  __decorate: function() { return __decorate; },
  __disposeResources: function() { return __disposeResources; },
  __esDecorate: function() { return __esDecorate; },
  __exportStar: function() { return __exportStar; },
  __extends: function() { return __extends; },
  __generator: function() { return __generator; },
  __importDefault: function() { return __importDefault; },
  __importStar: function() { return __importStar; },
  __makeTemplateObject: function() { return __makeTemplateObject; },
  __metadata: function() { return __metadata; },
  __param: function() { return __param; },
  __propKey: function() { return __propKey; },
  __read: function() { return __read; },
  __rest: function() { return __rest; },
  __rewriteRelativeImportExtension: function() { return __rewriteRelativeImportExtension; },
  __runInitializers: function() { return __runInitializers; },
  __setFunctionName: function() { return __setFunctionName; },
  __spread: function() { return __spread; },
  __spreadArray: function() { return __spreadArray; },
  __spreadArrays: function() { return __spreadArrays; },
  __values: function() { return __values; }
});
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* ESM default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


}),

}]);
//# sourceMappingURL=lib-polyfill.js.map