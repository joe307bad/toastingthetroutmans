/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/builtin/es6/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/builtin/es6/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/builtin/es6/inheritsLoose.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/builtin/es6/inheritsLoose.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/builtin/es6/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/builtin/es6/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/styles.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/styles.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container > div > div {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.text {\r\n    pointer-events: none;\r\n    justify-content: start!important;\r\n    font-family: 'Kanit', sans-serif;\r\n    line-height: 0px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.number {\r\n    font-size: 300px;\r\n    color: #545864;\r\n}\r\n\r\n.number span {\r\n    display: inline-block;\r\n    position: relative;\r\n    transform: translate3d(-35%, 0, 0);\r\n}\r\n\r\n.slopeBegin {\r\n    background-color: #20232f;\r\n    clip-path: polygon(20% 0, 70% 0, 50% 100%, 0% 100%);\r\n}\r\n\r\n.slopeEnd {\r\n    clip-path: polygon(70% 0, 100% 0, 80% 100%, 50% 100%);\r\n}\r\n\r\n.slopeBegin,\r\n.slopeEnd {\r\n    position: absolute;\r\n    width: 170%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.pink {\r\n    background: linear-gradient(to right, deeppink 0%, coral 100%);\r\n}\r\n\r\n.teal {\r\n    background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);\r\n}\r\n\r\n.tomato {\r\n    background: linear-gradient(to right, tomato 0%, gold 100%);\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/react-spring/dist/web.js":
/*!***********************************************!*\
  !*** ./node_modules/react-spring/dist/web.js ***!
  \***********************************************/
/*! exports provided: Spring, Keyframes, Transition, Trail, Parallax, ParallaxLayer, Animation, SpringAnimation, AnimatedValue, config, animated, controller, interpolate, createAnimatedComponent, Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return Spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyframes", function() { return Keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return Trail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return Parallax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxLayer", function() { return ParallaxLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringAnimation", function() { return SpringAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedValue", function() { return AnimatedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return createAnimatedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controller", function() { return controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimatedComponent", function() { return createAnimatedComponent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/builtin/es6/extends */ "./node_modules/@babel/runtime/helpers/builtin/es6/extends.js");
/* harmony import */ var _babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/builtin/es6/inheritsLoose */ "./node_modules/@babel/runtime/helpers/builtin/es6/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/builtin/es6/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/builtin/es6/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);






var bugfixes = undefined;
var applyAnimatedValues = undefined;
var colorNames = [];
var requestFrame = function requestFrame(cb) {
  return global.requestAnimationFrame(cb);
};
var cancelFrame = function cancelFrame(cb) {
  return global.cancelAnimationFrame(cb);
};
var interpolation = undefined;
var injectApplyAnimatedValues = function injectApplyAnimatedValues(fn, transform) {
  return applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
};
var injectColorNames = function injectColorNames(names) {
  return colorNames = names;
};
var injectBugfixes = function injectBugfixes(fn) {
  return bugfixes = fn;
};
var injectInterpolation = function injectInterpolation(cls) {
  return interpolation = cls;
};
var injectFrame = function injectFrame(raf, caf) {
  var _ref;

  return _ref = [raf, caf], requestFrame = _ref[0], cancelFrame = _ref[1], _ref;
};

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame
});

var colors = {
  transparent: 0x00000000,
  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

var linear = function linear(t) {
  return t;
};

var Interpolation =
/*#__PURE__*/
function () {
  function Interpolation() {}

  Interpolation.create = function create(config) {
    if (typeof config === 'function') return config;
    if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);
    var outputRange = config.output;
    var inputRange = config.range;
    var easing = config.easing || linear;
    var extrapolateLeft = 'extend';
    var map = config.map;

    if (config.extrapolateLeft !== undefined) {
      extrapolateLeft = config.extrapolateLeft;
    } else if (config.extrapolate !== undefined) {
      extrapolateLeft = config.extrapolate;
    }

    var extrapolateRight = 'extend';

    if (config.extrapolateRight !== undefined) {
      extrapolateRight = config.extrapolateRight;
    } else if (config.extrapolate !== undefined) {
      extrapolateRight = config.extrapolate;
    }

    return function (input) {
      var range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  };

  return Interpolation;
}();

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') {
      return result;
    } else if (extrapolateLeft === 'clamp') {
      result = inputMin;
    }
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') {
      return result;
    } else if (extrapolateRight === 'clamp') {
      result = inputMax;
    }
  }

  if (outputMin === outputMax) return outputMin;

  if (inputMin === inputMax) {
    if (input <= inputMin) return outputMin;
    return outputMax;
  } // Input Range


  if (inputMin === -Infinity) {
    result = -result;
  } else if (inputMax === Infinity) {
    result = result - inputMin;
  } else {
    result = (result - inputMin) / (inputMax - inputMin);
  } // Easing


  result = easing(result); // Output Range

  if (outputMin === -Infinity) {
    result = -result;
  } else if (outputMax === Infinity) {
    result = result + outputMin;
  } else {
    result = result * (outputMax - outputMin) + outputMin;
  }

  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = matchers.hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = matchers.rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = matchers.rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = matchers.hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = matchers.hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = matchers.hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = matchers.hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = matchers.hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
} // var INTEGER = '[-+]?\\d+';


var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 */

function createInterpolation(config) {
  var outputRange = config.output.map(colorToRgba); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
    return Interpolation.create(Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
      output: outputRanges[i]
    }));
  });
  var shouldRound = /^rgb/.test(outputRange[0]);
  return function (input) {
    var i = 0;
    return outputRange[0].replace(stringShapeRegex, function () {
      var val = interpolations[i++](input);
      return String(shouldRound && i < 4 ? Math.round(val) : val);
    });
  };
}

var Animated =
/*#__PURE__*/
function () {
  function Animated() {}

  var _proto = Animated.prototype;

  _proto.__attach = function __attach() {};

  _proto.__detach = function __detach() {};

  _proto.__getValue = function __getValue() {};

  _proto.__getAnimatedValue = function __getAnimatedValue() {
    return this.__getValue();
  };

  _proto.__addChild = function __addChild(child) {};

  _proto.__removeChild = function __removeChild(child) {};

  _proto.__getChildren = function __getChildren() {
    return [];
  };

  return Animated;
}();

var AnimatedTracking =
/*#__PURE__*/
function (_Animated) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedTracking, _Animated);

  function AnimatedTracking(value, parent, animationClass, animationConfig, callback) {
    var _this;

    _this = _Animated.call(this) || this;
    _this.update = throttle(function () {
      _this._value.animate(new _this._animationClass(Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this._animationConfig, {
        to: _this._animationConfig.to.__getValue()
      })), _this._callback);
    }, 1000 / 30);
    _this._value = value;
    _this._parent = parent;
    _this._animationClass = animationClass;
    _this._animationConfig = animationConfig;
    _this._callback = callback;

    _this.__attach();

    return _this;
  }

  var _proto = AnimatedTracking.prototype;

  _proto.__getValue = function __getValue() {
    return this._parent.__getValue();
  };

  _proto.__attach = function __attach() {
    this._parent.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._parent.__removeChild(this);
  };

  return AnimatedTracking;
}(Animated);

