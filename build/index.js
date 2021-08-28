(window["webpackJsonp_podkit"] = window["webpackJsonp_podkit"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_podkit"] = window["webpackJsonp_podkit"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/default-thumbnail.jpg":
/*!**************************************!*\
  !*** ./images/default-thumbnail.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/default-thumbnail.af0f21db.jpg");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/times.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/times.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.times(3, String);
 * // => ['0', '1', '2']
 *
 *  _.times(4, _.constant(0));
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  n = toInteger(n);
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH,
      length = nativeMin(n, MAX_ARRAY_LENGTH);

  iteratee = castFunction(iteratee);
  n -= MAX_ARRAY_LENGTH;

  var result = baseTimes(length, iteratee);
  while (++index < n) {
    iteratee(index);
  }
  return result;
}

module.exports = times;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/button/Edit.js":
/*!****************************!*\
  !*** ./src/button/Edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_googleFontsNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/googleFontsNames */ "./src/components/googleFontsNames.js");
/* harmony import */ var _components_googleFonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/googleFonts */ "./src/components/googleFonts.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _components_TextShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TextShadow */ "./src/components/TextShadow.js");
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Border */ "./src/components/Border.js");
/* harmony import */ var _components_BoxShadow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BoxShadow */ "./src/components/BoxShadow.js");
/* harmony import */ var _components_Padding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Padding */ "./src/components/Padding.js");












var Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      buttonText = _props$attributes.buttonText,
      hoverAnimation = _props$attributes.hoverAnimation,
      buttonColor = _props$attributes.buttonColor,
      hoverColor = _props$attributes.hoverColor,
      btnFontFamily = _props$attributes.btnFontFamily,
      btnTextColorHover = _props$attributes.btnTextColorHover,
      textSize = _props$attributes.textSize,
      textWeight = _props$attributes.textWeight,
      textLineHeight = _props$attributes.textLineHeight,
      textStyle = _props$attributes.textStyle,
      textUpper = _props$attributes.textUpper,
      textLetter = _props$attributes.textLetter,
      textShadowColor = _props$attributes.textShadowColor,
      textShadowBlur = _props$attributes.textShadowBlur,
      textShadowHorizontal = _props$attributes.textShadowHorizontal,
      textShadowVertical = _props$attributes.textShadowVertical,
      borderType = _props$attributes.borderType,
      borderWidth = _props$attributes.borderWidth,
      borderColor = _props$attributes.borderColor,
      borderRadius = _props$attributes.borderRadius,
      borderColorHover = _props$attributes.borderColorHover,
      boxShadowColor = _props$attributes.boxShadowColor,
      boxShadowBlur = _props$attributes.boxShadowBlur,
      boxShadowHorizontal = _props$attributes.boxShadowHorizontal,
      boxShadowVertical = _props$attributes.boxShadowVertical,
      boxShadowPosition = _props$attributes.boxShadowPosition,
      buttonSpace = _props$attributes.buttonSpace,
      paddingTop = _props$attributes.paddingTop,
      paddingRight = _props$attributes.paddingRight,
      paddingBottom = _props$attributes.paddingBottom,
      paddingLeft = _props$attributes.paddingLeft,
      paddingUnit = _props$attributes.paddingUnit,
      setAttributes = props.setAttributes;
  var HOVERANIMATIONS = [{
    value: "",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None")
  }, {
    value: "wpb_fade",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fade")
  }, {
    value: "wpb_pulse",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Pulse")
  }, {
    value: "wpb_sweep_right",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Sweep Right")
  }, {
    value: "wpb_sweep_left",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Sweep Left")
  }];

  var onChangeHoverAnimation = function onChangeHoverAnimation(newValue) {
    setAttributes({
      hoverAnimation: newValue
    });
  };

  var onChangeHoverColor = function onChangeHoverColor(newValue) {
    setAttributes({
      hoverColor: newValue
    });
  };

  var onChangeButtonColor = function onChangeButtonColor(newValue) {
    setAttributes({
      buttonColor: newValue
    });
  };

  var onChangeTextFamily = function onChangeTextFamily(newValue) {
    setAttributes({
      btnFontFamily: newValue
    });

    if (!btnFontFamily) {
      return;
    }

    Object(_components_googleFonts__WEBPACK_IMPORTED_MODULE_5__["default"])(btnFontFamily);
  };

  var onChangeButtonTextColorHover = function onChangeButtonTextColorHover(newValue) {
    setAttributes({
      btnTextColorHover: newValue
    });
  };

  var textWeightfn = function textWeightfn(newTextWeight) {
    setAttributes({
      textWeight: newTextWeight
    });
  };

  var lineHeight = function lineHeight(newTextLineHeight) {
    setAttributes({
      textLineHeight: newTextLineHeight
    });
  };

  var textStylefn = function textStylefn(newTextStyle) {
    setAttributes({
      textStyle: newTextStyle
    });
  };

  var textUpperfn = function textUpperfn(check) {
    return setAttributes({
      textUpper: check
    });
  };

  var textLetterfn = function textLetterfn(newTextLetter) {
    setAttributes({
      textLetter: newTextLetter
    });
  };

  var onChangeBorderColorHover = function onChangeBorderColorHover(newValue) {
    setAttributes({
      borderColorHover: newValue
    });
  };

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
    key: "inspector_control_section"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Settings", "wpb")
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control__field"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Button Color"), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    color: buttonColor,
    onChange: onChangeButtonColor,
    clearable: true
  })), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("strong", null, "Button Hover Styles"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    options: HOVERANIMATIONS,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Hover Effect", "wpb"),
    value: hoverAnimation,
    onChange: onChangeHoverAnimation
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Hover Color"), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    color: hoverColor,
    onChange: onChangeHoverColor,
    clearable: true
  }))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Text Styling")
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control__field"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family", "wpb"),
    options: _components_googleFontsNames__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: btnFontFamily,
    onChange: onChangeTextFamily
  }), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("strong", null, "Text Color on Hover"), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    color: btnTextColorHover,
    onChange: onChangeButtonTextColorHover,
    disableAlpha: true
  })))), /*#__PURE__*/React.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    components: ["size", "weight", "line", "style", "upper", "spacing"],
    size: textSize,
    weight: textWeight,
    line: textLineHeight,
    style: textStyle,
    upper: textUpper,
    spacing: textLetter,
    onChangeSize: function onChangeSize(newTextSize) {
      return setAttributes({
        textSize: newTextSize
      });
    },
    onChangeWeight: textWeightfn,
    onChangeLine: lineHeight,
    onChangeStyle: textStylefn,
    onChangeUpper: textUpperfn,
    onChangeSpacing: textLetterfn
  }), /*#__PURE__*/React.createElement(_components_TextShadow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Text Shadow",
    color: textShadowColor // blur={textShadowBlur}
    ,
    horizontal: textShadowHorizontal,
    vertical: textShadowVertical,
    onChangeColor: function onChangeColor(newValue) {
      setAttributes({
        textShadowColor: newValue.hex
      });
    },
    onChangeBlur: function onChangeBlur(newValue) {
      setAttributes({
        textShadowBlur: newValue
      });
    },
    onChangeHorizontal: function onChangeHorizontal(newValue) {
      setAttributes({
        textShadowHorizontal: newValue
      });
    },
    onChangeVertical: function onChangeVertical(newValue) {
      setAttributes({
        textShadowVertical: newValue
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Styling")
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control__field"
  }, /*#__PURE__*/React.createElement(_components_Border__WEBPACK_IMPORTED_MODULE_8__["default"], {
    borderType: borderType,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    onChangeBorderType: function onChangeBorderType(newValue) {
      setAttributes({
        borderType: newValue
      });
    },
    onChangeBorderWidth: function onChangeBorderWidth(newValue) {
      setAttributes({
        borderWidth: newValue
      });
    },
    onChangeBorderColor: function onChangeBorderColor(newValue) {
      setAttributes({
        borderColor: newValue.hex
      });
    },
    onChangeBorderRadius: function onChangeBorderRadius(newValue) {
      setAttributes({
        borderRadius: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Border Hover Color")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    color: borderColorHover,
    onChange: onChangeBorderColorHover,
    clearable: true
  })), /*#__PURE__*/React.createElement(_components_BoxShadow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Button Shadow",
    inner: true,
    color: boxShadowColor,
    blur: boxShadowBlur,
    horizontal: boxShadowHorizontal,
    vertical: boxShadowVertical,
    position: boxShadowPosition,
    onChangeColor: function onChangeColor(newColor) {
      setAttributes({
        boxShadowColor: newColor === undefined ? "transparent" : newColor.hex
      });
    },
    onChangeBlur: function onChangeBlur(newBlur) {
      setAttributes({
        boxShadowBlur: newBlur === undefined ? 0 : newBlur
      });
    },
    onChangeHorizontal: function onChangeHorizontal(newHorizontalShadow) {
      setAttributes({
        boxShadowHorizontal: newHorizontalShadow === undefined ? 0 : newHorizontalShadow
      });
    },
    onChangeVertical: function onChangeVertical(newVerticalShadow) {
      setAttributes({
        boxShadowVertical: newVerticalShadow === undefined ? 0 : newVerticalShadow
      });
    },
    onChangePosition: function onChangePosition(newPosition) {
      setAttributes({
        boxShadowPosition: newPosition
      });
    }
  }), /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Spacing", "wpb")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    value: buttonSpace,
    min: "0",
    max: "300",
    onChange: function onChange(newValue) {
      setAttributes({
        buttonSpace: newValue === undefined ? 0 : newValue
      });
    },
    allowReset: "true"
  }), /*#__PURE__*/React.createElement(_components_Padding__WEBPACK_IMPORTED_MODULE_10__["default"], {
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    onChangePadTop: function onChangePadTop(value) {
      return setAttributes({
        paddingTop: value
      });
    },
    onChangePadRight: function onChangePadRight(value) {
      return setAttributes({
        paddingRight: value
      });
    },
    onChangePadBottom: function onChangePadBottom(value) {
      return setAttributes({
        paddingBottom: value
      });
    },
    onChangePadLeft: function onChangePadLeft(value) {
      return setAttributes({
        paddingLeft: value
      });
    },
    showUnits: true,
    selectedUnit: paddingUnit,
    onChangePadSizeUnit: function onChangePadSizeUnit(newvalue) {
      return setAttributes({
        paddingUnit: newvalue
      });
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "wpb_block_container",
    key: "render_section"
  }, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: ["\n            .wpb_pulse:hover, .wpb_fade:hover {\n                background-color: ".concat(hoverColor, " !important;\n            }\n            .wpb_sweep_right::before, .wpb_sweep_left::before {\n                background: ").concat(hoverColor, " !important;\n            }\n            .wpb_button_container.rich-text:hover {\n                color: ").concat(btnTextColorHover, " !important;\n            }\n            .wpb_button_container.rich-text > span:hover {\n                color: ").concat(btnTextColorHover, " !important;\n            }\n            .wpb_button:hover {\n                border-color: ").concat(borderColorHover, " !important;\n            }\n            ")].join("\n")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wpb_button ".concat(hoverAnimation),
    style: {
      backgroundColor: buttonColor,
      border: borderType,
      borderWidth: "".concat(borderWidth, "px"),
      borderRadius: "".concat(borderRadius, "px"),
      borderColor: borderColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition)
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    className: "wpb_button_container ".concat(hoverAnimation),
    style: {
      fontFamily: btnFontFamily,
      fontSize: "".concat(textSize, "px"),
      fontWeight: textWeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      lineHeight: textLineHeight,
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowColor),
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      // padding: `${buttonSpace}px`,
      paddingTop: paddingTop + paddingUnit,
      paddingBottom: paddingBottom + paddingUnit,
      paddingLeft: paddingLeft + paddingUnit,
      paddingRight: paddingRight + paddingUnit
    },
    onChange: function onChange(newValue) {
      setAttributes({
        buttonText: newValue
      });
    },
    value: buttonText
  })))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/button/Save.js":
/*!****************************!*\
  !*** ./src/button/Save.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



var Save = function Save(props) {
  var _props$attributes = props.attributes,
      buttonText = _props$attributes.buttonText,
      hoverAnimation = _props$attributes.hoverAnimation,
      buttonColor = _props$attributes.buttonColor,
      hoverColor = _props$attributes.hoverColor,
      btnFontFamily = _props$attributes.btnFontFamily,
      btnTextColorHover = _props$attributes.btnTextColorHover,
      textSize = _props$attributes.textSize,
      textWeight = _props$attributes.textWeight,
      textLineHeight = _props$attributes.textLineHeight,
      textStyle = _props$attributes.textStyle,
      textUpper = _props$attributes.textUpper,
      textLetter = _props$attributes.textLetter,
      textShadowColor = _props$attributes.textShadowColor,
      textShadowBlur = _props$attributes.textShadowBlur,
      textShadowHorizontal = _props$attributes.textShadowHorizontal,
      textShadowVertical = _props$attributes.textShadowVertical,
      borderType = _props$attributes.borderType,
      borderWidth = _props$attributes.borderWidth,
      borderColor = _props$attributes.borderColor,
      borderRadius = _props$attributes.borderRadius,
      borderColorHover = _props$attributes.borderColorHover,
      boxShadowColor = _props$attributes.boxShadowColor,
      boxShadowBlur = _props$attributes.boxShadowBlur,
      boxShadowHorizontal = _props$attributes.boxShadowHorizontal,
      boxShadowVertical = _props$attributes.boxShadowVertical,
      boxShadowPosition = _props$attributes.boxShadowPosition,
      buttonSpace = _props$attributes.buttonSpace,
      paddingTop = _props$attributes.paddingTop,
      paddingRight = _props$attributes.paddingRight,
      paddingBottom = _props$attributes.paddingBottom,
      paddingLeft = _props$attributes.paddingLeft,
      paddingUnit = _props$attributes.paddingUnit;
  return /*#__PURE__*/React.createElement("div", {
    className: "button_container"
  }, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: ["\n            .wpb_pulse:hover, .wpb_fade:hover {\n                background-color: ".concat(hoverColor, " !important;\n                }\n            .wpb_sweep_right::before, .wpb_sweep_left::before {\n                background: ").concat(hoverColor, " !important;\n                }\n            .wpb_button_container:hover {\n                  color: ").concat(btnTextColorHover, " !important;\n                }\n            .wpb_button_container > span:hover {\n                  color: ").concat(btnTextColorHover, " !important;\n                }\n            .wpb_button:hover {\n                  border-color: ").concat(borderColorHover, " !important;\n                }\n           ")].join("\n")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wpb_button ".concat(hoverAnimation, " wpb_button_container"),
    style: {
      backgroundColor: buttonColor,
      fontFamily: btnFontFamily,
      fontSize: "".concat(textSize, "px"),
      fontWeight: textWeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      lineHeight: textLineHeight,
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowColor),
      border: borderType,
      borderWidth: "".concat(borderWidth, "px"),
      borderRadius: "".concat(borderRadius, "px"),
      borderColor: borderColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      // padding: `${buttonSpace}px`,
      paddingTop: paddingTop + paddingUnit,
      paddingBottom: paddingBottom + paddingUnit,
      paddingLeft: paddingLeft + paddingUnit,
      paddingRight: paddingRight + paddingUnit
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
    value: buttonText
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/button/index.js":
/*!*****************************!*\
  !*** ./src/button/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/button/Edit.js");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/button/Save.js");





var buttonAttributes = {
  effect: {
    type: "string",
    default: "none"
  },
  effectDir: {
    type: "string",
    default: "top"
  },
  buttonText: {
    type: "string",
    default: "Button Text"
  },
  hoverAnimation: {
    type: "string",
    default: ""
  },
  hoverColor: {
    type: "string",
    default: "#2098d1"
  },
  buttonColor: {
    type: "string",
    default: "#000000"
  },
  btnFontFamily: {
    type: "string",
    default: "Arial"
  },
  btnTextColorHover: {
    type: "string",
    default: "#CCCCCC"
  },
  textSize: {
    type: "number",
    default: 16
  },
  textWeight: {
    type: "number",
    default: 400
  },
  textLineHeight: {
    type: "number",
    default: 1.2
  },
  textStyle: {
    type: "string",
    default: "normal"
  },
  textUpper: {
    type: "string"
  },
  textLetter: {
    type: "number",
    default: 1
  },
  textShadowColor: {
    type: "string"
  },
  textShadowBlur: {
    type: "number",
    default: 0
  },
  textShadowHorizontal: {
    type: "number",
    default: 0
  },
  textShadowVertical: {
    type: "number",
    default: 0
  },
  borderType: {
    type: "string",
    default: "none"
  },
  borderWidth: {
    type: "number",
    default: 3
  },
  borderColor: {
    type: "string",
    default: "#000000"
  },
  borderRadius: {
    type: "number",
    default: 3
  },
  borderColorHover: {
    type: "string",
    default: "#ff0000"
  },
  boxShadowColor: {
    type: "string"
  },
  boxShadowBlur: {
    type: "number",
    default: 0
  },
  boxShadowHorizontal: {
    type: "number",
    default: 0
  },
  boxShadowVertical: {
    type: "number",
    default: 0
  },
  boxShadowPosition: {
    type: "string",
    default: "inset"
  },
  buttonSpace: {
    type: "number",
    default: 16
  },
  paddingTop: {
    type: "number"
  },
  paddingRight: {
    type: "number"
  },
  paddingBottom: {
    type: "number"
  },
  paddingLeft: {
    type: "number"
  },
  paddingUnit: {
    type: "string",
    default: "px"
  }
};
var buttonSupports = {
  align: true
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("podkit/button", {
  title: "Button",
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: "podkit",
  attributes: buttonAttributes,
  supports: buttonSupports,
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/bv-logo-white.svg":
/*!*******************************!*\
  !*** ./src/bv-logo-white.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBvLogoWhite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBvLogoWhite(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 72 72"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M42.9 38.3V38c2.9-.6 4.3-2.2 4.3-4.8V21.6c0-5.4-2.7-8.2-8-8.2H23.3c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v22.1h-5.7c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v20.7h-5.6c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.7 0 1.2-.4 1.4-1H41c4.6 0 6.8-2.2 6.8-6.7v-8.4c.1-2.6-1.6-4.3-4.9-5.2zm-8-19.4h3.6c1.8 0 2.7 1.1 2.7 3.3v9.9c0 2.2-1.2 3.3-3.4 3.3H35V18.9zm6.9 32.2c0 1.3-.8 1.9-2.4 1.9h-4.5V40.8h3.3c2.4 0 3.6 1.1 3.6 3.2v7.1z",
    fill: "#fff"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyLjksMzguM1YzOGMyLjktMC42LDQuMy0yLjIsNC4zLTQuOFYyMS42YzAtNS40LTIuNy04LjItOC04LjJIMjMuM2MtMC4yLTAuNi0wLjctMS0xLjQtMQoJYy0wLjgsMC0xLjQsMC42LTEuNCwxLjRzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIyLjFoLTUuN2MtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40CglzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIwLjdoLTUuNmMtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40YzAsMC44LDAuNiwxLjQsMS40LDEuNAoJYzAuNywwLDEuMi0wLjQsMS40LTFoNS43djBINDFjNC42LDAsNi44LTIuMiw2LjgtNi43di04LjRDNDcuOSw0MC45LDQ2LjIsMzkuMiw0Mi45LDM4LjN6IE0zNC45LDE4LjloMy42YzEuOCwwLDIuNywxLjEsMi43LDMuMwoJdjkuOWMwLDIuMi0xLjIsMy4zLTMuNCwzLjNoLTIuOFYxOC45eiBNNDEuOCw1MS4xYzAsMS4zLTAuOCwxLjktMi40LDEuOWgtNC41VjQwLjhoMy4zYzIuNCwwLDMuNiwxLjEsMy42LDMuMlY1MS4xeiIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/bv-logo.svg":
/*!*************************!*\
  !*** ./src/bv-logo.svg ***!
  \*************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBvLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBvLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 72 72"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M42.9 38.3V38c2.9-.6 4.3-2.2 4.3-4.8V21.6c0-5.4-2.7-8.2-8-8.2H23.3c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v22.1h-5.7c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v20.7h-5.6c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.7 0 1.2-.4 1.4-1H41c4.6 0 6.8-2.2 6.8-6.7v-8.4c.1-2.6-1.6-4.3-4.9-5.2zm-8-19.4h3.6c1.8 0 2.7 1.1 2.7 3.3v9.9c0 2.2-1.2 3.3-3.4 3.3H35V18.9zm6.9 32.2c0 1.3-.8 1.9-2.4 1.9h-4.5V40.8h3.3c2.4 0 3.6 1.1 3.6 3.2v7.1z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTQyLjksMzguM1YzOGMyLjktMC42LDQuMy0yLjIsNC4zLTQuOFYyMS42YzAtNS40LTIuNy04LjItOC04LjJIMjMuM2MtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40CglzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIyLjFoLTUuN2MtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40czAuNiwxLjQsMS40LDEuNAoJYzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIwLjdoLTUuNmMtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40YzAsMC44LDAuNiwxLjQsMS40LDEuNGMwLjcsMCwxLjItMC40LDEuNC0xaDUuN3YwCglINDFjNC42LDAsNi44LTIuMiw2LjgtNi43di04LjRDNDcuOSw0MC45LDQ2LjIsMzkuMiw0Mi45LDM4LjN6IE0zNC45LDE4LjloMy42YzEuOCwwLDIuNywxLjEsMi43LDMuM3Y5LjljMCwyLjItMS4yLDMuMy0zLjQsMy4zCgloLTIuOFYxOC45eiBNNDEuOCw1MS4xYzAsMS4zLTAuOCwxLjktMi40LDEuOWgtNC41VjQwLjhoMy4zYzIuNCwwLDMuNiwxLjEsMy42LDMuMlY1MS4xeiIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/components/Border.js":
/*!**********************************!*\
  !*** ./src/components/Border.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




var Border = function Border(props) {
  var label = props.label,
      borderType = props.borderType,
      borderWidth = props.borderWidth,
      borderColor = props.borderColor,
      borderRadius = props.borderRadius,
      _props$onChangeBorder = props.onChangeBorderType,
      onChangeBorderType = _props$onChangeBorder === void 0 ? function () {} : _props$onChangeBorder,
      _props$onChangeBorder2 = props.onChangeBorderWidth,
      onChangeBorderWidth = _props$onChangeBorder2 === void 0 ? function () {} : _props$onChangeBorder2,
      _props$onChangeBorder3 = props.onChangeBorderColor,
      onChangeBorderColor = _props$onChangeBorder3 === void 0 ? function () {} : _props$onChangeBorder3,
      _props$onChangeBorder4 = props.onChangeBorderRadius,
      onChangeBorderRadius = _props$onChangeBorder4 === void 0 ? function () {} : _props$onChangeBorder4;
  var BORDERS = [{
    value: "none",
    label: "None"
  }, {
    value: "solid",
    label: "Solid"
  }, {
    value: "double",
    label: "Double"
  }, {
    value: "dotted",
    label: "Dotted"
  }, {
    value: "dashed",
    label: "Dashed"
  }, {
    value: "groove",
    label: "Groove"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle-title"
  }, /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(label || "Border", "wpb"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "wpb_control_toggle_button",
    contentClassName: "wp_control_toggle_content",
    position: "bottom right",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Type", "wpb"),
        options: BORDERS,
        value: borderType,
        onChange: onChangeBorderType
      }), "none" != borderType && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Width", "wpb"),
        value: borderWidth,
        min: "0",
        max: "100",
        onChange: onChangeBorderWidth,
        allowReset: "true"
      }), "none" != borderType && /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/React.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Color", "wpb")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: borderColor,
        onChangeComplete: onChangeBorderColor,
        disableAlpha: true
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Radius", "wpb"),
        value: borderRadius,
        min: "0",
        max: "300",
        onChange: onChangeBorderRadius,
        allowReset: "true"
      }));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Border);

/***/ }),

