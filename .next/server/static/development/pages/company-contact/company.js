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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/common-components/CompanyContactSidebar.js":
/*!***********************************************************!*\
  !*** ./assets/common-components/CompanyContactSidebar.js ***!
  \***********************************************************/
/*! exports provided: PageSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSidebar", function() { return PageSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_companyContactSidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/companyContactSidebar.css */ "./assets/styles/companyContactSidebar.css");
/* harmony import */ var _styles_companyContactSidebar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_companyContactSidebar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
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

/***/ "./assets/common-components/TopMenuBar.js":
/*!************************************************!*\
  !*** ./assets/common-components/TopMenuBar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
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

/***/ "./assets/common-components/componentHead.js":
/*!***************************************************!*\
  !*** ./assets/common-components/componentHead.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
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

/***/ "./assets/styles/addCompany.css":
/*!**************************************!*\
  !*** ./assets/styles/addCompany.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/styles/companyContactSidebar.css":
/*!*************************************************!*\
  !*** ./assets/styles/companyContactSidebar.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/companyContactPage/AddCompanyForm.js":
/*!*********************************************************!*\
  !*** ./components/companyContactPage/AddCompanyForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styles_addCompany_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/styles/addCompany.css */ "./assets/styles/addCompany.css");
/* harmony import */ var _assets_styles_addCompany_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_addCompany_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_5__);
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

var _default =
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
      superagent__WEBPACK_IMPORTED_MODULE_1__["post"]("".concat(hostname, "/api/add-company")).send(formData).set("accept", "json").end(function (err, res) {
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "newCompanyPage"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "newCompany"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, "Editar Empresa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        error: !this.state.isFormValid,
        name: "newCompanyForm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        error: this.state.formError.nombre,
        label: "Denominaci\xF3n",
        name: "nombre",
        onChange: this.validateForm()
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Una vez que guarde los cambios podr\xE1 asignar los Rubros a la Empresa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "toggleEditCategory",
        toggle: true,
        active: this.state.editingCategory,
        onClick: function onClick() {
          _this2.setState({
            editingCategory: !_this2.state.editingCategory
          });
        }
      }, "Editar Rubros"), this.props.isAddingCompany || (!this.state.editingCategory ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "formGroup1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        error: this.state.formError.direccion,
        label: "Direcci\xF3n",
        name: "direccion",
        onChange: this.validateForm()
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        error: this.state.formError.provincia
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Provincia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
        name: "provincia",
        fluid: true,
        labeled: true,
        options: testProvinciaOptions,
        selection: true,
        placeholder: "Seleccionar Provincia",
        onChange: this.handleDropdownSelection,
        value: this.state.formDropdown.provincia
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        error: this.state.formError.ciudad
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Ciudad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
        name: "ciudad",
        fluid: true,
        labeled: true,
        options: testProvinciaOptions,
        selection: true,
        placeholder: "Ciudad",
        onChange: this.handleDropdownSelection,
        value: this.state.formDropdown.ciudad
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        label: "CP",
        name: "cp"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        label: "Pais",
        name: "pais",
        onChange: this.validateForm()
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        label: "C\xF3digo",
        name: "codigo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        error: this.state.formError.telefono,
        label: "Tel\xE9fono",
        name: "telefono",
        onChange: this.validateForm()
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        label: "Fax",
        name: "fax"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        error: this.state.formError.mail,
        label: "Mail",
        name: "mail",
        type: "email",
        onChange: this.validateForm()
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        error: this.state.formError.web,
        label: "Web",
        name: "web",
        onChange: this.validateForm()
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        error: this.state.formError.cuit,
        label: "CUIT",
        name: "cuit",
        onChange: this.validateForm()
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].TextArea, {
        label: "Observaciones",
        name: "descripcion"
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editCategoryForm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "familyTreeIndicator",
              style: {
                width: thisRowData.nivel > 0 ? 30 + "px" : "0",
                height: thisRowData.nivel === 0 ? "0" : "15px",
                marginLeft: 5 + thisRowData.nivel * 30 + "px"
              }
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, row.value));
          }
        }, {
          Header: "Actions",
          width: 150,
          Cell: function Cell(row) {
            var thisRowData = row.original;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              icon: "delete",
              onClick: function onClick() {
                return _this2.deleteCategory(thisRowData);
              },
              color: "red"
            }));
          }
        }]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Select Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "familyTreeIndicator",
              style: {
                width: thisRowData.nivel > 0 ? 30 + "px" : "0",
                height: thisRowData.nivel === 0 ? "0" : "15px",
                marginLeft: 5 + thisRowData.nivel * 30 + "px"
              }
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, row.value));
          }
        }, {
          Header: "Actions",
          width: 150,
          Cell: function Cell(row) {
            var thisRowData = row.original;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              icon: "add",
              onClick: function onClick() {
                return _this2.addCategory(thisRowData);
              },
              color: "blue"
            }));
          }
        }]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.validateForm(true),
        color: "green"
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        onClick: this.props.cancelAddingCompany,
        color: "red"
      }, "Cancel"))))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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

