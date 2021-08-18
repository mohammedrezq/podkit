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
    class: "wpb-toggle"
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
        onResetClick: onResetClick
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal", "wpb"),
        value: horizontal,
        onChange: onChangeHorizontal,
        onResetClick: onResetClick
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical", "wpb"),
        value: vertical,
        onChange: onChangeVertical,
        onResetClick: onResetClick
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
    class: "wpb-toggle"
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
        onResetClick: onResetClick
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal", "wpb"),
        value: horizontal,
        onChange: onChangeHorizontal,
        onResetClick: onResetClick
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical", "wpb"),
        value: vertical,
        onChange: onChangeVertical,
        onResetClick: onResetClick
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
    class: "wpb-toggle"
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
      setAttributes = props.setAttributes;

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

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
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
    class: "wpb-toggle"
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
  })), /*#__PURE__*/React.createElement(_components_BoxShadow__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }), /*#__PURE__*/React.createElement(_components_TextShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }))), /*#__PURE__*/React.createElement("div", {
    class: "cards"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["AlignmentToolbar"], {
    value: cardAlignment,
    onChange: onChangeCardAlignment
  })), /*#__PURE__*/React.createElement("div", {
    class: "card"
  }, /*#__PURE__*/React.createElement("div", {
    class: "card-body",
    style: {
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition)
    }
  }, /*#__PURE__*/React.createElement("div", {
    class: "card-front",
    style: {
      display: "block",
      background: frontCardBackground,
      textAlign: cardAlignment,
      fontSize: textSize + "px",
      fontWeight: textWeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      color: textColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowColor)
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("First Card", "wpb"),
    value: cardFront,
    onChange: onChangeCardFront,
    style: {
      fontFamily: cardFontFamily
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: "card-back",
    style: {
      display: "block",
      background: backCardBackground,
      textAlign: "".concat(cardAlignment),
      fontSize: textSize + "px",
      fontWeight: textWeight,
      fontStyle: textStyle,
      textTransform: textUpper ? "uppercase" : "none",
      letterSpacing: textLetter,
      color: textColor,
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition),
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowColor)
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Card Back", "wpb"),
    value: cardBack,
    onChange: onChangeCardBack,
    style: {
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
      textShadowVertical = _props$attributes.textShadowVertical;
  return /*#__PURE__*/React.createElement("div", {
    class: "cards"
  }, /*#__PURE__*/React.createElement("div", {
    class: "card"
  }, /*#__PURE__*/React.createElement("div", {
    class: "card-body",
    style: {
      boxShadow: "".concat(boxShadowHorizontal, "px ").concat(boxShadowVertical, "px ").concat(boxShadowBlur, "px ").concat(boxShadowColor, " ").concat(boxShadowPosition)
    }
  }, /*#__PURE__*/React.createElement("div", {
    class: "card-front",
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
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowBlur, " ").concat(textShadowColor)
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
    value: cardFront,
    style: {
      background: backCardBackground
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: "card-back",
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
      textShadow: "".concat(textShadowHorizontal, "px ").concat(textShadowVertical, "px ").concat(textShadowBlur, " ").concat(textShadowColor)
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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Font */ "./src/flip/Font.js");
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Font__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/flip/Edit.js");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/flip/Save.js");
var __ = wp.i18n.__;





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
    type: "string",
    default: "none"
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
  }
};
var FlipBoxSupports = {
  align: true
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("podkit/flip", {
  title: __("Flip Box", "podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: "podkit",
  attributes: FlipBoxAttributes,
  supports: FlipBoxSupports,
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"]
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
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