/***/ "./src/components/BoxShadow.js":
/*!*************************************!*\
  !*** ./src/components/BoxShadow.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




var BoxShadow = function BoxShadow(props) {
  var label = props.label,
      color = props.color,
      blur = props.blur,
      horizontal = props.horizontal,
      vertical = props.vertical,
      position = props.position,
      _props$onChangeColor = props.onChangeColor,
      onChangeColor = _props$onChangeColor === void 0 ? function () {} : _props$onChangeColor,
      _props$onChangeBlur = props.onChangeBlur,
      onChangeBlur = _props$onChangeBlur === void 0 ? function () {} : _props$onChangeBlur,
      _props$onChangeHorizo = props.onChangeHorizontal,
      onChangeHorizontal = _props$onChangeHorizo === void 0 ? function () {} : _props$onChangeHorizo,
      _props$onChangeVertic = props.onChangeVertical,
      onChangeVertical = _props$onChangeVertic === void 0 ? function () {} : _props$onChangeVertic,
      _props$onChangePositi = props.onChangePosition,
      onChangePosition = _props$onChangePositi === void 0 ? function () {} : _props$onChangePositi,
      _props$onResetClick = props.onResetClick,
      onResetClick = _props$onResetClick === void 0 ? function () {} : _props$onResetClick;
  var POSITION = [{
    value: "inset",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset")
  }, {
    value: "",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outline")
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle-title"
  }, /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(label || "Shadow", "wpb"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "wpb_control_toggle_button",
    contentClassName: "wp_control_toggle_content",
    position: "bottom right",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/React.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Color")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: color,
        onChangeComplete: onChangeColor,
        disableAlpha: true,
        onResetClick: onResetClick
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Blur", "wpb"),
        value: blur,
        onChange: onChangeBlur,
        allowReset: "true"
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal", "wpb"),
        value: horizontal,
        onChange: onChangeHorizontal,
        onResetClick: onResetClick
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical", "wpb"),
        value: vertical,
        onChange: onChangeVertical,
        allowReset: "true"
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Position", "wpb"),
        value: position,
        options: POSITION,
        onChange: onChangePosition
      }));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxShadow);

/***/ }),

/***/ "./src/components/Description.js":
/*!***************************************!*\
  !*** ./src/components/Description.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createBlock = wp.blocks.createBlock;

var Description = /*#__PURE__*/function (_React$Component) {
  _inherits(Description, _React$Component);

  var _super = _createSuper(Description);

  function Description() {
    _classCallCheck(this, Description);

    return _super.apply(this, arguments);
  }

  _createClass(Description, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          props = _this$props.props,
          index_value = _this$props.index_value;
      var test_arr = attributes.test_block[index_value];
      var description = "";

      if (test_arr && typeof test_arr !== "undefined") {
        description = test_arr["description"];
      }

      var data_copy = _toConsumableArray(attributes.test_block);

      if (setAttributes !== "not_set") {
        return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          tagName: "div",
          value: description,
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Write Description", 'ultimate-addons-for-gutenberg'),
          className: "uagb-tm__desc",
          onChange: function onChange(value) {
            var new_content = {
              "description": value,
              "name": data_copy[index_value]["name"],
              "company": data_copy[index_value]["company"],
              "image": data_copy[index_value]["image"]
            };
            data_copy[index_value] = new_content;
            setAttributes({
              "test_block": data_copy
            });
          },
          onMerge: props.mergeBlocks,
          onSplit: props.insertBlocksAfter ? function (before, after) {
            setAttributes({
              content: before
            });

            for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              blocks[_key - 2] = arguments[_key];
            }

            props.insertBlocksAfter([].concat(blocks, [createBlock("core/paragraph", {
              content: after
            })]));
          } : undefined,
          onRemove: function onRemove() {
            return props.onReplace([]);
          }
        });
      } else {
        return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
          tagName: "div",
          value: description,
          className: "uagb-tm__desc"
        });
      }
    }
  }]);

  return Description;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/components/Padding.js":
/*!***********************************!*\
  !*** ./src/components/Padding.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnitSizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnitSizes */ "./src/components/UnitSizes.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import { __ } from "@wordpress/i18n";
// import React, { Component } from "react";




var Padding = /*#__PURE__*/function (_Component) {
  _inherits(Padding, _Component);

  var _super = _createSuper(Padding);

  function Padding(props) {
    var _this;

    _classCallCheck(this, Padding);

    _this = _super.call(this, props);
    _this.state = {
      isLinked: false,
      top: _this.props.paddingTop || 0,
      right: _this.props.paddingRight || 0,
      bottom: _this.props.paddingBottom || 0,
      left: _this.props.paddingLeft || 0,
      showUnits: _this.props.showUnits || false
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onButtonClick = _this.onButtonClick.bind(_assertThisInitialized(_this));
    _this.changeFunction = _this.changeFunction.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Padding, [{
    key: "onButtonClick",
    value: function onButtonClick() {
      this.setState({
        isLinked: !this.state.isLinked
      });
    }
  }, {
    key: "changeFunction",
    value: function changeFunction() {
      var _this$state = this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left;
      this.props.onChangePadTop(top);
      this.props.onChangePadRight(right);
      this.props.onChangePadBottom(bottom);
      this.props.onChangePadLeft(left);
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      var _this2 = this;

      var _this$state2 = this.state,
          isLinked = _this$state2.isLinked,
          top = _this$state2.top,
          right = _this$state2.right,
          bottom = _this$state2.bottom,
          left = _this$state2.left;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;
        this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          _this2.changeFunction();
        });
      } else {
        this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          _this2.changeFunction();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      console.log(this.state);
      var _this$state3 = this.state,
          top = _this$state3.top,
          right = _this$state3.right,
          bottom = _this$state3.bottom,
          left = _this$state3.left,
          showUnits = _this$state3.showUnits,
          isLinked = _this$state3.isLinked;
      var _this$props = this.props,
          _this$props$onChangeP = _this$props.onChangePadSizeUnit,
          onChangePadSizeUnit = _this$props$onChangeP === void 0 ? function () {} : _this$props$onChangeP,
          selectedUnit = _this$props.selectedUnit;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-label-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Padding"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-units"
      }, showUnits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UnitSizes__WEBPACK_IMPORTED_MODULE_0__["default"], {
        activeUnit: selectedUnit,
        onChangeUnitSize: onChangePadSizeUnit
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-controls-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "premium-control-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "premium-control-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "premium-control-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "premium-control-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "premium-control-label"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links" : "editor-unlink"),
        onClick: this.onButtonClick
      }))));
    }
  }]);

  return Padding;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Padding);

/***/ }),

/***/ "./src/components/TextShadow.js":
/*!**************************************!*\
  !*** ./src/components/TextShadow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




var TextShadow = function TextShadow(props) {
  var label = props.label,
      color = props.color,
      blur = props.blur,
      horizontal = props.horizontal,
      vertical = props.vertical,
      onChangeColor = props.onChangeColor,
      onChangeBlur = props.onChangeBlur,
      onChangeHorizontal = props.onChangeHorizontal,
      onChangeVertical = props.onChangeVertical,
      onResetClick = props.onResetClick;
  return /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle-title"
  }, /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(label || "Shadow", "wpb"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "wpb_control_toggle_button",
    contentClassName: "wp_control_toggle_content",
    position: "bottom right",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/React.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Color")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: color,
        onChangeComplete: onChangeColor,
        disableAlpha: true,
        onResetClick: onResetClick
      }), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Blur", "wpb"),
        value: blur,
        onChange: onChangeBlur,
        allowReset: "true"
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal", "wpb"),
        value: horizontal,
        onChange: onChangeHorizontal,
        allowReset: "true"
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical", "wpb"),
        value: vertical,
        onChange: onChangeVertical,
        allowReset: "true"
      })));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextShadow);

/***/ }),

/***/ "./src/components/Typography.js":
/*!**************************************!*\
  !*** ./src/components/Typography.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




var Typography = function Typography(props) {
  var components = props.components,
      size = props.size,
      weight = props.weight,
      style = props.style,
      spacing = props.spacing,
      line = props.line,
      upper = props.upper,
      _props$onChangeSize = props.onChangeSize,
      onChangeSize = _props$onChangeSize === void 0 ? function () {} : _props$onChangeSize,
      _props$onChangeWeight = props.onChangeWeight,
      onChangeWeight = _props$onChangeWeight === void 0 ? function () {} : _props$onChangeWeight,
      _props$onChangeStyle = props.onChangeStyle,
      onChangeStyle = _props$onChangeStyle === void 0 ? function () {} : _props$onChangeStyle,
      _props$onChangeSpacin = props.onChangeSpacing,
      onChangeSpacing = _props$onChangeSpacin === void 0 ? function () {} : _props$onChangeSpacin,
      _props$onChangeLine = props.onChangeLine,
      onChangeLine = _props$onChangeLine === void 0 ? function () {} : _props$onChangeLine,
      _props$onChangeUpper = props.onChangeUpper,
      onChangeUpper = _props$onChangeUpper === void 0 ? function () {} : _props$onChangeUpper,
      _props$onResetClick = props.onResetClick,
      onResetClick = _props$onResetClick === void 0 ? function () {} : _props$onResetClick;
  var STYLE = [{
    value: "normal",
    label: "Normal"
  }, {
    value: "italic",
    label: "Italic"
  }, {
    value: "oblique",
    label: "Oblique"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle-title"
  }, /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography", "wpb"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "wpb_control_toggle_button",
    contentClassName: "wp_control_toggle_content",
    position: "bottom right",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, components.includes("size") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size (PX)", "wpb"),
        value: size,
        min: "10",
        max: "100",
        onChange: onChangeSize
      }), components.includes("weight") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight", "wpb"),
        value: weight,
        min: "100",
        max: "900",
        onChange: onChangeWeight,
        onResetClick: onResetClick,
        step: "100"
      }), components.includes("style") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Style", "wpb"),
        options: STYLE,
        value: style,
        onChange: onChangeStyle,
        onResetClick: onResetClick
      }), components.includes("upper") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Uppercase", "wpb"),
        checked: upper,
        onChange: onChangeUpper,
        onResetClick: onResetClick
      }), components.includes("spacing") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Spacing", "wpb"),
        value: spacing,
        step: "0.1",
        min: "0",
        max: "30",
        onChange: onChangeSpacing,
        onResetClick: onResetClick
      }), components.includes("line") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        min: "0.1",
        max: "15",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height", "wpb"),
        value: line,
        onChange: onChangeLine,
        onResetClick: onResetClick
      }));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "./src/components/UnitSizes.js":
/*!*************************************!*\
  !*** ./src/components/UnitSizes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }



var UnitSizes = function UnitSizes(props) {
  var activeUnit = props.activeUnit,
      units = props.units,
      _props$onChangeUnitSi = props.onChangeUnitSize,
      onChangeUnitSize = _props$onChangeUnitSi === void 0 ? function () {} : _props$onChangeUnitSi;
  var unitSizes = ["px", "em", "%"];

  if (undefined !== units) {
    units, _readOnlyError("unitSizes");
  }

  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], null, unitSizes.map(function (unitSize, i) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: i,
      isSmall: true,
      className: "wpb_unit_size_control ".concat(unitSize === activeUnit && "unit_size_control_active_btn"),
      onClick: function onClick() {
        return onChangeUnitSize(unitSize);
      }
    }, unitSize);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitSizes);

/***/ }),

/***/ "./src/components/googleFonts.js":
/*!***************************************!*\
  !*** ./src/components/googleFonts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var addFontToHead = function addFontToHead(fontFamily) {
  var head = document.head;
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css?family=" + fontFamily.replace(/\s+/g, "+") + ":" + "regular";
  head.appendChild(link);
};

/* harmony default export */ __webpack_exports__["default"] = (addFontToHead);

/***/ }),