function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function () {
        return wait = false;
      }, limit);
    }
  };
}

var AnimatedWithChildren =
/*#__PURE__*/
function (_Animated) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedWithChildren, _Animated);

  function AnimatedWithChildren() {
    var _this;

    _this = _Animated.call(this) || this;
    _this._children = [];
    return _this;
  }

  var _proto = AnimatedWithChildren.prototype;

  _proto.__addChild = function __addChild(child) {
    if (this._children.length === 0) this.__attach();

    this._children.push(child);
  };

  _proto.__removeChild = function __removeChild(child) {
    var index = this._children.indexOf(child);

    if (index === -1) {
      console.warn("Trying to remove a child that doesn't exist");
      return;
    }

    this._children.splice(index, 1);

    if (this._children.length === 0) this.__detach();
  };

  _proto.__getChildren = function __getChildren() {
    return this._children;
  };

  return AnimatedWithChildren;
}(Animated);

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedInterpolation, _AnimatedWithChildren);

  function AnimatedInterpolation(parents, config) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._parents = Array.isArray(parents) ? parents : [parents];
    _this._interpolation = Interpolation.create(config);
    return _this;
  }

  var _proto = AnimatedInterpolation.prototype;

  _proto.__getValue = function __getValue() {
    return this._interpolation.apply(this, this._parents.map(function (value) {
      return value.__getValue();
    }));
  };

  _proto.__attach = function __attach() {
    for (var i = 0; i < this._parents.length; ++i) {
      if (this._parents[i] instanceof Animated) this._parents[i].__addChild(this);
    }
  };

  _proto.__detach = function __detach() {
    for (var i = 0; i < this._parents.length; ++i) {
      if (this._parents[i] instanceof Animated) this._parents[i].__removeChild(this);
    }
  };

  _proto.__update = function __update(config) {
    this._interpolation = Interpolation.create(config);
    return this;
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation(this, config);
  };

  return AnimatedInterpolation;
}(AnimatedWithChildren);
var interpolate$1 = function interpolate(parents, config) {
  return new AnimatedInterpolation(parents, config);
};

var _uniqueId = 0;
/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.__getChildren().forEach(function (child) {
    return findAnimatedStyles(child, styles);
  });
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


var AnimatedValue =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(value) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._value = value;
    _this._animation = null;
    _this._animatedStyles = new Set();
    _this._listeners = {};
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.__detach = function __detach() {
    this.stopAnimation();
  };

  _proto.__getValue = function __getValue() {
    return this._value;
  };

  _proto._update = function _update() {
    findAnimatedStyles(this, this._animatedStyles);
  };

  _proto._flush = function _flush() {
    if (this._animatedStyles.size === 0) this._update();

    this._animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto._updateValue = function _updateValue(value) {
    this._value = value;

    this._flush();

    for (var key in this._listeners) {
      this._listeners[key]({
        value: this.__getValue()
      });
    }
  };
  /**
   * Directly set the value.  This will stop any animations running on the value
   * and update all the bound properties.
   */


  _proto.setValue = function setValue(value) {
    if (this._animation) {
      this._animation.stop();

      this._animation = null;
    }

    this._animatedStyles.clear();

    this._updateValue(value);
  };
  /**
   * Stops any running animation or tracking.  `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   */


  _proto.stopAnimation = function stopAnimation(callback) {
    this.stopTracking();
    this._animation && this._animation.stop();
    this._animation = null;
    callback && callback(this.__getValue());
  };
  /**
   * Interpolates the value before updating the property, e.g. mapping 0-1 to
   * 0-10.
   */


  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation(this, config);
  };
  /**
   * Typically only used internally, but could be used by a custom Animation
   * class.
   */


  _proto.animate = function animate(animation, callback) {
    var _this2 = this;

    var previousAnimation = this._animation;
    this._animation && this._animation.stop();
    this._animation = animation;

    this._animatedStyles.clear();

    animation.start(this._value, function (value) {
      return _this2._updateValue(value);
    }, function (result) {
      _this2._animation = null;
      callback && callback(result);
    }, previousAnimation);
  };
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to
   * synchronously read the value because it might be driven natively.
   */


  _proto.addListener = function addListener(callback) {
    var id = String(_uniqueId++);
    this._listeners[id] = callback;
    return id;
  };

  _proto.removeListener = function removeListener(id) {
    delete this._listeners[id];
  };

  _proto.removeAllListeners = function removeAllListeners() {
    this._listeners = {};
  };
  /**
   * Typically only used internally.
   */


  _proto.stopTracking = function stopTracking() {
    this._tracking && this._tracking.__detach();
    this._tracking = null;
  };
  /**
   * Typically only used internally.
   */


  _proto.track = function track(tracking) {
    this.stopTracking();
    this._tracking = tracking;
  };

  return AnimatedValue;
}(AnimatedWithChildren);

function shallowEqual(a, b) {
  for (var i in a) {
    if (!(i in b)) return false;
  }

  for (var _i in b) {
    if (a[_i] !== b[_i]) return false;
  }

  return true;
}
function callProp(arg, state) {
  return typeof arg === 'function' ? arg(state) : arg;
}
function getValues(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
}
function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      native = props.native,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      render = props.render,
      reset = props.reset,
      force = props.force,
      immediate = props.immediate,
      impl = props.impl,
      inject = props.inject,
      delay = props.delay,
      attach = props.attach,
      forward = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["to", "from", "config", "native", "onRest", "onFrame", "children", "render", "reset", "force", "immediate", "impl", "inject", "delay", "attach"]);

  return forward;
}
function renderChildren(props, componentProps) {
  var forward = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, componentProps, getForwardProps(props));

  return props.render ? props.render(Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, forward, {
    children: props.children
  })) : props.children(forward);
}
function convertToAnimatedValue(acc, _ref) {
  var _extends2;

  var name = _ref[0],
      value = _ref[1];
  return Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, (_extends2 = {}, _extends2[name] = new AnimatedValue(value), _extends2));
}
function convertValues(props) {
  var from = props.from,
      to = props.to,
      native = props.native;
  var allProps = Object.entries(Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, to);
}

var check = function check(value) {
  return value === 'auto';
};

var overwrite = function overwrite(width, height) {
  return function (acc, _ref) {
    var _extends2;

    var name = _ref[0],
        value = _ref[1];
    return Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
  };
};

