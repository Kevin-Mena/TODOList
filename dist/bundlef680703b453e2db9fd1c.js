/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@300;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL STYLES */\r\n\r\n:root {\r\n  --light: #f5f5f5;\r\n  --dark: #313154;\r\n  --grey: #e8e8e8;\r\n  --yellow: rgba(234, 201, 101);\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--grey);\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.content {\r\n  background-color: var(--light);\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 4rem;\r\n  height: auto;\r\n  border-radius: 0.5rem;\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 4rem;\r\n  align-items: center;\r\n}\r\n\r\n.todo-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex: 2;\r\n}\r\n\r\ni {\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  color: grey;\r\n}\r\n\r\ninput[type=\"text\"]:focus-visible {\r\n  width: 100%;\r\n  height: 2rem;\r\n  border: none;\r\n  background: none;\r\n  flex: 1 1 0%;\r\n  outline: none;\r\n}\r\n\r\n::placeholder {\r\n  color: grey;\r\n  font-size: 1.275rem;\r\n  font-style: italic;\r\n}\r\n\r\n.todo-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 4rem;\r\n}\r\n\r\n.todo-content,\r\n.form,\r\n.todo-header {\r\n  border-bottom: 1px solid rgb(211, 200, 200);\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n.content-list {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.show-container {\r\n  visibility: visible;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  cursor: initial;\r\n}\r\n\r\n.done {\r\n  text-decoration: line-through;\r\n  color: grey;\r\n}\r\n\r\n#new-todo {\r\n  align-items: center;\r\n  gap: 6px;\r\n  height: 2rem;\r\n  border-bottom: 2px solid var(--grey);\r\n  box-shadow: var(--grey);\r\n  margin-bottom: 1rem;\r\n  padding: 5px 10px;\r\n}\r\n\r\n#new-todo input {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.remove {\r\n  height: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--grey);\r\n  font-size: 1.22rem;\r\n  color: grey;\r\n  border: none;\r\n  padding: 1rem;\r\n  border-bottom-left-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  height: 2rem;\r\n  border-bottom: 2px solid var(--grey);\r\n  box-shadow: var(--grey);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.edit {\r\n  background-color: black;\r\n  border-radius: 4px;\r\n  padding: 4px;\r\n  font-size: 1rem;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  margin-left: 2rem;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.delete {\r\n  background-color: rgb(219, 29, 29);\r\n  border-radius: 4px;\r\n  padding: 3px;\r\n  font-size: 1rem;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,kBAAkB;;AAElB;EACE,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;EAC9B,UAAU;EACV,cAAc;EACd,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;;;EAGE,2CAA2C;EAC3C,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,oCAAoC;EACpC,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,oCAAoC;EACpC,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@300;500&display=swap');\r\n\r\n/* GLOBAL STYLES */\r\n\r\n:root {\r\n  --light: #f5f5f5;\r\n  --dark: #313154;\r\n  --grey: #e8e8e8;\r\n  --yellow: rgba(234, 201, 101);\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--grey);\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.content {\r\n  background-color: var(--light);\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 4rem;\r\n  height: auto;\r\n  border-radius: 0.5rem;\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 4rem;\r\n  align-items: center;\r\n}\r\n\r\n.todo-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex: 2;\r\n}\r\n\r\ni {\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  color: grey;\r\n}\r\n\r\ninput[type=\"text\"]:focus-visible {\r\n  width: 100%;\r\n  height: 2rem;\r\n  border: none;\r\n  background: none;\r\n  flex: 1 1 0%;\r\n  outline: none;\r\n}\r\n\r\n::placeholder {\r\n  color: grey;\r\n  font-size: 1.275rem;\r\n  font-style: italic;\r\n}\r\n\r\n.todo-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 4rem;\r\n}\r\n\r\n.todo-content,\r\n.form,\r\n.todo-header {\r\n  border-bottom: 1px solid rgb(211, 200, 200);\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n.content-list {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.show-container {\r\n  visibility: visible;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  cursor: initial;\r\n}\r\n\r\n.done {\r\n  text-decoration: line-through;\r\n  color: grey;\r\n}\r\n\r\n#new-todo {\r\n  align-items: center;\r\n  gap: 6px;\r\n  height: 2rem;\r\n  border-bottom: 2px solid var(--grey);\r\n  box-shadow: var(--grey);\r\n  margin-bottom: 1rem;\r\n  padding: 5px 10px;\r\n}\r\n\r\n#new-todo input {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.remove {\r\n  height: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--grey);\r\n  font-size: 1.22rem;\r\n  color: grey;\r\n  border: none;\r\n  padding: 1rem;\r\n  border-bottom-left-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  height: 2rem;\r\n  border-bottom: 2px solid var(--grey);\r\n  box-shadow: var(--grey);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.edit {\r\n  background-color: black;\r\n  border-radius: 4px;\r\n  padding: 4px;\r\n  font-size: 1rem;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  margin-left: 2rem;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.delete {\r\n  background-color: rgb(219, 29, 29);\r\n  border-radius: 4px;\r\n  padding: 3px;\r\n  font-size: 1rem;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

// SELECT REQUIRED ELEMENTS
var todoInput = document.querySelector('#addlist');
var todoForm = document.querySelector('.todo-form');
var todoWrapper = document.querySelector('.wrapper');
var deleteCompleted = document.querySelector('.remove');
var addLocalStorage = function addLocalStorage(todo) {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

// ADD TODO
var addTodo = function addTodo(e) {
  e.preventDefault();
  var todo = todoInput.value;
  if (todo) {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    var id = todos.length + 1;
    var completed = false;
    addLocalStorage(id, todo, completed);
    var todoItem = document.createElement('div');
    todoItem.className = "todo-item".concat(id);
    todoItem.setAttribute('id', 'new-todo');
    todoItem.innerHTML = "<input type=\"checkbox\" class=\"todo-check\">\n          <input type=\"text\" class=\"todo-text\" value=\"".concat(todo, "\" disabled>\n          <button class=\"edit\">Edit</button>\n          <button class=\"delete\">Delete</button>");
    todoWrapper.appendChild(todoItem);
    todoInput.value = '';
  }
};
// REMOVE FROM LOCAL STORAGE
var removeLocalStorage = function removeLocalStorage(id) {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};
// DELETE TODO
var deleteTodo = function deleteTodo(e) {
  if (e.target.classList.contains('delete')) {
    removeLocalStorage(e.target.parentElement.classList[1]);
    e.target.parentElement.remove();
  }
};

// CHECK TODO
var checkTodo = function checkTodo(e) {
  if (e.target.className === 'todo-check') {
    var id = e.target.parentElement.classList[1];
    var isChecked = e.target.checked;
    if (isChecked) {
      e.target.nextElementSibling.style.textDecoration = 'line-through';
    } else {
      e.target.nextElementSibling.style.textDecoration = 'none';
    }
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.map(function (todo) {
      if (todo.id === id) {
        todo.completed = isChecked;
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

// GET TODO
var getTodo = function getTodo() {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(function (todo) {
    var todoItem = document.createElement('div');
    todoItem.className = "todo-item".concat(todo.id);
    todoItem.innerHTML = "<input type=\"checkbox\" class=\"todo-check\" ".concat(todo.completed ? 'checked' : '', ">\n          <input type=\"text\" class=\"todo-text ").concat(todo.completed ? 'done' : '', "\" value=\"").concat(todo, "\" disabled/>\n          <button class=\"edit\">Edit</button>\n          <button class=\"delete\">Delete</button>");
    todoWrapper.appendChild(todoItem);
    todoInput.value = '';
  });
};
// REMOVE DONE TODOS
var removeDone = function removeDone(e) {
  if (e.target.classList.contains('remove')) {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(function (todo) {
      return todo.checked === true;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    todoWrapper.innerHTML = '';
    getTodo();
  }
};

// EDIT LOCAL STORAGE
var editLocalStorage = function editLocalStorage(id) {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.map(function (todo) {
    if (todo.id === id) {
      todo.text = todo;
    }
    return todo;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

// EDIT TODO
var editTodo = function editTodo(e) {
  if (e.target.className === 'edit') {
    var todoText = e.target.parentElement.querySelector('.todo-text');
    var id = e.target.parentElement.classList[1];
    if (todoText.disabled) {
      todoText.disabled = false;
      e.target.textContent = 'Save';
    } else {
      todoText.disabled = true;
      e.target.textContent = 'Edit';
      editLocalStorage(id, todoText.value);
    }
  }
};

// EVENT LISTENER FOR TODO
todoForm.addEventListener('submit', addTodo);
todoWrapper.addEventListener('click', deleteTodo);
todoWrapper.addEventListener('click', checkTodo);
todoWrapper.addEventListener('click', editTodo);
window.addEventListener('DOMContentloaded', getTodo);
deleteCompleted.addEventListener('click', removeDone);
})();

/******/ })()
;
//# sourceMappingURL=bundlef680703b453e2db9fd1c.js.map