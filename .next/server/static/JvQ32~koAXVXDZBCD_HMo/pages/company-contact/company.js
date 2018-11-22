module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/semantic.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
    crossorigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/semantic.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", null, "const hostname = window.location.origin"));
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "topMenuBar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/company-contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Emparesas & Contactos")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_companyContactSidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _styles_companyContactSidebar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_companyContactSidebar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var PageSidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageSidebar, _React$Component);

  function PageSidebar(props) {
    var _this;

    _classCallCheck(this, PageSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMenuItemClick", function (clickedItem) {
      return function (e) {
        _this.setState({
          activeMenuItem: clickedItem
        });
      };
    });

    _this.state = {
      activeMenuItem: ""
    };
    return _this;
  }

  _createClass(PageSidebar, [{
    key: "render",
    value: function render() {
      var activeMenuItem = this.state.activeMenuItem;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pageSidebar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
        className: "sidebarMenu",
        vertical: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/company-contact/contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        name: "contact",
        active: activeMenuItem === "contact",
        onClick: this.handleMenuItemClick("contact")
      }, "Contactos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/company-contact/company",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        onClick: this.handleMenuItemClick("company"),
        name: "company",
        active: activeMenuItem === "company"
      }, "Empresas")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/company-contact/category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        onClick: this.handleMenuItemClick("category"),
        name: "category",
        active: activeMenuItem === "category"
      }, "Rubors"))));
    }
  }]);

  return PageSidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(9);
var external_react_table_default = /*#__PURE__*/__webpack_require__.n(external_react_table_);

// EXTERNAL MODULE: ./assets/common-components/componentHead.js
var componentHead = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/common-components/TopMenuBar.js
var TopMenuBar = __webpack_require__(7);

// EXTERNAL MODULE: ./assets/common-components/CompanyContactSidebar.js
var CompanyContactSidebar = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/react-table/react-table.css
var react_table = __webpack_require__(11);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1);

// EXTERNAL MODULE: external "superagent"
var external_superagent_ = __webpack_require__(3);

// EXTERNAL MODULE: ./assets/styles/addCompany.css
var addCompany = __webpack_require__(13);

// CONCATENATED MODULE: ./components/companyContactPage/AddCompanyForm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var testProvinciaOptions = [{
  text: "Test",
  value: "test",
  key: 1
}, {
  text: "Test 2",
  value: "test 2",
  key: 2
}];
var requiredFields = ["nombre", "direccion", "pais", "provincia", "ciudad", "telefono", "mail", "cuit", "web"];
var otherFields = ["cp", "descripcion", "codigo", "fax"];