/***/ "./src/components/googleFontsNames.js":
/*!********************************************!*\
  !*** ./src/components/googleFontsNames.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GoogleFontsNames = [{
  value: "Opens Sans",
  label: "Opens Sans"
}, {
  value: "Bangers",
  label: "Bangers"
}, {
  value: "Arial",
  label: "Arial"
}, {
  value: "Tahoma",
  label: "Tahoma"
}, {
  value: "Verdana",
  label: "Verdana"
}, {
  value: "Helvetica",
  label: "Helvetica"
}, {
  value: "Times New Roman",
  label: "Times New Roman"
}, {
  value: "Trebuchet MS",
  label: "Trebuchet MS"
}, {
  value: "Georgia",
  label: "Georgia"
}, {
  value: "ABeeZee",
  label: "ABeeZee"
}, {
  value: "Abel",
  label: "Abel"
}, {
  value: "Abhaya Libre",
  label: "Abhaya Libre"
}, {
  value: "Abril Fatface",
  label: "Abril Fatface"
}, {
  value: "Aclonica",
  label: "Aclonica"
}, {
  value: "Acme",
  label: "Acme"
}, {
  value: "Actor",
  label: "Actor"
}, {
  value: "Adamina",
  label: "Adamina"
}, {
  value: "Advent Pro",
  label: "Advent Pro"
}, {
  value: "Aguafina Script",
  label: "Aguafina Script"
}, {
  value: "Akronim",
  label: "Akronim"
}, {
  value: "Aladin",
  label: "Aladin"
}, {
  value: "Aldrich",
  label: "Aldrich"
}, {
  value: "Alef",
  label: "Alef"
}, {
  value: "Alef Hebrew",
  label: "Alef Hebrew"
}, {
  value: "Alegreya",
  label: "Alegreya"
}, {
  value: "Alegreya SC",
  label: "Alegreya SC"
}, {
  value: "Alegreya Sans",
  label: "Alegreya Sans"
}, {
  value: "Alegreya Sans SC",
  label: "Alegreya Sans SC"
}, {
  value: "Alex Brush",
  label: "Alex Brush"
}, {
  value: "Alfa Slab One",
  label: "Alfa Slab One"
}, {
  value: "Alice",
  label: "Alice"
}, {
  value: "Alike",
  label: "Alike"
}, {
  value: "Alike Angular",
  label: "Alike Angular"
}, {
  value: "Allan",
  label: "Allan"
}, {
  value: "Allerta",
  label: "Allerta"
}, {
  value: "Allerta Stencil",
  label: "Allerta Stencil"
}, {
  value: "Allura",
  label: "Allura"
}, {
  value: "Almendra",
  label: "Almendra"
}, {
  value: "Almendra Display",
  label: "Almendra Display"
}, {
  value: "Almendra SC",
  label: "Almendra SC"
}, {
  value: "Amarante",
  label: "Amarante"
}, {
  value: "Amaranth",
  label: "Amaranth"
}, {
  value: "Amatic SC",
  label: "Amatic SC"
}, {
  value: "Amethysta",
  label: "Amethysta"
}, {
  value: "Amiko",
  label: "Amiko"
}, {
  value: "Amiri",
  label: "Amiri"
}, {
  value: "Amita",
  label: "Amita"
}, {
  value: "Anaheim",
  label: "Anaheim"
}, {
  value: "Andada",
  label: "Andada"
}, {
  value: "Andika",
  label: "Andika"
}, {
  value: "Angkor",
  label: "Angkor"
}, {
  value: "Annie Use Your Telescope",
  label: "Annie Use Your Telescope"
}, {
  value: "Anonymous Pro",
  label: "Anonymous Pro"
}, {
  value: "Antic",
  label: "Antic"
}, {
  value: "Antic Didone",
  label: "Antic Didone"
}, {
  value: "Antic Slab",
  label: "Antic Slab"
}, {
  value: "Anton",
  label: "Anton"
}, {
  value: "Arapey",
  label: "Arapey"
}, {
  value: "Arbutus",
  label: "Arbutus"
}, {
  value: "Arbutus Slab",
  label: "Arbutus Slab"
}, {
  value: "Architects Daughter",
  label: "Architects Daughter"
}, {
  value: "Archivo",
  label: "Archivo"
}, {
  value: "Archivo Black",
  label: "Archivo Black"
}, {
  value: "Archivo Narrow",
  label: "Archivo Narrow"
}, {
  value: "Aref Ruqaa",
  label: "Aref Ruqaa"
}, {
  value: "Arima Madurai",
  label: "Arima Madurai"
}, {
  value: "Arimo",
  label: "Arimo"
}, {
  value: "Arizonia",
  label: "Arizonia"
}, {
  value: "Armata",
  label: "Armata"
}, {
  value: "Arsenal",
  label: "Arsenal"
}, {
  value: "Artifika",
  label: "Artifika"
}, {
  value: "Arvo",
  label: "Arvo"
}, {
  value: "Arya",
  label: "Arya"
}, {
  value: "Asap",
  label: "Asap"
}, {
  value: "Asap Condensed",
  label: "Asap Condensed"
}, {
  value: "Asar",
  label: "Asar"
}, {
  value: "Asset",
  label: "Asset"
}, {
  value: "Assistant",
  label: "Assistant"
}, {
  value: "Astloch",
  label: "Astloch"
}, {
  value: "Asul",
  label: "Asul"
}, {
  value: "Athiti",
  label: "Athiti"
}, {
  value: "Atma",
  label: "Atma"
}, {
  value: "Atomic Age",
  label: "Atomic Age"
}, {
  value: "Aubrey",
  label: "Aubrey"
}, {
  value: "Audiowide",
  label: "Audiowide"
}, {
  value: "Autour One",
  label: "Autour One"
}, {
  value: "Average",
  label: "Average"
}, {
  value: "Average Sans",
  label: "Average Sans"
}, {
  value: "Averia Gruesa Libre",
  label: "Averia Gruesa Libre"
}, {
  value: "Averia Libre",
  label: "Averia Libre"
}, {
  value: "Averia Sans Libre",
  label: "Averia Sans Libre"
}, {
  value: "Averia Serif Libre",
  label: "Averia Serif Libre"
}, {
  value: "Bad Script",
  label: "Bad Script"
}, {
  value: "Bahiana",
  label: "Bahiana"
}, {
  value: "Bai Jamjuree",
  label: "Bai Jamjuree"
}, {
  value: "Baloo",
  label: "Baloo"
}, {
  value: "Baloo Bhai",
  label: "Baloo Bhai"
}, {
  value: "Baloo Bhaijaan",
  label: "Baloo Bhaijaan"
}, {
  value: "Baloo Bhaina",
  label: "Baloo Bhaina"
}, {
  value: "Baloo Chettan",
  label: "Baloo Chettan"
}, {
  value: "Baloo Da",
  label: "Baloo Da"
}, {
  value: "Baloo Paaji",
  label: "Baloo Paaji"
}, {
  value: "Baloo Tamma",
  label: "Baloo Tamma"
}, {
  value: "Baloo Tammudu",
  label: "Baloo Tammudu"
}, {
  value: "Baloo Thambi",
  label: "Baloo Thambi"
}, {
  value: "Balthazar",
  label: "Balthazar"
}, {
  value: "Bangers",
  label: "Bangers"
}, {
  value: "Barlow",
  label: "Barlow"
}, {
  value: "Barlow Condensed",
  label: "Barlow Condensed"
}, {
  value: "Barlow Semi Condensed",
  label: "Barlow Semi Condensed"
}, {
  value: "Barrio",
  label: "Barrio"
}, {
  value: "Basic",
  label: "Basic"
}, {
  value: "Battambang",
  label: "Battambang"
}, {
  value: "Baumans",
  label: "Baumans"
}, {
  value: "Bayon",
  label: "Bayon"
}, {
  value: "Belgrano",
  label: "Belgrano"
}, {
  value: "Bellefair",
  label: "Bellefair"
}, {
  value: "Belleza",
  label: "Belleza"
}, {
  value: "BenchNine",
  label: "BenchNine"
}, {
  value: "Bentham",
  label: "Bentham"
}, {
  value: "Berkshire Swash",
  label: "Berkshire Swash"
}, {
  value: "Bevan",
  label: "Bevan"
}, {
  value: "Bigelow Rules",
  label: "Bigelow Rules"
}, {
  value: "Bigshot One",
  label: "Bigshot One"
}, {
  value: "Bilbo",
  label: "Bilbo"
}, {
  value: "Bilbo Swash Caps",
  label: "Bilbo Swash Caps"
}, {
  value: "BioRhyme",
  label: "BioRhyme"
}, {
  value: "BioRhyme Expanded",
  label: "BioRhyme Expanded"
}, {
  value: "Biryani",
  label: "Biryani"
}, {
  value: "Bitter",
  label: "Bitter"
}, {
  value: "Black And White Picture",
  label: "Black And White Picture"
}, {
  value: "Black Han Sans",
  label: "Black Han Sans"
}, {
  value: "Black Ops One",
  label: "Black Ops One"
}, {
  value: "Bokor",
  label: "Bokor"
}, {
  value: "Bonbon",
  label: "Bonbon"
}, {
  value: "Boogaloo",
  label: "Boogaloo"
}, {
  value: "Bowlby One",
  label: "Bowlby One"
}, {
  value: "Bowlby One SC",
  label: "Bowlby One SC"
}, {
  value: "Brawler",
  label: "Brawler"
}, {
  value: "Bree Serif",
  label: "Bree Serif"
}, {
  value: "Bubblegum Sans",
  label: "Bubblegum Sans"
}, {
  value: "Bubbler One",
  label: "Bubbler One"
}, {
  value: "Buda",
  label: "Buda"
}, {
  value: "Buenard",
  label: "Buenard"
}, {
  value: "Bungee",
  label: "Bungee"
}, {
  value: "Bungee Hairline",
  label: "Bungee Hairline"
}, {
  value: "Bungee Inline",
  label: "Bungee Inline"
}, {
  value: "Bungee Outline",
  label: "Bungee Outline"
}, {
  value: "Bungee Shade",
  label: "Bungee Shade"
}, {
  value: "Butcherman",
  label: "Butcherman"
}, {
  value: "Butterfly Kids",
  label: "Butterfly Kids"
}, {
  value: "Cabin",
  label: "Cabin"
}, {
  value: "Cabin Condensed",
  label: "Cabin Condensed"
}, {
  value: "Cabin Sketch",
  label: "Cabin Sketch"
}, {
  value: "Caesar Dressing",
  label: "Caesar Dressing"
}, {
  value: "Cagliostro",
  label: "Cagliostro"
}, {
  value: "Cairo",
  label: "Cairo"
}, {
  value: "Calligraffitti",
  label: "Calligraffitti"
}, {
  value: "Cambay",
  label: "Cambay"
}, {
  value: "Cambo",
  label: "Cambo"
}, {
  value: "Candal",
  label: "Candal"
}, {
  value: "Cantarell",
  label: "Cantarell"
}, {
  value: "Cantata One",
  label: "Cantata One"
}, {
  value: "Cantora One",
  label: "Cantora One"
}, {
  value: "Capriola",
  label: "Capriola"
}, {
  value: "Cardo",
  label: "Cardo"
}, {
  value: "Carme",
  label: "Carme"
}, {
  value: "Carrois Gothic",
  label: "Carrois Gothic"
}, {
  value: "Carrois Gothic SC",
  label: "Carrois Gothic SC"
}, {
  value: "Carter One",
  label: "Carter One"
}, {
  value: "Catamaran",
  label: "Catamaran"
}, {
  value: "Caudex",
  label: "Caudex"
}, {
  value: "Caveat",
  label: "Caveat"
}, {
  value: "Caveat Brush",
  label: "Caveat Brush"
}, {
  value: "Cedarville Cursive",
  label: "Cedarville Cursive"
}, {
  value: "Ceviche One",
  label: "Ceviche One"
}, {
  value: "Chakra Petch",
  label: "Chakra Petch"
}, {
  value: "Changa",
  label: "Changa"
}, {
  value: "Changa One",
  label: "Changa One"
}, {
  value: "Chango",
  label: "Chango"
}, {
  value: "Charmonman",
  label: "Charmonman"
}, {
  value: "Chathura",
  label: "Chathura"
}, {
  value: "Chau Philomene One",
  label: "Chau Philomene One"
}, {
  value: "Chela One",
  label: "Chela One"
}, {
  value: "Chelsea Market",
  label: "Chelsea Market"
}, {
  value: "Chenla",
  label: "Chenla"
}, {
  value: "Cherry Cream Soda",
  label: "Cherry Cream Soda"
}, {
  value: "Cherry Swash",
  label: "Cherry Swash"
}, {
  value: "Chewy",
  label: "Chewy"
}, {
  value: "Chicle",
  label: "Chicle"
}, {
  value: "Chivo",
  label: "Chivo"
}, {
  value: "Chonburi",
  label: "Chonburi"
}, {
  value: "Cinzel",
  label: "Cinzel"
}, {
  value: "Cinzel Decorative",
  label: "Cinzel Decorative"
}, {
  value: "Clicker Script",
  label: "Clicker Script"
}, {
  value: "Coda",
  label: "Coda"
}, {
  value: "Coda Caption",
  label: "Coda Caption"
}, {
  value: "Codystar",
  label: "Codystar"
}, {
  value: "Coiny",
  label: "Coiny"
}, {
  value: "Combo",
  label: "Combo"
}, {
  value: "Comfortaa",
  label: "Comfortaa"
}, {
  value: "Coming Soon",
  label: "Coming Soon"
}, {
  value: "Concert One",
  label: "Concert One"
}, {
  value: "Condiment",
  label: "Condiment"
}, {
  value: "Content",
  label: "Content"
}, {
  value: "Contrail One",
  label: "Contrail One"
}, {
  value: "Convergence",
  label: "Convergence"
}, {
  value: "Cookie",
  label: "Cookie"
}, {
  value: "Copse",
  label: "Copse"
}, {
  value: "Corben",
  label: "Corben"
}, {
  value: "Cormorant",
  label: "Cormorant"
}, {
  value: "Cormorant Garamond",
  label: "Cormorant Garamond"
}, {
  value: "Cormorant Infant",
  label: "Cormorant Infant"
}, {
  value: "Cormorant SC",
  label: "Cormorant SC"
}, {
  value: "Cormorant Unicase",
  label: "Cormorant Unicase"
}, {
  value: "Cormorant Upright",
  label: "Cormorant Upright"
}, {
  value: "Courgette",
  label: "Courgette"
}, {
  value: "Cousine",
  label: "Cousine"
}, {
  value: "Coustard",
  label: "Coustard"
}, {
  value: "Covered By Your Grace",
  label: "Covered By Your Grace"
}, {
  value: "Crafty Girls",
  label: "Crafty Girls"
}, {
  value: "Creepster",
  label: "Creepster"
}, {
  value: "Crete Round",
  label: "Crete Round"
}, {
  value: "Crimson Text",
  label: "Crimson Text"
}, {
  value: "Croissant One",
  label: "Croissant One"
}, {
  value: "Crushed",
  label: "Crushed"
}, {
  value: "Cuprum",
  label: "Cuprum"
}, {
  value: "Cute Font",
  label: "Cute Font"
}, {
  value: "Cutive",
  label: "Cutive"
}, {
  value: "Cutive Mono",
  label: "Cutive Mono"
}, {
  value: "Damion",
  label: "Damion"
}, {
  value: "Dancing Script",
  label: "Dancing Script"
}, {
  value: "Dangrek",
  label: "Dangrek"
}, {
  value: "David Libre",
  label: "David Libre"
}, {
  value: "Dawning of a New Day",
  label: "Dawning of a New Day"
}, {
  value: "Days One",
  label: "Days One"
}, {
  value: "Dekko",
  label: "Dekko"
}, {
  value: "Delius",
  label: "Delius"
}, {
  value: "Delius Swash Caps",
  label: "Delius Swash Caps"
}, {
  value: "Delius Unicase",
  label: "Delius Unicase"
}, {
  value: "Della Respira",
  label: "Della Respira"
}, {
  value: "Denk One",
  label: "Denk One"
}, {
  value: "Devonshire",
  label: "Devonshire"
}, {
  value: "Dhurjati",
  label: "Dhurjati"
}, {
  value: "Didact Gothic",
  label: "Didact Gothic"
}, {
  value: "Diplomata",
  label: "Diplomata"
}, {
  value: "Diplomata SC",
  label: "Diplomata SC"
}, {
  value: "Do Hyeon",
  label: "Do Hyeon"
}, {
  value: "Dokdo",
  label: "Dokdo"
}, {
  value: "Domine",
  label: "Domine"
}, {
  value: "Donegal One",
  label: "Donegal One"
}, {
  value: "Doppio One",
  label: "Doppio One"
}, {
  value: "Dorsa",
  label: "Dorsa"
}, {
  value: "Dosis",
  label: "Dosis"
}, {
  value: "Dr Sugiyama",
  label: "Dr Sugiyama"
}, {
  value: "Droid Arabic Kufi",
  label: "Droid Arabic Kufi"
}, {
  value: "Droid Arabic Naskh",
  label: "Droid Arabic Naskh"
}, {
  value: "Duru Sans",
  label: "Duru Sans"
}, {
  value: "Dynalight",
  label: "Dynalight"
}, {
  value: "EB Garamond",
  label: "EB Garamond"
}, {
  value: "Eagle Lake",
  label: "Eagle Lake"
}, {
  value: "East Sea Dokdo",
  label: "East Sea Dokdo"
}, {
  value: "Eater",
  label: "Eater"
}, {
  value: "Economica",
  label: "Economica"
}, {
  value: "Eczar",
  label: "Eczar"
}, {
  value: "El Messiri",
  label: "El Messiri"
}, {
  value: "Electrolize",
  label: "Electrolize"
}, {
  value: "Elsie",
  label: "Elsie"
}, {
  value: "Elsie Swash Caps",
  label: "Elsie Swash Caps"
}, {
  value: "Emblema One",
  label: "Emblema One"
}, {
  value: "Emilys Candy",
  label: "Emilys Candy"
}, {
  value: "Encode Sans",
  label: "Encode Sans"
}, {
  value: "Encode Sans Condensed",
  label: "Encode Sans Condensed"
}, {
  value: "Encode Sans Expanded",
  label: "Encode Sans Expanded"
}, {
  value: "Encode Sans Semi Condensed",
  label: "Encode Sans Semi Condensed"
}, {
  value: "Encode Sans Semi Expanded",
  label: "Encode Sans Semi Expanded"
}, {
  value: "Engagement",
  label: "Engagement"
}, {
  value: "Englebert",
  label: "Englebert"
}, {
  value: "Enriqueta",
  label: "Enriqueta"
}, {
  value: "Erica One",
  label: "Erica One"
}, {
  value: "Esteban",
  label: "Esteban"
}, {
  value: "Euphoria Script",
  label: "Euphoria Script"
}, {
  value: "Ewert",
  label: "Ewert"
}, {
  value: "Exo",
  label: "Exo"
}, {
  value: "Exo 2",
  label: "Exo 2"
}, {
  value: "Expletus Sans",
  label: "Expletus Sans"
}, {
  value: "Fahkwang",
  label: "Fahkwang"
}, {
  value: "Fanwood Text",
  label: "Fanwood Text"
}, {
  value: "Farsan",
  label: "Farsan"
}, {
  value: "Fascinate",
  label: "Fascinate"
}, {
  value: "Fascinate Inline",
  label: "Fascinate Inline"
}, {
  value: "Faster One",
  label: "Faster One"
}, {
  value: "Fasthand",
  label: "Fasthand"
}, {
  value: "Fauna One",
  label: "Fauna One"
}, {
  value: "Faustina",
  label: "Faustina"
}, {
  value: "Federant",
  label: "Federant"
}, {
  value: "Federo",
  label: "Federo"
}, {
  value: "Felipa",
  label: "Felipa"
}, {
  value: "Fenix",
  label: "Fenix"
}, {
  value: "Finger Paint",
  label: "Finger Paint"
}, {
  value: "Fira Mono",
  label: "Fira Mono"
}, {
  value: "Fira Sans",
  label: "Fira Sans"
}, {
  value: "Fira Sans Condensed",
  label: "Fira Sans Condensed"
}, {
  value: "Fira Sans Extra Condensed",
  label: "Fira Sans Extra Condensed"
}, {
  value: "Fjalla One",
  label: "Fjalla One"
}, {
  value: "Fjord One",
  label: "Fjord One"
}, {
  value: "Flamenco",
  label: "Flamenco"
}, {
  value: "Flavors",
  label: "Flavors"
}, {
  value: "Fondamento",
  label: "Fondamento"
}, {
  value: "Fontdiner Swanky",
  label: "Fontdiner Swanky"
}, {
  value: "Forum",
  label: "Forum"
}, {
  value: "Francois One",
  label: "Francois One"
}, {
  value: "Frank Ruhl Libre",
  label: "Frank Ruhl Libre"
}, {
  value: "Freckle Face",
  label: "Freckle Face"
}, {
  value: "Fredericka the Great",
  label: "Fredericka the Great"
}, {
  value: "Fredoka One",
  label: "Fredoka One"
}, {
  value: "Freehand",
  label: "Freehand"
}, {
  value: "Fresca",
  label: "Fresca"
}, {
  value: "Frijole",
  label: "Frijole"
}, {
  value: "Fruktur",
  label: "Fruktur"
}, {
  value: "Fugaz One",
  label: "Fugaz One"
}, {
  value: "GFS Didot",
  label: "GFS Didot"
}, {
  value: "GFS Neohellenic",
  label: "GFS Neohellenic"
}, {
  value: "Gabriela",
  label: "Gabriela"
}, {
  value: "Gaegu",
  label: "Gaegu"
}, {
  value: "Gafata",
  label: "Gafata"
}, {
  value: "Galada",
  label: "Galada"
}, {
  value: "Galdeano",
  label: "Galdeano"
}, {
  value: "Galindo",
  label: "Galindo"
}, {
  value: "Gamja Flower",
  label: "Gamja Flower"
}, {
  value: "Gentium Basic",
  label: "Gentium Basic"
}, {
  value: "Gentium Book Basic",
  label: "Gentium Book Basic"
}, {
  value: "Geo",
  label: "Geo"
}, {
  value: "Geostar",
  label: "Geostar"
}, {
  value: "Geostar Fill",
  label: "Geostar Fill"
}, {
  value: "Germania One",
  label: "Germania One"
}, {
  value: "Gidugu",
  label: "Gidugu"
}, {
  value: "Gilda Display",
  label: "Gilda Display"
}, {
  value: "Give You Glory",
  label: "Give You Glory"
}, {
  value: "Glass Antiqua",
  label: "Glass Antiqua"
}, {
  value: "Glegoo",
  label: "Glegoo"
}, {
  value: "Gloria Hallelujah",
  label: "Gloria Hallelujah"
}, {
  value: "Goblin One",
  label: "Goblin One"
}, {
  value: "Gochi Hand",
  label: "Gochi Hand"
}, {
  value: "Gorditas",
  label: "Gorditas"
}, {
  value: "Gothic A1",
  label: "Gothic A1"
}, {
  value: "Goudy Bookletter 1911",
  label: "Goudy Bookletter 1911"
}, {
  value: "Graduate",
  label: "Graduate"
}, {
  value: "Grand Hotel",
  label: "Grand Hotel"
}, {
  value: "Gravitas One",
  label: "Gravitas One"
}, {
  value: "Great Vibes",
  label: "Great Vibes"
}, {
  value: "Griffy",
  label: "Griffy"
}, {
  value: "Gruppo",
  label: "Gruppo"
}, {
  value: "Gudea",
  label: "Gudea"
}, {
  value: "Gugi",
  label: "Gugi"
}, {
  value: "Gurajada",
  label: "Gurajada"
}, {
  value: "Habibi",
  label: "Habibi"
}, {
  value: "Halant",
  label: "Halant"
}, {
  value: "Hammersmith One",
  label: "Hammersmith One"
}, {
  value: "Hanalei",
  label: "Hanalei"
}, {
  value: "Hanalei Fill",
  label: "Hanalei Fill"
}, {
  value: "Handlee",
  label: "Handlee"
}, {
  value: "Hanuman",
  label: "Hanuman"
}, {
  value: "Happy Monkey",
  label: "Happy Monkey"
}, {
  value: "Harmattan",
  label: "Harmattan"
}, {
  value: "Headland One",
  label: "Headland One"
}, {
  value: "Heebo",
  label: "Heebo"
}, {
  value: "Henny Penny",
  label: "Henny Penny"
}, {
  value: "Herr Von Muellerhoff",
  label: "Herr Von Muellerhoff"
}, {
  value: "Hi Melody",
  label: "Hi Melody"
}, {
  value: "Hind",
  label: "Hind"
}, {
  value: "Hind Guntur",
  label: "Hind Guntur"
}, {
  value: "Hind Madurai",
  label: "Hind Madurai"
}, {
  value: "Hind Siliguri",
  label: "Hind Siliguri"
}, {
  value: "Hind Vadodara",
  label: "Hind Vadodara"
}, {
  value: "Holtwood One SC",
  label: "Holtwood One SC"
}, {
  value: "Homemade Apple",
  label: "Homemade Apple"
}, {
  value: "Homenaje",
  label: "Homenaje"
}, {
  value: "IBM Plex Mono",
  label: "IBM Plex Mono"
}, {
  value: "IBM Plex Sans",
  label: "IBM Plex Sans"
}, {
  value: "IBM Plex Sans Condensed",
  label: "IBM Plex Sans Condensed"
}, {
  value: "IBM Plex Serif",
  label: "IBM Plex Serif"
}, {
  value: "IM Fell DW Pica",
  label: "IM Fell DW Pica"
}, {
  value: "IM Fell DW Pica SC",
  label: "IM Fell DW Pica SC"
}, {
  value: "IM Fell Double Pica",
  label: "IM Fell Double Pica"
}, {
  value: "IM Fell Double Pica SC",
  label: "IM Fell Double Pica SC"
}, {
  value: "IM Fell English",
  label: "IM Fell English"
}, {
  value: "IM Fell English SC",
  label: "IM Fell English SC"
}, {
  value: "IM Fell French Canon",
  label: "IM Fell French Canon"
}, {
  value: "IM Fell French Canon SC",
  label: "IM Fell French Canon SC"
}, {
  value: "IM Fell Great Primer",
  label: "IM Fell Great Primer"
}, {
  value: "IM Fell Great Primer SC",
  label: "IM Fell Great Primer SC"
}, {
  value: "Iceberg",
  label: "Iceberg"
}, {
  value: "Iceland",
  label: "Iceland"
}, {
  value: "Imprima",
  label: "Imprima"
}, {
  value: "Inconsolata",
  label: "Inconsolata"
}, {
  value: "Inder",
  label: "Inder"
}, {
  value: "Indie Flower",
  label: "Indie Flower"
}, {
  value: "Inika",
  label: "Inika"
}, {
  value: "Inknut Antiqua",
  label: "Inknut Antiqua"
}, {
  value: "Irish Grover",
  label: "Irish Grover"
}, {
  value: "Istok Web",
  label: "Istok Web"
}, {
  value: "Italiana",
  label: "Italiana"
}, {
  value: "Italianno",
  label: "Italianno"
}, {
  value: "Itim",
  label: "Itim"
}, {
  value: "Jacques Francois",
  label: "Jacques Francois"
}, {
  value: "Jacques Francois Shadow",
  label: "Jacques Francois Shadow"
}, {
  value: "Jaldi",
  label: "Jaldi"
}, {
  value: "Jim Nightshade",
  label: "Jim Nightshade"
}, {
  value: "Jockey One",
  label: "Jockey One"
}, {
  value: "Jolly Lodger",
  label: "Jolly Lodger"
}, {
  value: "Jomhuria",
  label: "Jomhuria"
}, {
  value: "Josefin Sans",
  label: "Josefin Sans"
}, {
  value: "Josefin Slab",
  label: "Josefin Slab"
}, {
  value: "Joti One",
  label: "Joti One"
}, {
  value: "Jua",
  label: "Jua"
}, {
  value: "Judson",
  label: "Judson"
}, {
  value: "Julee",
  label: "Julee"
}, {
  value: "Julius Sans One",
  label: "Julius Sans One"
}, {
  value: "Junge",
  label: "Junge"
}, {
  value: "Jura",
  label: "Jura"
}, {
  value: "Just Another Hand",
  label: "Just Another Hand"
}, {
  value: "Just Me Again Down Here",
  label: "Just Me Again Down Here"
}, {
  value: "K2D",
  label: "K2D"
}, {
  value: "Kadwa",
  label: "Kadwa"
}, {
  value: "Kalam",
  label: "Kalam"
}, {
  value: "Kameron",
  label: "Kameron"
}, {
  value: "Kanit",
  label: "Kanit"
}, {
  value: "Kantumruy",
  label: "Kantumruy"
}, {
  value: "Karla",
  label: "Karla"
}, {
  value: "Karma",
  label: "Karma"
}, {
  value: "Katibeh",
  label: "Katibeh"
}, {
  value: "Kaushan Script",
  label: "Kaushan Script"
}, {
  value: "Kavivanar",
  label: "Kavivanar"
}, {
  value: "Kavoon",
  label: "Kavoon"
}, {
  value: "Kdam Thmor",
  label: "Kdam Thmor"
}, {
  value: "Keania One",
  label: "Keania One"
}, {
  value: "Kelly Slab",
  label: "Kelly Slab"
}, {
  value: "Kenia",
  label: "Kenia"
}, {
  value: "Khand",
  label: "Khand"
}, {
  value: "Khmer",
  label: "Khmer"
}, {
  value: "Khula",
  label: "Khula"
}, {
  value: "Kirang Haerang",
  label: "Kirang Haerang"
}, {
  value: "Kite One",
  label: "Kite One"
}, {
  value: "Knewave",
  label: "Knewave"
}, {
  value: "KoHo",
  label: "KoHo"
}, {
  value: "Kodchasan",
  label: "Kodchasan"
}, {
  value: "Kosugi",
  label: "Kosugi"
}, {
  value: "Kosugi Maru",
  label: "Kosugi Maru"
}, {
  value: "Kotta One",
  label: "Kotta One"
}, {
  value: "Koulen",
  label: "Koulen"
}, {
  value: "Kranky",
  label: "Kranky"
}, {
  value: "Kreon",
  label: "Kreon"
}, {
  value: "Kristi",
  label: "Kristi"
}, {
  value: "Krona One",
  label: "Krona One"
}, {
  value: "Krub",
  label: "Krub"
}, {
  value: "Kumar One",
  label: "Kumar One"
}, {
  value: "Kumar One Outline",
  label: "Kumar One Outline"
}, {
  value: "Kurale",
  label: "Kurale"
}, {
  value: "La Belle Aurore",
  label: "La Belle Aurore"
}, {
  value: "Laila",
  label: "Laila"
}, {
  value: "Lakki Reddy",
  label: "Lakki Reddy"
}, {
  value: "Lalezar",
  label: "Lalezar"
}, {
  value: "Lancelot",
  label: "Lancelot"
}, {
  value: "Lateef",
  label: "Lateef"
}, {
  value: "Lato",
  label: "Lato"
}, {
  value: "League Script",
  label: "League Script"
}, {
  value: "Leckerli One",
  label: "Leckerli One"
}, {
  value: "Ledger",
  label: "Ledger"
}, {
  value: "Lekton",
  label: "Lekton"
}, {
  value: "Lemon",
  label: "Lemon"
}, {
  value: "Lemonada",
  label: "Lemonada"
}, {
  value: "Libre Barcode 128",
  label: "Libre Barcode 128"
}, {
  value: "Libre Barcode 128 Text",
  label: "Libre Barcode 128 Text"
}, {
  value: "Libre Barcode 39",
  label: "Libre Barcode 39"
}, {
  value: "Libre Barcode 39 Extended",
  label: "Libre Barcode 39 Extended"
}, {
  value: "Libre Barcode 39 Extended Text",
  label: "Libre Barcode 39 Extended Text"
}, {
  value: "Libre Barcode 39 Text",
  label: "Libre Barcode 39 Text"
}, {
  value: "Libre Baskerville",
  label: "Libre Baskerville"
}, {
  value: "Libre Franklin",
  label: "Libre Franklin"
}, {
  value: "Life Savers",
  label: "Life Savers"
}, {
  value: "Lilita One",
  label: "Lilita One"
}, {
  value: "Lily Script One",
  label: "Lily Script One"
}, {
  value: "Limelight",
  label: "Limelight"
}, {
  value: "Linden Hill",
  label: "Linden Hill"
}, {
  value: "Lobster",
  label: "Lobster"
}, {
  value: "Lobster Two",
  label: "Lobster Two"
}, {
  value: "Londrina Outline",
  label: "Londrina Outline"
}, {
  value: "Londrina Shadow",
  label: "Londrina Shadow"
}, {
  value: "Londrina Sketch",
  label: "Londrina Sketch"
}, {
  value: "Londrina Solid",
  label: "Londrina Solid"
}, {
  value: "Lora",
  label: "Lora"
}, {
  value: "Love Ya Like A Sister",
  label: "Love Ya Like A Sister"
}, {
  value: "Loved by the King",
  label: "Loved by the King"
}, {
  value: "Lovers Quarrel",
  label: "Lovers Quarrel"
}, {
  value: "Luckiest Guy",
  label: "Luckiest Guy"
}, {
  value: "Lusitana",
  label: "Lusitana"
}, {
  value: "Lustria",
  label: "Lustria"
}, {
  value: "M PLUS 1p",
  label: "M PLUS 1p"
}, {
  value: "M PLUS Rounded 1c",
  label: "M PLUS Rounded 1c"
}, {
  value: "Macondo",
  label: "Macondo"
}, {
  value: "Macondo Swash Caps",
  label: "Macondo Swash Caps"
}, {
  value: "Mada",
  label: "Mada"
}, {
  value: "Magra",
  label: "Magra"
}, {
  value: "Maiden Orange",
  label: "Maiden Orange"
}, {
  value: "Maitree",
  label: "Maitree"
}, {
  value: "Mako",
  label: "Mako"
}, {
  value: "Mali",
  label: "Mali"
}, {
  value: "Mallanna",
  label: "Mallanna"
}, {
  value: "Mandali",
  label: "Mandali"
}, {
  value: "Manuale",
  label: "Manuale"
}, {
  value: "Marcellus",
  label: "Marcellus"
}, {
  value: "Marcellus SC",
  label: "Marcellus SC"
}, {
  value: "Marck Script",
  label: "Marck Script"
}, {
  value: "Margarine",
  label: "Margarine"
}, {
  value: "Markazi Text",
  label: "Markazi Text"
}, {
  value: "Marko One",
  label: "Marko One"
}, {
  value: "Marmelad",
  label: "Marmelad"
}, {
  value: "Martel",
  label: "Martel"
}, {
  value: "Martel Sans",
  label: "Martel Sans"
}, {
  value: "Marvel",
  label: "Marvel"
}, {
  value: "Mate",
  label: "Mate"
}, {
  value: "Mate SC",
  label: "Mate SC"
}, {
  value: "Maven Pro",
  label: "Maven Pro"
}, {
  value: "McLaren",
  label: "McLaren"
}, {
  value: "Meddon",
  label: "Meddon"
}, {
  value: "MedievalSharp",
  label: "MedievalSharp"
}, {
  value: "Medula One",
  label: "Medula One"
}, {
  value: "Meera Inimai",
  label: "Meera Inimai"
}, {
  value: "Megrim",
  label: "Megrim"
}, {
  value: "Meie Script",
  label: "Meie Script"
}, {
  value: "Merienda",
  label: "Merienda"
}, {
  value: "Merienda One",
  label: "Merienda One"
}, {
  value: "Merriweather",
  label: "Merriweather"
}, {
  value: "Merriweather Sans",
  label: "Merriweather Sans"
}, {
  value: "Metal",
  label: "Metal"
}, {
  value: "Metal Mania",
  label: "Metal Mania"
}, {
  value: "Metamorphous",
  label: "Metamorphous"
}, {
  value: "Metrophobic",
  label: "Metrophobic"
}, {
  value: "Michroma",
  label: "Michroma"
}, {
  value: "Milonga",
  label: "Milonga"
}, {
  value: "Miltonian",
  label: "Miltonian"
}, {
  value: "Miltonian Tattoo",
  label: "Miltonian Tattoo"
}, {
  value: "Mina",
  label: "Mina"
}, {
  value: "Miniver",
  label: "Miniver"
}, {
  value: "Miriam Libre",
  label: "Miriam Libre"
}, {
  value: "Mirza",
  label: "Mirza"
}, {
  value: "Miss Fajardose",
  label: "Miss Fajardose"
}, {
  value: "Mitr",
  label: "Mitr"
}, {
  value: "Modak",
  label: "Modak"
}, {
  value: "Modern Antiqua",
  label: "Modern Antiqua"
}, {
  value: "Mogra",
  label: "Mogra"
}, {
  value: "Molengo",
  label: "Molengo"
}, {
  value: "Molle",
  label: "Molle"
}, {
  value: "Monda",
  label: "Monda"
}, {
  value: "Monofett",
  label: "Monofett"
}, {
  value: "Monoton",
  label: "Monoton"
}, {
  value: "Monsieur La Doulaise",
  label: "Monsieur La Doulaise"
}, {
  value: "Montaga",
  label: "Montaga"
}, {
  value: "Montez",
  label: "Montez"
}, {
  value: "Montserrat",
  label: "Montserrat"
}, {
  value: "Montserrat Alternates",
  label: "Montserrat Alternates"
}, {
  value: "Montserrat Subrayada",
  label: "Montserrat Subrayada"
}, {
  value: "Moul",
  label: "Moul"
}, {
  value: "Moulpali",
  label: "Moulpali"
}, {
  value: "Mountains of Christmas",
  label: "Mountains of Christmas"
}, {
  value: "Mouse Memoirs",
  label: "Mouse Memoirs"
}, {
  value: "Mr Bedfort",
  label: "Mr Bedfort"
}, {
  value: "Mr Dafoe",
  label: "Mr Dafoe"
}, {
  value: "Mr De Haviland",
  label: "Mr De Haviland"
}, {
  value: "Mrs Saint Delafield",
  label: "Mrs Saint Delafield"
}, {
  value: "Mrs Sheppards",
  label: "Mrs Sheppards"
}, {
  value: "Mukta",
  label: "Mukta"
}, {
  value: "Mukta Mahee",
  label: "Mukta Mahee"
}, {
  value: "Mukta Malar",
  label: "Mukta Malar"
}, {
  value: "Mukta Vaani",
  label: "Mukta Vaani"
}, {
  value: "Muli",
  label: "Muli"
}, {
  value: "Mystery Quest",
  label: "Mystery Quest"
}, {
  value: "NTR",
  label: "NTR"
}, {
  value: "Nanum Brush Script",
  label: "Nanum Brush Script"
}, {
  value: "Nanum Gothic",
  label: "Nanum Gothic"
}, {
  value: "Nanum Gothic Coding",
  label: "Nanum Gothic Coding"
}, {
  value: "Nanum Myeongjo",
  label: "Nanum Myeongjo"
}, {
  value: "Nanum Pen Script",
  label: "Nanum Pen Script"
}, {
  value: "Neucha",
  label: "Neucha"
}, {
  value: "Neuton",
  label: "Neuton"
}, {
  value: "New Rocker",
  label: "New Rocker"
}, {
  value: "News Cycle",
  label: "News Cycle"
}, {
  value: "Niconne",
  label: "Niconne"
}, {
  value: "Niramit",
  label: "Niramit"
}, {
  value: "Nixie One",
  label: "Nixie One"
}, {
  value: "Nobile",
  label: "Nobile"
}, {
  value: "Nokora",
  label: "Nokora"
}, {
  value: "Norican",
  label: "Norican"
}, {
  value: "Nosifer",
  label: "Nosifer"
}, {
  value: "Notable",
  label: "Notable"
}, {
  value: "Nothing You Could Do",
  label: "Nothing You Could Do"
}, {
  value: "Noticia Text",
  label: "Noticia Text"
}, {
  value: "Noto Kufi Arabic",
  label: "Noto Kufi Arabic"
}, {
  value: "Noto Naskh Arabic",
  label: "Noto Naskh Arabic"
}, {
  value: "Noto Sans",
  label: "Noto Sans"
}, {
  value: "Noto Sans Hebrew",
  label: "Noto Sans Hebrew"
}, {
  value: "Noto Sans JP",
  label: "Noto Sans JP"
}, {
  value: "Noto Sans KR",
  label: "Noto Sans KR"
}, {
  value: "Noto Serif",
  label: "Noto Serif"
}, {
  value: "Noto Serif JP",
  label: "Noto Serif JP"
}, {
  value: "Noto Serif KR",
  label: "Noto Serif KR"
}, {
  value: "Nova Cut",
  label: "Nova Cut"
}, {
  value: "Nova Flat",
  label: "Nova Flat"
}, {
  value: "Nova Mono",
  label: "Nova Mono"
}, {
  value: "Nova Oval",
  label: "Nova Oval"
}, {
  value: "Nova Round",
  label: "Nova Round"
}, {
  value: "Nova Script",
  label: "Nova Script"
}, {
  value: "Nova Slim",
  label: "Nova Slim"
}, {
  value: "Nova Square",
  label: "Nova Square"
}, {
  value: "Numans",
  label: "Numans"
}, {
  value: "Nunito",
  label: "Nunito"
}, {
  value: "Nunito Sans",
  label: "Nunito Sans"
}, {
  value: "Odor Mean Chey",
  label: "Odor Mean Chey"
}, {
  value: "Offside",
  label: "Offside"
}, {
  value: "Old Standard TT",
  label: "Old Standard TT"
}, {
  value: "Oldenburg",
  label: "Oldenburg"
}, {
  value: "Oleo Script",
  label: "Oleo Script"
}, {
  value: "Oleo Script Swash Caps",
  label: "Oleo Script Swash Caps"
}, {
  value: "Open Sans",
  label: "Open Sans"
}, {
  value: "Open Sans Condensed",
  label: "Open Sans Condensed"
}, {
  value: "Open Sans Hebrew",
  label: "Open Sans Hebrew"
}, {
  value: "Open Sans Hebrew Condensed",
  label: "Open Sans Hebrew Condensed"
}, {
  value: "Oranienbaum",
  label: "Oranienbaum"
}, {
  value: "Orbitron",
  label: "Orbitron"
}, {
  value: "Oregano",
  label: "Oregano"
}, {
  value: "Orienta",
  label: "Orienta"
}, {
  value: "Original Surfer",
  label: "Original Surfer"
}, {
  value: "Oswald",
  label: "Oswald"
}, {
  value: "Over the Rainbow",
  label: "Over the Rainbow"
}, {
  value: "Overlock",
  label: "Overlock"
}, {
  value: "Overlock SC",
  label: "Overlock SC"
}, {
  value: "Overpass",
  label: "Overpass"
}, {
  value: "Overpass Mono",
  label: "Overpass Mono"
}, {
  value: "Ovo",
  label: "Ovo"
}, {
  value: "Oxygen",
  label: "Oxygen"
}, {
  value: "Oxygen Mono",
  label: "Oxygen Mono"
}, {
  value: "PT Mono",
  label: "PT Mono"
}, {
  value: "PT Sans",
  label: "PT Sans"
}, {
  value: "PT Sans Caption",
  label: "PT Sans Caption"
}, {
  value: "PT Sans Narrow",
  label: "PT Sans Narrow"
}, {
  value: "PT Serif",
  label: "PT Serif"
}, {
  value: "PT Serif Caption",
  label: "PT Serif Caption"
}, {
  value: "Pacifico",
  label: "Pacifico"
}, {
  value: "Padauk",
  label: "Padauk"
}, {
  value: "Palanquin",
  label: "Palanquin"
}, {
  value: "Palanquin Dark",
  label: "Palanquin Dark"
}, {
  value: "Pangolin",
  label: "Pangolin"
}, {
  value: "Paprika",
  label: "Paprika"
}, {
  value: "Parisienne",
  label: "Parisienne"
}, {
  value: "Passero One",
  label: "Passero One"
}, {
  value: "Passion One",
  label: "Passion One"
}, {
  value: "Pathway Gothic One",
  label: "Pathway Gothic One"
}, {
  value: "Patrick Hand",
  label: "Patrick Hand"
}, {
  value: "Patrick Hand SC",
  label: "Patrick Hand SC"
}, {
  value: "Pattaya",
  label: "Pattaya"
}, {
  value: "Patua One",
  label: "Patua One"
}, {
  value: "Pavanam",
  label: "Pavanam"
}, {
  value: "Paytone One",
  label: "Paytone One"
}, {
  value: "Peddana",
  label: "Peddana"
}, {
  value: "Peralta",
  label: "Peralta"
}, {
  value: "Permanent Marker",
  label: "Permanent Marker"
}, {
  value: "Petit Formal Script",
  label: "Petit Formal Script"
}, {
  value: "Petrona",
  label: "Petrona"
}, {
  value: "Philosopher",
  label: "Philosopher"
}, {
  value: "Piedra",
  label: "Piedra"
}, {
  value: "Pinyon Script",
  label: "Pinyon Script"
}, {
  value: "Pirata One",
  label: "Pirata One"
}, {
  value: "Plaster",
  label: "Plaster"
}, {
  value: "Play",
  label: "Play"
}, {
  value: "Playball",
  label: "Playball"
}, {
  value: "Playfair Display",
  label: "Playfair Display"
}, {
  value: "Playfair Display SC",
  label: "Playfair Display SC"
}, {
  value: "Podkova",
  label: "Podkova"
}, {
  value: "Poiret One",
  label: "Poiret One"
}, {
  value: "Poller One",
  label: "Poller One"
}, {
  value: "Poly",
  label: "Poly"
}, {
  value: "Pompiere",
  label: "Pompiere"
}, {
  value: "Pontano Sans",
  label: "Pontano Sans"
}, {
  value: "Poor Story",
  label: "Poor Story"
}, {
  value: "Poppins",
  label: "Poppins"
}, {
  value: "Port Lligat Sans",
  label: "Port Lligat Sans"
}, {
  value: "Port Lligat Slab",
  label: "Port Lligat Slab"
}, {
  value: "Pragati Narrow",
  label: "Pragati Narrow"
}, {
  value: "Prata",
  label: "Prata"
}, {
  value: "Preahvihear",
  label: "Preahvihear"
}, {
  value: "Press Start 2P",
  label: "Press Start 2P"
}, {
  value: "Pridi",
  label: "Pridi"
}, {
  value: "Princess Sofia",
  label: "Princess Sofia"
}, {
  value: "Prociono",
  label: "Prociono"
}, {
  value: "Prompt",
  label: "Prompt"
}, {
  value: "Prosto One",
  label: "Prosto One"
}, {
  value: "Proza Libre",
  label: "Proza Libre"
}, {
  value: "Puritan",
  label: "Puritan"
}, {
  value: "Purple Purse",
  label: "Purple Purse"
}, {
  value: "Quando",
  label: "Quando"
}, {
  value: "Quantico",
  label: "Quantico"
}, {
  value: "Quattrocento",
  label: "Quattrocento"
}, {
  value: "Quattrocento Sans",
  label: "Quattrocento Sans"
}, {
  value: "Questrial",
  label: "Questrial"
}, {
  value: "Quicksand",
  label: "Quicksand"
}, {
  value: "Quintessential",
  label: "Quintessential"
}, {
  value: "Qwigley",
  label: "Qwigley"
}, {
  value: "Racing Sans One",
  label: "Racing Sans One"
}, {
  value: "Radley",
  label: "Radley"
}, {
  value: "Rajdhani",
  label: "Rajdhani"
}, {
  value: "Rakkas",
  label: "Rakkas"
}, {
  value: "Raleway",
  label: "Raleway"
}, {
  value: "Raleway Dots",
  label: "Raleway Dots"
}, {
  value: "Ramabhadra",
  label: "Ramabhadra"
}, {
  value: "Ramaraja",
  label: "Ramaraja"
}, {
  value: "Rambla",
  label: "Rambla"
}, {
  value: "Rammetto One",
  label: "Rammetto One"
}, {
  value: "Ranchers",
  label: "Ranchers"
}, {
  value: "Rancho",
  label: "Rancho"
}, {
  value: "Ranga",
  label: "Ranga"
}, {
  value: "Rasa",
  label: "Rasa"
}, {
  value: "Rationale",
  label: "Rationale"
}, {
  value: "Ravi Prakash",
  label: "Ravi Prakash"
}, {
  value: "Redressed",
  label: "Redressed"
}, {
  value: "Reem Kufi",
  label: "Reem Kufi"
}, {
  value: "Reenie Beanie",
  label: "Reenie Beanie"
}, {
  value: "Revalia",
  label: "Revalia"
}, {
  value: "Rhodium Libre",
  label: "Rhodium Libre"
}, {
  value: "Ribeye",
  label: "Ribeye"
}, {
  value: "Ribeye Marrow",
  label: "Ribeye Marrow"
}, {
  value: "Righteous",
  label: "Righteous"
}, {
  value: "Risque",
  label: "Risque"
}, {
  value: "Roboto",
  label: "Roboto"
}, {
  value: "Roboto Condensed",
  label: "Roboto Condensed"
}, {
  value: "Roboto Mono",
  label: "Roboto Mono"
}, {
  value: "Roboto Slab",
  label: "Roboto Slab"
}, {
  value: "Rochester",
  label: "Rochester"
}, {
  value: "Rock Salt",
  label: "Rock Salt"
}, {
  value: "Rokkitt",
  label: "Rokkitt"
}, {
  value: "Romanesco",
  label: "Romanesco"
}, {
  value: "Ropa Sans",
  label: "Ropa Sans"
}, {
  value: "Rosario",
  label: "Rosario"
}, {
  value: "Rosarivo",
  label: "Rosarivo"
}, {
  value: "Rouge Script",
  label: "Rouge Script"
}, {
  value: "Rozha One",
  label: "Rozha One"
}, {
  value: "Rubik",
  label: "Rubik"
}, {
  value: "Rubik Mono One",
  label: "Rubik Mono One"
}, {
  value: "Ruda",
  label: "Ruda"
}, {
  value: "Rufina",
  label: "Rufina"
}, {
  value: "Ruge Boogie",
  label: "Ruge Boogie"
}, {
  value: "Ruluko",
  label: "Ruluko"
}, {
  value: "Rum Raisin",
  label: "Rum Raisin"
}, {
  value: "Ruslan Display",
  label: "Ruslan Display"
}, {
  value: "Russo One",
  label: "Russo One"
}, {
  value: "Ruthie",
  label: "Ruthie"
}, {
  value: "Rye",
  label: "Rye"
}, {
  value: "Sacramento",
  label: "Sacramento"
}, {
  value: "Sahitya",
  label: "Sahitya"
}, {
  value: "Sail",
  label: "Sail"
}, {
  value: "Saira",
  label: "Saira"
}, {
  value: "Saira Condensed",
  label: "Saira Condensed"
}, {
  value: "Saira Extra Condensed",
  label: "Saira Extra Condensed"
}, {
  value: "Saira Semi Condensed",
  label: "Saira Semi Condensed"
}, {
  value: "Salsa",
  label: "Salsa"
}, {
  value: "Sanchez",
  label: "Sanchez"
}, {
  value: "Sancreek",
  label: "Sancreek"
}, {
  value: "Sansita",
  label: "Sansita"
}, {
  value: "Sarala",
  label: "Sarala"
}, {
  value: "Sarina",
  label: "Sarina"
}, {
  value: "Sarpanch",
  label: "Sarpanch"
}, {
  value: "Satisfy",
  label: "Satisfy"
}, {
  value: "Sawarabi Gothic",
  label: "Sawarabi Gothic"
}, {
  value: "Sawarabi Mincho",
  label: "Sawarabi Mincho"
}, {
  value: "Scada",
  label: "Scada"
}, {
  value: "Scheherazade",
  label: "Scheherazade"
}, {
  value: "Schoolbell",
  label: "Schoolbell"
}, {
  value: "Scope One",
  label: "Scope One"
}, {
  value: "Seaweed Script",
  label: "Seaweed Script"
}, {
  value: "Secular One",
  label: "Secular One"
}, {
  value: "Sedgwick Ave",
  label: "Sedgwick Ave"
}, {
  value: "Sedgwick Ave Display",
  label: "Sedgwick Ave Display"
}, {
  value: "Sevillana",
  label: "Sevillana"
}, {
  value: "Seymour One",
  label: "Seymour One"
}, {
  value: "Shadows Into Light",
  label: "Shadows Into Light"
}, {
  value: "Shadows Into Light Two",
  label: "Shadows Into Light Two"
}, {
  value: "Shanti",
  label: "Shanti"
}, {
  value: "Share",
  label: "Share"
}, {
  value: "Share Tech",
  label: "Share Tech"
}, {
  value: "Share Tech Mono",
  label: "Share Tech Mono"
}, {
  value: "Shojumaru",
  label: "Shojumaru"
}, {
  value: "Short Stack",
  label: "Short Stack"
}, {
  value: "Shrikhand",
  label: "Shrikhand"
}, {
  value: "Siemreap",
  label: "Siemreap"
}, {
  value: "Sigmar One",
  label: "Sigmar One"
}, {
  value: "Signika",
  label: "Signika"
}, {
  value: "Signika Negative",
  label: "Signika Negative"
}, {
  value: "Simonetta",
  label: "Simonetta"
}, {
  value: "Sintony",
  label: "Sintony"
}, {
  value: "Sirin Stencil",
  label: "Sirin Stencil"
}, {
  value: "Six Caps",
  label: "Six Caps"
}, {
  value: "Skranji",
  label: "Skranji"
}, {
  value: "Slabo 13px",
  label: "Slabo 13px"
}, {
  value: "Slabo 27px",
  label: "Slabo 27px"
}, {
  value: "Slackey",
  label: "Slackey"
}, {
  value: "Smokum",
  label: "Smokum"
}, {
  value: "Smythe",
  label: "Smythe"
}, {
  value: "Sniglet",
  label: "Sniglet"
}, {
  value: "Snippet",
  label: "Snippet"
}, {
  value: "Snowburst One",
  label: "Snowburst One"
}, {
  value: "Sofadi One",
  label: "Sofadi One"
}, {
  value: "Sofia",
  label: "Sofia"
}, {
  value: "Song Myung",
  label: "Song Myung"
}, {
  value: "Sonsie One",
  label: "Sonsie One"
}, {
  value: "Sorts Mill Goudy",
  label: "Sorts Mill Goudy"
}, {
  value: "Source Code Pro",
  label: "Source Code Pro"
}, {
  value: "Source Sans Pro",
  label: "Source Sans Pro"
}, {
  value: "Source Serif Pro",
  label: "Source Serif Pro"
}, {
  value: "Space Mono",
  label: "Space Mono"
}, {
  value: "Special Elite",
  label: "Special Elite"
}, {
  value: "Spectral",
  label: "Spectral"
}, {
  value: "Spectral SC",
  label: "Spectral SC"
}, {
  value: "Spicy Rice",
  label: "Spicy Rice"
}, {
  value: "Spinnaker",
  label: "Spinnaker"
}, {
  value: "Spirax",
  label: "Spirax"
}, {
  value: "Squada One",
  label: "Squada One"
}, {
  value: "Sree Krushnadevaraya",
  label: "Sree Krushnadevaraya"
}, {
  value: "Sriracha",
  label: "Sriracha"
}, {
  value: "Srisakdi",
  label: "Srisakdi"
}, {
  value: "Stalemate",
  label: "Stalemate"
}, {
  value: "Stalinist One",
  label: "Stalinist One"
}, {
  value: "Stardos Stencil",
  label: "Stardos Stencil"
}, {
  value: "Stint Ultra Condensed",
  label: "Stint Ultra Condensed"
}, {
  value: "Stint Ultra Expanded",
  label: "Stint Ultra Expanded"
}, {
  value: "Stoke",
  label: "Stoke"
}, {
  value: "Strait",
  label: "Strait"
}, {
  value: "Stylish",
  label: "Stylish"
}, {
  value: "Sue Ellen Francisco",
  label: "Sue Ellen Francisco"
}, {
  value: "Suez One",
  label: "Suez One"
}, {
  value: "Sumana",
  label: "Sumana"
}, {
  value: "Sunflower",
  label: "Sunflower"
}, {
  value: "Sunshiney",
  label: "Sunshiney"
}, {
  value: "Supermercado One",
  label: "Supermercado One"
}, {
  value: "Sura",
  label: "Sura"
}, {
  value: "Suranna",
  label: "Suranna"
}, {
  value: "Suravaram",
  label: "Suravaram"
}, {
  value: "Suwannaphum",
  label: "Suwannaphum"
}, {
  value: "Swanky and Moo Moo",
  label: "Swanky and Moo Moo"
}, {
  value: "Syncopate",
  label: "Syncopate"
}, {
  value: "Tajawal",
  label: "Tajawal"
}, {
  value: "Tangerine",
  label: "Tangerine"
}, {
  value: "Taprom",
  label: "Taprom"
}, {
  value: "Tauri",
  label: "Tauri"
}, {
  value: "Taviraj",
  label: "Taviraj"
}, {
  value: "Teko",
  label: "Teko"
}, {
  value: "Telex",
  label: "Telex"
}, {
  value: "Tenali Ramakrishna",
  label: "Tenali Ramakrishna"
}, {
  value: "Tenor Sans",
  label: "Tenor Sans"
}, {
  value: "Text Me One",
  label: "Text Me One"
}, {
  value: "The Girl Next Door",
  label: "The Girl Next Door"
}, {
  value: "Tienne",
  label: "Tienne"
}, {
  value: "Tillana",
  label: "Tillana"
}, {
  value: "Timmana",
  label: "Timmana"
}, {
  value: "Tinos",
  label: "Tinos"
}, {
  value: "Titan One",
  label: "Titan One"
}, {
  value: "Titillium Web",
  label: "Titillium Web"
}, {
  value: "Trade Winds",
  label: "Trade Winds"
}, {
  value: "Trirong",
  label: "Trirong"
}, {
  value: "Trocchi",
  label: "Trocchi"
}, {
  value: "Trochut",
  label: "Trochut"
}, {
  value: "Trykker",
  label: "Trykker"
}, {
  value: "Tulpen One",
  label: "Tulpen One"
}, {
  value: "Ubuntu",
  label: "Ubuntu"
}, {
  value: "Ubuntu Condensed",
  label: "Ubuntu Condensed"
}, {
  value: "Ubuntu Mono",
  label: "Ubuntu Mono"
}, {
  value: "Ultra",
  label: "Ultra"
}, {
  value: "Uncial Antiqua",
  label: "Uncial Antiqua"
}, {
  value: "Underdog",
  label: "Underdog"
}, {
  value: "Unica One",
  label: "Unica One"
}, {
  value: "UnifrakturCook",
  label: "UnifrakturCook"
}, {
  value: "UnifrakturMaguntia",
  label: "UnifrakturMaguntia"
}, {
  value: "Unkempt",
  label: "Unkempt"
}, {
  value: "Unlock",
  label: "Unlock"
}, {
  value: "Unna",
  label: "Unna"
}, {
  value: "VT323",
  label: "VT323"
}, {
  value: "Vampiro One",
  label: "Vampiro One"
}, {
  value: "Varela",
  label: "Varela"
}, {
  value: "Varela Round",
  label: "Varela Round"
}, {
  value: "Vast Shadow",
  label: "Vast Shadow"
}, {
  value: "Vesper Libre",
  label: "Vesper Libre"
}, {
  value: "Vibur",
  label: "Vibur"
}, {
  value: "Vidaloka",
  label: "Vidaloka"
}, {
  value: "Viga",
  label: "Viga"
}, {
  value: "Voces",
  label: "Voces"
}, {
  value: "Volkhov",
  label: "Volkhov"
}, {
  value: "Vollkorn",
  label: "Vollkorn"
}, {
  value: "Vollkorn SC",
  label: "Vollkorn SC"
}, {
  value: "Voltaire",
  label: "Voltaire"
}, {
  value: "Waiting for the Sunrise",
  label: "Waiting for the Sunrise"
}, {
  value: "Wallpoet",
  label: "Wallpoet"
}, {
  value: "Walter Turncoat",
  label: "Walter Turncoat"
}, {
  value: "Warnes",
  label: "Warnes"
}, {
  value: "Wellfleet",
  label: "Wellfleet"
}, {
  value: "Wendy One",
  label: "Wendy One"
}, {
  value: "Wire One",
  label: "Wire One"
}, {
  value: "Work Sans",
  label: "Work Sans"
}, {
  value: "Yanone Kaffeesatz",
  label: "Yanone Kaffeesatz"
}, {
  value: "Yantramanav",
  label: "Yantramanav"
}, {
  value: "Yatra One",
  label: "Yatra One"
}, {
  value: "Yellowtail",
  label: "Yellowtail"
}, {
  value: "Yeon Sung",
  label: "Yeon Sung"
}, {
  value: "Yeseva One",
  label: "Yeseva One"
}, {
  value: "Yesteryear",
  label: "Yesteryear"
}, {
  value: "Yrsa",
  label: "Yrsa"
}, {
  value: "Zeyada",
  label: "Zeyada"
}, {
  value: "Zilla Slab",
  label: "Zilla Slab"
}, {
  value: "Zilla Slab Highlight",
  label: "Zilla Slab Highlight"
}];
/* harmony default export */ __webpack_exports__["default"] = (GoogleFontsNames);

