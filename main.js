"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Oswald:wght@200..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,
#beginning-form,
.text-container {
    font-family: "Oswald", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(173, 196, 206);
    color: white;
}

.game-title {
    font-family: "Black Ops One", system-ui;
    font-size: 5rem;
    font-weight: 400;
    font-style: normal;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: red;
    color: white;
    margin: 1rem;
}

#beginning-form {
    gap: 40px;
}

#submit-button,
button {
    border: 1px solid black;
    padding: 0.5rem;
    background-color: white;
    font-family: "Black Ops One", system-ui;
    font-size: 1.25rem;
}

/* styling for the text above the boards */

.text-container {
    gap: 20px;
    margin-bottom: 20px;
}

.text-container > * {
    margin: 0;
}

.note-one,
.note-two {
    display: none;
}

.orientation-explanation {
    font-size: 1.25rem;
}

/* styling for both gameboards */

.boards {
    display: flex;
    gap: 200px;
    justify-content: center;
}

.gameboard-container,
.second-gameboard-container {
    display: grid;
    grid-template-columns: repeat(11, 40px);
    grid-template-rows: repeat(11, 40px);
}

/* styling for the gameboard boxes */

.gameboard-item {
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black
}

.gameboard-box {
    background-color: rgb(127, 205, 255);
}

.ship {
    border: solid 3px blue;
    background-color: rgb(173, 196, 206);
}

.hit {
    background-color: red;
    color: white;
    font-size: 1.5rem;
}

.miss {
    background-color: yellow;
    color: black;
    font-size: 1.5rem;
}

@media (max-width: 1024px) {
    .boards {
        gap: 100px;
    }

    .gameboard-container,
    .second-gameboard-container {
        grid-template-columns: repeat(11, 32px);
        grid-template-rows: repeat(11, 32px);
    }
}

@media (max-width: 768px) {
    .boards {
        flex-direction: column;
    }
}

@media (max-width: 430px) {
    .game-title {
        font-size: 3.5em;
    }
}