var AddCompanyForm_default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateForm", function (willSubmit) {
      return function (e) {
        if (_this.state.isFormValid && !willSubmit) {
          return;
        }

        var formError = _this.state.formError;
        var isFormValid = true;
        var formData = {};
        var newCompanyForm = $("form[name=newCompanyForm]")[0];
        var formEls = newCompanyForm.elements;
        requiredFields.forEach(function (fieldName) {
          var field = formEls[fieldName];

          if (field) {
            if (field.value.length === 0) {
              formError[fieldName] = true;
              isFormValid = false;
            } else {
              formError[fieldName] = false;
              formData[fieldName] = field.value;
            }
          }
        });

        if (_this.state.formDropdown.provincia.length === 0) {
          formError.provincia = true;
          isFormValid = false;
        } else {
          formData.provincia = _this.state.formDropdown.provincia;
        }

        if (_this.state.formError.ciudad.length === 0) {
          formError.ciudad = true;
          isFormValid = false;
        } else {
          formData.ciudad = _this.state.formDropdown.ciudad;
        }

        _this.setState({
          isFormValid: isFormValid,
          formError: formError
        });

        if (isFormValid && willSubmit) {
          otherFields.forEach(function (field) {
            formData[field] = formEls[field].value;
          });

          _this.submitForm(formData);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitForm", function (formData) {
      console.log(formData);
      external_superagent_["post"]("".concat(hostname, "/api/add-company")).send(formData).set("accept", "json").end(function (err, res) {
        console.log(err, res);

        if (!err) {
          window.location.reload();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDropdownSelection", function (e, data) {
      var _this$state = _this.state,
          formDropdown = _this$state.formDropdown,
          formError = _this$state.formError;
      formDropdown[data.name] = data.value;
      formError[data.name] = false;

      _this.setState({
        formDropdown: formDropdown,
        formError: formError
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "processCategoryData", function (categoryList) {
      var processedCategoriasEmpresasList = [];
      var categoryChildrenRecord = {};
      console.log(categoryList, "here");
      categoryList.forEach(function (category, index) {
        (function () {
          if (category.nivel === 0) {
            processedCategoriasEmpresasList.push(category);
          } else {
            var parentPos = findElementPos(processedCategoriasEmpresasList, category.id_padre);

            if (categoryChildrenRecord[category.id_padre] !== 0 && !categoryChildrenRecord[category.id_padre]) {
              categoryChildrenRecord[category.id_padre] = 0;
            }

            var parentsChildren = categoryChildrenRecord[category.id_padre];
            processedCategoriasEmpresasList.splice(1 + parentPos + parentsChildren, 0, category);
            categoryChildrenRecord[category.id_padre] += 1;
          }
        })();
      });
      return processedCategoriasEmpresasList;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addCategory", function (category) {
      var companyCategories = _this.state.companyCategories;

      if (companyCategories.indexOf(category._id) === -1) {
        companyCategories.push(category._id);

        _this.setState({
          companyCategories: companyCategories
        }, function () {
          console.log(_this.state.companyCategories);

          if (category.nivel !== 0) {
            console.log(_this.props.categoryList);

            var thisCategoryParent = _this.props.categoryList.find(function (a) {
              return a._id === category.id_padre;
            });

            console.log("parent", thisCategoryParent);

            _this.addCategory(thisCategoryParent);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deleteCategory", function (category) {
      var companyCategories = _this.state.companyCategories;

      var processCompanyCategories = _this.prepareCompanyCategories(companyCategories);

      console.log("test here", processCompanyCategories);

      if (companyCategories.indexOf(category._id) > -1) {
        var listOfCategoryID = processCompanyCategories.map(function (a) {
          return a._id;
        });
        var deleteCategoryPos = listOfCategoryID.indexOf(category._id);
        var totalDeletedCategories = deleteCategoryPos + 1;

        for (var i = deleteCategoryPos + 1; i < processCompanyCategories.length; i++) {
          console.log(processCompanyCategories[i]);

          if (processCompanyCategories[i].nivel !== 0) {
            totalDeletedCategories++;
          } else if (processCompanyCategories[i].nivel === 0) {
            i = processCompanyCategories.length;
          }
        }

        console.log(deleteCategoryPos, totalDeletedCategories);
        processCompanyCategories.splice(deleteCategoryPos, totalDeletedCategories - deleteCategoryPos);
        var newCompanyCategories = processCompanyCategories.map(function (a) {
          return a._id;
        });

        _this.setState({
          companyCategories: newCompanyCategories
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prepareCompanyCategories", function (rawCompanyCategories) {
      var companyCategories = rawCompanyCategories.map(function (categoryID) {
        return _this.props.categoryList.find(function (a) {
          return a._id === categoryID;
        });
      });
      companyCategories.sort(function (a, b) {
        if (a.nivel === b.nivel) {
          return b._id - a._id;
        } else {
          return a.nivel - b.nivel;
        }
      });
      return _this.processCategoryData(companyCategories);
    });

    _this.state = {
      formError: {
        nombre: false,
        direccion: false,
        pais: false,
        provincia: false,
        ciudad: false,
        telefono: false,
        mail: false,
        cuit: false,
        web: false
      },
      isFormValid: false,
      formDropdown: {
        provincia: "",
        ciudad: ""
      },
      editingCategory: false,
      companyCategories: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.isAddingCompany) {
        var formElements = $("form[name=newCompanyForm]")[0].elements;
        var editingCompanyInfo = this.props.companyInfo;
        formElements.cuit.value = editingCompanyInfo.cuit;
        formElements.direccion.value = editingCompanyInfo.direccion;
        formElements.nombre.value = editingCompanyInfo.nombre;
        formElements.mail.value = editingCompanyInfo.mail;
        formElements.pais.value = editingCompanyInfo.pais;
        formElements.telefono.value = editingCompanyInfo.telefono;
        formElements.web.value = editingCompanyInfo.web;
        formElements.fax.value = editingCompanyInfo.fax;
        formElements.codigo.value = editingCompanyInfo.codigo;
        formElements.cp.value = editingCompanyInfo.cp;
        var formDropdown = this.state.formDropdown;
        formDropdown.ciudad = editingCompanyInfo.ciudad;
        formDropdown.provincia = editingCompanyInfo.provincia;
        this.setState({
          formDropdown: formDropdown
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var companyCategories = this.prepareCompanyCategories(this.state.companyCategories);
      return external_react_default.a.createElement("div", {
        className: "newCompanyPage"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Card"], {
        className: "newCompany"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Card"].Header, null, "Editar Empresa"), external_react_default.a.createElement(external_semantic_ui_react_["Card"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Form"], {
        error: !this.state.isFormValid,
        name: "newCompanyForm"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        error: this.state.formError.nombre,
        label: "Denominaci\xF3n",
        name: "nombre",
        onChange: this.validateForm()
      }), external_react_default.a.createElement("p", null, "Una vez que guarde los cambios podr\xE1 asignar los Rubros a la Empresa"), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        className: "toggleEditCategory",
        toggle: true,
        active: this.state.editingCategory,
        onClick: function onClick() {
          _this2.setState({
            editingCategory: !_this2.state.editingCategory
          });
        }
      }, "Editar Rubros"), this.props.isAddingCompany || (!this.state.editingCategory ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Group, {
        className: "formGroup1"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        error: this.state.formError.direccion,
        label: "Direcci\xF3n",
        name: "direccion",
        onChange: this.validateForm()
      }), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Field, {
        error: this.state.formError.provincia
      }, external_react_default.a.createElement("label", null, "Provincia"), external_react_default.a.createElement(external_semantic_ui_react_["Dropdown"], {
        name: "provincia",
        fluid: true,
        labeled: true,
        options: testProvinciaOptions,
        selection: true,
        placeholder: "Seleccionar Provincia",
        onChange: this.handleDropdownSelection,
        value: this.state.formDropdown.provincia
      }))), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Group, null, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Field, {
        error: this.state.formError.ciudad
      }, external_react_default.a.createElement("label", null, "Ciudad"), external_react_default.a.createElement(external_semantic_ui_react_["Dropdown"], {
        name: "ciudad",
        fluid: true,
        labeled: true,
        options: testProvinciaOptions,
        selection: true,
        placeholder: "Ciudad",
        onChange: this.handleDropdownSelection,
        value: this.state.formDropdown.ciudad
      })), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        label: "CP",
        name: "cp"
      })), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Group, null, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        label: "Pais",
        name: "pais",
        onChange: this.validateForm()
      }), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        label: "C\xF3digo",
        name: "codigo"
      })), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Group, null, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        error: this.state.formError.telefono,
        label: "Tel\xE9fono",
        name: "telefono",
        onChange: this.validateForm()
      }), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        label: "Fax",
        name: "fax"
      })), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Group, null, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        error: this.state.formError.mail,
        label: "Mail",
        name: "mail",
        type: "email",
        onChange: this.validateForm()
      }), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        error: this.state.formError.web,
        label: "Web",
        name: "web",
        onChange: this.validateForm()
      })), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Group, null, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        error: this.state.formError.cuit,
        label: "CUIT",
        name: "cuit",
        onChange: this.validateForm()
      })), external_react_default.a.createElement(external_semantic_ui_react_["Form"].TextArea, {
        label: "Observaciones",
        name: "descripcion"
      })) : external_react_default.a.createElement("div", {
        className: "editCategoryForm"
      }, external_react_default.a.createElement(external_react_table_default.a, {
        className: "-striped -highlight",
        data: companyCategories,
        defaultPageSize: 100,
        style: {
          height: "400px"
        },
        showPageSizeOptions: false,
        columns: [{
          Header: "Rubro",
          accessor: "nombre",
          Cell: function Cell(row) {
            var thisRowData = row.original;
            return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
              className: "familyTreeIndicator",
              style: {
                width: thisRowData.nivel > 0 ? 30 + "px" : "0",
                height: thisRowData.nivel === 0 ? "0" : "15px",
                marginLeft: 5 + thisRowData.nivel * 30 + "px"
              }
            }), external_react_default.a.createElement("div", null, row.value));
          }
        }, {
          Header: "Actions",
          width: 150,
          Cell: function Cell(row) {
            var thisRowData = row.original;
            return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
              icon: "delete",
              onClick: function onClick() {
                return _this2.deleteCategory(thisRowData);
              },
              color: "red"
            }));
          }
        }]
      }), external_react_default.a.createElement("p", null, "Select Category"), external_react_default.a.createElement(external_react_table_default.a, {
        className: "-striped -highlight",
        data: this.processCategoryData(this.props.categoryList),
        defaultPageSize: 100,
        style: {
          height: "400px"
        },
        showPageSizeOptions: false,
        columns: [{
          Header: "Rubro",
          accessor: "nombre",
          Cell: function Cell(row) {
            var thisRowData = row.original;
            return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
              className: "familyTreeIndicator",
              style: {
                width: thisRowData.nivel > 0 ? 30 + "px" : "0",
                height: thisRowData.nivel === 0 ? "0" : "15px",
                marginLeft: 5 + thisRowData.nivel * 30 + "px"
              }
            }), external_react_default.a.createElement("div", null, row.value));
          }
        }, {
          Header: "Actions",
          width: 150,
          Cell: function Cell(row) {
            var thisRowData = row.original;
            return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
              icon: "add",
              onClick: function onClick() {
                return _this2.addCategory(thisRowData);
              },
              color: "blue"
            }));
          }
        }]
      }))), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Field, null, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        onClick: this.validateForm(true),
        color: "green"
      }, "Submit"), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        type: "button",
        onClick: this.props.cancelAddingCompany,
        color: "red"
      }, "Cancel"))))));
    }
  }]);

  return _default;
}(external_react_default.a.Component);



