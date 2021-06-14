/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #efefef;\\r\\n  color: rgba(48, 48, 48, 1);\\r\\n  font-family: Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* nav */\\r\\n\\r\\n.nav {\\r\\n  position: sticky;\\r\\n  z-index: 200;\\r\\n  background: #efefef;\\r\\n  width: 100%;\\r\\n  padding: 0px 12.5%;\\r\\n  height: 70px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  justify-content: space-between;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.nav_button {\\r\\n  background: #00D100;\\r\\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);\\r\\n  width: 38px;\\r\\n  height: 38px;\\r\\n  /* margin-left: 10px; */\\r\\n  color: #efefef;\\r\\n  border-radius: 50%;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  font-size: 36px !important;\\r\\n  transition: all 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.nav_button.open {\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.nav .material-icons {\\r\\n  font-size: 48px;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n#search {\\r\\n  display: inline-block;\\r\\n  font-size: 16px;\\r\\n  color: black;\\r\\n  outline: none;\\r\\n  border-radius: 10px;\\r\\n  height: 40px;\\r\\n  width: 300px;\\r\\n  padding: 0 5px;\\r\\n}\\r\\n\\r\\n/* images and image grid */\\r\\n\\r\\n.images {\\r\\n  display: grid;\\r\\n  margin: 15px auto;\\r\\n  max-width: 75%;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr 1fr;\\r\\n  grid-gap: 15px;\\r\\n}\\r\\n\\r\\n.grid_image {\\r\\n  width: 100%;\\r\\n  display: inline-block;\\r\\n  border-radius: 10px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.grid_image-container {\\r\\n  position: relative;\\r\\n  cursor: pointer;\\r\\n  overflow: hidden;\\r\\n  display: inline-block;\\r\\n  border-radius: 10px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.grid_image-container:hover {\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.grid_image-banner {\\r\\n  display: inline-block;\\r\\n  color: #EFEFEF;\\r\\n  width: inherit;\\r\\n  height: 60px;\\r\\n  position: absolute;\\r\\n  /* background-color: rgba(0, 0, 0, 0.05); */\\r\\n  background: linear-gradient(\\r\\n    to bottom,\\r\\n    rgba(129, 129, 129, 0.4),\\r\\n    rgba(255, 0, 0, 0)\\r\\n  );\\r\\n  padding: 0 10px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.grid_image-banner a {\\r\\n  color: #EFEFEF;\\r\\n}\\r\\n\\r\\n.grid_image-banner .delete-icon,\\r\\n.grid_image-banner .download-icon {\\r\\n  font-size: 48px;\\r\\n  opacity: 80%;\\r\\n}\\r\\n\\r\\n.grid_image-banner .image-name {\\r\\n  padding: 0 5px;\\r\\n  white-space: nowrap;\\r\\n  overflow: hidden;\\r\\n  font-size: 24px;\\r\\n  opacity: 80%;\\r\\n}\\r\\n\\r\\n.grid_image-banner .delete-icon:hover,\\r\\n.grid_image-banner .download-icon:hover {\\r\\n  opacity: 100%;\\r\\n}\\r\\n\\r\\n/* form */\\r\\n\\r\\n.form-background {\\r\\n  z-index: 199;\\r\\n  backdrop-filter: blur(5px);\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\n#image-form {\\r\\n  z-index: 199;\\r\\n  position: fixed;\\r\\n  background: #efefef;\\r\\n  top: 30%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  width: 30%;\\r\\n  margin-left: 35%;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n  border-radius: 14px;\\r\\n  padding: 10px 15px;\\r\\n}\\r\\n\\r\\n#image-form input,\\r\\n#image-form button {\\r\\n  margin-top: 10px;\\r\\n  font-size: 20px;\\r\\n  text-align: center;\\r\\n  font-family: inherit;\\r\\n}\\r\\n\\r\\n#file-drag label,\\r\\n#image-form p {\\r\\n  display: inline-block;\\r\\n  width: 100%;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n#file-drag label {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#file-drag label:hover {\\r\\n  color: rgb(47, 47, 230);\\r\\n}\\r\\n\\r\\n#image-form button {\\r\\n  /* background: rgba(48, 48, 48, 1); */\\r\\n  background-color: #00D100;\\r\\n  border-radius: 10px;\\r\\n  align-self: center;\\r\\n  padding: 5px;\\r\\n  cursor: pointer;\\r\\n  width: 70%;\\r\\n  border: none;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n#image-form button:hover {\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n  transform: translateY(-2px);\\r\\n}\\r\\n\\r\\n#image-input {\\r\\n  border: none;\\r\\n  width: 50%;\\r\\n  align-self: center;\\r\\n  padding: 5px;\\r\\n  border-radius: 8px;\\r\\n  cursor: pointer;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n#image-input[type=\\\"file\\\"] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#upload-wrapper {\\r\\n  display: flex;\\r\\n  margin: 5px auto;\\r\\n  width: 70%;\\r\\n  border-color: rgba(48, 48, 48, 1);\\r\\n  border-width: 3px;\\r\\n  border-style: dashed;\\r\\n  border-radius: 10px;\\r\\n  height: 250px;\\r\\n  text-align: center;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  overflow: hidden;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#file-drag {\\r\\n  width: 90%;\\r\\n  height: 90%;\\r\\n  flex-direction: column;\\r\\n  background-color: rgb(212, 212, 212);\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  display: flex;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#file-drag .material-icons {\\r\\n  font-size: 36px !important;\\r\\n}\\r\\n\\r\\n#preview img {\\r\\n  width: 90%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.image-name-container {\\r\\n  display: flex;\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.image-name-container label {\\r\\n  display: inline-block;\\r\\n  font-size: 24px;\\r\\n  width: 20%;\\r\\n  color: black;\\r\\n  padding-top: 4px;\\r\\n}\\r\\n\\r\\n.image-name-container input {\\r\\n  display: inline-block;\\r\\n  width: 80%;\\r\\n  font-size: 16px;\\r\\n  color: black;\\r\\n  outline: none;\\r\\n  border-radius: 10px;\\r\\n  height: 35px;\\r\\n  padding: 0 5px;\\r\\n  text-align: left !important;\\r\\n}\\r\\n\\r\\n/* animations and transitions */\\r\\n\\r\\n.v-enter-from,\\r\\n.v-leave-to {\\r\\n  transform: translateY(-20px);\\r\\n  opacity: 0%;\\r\\n}\\r\\n\\r\\n.v-enter-active,\\r\\n.v-leave-active {\\r\\n  transition: all 0.5s ease;\\r\\n}\\r\\n\\r\\n.v-enter-to,\\r\\n.v-leave-from {\\r\\n  transform: translateY(0);\\r\\n  opacity: 100%;\\r\\n}\\r\\n\\r\\n.banner-enter-from,\\r\\n.banner-leave-to {\\r\\n  transform: translateY(-40px);\\r\\n  opacity: 0%;\\r\\n}\\r\\n\\r\\n.banner-enter-active,\\r\\n.banner-leave-active {\\r\\n  transition: all 0.5s ease;\\r\\n}\\r\\n\\r\\n.banner-enter-to,\\r\\n.banner-leave-from {\\r\\n  transform: translateY(0);\\r\\n  opacity: 100%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://front-end/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://front-end/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://front-end/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://front-end/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    data() {\r\n        return {\r\n            file: null,\r\n            fileName: null,\r\n            imageUrl: '',\r\n            images: [],\r\n            showForm: false,\r\n            search: null,\r\n            filteredImages: [],\r\n        };\r\n    },\r\n    computed: {\r\n        previewUrl() {\r\n            if (this.file) {\r\n                return URL.createObjectURL(this.file);\r\n            }\r\n        },\r\n    },\r\n    methods: {\r\n        newFile() {\r\n            this.file = this.$refs.file.files[0];\r\n        },\r\n        showTheForm() {\r\n            this.showForm = !this.showForm;\r\n        },\r\n        gotDragFile(data) {\r\n            this.file = data[0];\r\n            Object.defineProperty(this.file, 'name', {\r\n                writable: true,\r\n                value: 'name.jpg',\r\n            });\r\n            console.log(data[0]);\r\n        },\r\n        updateFileName(e) {\r\n            this.fileName = e.target.value;\r\n            Object.defineProperty(this.file, 'name', {\r\n                writable: true,\r\n                value: e.target.value + '.jpg',\r\n            });\r\n        },\r\n        searchImages() {\r\n            console.log(this.search);\r\n            this.filteredImages = this.images.filter((image) => image.name.includes(this.search));\r\n        },\r\n        async pushImage(e) {\r\n            e.preventDefault();\r\n            let fd = new FormData();\r\n            fd.append('fileName', this.fileName);\r\n            fd.append('image', this.file);\r\n            const response = await fetch('http://localhost:8080/image-upload', {\r\n                method: 'POST',\r\n                body: fd,\r\n            });\r\n            const responseData = await response.json();\r\n            // this.imageUrl = responseData.path.toString();\r\n            this.images.unshift({\r\n                path: responseData.path.toString(),\r\n                name: responseData.name,\r\n            });\r\n            this.showForm = false;\r\n            this.file = null;\r\n            this.fileName = null;\r\n        },\r\n        async sendImageDeletion(imagePath) {\r\n            const response = await fetch('http://localhost:8080/delete-image', {\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                method: 'DELETE',\r\n                body: JSON.stringify({ imagePath: imagePath }),\r\n            });\r\n            const responseData = await response.json();\r\n            this.images = responseData.images;\r\n        },\r\n    },\r\n    async created() {\r\n        const response = await fetch('http://localhost:8080/all', {\r\n            method: 'GET',\r\n        });\r\n        const responseData = await response.json();\r\n        this.images = responseData.images;\r\n        // console.log(JSON.parse(JSON.stringify(this.images))[0].imageUrl);\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack://front-end/./src/app/app.js?");