function fixAuto(props, callback) {
  var from = props.from,
      to = props.to; // Dry-route props back if nothing's using 'auto' in there

  if (!getValues(from).concat(getValues(to)).some(check)) return; // Fetch render v-dom

  var element = renderChildren(props, convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return;
  var elementStyles = element.props.style; // Return v.dom with injected ref

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(element.type, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element.props, {
    style: Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: function ref(_ref2) {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        var node = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(_ref2);
        var width, height;
        var cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          var paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          var paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          var borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          var borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        var convert = overwrite(width, height);
        callback(Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
Object.keys(isUnitlessNumber).forEach(function (prop) {
  return prefixes.forEach(function (pre) {
    return isUnitlessNumber[prefixKey(pre, prop)] = isUnitlessNumber[prop];
  });
});

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        attributes = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["style"]); // Set styles ...


    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      if (instance.getAttribute(name)) instance.setAttribute(name, attributes[name]);
    }
  } else return false;
}, function (style) {
  return style;
});

// Important note: start() and stop() will only be called at most once.
// Once an animation has been stopped or finished its course, it will
// not be reused.
var Animation =
/*#__PURE__*/
function () {
  function Animation() {}

  var _proto = Animation.prototype;

  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation) {};

  _proto.stop = function stop() {}; // Helper function for subclasses to make sure onEnd is only called once.


  _proto.__debouncedOnEnd = function __debouncedOnEnd(result) {
    var onEnd = this.__onEnd;
    this.__onEnd = null;
    onEnd && onEnd(result);
  };

  return Animation;
}();

var withDefault = function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
};

var tensionFromOrigamiValue = function tensionFromOrigamiValue(oValue) {
  return (oValue - 30) * 3.62 + 194;
};

var frictionFromOrigamiValue = function frictionFromOrigamiValue(oValue) {
  return (oValue - 8) * 3 + 25;
};

var fromOrigamiTensionAndFriction = function fromOrigamiTensionAndFriction(tension, friction) {
  return {
    tension: tensionFromOrigamiValue(tension),
    friction: frictionFromOrigamiValue(friction)
  };
};

var SpringAnimation =
/*#__PURE__*/
function (_Animation) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SpringAnimation, _Animation);

  function SpringAnimation(config) {
    var _this;

    _this = _Animation.call(this) || this;

    _this.onUpdate = function () {
      var position = _this._lastPosition;
      var velocity = _this._lastVelocity;
      var tempPosition = _this._lastPosition;
      var tempVelocity = _this._lastVelocity; // If for some reason we lost a lot of frames (e.g. process large payload or
      // stopped in the debugger), we only advance by 4 frames worth of
      // computation and will continue on the next frame. It's better to have it
      // running at faster speed than jumping to the end.

      var MAX_STEPS = 64;
      var now = Date.now();
      if (now > _this._lastTime + MAX_STEPS) now = _this._lastTime + MAX_STEPS; // We are using a fixed time step and a maximum number of iterations.
      // The following post provides a lot of thoughts into how to build this
      // loop: http://gafferongames.com/game-physics/fix-your-timestep/

      var TIMESTEP_MSEC = 1;
      var numSteps = Math.floor((now - _this._lastTime) / TIMESTEP_MSEC);

      for (var i = 0; i < numSteps; ++i) {
        // Velocity is based on seconds instead of milliseconds
        var step = TIMESTEP_MSEC / 1000; // This is using RK4. A good blog post to understand how it works:
        // http://gafferongames.com/game-physics/integration-basics/

        var aVelocity = velocity;
        var aAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
        var tempPosition = position + aVelocity * step / 2;
        var tempVelocity = velocity + aAcceleration * step / 2;
        var bVelocity = tempVelocity;
        var bAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
        tempPosition = position + bVelocity * step / 2;
        tempVelocity = velocity + bAcceleration * step / 2;
        var cVelocity = tempVelocity;
        var cAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
        tempPosition = position + cVelocity * step / 2;
        tempVelocity = velocity + cAcceleration * step / 2;
        var dVelocity = tempVelocity;
        var dAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
        tempPosition = position + cVelocity * step / 2;
        tempVelocity = velocity + cAcceleration * step / 2;
        var dxdt = (aVelocity + 2 * (bVelocity + cVelocity) + dVelocity) / 6;
        var dvdt = (aAcceleration + 2 * (bAcceleration + cAcceleration) + dAcceleration) / 6;
        position += dxdt * step;
        velocity += dvdt * step;
      }

      _this._lastTime = now;
      _this._lastPosition = position;
      _this._lastVelocity = velocity;

      _this._onUpdate(position); // a listener might have stopped us in _onUpdate


      if (!_this.__active) return; // Conditions for stopping the spring animation

      var isOvershooting = false;

      if (_this._overshootClamping && _this._tension !== 0) {
        if (_this._startPosition < _this._to) {
          isOvershooting = position > _this._to;
        } else {
          isOvershooting = position < _this._to;
        }
      }

      var isVelocity = Math.abs(velocity) <= _this._restSpeedThreshold;

      var isDisplacement = true;
      if (_this._tension !== 0) isDisplacement = Math.abs(_this._to - position) <= _this._restDisplacementThreshold;

      if (isOvershooting || isVelocity && isDisplacement) {
        // Ensure that we end up with a round value
        if (_this._tension !== 0) _this._onUpdate(_this._to);
        return _this.__debouncedOnEnd({
          finished: true
        });
      }

      _this._animationFrame = requestFrame(_this.onUpdate);
    };

    _this._overshootClamping = withDefault(config.overshootClamping, false);
    _this._restDisplacementThreshold = withDefault(config.restDisplacementThreshold, 0.0001);
    _this._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.0001);
    _this._initialVelocity = config.velocity;
    _this._lastVelocity = withDefault(config.velocity, 0);
    _this._to = config.to;
    var springConfig = fromOrigamiTensionAndFriction(withDefault(config.tension, 40), withDefault(config.friction, 7));
    _this._tension = springConfig.tension;
    _this._friction = springConfig.friction;
    return _this;
  }

  var _proto = SpringAnimation.prototype;

  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation) {
    this.__active = true;
    this._startPosition = fromValue;
    this._lastPosition = this._startPosition;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._lastTime = Date.now();

    if (previousAnimation instanceof SpringAnimation) {
      var internalState = previousAnimation.getInternalState();
      this._lastPosition = internalState.lastPosition;
      this._lastVelocity = internalState.lastVelocity;
      this._lastTime = internalState.lastTime;
    }

    if (typeof fromValue === 'string') {
      this._onUpdate(fromValue);

      return this.__debouncedOnEnd({
        finished: true
      });
    }

    if (this._initialVelocity !== undefined && this._initialVelocity !== null) this._lastVelocity = this._initialVelocity;
    this.onUpdate();
  };

  _proto.getInternalState = function getInternalState() {
    return {
      lastPosition: this._lastPosition,
      lastVelocity: this._lastVelocity,
      lastTime: this._lastTime
    };
  };

  _proto.stop = function stop() {
    this.__active = false;
    clearTimeout(this._timeout);
    cancelFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false
    });
  };

  return SpringAnimation;
}(Animation);