/***/ }),

/***/ "./node_modules/react-table/react-table.css":
/*!**************************************************!*\
  !*** ./node_modules/react-table/react-table.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/company-contact/company.js":
/*!******************************************!*\
  !*** ./pages/company-contact/company.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_common_components_componentHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/common-components/componentHead */ "./assets/common-components/componentHead.js");
/* harmony import */ var _assets_common_components_TopMenuBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/common-components/TopMenuBar */ "./assets/common-components/TopMenuBar.js");
/* harmony import */ var _assets_common_components_CompanyContactSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/common-components/CompanyContactSidebar */ "./assets/common-components/CompanyContactSidebar.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_companyContactPage_AddCompanyForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/companyContactPage/AddCompanyForm */ "./components/companyContactPage/AddCompanyForm.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_9__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, db, _companyList, _categoriasEmpresasList, _ref2, companyList, _ref3, categoriasEmpresasList;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                return superagent__WEBPACK_IMPORTED_MODULE_9__["get"]("".concat(hostname, "/api/getCompanyList")).then(function (res) {
                  return res.body;
                });

              case 13:
                _ref2 = _context.sent;
                companyList = _ref2.companyList;
                _context.next = 17;
                return superagent__WEBPACK_IMPORTED_MODULE_9__["get"]("/api/getCategoriasEmpresas").then(function (res) {
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

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startAddingCompany", function () {
      _this.setState({
        isAddingCompany: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startEditCompany", function (e, data) {
      _this.setState({
        isEditingCompany: true,
        editingCompany: data.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancelAddingCompany", function () {
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

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isAddingCompany = _this$state.isAddingCompany,
          isEditingCompany = _this$state.isEditingCompany;
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "companyContactPage"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
        basic: true,
        style: {
          padding: "10px"
        },
        open: isAddingCompany || isEditingCompany ? true : false
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_companyContactPage_AddCompanyForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        categoryList: this.props.categoriasEmpresasList,
        isAddingCompany: isAddingCompany,
        cancelAddingCompany: this.cancelAddingCompany,
        companyInfo: this.props.companyList.find(function (a) {
          return a._id === _this2.state.editingCompany;
        })
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_common_components_componentHead__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Empresas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_common_components_TopMenuBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_common_components_CompanyContactSidebar__WEBPACK_IMPORTED_MODULE_5__["PageSidebar"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "companyManagement"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "actionButtons"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: "blue",
        size: "tiny"
      }, "Eliminar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: "blue",
        size: "tiny"
      }, "Nuevo Contacto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.startAddingCompany,
        color: "blue",
        size: "tiny"
      }, "Nuevo Empresa")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "companyListActions"
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ 3:
/*!************************************************!*\
  !*** multi ./pages/company-contact/company.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/company-contact/company.js */"./pages/company-contact/company.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ })

/******/ });
//# sourceMappingURL=company.js.map