@media (max-width: 380px) {
    .game-title {
        font-size: 3em;
    }

    .gameboard-container,
    .second-gameboard-container {
        grid-template-columns: repeat(11, 24px);
        grid-template-rows: repeat(11, 24px);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,uCAAuC;IACvC,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,8BAA8B;IAC9B,8BAA8B;IAC9B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;;IAEI,uBAAuB;IACvB,eAAe;IACf,uBAAuB;IACvB,uCAAuC;IACvC,kBAAkB;AACtB;;AAEA,0CAA0C;;AAE1C;IACI,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,gCAAgC;;AAEhC;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA,oCAAoC;;AAEpC;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB;AACJ;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;;QAEI,uCAAuC;QACvC,oCAAoC;IACxC;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;;QAEI,uCAAuC;QACvC,oCAAoC;IACxC;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Oswald:wght@200..700&display=swap');\n\nbody,\n#beginning-form,\n.text-container {\n    font-family: \"Oswald\", sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(173, 196, 206);\n    color: white;\n}\n\n.game-title {\n    font-family: \"Black Ops One\", system-ui;\n    font-size: 5rem;\n    font-weight: 400;\n    font-style: normal;\n    -webkit-text-stroke-width: 2px;\n    -webkit-text-stroke-color: red;\n    color: white;\n    margin: 1rem;\n}\n\n#beginning-form {\n    gap: 40px;\n}\n\n#submit-button,\nbutton {\n    border: 1px solid black;\n    padding: 0.5rem;\n    background-color: white;\n    font-family: \"Black Ops One\", system-ui;\n    font-size: 1.25rem;\n}\n\n/* styling for the text above the boards */\n\n.text-container {\n    gap: 20px;\n    margin-bottom: 20px;\n}\n\n.text-container > * {\n    margin: 0;\n}\n\n.note-one,\n.note-two {\n    display: none;\n}\n\n.orientation-explanation {\n    font-size: 1.25rem;\n}\n\n/* styling for both gameboards */\n\n.boards {\n    display: flex;\n    gap: 200px;\n    justify-content: center;\n}\n\n.gameboard-container,\n.second-gameboard-container {\n    display: grid;\n    grid-template-columns: repeat(11, 40px);\n    grid-template-rows: repeat(11, 40px);\n}\n\n/* styling for the gameboard boxes */\n\n.gameboard-item {\n    border: solid 1px black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    color: black\n}\n\n.gameboard-box {\n    background-color: rgb(127, 205, 255);\n}\n\n.ship {\n    border: solid 3px blue;\n    background-color: rgb(173, 196, 206);\n}\n\n.hit {\n    background-color: red;\n    color: white;\n    font-size: 1.5rem;\n}\n\n.miss {\n    background-color: yellow;\n    color: black;\n    font-size: 1.5rem;\n}\n\n@media (max-width: 1024px) {\n    .boards {\n        gap: 100px;\n    }\n\n    .gameboard-container,\n    .second-gameboard-container {\n        grid-template-columns: repeat(11, 32px);\n        grid-template-rows: repeat(11, 32px);\n    }\n}\n\n@media (max-width: 768px) {\n    .boards {\n        flex-direction: column;\n    }\n}\n\n@media (max-width: 430px) {\n    .game-title {\n        font-size: 3.5em;\n    }\n}\n\n@media (max-width: 380px) {\n    .game-title {\n        font-size: 3em;\n    }\n\n    .gameboard-container,\n    .second-gameboard-container {\n        grid-template-columns: repeat(11, 24px);\n        grid-template-rows: repeat(11, 24px);\n    }\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBoxListeners: () => (/* binding */ addBoxListeners),
/* harmony export */   addBoxListenersBot: () => (/* binding */ addBoxListenersBot),
/* harmony export */   createBoardOnDOM: () => (/* binding */ createBoardOnDOM),
/* harmony export */   displayPlayerBoard: () => (/* binding */ displayPlayerBoard),
/* harmony export */   placeShipListeners: () => (/* binding */ placeShipListeners),
/* harmony export */   placeShipOnDOM: () => (/* binding */ placeShipOnDOM)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


// this function creates a new player's board on the DOM
function createBoardOnDOM(gameboard) {
    // initialize currLetter to the ascii character before A
    let currLetter = '@';

    // create first row
    let emptyBox = document.createElement('div');
    emptyBox.classList.add('gameboard-item');
    gameboard.appendChild(emptyBox);

    for (let i = 1; i <= 10; ++i) {
        let newCol = document.createElement('div');
        newCol.textContent = i;
        newCol.classList.add('gameboard-item');
        gameboard.appendChild(newCol);
    }

    for (let i = 0; i < 100; ++i) {
        // for every 10th index on the board, create a new row with a letter symbolizing it
        if (i % 10 === 0) {
            currLetter = String.fromCharCode((currLetter.charCodeAt(0) + 1));
            let newRow = document.createElement('div');
            newRow.textContent = currLetter;
            newRow.classList.add('gameboard-item');
            gameboard.appendChild(newRow);
        }

        // create new box for each coordinate and give the correct coordinates to its dataset
        let newBox = document.createElement('div');
        newBox.classList.add('gameboard-item', 'gameboard-box');
        newBox.tabIndex = "0";
        newBox.dataset.coord = currLetter + String(i % 10 + 1);

        gameboard.appendChild(newBox);
    }
}

// this function displays the correct boards based on whos turn it is
// basically makes the opposing player's board invisible except for known hits and misses
function displayPlayerBoard(playerOneTurn, playerOne, playerTwo) {
    const playerOneBoard = document.querySelectorAll('.gameboard-container .gameboard-box');
    const playerTwoBoard = document.querySelectorAll('.second-gameboard-container .gameboard-box');
    const playerOneBoardArray = Array.from(playerOneBoard);
    const playerTwoBoardArray = Array.from(playerTwoBoard);

    const playerTurnText = document.querySelector('.player-turn');

    // call updateBoard for the correct player's boards
    if (playerOneTurn) {
        updateBoard(playerOne, playerOneBoardArray);
        updateBoardForOpp(playerTwo, playerTwoBoardArray);
        playerTurnText.textContent = 'It is Player 1\'s (left) turn';
    }
    else {
        updateBoard(playerTwo, playerTwoBoardArray);
        updateBoardForOpp(playerOne, playerOneBoardArray)
        playerTurnText.textContent = 'It is Player 2\'s (right) turn';
    }
}

// this function adds listeners to the boxes that allow the ships to be placed when clicked, and goes 
// on to call itself for each ship in order from largest to smallest, then starts up the game
function placeShipListeners(player, playerBoxesArray, ship, playerOneTurn, playerOne, playerTwo, human) {
    const currShip = document.querySelector('.current-ship');

    // define a function to handle the ship placement for each ship
    const handleShipPlacement = (e) => {
        const box = e.target;

        // only move on to the next ship placement if the current placement was valid
        if (placeShipOnDOM(ship, player, playerBoxesArray, box.dataset.coord)) {
            for (const box of playerBoxesArray) {
                box.removeEventListener('click', handleShipPlacement);
            }

            // call the function with the correct ship in order
            switch (ship) {
                case 'C':
                    currShip.textContent = 'Battleship (length 4)';
                    placeShipListeners(player, playerBoxesArray, 'B', playerOneTurn, playerOne, playerTwo, human);
                    break;
                case 'B':
                    currShip.textContent = 'Cruiser (length 3)';
                    placeShipListeners(player, playerBoxesArray, 'R', playerOneTurn, playerOne, playerTwo, human);
                    break;
                case 'R':
                    currShip.textContent = 'Submarine (length 3)';
                    placeShipListeners(player, playerBoxesArray, 'S', playerOneTurn, playerOne, playerTwo, human);
                    break;
                case 'S':
                    currShip.textContent = 'Destroyer (length 2)';
                    placeShipListeners(player, playerBoxesArray, 'D', playerOneTurn, playerOne, playerTwo, human);
                    break;
            }

            // once player one is finished placing ships, let player 2 place theirs
            if (ship === 'D' && human) {
                if (playerOneTurn) {
                    document.querySelector('.gameboard-container').style.display = 'none';
                    createBoardOnDOM(document.querySelector('.second-gameboard-container'));
                    document.querySelector('.second-gameboard-container').style.display = 'grid';

                    document.querySelector('.player-turn').textContent = 'Player 2: Place your';
                    currShip.textContent = 'Carrier (length 5)';

                    const playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                    const playerTwoBoxesArray = Array.from(playerTwoBoxes);

                    placeShipListeners(playerTwo, playerTwoBoxesArray, 'C', false, playerOne, playerTwo, human);
                }
                // once both players are finished placing ships, proceed with the game
                else {
                    document.querySelector('.orientation-explanation').remove();
                    document.querySelector('.checkbox-container').remove();
                    document.querySelector('.current-ship').remove();
                    document.querySelector('.note-one').remove();
                    document.querySelector('.note-two').remove();
                    document.querySelector('.gameboard-container').style.display = 'grid';

                    const playerOneBoxes = document.querySelectorAll('.gameboard-container .gameboard-box');
                    const playerOneBoxesArray = Array.from(playerOneBoxes);
                    const playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                    const playerTwoBoxesArray = Array.from(playerTwoBoxes);

                    // add the box listeners to the boards to make the game run
                    addBoxListeners(playerTwo, playerTwoBoxesArray, true, playerOne, playerTwo);
                    addBoxListeners(playerOne, playerOneBoxesArray, false, playerOne, playerTwo);

                    // make the opposing player's board invisible other than hits and misses
                    //displayPlayerBoard(true, playerOne, playerTwo);

                    // disable boxes of player 1 to start off with player 1's turn
                    for (const box of playerOneBoxesArray) {
                        box.style.pointerEvents = 'none';
                    }

                    turnScreen(false, playerOne, playerTwo);
                }
            }
            // once both players are finished placing ships, proceed with the game
            else if (ship === 'D' && !human) {
                document.querySelector('.orientation-explanation').remove();
                document.querySelector('.checkbox-container').remove();
                document.querySelector('.current-ship').remove();
                document.querySelector('.note-one').remove();
                document.querySelector('.note-two').remove();

                // create second board
                createBoardOnDOM(document.querySelector('.second-gameboard-container'));
                document.querySelector('.second-gameboard-container').style.display = 'grid';

                placeBotShips(playerTwo);

                let possibleBotAttacks = [];

                let currCoord;
                
                // fill the possibleBotAttacks array with all the coordinates
                for (let i = 65; i <= 74; ++i) {
                    for (let j = 1; j <= 10; ++j) {
                        currCoord = String.fromCharCode(i) + String(j);
                        possibleBotAttacks.push(currCoord);
                    }
                }

                const playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                const playerTwoBoxesArray = Array.from(playerTwoBoxes);

                let attackQueue = [];

                addBoxListenersBot(playerTwo, playerTwoBoxesArray, true, playerOne, playerTwo, possibleBotAttacks, attackQueue);

                // make the opposing player's board invisible other than hits and misses
                displayPlayerBoard(true, playerOne, playerTwo);

                // disable boxes of player 1 
                for (const box of playerBoxesArray) {
                    box.style.pointerEvents = 'none';
                }
            }
        }
    }
    
    // add event listener to each box
    for (const box of playerBoxesArray) {
        box.addEventListener('click', handleShipPlacement);
    }
}

// this function places the ship on the DOM given the type of ship, the player, and the player's board
function placeShipOnDOM(ship, player, gameboard, coord) {
    const checkbox = document.querySelector("#vertical");

    // if the ship placement is valid, place it and update the board and return true
    if (ship === 'C' && player.placeCarrier(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'B' && player.placeBattleship(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'R' && player.placeCruiser(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'S' && player.placeSubmarine(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'D' && player.placeDestroyer(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }

    // if the ship placement is invalid return false
    return false;
}

// this function has the bot randomly place ships on their board
function placeBotShips(player) {
    let possibleBotCoords = [];

    let currCoord;
    
    // fill the possibleBotAttacks array with all the coordinates
    for (let i = 65; i <= 74; ++i) {
        for (let j = 1; j <= 10; ++j) {
            currCoord = String.fromCharCode(i) + String(j);
            possibleBotCoords.push(currCoord);
        }
    }

    let randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)];

    // have the bot try placing its ships at random coordinates until it finds a valid placement for each ship
    while (!player.placeCarrier(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeBattleship(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeCruiser(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeSubmarine(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeDestroyer(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }
}


// this function adds event listeners to each of the boxes in the given array that run the game
function addBoxListeners(player, playerBoxesArray, playerOneTurn, playerOne, playerTwo) {
    for (const box of playerBoxesArray) {
        box.addEventListener("click", () => {
            // only run event listener if the box clicked on has not been attacked already
            if (!player.usedCoords.includes((0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.coordToIndex)(box.dataset.coord))) {
                // call the receiveAttack function for the given player and update the board for that player
                player.receiveAttack(box.dataset.coord);
                updateBoard(player, playerBoxesArray);

                let currBoard;

                // get the opponents board to enable and disable the correct boards after each turn
                if (playerOneTurn) {
                    currBoard = '.gameboard-container';
                }
                else {
                    currBoard = '.second-gameboard-container';
                }

                // disable opponent boxes to take turns
                for (const box of playerBoxesArray) {
                    box.style.pointerEvents = 'none';
                }

                let currBoxes = document.querySelectorAll(`${currBoard} .gameboard-box`);
                let currBoxesArray = Array.from(currBoxes);

                // enable opponent boxes after taking turn
                for (const box of currBoxesArray) {
                    box.style.pointerEvents = 'auto';
                }

                // handle victory if game is over
                if (player.allShipsSunk()) {
                    handleWin(playerOneTurn, currBoxesArray);
                }
                else {
                    turnScreen(playerOneTurn, playerOne, playerTwo);
                }
            }
        });
    }
}

// this function adds the box listeners to the boards for playing against the computer
function addBoxListenersBot(player, playerBoxesArray, playerOneTurn, playerOne, playerTwo, possibleBotAttacks, attackQueue) {
    for (const box of playerBoxesArray) {
        box.addEventListener("click", () => {
            // only run event listener if the box clicked on has not been attacked already
            if (!player.usedCoords.includes((0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.coordToIndex)(box.dataset.coord))) {
                // call the receiveAttack function for the given player and update the board for that player
                player.receiveAttack(box.dataset.coord);
                updateBoardForOpp(player, playerBoxesArray);

                let currBoxes = document.querySelectorAll('.gameboard-container .gameboard-box');
                let currBoxesArray = Array.from(currBoxes);

                // handle victory if game is over
                if (playerTwo.allShipsSunk()) {
                    handleWin(playerOneTurn, currBoxesArray);

                    // disable event listeners for the opposing board
                    const opposingBoard = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                    const opposingBoardArray = Array.from(opposingBoard);
                    for (const box of opposingBoardArray) {
                        box.style.pointerEvents = 'none';
                    }
                }
                else {
                    botAttack(playerOne, possibleBotAttacks, currBoxesArray, attackQueue);
                }
            }
        });

        // add event listener for enter key for a11y
        box.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                // only run event listener if the box clicked on has not been attacked already
                if (!player.usedCoords.includes((0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.coordToIndex)(box.dataset.coord))) {
                    // call the receiveAttack function for the given player and update the board for that player
                    player.receiveAttack(box.dataset.coord);
                    updateBoardForOpp(player, playerBoxesArray);

                    let currBoxes = document.querySelectorAll('.gameboard-container .gameboard-box');
                    let currBoxesArray = Array.from(currBoxes);

                    // handle victory if game is over
                    if (playerTwo.allShipsSunk()) {
                        handleWin(playerOneTurn, currBoxesArray);

                        // disable event listeners for the opposing board
                        const opposingBoard = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                        const opposingBoardArray = Array.from(opposingBoard);
                        for (const box of opposingBoardArray) {
                            box.style.pointerEvents = 'none';
                        }
                    }
                    else {
                        botAttack(playerOne, possibleBotAttacks, currBoxesArray, attackQueue);
                    }
                }
            }
        });
    }
}

// this function has the opposing bot player pick a random spot to attack from its array of possible attacks
function botAttack(playerOne, possibleBotAttacks, currBoxesArray, attackQueue) {
    let attackCoord;

    // get random attack if attackQueue is empty
    if (attackQueue.length === 0) {
        attackCoord = possibleBotAttacks[Math.floor(Math.random() * possibleBotAttacks.length)];
    }
    // if attackQueue is not empty, take coords from it until a valid one is found
    else {
        attackCoord = attackQueue.shift();

        while (!possibleBotAttacks.includes(attackCoord)) {
            // break if no valid attack is found
            if (attackQueue.length === 0) {
                break;
            }

            attackCoord = attackQueue.shift();
        }
    }

    // if after emptying the queue the attack coord still isn't valid, then choose a random coord from possibleBotAttacks
    if (attackCoord == undefined) {
        attackCoord = possibleBotAttacks[Math.floor(Math.random() * possibleBotAttacks.length)];
    }

    // if the current attack hits, then add adjacent attacks to the attackQueue if they are valid
    if (playerOne.receiveAttack(attackCoord)) {
        let attackCoordIndex = possibleBotAttacks.indexOf(attackCoord);

        if (attackCoordIndex % 10 > 0) {
            attackQueue.push(possibleBotAttacks[attackCoordIndex - 1]);
        }
        if (attackCoordIndex % 10 < 9) {
            attackQueue.push(possibleBotAttacks[attackCoordIndex + 1]);
        }
        if (attackCoordIndex > 9) {
            attackQueue.push(possibleBotAttacks[attackCoordIndex - 10]);
        }
        if (attackCoordIndex < 90) {
            attackQueue.push(possibleBotAttacks[attackCoordIndex + 10]);
        }
    }

    updateBoard(playerOne, currBoxesArray);

    // remove the current attack from the possible bot attacks array when it is used
    possibleBotAttacks.splice(possibleBotAttacks.indexOf(attackCoord), 1);

    // handle victory if game is over
    if (playerOne.allShipsSunk()) {
        handleWin(false, currBoxesArray);
        
        // disable event listeners for the opposing board
        const opposingBoard = document.querySelectorAll('.second-gameboard-container .gameboard-box');
        const opposingBoardArray = Array.from(opposingBoard);
        for (const box of opposingBoardArray) {
            box.style.pointerEvents = 'none';
        }
    }
}

// this function updates the board to display hits and misses after turns
function updateBoard(player, gameboard) {
    // iterate through the board to ensure the DOM display matches the class board
    for (let i = 0; i < gameboard.length; ++i) {
        if (player.board[i] !== 0) {
            gameboard[i].textContent = player.board[i];

            // add the correct class to each box depending on it's symbol on the board
            switch (player.board[i]) {
                case 'X':
                    gameboard[i].classList.add('hit');
                    break;
                case 'M':
                    gameboard[i].classList.add('miss');
                    break;
                default:
                    gameboard[i].classList.add('ship');
            }
        }
    }
}

// this function updates the board to display the opponent's board, only showing hits and misses
function updateBoardForOpp(player, gameboard) {
    // iterate through the board to ensure the DOM display matches the class board
    for (let i = 0; i < gameboard.length; ++i) {
        if (player.board[i] !== 0) {
            gameboard[i].textContent = '';

            // add the correct class to each box depending on it's symbol on the board
            switch (player.board[i]) {
                case 'X':
                    gameboard[i].textContent = player.board[i];
                    gameboard[i].classList.add('hit');
                    break;
                case 'M':
                    gameboard[i].textContent = player.board[i];
                    gameboard[i].classList.add('miss');
                    break;
                default:
                    gameboard[i].classList.remove('ship');
            }
        }
    }
}

// handle the victory by disabling the rest of the buttons and displaying a message
function handleWin(playerOneTurn, currBoxesArray) {
    for (const box of currBoxesArray) {
        box.style.pointerEvents = 'none';
    }

    const winMessage = document.createElement('div');

    if (playerOneTurn) {
        winMessage.textContent = 'Player 1 has won!';
    }
    else {
        winMessage.textContent = 'Player 2 has won!';
    }

    winMessage.style.fontSize = '4rem';

    document.body.appendChild(winMessage);
}

// this screen shows up once a turn is complete, with a button to move on to the next turn
// so that the players cannot see each other's boards
function turnScreen(playerOneTurn, playerOne, playerTwo) {
    // start off by hiding the boards
    const leftBoard = document.querySelector('.gameboard-container');
    const rightBoard = document.querySelector('.second-gameboard-container');
    leftBoard.style.display = 'none';
    rightBoard.style.display = 'none';

    // create new elements for the turn screen
    const turnTitle = document.createElement('h1');
    turnTitle.textContent = 'Pass Device';

    const turnDescription = document.createElement('h3');
    turnDescription.textContent = 'Pass the device to the opposing player! When you are ready for the next turn click the button.';

    const turnButton = document.createElement('button');
    turnButton.textContent = 'Next Turn';

    document.body.append(turnTitle, turnDescription, turnButton);

    // event listener to turn button makes the boards reappear and updates them
    turnButton.addEventListener('click', () => {
        turnTitle.remove();
        turnDescription.remove();
        turnButton.remove();

        leftBoard.style.display = 'grid';
        rightBoard.style.display = 'grid';
        displayPlayerBoard(!playerOneTurn, playerOne, playerTwo);
    });
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   coordToIndex: () => (/* binding */ coordToIndex),
/* harmony export */   createPlayer: () => (/* binding */ createPlayer),
/* harmony export */   placementValid: () => (/* binding */ placementValid)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


// this function converts a coordinate to an index on the board
function coordToIndex(coord) {
    // split coordinate into its letter and number
    let coordLetter = coord[0];
    let coordNum = Number(coord.slice(1));

    // create string by combining the correct index of the letter and number
    let index = String(coordLetter.charCodeAt(0) - 65) + String(coordNum - 1);

    return Number(index);
}

// this function returns true if a placement is valid and false otherwise
function placementValid(index, vertical, length, board) {

    // check if the vertical placement is valid with a for loop
    if (vertical) {
        // check if the board already has a ship there or the ship goes out of bounds
        for (let i = index; i < index + (length * 10); i += 10) {
            if (board[i] !== 0 || i > 99) {
                return false;
            }
        }

        return true;
    }
    else {
        for (let i = index; i < index + length; ++i) {
            if (board[i] !== 0 || ((i % 10 === 0) && (i > index))) {
                return false;
            }
        }

        return true;
    }
}

class Gameboard {
    constructor(human) {
        this.board = Array(100).fill(0);
        this.carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createCarrier)();
        this.human = human
        this.battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createBattleship)();
        this.cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createCruiser)();
        this.submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createSubmarine)();
        this.destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createDestroyer)();
        this.missedCoords = [];
        this.usedCoords = [];
    }

    // these functions place a ship at a given coordinate with a given orientation
    // returns true if successfully placed, false otherwise
    placeCarrier(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.carrier.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.carrier.length * 10); i += 10) {
                    this.board[i] = this.carrier.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.carrier.length; ++i) {
                    this.board[i] = this.carrier.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeBattleship(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.battleship.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.battleship.length * 10); i += 10) {
                    this.board[i] = this.battleship.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.battleship.length; ++i) {
                    this.board[i] = this.battleship.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeCruiser(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.cruiser.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.cruiser.length * 10); i += 10) {
                    this.board[i] = this.cruiser.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.cruiser.length; ++i) {
                    this.board[i] = this.cruiser.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeSubmarine(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.submarine.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.submarine.length * 10); i += 10) {
                    this.board[i] = this.submarine.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.submarine.length; ++i) {
                    this.board[i] = this.submarine.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeDestroyer(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.destroyer.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.destroyer.length * 10); i += 10) {
                    this.board[i] = this.destroyer.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.destroyer.length; ++i) {
                    this.board[i] = this.destroyer.symbol;
                }
            }

            return true;
        }

        return false;
    }

    // receives an attack on a pair of coordinates and determines whether or not it hit a ship
    receiveAttack(coord) {
        const attackIndex = coordToIndex(coord);

        // use switch statement to call hit on correct ship when it is hit and mark hits with an X
        switch (this.board[attackIndex]) {
            case 'C':
                this.carrier.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                return true;
            case 'B':
                this.battleship.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                return true;
            case 'R':
                this.cruiser.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                return true;
            case 'S':
                this.submarine.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                return true;
            case 'D':
                this.destroyer.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                return true;
            case 'X':
                break;
            default:
                this.board[attackIndex] = 'M';
                this.missedCoords.push(attackIndex);
                this.usedCoords.push(attackIndex);
                return false;
        }
    }

    // return true if all ships are sunk
    allShipsSunk() {
        if (this.carrier.isSunk() && 
            this.battleship.isSunk() && 
            this.cruiser.isSunk() &&
            this.submarine.isSunk() &&
            this.destroyer.isSunk()) 
            {
                return true;
        }

        return false;
    }
}