var AnimatedArray =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedArray, _AnimatedWithChildren);

  function AnimatedArray(array) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._values = array.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this;
  }

  var _proto = AnimatedArray.prototype;

  _proto.setValue = function setValue(values) {
    var _this2 = this;

    values.forEach(function (n, i) {
      return _this2._values[i].setValue(n);
    });
  };

  _proto.__getValue = function __getValue() {
    return this._values.map(function (v) {
      return v.__getValue();
    });
  };

  _proto.stopAnimation = function stopAnimation(callback) {
    this._values.forEach(function (v) {
      return v.stopAnimation();
    });

    callback && callback(this.__getValue());
  };

  _proto.__attach = function __attach() {
    for (var i = 0; i < this._values.length; ++i) {
      if (this._values[i] instanceof Animated) this._values[i].__addChild(this);
    }
  };

  _proto.__detach = function __detach() {
    for (var i = 0; i < this._values.length; ++i) {
      if (this._values[i] instanceof Animated) this._values[i].__removeChild(this);
    }
  };

  return AnimatedArray;
}(AnimatedWithChildren);

function maybeVectorAnim(array, _ref, anim, impl) {
  var tension = _ref.tension,
      friction = _ref.friction,
      to = _ref.to;
  // { tension, friction, to: [...]}
  if (array instanceof AnimatedArray) return parallel(array._values.map(function (v, i) {
    return anim(v, {
      tension: tension,
      friction: friction,
      to: to[i]
    }, impl);
  }), {
    stopTogether: false
  });
  return null;
}

function parallel(animations, config) {
  var doneCount = 0;
  var hasEnded = {};
  var stopTogether = !(config && config.stopTogether === false);
  var result = {
    start: function start(callback) {
      if (doneCount === animations.length) return callback && callback({
        finished: true
      });
      animations.forEach(function (animation, idx) {
        var cb = function cb(endResult) {
          hasEnded[idx] = true;
          doneCount++;

          if (doneCount === animations.length) {
            doneCount = 0;
            return callback && callback(endResult);
          }

          if (!endResult.finished && stopTogether) result.stop();
        };

        if (!animation) cb({
          finished: true
        });else animation.start(cb);
      });
    },
    stop: function stop() {
      animations.forEach(function (animation, idx) {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    }
  };
  return result;
}

function controller(value, config, impl) {
  if (impl === void 0) {
    impl = SpringAnimation;
  }

  return maybeVectorAnim(value, config, controller, impl) || {
    start: function start(callback) {
      var singleValue = value;
      var singleConfig = config;
      singleValue.stopTracking();
      if (config.to instanceof Animated) singleValue.track(new AnimatedTracking(singleValue, config.to, impl, singleConfig, callback));else singleValue.animate(new impl(singleConfig), callback);
    },
    stop: function stop() {
      value.stopAnimation();
    }
  };
}

var AnimatedStyle =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedStyle, _AnimatedWithChildren);

  function AnimatedStyle(style) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    _this._style = style;
    return _this;
  }

  var _proto = AnimatedStyle.prototype;

  _proto.__getValue = function __getValue() {
    var style = {};

    for (var key in this._style) {
      var value = this._style[key];
      style[key] = value instanceof Animated ? value.__getValue() : value;
    }

    return style;
  };

  _proto.__getAnimatedValue = function __getAnimatedValue() {
    var style = {};

    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof Animated) style[key] = value.__getAnimatedValue();
    }

    return style;
  };

  _proto.__attach = function __attach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof Animated) value.__addChild(this);
    }
  };

  _proto.__detach = function __detach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof Animated) value.__removeChild(this);
    }
  };

  return AnimatedStyle;
}(AnimatedWithChildren);

var AnimatedProps =
/*#__PURE__*/
function (_Animated) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedProps, _Animated);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _Animated.call(this) || this;

    if (props.style) {
      props = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        style: new AnimatedStyle(props.style)
      });
    }

    _this._props = props;
    _this._callback = callback;

    _this.__attach();

    return _this;
  }

  var _proto = AnimatedProps.prototype;

  _proto.__getValue = function __getValue() {
    var props = {};

    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof Animated) props[key] = value.__getValue();else props[key] = value;
    }

    return props;
  };

  _proto.__getAnimatedValue = function __getAnimatedValue() {
    var props = {};

    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof Animated) props[key] = value.__getAnimatedValue();
    }

    return props;
  };

  _proto.__attach = function __attach() {
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof Animated) value.__addChild(this);
    }
  };

  _proto.__detach = function __detach() {
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof Animated) value.__removeChild(this);
    }
  };

  _proto.update = function update() {
    this._callback();
  };

  return AnimatedProps;
}(Animated);

function createAnimatedComponent(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedComponent, _React$Component);

      function AnimatedComponent() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = AnimatedComponent.prototype;

      _proto.componentWillUnmount = function componentWillUnmount() {
        this._propsAnimated && this._propsAnimated.__detach();
      };

      _proto.setNativeProps = function setNativeProps(props) {
        var didUpdate = applyAnimatedValues.fn(this.node, props, this);
        if (didUpdate === false) this.forceUpdate();
      };

      _proto.componentWillMount = function componentWillMount() {
        this.attachProps(this.props);
      };

      _proto.attachProps = function attachProps(nextProps) {
        var _this = this;

        var oldPropsAnimated = this._propsAnimated; // The system is best designed when setNativeProps is implemented. It is
        // able to avoid re-rendering and directly set the attributes that
        // changed. However, setNativeProps can only be implemented on leaf
        // native components. If you want to animate a composite component, you
        // need to re-render it. In this case, we have a fallback that uses
        // forceUpdate.

        var callback = function callback() {
          if (_this.node) {
            var didUpdate = applyAnimatedValues.fn(_this.node, _this._propsAnimated.__getAnimatedValue(), _this);
            if (didUpdate === false) _this.forceUpdate();
          }
        };

        this._propsAnimated = new AnimatedProps(nextProps, callback); // When you call detach, it removes the element from the parent list
        // of children. If it goes to 0, then the parent also detaches itself
        // and so on.
        // An optimization is to attach the new elements and THEN detach the old
        // ones instead of detaching and THEN attaching.
        // This way the intermediate state isn't to go to 0 and trigger
        // this expensive recursive detaching to then re-attach everything on
        // the very next operation.

        oldPropsAnimated && oldPropsAnimated.__detach();
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.attachProps(nextProps);
      };

      _proto.render = function render() {
        var _this2 = this;

        var props = this._propsAnimated.__getValue();

        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          ref: function ref(node) {
            return _this2.node = node;
          }
        }));
      };

      return AnimatedComponent;
    }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component)
  );
}

