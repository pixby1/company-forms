module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_3__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




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
        var req, db, _list, _ref2, list;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;

                if (!req) {
                  _context.next = 8;
                  break;
                }

                db = req.db;
                console.log(db);
                _context.next = 6;
                return db.collection("Company").find().sort({
                  createdAt: -1
                }).toArray();

              case 6:
                _list = _context.sent;
                return _context.abrupt("return", {
                  list: _list
                });

              case 8:
                _context.next = 10;
                return superagent__WEBPACK_IMPORTED_MODULE_3__["get"]("http://localhost:3000/api").then(function (res) {
                  return res.body;
                });

              case 10:
                _ref2 = _context.sent;
                list = _ref2.list;
                return _context.abrupt("return", {
                  list: list
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

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));
    _this.state = {
      formData: {
        name: "",
        description: ""
      }
    };
    return _this;
  }

  _createClass(_default, [{
    key: "setForm",
    value: function setForm(prop) {
      var _this2 = this;

      return function (ev) {
        var state = _this2.state || {};
        var formData = state.formData || {};

        _this2.setState(Object.assign({}, state, {
          formData: Object.assign({}, formData, _defineProperty({}, prop, ev.target.value))
        }));
      };
    }
  }, {
    key: "isFormInvalid",
    value: function isFormInvalid() {
      var state = this.state || {};
      var formData = state.formData || {};
      return !formData.name || !formData.description;
    }
  }, {
    key: "remove",
    value: function remove(_id) {
      var _this3 = this;

      return function (ev) {
        superagent__WEBPACK_IMPORTED_MODULE_3__["del"]("http://localhost:3000/api/".concat(_id)).then(function () {
          var state = _this3.state || {};
          var list = _this3.state.list || _this3.props.list || [];

          _this3.setState(Object.assign({}, state, {
            list: list.filter(function (company) {
              return company._id !== _id;
            })
          }));
        }).catch(function (error) {
          return console.error(error.stack);
        });
      };
    }
  }, {
    key: "add",
    value: function add() {
      var _this4 = this;

      return function (ev) {
        ev.preventDefault();
        var state = _this4.state || {};
        var formData = state.formData || {};

        _this4.setState(Object.assign({}, _this4.state, {
          formData: {
            name: "",
            description: ""
          }
        }));

        superagent__WEBPACK_IMPORTED_MODULE_3__["post"]("http://localhost:3000/api", formData).then(function (res) {
          var state = _this4.state || {};
          var list = _this4.state.list || _this4.props.list || [];

          _this4.setState(Object.assign({}, state, {
            list: [res.body.company].concat(list)
          }));
        }).catch(function (error) {
          return console.error(error.stack);
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var list = this.state.list || this.props.list;
      var formData = this.state.formData;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "container",
        className: "jsx-2679399884"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2679399884"
      }, "New Company"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "input-company",
        className: "jsx-2679399884"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.add(),
        className: "jsx-2679399884"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        onChange: this.setForm("name"),
        value: formData.title,
        placeholder: "Company Name",
        className: "jsx-2679399884"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        onChange: this.setForm("description"),
        value: formData.author,
        placeholder: "Description",
        className: "jsx-2679399884"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        disabled: this.isFormInvalid(),
        className: "jsx-2679399884"
      }, "Add"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2679399884"
      }, "Company List"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "company-list",
        className: "jsx-2679399884"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "jsx-2679399884"
      }, list.map(function (company) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: company._id,
          className: "jsx-2679399884"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          onClick: _this5.remove(company._id),
          className: "jsx-2679399884" + " " + "remove"
        }, "\xD7"), "\xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "jsx-2679399884" + " " + "description"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
          className: "jsx-2679399884"
        }, company.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
          className: "jsx-2679399884"
        }), "Description: ", company.description));
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2679399884",
        css: ["div.jsx-2679399884{font-family:\"Helvetica\",\"sans-serif\";}", "#container.jsx-2679399884{width:800px;margin-left:auto;margin-right:auto;}", "h1.jsx-2679399884{color:#ccbc1d;}", "button.jsx-2679399884{background-color:#ff257b;color:#ffffff;font-weight:bold;border:0px;border-radius:2px;padding:5px;padding-left:8px;padding-right:8px;margin:5px;}", "input.jsx-2679399884{padding:5px;border:0px;background-color:#f0f0f0;margin:5px;}", ".description.jsx-2679399884{position:relative;top:-0.2em;}", ".remove.jsx-2679399884{cursor:pointer;color:#ff257b;font-size:1.5em;}"]
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ })
/******/ ]);