var findElementPos = function findElementPos(array, elID) {
  var pos = -1;
  array.forEach(function (el, index) {
    if (pos !== -1) {
      return;
    }

    if (el._id.toString() === elID) {
      pos = index;
    }
  });
  return pos;
};
// CONCATENATED MODULE: ./pages/company-contact/company.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return company_default; });


function company_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { company_typeof = function _typeof(obj) { return typeof obj; }; } else { company_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return company_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function company_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function company_possibleConstructorReturn(self, call) { if (call && (company_typeof(call) === "object" || typeof call === "function")) { return call; } return company_assertThisInitialized(self); }

function company_getPrototypeOf(o) { company_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return company_getPrototypeOf(o); }

function company_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function company_createClass(Constructor, protoProps, staticProps) { if (protoProps) company_defineProperties(Constructor.prototype, protoProps); if (staticProps) company_defineProperties(Constructor, staticProps); return Constructor; }

function company_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) company_setPrototypeOf(subClass, superClass); }

function company_setPrototypeOf(o, p) { company_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return company_setPrototypeOf(o, p); }

function company_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function company_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var company_default =
/*#__PURE__*/
function (_React$Component) {
  company_inherits(_default, _React$Component);

  company_createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var req, db, _companyList, _categoriasEmpresasList, _ref2, companyList, _ref3, categoriasEmpresasList;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;

                if (!req) {
                  _context.next = 11;
                  break;
                }

                db = req.db;
                _context.next = 5;
                return db.collection("Company").find().toArray();

              case 5:
                _companyList = _context.sent;
                _context.next = 8;
                return db.collection("categorias_empresas").find().toArray();

              case 8:
                _categoriasEmpresasList = _context.sent;

                _categoriasEmpresasList.sort(function (a, b) {
                  if (a.nivel === b.nivel) {
                    return a._id - b._id;
                  } else {
                    return a.nivel - b.nivel;
                  }
                });

                return _context.abrupt("return", {
                  companyList: _companyList,
                  categoriasEmpresasList: _categoriasEmpresasList
                });

              case 11:
                _context.next = 13;
                return external_superagent_["get"]("".concat(hostname, "/api/getCompanyList")).then(function (res) {
                  return res.body;
                });

              case 13:
                _ref2 = _context.sent;
                companyList = _ref2.companyList;
                _context.next = 17;
                return external_superagent_["get"]("/api/getCategoriasEmpresas").then(function (res) {
                  return res.body;
                });

              case 17:
                _ref3 = _context.sent;
                categoriasEmpresasList = _ref3.categoriasEmpresasList;
                return _context.abrupt("return", {
                  companyList: companyList,
                  categoriasEmpresasList: categoriasEmpresasList
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function _default(props) {
    var _this;

    company_classCallCheck(this, _default);

    _this = company_possibleConstructorReturn(this, company_getPrototypeOf(_default).call(this, props));

    company_defineProperty(company_assertThisInitialized(company_assertThisInitialized(_this)), "startAddingCompany", function () {
      _this.setState({
        isAddingCompany: true
      });
    });

    company_defineProperty(company_assertThisInitialized(company_assertThisInitialized(_this)), "startEditCompany", function (e, data) {
      _this.setState({
        isEditingCompany: true,
        editingCompany: data.value
      });
    });

    company_defineProperty(company_assertThisInitialized(company_assertThisInitialized(_this)), "cancelAddingCompany", function () {
      _this.setState({
        isAddingCompany: false
      });
    });

    _this.state = {
      isAddingCompany: false,
      isEditingCompany: false,
      editingCompany: ""
    };
    return _this;
  }

  company_createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isAddingCompany = _this$state.isAddingCompany,
          isEditingCompany = _this$state.isEditingCompany;
      console.log(this.props);
      return external_react_default.a.createElement("div", {
        className: "companyContactPage"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Modal"], {
        basic: true,
        style: {
          padding: "10px"
        },
        open: isAddingCompany || isEditingCompany ? true : false
      }, external_react_default.a.createElement(AddCompanyForm_default, {
        categoryList: this.props.categoriasEmpresasList,
        isAddingCompany: isAddingCompany,
        cancelAddingCompany: this.cancelAddingCompany,
        companyInfo: this.props.companyList.find(function (a) {
          return a._id === _this2.state.editingCompany;
        })
      })), external_react_default.a.createElement(componentHead["a" /* default */], null, "Empresas"), external_react_default.a.createElement(TopMenuBar["a" /* default */], null), external_react_default.a.createElement(CompanyContactSidebar["a" /* PageSidebar */], null), external_react_default.a.createElement("div", {
        className: "companyManagement"
      }, external_react_default.a.createElement("div", {
        className: "actionButtons"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        color: "blue",
        size: "tiny"
      }, "Eliminar"), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        color: "blue",
        size: "tiny"
      }, "Nuevo Contacto"), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        onClick: this.startAddingCompany,
        color: "blue",
        size: "tiny"
      }, "Nuevo Empresa")), external_react_default.a.createElement(external_react_table_default.a, {
        className: "-striped -highlight",
        data: this.props.companyList,
        pageSize: 5,
        columns: [{
          Header: "Nombre",
          accessor: "nombre"
        }, {
          Header: "Tel",
          accessor: "telefono"
        }, {
          Header: "Mail",
          accessor: "mail"
        }, {
          Header: "Action",
          accessor: "1",
          Cell: function Cell(row) {
            return external_react_default.a.createElement("div", {
              className: "companyListActions"
            }, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
              name: "edit",
              icon: "edit",
              value: row.original._id,
              onClick: _this2.startEditCompany
            }));
          }
        }]
      })));
    }
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ })
/******/ ]);