var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  }
};

var Spring =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Spring, _React$Component);

  function Spring() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      changed: false,
      dry: false
    };
    _this.didUpdate = false;
    _this.didInject = false;
    _this.animations = {};
    _this.interpolators = {};

    _this.start = function () {
      var _this$props = _this.props,
          config$$1 = _this$props.config,
          impl = _this$props.impl;
      if (_this.props.onStart) _this.props.onStart();
      Object.keys(_this.animations).forEach(function (name) {
        var _this$animations$name = _this.animations[name],
            animation = _this$animations$name.animation,
            to = _this$animations$name.toValue; // TODO: figure out why this is needed ...

        if (!to.__getValue && animation.__getValue() === to) return _this.finishAnimation(name);
        controller(animation, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: to
        }, callProp(config$$1, name)), impl).start(!to.__getValue && function (props) {
          return props.finished && _this.finishAnimation(name);
        });
      });
    };

    _this.stop = function () {
      return getValues(_this.animations).forEach(function (_ref) {
        var animation = _ref.animation;
        return animation.stopAnimation();
      });
    };

    _this.finishAnimation = function (name) {
      if (!_this.mounted) return;
      var _this$animations$name2 = _this.animations[name],
          animation = _this$animations$name2.animation,
          to = _this$animations$name2.toValue;
      _this.animations[name].stopped = true;

      if (getValues(_this.animations).every(function (a) {
        return a.stopped;
      })) {
        var current = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props.from, _this.props.to);

        if (_this.props.onRest) _this.props.onRest(current); // Restore end-state

        if (_this.didInject) {
          _this.afterInject = convertValues(_this.props);
          _this.didInject = false;

          _this.setState({
            dry: true
          });
        }
      }
    };

    return _this;
  }

  var _proto = Spring.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  };

  Spring.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
    var changed = _ref2.changed,
        dry = _ref2.dry,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    var from = props.from,
        to = props.to,
        reset = props.reset,
        force = props.force;
    changed = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset || force && !dry;
    return {
      changed: changed,
      lastProps: props,
      dry: false
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var propsChanged = this.state.changed; // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      var frame = this.props.inject(this.props, function (injectProps) {
        // The inject frame has rendered, now let's update animations...
        _this2.injectProps = injectProps;

        _this2.setState({
          dry: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update animations, this turns from/to props into AnimatedValues
    // An update can occur on injected props, or when own-props have changed.


    if (this.injectProps) {
      this.updateAnimations(this.injectProps);
      this.injectProps = undefined; // didInject is needed, because there will be a 3rd stage, where the original values
      // .. will be restored after the animation is finished. When someone animates towards
      // .. "auto", the end-result should be "auto", not "1999px", which would block nested
      // .. height/width changes.

      this.didInject = true;
    } else if (propsChanged) this.updateAnimations(this.props); // Render out raw values or AnimatedValues depending on "native"


    var values = this.getAnimatedValues();
    return values && Object.keys(values).length ? renderChildren(this.props, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, values, this.afterInject)) : null;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto" injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) {
      if (this.props.delay) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(this.start, this.props.delay);
      } else this.start();
    }

    this.didUpdate = false;
  };

  _proto.updateAnimations = function updateAnimations(_ref3) {
    var _this3 = this;

    var from = _ref3.from,
        to = _ref3.to,
        attach = _ref3.attach,
        reset = _ref3.reset,
        immediate = _ref3.immediate,
        onFrame = _ref3.onFrame,
        native = _ref3.native;
    // This function will turn own-props into AnimatedValues, it tries to re-use
    // .. exsting animations as best as it can by detecting the changes made
    // Attachment handling, trailed springs can "attach" themselves to a previous spring
    var target = attach && attach(this);
    var animationsChanged = false;
    var allProps = Object.entries(Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, to));
    this.animations = allProps.reduce(function (acc, _ref4, i) {
      var _extends2, _extends3;

      var name = _ref4[0],
          value = _ref4[1];
      var entry = reset === false && acc[name] || {
        stopped: true
      };
      var isNumber = typeof value === 'number';
      var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      var isArray = !isNumber && !isString && Array.isArray(value);
      var fromValue = from[name] !== undefined ? from[name] : value;
      var fromAnimated = fromValue instanceof AnimatedValue;
      var toValue = isNumber || isArray ? value : 1;

      if (target) {
        // Attach value to target animation
        var attachedAnimation = target.animations[name];
        if (attachedAnimation) toValue = attachedAnimation.animation;
      }

      var old = entry.animation;
      var animation, interpolation$$1;

      if (fromAnimated) {
        // Use provided animated value
        animation = interpolation$$1 = fromValue;
      } else if (isNumber || isString) {
        // Create animated value
        animation = interpolation$$1 = entry.animation || new AnimatedValue(fromValue);
      } else if (isArray) {
        // Create animated array
        animation = interpolation$$1 = entry.animation || new AnimatedArray(fromValue);
      } else {
        // Deal with interpolations
        var previous = entry.interpolation && entry.interpolation._interpolation(entry.animation._value);

        if (entry.animation) {
          animation = entry.animation;
          animation.setValue(0);
        } else animation = new AnimatedValue(0);

        var _config = {
          range: [0, 1],
          output: [previous !== undefined ? previous : fromValue, value]
        };
        if (entry.interpolation) interpolation$$1 = entry.interpolation.__update(_config);else interpolation$$1 = animation.interpolate(_config);
      }

      if (old !== animation) animationsChanged = true; // Set immediate values

      if (callProp(immediate, name)) animation.setValue(toValue); // Save interpolators

      _this3.interpolators = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.interpolators, (_extends2 = {}, _extends2[name] = interpolation$$1, _extends2));
      return Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, (_extends3 = {}, _extends3[name] = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
        name: name,
        animation: animation,
        interpolation: interpolation$$1,
        toValue: toValue,
        stopped: false
      }), _extends3));
    }, this.animations); // Update animated props (which from now on will take care of the animation)

    if (animationsChanged) {
      var oldAnimatedProps = this.animatedProps;
      this.animatedProps = new AnimatedProps(this.interpolators, function () {
        // This gets called on every animation frame ...
        if (onFrame) onFrame(_this3.animatedProps.__getValue());
        if (!native) _this3.setState({
          dry: true
        });
      });
      oldAnimatedProps && oldAnimatedProps.__detach();
    } // Flag an update that occured, componentDidUpdate will start the animation later on


    this.didUpdate = true;
    this.afterInject = undefined;
    this.didInject = false;
  };

  _proto.flush = function flush() {
    getValues(this.animations).forEach(function (_ref5) {
      var animation = _ref5.animation;
      return animation._update && animation._update();
    });
  };

  _proto.getValues = function getValues$$1() {
    return this.animatedProps ? this.animatedProps.__getValue() : {};
  };

  _proto.getAnimatedValues = function getAnimatedValues() {
    return this.props.native ? this.interpolators : this.getValues();
  };

  return Spring;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  impl: SpringAnimation,
  inject: bugfixes
};