/***/ }),

/***/ "./src/app/components/app-image.js":
/*!*****************************************!*\
  !*** ./src/app/components/app-image.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    template: `\r\n    <div class=\"grid_image-container\" @mouseenter=\"showTheBanner\" @mouseleave=\"showTheBanner\">\r\n      <transition name=\"banner\">\r\n        <div v-if=\"showBanner\" class=\"grid_image-banner\">\r\n          <a :download=\"path\" :href=\"'http://localhost:8080/image-download/' + imageName\"><p class=\"material-icons md-48 download-icon\">download_for_offline</p></a>\r\n          <p class=\"image-name\">{{ name }}</p>\r\n          <p class=\"material-icons md-48 delete-icon\" @click=\"deleteImage\">cancel</p>\r\n        </div>\r\n      </transition>\r\n      <img\r\n        :src=\"path\"\r\n        class=\"grid_image\"\r\n        alt=\"\"\r\n      />\r\n    </div>\r\n    `,\r\n    props: ['path', 'name'],\r\n    data() {\r\n        return {\r\n            showBanner: false,\r\n        };\r\n    },\r\n    computed: {\r\n        imageName() {\r\n            return this.path.split('/')[2];\r\n        },\r\n    },\r\n    methods: {\r\n        showTheBanner() {\r\n            this.showBanner = !this.showBanner;\r\n        },\r\n        showUrl() {\r\n            console.log(this.path);\r\n        },\r\n        deleteImage(event) {\r\n            const image = event.target.parentElement.nextElementSibling;\r\n            const imagePath = image.src;\r\n            this.$emit('deleteThisImage', imagePath);\r\n        },\r\n        // async downloadImage(event) {\r\n        //   const image = event.target;\r\n        //   imageName = image.src.split(\"/\")[12];\r\n        //   await fetch(`http://localhost:8080/image-download/${imageName}`, {\r\n        //     method: \"GET\",\r\n        //     // mode: \"no-cors\",\r\n        //   });\r\n        //   // console.log(response);\r\n        //   // response.download;\r\n        //   // const responseBlob = await response.blob();\r\n        //   // responseBlob.download;\r\n        //   // console.log(URL.createObjectURL(responseBlob));\r\n        // }\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack://front-end/./src/app/components/app-image.js?");

/***/ }),