/***/ }),

/***/ "./src/dynamic/index.js":
/*!******************************!*\
  !*** ./src/dynamic/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;
var withSelect = wp.data.withSelect;


registerBlockType("podkit/dynamic", {
  title: __("Latest episode promo", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__["ReactComponent"]
  },
  category: "podkit",
  supports: {
    align: ['wide', 'full']
  },
  styles: [{
    name: 'default',
    label: __('Red (default)', "podkit"),
    isDefault: true
  }, {
    name: 'blue',
    label: __('Blue', "podkit")
  }, {
    name: 'yellow',
    label: __('Yellow', "podkit")
  }],
  edit: withSelect(function (select) {
    return {
      // Send a GET query to the REST API.
      posts: select("core").getEntityRecords("postType", "post", {
        categories: 5,
        per_page: 1
      })
    };
  })(function (_ref) {
    var posts = _ref.posts,
        className = _ref.className;

    // Wait for posts to be returned.
    if (!posts) {
      return "Loading...";
    } // If no posts are returned.


    if (posts && posts.length === 0) {
      return "No posts";
    } // Grab the first post.


    var post = posts[0];
    console.info(post);
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " podkit-block podkit-dynamic")
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: post.featured_image_podkitFeatImg_url ? post.featured_image_podkitFeatImg_url : _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      value: post.title.rendered
    }))), /*#__PURE__*/React.createElement("div", {
      className: "podkit-description"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      value: post.excerpt.rendered
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: post.link
    }, __("Listen now!", "podkit"))));
  }),
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/editable/index.js":
/*!*******************************!*\
  !*** ./src/editable/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;


registerBlockType("podkit/editable", {
  title: __("Custom Title", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__["ReactComponent"]
  },
  category: "podkit",
  attributes: {
    episodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title"
    }
  },
  edit: function edit(props) {
    console.info(props);
    var className = props.className,
        episodeTitle = props.attributes.episodeTitle,
        setAttributes = props.setAttributes;

    var onChangeEpisdoeTitle = function onChangeEpisdoeTitle(newEpisodeTitle) {
      setAttributes({
        episodeTitle: newEpisodeTitle
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " podkit-block podkit-editable")
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText, {
      placeholder: __("Podcast episode title", "podkit"),
      value: episodeTitle,
      onChange: onChangeEpisdoeTitle
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, __("Like & Subscribe", "podkit")))));
  },
  save: function save(props) {
    var episodeTitle = props.attributes.episodeTitle;
    return /*#__PURE__*/React.createElement("div", {
      className: "podkit-block podkit-static"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      value: episodeTitle
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/subscribion"
    }, __("Like & Subscribe!", "podkit")))));
  }
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/extendable/index.js":
/*!*********************************!*\
  !*** ./src/extendable/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody;


registerBlockType("podkit/extended", {
  title: __("Extended episode promo", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__["ReactComponent"]
  },
  category: "podkit",
  attributes: {
    epsiodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title"
    },
    episodeImage: {
      type: "string",
      source: "attribute",
      selector: ".podkit-logo img",
      attribute: "src",
      default: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    episodeDescription: {
      type: "array",
      source: "children",
      multiline: "p",
      selector: ".podkit-description"
    },
    episodeURL: {
      type: "string",
      source: "attribute",
      selector: ".podkit-cta a",
      attribute: "href"
    },
    descriptionAlignment: {
      type: "string",
      default: "left"
    },
    backgroundColor: {
      type: "string"
    }
  },
  supports: {
    align: ["wide", "full"]
  },
  styles: [{
    name: "default",
    label: __("Red (Default)", "podkit"),
    isDefault: true
  }, {
    name: "blue",
    label: __("Blue", "podkit")
  }, {
    name: "yellow",
    label: __("Yellow", "podkit")
  }],
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        epsiodeTitle = _props$attributes.epsiodeTitle,
        episodeImage = _props$attributes.episodeImage,
        episodeDescription = _props$attributes.episodeDescription,
        episodeURL = _props$attributes.episodeURL,
        descriptionAlignment = _props$attributes.descriptionAlignment,
        backgroundColor = _props$attributes.backgroundColor,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newEpisodeTitle, set the value of episodeTitle to newEpisodeTitle.

    var onChangeEpisodeTitle = function onChangeEpisodeTitle(newEpisodeTitle) {
      setAttributes({
        epsiodeTitle: newEpisodeTitle
      });
    }; // Grab imageObject, set the value of episodeImage to imageObject.sizes.podkitFeatImg.url.


    var onImageSelect = function onImageSelect(imageObject) {
      setAttributes({
        episodeImage: imageObject.sizes.podkitFeatImg.url
      });
    }; // Grab newEpisodeDescription, set the value of episodeDescription to newEpisodeDescription.


    var onChangeEpisodeDescription = function onChangeEpisodeDescription(newEpisodeDescription) {
      setAttributes({
        episodeDescription: newEpisodeDescription
      });
    }; // Grab newEpisodeURL, set the value of episodeURL to newEpisodeURL.


    var onChangeEpisodeURL = function onChangeEpisodeURL(newEpisodeURL) {
      setAttributes({
        episodeURL: newEpisodeURL
      });
    }; // Grab newDescriptionAlignment, set the value of descriptionAlignment to newDescriptionAlignment.


    var onChangeDescriptionAlignment = function onChangeDescriptionAlignment(newDescriptionAlignment) {
      setAttributes({
        descriptionAlignment: newDescriptionAlignment
      });
    }; // Grab newBackgroundColor, set the value of backgroundColor to newBackgroundColor.


    var onChangeBackgroundColor = function onChangeBackgroundColor(newBackgroundColor) {
      setAttributes({
        backgroundColor: newBackgroundColor
      });
    };

    return [/*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Color settings", "wpb")
    }, /*#__PURE__*/React.createElement("div", {
      className: "components-base-control"
    }, /*#__PURE__*/React.createElement("div", {
      className: "components-base-control__field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "components-base-control__label"
    }, __("Background color", "wpb")), /*#__PURE__*/React.createElement(ColorPalette, {
      value: backgroundColor,
      onChange: onChangeBackgroundColor
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " podkit-block podkit-expanded"),
      style: {
        background: backgroundColor
      }
    }, /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {
      value: descriptionAlignment,
      onChange: onChangeDescriptionAlignment
    })), /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: episodeImage,
      alt: "logo"
    }), /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: episodeImage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/React.createElement(IconButton, {
          className: "podkit-logo__button",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: __("Change image.", "wpb")
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "wpb")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText, {
      placeholder: __("Podcast episode title", "wpb"),
      value: epsiodeTitle,
      onChange: onChangeEpisodeTitle
    }))), /*#__PURE__*/React.createElement("div", {
      className: "podkit-description"
    }, /*#__PURE__*/React.createElement(RichText, {
      style: {
        textAlign: descriptionAlignment
      },
      multiline: "p",
      placeholder: __("Episode description", "wpb"),
      onChange: onChangeEpisodeDescription,
      value: episodeDescription
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, __("Listen now!", "wpb")), /*#__PURE__*/React.createElement(URLInputButton, {
      className: "podkit-dropdown__input",
      label: __("Episode URL", "wpb"),
      onChange: onChangeEpisodeURL,
      url: episodeURL
    })))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        epsiodeTitle = _props$attributes2.epsiodeTitle,
        episodeImage = _props$attributes2.episodeImage,
        episodeDescription = _props$attributes2.episodeDescription,
        episodeURL = _props$attributes2.episodeURL,
        descriptionAlignment = _props$attributes2.descriptionAlignment,
        backgroundColor = _props$attributes2.backgroundColor;
    return /*#__PURE__*/React.createElement("div", {
      className: "podkit-block podkit-expanded",
      style: {
        background: backgroundColor
      }
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: episodeImage,
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      value: epsiodeTitle
    }))), /*#__PURE__*/React.createElement("div", {
      className: "podkit-description",
      style: "text-align:".concat(descriptionAlignment)
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      multiline: "p",
      value: episodeDescription
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: episodeURL
    }, __("Listen now!", "podkit"))));
  }
});