var empty = function empty() {
  return null;
};

var ref = function ref(object, key, defaultValue) {
  return typeof object === 'function' ? object(key) : object || defaultValue;
};

var get = function get(props) {
  var keys = props.keys,
      children = props.children,
      render = props.render,
      items = props.items,
      rest = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["keys", "children", "render", "items"]);

  children = render || children || empty;
  keys = typeof keys === 'function' ? items.map(keys) : keys;

  if (!Array.isArray(children)) {
    children = [children];
    keys = keys !== void 0 ? [keys] : children.map(function (c) {
      return c.toString();
    });
  } // Make sure numeric keys are interpreted as Strings (5 !== "5")


  keys = keys.map(function (k) {
    return String(k);
  });
  return Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    keys: keys,
    children: children,
    items: items
  }, rest);
};

var guid = 0;

var Transition =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$PureComponent);

  function Transition(prevProps) {
    var _this;

    _this = _React$PureComponent.call(this, prevProps) || this;
    _this.springs = [];
    _this.state = {
      transitions: [],
      current: {},
      deleted: [],
      prevProps: prevProps
    };
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref) {
    var prevProps = _ref.prevProps,
        state = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["prevProps"]);

    var _get = get(props),
        keys = _get.keys,
        children = _get.children,
        items = _get.items,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update;

    var _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    var current = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

    var deleted = state.deleted.concat(); // Compare next keys with current keys

    var currentKeys = Object.keys(current);
    var currentSet = new Set(currentKeys);
    var nextSet = new Set(keys);
    var added = keys.filter(function (item) {
      return !currentSet.has(item);
    });
    var removed = currentKeys.filter(function (item) {
      return !nextSet.has(item);
    });
    var updated = keys.filter(function (item) {
      return currentSet.has(item);
    });
    added.forEach(function (key) {
      var keyIndex = keys.indexOf(key);
      var item = items ? items[keyIndex] : key;
      current[key] = {
        children: children[keyIndex],
        key: guid++,
        item: item,
        to: ref(enter, item),
        from: ref(from, item)
      };
    });
    removed.forEach(function (key) {
      var keyIndex = _keys.indexOf(key);

      deleted.push(Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        destroyed: true,
        lastIndex: keyIndex
      }, current[key], {
        to: ref(leave, _items ? _items[keyIndex] : key)
      }));
      delete current[key];
    });
    updated.forEach(function (key) {
      var keyIndex = keys.indexOf(key);
      var item = items ? items[keyIndex] : key;
      current[key] = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
        children: children[keyIndex],
        to: ref(update, item, current[key].to)
      });
    });
    var transitions = keys.map(function (key) {
      return current[key];
    });
    deleted.forEach(function (_ref2) {
      var i = _ref2.lastIndex,
          t = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["lastIndex"]);

      return transitions = transitions.slice(0, i).concat([t], transitions.slice(i));
    });
    return {
      transitions: transitions,
      current: current,
      deleted: deleted,
      prevProps: props
    };
  };

  var _proto = Transition.prototype;

  _proto.getValues = function getValues() {
    return undefined;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        render = _this$props.render,
        _this$props$from = _this$props.from,
        _this$props$enter = _this$props.enter,
        _this$props$leave = _this$props.leave,
        _this$props$native = _this$props.native,
        native = _this$props$native === void 0 ? false : _this$props$native,
        keys = _this$props.keys,
        items = _this$props.items,
        onFrame = _this$props.onFrame,
        onRest = _this$props.onRest,
        extra = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["render", "from", "enter", "leave", "native", "keys", "items", "onFrame", "onRest"]);

    var props = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      native: native
    }, extra);

    return this.state.transitions.map(function (transition, i) {
      var key = transition.key,
          item = transition.item,
          children = transition.children,
          from = transition.from,
          rest = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(transition, ["key", "item", "children", "from"]);

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Spring, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: function ref(r) {
          return r && (_this2.springs[key] = r.getValues());
        },
        key: key,
        onRest: rest.destroyed ? function () {
          return _this2.setState(function (_ref3) {
            var deleted = _ref3.deleted;
            return {
              deleted: deleted.filter(function (t) {
                return t.key !== key;
              })
            };
          }, function () {
            return delete _this2.springs[key];
          });
        } : onRest && function (values) {
          return onRest(item, values);
        },
        onFrame: onFrame && function (values) {
          return onFrame(item, values);
        }
      }, rest, props, {
        from: rest.destroyed ? _this2.springs[key] || from : from,
        render: render && children,
        children: render ? _this2.props.children : children
      }));
    });
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

var Trail =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Trail, _React$PureComponent);

  function Trail() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Trail.prototype;

  _proto.getValues = function getValues() {
    return this.instance && this.instance.getValues();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.instance && this.instance.flush();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.instance && this.instance.flush();
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        children = _this$props.children,
        render = _this$props.render,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$native = _this$props.native,
        native = _this$props$native === void 0 ? false : _this$props$native,
        keys = _this$props.keys,
        delay = _this$props.delay,
        onRest = _this$props.onRest,
        extra = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["children", "render", "from", "to", "native", "keys", "delay", "onRest"]);

    var animations = new Set();

    var hook = function hook(index, animation) {
      animations.add(animation);
      if (index === 0) return undefined;else return Array.from(animations)[index - 1];
    };

    var props = Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
      native: native,
      from: from,
      to: to
    });

    var target = render || children;
    return target.map(function (child, i) {
      var attachedHook = function attachedHook(animation) {
        return hook(i, animation);
      };

      var firstDelay = i === 0 && delay;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Spring, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: function ref(_ref) {
          return i === 0 && (_this.instance = _ref);
        },
        onRest: i === 0 ? onRest : null,
        key: keys[i]
      }, props, {
        delay: firstDelay || undefined,
        attach: attachedHook,
        render: render && child,
        children: render ? children : child
      }));
    });
  };

  return Trail;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

var DEFAULT = '__default';