function createPlayer(human) {
    return new Gameboard(human);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");




// begin with a human player
let playerOne = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(true);

// hide elements until form is complete
document.querySelector('.orientation-explanation').style.display = 'none';
document.querySelector('.checkbox-container').style.display = 'none';

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // create player based on user input (whether or not they checked the box)
    let playerTwo = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(!document.querySelector('#computer').checked);

    // clean up DOM
    document.querySelector('#beginning-form').remove();

    document.querySelector('.orientation-explanation').style.display = 'block';
    document.querySelector('.checkbox-container').style.display = 'block';

    // begin by creating player 1's board on the DOM
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createBoardOnDOM)(document.querySelector('.gameboard-container'));

    // make second board take up no space
    document.querySelector('.second-gameboard-container').style.display = 'none';

    const playerTurn = document.querySelector('.player-turn');
    const currShip = document.querySelector('.current-ship');

    const playerOneBoxes = document.querySelectorAll(".gameboard-container .gameboard-box");
    let playerOneBoxesArray = Array.from(playerOneBoxes);

    // start off with the beginning text on the screen
    playerTurn.textContent = "Player 1: Place your";
    currShip.textContent = "Carrier (length 5)";
    document.querySelector('.note-one').style.display = "block";
    document.querySelector('.note-two').style.display = "block";

    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.placeShipListeners)(playerOne, playerOneBoxesArray, 'C', true, playerOne, playerTwo, playerTwo.human)
});

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   createBattleship: () => (/* binding */ createBattleship),
/* harmony export */   createCarrier: () => (/* binding */ createCarrier),
/* harmony export */   createCruiser: () => (/* binding */ createCruiser),
/* harmony export */   createDestroyer: () => (/* binding */ createDestroyer),
/* harmony export */   createSubmarine: () => (/* binding */ createSubmarine)
/* harmony export */ });
// factory functions for different types of ships of varying lengths
function createCarrier() {
    return new Ship(5, 'C');
}

function createBattleship() {
    return new Ship(4, 'B');
}

function createCruiser() {
    return new Ship(3, 'R');
}

function createSubmarine() {
    return new Ship(3, 'S');
}

function createDestroyer() {
    return new Ship(2, 'D');
}

class Ship {
    constructor(length, symbol) {
        this.length = length;
        this.symbol = symbol;
        this.numHits = 0;
        this.sunk = false;
    }

    hit() {
        ++this.numHits;
    }

