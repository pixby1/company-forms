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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */,
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "superagent"
var external_superagent_ = __webpack_require__(3);

// EXTERNAL MODULE: ./assets/common-components/componentHead.js
var componentHead = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/common-components/TopMenuBar.js
var TopMenuBar = __webpack_require__(7);

// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(9);
var external_react_table_default = /*#__PURE__*/__webpack_require__.n(external_react_table_);

// EXTERNAL MODULE: ./assets/common-components/CompanyContactSidebar.js
var CompanyContactSidebar = __webpack_require__(8);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/companyContactPage/AddCategoryForm.js
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




var testOptions = [{
  text: "Test",
  value: "test",
  key: 1
}, {
  text: "Test 2",
  value: "test 2",
  key: 2
}];
var requireFormData = ["nombre"];

var AddCategoryForm_AddCategoryForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddCategoryForm, _React$Component);

  function AddCategoryForm(props) {
    var _this;

    _classCallCheck(this, AddCategoryForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddCategoryForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateFormData", function (willSubmit) {
      return function (e) {
        var addCategoryFormEls = $("form[name=addCategoryForm]")[0].elements;
        var isFormValid = true;
        var formError = _this.state.formError;
        var formData = {};
        requireFormData.forEach(function (field) {
          if (!addCategoryFormEls[field].value) {
            formError[field] = true;
            isFormValid = false;
          } else {
            formError[field] = false;
            formData[field] = addCategoryFormEls[field].value;
          }
        });

        _this.setState({
          isFormValid: isFormValid,
          formError: formError
        }, function () {
          if (_this.state.isFormValid && willSubmit) {
            var selectedParentCategory = _this.props.categoriasEmpresasList.find(function (a) {
              return a._id === _this.state.parentCategory;
            });

            formData.id_padre = selectedParentCategory ? selectedParentCategory._id : "";
            formData.nivel = selectedParentCategory ? selectedParentCategory.nivel + 1 : 0;

            _this.submitCategoryForm(formData);
          }
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeParentCategory", function (e, data) {
      _this.setState({
        parentCategory: data.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitCategoryForm", function (formData) {
      if (_this.props.isEditingCategory) {
        formData._id = _this.props.editingCategory._id;
      }

      external_superagent_["post"](_this.props.isEditingCategory ? "".concat(hostname, "/api/update-category") : "".concat(hostname, "/api/add-category")).send(formData).set("accept", "json").end(function (err, res) {
        if (!err) {
          console.log(res);

          _this.props.closeModal();
        }
      });
    });

    _this.state = {
      formError: {
        nombre: false
      },
      parentCategory: "",
      isFormValid: true
    };
    return _this;
  }

  _createClass(AddCategoryForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isEditingCategory) {
        $("input[name=nombre]").val(this.props.editingCategory.nombre);
        this.setState({
          parentCategory: this.props.editingCategory.id_padre
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          formError = _this$state.formError,
          isFormValid = _this$state.isFormValid;
      var parentCategoryOptions = this.props.categoriasEmpresasList.map(function (category, index) {
        return {
          text: category.nombre,
          value: category._id,
          key: index + 1
        };
      });
      parentCategoryOptions.splice(0, 0, {
        text: "None",
        value: "",
        key: 0
      });
      return external_react_default.a.createElement(external_semantic_ui_react_["Card"], {
        className: "addCategoryFormContainer"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Card"].Header, null, "Nuevo Rubro"), external_react_default.a.createElement(external_semantic_ui_react_["Card"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Form"], {
        error: !isFormValid,
        name: "addCategoryForm",
        className: "addCategoryForm"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        error: formError.nombre,
        name: "nombre",
        label: "Nombre",
        type: "text",
        onChange: this.validateFormData(false)
      }), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Field, null, external_react_default.a.createElement("label", null, "Pertenece a:"), external_react_default.a.createElement(external_semantic_ui_react_["Dropdown"], {
        options: parentCategoryOptions,
        selection: true,
        onChange: this.changeParentCategory,
        value: this.state.parentCategory
      })), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Field, null, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        onClick: this.validateFormData(true),
        color: "teal"
      }, "Submit")))));
    }
  }]);

  return AddCategoryForm;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./assets/styles/categoryManagement.css
var categoryManagement = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/react-table/react-table.css
var react_table = __webpack_require__(11);

// CONCATENATED MODULE: ./pages/company-contact/category.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return category_default; });