var Keyframes =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Keyframes, _React$PureComponent);

  function Keyframes() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.guid = 0;
    _this.state = {
      props: {},
      oldProps: {},
      resolve: function resolve() {
        return null;
      }
    };

    _this.next = function (props) {
      _this.running = true;
      return new Promise(function (resolve) {
        _this.setState(function (state) {
          return {
            props: props,
            oldProps: Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.props),
            resolve: resolve
          };
        }, function () {
          return _this.running = false;
        });
      });
    };

    return _this;
  }

  var _proto = Keyframes.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({});
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    if (prevProps.state !== this.props.state || this.props.reset && !this.running) {
      (function () {
        var _this2$props = _this2.props,
            states = _this2$props.states,
            f = _this2$props.filter,
            state = _this2$props.state;

        if (states && state) {
          (function () {
            var localId = ++_this2.guid;
            var slots = states[state];

            if (slots) {
              if (Array.isArray(slots)) {
                var q = Promise.resolve();

                var _loop = function _loop() {
                  if (_isArray) {
                    if (_i >= _iterator.length) return "break";
                    _ref = _iterator[_i++];
                  } else {
                    _i = _iterator.next();
                    if (_i.done) return "break";
                    _ref = _i.value;
                  }

                  var s = _ref;
                  q = q.then(function () {
                    return localId === _this2.guid && _this2.next(f(s));
                  });
                };

                for (var _iterator = slots, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                  var _ref;

                  var _ret = _loop();

                  if (_ret === "break") break;
                }
              } else if (typeof slots === 'function') {
                slots(function (props) {
                  return localId === _this2.guid && _this2.next(f(props));
                }, _this2.props);
              } else {
                _this2.next(f(states[state]));
              }
            }
          })();
        }
      })();
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$state = this.state,
        props = _this$state.props,
        oldProps = _this$state.oldProps,
        resolve = _this$state.resolve;

    var _this$props = this.props,
        Component = _this$props.primitive,
        ownFrom = _this$props.from,
        _onRest = _this$props.onRest,
        rest = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["primitive", "from", "onRest"]);

    var current = this.instance && this.instance.getValues();
    var from = typeof props.from === 'function' ? props.from : Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldProps.from, current, props.from);
    return props ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: function ref(_ref2) {
        return _this3.instance = _ref2;
      }
    }, rest, props, {
      from: Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, ownFrom),
      onRest: function onRest(args) {
        resolve(args);
        if (_onRest) _onRest(args);
      }
    })) : null;
  };

  return Keyframes;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

Keyframes.defaultProps = {
  state: DEFAULT
};

Keyframes.create = function (primitive) {
  return function (states, filter) {
    var _states;

    if (filter === void 0) {
      filter = function filter(states) {
        return states;
      };
    }

    if (typeof states === 'function' || Array.isArray(states)) states = (_states = {}, _states[DEFAULT] = states, _states);
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Keyframes, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        primitive: primitive,
        states: states,
        filter: filter
      }, props));
    };
  };
};

var interpolateTo = function interpolateTo(props) {
  var forward = getForwardProps(props);
  var rest = Object.keys(props).reduce(function (acc, key) {
    var _extends2;

    return forward[key] ? acc : Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, (_extends2 = {}, _extends2[key] = props[key], _extends2));
  }, {});
  return Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
};

Keyframes.Spring = Keyframes.create(Spring);

Keyframes.Spring.to = function (states) {
  return Keyframes.Spring(states, interpolateTo);
};

Keyframes.Trail = Keyframes.create(Trail);

Keyframes.Trail.to = function (states) {
  return Keyframes.Trail(states, interpolateTo);
};

Keyframes.Transition = Keyframes.create(Transition);

var AnimatedDiv = createAnimatedComponent('div');

var _React$createContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(null),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

function getScrollType(horizontal) {
  return horizontal ? 'scrollLeft' : 'scrollTop';
}

var START_TRANSLATE_3D = 'translate3d(0px,0px,0px)';
var START_TRANSLATE = 'translate(0px,0px)';
var ParallaxLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ParallaxLayer, _React$PureComponent);

  function ParallaxLayer() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ParallaxLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var parent = this.parent;

    if (parent) {
      parent.layers = parent.layers.concat(this);
      parent.update();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this = this;

    var parent = this.parent;

    if (parent) {
      parent.layers = parent.layers.filter(function (layer) {
        return layer !== _this;
      });
      parent.update();
    }
  };

  _proto.setPosition = function setPosition(height, scrollTop, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    var _this$parent$props = this.parent.props,
        config$$1 = _this$parent$props.config,
        impl = _this$parent$props.impl;
    var targetScroll = Math.floor(this.props.offset) * height;
    var offset = height * this.props.offset + targetScroll * this.props.speed;
    var to = parseFloat(-(scrollTop * this.props.speed) + offset);
    if (!immediate) controller(this.animatedTranslate, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      to: to
    }, config$$1), impl).start();else this.animatedTranslate.setValue(to);
  };

  _proto.setHeight = function setHeight(height, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    var _this$parent$props2 = this.parent.props,
        config$$1 = _this$parent$props2.config,
        impl = _this$parent$props2.impl;
    var to = parseFloat(height * this.props.factor);
    if (!immediate) controller(this.animatedSpace, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      to: to
    }, config$$1), impl).start();else this.animatedSpace.setValue(to);
  };

  _proto.initialize = function initialize() {
    var props = this.props;
    var parent = this.parent;
    var targetScroll = Math.floor(props.offset) * parent.space;
    var offset = parent.space * props.offset + targetScroll * props.speed;
    var to = parseFloat(-(parent.current * props.speed) + offset);
    this.animatedTranslate = new AnimatedValue(to);
    this.animatedSpace = new AnimatedValue(parent.space * props.factor);
  };

  _proto.renderLayer = function renderLayer() {
    var _extends2;

    var _this$props = this.props,
        style = _this$props.style,
        children = _this$props.children,
        offset = _this$props.offset,
        speed = _this$props.speed,
        factor = _this$props.factor,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_builtin_es6_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["style", "children", "offset", "speed", "factor", "className"]);

    var horizontal = this.parent.props.horizontal;
    var translate3d = this.animatedTranslate.interpolate({
      range: [0, 1],
      output: horizontal ? [START_TRANSLATE_3D, 'translate3d(1px,0,0)'] : [START_TRANSLATE_3D, 'translate3d(0,1px,0)']
    });
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AnimatedDiv, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: className,
      style: Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends2 = {
        position: 'absolute',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform'
      }, _extends2[horizontal ? 'height' : 'width'] = '100%', _extends2[horizontal ? 'width' : 'height'] = this.animatedSpace, _extends2.WebkitTransform = translate3d, _extends2.MsTransform = translate3d, _extends2.transform = translate3d, _extends2), style)
    }), children);
  };

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Consumer, null, function (parent) {
      if (parent && !_this2.parent) {
        _this2.parent = parent;

        _this2.initialize();
      }

      return _this2.renderLayer();
    });
  };

  return ParallaxLayer;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);
ParallaxLayer.defaultProps = {
  factor: 1,
  offset: 0,
  speed: 0
};

