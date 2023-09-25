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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/page_contacts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/sections/_contacts/s_contacts/s_contacts.js":
/*!****************************************************************!*\
  !*** ./src/blocks/sections/_contacts/s_contacts/s_contacts.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("ymaps.ready(function () {\n  var myMap = new ymaps.Map('map', {\n      center: [55.7629, 37.556002],\n      zoom: 17,\n      controls: ['smallMapDefaultSet']\n    }, {\n      searchControlProvider: 'yandex#search'\n    }),\n    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style=\"color: #FFFFFF; font-weight: medium;\">$[properties.iconContent]</div>'),\n    myPlacemarkWithContent = new ymaps.Placemark([55.7629, 37.556002], {\n      hintContent: 'La Berёzka'\n    }, {\n      iconLayout: 'default#imageWithContent',\n      iconImageHref: 'https://laberezka.com/assets/template/img/global/pin.svg',\n      iconImageSize: [50, 50],\n      iconImageOffset: [0, 0],\n      iconContentOffset: [15, 15],\n      iconContentLayout: MyIconContentLayout\n    });\n  myMap.geoObjects.add(myPlacemarkWithContent);\n});\n\n//# sourceURL=webpack:///./src/blocks/sections/_contacts/s_contacts/s_contacts.js?");

/***/ }),

/***/ "./src/js/page_contacts.js":
/*!*********************************!*\
  !*** ./src/js/page_contacts.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_contacts_s_contacts_s_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %sections%/_contacts/s_contacts/s_contacts */ \"./src/blocks/sections/_contacts/s_contacts/s_contacts.js\");\n/* harmony import */ var _sections_contacts_s_contacts_s_contacts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sections_contacts_s_contacts_s_contacts__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/js/page_contacts.js?");

/***/ })

/******/ });