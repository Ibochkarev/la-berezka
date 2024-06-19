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
/******/ 		"page_homepage": 0
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/page_homepage.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/sections/_main/s_main_intro_slider/s_main_intro_slider.js":
/*!******************************************************************************!*\
  !*** ./src/blocks/sections/_main/s_main_intro_slider/s_main_intro_slider.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__[\"Autoplay\"]]);\nwindow.addEventListener('load', function () {\n  var introSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"](\".s-main-intro-slider\", {\n    loop: true,\n    slidesPerView: 1,\n    resistance: true,\n    resistanceRatio: 1,\n    grabCursor: true,\n    autoplay: {\n      delay: 5000\n    }\n  });\n}, false);\n\n//# sourceURL=webpack:///./src/blocks/sections/_main/s_main_intro_slider/s_main_intro_slider.js?");

/***/ }),

/***/ "./src/blocks/sections/_main/s_meets_education/s_meets_education.js":
/*!**************************************************************************!*\
  !*** ./src/blocks/sections/_main/s_meets_education/s_meets_education.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"]]);\nwindow.addEventListener('load', function () {\n  var meetsEducationSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"](\".s-meets-education__slider\", {\n    slidesPerView: 1,\n    navigation: {\n      nextEl: '.s-meets-education__button-next',\n      prevEl: '.s-meets-education__button-prev'\n    },\n    resistance: true,\n    resistanceRatio: 1,\n    spaceBetween: 16,\n    autoHeight: false,\n    grabCursor: true,\n    breakpoints: {\n      600: {\n        slidesPerView: 2,\n        spaceBetween: 0\n      },\n      768: {\n        slidesPerView: 3,\n        spaceBetween: 0\n      }\n    }\n  });\n}, false);\n\n//# sourceURL=webpack:///./src/blocks/sections/_main/s_meets_education/s_meets_education.js?");

/***/ }),

/***/ "./src/blocks/sections/_team/s_our_team/s_our_team.js":
/*!************************************************************!*\
  !*** ./src/blocks/sections/_team/s_our_team/s_our_team.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"], swiper__WEBPACK_IMPORTED_MODULE_0__[\"Thumbs\"]]);\nif (document.querySelector('.s-our-team__slider')) {\n  window.addEventListener('load', function () {\n    var ourTeamItemsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"](\".s-our-team__slider\", {\n      slidesPerView: 1,\n      resistance: true,\n      resistanceRatio: 1,\n      spaceBetween: 0,\n      autoHeight: true\n    });\n    var ourTeamItemsSliderBottom = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"](\".s-our-team__bottom\", {\n      slidesPerView: 1,\n      resistance: true,\n      resistanceRatio: 1,\n      spaceBetween: 0,\n      navigation: {\n        nextEl: '.s-our-team__button-next',\n        prevEl: '.s-our-team__button-prev'\n      },\n      breakpoints: {\n        640: {\n          slidesPerView: 2,\n          spaceBetween: 0\n        }\n      },\n      thumbs: {\n        swiper: ourTeamItemsSlider\n      }\n    });\n    ourTeamItemsSlider.controller.control = ourTeamItemsSliderBottom;\n    ourTeamItemsSliderBottom.controller.control = ourTeamItemsSlider;\n  }, false);\n}\n\n//# sourceURL=webpack:///./src/blocks/sections/_team/s_our_team/s_our_team.js?");

/***/ }),

/***/ "./src/js/page_homepage.js":
/*!*********************************!*\
  !*** ./src/js/page_homepage.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_main_s_main_intro_slider_s_main_intro_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %sections%/_main/s_main_intro_slider/s_main_intro_slider */ \"./src/blocks/sections/_main/s_main_intro_slider/s_main_intro_slider.js\");\n/* harmony import */ var _sections_main_s_meets_education_s_meets_education__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %sections%/_main/s_meets_education/s_meets_education */ \"./src/blocks/sections/_main/s_meets_education/s_meets_education.js\");\n/* harmony import */ var _sections_team_s_our_team_s_our_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %sections%/_team/s_our_team/s_our_team */ \"./src/blocks/sections/_team/s_our_team/s_our_team.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/js/page_homepage.js?");

/***/ })

/******/ });