var Parallax =
/*#__PURE__*/
function (_React$PureComponent2) {
  Object(_babel_runtime_helpers_builtin_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Parallax, _React$PureComponent2);

  function Parallax() {
    var _this3;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = _React$PureComponent2.call.apply(_React$PureComponent2, [this].concat(args)) || this;
    _this3.state = {
      ready: false
    };
    _this3.layers = [];
    _this3.space = 0;
    _this3.current = 0;
    _this3.offset = 0;
    _this3.busy = false;

    _this3.moveItems = function () {
      _this3.layers.forEach(function (layer) {
        return layer.setPosition(_this3.space, _this3.current);
      });

      _this3.busy = false;
    };

    _this3.scrollerRaf = function () {
      return requestAnimationFrame(_this3.moveItems);
    };

    _this3.onScroll = function (event) {
      var horizontal = _this3.props.horizontal;

      if (!_this3.busy) {
        _this3.busy = true;

        _this3.scrollerRaf();

        _this3.current = event.target[getScrollType(horizontal)];
      }
    };

    _this3.update = function () {
      var _this3$props = _this3.props,
          scrolling = _this3$props.scrolling,
          horizontal = _this3$props.horizontal;
      var scrollType = getScrollType(horizontal);
      if (!_this3.container) return;
      _this3.space = _this3.container[horizontal ? 'clientWidth' : 'clientHeight'];
      if (scrolling) _this3.current = _this3.container[scrollType];else _this3.container[scrollType] = _this3.current = _this3.offset * _this3.space;
      if (_this3.content) _this3.content.style[horizontal ? 'width' : 'height'] = _this3.space * _this3.props.pages + "px";

      _this3.layers.forEach(function (layer) {
        layer.setHeight(_this3.space, true);
        layer.setPosition(_this3.space, _this3.current, true);
      });
    };

    _this3.updateRaf = function () {
      requestAnimationFrame(_this3.update); // Some browsers don't fire on maximize

      setTimeout(_this3.update, 150);
    };

    _this3.scrollStop = function (event) {
      return _this3.animatedScroll && _this3.animatedScroll.stopAnimation();
    };

    return _this3;
  }

  var _proto2 = Parallax.prototype;

  _proto2.scrollTo = function scrollTo(offset) {
    var _this$props2 = this.props,
        horizontal = _this$props2.horizontal,
        config$$1 = _this$props2.config,
        impl = _this$props2.impl;
    var scrollType = getScrollType(horizontal);
    this.scrollStop();
    this.offset = offset;
    var target = this.container;
    this.animatedScroll = new AnimatedValue(target[scrollType]);
    this.animatedScroll.addListener(function (_ref) {
      var value = _ref.value;
      return target[scrollType] = value;
    });
    controller(this.animatedScroll, Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      to: offset * this.space
    }, config$$1), impl).start();
  };

  _proto2.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.updateRaf, false);
    this.update();
    this.setState({
      ready: true
    });
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.updateRaf, false);
  };

  _proto2.componentDidUpdate = function componentDidUpdate() {
    this.update();
  };

  _proto2.render = function render() {
    var _this4 = this,
        _extends3;

    var _this$props3 = this.props,
        style = _this$props3.style,
        innerStyle = _this$props3.innerStyle,
        pages = _this$props3.pages,
        className = _this$props3.className,
        scrolling = _this$props3.scrolling,
        children = _this$props3.children,
        horizontal = _this$props3.horizontal;
    var overflow = scrolling ? 'scroll' : 'hidden';
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      ref: function ref(node) {
        return _this4.container = node;
      },
      onScroll: this.onScroll,
      onWheel: scrolling ? this.scrollStop : null,
      onTouchStart: scrolling ? this.scrollStop : null,
      style: Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: overflow,
        overflowY: horizontal ? 'hidden' : overflow,
        overflowX: horizontal ? overflow : 'hidden',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: START_TRANSLATE,
        MsTransform: START_TRANSLATE,
        transform: START_TRANSLATE_3D
      }, style),
      className: className
    }, this.state.ready && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      ref: function ref(node) {
        return _this4.content = node;
      },
      style: Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends3 = {
        position: 'absolute'
      }, _extends3[horizontal ? 'height' : 'width'] = '100%', _extends3.WebkitTransform = START_TRANSLATE, _extends3.MsTransform = START_TRANSLATE, _extends3.transform = START_TRANSLATE_3D, _extends3.overflow = 'hidden', _extends3[horizontal ? 'width' : 'height'] = this.space * pages, _extends3), innerStyle)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Provider, {
      value: this
    }, children)));
  };

  return Parallax;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

Parallax.Layer = ParallaxLayer;
Parallax.defaultProps = {
  config: config.slow,
  scrolling: true,
  horizontal: false,
  impl: SpringAnimation
};

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var elements = domElements.reduce(function (acc, element) {
  var _extends2;

  return Object(_babel_runtime_helpers_builtin_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, (_extends2 = {}, _extends2[element] = createAnimatedComponent(element), _extends2));
}, {});
Object.assign(createAnimatedComponent, elements);

var createAnimatedComponent$1 = function createAnimatedComponent$$1(comp) {
  return console.warn('createAnimatedComponent is deprecated, use animated(comp) instead') || createAnimatedComponent(comp);
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


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
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/Hello.tsx":
/*!**********************************!*\
  !*** ./src/components/Hello.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_spring_1 = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/dist/web.js");
__webpack_require__(/*! ./styles.css */ "./src/components/styles.css");
var Page = function (_a) {
    var offset = _a.offset, gradient = _a.gradient, onClick = _a.onClick;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_spring_1.ParallaxLayer, { offset: offset, speed: 0.2 },
            React.createElement("div", { className: "slopeBegin" })),
        React.createElement(react_spring_1.ParallaxLayer, { offset: offset, speed: 0.6 },
            React.createElement("div", { className: "slopeEnd " + gradient })),
        React.createElement(react_spring_1.ParallaxLayer, { offset: offset, speed: 0.3 },
            React.createElement("span", null,
                "0",
                offset + 1))));
};
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { background: '#dfdfdf' } },
            React.createElement(react_spring_1.Parallax, { ref: function (node) { return (_this.parallax = node); }, pages: 3, horizontal: true, scrolling: false },
                React.createElement(Page, { offset: 0, gradient: "pink" }),
                React.createElement(Page, { offset: 1, gradient: "teal" }),
                React.createElement(Page, { offset: 2, gradient: "tomato" }))));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;


/***/ }),

/***/ "./src/components/styles.css":
/*!***********************************!*\
  !*** ./src/components/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./styles.css */ "./node_modules/css-loader/index.js!./src/components/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Hello_1 = __webpack_require__(/*! ./components/Hello */ "./src/components/Hello.tsx");
ReactDOM.render(React.createElement(Hello_1.Hello, __assign({}, { compiler: "TypeScript", framework: "React" })), document.getElementById("example"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map