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
      title: __("Color settings", "podkit")
    }, /*#__PURE__*/React.createElement("div", {
      className: "components-base-control"
    }, /*#__PURE__*/React.createElement("div", {
      className: "components-base-control__field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "components-base-control__label"
    }, __("Background color", "podkit")), /*#__PURE__*/React.createElement(ColorPalette, {
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
          label: __("Change image.", "podkit")
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "podkit-nameplate"
    }, __("The Binaryville Podcast", "podkit")), /*#__PURE__*/React.createElement("h3", {
      className: "podkit-title"
    }, /*#__PURE__*/React.createElement(RichText, {
      placeholder: __("Podcast episode title", "podkit"),
      value: epsiodeTitle,
      onChange: onChangeEpisodeTitle
    }))), /*#__PURE__*/React.createElement("div", {
      className: "podkit-description"
    }, /*#__PURE__*/React.createElement(RichText, {
      style: {
        textAlign: descriptionAlignment
      },
      multiline: "p",
      placeholder: __("Episode description", "podkit"),
      onChange: onChangeEpisodeDescription,
      value: episodeDescription
    })), /*#__PURE__*/React.createElement("div", {
      className: "podkit-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, __("Listen now!", "podkit")), /*#__PURE__*/React.createElement(URLInputButton, {
      className: "podkit-dropdown__input",
      label: __("Episode URL", "podkit"),
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
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