    // return true or false if the ship is sunk or not
    isSunk() {
        // ship is sunk when it has been hit as many times as its length
        if (this.numHits === this.length) {
            this.sunk = true;
        }

        return this.sunk;
    }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUIsd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUVBO0FBQ0Esb0JBQW9CLHdEQUFZOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFnQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHdEQUFrQjtBQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDAuLjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHksXG4jYmVnaW5uaW5nLWZvcm0sXG4udGV4dC1jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDE5NiwgMjA2KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5nYW1lLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIHN5c3RlbS11aTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4jYmVnaW5uaW5nLWZvcm0ge1xuICAgIGdhcDogNDBweDtcbn1cblxuI3N1Ym1pdC1idXR0b24sXG5idXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIHN5c3RlbS11aTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi8qIHN0eWxpbmcgZm9yIHRoZSB0ZXh0IGFib3ZlIHRoZSBib2FyZHMgKi9cblxuLnRleHQtY29udGFpbmVyIHtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRleHQtY29udGFpbmVyID4gKiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubm90ZS1vbmUsXG4ubm90ZS10d28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vcmllbnRhdGlvbi1leHBsYW5hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4vKiBzdHlsaW5nIGZvciBib3RoIGdhbWVib2FyZHMgKi9cblxuLmJvYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcixcbi5zZWNvbmQtZ2FtZWJvYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgNDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDQwcHgpO1xufVxuXG4vKiBzdHlsaW5nIGZvciB0aGUgZ2FtZWJvYXJkIGJveGVzICovXG5cbi5nYW1lYm9hcmQtaXRlbSB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFja1xufVxuXG4uZ2FtZWJvYXJkLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjA1LCAyNTUpO1xufVxuXG4uc2hpcCB7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAxOTYsIDIwNik7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJvYXJkcyB7XG4gICAgICAgIGdhcDogMTAwcHg7XG4gICAgfVxuXG4gICAgLmdhbWVib2FyZC1jb250YWluZXIsXG4gICAgLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDMycHgpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMzJweCk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYm9hcmRzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuICAgIC5nYW1lLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjVlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xuICAgIC5nYW1lLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgfVxuXG4gICAgLmdhbWVib2FyZC1jb250YWluZXIsXG4gICAgLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI0cHgpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMjRweCk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0lBR0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7O0FBRTFDO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLGdDQUFnQzs7QUFFaEM7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztBQUN4Qzs7QUFFQSxvQ0FBb0M7O0FBRXBDO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTs7UUFFSSx1Q0FBdUM7UUFDdkMsb0NBQW9DO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTs7UUFFSSx1Q0FBdUM7UUFDdkMsb0NBQW9DO0lBQ3hDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9T3N3YWxkOndnaHRAMjAwLi43MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSxcXG4jYmVnaW5uaW5nLWZvcm0sXFxuLnRleHQtY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAxOTYsIDIwNik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJsYWNrIE9wcyBPbmVcXFwiLCBzeXN0ZW0tdWk7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbiNiZWdpbm5pbmctZm9ybSB7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuI3N1Ym1pdC1idXR0b24sXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxhY2sgT3BzIE9uZVxcXCIsIHN5c3RlbS11aTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGZvciB0aGUgdGV4dCBhYm92ZSB0aGUgYm9hcmRzICovXFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIgPiAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubm90ZS1vbmUsXFxuLm5vdGUtdHdvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm9yaWVudGF0aW9uLWV4cGxhbmF0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGZvciBib3RoIGdhbWVib2FyZHMgKi9cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmQtY29udGFpbmVyLFxcbi5zZWNvbmQtZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCA0MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDQwcHgpO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGZvciB0aGUgZ2FtZWJvYXJkIGJveGVzICovXFxuXFxuLmdhbWVib2FyZC1pdGVtIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcblxcbi5nYW1lYm9hcmQtYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjA1LCAyNTUpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IGJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDE5NiwgMjA2KTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmJvYXJkcyB7XFxuICAgICAgICBnYXA6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5nYW1lYm9hcmQtY29udGFpbmVyLFxcbiAgICAuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDMycHgpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDMycHgpO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuYm9hcmRzIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAgIC5nYW1lLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41ZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxuICAgIC5nYW1lLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lYm9hcmQtY29udGFpbmVyLFxcbiAgICAuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI0cHgpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDI0cHgpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY29vcmRUb0luZGV4IH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbi8vIHRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIG5ldyBwbGF5ZXIncyBib2FyZCBvbiB0aGUgRE9NXG5mdW5jdGlvbiBjcmVhdGVCb2FyZE9uRE9NKGdhbWVib2FyZCkge1xuICAgIC8vIGluaXRpYWxpemUgY3VyckxldHRlciB0byB0aGUgYXNjaWkgY2hhcmFjdGVyIGJlZm9yZSBBXG4gICAgbGV0IGN1cnJMZXR0ZXIgPSAnQCc7XG5cbiAgICAvLyBjcmVhdGUgZmlyc3Qgcm93XG4gICAgbGV0IGVtcHR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHlCb3guY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLWl0ZW0nKTtcbiAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZW1wdHlCb3gpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7ICsraSkge1xuICAgICAgICBsZXQgbmV3Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NvbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgIG5ld0NvbC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtaXRlbScpO1xuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQobmV3Q29sKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgKytpKSB7XG4gICAgICAgIC8vIGZvciBldmVyeSAxMHRoIGluZGV4IG9uIHRoZSBib2FyZCwgY3JlYXRlIGEgbmV3IHJvdyB3aXRoIGEgbGV0dGVyIHN5bWJvbGl6aW5nIGl0XG4gICAgICAgIGlmIChpICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgIGN1cnJMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjdXJyTGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAxKSk7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdSb3cudGV4dENvbnRlbnQgPSBjdXJyTGV0dGVyO1xuICAgICAgICAgICAgbmV3Um93LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC1pdGVtJyk7XG4gICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQobmV3Um93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgYm94IGZvciBlYWNoIGNvb3JkaW5hdGUgYW5kIGdpdmUgdGhlIGNvcnJlY3QgY29vcmRpbmF0ZXMgdG8gaXRzIGRhdGFzZXRcbiAgICAgICAgbGV0IG5ld0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdCb3guY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLWl0ZW0nLCAnZ2FtZWJvYXJkLWJveCcpO1xuICAgICAgICBuZXdCb3gudGFiSW5kZXggPSBcIjBcIjtcbiAgICAgICAgbmV3Qm94LmRhdGFzZXQuY29vcmQgPSBjdXJyTGV0dGVyICsgU3RyaW5nKGkgJSAxMCArIDEpO1xuXG4gICAgICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChuZXdCb3gpO1xuICAgIH1cbn1cblxuLy8gdGhpcyBmdW5jdGlvbiBkaXNwbGF5cyB0aGUgY29ycmVjdCBib2FyZHMgYmFzZWQgb24gd2hvcyB0dXJuIGl0IGlzXG4vLyBiYXNpY2FsbHkgbWFrZXMgdGhlIG9wcG9zaW5nIHBsYXllcidzIGJvYXJkIGludmlzaWJsZSBleGNlcHQgZm9yIGtub3duIGhpdHMgYW5kIG1pc3Nlc1xuZnVuY3Rpb24gZGlzcGxheVBsYXllckJvYXJkKHBsYXllck9uZVR1cm4sIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciAuZ2FtZWJvYXJkLWJveCcpO1xuICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyIC5nYW1lYm9hcmQtYm94Jyk7XG4gICAgY29uc3QgcGxheWVyT25lQm9hcmRBcnJheSA9IEFycmF5LmZyb20ocGxheWVyT25lQm9hcmQpO1xuICAgIGNvbnN0IHBsYXllclR3b0JvYXJkQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllclR3b0JvYXJkKTtcblxuICAgIGNvbnN0IHBsYXllclR1cm5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10dXJuJyk7XG5cbiAgICAvLyBjYWxsIHVwZGF0ZUJvYXJkIGZvciB0aGUgY29ycmVjdCBwbGF5ZXIncyBib2FyZHNcbiAgICBpZiAocGxheWVyT25lVHVybikge1xuICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXJPbmUsIHBsYXllck9uZUJvYXJkQXJyYXkpO1xuICAgICAgICB1cGRhdGVCb2FyZEZvck9wcChwbGF5ZXJUd28sIHBsYXllclR3b0JvYXJkQXJyYXkpO1xuICAgICAgICBwbGF5ZXJUdXJuVGV4dC50ZXh0Q29udGVudCA9ICdJdCBpcyBQbGF5ZXIgMVxcJ3MgKGxlZnQpIHR1cm4nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlQm9hcmQocGxheWVyVHdvLCBwbGF5ZXJUd29Cb2FyZEFycmF5KTtcbiAgICAgICAgdXBkYXRlQm9hcmRGb3JPcHAocGxheWVyT25lLCBwbGF5ZXJPbmVCb2FyZEFycmF5KVxuICAgICAgICBwbGF5ZXJUdXJuVGV4dC50ZXh0Q29udGVudCA9ICdJdCBpcyBQbGF5ZXIgMlxcJ3MgKHJpZ2h0KSB0dXJuJztcbiAgICB9XG59XG5cbi8vIHRoaXMgZnVuY3Rpb24gYWRkcyBsaXN0ZW5lcnMgdG8gdGhlIGJveGVzIHRoYXQgYWxsb3cgdGhlIHNoaXBzIHRvIGJlIHBsYWNlZCB3aGVuIGNsaWNrZWQsIGFuZCBnb2VzIFxuLy8gb24gdG8gY2FsbCBpdHNlbGYgZm9yIGVhY2ggc2hpcCBpbiBvcmRlciBmcm9tIGxhcmdlc3QgdG8gc21hbGxlc3QsIHRoZW4gc3RhcnRzIHVwIHRoZSBnYW1lXG5mdW5jdGlvbiBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyLCBwbGF5ZXJCb3hlc0FycmF5LCBzaGlwLCBwbGF5ZXJPbmVUdXJuLCBwbGF5ZXJPbmUsIHBsYXllclR3bywgaHVtYW4pIHtcbiAgICBjb25zdCBjdXJyU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNoaXAnKTtcblxuICAgIC8vIGRlZmluZSBhIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgc2hpcCBwbGFjZW1lbnQgZm9yIGVhY2ggc2hpcFxuICAgIGNvbnN0IGhhbmRsZVNoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBib3ggPSBlLnRhcmdldDtcblxuICAgICAgICAvLyBvbmx5IG1vdmUgb24gdG8gdGhlIG5leHQgc2hpcCBwbGFjZW1lbnQgaWYgdGhlIGN1cnJlbnQgcGxhY2VtZW50IHdhcyB2YWxpZFxuICAgICAgICBpZiAocGxhY2VTaGlwT25ET00oc2hpcCwgcGxheWVyLCBwbGF5ZXJCb3hlc0FycmF5LCBib3guZGF0YXNldC5jb29yZCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYm94IG9mIHBsYXllckJveGVzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTaGlwUGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgY29ycmVjdCBzaGlwIGluIG9yZGVyXG4gICAgICAgICAgICBzd2l0Y2ggKHNoaXApIHtcbiAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgY3VyclNoaXAudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCAobGVuZ3RoIDQpJztcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwTGlzdGVuZXJzKHBsYXllciwgcGxheWVyQm94ZXNBcnJheSwgJ0InLCBwbGF5ZXJPbmVUdXJuLCBwbGF5ZXJPbmUsIHBsYXllclR3bywgaHVtYW4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICAgICAgICAgICAgY3VyclNoaXAudGV4dENvbnRlbnQgPSAnQ3J1aXNlciAobGVuZ3RoIDMpJztcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwTGlzdGVuZXJzKHBsYXllciwgcGxheWVyQm94ZXNBcnJheSwgJ1InLCBwbGF5ZXJPbmVUdXJuLCBwbGF5ZXJPbmUsIHBsYXllclR3bywgaHVtYW4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdSJzpcbiAgICAgICAgICAgICAgICAgICAgY3VyclNoaXAudGV4dENvbnRlbnQgPSAnU3VibWFyaW5lIChsZW5ndGggMyknO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyLCBwbGF5ZXJCb3hlc0FycmF5LCAnUycsIHBsYXllck9uZVR1cm4sIHBsYXllck9uZSwgcGxheWVyVHdvLCBodW1hbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgICAgICBjdXJyU2hpcC50ZXh0Q29udGVudCA9ICdEZXN0cm95ZXIgKGxlbmd0aCAyKSc7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcExpc3RlbmVycyhwbGF5ZXIsIHBsYXllckJveGVzQXJyYXksICdEJywgcGxheWVyT25lVHVybiwgcGxheWVyT25lLCBwbGF5ZXJUd28sIGh1bWFuKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9uY2UgcGxheWVyIG9uZSBpcyBmaW5pc2hlZCBwbGFjaW5nIHNoaXBzLCBsZXQgcGxheWVyIDIgcGxhY2UgdGhlaXJzXG4gICAgICAgICAgICBpZiAoc2hpcCA9PT0gJ0QnICYmIGh1bWFuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck9uZVR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVCb2FyZE9uRE9NKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZ2FtZWJvYXJkLWNvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR1cm4nKS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMjogUGxhY2UgeW91cic7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJTaGlwLnRleHRDb250ZW50ID0gJ0NhcnJpZXIgKGxlbmd0aCA1KSc7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXIgLmdhbWVib2FyZC1ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm94ZXNBcnJheSA9IEFycmF5LmZyb20ocGxheWVyVHdvQm94ZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcExpc3RlbmVycyhwbGF5ZXJUd28sIHBsYXllclR3b0JveGVzQXJyYXksICdDJywgZmFsc2UsIHBsYXllck9uZSwgcGxheWVyVHdvLCBodW1hbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG9uY2UgYm90aCBwbGF5ZXJzIGFyZSBmaW5pc2hlZCBwbGFjaW5nIHNoaXBzLCBwcm9jZWVkIHdpdGggdGhlIGdhbWVcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uLWV4cGxhbmF0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2hpcCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1vbmUnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtdHdvJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQtY29udGFpbmVyIC5nYW1lYm9hcmQtYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllck9uZUJveGVzQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllck9uZUJveGVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXIgLmdhbWVib2FyZC1ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm94ZXNBcnJheSA9IEFycmF5LmZyb20ocGxheWVyVHdvQm94ZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgYm94IGxpc3RlbmVycyB0byB0aGUgYm9hcmRzIHRvIG1ha2UgdGhlIGdhbWUgcnVuXG4gICAgICAgICAgICAgICAgICAgIGFkZEJveExpc3RlbmVycyhwbGF5ZXJUd28sIHBsYXllclR3b0JveGVzQXJyYXksIHRydWUsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQm94TGlzdGVuZXJzKHBsYXllck9uZSwgcGxheWVyT25lQm94ZXNBcnJheSwgZmFsc2UsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHRoZSBvcHBvc2luZyBwbGF5ZXIncyBib2FyZCBpbnZpc2libGUgb3RoZXIgdGhhbiBoaXRzIGFuZCBtaXNzZXNcbiAgICAgICAgICAgICAgICAgICAgLy9kaXNwbGF5UGxheWVyQm9hcmQodHJ1ZSwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGUgYm94ZXMgb2YgcGxheWVyIDEgdG8gc3RhcnQgb2ZmIHdpdGggcGxheWVyIDEncyB0dXJuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYm94IG9mIHBsYXllck9uZUJveGVzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHVyblNjcmVlbihmYWxzZSwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9uY2UgYm90aCBwbGF5ZXJzIGFyZSBmaW5pc2hlZCBwbGFjaW5nIHNoaXBzLCBwcm9jZWVkIHdpdGggdGhlIGdhbWVcbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXAgPT09ICdEJyAmJiAhaHVtYW4pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JpZW50YXRpb24tZXhwbGFuYXRpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2hpcCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLW9uZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLXR3bycpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHNlY29uZCBib2FyZFxuICAgICAgICAgICAgICAgIGNyZWF0ZUJvYXJkT25ET00oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZ2FtZWJvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG5cbiAgICAgICAgICAgICAgICBwbGFjZUJvdFNoaXBzKHBsYXllclR3byk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libGVCb3RBdHRhY2tzID0gW107XG5cbiAgICAgICAgICAgICAgICBsZXQgY3VyckNvb3JkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGZpbGwgdGhlIHBvc3NpYmxlQm90QXR0YWNrcyBhcnJheSB3aXRoIGFsbCB0aGUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gNjU7IGkgPD0gNzQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyQ29vcmQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpICsgU3RyaW5nKGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVCb3RBdHRhY2tzLnB1c2goY3VyckNvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyIC5nYW1lYm9hcmQtYm94Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm94ZXNBcnJheSA9IEFycmF5LmZyb20ocGxheWVyVHdvQm94ZXMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1F1ZXVlID0gW107XG5cbiAgICAgICAgICAgICAgICBhZGRCb3hMaXN0ZW5lcnNCb3QocGxheWVyVHdvLCBwbGF5ZXJUd29Cb3hlc0FycmF5LCB0cnVlLCBwbGF5ZXJPbmUsIHBsYXllclR3bywgcG9zc2libGVCb3RBdHRhY2tzLCBhdHRhY2tRdWV1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBtYWtlIHRoZSBvcHBvc2luZyBwbGF5ZXIncyBib2FyZCBpbnZpc2libGUgb3RoZXIgdGhhbiBoaXRzIGFuZCBtaXNzZXNcbiAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyQm9hcmQodHJ1ZSwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZSBib3hlcyBvZiBwbGF5ZXIgMSBcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJveCBvZiBwbGF5ZXJCb3hlc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBib3hcbiAgICBmb3IgKGNvbnN0IGJveCBvZiBwbGF5ZXJCb3hlc0FycmF5KSB7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNoaXBQbGFjZW1lbnQpO1xuICAgIH1cbn1cblxuLy8gdGhpcyBmdW5jdGlvbiBwbGFjZXMgdGhlIHNoaXAgb24gdGhlIERPTSBnaXZlbiB0aGUgdHlwZSBvZiBzaGlwLCB0aGUgcGxheWVyLCBhbmQgdGhlIHBsYXllcidzIGJvYXJkXG5mdW5jdGlvbiBwbGFjZVNoaXBPbkRPTShzaGlwLCBwbGF5ZXIsIGdhbWVib2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmVydGljYWxcIik7XG5cbiAgICAvLyBpZiB0aGUgc2hpcCBwbGFjZW1lbnQgaXMgdmFsaWQsIHBsYWNlIGl0IGFuZCB1cGRhdGUgdGhlIGJvYXJkIGFuZCByZXR1cm4gdHJ1ZVxuICAgIGlmIChzaGlwID09PSAnQycgJiYgcGxheWVyLnBsYWNlQ2Fycmllcihjb29yZCwgY2hlY2tib3guY2hlY2tlZCkpIHtcbiAgICAgICAgdXBkYXRlQm9hcmQocGxheWVyLCBnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2hpcCA9PT0gJ0InICYmIHBsYXllci5wbGFjZUJhdHRsZXNoaXAoY29vcmQsIGNoZWNrYm94LmNoZWNrZWQpKSB7XG4gICAgICAgIHVwZGF0ZUJvYXJkKHBsYXllciwgZ2FtZWJvYXJkKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNoaXAgPT09ICdSJyAmJiBwbGF5ZXIucGxhY2VDcnVpc2VyKGNvb3JkLCBjaGVja2JveC5jaGVja2VkKSkge1xuICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIsIGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzaGlwID09PSAnUycgJiYgcGxheWVyLnBsYWNlU3VibWFyaW5lKGNvb3JkLCBjaGVja2JveC5jaGVja2VkKSkge1xuICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIsIGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzaGlwID09PSAnRCcgJiYgcGxheWVyLnBsYWNlRGVzdHJveWVyKGNvb3JkLCBjaGVja2JveC5jaGVja2VkKSkge1xuICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIsIGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBzaGlwIHBsYWNlbWVudCBpcyBpbnZhbGlkIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gdGhpcyBmdW5jdGlvbiBoYXMgdGhlIGJvdCByYW5kb21seSBwbGFjZSBzaGlwcyBvbiB0aGVpciBib2FyZFxuZnVuY3Rpb24gcGxhY2VCb3RTaGlwcyhwbGF5ZXIpIHtcbiAgICBsZXQgcG9zc2libGVCb3RDb29yZHMgPSBbXTtcblxuICAgIGxldCBjdXJyQ29vcmQ7XG4gICAgXG4gICAgLy8gZmlsbCB0aGUgcG9zc2libGVCb3RBdHRhY2tzIGFycmF5IHdpdGggYWxsIHRoZSBjb29yZGluYXRlc1xuICAgIGZvciAobGV0IGkgPSA2NTsgaSA8PSA3NDsgKytpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyArK2opIHtcbiAgICAgICAgICAgIGN1cnJDb29yZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKyBTdHJpbmcoaik7XG4gICAgICAgICAgICBwb3NzaWJsZUJvdENvb3Jkcy5wdXNoKGN1cnJDb29yZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tQ29vcmQgPSBwb3NzaWJsZUJvdENvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUJvdENvb3Jkcy5sZW5ndGgpXTtcblxuICAgIC8vIGhhdmUgdGhlIGJvdCB0cnkgcGxhY2luZyBpdHMgc2hpcHMgYXQgcmFuZG9tIGNvb3JkaW5hdGVzIHVudGlsIGl0IGZpbmRzIGEgdmFsaWQgcGxhY2VtZW50IGZvciBlYWNoIHNoaXBcbiAgICB3aGlsZSAoIXBsYXllci5wbGFjZUNhcnJpZXIocmFuZG9tQ29vcmQsIE1hdGgucmFuZG9tKCkgPCAwLjUpKSB7XG4gICAgICAgIHJhbmRvbUNvb3JkID0gcG9zc2libGVCb3RDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVCb3RDb29yZHMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICB3aGlsZSAoIXBsYXllci5wbGFjZUJhdHRsZXNoaXAocmFuZG9tQ29vcmQsIE1hdGgucmFuZG9tKCkgPCAwLjUpKSB7XG4gICAgICAgIHJhbmRvbUNvb3JkID0gcG9zc2libGVCb3RDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVCb3RDb29yZHMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICB3aGlsZSAoIXBsYXllci5wbGFjZUNydWlzZXIocmFuZG9tQ29vcmQsIE1hdGgucmFuZG9tKCkgPCAwLjUpKSB7XG4gICAgICAgIHJhbmRvbUNvb3JkID0gcG9zc2libGVCb3RDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVCb3RDb29yZHMubGVuZ3RoKV1cbiAgICB9XG5cbiAgICB3aGlsZSAoIXBsYXllci5wbGFjZVN1Ym1hcmluZShyYW5kb21Db29yZCwgTWF0aC5yYW5kb20oKSA8IDAuNSkpIHtcbiAgICAgICAgcmFuZG9tQ29vcmQgPSBwb3NzaWJsZUJvdENvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUJvdENvb3Jkcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIHdoaWxlICghcGxheWVyLnBsYWNlRGVzdHJveWVyKHJhbmRvbUNvb3JkLCBNYXRoLnJhbmRvbSgpIDwgMC41KSkge1xuICAgICAgICByYW5kb21Db29yZCA9IHBvc3NpYmxlQm90Q29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQm90Q29vcmRzLmxlbmd0aCldXG4gICAgfVxufVxuXG5cbi8vIHRoaXMgZnVuY3Rpb24gYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCBvZiB0aGUgYm94ZXMgaW4gdGhlIGdpdmVuIGFycmF5IHRoYXQgcnVuIHRoZSBnYW1lXG5mdW5jdGlvbiBhZGRCb3hMaXN0ZW5lcnMocGxheWVyLCBwbGF5ZXJCb3hlc0FycmF5LCBwbGF5ZXJPbmVUdXJuLCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICAgIGZvciAoY29uc3QgYm94IG9mIHBsYXllckJveGVzQXJyYXkpIHtcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHJ1biBldmVudCBsaXN0ZW5lciBpZiB0aGUgYm94IGNsaWNrZWQgb24gaGFzIG5vdCBiZWVuIGF0dGFja2VkIGFscmVhZHlcbiAgICAgICAgICAgIGlmICghcGxheWVyLnVzZWRDb29yZHMuaW5jbHVkZXMoY29vcmRUb0luZGV4KGJveC5kYXRhc2V0LmNvb3JkKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHRoZSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gcGxheWVyIGFuZCB1cGRhdGUgdGhlIGJvYXJkIGZvciB0aGF0IHBsYXllclxuICAgICAgICAgICAgICAgIHBsYXllci5yZWNlaXZlQXR0YWNrKGJveC5kYXRhc2V0LmNvb3JkKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXIsIHBsYXllckJveGVzQXJyYXkpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJCb2FyZDtcblxuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgb3Bwb25lbnRzIGJvYXJkIHRvIGVuYWJsZSBhbmQgZGlzYWJsZSB0aGUgY29ycmVjdCBib2FyZHMgYWZ0ZXIgZWFjaCB0dXJuXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck9uZVR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyckJvYXJkID0gJy5nYW1lYm9hcmQtY29udGFpbmVyJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJCb2FyZCA9ICcuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXInO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGRpc2FibGUgb3Bwb25lbnQgYm94ZXMgdG8gdGFrZSB0dXJuc1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYm94IG9mIHBsYXllckJveGVzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y3VyckJvYXJkfSAuZ2FtZWJvYXJkLWJveGApO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyQm94ZXNBcnJheSA9IEFycmF5LmZyb20oY3VyckJveGVzKTtcblxuICAgICAgICAgICAgICAgIC8vIGVuYWJsZSBvcHBvbmVudCBib3hlcyBhZnRlciB0YWtpbmcgdHVyblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYm94IG9mIGN1cnJCb3hlc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB2aWN0b3J5IGlmIGdhbWUgaXMgb3ZlclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlV2luKHBsYXllck9uZVR1cm4sIGN1cnJCb3hlc0FycmF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR1cm5TY3JlZW4ocGxheWVyT25lVHVybiwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGFkZHMgdGhlIGJveCBsaXN0ZW5lcnMgdG8gdGhlIGJvYXJkcyBmb3IgcGxheWluZyBhZ2FpbnN0IHRoZSBjb21wdXRlclxuZnVuY3Rpb24gYWRkQm94TGlzdGVuZXJzQm90KHBsYXllciwgcGxheWVyQm94ZXNBcnJheSwgcGxheWVyT25lVHVybiwgcGxheWVyT25lLCBwbGF5ZXJUd28sIHBvc3NpYmxlQm90QXR0YWNrcywgYXR0YWNrUXVldWUpIHtcbiAgICBmb3IgKGNvbnN0IGJveCBvZiBwbGF5ZXJCb3hlc0FycmF5KSB7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBydW4gZXZlbnQgbGlzdGVuZXIgaWYgdGhlIGJveCBjbGlja2VkIG9uIGhhcyBub3QgYmVlbiBhdHRhY2tlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoIXBsYXllci51c2VkQ29vcmRzLmluY2x1ZGVzKGNvb3JkVG9JbmRleChib3guZGF0YXNldC5jb29yZCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIHBsYXllciBhbmQgdXBkYXRlIHRoZSBib2FyZCBmb3IgdGhhdCBwbGF5ZXJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhib3guZGF0YXNldC5jb29yZCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQm9hcmRGb3JPcHAocGxheWVyLCBwbGF5ZXJCb3hlc0FycmF5KTtcblxuICAgICAgICAgICAgICAgIGxldCBjdXJyQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciAuZ2FtZWJvYXJkLWJveCcpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyQm94ZXNBcnJheSA9IEFycmF5LmZyb20oY3VyckJveGVzKTtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB2aWN0b3J5IGlmIGdhbWUgaXMgb3ZlclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJUd28uYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlV2luKHBsYXllck9uZVR1cm4sIGN1cnJCb3hlc0FycmF5KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIG9wcG9zaW5nIGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wcG9zaW5nQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXIgLmdhbWVib2FyZC1ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3Bwb3NpbmdCb2FyZEFycmF5ID0gQXJyYXkuZnJvbShvcHBvc2luZ0JvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBib3ggb2Ygb3Bwb3NpbmdCb2FyZEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm90QXR0YWNrKHBsYXllck9uZSwgcG9zc2libGVCb3RBdHRhY2tzLCBjdXJyQm94ZXNBcnJheSwgYXR0YWNrUXVldWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIGZvciBlbnRlciBrZXkgZm9yIGExMXlcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHJ1biBldmVudCBsaXN0ZW5lciBpZiB0aGUgYm94IGNsaWNrZWQgb24gaGFzIG5vdCBiZWVuIGF0dGFja2VkIGFscmVhZHlcbiAgICAgICAgICAgICAgICBpZiAoIXBsYXllci51c2VkQ29vcmRzLmluY2x1ZGVzKGNvb3JkVG9JbmRleChib3guZGF0YXNldC5jb29yZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBwbGF5ZXIgYW5kIHVwZGF0ZSB0aGUgYm9hcmQgZm9yIHRoYXQgcGxheWVyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yZWNlaXZlQXR0YWNrKGJveC5kYXRhc2V0LmNvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmRGb3JPcHAocGxheWVyLCBwbGF5ZXJCb3hlc0FycmF5KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyckJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZC1jb250YWluZXIgLmdhbWVib2FyZC1ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJCb3hlc0FycmF5ID0gQXJyYXkuZnJvbShjdXJyQm94ZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB2aWN0b3J5IGlmIGdhbWUgaXMgb3ZlclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyVHdvLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVXaW4ocGxheWVyT25lVHVybiwgY3VyckJveGVzQXJyYXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIG9wcG9zaW5nIGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHBvc2luZ0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyIC5nYW1lYm9hcmQtYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHBvc2luZ0JvYXJkQXJyYXkgPSBBcnJheS5mcm9tKG9wcG9zaW5nQm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBib3ggb2Ygb3Bwb3NpbmdCb2FyZEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3RBdHRhY2socGxheWVyT25lLCBwb3NzaWJsZUJvdEF0dGFja3MsIGN1cnJCb3hlc0FycmF5LCBhdHRhY2tRdWV1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gdGhpcyBmdW5jdGlvbiBoYXMgdGhlIG9wcG9zaW5nIGJvdCBwbGF5ZXIgcGljayBhIHJhbmRvbSBzcG90IHRvIGF0dGFjayBmcm9tIGl0cyBhcnJheSBvZiBwb3NzaWJsZSBhdHRhY2tzXG5mdW5jdGlvbiBib3RBdHRhY2socGxheWVyT25lLCBwb3NzaWJsZUJvdEF0dGFja3MsIGN1cnJCb3hlc0FycmF5LCBhdHRhY2tRdWV1ZSkge1xuICAgIGxldCBhdHRhY2tDb29yZDtcblxuICAgIC8vIGdldCByYW5kb20gYXR0YWNrIGlmIGF0dGFja1F1ZXVlIGlzIGVtcHR5XG4gICAgaWYgKGF0dGFja1F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhdHRhY2tDb29yZCA9IHBvc3NpYmxlQm90QXR0YWNrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUJvdEF0dGFja3MubGVuZ3RoKV07XG4gICAgfVxuICAgIC8vIGlmIGF0dGFja1F1ZXVlIGlzIG5vdCBlbXB0eSwgdGFrZSBjb29yZHMgZnJvbSBpdCB1bnRpbCBhIHZhbGlkIG9uZSBpcyBmb3VuZFxuICAgIGVsc2Uge1xuICAgICAgICBhdHRhY2tDb29yZCA9IGF0dGFja1F1ZXVlLnNoaWZ0KCk7XG5cbiAgICAgICAgd2hpbGUgKCFwb3NzaWJsZUJvdEF0dGFja3MuaW5jbHVkZXMoYXR0YWNrQ29vcmQpKSB7XG4gICAgICAgICAgICAvLyBicmVhayBpZiBubyB2YWxpZCBhdHRhY2sgaXMgZm91bmRcbiAgICAgICAgICAgIGlmIChhdHRhY2tRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0YWNrQ29vcmQgPSBhdHRhY2tRdWV1ZS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgYWZ0ZXIgZW1wdHlpbmcgdGhlIHF1ZXVlIHRoZSBhdHRhY2sgY29vcmQgc3RpbGwgaXNuJ3QgdmFsaWQsIHRoZW4gY2hvb3NlIGEgcmFuZG9tIGNvb3JkIGZyb20gcG9zc2libGVCb3RBdHRhY2tzXG4gICAgaWYgKGF0dGFja0Nvb3JkID09IHVuZGVmaW5lZCkge1xuICAgICAgICBhdHRhY2tDb29yZCA9IHBvc3NpYmxlQm90QXR0YWNrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUJvdEF0dGFja3MubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGN1cnJlbnQgYXR0YWNrIGhpdHMsIHRoZW4gYWRkIGFkamFjZW50IGF0dGFja3MgdG8gdGhlIGF0dGFja1F1ZXVlIGlmIHRoZXkgYXJlIHZhbGlkXG4gICAgaWYgKHBsYXllck9uZS5yZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3JkKSkge1xuICAgICAgICBsZXQgYXR0YWNrQ29vcmRJbmRleCA9IHBvc3NpYmxlQm90QXR0YWNrcy5pbmRleE9mKGF0dGFja0Nvb3JkKTtcblxuICAgICAgICBpZiAoYXR0YWNrQ29vcmRJbmRleCAlIDEwID4gMCkge1xuICAgICAgICAgICAgYXR0YWNrUXVldWUucHVzaChwb3NzaWJsZUJvdEF0dGFja3NbYXR0YWNrQ29vcmRJbmRleCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0YWNrQ29vcmRJbmRleCAlIDEwIDwgOSkge1xuICAgICAgICAgICAgYXR0YWNrUXVldWUucHVzaChwb3NzaWJsZUJvdEF0dGFja3NbYXR0YWNrQ29vcmRJbmRleCArIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0YWNrQ29vcmRJbmRleCA+IDkpIHtcbiAgICAgICAgICAgIGF0dGFja1F1ZXVlLnB1c2gocG9zc2libGVCb3RBdHRhY2tzW2F0dGFja0Nvb3JkSW5kZXggLSAxMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRhY2tDb29yZEluZGV4IDwgOTApIHtcbiAgICAgICAgICAgIGF0dGFja1F1ZXVlLnB1c2gocG9zc2libGVCb3RBdHRhY2tzW2F0dGFja0Nvb3JkSW5kZXggKyAxMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQm9hcmQocGxheWVyT25lLCBjdXJyQm94ZXNBcnJheSk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgYXR0YWNrIGZyb20gdGhlIHBvc3NpYmxlIGJvdCBhdHRhY2tzIGFycmF5IHdoZW4gaXQgaXMgdXNlZFxuICAgIHBvc3NpYmxlQm90QXR0YWNrcy5zcGxpY2UocG9zc2libGVCb3RBdHRhY2tzLmluZGV4T2YoYXR0YWNrQ29vcmQpLCAxKTtcblxuICAgIC8vIGhhbmRsZSB2aWN0b3J5IGlmIGdhbWUgaXMgb3ZlclxuICAgIGlmIChwbGF5ZXJPbmUuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgaGFuZGxlV2luKGZhbHNlLCBjdXJyQm94ZXNBcnJheSk7XG4gICAgICAgIFxuICAgICAgICAvLyBkaXNhYmxlIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIG9wcG9zaW5nIGJvYXJkXG4gICAgICAgIGNvbnN0IG9wcG9zaW5nQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXIgLmdhbWVib2FyZC1ib3gnKTtcbiAgICAgICAgY29uc3Qgb3Bwb3NpbmdCb2FyZEFycmF5ID0gQXJyYXkuZnJvbShvcHBvc2luZ0JvYXJkKTtcbiAgICAgICAgZm9yIChjb25zdCBib3ggb2Ygb3Bwb3NpbmdCb2FyZEFycmF5KSB7XG4gICAgICAgICAgICBib3guc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRoZSBib2FyZCB0byBkaXNwbGF5IGhpdHMgYW5kIG1pc3NlcyBhZnRlciB0dXJuc1xuZnVuY3Rpb24gdXBkYXRlQm9hcmQocGxheWVyLCBnYW1lYm9hcmQpIHtcbiAgICAvLyBpdGVyYXRlIHRocm91Z2ggdGhlIGJvYXJkIHRvIGVuc3VyZSB0aGUgRE9NIGRpc3BsYXkgbWF0Y2hlcyB0aGUgY2xhc3MgYm9hcmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAocGxheWVyLmJvYXJkW2ldICE9PSAwKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmRbaV0udGV4dENvbnRlbnQgPSBwbGF5ZXIuYm9hcmRbaV07XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGJveCBkZXBlbmRpbmcgb24gaXQncyBzeW1ib2wgb24gdGhlIGJvYXJkXG4gICAgICAgICAgICBzd2l0Y2ggKHBsYXllci5ib2FyZFtpXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRbaV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRbaV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRbaV0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0aGlzIGZ1bmN0aW9uIHVwZGF0ZXMgdGhlIGJvYXJkIHRvIGRpc3BsYXkgdGhlIG9wcG9uZW50J3MgYm9hcmQsIG9ubHkgc2hvd2luZyBoaXRzIGFuZCBtaXNzZXNcbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkRm9yT3BwKHBsYXllciwgZ2FtZWJvYXJkKSB7XG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBib2FyZCB0byBlbnN1cmUgdGhlIERPTSBkaXNwbGF5IG1hdGNoZXMgdGhlIGNsYXNzIGJvYXJkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHBsYXllci5ib2FyZFtpXSAhPT0gMCkge1xuICAgICAgICAgICAgZ2FtZWJvYXJkW2ldLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGJveCBkZXBlbmRpbmcgb24gaXQncyBzeW1ib2wgb24gdGhlIGJvYXJkXG4gICAgICAgICAgICBzd2l0Y2ggKHBsYXllci5ib2FyZFtpXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRbaV0udGV4dENvbnRlbnQgPSBwbGF5ZXIuYm9hcmRbaV07XG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFtpXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFtpXS50ZXh0Q29udGVudCA9IHBsYXllci5ib2FyZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2ldLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gaGFuZGxlIHRoZSB2aWN0b3J5IGJ5IGRpc2FibGluZyB0aGUgcmVzdCBvZiB0aGUgYnV0dG9ucyBhbmQgZGlzcGxheWluZyBhIG1lc3NhZ2VcbmZ1bmN0aW9uIGhhbmRsZVdpbihwbGF5ZXJPbmVUdXJuLCBjdXJyQm94ZXNBcnJheSkge1xuICAgIGZvciAoY29uc3QgYm94IG9mIGN1cnJCb3hlc0FycmF5KSB7XG4gICAgICAgIGJveC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IHdpbk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChwbGF5ZXJPbmVUdXJuKSB7XG4gICAgICAgIHdpbk1lc3NhZ2UudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgaGFzIHdvbiEnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luTWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiBoYXMgd29uISc7XG4gICAgfVxuXG4gICAgd2luTWVzc2FnZS5zdHlsZS5mb250U2l6ZSA9ICc0cmVtJztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2luTWVzc2FnZSk7XG59XG5cbi8vIHRoaXMgc2NyZWVuIHNob3dzIHVwIG9uY2UgYSB0dXJuIGlzIGNvbXBsZXRlLCB3aXRoIGEgYnV0dG9uIHRvIG1vdmUgb24gdG8gdGhlIG5leHQgdHVyblxuLy8gc28gdGhhdCB0aGUgcGxheWVycyBjYW5ub3Qgc2VlIGVhY2ggb3RoZXIncyBib2FyZHNcbmZ1bmN0aW9uIHR1cm5TY3JlZW4ocGxheWVyT25lVHVybiwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgICAvLyBzdGFydCBvZmYgYnkgaGlkaW5nIHRoZSBib2FyZHNcbiAgICBjb25zdCBsZWZ0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHJpZ2h0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICBsZWZ0Qm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICByaWdodEJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvLyBjcmVhdGUgbmV3IGVsZW1lbnRzIGZvciB0aGUgdHVybiBzY3JlZW5cbiAgICBjb25zdCB0dXJuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHR1cm5UaXRsZS50ZXh0Q29udGVudCA9ICdQYXNzIERldmljZSc7XG5cbiAgICBjb25zdCB0dXJuRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHR1cm5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQYXNzIHRoZSBkZXZpY2UgdG8gdGhlIG9wcG9zaW5nIHBsYXllciEgV2hlbiB5b3UgYXJlIHJlYWR5IGZvciB0aGUgbmV4dCB0dXJuIGNsaWNrIHRoZSBidXR0b24uJztcblxuICAgIGNvbnN0IHR1cm5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0dXJuQnV0dG9uLnRleHRDb250ZW50ID0gJ05leHQgVHVybic7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0dXJuVGl0bGUsIHR1cm5EZXNjcmlwdGlvbiwgdHVybkJ1dHRvbik7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lciB0byB0dXJuIGJ1dHRvbiBtYWtlcyB0aGUgYm9hcmRzIHJlYXBwZWFyIGFuZCB1cGRhdGVzIHRoZW1cbiAgICB0dXJuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0dXJuVGl0bGUucmVtb3ZlKCk7XG4gICAgICAgIHR1cm5EZXNjcmlwdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgdHVybkJ1dHRvbi5yZW1vdmUoKTtcblxuICAgICAgICBsZWZ0Qm9hcmQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgcmlnaHRCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICBkaXNwbGF5UGxheWVyQm9hcmQoIXBsYXllck9uZVR1cm4sIHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9hcmRPbkRPTSwgcGxhY2VTaGlwT25ET00sIGFkZEJveExpc3RlbmVycywgZGlzcGxheVBsYXllckJvYXJkLCBhZGRCb3hMaXN0ZW5lcnNCb3QsIHBsYWNlU2hpcExpc3RlbmVycyB9OyIsImltcG9ydCB7IGNyZWF0ZUNhcnJpZXIsIGNyZWF0ZUJhdHRsZXNoaXAsIGNyZWF0ZUNydWlzZXIsIGNyZWF0ZVN1Ym1hcmluZSwgY3JlYXRlRGVzdHJveWVyIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG4vLyB0aGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGEgY29vcmRpbmF0ZSB0byBhbiBpbmRleCBvbiB0aGUgYm9hcmRcbmZ1bmN0aW9uIGNvb3JkVG9JbmRleChjb29yZCkge1xuICAgIC8vIHNwbGl0IGNvb3JkaW5hdGUgaW50byBpdHMgbGV0dGVyIGFuZCBudW1iZXJcbiAgICBsZXQgY29vcmRMZXR0ZXIgPSBjb29yZFswXTtcbiAgICBsZXQgY29vcmROdW0gPSBOdW1iZXIoY29vcmQuc2xpY2UoMSkpO1xuXG4gICAgLy8gY3JlYXRlIHN0cmluZyBieSBjb21iaW5pbmcgdGhlIGNvcnJlY3QgaW5kZXggb2YgdGhlIGxldHRlciBhbmQgbnVtYmVyXG4gICAgbGV0IGluZGV4ID0gU3RyaW5nKGNvb3JkTGV0dGVyLmNoYXJDb2RlQXQoMCkgLSA2NSkgKyBTdHJpbmcoY29vcmROdW0gLSAxKTtcblxuICAgIHJldHVybiBOdW1iZXIoaW5kZXgpO1xufVxuXG4vLyB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSBpZiBhIHBsYWNlbWVudCBpcyB2YWxpZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG5mdW5jdGlvbiBwbGFjZW1lbnRWYWxpZChpbmRleCwgdmVydGljYWwsIGxlbmd0aCwgYm9hcmQpIHtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSB2ZXJ0aWNhbCBwbGFjZW1lbnQgaXMgdmFsaWQgd2l0aCBhIGZvciBsb29wXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBib2FyZCBhbHJlYWR5IGhhcyBhIHNoaXAgdGhlcmUgb3IgdGhlIHNoaXAgZ29lcyBvdXQgb2YgYm91bmRzXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgKGxlbmd0aCAqIDEwKTsgaSArPSAxMCkge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2ldICE9PSAwIHx8IGkgPiA5OSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2ldICE9PSAwIHx8ICgoaSAlIDEwID09PSAwKSAmJiAoaSA+IGluZGV4KSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoaHVtYW4pIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwMCkuZmlsbCgwKTtcbiAgICAgICAgdGhpcy5jYXJyaWVyID0gY3JlYXRlQ2FycmllcigpO1xuICAgICAgICB0aGlzLmh1bWFuID0gaHVtYW5cbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwID0gY3JlYXRlQmF0dGxlc2hpcCgpO1xuICAgICAgICB0aGlzLmNydWlzZXIgPSBjcmVhdGVDcnVpc2VyKCk7XG4gICAgICAgIHRoaXMuc3VibWFyaW5lID0gY3JlYXRlU3VibWFyaW5lKCk7XG4gICAgICAgIHRoaXMuZGVzdHJveWVyID0gY3JlYXRlRGVzdHJveWVyKCk7XG4gICAgICAgIHRoaXMubWlzc2VkQ29vcmRzID0gW107XG4gICAgICAgIHRoaXMudXNlZENvb3JkcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIHRoZXNlIGZ1bmN0aW9ucyBwbGFjZSBhIHNoaXAgYXQgYSBnaXZlbiBjb29yZGluYXRlIHdpdGggYSBnaXZlbiBvcmllbnRhdGlvblxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBzdWNjZXNzZnVsbHkgcGxhY2VkLCBmYWxzZSBvdGhlcndpc2VcbiAgICBwbGFjZUNhcnJpZXIoY29vcmQsIHZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoaXBJbmRleCA9IGNvb3JkVG9JbmRleChjb29yZCk7XG5cbiAgICAgICAgLy8gZW5zdXJlIHBsYWNlbWVudCBpcyB2YWxpZCBiZWZvcmUgcGxhY2luZyBhdCB0aGUgaW5kZXhcbiAgICAgICAgaWYgKHBsYWNlbWVudFZhbGlkKG5ld1NoaXBJbmRleCwgdmVydGljYWwsIHRoaXMuY2Fycmllci5sZW5ndGgsIHRoaXMuYm9hcmQpKSB7XG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgc2hpcCBpbiB0aGUgY29ycmVjdCBvcmllbnRhdGlvblxuICAgICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5ld1NoaXBJbmRleDsgaSA8IG5ld1NoaXBJbmRleCArICh0aGlzLmNhcnJpZXIubGVuZ3RoICogMTApOyBpICs9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSB0aGlzLmNhcnJpZXIuc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTaGlwSW5kZXg7IGkgPCBuZXdTaGlwSW5kZXggKyB0aGlzLmNhcnJpZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IHRoaXMuY2Fycmllci5zeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGFjZUJhdHRsZXNoaXAoY29vcmQsIHZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoaXBJbmRleCA9IGNvb3JkVG9JbmRleChjb29yZCk7XG5cbiAgICAgICAgLy8gZW5zdXJlIHBsYWNlbWVudCBpcyB2YWxpZCBiZWZvcmUgcGxhY2luZyBhdCB0aGUgaW5kZXhcbiAgICAgICAgaWYgKHBsYWNlbWVudFZhbGlkKG5ld1NoaXBJbmRleCwgdmVydGljYWwsIHRoaXMuYmF0dGxlc2hpcC5sZW5ndGgsIHRoaXMuYm9hcmQpKSB7XG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgc2hpcCBpbiB0aGUgY29ycmVjdCBvcmllbnRhdGlvblxuICAgICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5ld1NoaXBJbmRleDsgaSA8IG5ld1NoaXBJbmRleCArICh0aGlzLmJhdHRsZXNoaXAubGVuZ3RoICogMTApOyBpICs9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSB0aGlzLmJhdHRsZXNoaXAuc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTaGlwSW5kZXg7IGkgPCBuZXdTaGlwSW5kZXggKyB0aGlzLmJhdHRsZXNoaXAubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IHRoaXMuYmF0dGxlc2hpcC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGFjZUNydWlzZXIoY29vcmQsIHZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoaXBJbmRleCA9IGNvb3JkVG9JbmRleChjb29yZCk7XG5cbiAgICAgICAgLy8gZW5zdXJlIHBsYWNlbWVudCBpcyB2YWxpZCBiZWZvcmUgcGxhY2luZyBhdCB0aGUgaW5kZXhcbiAgICAgICAgaWYgKHBsYWNlbWVudFZhbGlkKG5ld1NoaXBJbmRleCwgdmVydGljYWwsIHRoaXMuY3J1aXNlci5sZW5ndGgsIHRoaXMuYm9hcmQpKSB7XG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgc2hpcCBpbiB0aGUgY29ycmVjdCBvcmllbnRhdGlvblxuICAgICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5ld1NoaXBJbmRleDsgaSA8IG5ld1NoaXBJbmRleCArICh0aGlzLmNydWlzZXIubGVuZ3RoICogMTApOyBpICs9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSB0aGlzLmNydWlzZXIuc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTaGlwSW5kZXg7IGkgPCBuZXdTaGlwSW5kZXggKyB0aGlzLmNydWlzZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IHRoaXMuY3J1aXNlci5zeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGFjZVN1Ym1hcmluZShjb29yZCwgdmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgbmV3U2hpcEluZGV4ID0gY29vcmRUb0luZGV4KGNvb3JkKTtcblxuICAgICAgICAvLyBlbnN1cmUgcGxhY2VtZW50IGlzIHZhbGlkIGJlZm9yZSBwbGFjaW5nIGF0IHRoZSBpbmRleFxuICAgICAgICBpZiAocGxhY2VtZW50VmFsaWQobmV3U2hpcEluZGV4LCB2ZXJ0aWNhbCwgdGhpcy5zdWJtYXJpbmUubGVuZ3RoLCB0aGlzLmJvYXJkKSkge1xuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIHNoaXAgaW4gdGhlIGNvcnJlY3Qgb3JpZW50YXRpb25cbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTaGlwSW5kZXg7IGkgPCBuZXdTaGlwSW5kZXggKyAodGhpcy5zdWJtYXJpbmUubGVuZ3RoICogMTApOyBpICs9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSB0aGlzLnN1Ym1hcmluZS5zeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5ld1NoaXBJbmRleDsgaSA8IG5ld1NoaXBJbmRleCArIHRoaXMuc3VibWFyaW5lLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSB0aGlzLnN1Ym1hcmluZS5zeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGFjZURlc3Ryb3llcihjb29yZCwgdmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgbmV3U2hpcEluZGV4ID0gY29vcmRUb0luZGV4KGNvb3JkKTtcblxuICAgICAgICAvLyBlbnN1cmUgcGxhY2VtZW50IGlzIHZhbGlkIGJlZm9yZSBwbGFjaW5nIGF0IHRoZSBpbmRleFxuICAgICAgICBpZiAocGxhY2VtZW50VmFsaWQobmV3U2hpcEluZGV4LCB2ZXJ0aWNhbCwgdGhpcy5kZXN0cm95ZXIubGVuZ3RoLCB0aGlzLmJvYXJkKSkge1xuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIHNoaXAgaW4gdGhlIGNvcnJlY3Qgb3JpZW50YXRpb25cbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTaGlwSW5kZXg7IGkgPCBuZXdTaGlwSW5kZXggKyAodGhpcy5kZXN0cm95ZXIubGVuZ3RoICogMTApOyBpICs9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSB0aGlzLmRlc3Ryb3llci5zeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5ld1NoaXBJbmRleDsgaSA8IG5ld1NoaXBJbmRleCArIHRoaXMuZGVzdHJveWVyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSB0aGlzLmRlc3Ryb3llci5zeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyByZWNlaXZlcyBhbiBhdHRhY2sgb24gYSBwYWlyIG9mIGNvb3JkaW5hdGVzIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IGl0IGhpdCBhIHNoaXBcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIGNvbnN0IGF0dGFja0luZGV4ID0gY29vcmRUb0luZGV4KGNvb3JkKTtcblxuICAgICAgICAvLyB1c2Ugc3dpdGNoIHN0YXRlbWVudCB0byBjYWxsIGhpdCBvbiBjb3JyZWN0IHNoaXAgd2hlbiBpdCBpcyBoaXQgYW5kIG1hcmsgaGl0cyB3aXRoIGFuIFhcbiAgICAgICAgc3dpdGNoICh0aGlzLmJvYXJkW2F0dGFja0luZGV4XSkge1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVyLmhpdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYXR0YWNrSW5kZXhdID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlZENvb3Jkcy5wdXNoKGF0dGFja0luZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgICAgICAgIHRoaXMuYmF0dGxlc2hpcC5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2F0dGFja0luZGV4XSA9ICdYJztcbiAgICAgICAgICAgICAgICB0aGlzLnVzZWRDb29yZHMucHVzaChhdHRhY2tJbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICdSJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNydWlzZXIuaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFthdHRhY2tJbmRleF0gPSAnWCc7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VkQ29vcmRzLnB1c2goYXR0YWNrSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtYXJpbmUuaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFthdHRhY2tJbmRleF0gPSAnWCc7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VkQ29vcmRzLnB1c2goYXR0YWNrSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZXIuaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFthdHRhY2tJbmRleF0gPSAnWCc7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VkQ29vcmRzLnB1c2goYXR0YWNrSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYXR0YWNrSW5kZXhdID0gJ00nO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkQ29vcmRzLnB1c2goYXR0YWNrSW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlZENvb3Jkcy5wdXNoKGF0dGFja0luZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gdHJ1ZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhcnJpZXIuaXNTdW5rKCkgJiYgXG4gICAgICAgICAgICB0aGlzLmJhdHRsZXNoaXAuaXNTdW5rKCkgJiYgXG4gICAgICAgICAgICB0aGlzLmNydWlzZXIuaXNTdW5rKCkgJiZcbiAgICAgICAgICAgIHRoaXMuc3VibWFyaW5lLmlzU3VuaygpICYmXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3llci5pc1N1bmsoKSkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIoaHVtYW4pIHtcbiAgICByZXR1cm4gbmV3IEdhbWVib2FyZChodW1hbik7XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCwgY29vcmRUb0luZGV4LCBwbGFjZW1lbnRWYWxpZCwgY3JlYXRlUGxheWVyIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVCb2FyZE9uRE9NLCBwbGFjZVNoaXBMaXN0ZW5lcnMgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbi8vIGJlZ2luIHdpdGggYSBodW1hbiBwbGF5ZXJcbmxldCBwbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIodHJ1ZSk7XG5cbi8vIGhpZGUgZWxlbWVudHMgdW50aWwgZm9ybSBpcyBjb21wbGV0ZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uLWV4cGxhbmF0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGNyZWF0ZSBwbGF5ZXIgYmFzZWQgb24gdXNlciBpbnB1dCAod2hldGhlciBvciBub3QgdGhleSBjaGVja2VkIHRoZSBib3gpXG4gICAgbGV0IHBsYXllclR3byA9IGNyZWF0ZVBsYXllcighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyJykuY2hlY2tlZCk7XG5cbiAgICAvLyBjbGVhbiB1cCBET01cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmVnaW5uaW5nLWZvcm0nKS5yZW1vdmUoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmllbnRhdGlvbi1leHBsYW5hdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIC8vIGJlZ2luIGJ5IGNyZWF0aW5nIHBsYXllciAxJ3MgYm9hcmQgb24gdGhlIERPTVxuICAgIGNyZWF0ZUJvYXJkT25ET00oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKSk7XG5cbiAgICAvLyBtYWtlIHNlY29uZCBib2FyZCB0YWtlIHVwIG5vIHNwYWNlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1nYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IHBsYXllclR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR1cm4nKTtcbiAgICBjb25zdCBjdXJyU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNoaXAnKTtcblxuICAgIGNvbnN0IHBsYXllck9uZUJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lYm9hcmQtY29udGFpbmVyIC5nYW1lYm9hcmQtYm94XCIpO1xuICAgIGxldCBwbGF5ZXJPbmVCb3hlc0FycmF5ID0gQXJyYXkuZnJvbShwbGF5ZXJPbmVCb3hlcyk7XG5cbiAgICAvLyBzdGFydCBvZmYgd2l0aCB0aGUgYmVnaW5uaW5nIHRleHQgb24gdGhlIHNjcmVlblxuICAgIHBsYXllclR1cm4udGV4dENvbnRlbnQgPSBcIlBsYXllciAxOiBQbGFjZSB5b3VyXCI7XG4gICAgY3VyclNoaXAudGV4dENvbnRlbnQgPSBcIkNhcnJpZXIgKGxlbmd0aCA1KVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLW9uZScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtdHdvJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIHBsYWNlU2hpcExpc3RlbmVycyhwbGF5ZXJPbmUsIHBsYXllck9uZUJveGVzQXJyYXksICdDJywgdHJ1ZSwgcGxheWVyT25lLCBwbGF5ZXJUd28sIHBsYXllclR3by5odW1hbilcbn0pOyIsIi8vIGZhY3RvcnkgZnVuY3Rpb25zIGZvciBkaWZmZXJlbnQgdHlwZXMgb2Ygc2hpcHMgb2YgdmFyeWluZyBsZW5ndGhzXG5mdW5jdGlvbiBjcmVhdGVDYXJyaWVyKCkge1xuICAgIHJldHVybiBuZXcgU2hpcCg1LCAnQycpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCYXR0bGVzaGlwKCkge1xuICAgIHJldHVybiBuZXcgU2hpcCg0LCAnQicpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDcnVpc2VyKCkge1xuICAgIHJldHVybiBuZXcgU2hpcCgzLCAnUicpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtYXJpbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBTaGlwKDMsICdTJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc3Ryb3llcigpIHtcbiAgICByZXR1cm4gbmV3IFNoaXAoMiwgJ0QnKTtcbn1cblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBzeW1ib2wpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLm51bUhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgICsrdGhpcy5udW1IaXRzO1xuICAgIH1cblxuICAgIC8vIHJldHVybiB0cnVlIG9yIGZhbHNlIGlmIHRoZSBzaGlwIGlzIHN1bmsgb3Igbm90XG4gICAgaXNTdW5rKCkge1xuICAgICAgICAvLyBzaGlwIGlzIHN1bmsgd2hlbiBpdCBoYXMgYmVlbiBoaXQgYXMgbWFueSB0aW1lcyBhcyBpdHMgbGVuZ3RoXG4gICAgICAgIGlmICh0aGlzLm51bUhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgICB9XG59XG5cbmV4cG9ydCB7IFNoaXAsIGNyZWF0ZUNhcnJpZXIsIGNyZWF0ZUJhdHRsZXNoaXAsIGNyZWF0ZUNydWlzZXIsIGNyZWF0ZVN1Ym1hcmluZSwgY3JlYXRlRGVzdHJveWVyIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9