/***/ }),

/***/ "./src/flip/Edit.js":
/*!**************************!*\
  !*** ./src/flip/Edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_googleFontsNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/googleFontsNames */ "./src/components/googleFontsNames.js");
/* harmony import */ var _components_googleFonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/googleFonts */ "./src/components/googleFonts.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _components_BoxShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BoxShadow */ "./src/components/BoxShadow.js");
/* harmony import */ var _components_TextShadow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TextShadow */ "./src/components/TextShadow.js");
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Border */ "./src/components/Border.js");











var Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      cardFront = _props$attributes.cardFront,
      cardBack = _props$attributes.cardBack,
      frontCardBackground = _props$attributes.frontCardBackground,
      backCardBackground = _props$attributes.backCardBackground,
      cardAlignment = _props$attributes.cardAlignment,
      cardFontFamily = _props$attributes.cardFontFamily,
      textSize = _props$attributes.textSize,
      textWeight = _props$attributes.textWeight,
      textLineHeight = _props$attributes.textLineHeight,
      textStyle = _props$attributes.textStyle,
      textUpper = _props$attributes.textUpper,
      textLetter = _props$attributes.textLetter,
      textColor = _props$attributes.textColor,
      boxShadowColor = _props$attributes.boxShadowColor,
      boxShadowBlur = _props$attributes.boxShadowBlur,
      boxShadowHorizontal = _props$attributes.boxShadowHorizontal,
      boxShadowVertical = _props$attributes.boxShadowVertical,
      boxShadowPosition = _props$attributes.boxShadowPosition,
      textShadowColor = _props$attributes.textShadowColor,
      textShadowBlur = _props$attributes.textShadowBlur,
      textShadowHorizontal = _props$attributes.textShadowHorizontal,
      textShadowVertical = _props$attributes.textShadowVertical,
      borderType = _props$attributes.borderType,
      borderWidth = _props$attributes.borderWidth,
      borderColor = _props$attributes.borderColor,
      borderRadius = _props$attributes.borderRadius,
      flipDirection = _props$attributes.flipDirection,
      flipBoxSpace = _props$attributes.flipBoxSpace,
      setAttributes = props.setAttributes;
  var DIRECTIONS = [{
    value: "rotateX(-180deg)",
    label: "Vertical"
  }, {
    value: "rotateY(-180deg)",
    label: "Horizontal"
  }];

  var onChangeCardFront = function onChangeCardFront(newCardFront) {
    setAttributes({
      cardFront: newCardFront
    });
  };

  var onChangeCardBack = function onChangeCardBack(newCardBack) {
    setAttributes({
      cardBack: newCardBack
    });
  };

  var onChangeFrontBackground = function onChangeFrontBackground(newfrontCardBackground) {
    setAttributes({
      frontCardBackground: newfrontCardBackground
    });
  };

  var onChangeBackBackground = function onChangeBackBackground(newbackCardBackground) {
    setAttributes({
      backCardBackground: newbackCardBackground
    });
  };

  var onChangeCardAlignment = function onChangeCardAlignment(newCardAlignment) {
    setAttributes({
      cardAlignment: newCardAlignment
    });
  };

  var onChangeTextFamily = function onChangeTextFamily(newCardFontFamily) {
    setAttributes({
      cardFontFamily: newCardFontFamily
    });

    if (!cardFontFamily) {
      return;
    }

    Object(_components_googleFonts__WEBPACK_IMPORTED_MODULE_5__["default"])(cardFontFamily);
  };

  var textWeightfn = function textWeightfn(newTextWeight) {
    setAttributes({
      textWeight: newTextWeight
    });
  };

  var lineHeight = function lineHeight(newTextLineHeight) {
    setAttributes({
      textLineHeight: newTextLineHeight
    });
  };

  var textStylefn = function textStylefn(newTextStyle) {
    setAttributes({
      textStyle: newTextStyle
    });
  };

  var textUpperfn = function textUpperfn(check) {
    return setAttributes({
      textUpper: check
    });
  };

  var textLetterfn = function textLetterfn(newTextLetter) {
    setAttributes({
      textLetter: newTextLetter
    });
  };

  var onChangeTextColor = function onChangeTextColor(newTextColor) {
    setAttributes({
      textColor: newTextColor
    });
  };

  var onChangeFlipDirection = function onChangeFlipDirection(newDirection) {
    setAttributes({
      flipDirection: newDirection
    });
  };

  var styleHTML = "\n  .card:hover > .card-body{\n   transform: ".concat(flipDirection, " !important;\n }\n .card-back {\n   transform: ").concat(flipDirection, " !important;\n }");
  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
    key: "inspector_control_section"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Card", "wpb")
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control__field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "front_flip_card"
  }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", null, "Card Front"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Card Front", "wpb"),
    className: "components-base-control__label",
    value: cardFront,
    onChange: onChangeCardFront
  }), /*#__PURE__*/React.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Front Background color", "wpb")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    value: frontCardBackground,
    onChange: onChangeFrontBackground
  })), /*#__PURE__*/React.createElement("div", {
    className: "back_flip_card"
  }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", null, "Card Back"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Card Back", "wpb"),
    className: "components-base-control__label",
    value: cardBack,
    onChange: onChangeCardBack
  }), /*#__PURE__*/React.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Back Background color", "wpb")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    value: backCardBackground,
    onChange: onChangeBackBackground
  }))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Style", "wpb")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family", "wpb"),
    options: _components_googleFontsNames__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: cardFontFamily,
    onChange: onChangeTextFamily
  }), /*#__PURE__*/React.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    components: ["size", "weight", "line", "style", "upper", "spacing"] //, 'spacing'
    ,
    size: textSize,
    weight: textWeight,
    line: textLineHeight,
    style: textStyle,
    upper: textUpper,
    spacing: textLetter,
    onChangeSize: function onChangeSize(newTextSize) {
      return setAttributes({
        textSize: newTextSize
      });
    },
    onChangeWeight: textWeightfn,
    onChangeLine: lineHeight,
    onChangeStyle: textStylefn,
    onChangeUpper: textUpperfn,
    onChangeSpacing: textLetterfn
  }), /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpb-toggle-title"
  }, /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Color", "wpb"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "wpb_control_toggle_button",
    contentClassName: "wp_control_toggle_content",
    position: "bottom right",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement("i", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Color", "wpb")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: textColor,
        onChange: onChangeTextColor,
        allowReset: true
      }));
    }
  })), /*#__PURE__*/React.createElement(_components_TextShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Text Shadow",
    color: textShadowColor // blur={textShadowBlur}
    ,
    horizontal: textShadowHorizontal,
    vertical: textShadowVertical,
    onChangeColor: function onChangeColor(newValue) {
      setAttributes({
        textShadowColor: newValue.hex
      });
    },
    onChangeBlur: function onChangeBlur(newValue) {
      setAttributes({
        textShadowBlur: newValue
      });
    },
    onChangeHorizontal: function onChangeHorizontal(newValue) {
      setAttributes({
        textShadowHorizontal: newValue
      });
    },
    onChangeVertical: function onChangeVertical(newValue) {
      setAttributes({
        textShadowVertical: newValue
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Style", "wpb")
  }, /*#__PURE__*/React.createElement(_components_Border__WEBPACK_IMPORTED_MODULE_9__["default"], {
    borderType: borderType,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    onChangeBorderType: function onChangeBorderType(newValue) {
      setAttributes({
        borderType: newValue
      });
    },
    onChangeBorderWidth: function onChangeBorderWidth(newValue) {
      setAttributes({
        borderWidth: newValue
      });
    },
    onChangeBorderColor: function onChangeBorderColor(newValue) {
      setAttributes({
        borderColor: newValue.hex
      });
    },
    onChangeBorderRadius: function onChangeBorderRadius(newValue) {
      setAttributes({
        borderRadius: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_components_BoxShadow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Box Shadow",
    inner: true,
    color: boxShadowColor,
    blur: boxShadowBlur,
    horizontal: boxShadowHorizontal,
    vertical: boxShadowVertical,
    position: boxShadowPosition,
    onChangeColor: function onChangeColor(newValue) {
      setAttributes({
        boxShadowColor: newValue === undefined ? "transparent" : newValue.hex
      });
    },
    onChangeBlur: function onChangeBlur(newValue) {
      setAttributes({
        boxShadowBlur: newValue === undefined ? 0 : newValue
      });
    },
    onChangeHorizontal: function onChangeHorizontal(newValue) {
      setAttributes({
        boxShadowHorizontal: newValue === undefined ? 0 : newValue
      });
    },
    onChangeVertical: function onChangeVertical(newValue) {
      setAttributes({
        boxShadowVertical: newValue === undefined ? 0 : newValue
      });
    },
    onChangePosition: function onChangePosition(newValue) {
      setAttributes({
        boxShadowPosition: newValue
      });
    }
  }), /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Direction", "wpb")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    options: DIRECTIONS,
    value: flipDirection,
    onChange: onChangeFlipDirection
  }), /*#__PURE__*/React.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Box Spacing", "wpb")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    value: flipBoxSpace,
    min: "0",
    max: "300",
    onChange: function onChange(newValue) {
      setAttributes({
        flipBoxSpace: newValue === undefined ? 0 : newValue
      });
    },
    allowReset: "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cards",
    key: "render_section"
  }, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: [styleHTML].join("\n")
    }
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["AlignmentToolbar"], {
    value: cardAlignment,
    onChange: onChangeCardAlignment
  })), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body",
    style: {
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      borderRadius: borderRadius + "px",
      height: "max-content !important"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-front",
    style: {
      display: "block",
      background: frontCardBackground,
      textAlign: "".concat(cardAlignment),
      fontSize: "".concat(textSize, "px"),
      fontWeight: textWeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      color: textColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowColor),
      border: borderType,
      borderWidth: "".concat(borderWidth, "px"),
      borderRadius: "".concat(borderRadius, "px"),
      borderColor: borderColor,
      height: "max-content !important",
      padding: "".concat(flipBoxSpace, "px")
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("First Card", "wpb"),
    value: cardFront,
    onChange: onChangeCardFront,
    style: {
      fontFamily: cardFontFamily,
      height: "max-content !important"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-back",
    style: {
      display: "block",
      background: backCardBackground,
      textAlign: "".concat(cardAlignment),
      fontSize: "".concat(textSize, "px"),
      fontWeight: textWeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      color: textColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowColor),
      border: borderType,
      borderWidth: "".concat(borderWidth, "px"),
      borderRadius: "".concat(borderRadius, "px"),
      borderColor: borderColor,
      padding: "".concat(flipBoxSpace, "px")
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Card Back", "wpb"),
    value: cardBack,
    onChange: onChangeCardBack,
    style: {
      height: "max-content !important",
      fontFamily: "".concat(cardFontFamily)
    }
  })))))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/flip/Font.js":