/***/ "./src/app/components/upload-area.js":
/*!*******************************************!*\
  !*** ./src/app/components/upload-area.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    template: `\r\n        <div @drop.prevent=\"fileReceipt\" @propagation.prevent @dragenter.prevent @dragover.prevent id=\"file-drag\" ref=\"fileform\"><slot></slot></div>\r\n      `,\r\n    data() {\r\n        return {\r\n            dragAndDropCapable: false,\r\n            files: [],\r\n        };\r\n    },\r\n    methods: {\r\n        determineDragAndDropCapable() {\r\n            let div = document.createElement('div');\r\n            return ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;\r\n        },\r\n        fileReceipt(e) {\r\n            this.$emit('gotDragFile', e.dataTransfer.files);\r\n        },\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack://front-end/./src/app/components/upload-area.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.js */ \"./src/app/app.js\");\n/* harmony import */ var _app_components_app_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/app-image.js */ \"./src/app/components/app-image.js\");\n/* harmony import */ var _app_components_upload_area_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/upload-area.js */ \"./src/app/components/upload-area.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\nconst app = Vue.createApp(_app_app_js__WEBPACK_IMPORTED_MODULE_0__.default);\r\n\r\napp.component('upload-area', _app_components_upload_area_js__WEBPACK_IMPORTED_MODULE_2__.default);\r\n\r\napp.component('app-image', _app_components_app_image_js__WEBPACK_IMPORTED_MODULE_1__.default);\r\n\r\napp.mount('#app');\r\n\n\n//# sourceURL=webpack://front-end/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;