function category_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { category_typeof = function _typeof(obj) { return typeof obj; }; } else { category_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return category_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function category_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function category_possibleConstructorReturn(self, call) { if (call && (category_typeof(call) === "object" || typeof call === "function")) { return call; } return category_assertThisInitialized(self); }

function category_getPrototypeOf(o) { category_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return category_getPrototypeOf(o); }

function category_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function category_createClass(Constructor, protoProps, staticProps) { if (protoProps) category_defineProperties(Constructor.prototype, protoProps); if (staticProps) category_defineProperties(Constructor, staticProps); return Constructor; }

function category_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) category_setPrototypeOf(subClass, superClass); }

function category_setPrototypeOf(o, p) { category_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return category_setPrototypeOf(o, p); }

function category_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function category_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var category_default =
/*#__PURE__*/
function (_React$Component) {
  category_inherits(_default, _React$Component);

  category_createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var req, db, _categoriasEmpresasList, _ref2, categoriasEmpresasList;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;

                if (!req) {
                  _context.next = 8;
                  break;
                }

                db = req.db;
                _context.next = 5;
                return db.collection("categorias_empresas").find().toArray();

              case 5:
                _categoriasEmpresasList = _context.sent;

                _categoriasEmpresasList.sort(function (a, b) {
                  if (a.nivel === b.nivel) {
                    return a._id - b._id;
                  } else {
                    return a.nivel - b.nivel;
                  }
                });

                return _context.abrupt("return", {
                  categoriasEmpresasList: _categoriasEmpresasList
                });

              case 8:
                _context.next = 10;
                return external_superagent_["get"]("/api/getCategoriasEmpresas").then(function (res) {
                  return res.body;
                });

              case 10:
                _ref2 = _context.sent;
                categoriasEmpresasList = _ref2.categoriasEmpresasList;
                return _context.abrupt("return", {
                  categoriasEmpresasList: categoriasEmpresasList
                });

              case 13:
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

    category_classCallCheck(this, _default);

    _this = category_possibleConstructorReturn(this, category_getPrototypeOf(_default).call(this, props));

    category_defineProperty(category_assertThisInitialized(category_assertThisInitialized(_this)), "startAddingCategory", function () {
      _this.setState({
        isAddingCategory: true
      });
    });

    category_defineProperty(category_assertThisInitialized(category_assertThisInitialized(_this)), "processData", function () {
      var processedCategoriasEmpresasList = [];
      var categoryChildrenRecord = {};

      _this.props.categoriasEmpresasList.forEach(function (category, index) {
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

    category_defineProperty(category_assertThisInitialized(category_assertThisInitialized(_this)), "startEditingCategory", function (categoryData) {
      return function (e) {
        _this.setState({
          isEditingCategory: true,
          editin: categoryData
        });
      };
    });

    category_defineProperty(category_assertThisInitialized(category_assertThisInitialized(_this)), "closeModal", function () {
      _this.setState({
        isAddingCategory: false,
        isEditingCategory: false,
        editin: {}
      });
    });

    _this.state = {
      isAddingCategory: false,
      isEditingCategory: false,
      editingCategory: {}
    };
    return _this;
  }

  category_createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var processedCategoriasEmpresasList = this.processData();
      return external_react_default.a.createElement("div", {
        className: "companyContactPage"
      }, external_react_default.a.createElement(componentHead["a" /* default */], null, "Rubros"), external_react_default.a.createElement(TopMenuBar["a" /* default */], null), external_react_default.a.createElement(CompanyContactSidebar["a" /* PageSidebar */], null), external_react_default.a.createElement("div", {
        className: "categoryManagement"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Modal"], {
        open: this.state.isAddingCategory || this.state.isEditingCategory,
        basic: true
      }, external_react_default.a.createElement(AddCategoryForm_AddCategoryForm, {
        closeModal: this.closeModal,
        editingCategory: this.state.editin,
        isEditingCategory: this.state.isEditingCategory,
        categoriasEmpresasList: this.props.categoriasEmpresasList
      })), external_react_default.a.createElement("div", {
        className: "pageHeader"
      }, external_react_default.a.createElement("p", {
        className: "pageTitle"
      }, "Rubros de Empresas"), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        onClick: this.startAddingCategory,
        size: "small",
        color: "blue"
      }, "+ Nuevo Rubro")), external_react_default.a.createElement(external_react_table_default.a, {
        className: "-striped -highlight",
        data: processedCategoriasEmpresasList,
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
              icon: "edit",
              onClick: _this2.startEditingCategory(thisRowData),
              color: "blue"
            }));
          }
        }]
      })));
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

/***/ })
/******/ ]);