/*!**************************!*\
  !*** ./src/flip/Font.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  var $button = $(".premium-button");

  var addFontToHead = function addFontToHead(fontFamily) {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family=" + fontFamily.replace(/\s+/g, "+") + ":" + "regular";
    head.appendChild(link);
  };

  $button.map(function (index, button) {
    var $button = $(button),
        textFont = $button.css("font-family");
    addFontToHead(textFont);
  });
});

/***/ }),

/***/ "./src/flip/Save.js":
/*!**************************!*\
  !*** ./src/flip/Save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



var Save = function Save(props) {
  var _props$attributes = props.attributes,
      cardFront = _props$attributes.cardFront,
      cardBack = _props$attributes.cardBack,
      frontCardBackground = _props$attributes.frontCardBackground,
      backCardBackground = _props$attributes.backCardBackground,
      cardAlignment = _props$attributes.cardAlignment,
      cardFontFamily = _props$attributes.cardFontFamily,
      textSize = _props$attributes.textSize,
      textWeight = _props$attributes.textWeight,
      textLineHeight = _props$attributes.textLineHeight,
      textStyle = _props$attributes.textStyle,
      textUpper = _props$attributes.textUpper,
      textLetter = _props$attributes.textLetter,
      textColor = _props$attributes.textColor,
      boxShadowColor = _props$attributes.boxShadowColor,
      boxShadowBlur = _props$attributes.boxShadowBlur,
      boxShadowHorizontal = _props$attributes.boxShadowHorizontal,
      boxShadowVertical = _props$attributes.boxShadowVertical,
      boxShadowPosition = _props$attributes.boxShadowPosition,
      textShadowColor = _props$attributes.textShadowColor,
      textShadowBlur = _props$attributes.textShadowBlur,
      textShadowHorizontal = _props$attributes.textShadowHorizontal,
      textShadowVertical = _props$attributes.textShadowVertical,
      borderType = _props$attributes.borderType,
      borderWidth = _props$attributes.borderWidth,
      borderColor = _props$attributes.borderColor,
      borderRadius = _props$attributes.borderRadius,
      flipDirection = _props$attributes.flipDirection,
      flipBoxSpace = _props$attributes.flipBoxSpace;
  return /*#__PURE__*/React.createElement("div", {
    className: "cards"
  }, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: ["\n            .card:hover > .card-body{\n             transform: ".concat(flipDirection, " !important;\n           }\n           .card-back {\n             transform: ").concat(flipDirection, " !important;\n           }\n           ")].join("\n")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body",
    style: {
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      borderRadius: borderRadius + "px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-front",
    style: {
      display: "block",
      fontFamily: cardFontFamily,
      background: frontCardBackground,
      textAlign: cardAlignment,
      fontSize: textSize + "px",
      fontWeight: textWeight,
      lineHeight: textLineHeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      color: textColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowBlur, " ").concat(textShadowColor),
      border: borderType,
      borderWidth: borderWidth + "px",
      borderRadius: borderRadius + "px",
      borderColor: borderColor,
      padding: "".concat(flipBoxSpace, "px")
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
    value: cardFront,
    style: {
      background: backCardBackground
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-back",
    style: {
      display: "block",
      fontFamily: cardFontFamily,
      background: backCardBackground,
      textAlign: cardAlignment,
      fontSize: textSize + "px",
      fontWeight: textWeight,
      lineHeight: textLineHeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      color: textColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowBlur, " ").concat(textShadowColor),
      border: borderType,
      borderWidth: borderWidth + "px",
      borderRadius: borderRadius + "px",
      borderColor: borderColor,
      padding: "".concat(flipBoxSpace, "px")
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
    value: cardBack
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/flip/index.js":
/*!***************************!*\
  !*** ./src/flip/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Font */ "./src/flip/Font.js");
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Font__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edit */ "./src/flip/Edit.js");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Save */ "./src/flip/Save.js");






var FlipBoxAttributes = {
  cardFront: {
    type: "string",
    source: "html",
    selector: ".card-front"
  },
  cardBack: {
    type: "string",
    source: "html",
    selector: ".card-back"
  },
  frontCardBackground: {
    type: "string",
    default: "#ffffff"
  },
  backCardBackground: {
    type: "string",
    default: "#ffffff"
  },
  cardAlignment: {
    type: "string",
    default: "center"
  },
  cardFontFamily: {
    type: "string",
    default: "Tahoma"
  },
  textSize: {
    type: "number",
    default: 16
  },
  textWeight: {
    type: "number",
    default: 400
  },
  textLineHeight: {
    type: "number",
    default: 1.2
  },
  textStyle: {
    type: "string",
    default: "normal"
  },
  textUpper: {
    type: "string"
  },
  textLetter: {
    type: "number",
    default: 1
  },
  textColor: {
    type: "string",
    default: "#000000"
  },
  boxShadowColor: {
    type: "string"
  },
  boxShadowBlur: {
    type: "number",
    default: 0
  },
  boxShadowHorizontal: {
    type: "number",
    default: 0
  },
  boxShadowVertical: {
    type: "number",
    default: 0
  },
  boxShadowPosition: {
    type: "string",
    default: "inset"
  },
  textShadowColor: {
    type: "string"
  },
  textShadowBlur: {
    type: "number",
    default: 0
  },
  textShadowHorizontal: {
    type: "number",
    default: 0
  },
  textShadowVertical: {
    type: "number",
    default: 0
  },
  borderType: {
    type: "string",
    default: "none"
  },
  borderWidth: {
    type: "number",
    default: 3
  },
  borderColor: {
    type: "string",
    default: "#000000"
  },
  borderRadius: {
    type: "number",
    default: 3
  },
  flipDirection: {
    type: "string",
    default: "Vertical"
  },
  flipBoxSpace: {
    type: "number",
    default: 5
  }
};
var FlipBoxSupports = {
  align: true
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("podkit/flip", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Box", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"]
  },
  category: "podkit",
  attributes: FlipBoxAttributes,
  supports: FlipBoxSupports,
  edit: _Edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static */ "./src/static/index.js");
/* harmony import */ var _editable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable */ "./src/editable/index.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./src/media/index.js");
/* harmony import */ var _extendable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extendable */ "./src/extendable/index.js");
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic */ "./src/dynamic/index.js");
/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flip */ "./src/flip/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button */ "./src/button/index.js");
/* harmony import */ var _testblock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testblock */ "./src/testblock/index.js");
/* harmony import */ var _team_memebers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-memebers */ "./src/team-memebers/index.js");
/* harmony import */ var _new_test__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-test */ "./src/new-test/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/**
 * Import blocks as components.
 */













/***/ }),

/***/ "./src/media/index.js":
/*!****************************!*\
  !*** ./src/media/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton;


registerBlockType("podkit/media", {
  title: __("Custom title and image", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__["ReactComponent"]
  },
  category: "podkit",
  attributes: {
    episodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title"
    },
    episodeImage: {
      type: "string",
      source: "attribute",
      selector: ".podkit-logo img",
      attribute: "src",
      default: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
  },
  edit: function edit(props) {
    console.info(props);
    var className = props.className,
        _props$attributes = props.attributes,
        episodeTitle = _props$attributes.episodeTitle,
        episodeImage = _props$attributes.episodeImage,
        setAttributes = props.setAttributes; // Grab newEpisodeTitle, set the value of episodeTitle to newEpisodeTitle.

    var onChangeEpisdoeTitle = function onChangeEpisdoeTitle(newEpisodeTitle) {
      setAttributes({
        episodeTitle: newEpisodeTitle
      });
    }; // Grab imageObject, set the value of episodeImage to imageObject.sizes.podkitFeatImg.url.


    var onImageSelect = function onImageSelect(imageObject) {
      setAttributes({
        episodeImage: imageObject.sizes.podkitFeatImg.url
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " podkit-block podkit-editable")
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: episodeImage,
      alt: "logo"
    }), /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: episodeImage,
      render: function render(_ref) {
        var open = _ref.open;
        return (
          /*#__PURE__*/
          // <Button onClick={open}>Open Media Library</Button>
          React.createElement(IconButton, {
            className: "podkit-logo__button",
            onClick: open,
            icon: "format-image",
            showTooltip: "true",
            label: __("Change image", "podkit")
          })
        );
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText, {
      placeholder: __("Podcast episode title", "podkit"),
      value: episodeTitle,
      onChange: onChangeEpisdoeTitle
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, __("Like & Subscribe", "podkit")))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        episodeTitle = _props$attributes2.episodeTitle,
        episodeImage = _props$attributes2.episodeImage;
    return /*#__PURE__*/React.createElement("div", {
      className: "podkit-block podkit-static"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: episodeImage,
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      value: episodeTitle
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/subscribion"
    }, __("Like & Subscribe!", "podkit")))));
  }
});

/***/ }),

/***/ "./src/new-test/Edit.js":
/*!******************************!*\
  !*** ./src/new-test/Edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_default_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/default-thumbnail.jpg */ "./images/default-thumbnail.jpg");
/* harmony import */ var _components_googleFontsNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/googleFontsNames */ "./src/components/googleFontsNames.js");
/* harmony import */ var _components_googleFonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/googleFonts */ "./src/components/googleFonts.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _components_TextShadow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TextShadow */ "./src/components/TextShadow.js");
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Border */ "./src/components/Border.js");
/* harmony import */ var _components_BoxShadow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BoxShadow */ "./src/components/BoxShadow.js");
/* harmony import */ var _components_Padding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Padding */ "./src/components/Padding.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Description */ "./src/components/Description.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      columnsNumber = _props$attributes.columnsNumber,
      test_block = _props$attributes.test_block,
      setAttributes = props.setAttributes;

  var saveTestText = function saveTestText(value, thisIndex) {
    var newUpdate = test_block.map(function (item, index) {
      if (index === thisIndex) {
        item = _objectSpread(_objectSpread({}, item), value);
      }

      return item;
    });
    setAttributes({
      test_block: newUpdate
    });
  };

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], {
    key: "inspector_control_section"
  }, /*#__PURE__*/React.createElement("h3", null, "Testing Block Settings"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Number of Testimonials", "ultimate-addons-for-gutenberg"),
    value: columnsNumber,
    onChange: function onChange(newCount) {
      var cloneTest_block = _toConsumableArray(test_block);

      if (cloneTest_block.length < newCount) {
        var incAmount = Math.abs(newCount - cloneTest_block.length);
        {
          lodash_times__WEBPACK_IMPORTED_MODULE_0___default()(incAmount, function (n) {
            cloneTest_block.push({
              description: "I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",
              name: "John Doe",
              company: "Company" + (cloneTest_block.length + 1),
              image: ""
            });
          });
        }
        setAttributes({
          test_block: cloneTest_block
        });
      } else {
        var _incAmount = Math.abs(newCount - cloneTest_block.length);

        var data_new = cloneTest_block;

        for (var i = 0; i < _incAmount; i++) {
          data_new.pop();
        }

        setAttributes({
          test_block: data_new
        });
      }

      setAttributes({
        columnsNumber: newCount
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "wpb_block_container",
    key: "render_section"
  }, /*#__PURE__*/React.createElement("h1", null, "Testing Block Block"), /*#__PURE__*/React.createElement("div", {
    className: "container__items"
  }, test_block.map(function (test, index) {
    var _test_block$index$ima, _test_block$index$ima2, _test_block$index$ima3, _test_block$index$ima4, _test_block$index$ima5, _test_block$index$ima6, _test_block$index, _test_block$index$ima7, _test_block$index$ima8, _test_block$index$ima9;

    return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h1", null, "Section ", index), test_block[index] && /*#__PURE__*/React.createElement("img", {
      src: (_test_block$index$ima = test_block[index].image) !== null && _test_block$index$ima !== void 0 && (_test_block$index$ima2 = _test_block$index$ima.sizes) !== null && _test_block$index$ima2 !== void 0 && (_test_block$index$ima3 = _test_block$index$ima2.full) !== null && _test_block$index$ima3 !== void 0 && _test_block$index$ima3.url ? (_test_block$index$ima4 = test_block[index].image) === null || _test_block$index$ima4 === void 0 ? void 0 : (_test_block$index$ima5 = _test_block$index$ima4.sizes) === null || _test_block$index$ima5 === void 0 ? void 0 : (_test_block$index$ima6 = _test_block$index$ima5.full) === null || _test_block$index$ima6 === void 0 ? void 0 : _test_block$index$ima6.url : "https://survey-project.lndo.site/wp-content/plugins/podkit/images/default-thumbnail.jpg",
      alt: "logo"
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      className: "media-image__upload".concat(index),
      onSelect: function onSelect(media) {
        saveTestText({
          image: media
        }, index);
      },
      value: (_test_block$index = test_block[index]) === null || _test_block$index === void 0 ? void 0 : (_test_block$index$ima7 = _test_block$index.image) === null || _test_block$index$ima7 === void 0 ? void 0 : (_test_block$index$ima8 = _test_block$index$ima7.sizes) === null || _test_block$index$ima8 === void 0 ? void 0 : (_test_block$index$ima9 = _test_block$index$ima8.full) === null || _test_block$index$ima9 === void 0 ? void 0 : _test_block$index$ima9.url,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          style: {
            backgroundColor: "#000",
            color: "#fff",
            width: "80px"
          },
          className: "kt-testimonial-image-placeholder",
          "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Add Image", "kadence-blocks"),
          onClick: open
        }, "Image Select");
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "uagb-testinomial-text-wrap",
      key: "text-wrap-" + index
    }, /*#__PURE__*/React.createElement(_components_Description__WEBPACK_IMPORTED_MODULE_13__["default"], {
      attributes: props.attributes,
      setAttributes: setAttributes,
      props: props,
      index_value: index
    })));
  })))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/new-test/Save.js":
/*!******************************!*\
  !*** ./src/new-test/Save.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Description */ "./src/components/Description.js");






var Save = function Save(props) {
  var _props$attributes = props.attributes,
      columnsNumber = _props$attributes.columnsNumber,
      test_block = _props$attributes.test_block; // const contentRenderColumns = (index) => {
  //   return (
  //     <div key={index} className={`item-test__wrapper item_test_${index}`}>
  //       <h1>Item Test Counter {`${index}`}</h1>
  //       {/* <figure className="podkit-logo"> */}
  //         {/* {(testText[index]?.imageUrl?.sizes?.full?.url == undefined) ? (
  //           <img src={testText[index]?.imageUrl} alt="logo" />
  //           ) : (
  //           <img src={testText[index]?.imageUrl?.sizes?.full?.url} alt="logo" />
  //         )}
  //       </figure> */}
  //       <RichText.Content value={testText[index]?.title} tagName="h3" />
  //     </div>
  //   );
  // };

  return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/React.createElement("h1", null, "Hello Testing Block"), /*#__PURE__*/React.createElement("div", {
    className: "container__items"
  }, test_block.map(function (test, index) {
    var _test_block$index, _test_block$index$ima, _test_block$index$ima2, _test_block$index$ima3, _test_block$index2, _test_block$index3, _test_block$index3$im, _test_block$index3$im2, _test_block$index3$im3;

    return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/React.createElement("h1", null, "Section ", index), /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, ((_test_block$index = test_block[index]) === null || _test_block$index === void 0 ? void 0 : (_test_block$index$ima = _test_block$index.image) === null || _test_block$index$ima === void 0 ? void 0 : (_test_block$index$ima2 = _test_block$index$ima.sizes) === null || _test_block$index$ima2 === void 0 ? void 0 : (_test_block$index$ima3 = _test_block$index$ima2.full) === null || _test_block$index$ima3 === void 0 ? void 0 : _test_block$index$ima3.url) == undefined ? /*#__PURE__*/React.createElement("img", {
      src: (_test_block$index2 = test_block[index]) === null || _test_block$index2 === void 0 ? void 0 : _test_block$index2.image,
      alt: "logo"
    }) : /*#__PURE__*/React.createElement("img", {
      src: (_test_block$index3 = test_block[index]) === null || _test_block$index3 === void 0 ? void 0 : (_test_block$index3$im = _test_block$index3.image) === null || _test_block$index3$im === void 0 ? void 0 : (_test_block$index3$im2 = _test_block$index3$im.sizes) === null || _test_block$index3$im2 === void 0 ? void 0 : (_test_block$index3$im3 = _test_block$index3$im2.full) === null || _test_block$index3$im3 === void 0 ? void 0 : _test_block$index3$im3.url,
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "uagb-testinomial-text-wrap",
      key: "text-wrap-" + index
    }, /*#__PURE__*/React.createElement(_components_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: props.attributes,
      setAttributes: "not_set",
      props: props,
      index_value: index
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/new-test/index.js":
/*!*******************************!*\
  !*** ./src/new-test/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/new-test/Edit.js");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/new-test/Save.js");





var ITEM_COUNT = 3;
var test_block = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  var desc_text = "I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!";
  var author_text = "John Doe ";
  var company_text = "Company" + i;
  test_block.push({
    "description": desc_text,
    "name": author_text,
    "company": company_text,
    "image": ""
  });
}

var testblockAttributes = {
  columnsNumber: {
    type: "number",
    default: ITEM_COUNT
  },
  test_block: {
    type: "array",
    default: test_block
  }
};
var testblockSupports = {
  align: true
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("podkit/newtest", {
  title: "New Test Block",
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: "podkit",
  attributes: testblockAttributes,
  supports: testblockSupports,
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/static/index.js":
/*!*****************************!*\
  !*** ./src/static/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack

 // Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader

 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("podkit/static", {
  title: __("Like & Subscribe", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_0__["ReactComponent"]
  },
  category: "podkit",
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit() {
    return /*#__PURE__*/React.createElement("div", {
      className: "podkit-block podkit-static"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, __("Like & Subscribe!", "podkit")))));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement("div", {
      className: "podkit-block podkit-static"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "podkit-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/subscribe"
    }, __("Like & Subscribe!", "podkit")))));
  }
});

/***/ }),

/***/ "./src/team-memebers/Edit.js":
/*!***********************************!*\
  !*** ./src/team-memebers/Edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabPanel */ "./src/team-memebers/TabPanel.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_googleFontsNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/googleFontsNames */ "./src/components/googleFontsNames.js");
/* harmony import */ var _components_googleFonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/googleFonts */ "./src/components/googleFonts.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _components_TextShadow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TextShadow */ "./src/components/TextShadow.js");
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Border */ "./src/components/Border.js");
/* harmony import */ var _components_BoxShadow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BoxShadow */ "./src/components/BoxShadow.js");
/* harmony import */ var _components_Padding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Padding */ "./src/components/Padding.js");
/* harmony import */ var _MemebrCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MemebrCard */ "./src/team-memebers/MemebrCard.js");
















var Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      columnsNumber = _props$attributes.columnsNumber,
      teamMemberImage = _props$attributes.teamMemberImage,
      teamMemberTitle = _props$attributes.teamMemberTitle,
      teamMemberPosition = _props$attributes.teamMemberPosition,
      teamMemberDescription = _props$attributes.teamMemberDescription,
      setAttributes = props.setAttributes;

  var onImageSelect = function onImageSelect(imageObject) {
    console.log(imageObject.sizes.large.url);
    setAttributes({
      teamMemberImage: imageObject.sizes.large.url
    });
  };

  var onChangeTeamMemberTitle = function onChangeTeamMemberTitle(newValue) {
    setAttributes({
      teamMemberTitle: newValue
    });
  };

  var onChangeTeamMemberPosition = function onChangeTeamMemberPosition(newValue) {
    setAttributes({
      teamMemberPosition: newValue
    });
  };

  var onChangeTeamMemberDescription = function onChangeTeamMemberDescription(newValue) {
    setAttributes({
      teamMemberDescription: newValue
    });
  }; // const renderTeamMemeber = (index) => {
  //   return (
  //   )
  // }


  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], {
    key: "inspector_control_section"
  }, /*#__PURE__*/React.createElement(_TabPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "wpb_tabs_panel" // onSelect={onSelect}
    ,
    orientation: "horizontal",
    activeClass: "is_active",
    initialTabName: "tab1",
    tabs: [{
      name: "tab1",
      icon: /*#__PURE__*/React.createElement("div", {
        className: "icon_layout"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "admin-settings",
        size: 20
      })),
      title: "Layout",
      className: "tab-one",
      children: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, /*#__PURE__*/React.createElement("h1", null, "Tab One Testing Tabs"), " ", /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        icon: "smiley",
        size: 60
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("First Heading Style"),
        className: "premium-panel-body",
        initialOpen: false
      }, /*#__PURE__*/React.createElement("h1", null, "Testing")))
    }, {
      name: "tab2",
      icon: /*#__PURE__*/React.createElement("div", {
        className: "icon_style"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "admin-appearance",
        size: 20
      })),
      title: "Style",
      className: "tab-two",
      children: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("General"),
        className: "wpb_panel_body",
        initialOpen: false
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Columns"),
        min: "1",
        max: "3",
        step: "1",
        value: columnsNumber,
        onChange: function onChange(newValue) {
          setAttributes({
            columnsNumber: newValue === undefined ? 2 : newValue
          });
        }
      }))
    }, {
      name: "tab3",
      icon: /*#__PURE__*/React.createElement("div", {
        className: "icon_advanced"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "admin-tools",
        size: 20
      })),
      title: "Advanced",
      className: "tab-three",
      children: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, /*#__PURE__*/React.createElement("h1", null, "Tab three Testing Tabs dasdasdas"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextHighlight"], {
        text: "Why do we like Gutenberg? Because Gutenberg is the best!",
        highlight: "Gutenberg"
      }))
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", null, tab.children);
  })), /*#__PURE__*/React.createElement("div", {
    className: "wpb_block_container",
    key: "render_section"
  }, lodash_times__WEBPACK_IMPORTED_MODULE_0___default()(columnsNumber, function (n) {
    return /*#__PURE__*/React.createElement(_MemebrCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: n,
      className: "wpb_column_".concat(n),
      imageClass: "wpb_column_image_".concat(n),
      icon: "no",
      size: 30,
      alt: "Cat Image",
      onSelect: onImageSelect,
      imageUrl: teamMemberImage,
      type: "image",
      iconClassName: "team_memeber_thumbnail_image",
      dashiconIconButton: "format-image",
      toolTip: true,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Change image.", "wpb"),
      tagNameTitle: "h2",
      titlePlaceholder: "Name",
      teamMemeberTitle: teamMemberTitle,
      onChangeTeamMemberTitle: onChangeTeamMemberTitle,
      tagNamePosition: "p",
      positionPlaceholder: "Position",
      teamMemberPosition: teamMemberPosition,
      onChangeTeamMemberPosition: onChangeTeamMemberPosition,
      tagNameDescription: "div",
      descriptionPlaceholder: "Description Lorem Ipsum and other stuff",
      teamMemeberDescription: teamMemberDescription,
      onChangeTeamMemberDescription: onChangeTeamMemberDescription
    });
  }))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/team-memebers/MemebrCard.js":
/*!*****************************************!*\
  !*** ./src/team-memebers/MemebrCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var MemebrCard = function MemebrCard(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wpb-team-member-card-block__item ".concat(props.className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpb-team-member__image ".concat(props.imageClass)
  }, /*#__PURE__*/React.createElement("button", {
    className: "wpb-team-member-image__remove"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Dashicon"], {
    icon: props.icon,
    size: props.size
  })), /*#__PURE__*/React.createElement("img", {
    src: props.imageUrl,
    alt: props.alt
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
    className: props.className_mediaupload_image,
    onSelect: props.onSelect,
    type: props.type,
    value: props.imageUrl,
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
        className: props.iconClassName,
        onClick: open,
        icon: props.dashiconIconButton,
        showTooltip: props.toolTip,
        label: props.label
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "wpb-team-member__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wpb-team-member__title"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: props.tagNameTitle,
    placeholder: props.titlePlaceholder,
    value: props.teamMemberTitle,
    onChange: props.onChangeTeamMemberTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: "wpb-team-member__position"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: props.tagNamePosition,
    placeholder: props.positionPlaceholder,
    value: props.teamMemberPosition,
    onChange: props.onChangeTeamMemberPosition
  }), /*#__PURE__*/React.createElement("div", {
    className: "wpb-team-member__description"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: props.tagNameDescription,
    placeholder: props.descriptionPlaceholder,
    value: props.teamMemberDescription,
    onChange: props.onChangeTeamMemberDescription
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MemebrCard);

/***/ }),

/***/ "./src/team-memebers/Save.js":
/*!***********************************!*\
  !*** ./src/team-memebers/Save.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



var Save = function Save(props) {
  var columnsNumber = props.attributes.columnsNumber;
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Range Number Columns: ", columnsNumber, /*#__PURE__*/React.createElement("h1", null, "Hello Save adlm,sk"));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/team-memebers/TabPanel.js":
/*!***************************************!*\
  !*** ./src/team-memebers/TabPanel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPanel; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
var _excluded = ["tabId", "onClick", "children", "selected"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

 // import { NavigableMenu } from "../navigable-container";
// import Button from "../button";

var TabButton = function TabButton(_ref) {
  var tabId = _ref.tabId,
      onClick = _ref.onClick,
      children = _ref.children,
      selected = _ref.selected,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], _extends({
    role: "tab",
    tabIndex: selected ? null : -1,
    "aria-selected": selected,
    id: tabId,
    onClick: onClick
  }, rest), children);
};

function TabPanel(_ref2) {
  var _selectedTab$name;

  var className = _ref2.className,
      children = _ref2.children,
      tabs = _ref2.tabs,
      initialTabName = _ref2.initialTabName,
      _ref2$orientation = _ref2.orientation,
      orientation = _ref2$orientation === void 0 ? "horizontal" : _ref2$orientation,
      _ref2$activeClass = _ref2.activeClass,
      activeClass = _ref2$activeClass === void 0 ? "is-active" : _ref2$activeClass,
      _ref2$onSelect = _ref2.onSelect,
      onSelect = _ref2$onSelect === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref2$onSelect;
  var instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["useInstanceId"])(TabPanel, "tab-panel");

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var handleClick = function handleClick(tabKey) {
    setSelected(tabKey);
    onSelect(tabKey);
  };

  var onNavigate = function onNavigate(childIndex, child) {
    child.click();
  };

  var selectedTab = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(tabs, {
    name: selected
  });
  var selectedId = "".concat(instanceId, "-").concat((_selectedTab$name = selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.name) !== null && _selectedTab$name !== void 0 ? _selectedTab$name : "none");
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var newSelectedTab = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(tabs, {
      name: selected
    });

    if (!newSelectedTab) {
      setSelected(initialTabName || (tabs.length > 0 ? tabs[0].name : null));
    }
  }, [tabs]);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["NavigableMenu"], {
    role: "tablist",
    orientation: orientation,
    onNavigate: onNavigate,
    className: "components-tab-panel__tabs"
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement(TabButton, {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-tab-panel__tabs-item", tab.className, _defineProperty({}, activeClass, tab.name === selected)),
      tabId: "".concat(instanceId, "-").concat(tab.name),
      "aria-controls": "".concat(instanceId, "-").concat(tab.name, "-view"),
      selected: tab.name === selected,
      key: tab.name,
      onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["partial"])(handleClick, tab.name)
    }, /*#__PURE__*/React.createElement(React.Fragment, null, tab.icon), tab.title);
  })), selectedTab && /*#__PURE__*/React.createElement("div", {
    key: selectedId,
    "aria-labelledby": selectedId,
    role: "tabpanel",
    id: "".concat(selectedId, "-view"),
    className: "components-tab-panel__tab-content"
  }, children(selectedTab)));
}

/***/ }),

/***/ "./src/team-memebers/index.js":
/*!************************************!*\
  !*** ./src/team-memebers/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/team-memebers/Edit.js");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/team-memebers/Save.js");





var teamAttributes = {
  columnsNumber: {
    type: "number",
    default: 2
  },
  teamMemberImage: {
    type: "string",
    source: "attribute",
    selector: 'img',
    attribute: 'src'
  },
  teamMemberTitle: {
    type: "string",
    source: "html",
    selector: ".wpb-team-member__title",
    default: "Name"
  },
  teamMemberPosition: {
    type: "string",
    source: "html",
    selector: ".wpb-team-member__position",
    default: "Position"
  },
  teamMemberDescription: {
    type: "string",
    source: "html",
    selector: ".wpb-team-member__description",
    default: "Description Lorem Ipsum and other stuff"
  }
};
var teamSupports = {
  align: true
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("podkit/team-members", {
  title: "Team Memebers",
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: "podkit",
  description: "This is a trial description to be changed later for team members block",
  attributes: teamAttributes,
  supports: teamSupports,
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/testblock/Edit.js":
/*!*******************************!*\
  !*** ./src/testblock/Edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_googleFontsNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/googleFontsNames */ "./src/components/googleFontsNames.js");
/* harmony import */ var _components_googleFonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/googleFonts */ "./src/components/googleFonts.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _components_TextShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TextShadow */ "./src/components/TextShadow.js");
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Border */ "./src/components/Border.js");
/* harmony import */ var _components_BoxShadow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BoxShadow */ "./src/components/BoxShadow.js");
/* harmony import */ var _components_Padding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Padding */ "./src/components/Padding.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Edit = function Edit(props) {
  //   const [alignment, setAlignment] = useState("center center");
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    button1: true,
    button2: false,
    button3: false,
    button4: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isChecked = _useState4[0],
      setChecked = _useState4[1]; //   const [fontSize, setFontSize] = useState();


  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(options),
      _useState6 = _slicedToArray(_useState5, 2),
      filteredOptions = _useState6[0],
      setFilteredOptions = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(12),
      _useState8 = _slicedToArray(_useState7, 2),
      fontSize = _useState8[0],
      setFontSize = _useState8[1]; // const [clicked2, setClicked2] = useState(false);
  // const [clicked3, setClicked3] = useState(false);
  // const [clicked4, setClicked4] = useState(false);


  var buttonClickedHandler1 = function buttonClickedHandler1(event) {
    setClicked({
      button1: !clicked.button1
    });
  };

  var buttonClickedHandler2 = function buttonClickedHandler2(event) {
    setClicked({
      button2: !clicked.button2
    });
  };

  var buttonClickedHandler3 = function buttonClickedHandler3(event) {
    setClicked({
      button3: !clicked.button3
    });
  };

  var buttonClickedHandler4 = function buttonClickedHandler4(event) {
    setClicked({
      button4: !clicked.button4
    });
  };

  var paddingSize = props.attributes.paddingSize,
      setAttributes = props.setAttributes;

  var updateSpacing = function updateSpacing(dimension, size) {
    var device = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    setAttributes(_defineProperty({}, "".concat(dimension).concat(device), size));
  };

  var onSelect = function onSelect(tabName) {
    console.log("Selecting tab", tabName);
  };

  var options = [{
    value: "small",
    label: "Small"
  }, {
    value: "normal",
    label: "Normal"
  }, {
    value: "large",
    label: "Large"
  }, {
    value: "huge",
    label: "Huge"
  }];
  var fontSizes = [{
    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Small"),
    slug: "small",
    size: 12
  }, {
    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Big"),
    slug: "big",
    size: 26
  }];
  var fallbackFontSize = 16;
  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
    key: "inspector_control_section"
  }, /*#__PURE__*/React.createElement("h1", null, "Team Memeber Settings"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalBoxControl"], {
    values: {
      top: "50px",
      left: "10%",
      right: "10%",
      bottom: "50px"
    },
    onChange: function onChange(nextValues) {
      return console.log(nextValues);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CustomSelectControl"], {
    label: "Font Size",
    options: [{
      key: "small",
      name: "Small",
      style: {
        fontSize: "50%"
      }
    }, {
      key: "normal",
      name: "Normal",
      style: {
        fontSize: "100%"
      }
    }, {
      key: "large",
      name: "Large",
      style: {
        fontSize: "200%"
      }
    }],
    onChange: function onChange(e) {
      return console.log(e);
    },
    value: [{
      key: "small",
      name: "Small",
      style: {
        fontSize: "75%"
      }
    }, {
      key: "normal",
      name: "Normal",
      style: {
        fontSize: "100%"
      }
    }, {
      key: "large",
      name: "Large",
      style: {
        fontSize: "125%"
      }
    }].find(function (option) {
      return option.key === "large";
    })
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalGradientPicker"], {
    value: "#f00",
    onChange: function onChange() {
      return true;
    },
    gradients: [{
      name: "Vivid cyan blue to vivid purple",
      gradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
      slug: "vivid-cyan-blue-to-vivid-purple"
    }, {
      name: "Light green cyan to vivid green cyan",
      gradient: "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
      slug: "light-green-cyan-to-vivid-green-cyan"
    }, {
      name: "Luminous vivid amber to luminous vivid orange",
      gradient: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
      slug: "luminous-vivid-amber-to-luminous-vivid-orange"
    }, {
      name: "Luminous vivid orange to vivid red",
      gradient: "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
      slug: "luminous-vivid-orange-to-vivid-red"
    }, {
      name: "Very light gray to cyan bluish gray",
      gradient: "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
      slug: "very-light-gray-to-cyan-bluish-gray"
    }, {
      name: "Cool to warm spectrum",
      gradient: "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
      slug: "cool-to-warm-spectrum"
    }]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TimePicker"], {
    currentDate: new Date(),
    onChange: function onChange(date) {
      return console.log(date);
    } // is12Hour

  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FontSizePicker"], {
    fontSizes: fontSizes,
    value: fontSize,
    fallbackFontSize: fallbackFontSize,
    onChange: function onChange(newFontSize) {
      setFontSize(newFontSize);
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "admin-home"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "products"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "wordpress"
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CustomSelectControl"], {
    label: "testing custom select",
    options: options.map(function (option) {
      return /*#__PURE__*/React.createElement("li", null, option.label);
    })
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CheckboxControl"], {
    label: "Is author",
    help: "Is the user a author or not?",
    checked: isChecked,
    onChange: setChecked
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorIndicator"], {
    colorValue: "#0073aa"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    size: "extraSmall"
  }, /*#__PURE__*/React.createElement("h3", null, "Test Cards Components")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FlexBlock"], null, "Flex Block"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FlexItem"], null, /*#__PURE__*/React.createElement("h3", null, "Test Content Flex Item"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CardDivider"], null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/React.createElement("h3", null, "Test Cards Components111")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CardDivider"], null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], null, /*#__PURE__*/React.createElement("img", {
    src: "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
  })), /*#__PURE__*/React.createElement("h3", null, "Test Cards Components2222"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    id: "textarea-1",
    label: "Text",
    help: "Enter some text"
  }, /*#__PURE__*/React.createElement("textarea", {
    id: "textarea-1"
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "my-tab-panel",
    activeClass: "active-tab",
    onSelect: onSelect,
    orientation: "horizontal",
    initialTabName: "tab2",
    tabs: [{
      name: "tab1",
      title: "tab1",
      className: "tab-one",
      children: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, /*#__PURE__*/React.createElement("h1", null, "Tab One Testing Tabs"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        className: clicked.button1 && "is-primary",
        onClick: buttonClickedHandler1,
        variant: "primary"
      }, "Button 1"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        className: clicked.button2 && "is-primary",
        onClick: buttonClickedHandler2,
        variant: "primary"
      }, "Button 2"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        className: clicked.button3 && "is-primary",
        onClick: buttonClickedHandler3,
        variant: "primary"
      }, "Button 3"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        className: clicked.button4 && "is-primary",
        onClick: buttonClickedHandler4,
        variant: "primary"
      }, "Button 4")))
    }, {
      name: "tab2",
      title: "tab2",
      className: "tab-two",
      children: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, /*#__PURE__*/React.createElement("h1", null, "Tab Two Testing Tabs dasdasdas"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextHighlight"], {
        text: "Why do we like Gutenberg? Because Gutenberg is the best!",
        highlight: "Gutenberg"
      }))
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("p", null, tab.children);
  })), /*#__PURE__*/React.createElement("div", {
    className: "wpb_block_container",
    key: "render_section"
  }, /*#__PURE__*/React.createElement("h1", null, "Team Memeber Block"))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/testblock/Save.js":
/*!*******************************!*\
  !*** ./src/testblock/Save.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



var Save = function Save(props) {
  return /*#__PURE__*/React.createElement("h1", null, "Hello Team Member");
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/testblock/index.js":
/*!********************************!*\
  !*** ./src/testblock/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/testblock/Edit.js");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/testblock/Save.js");





var testblockAttributes = {
  paddingSize: {
    type: "string"
  }
};
var testblockSupports = {
  align: true
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("podkit/testblock", {
  title: "Test Blocks",
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: "podkit",
  attributes: testblockAttributes,
  supports: testblockSupports,
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map