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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! superagent */ "superagent");
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
        css: "div.jsx-2679399884{font-family:\"Helvetica\",\"sans-serif\";}#container.jsx-2679399884{width:800px;margin-left:auto;margin-right:auto;}h1.jsx-2679399884{color:#ccbc1d;}button.jsx-2679399884{background-color:#ff257b;color:#ffffff;font-weight:bold;border:0px;border-radius:2px;padding:5px;padding-left:8px;padding-right:8px;margin:5px;}input.jsx-2679399884{padding:5px;border:0px;background-color:#f0f0f0;margin:5px;}.description.jsx-2679399884{position:relative;top:-0.2em;}.remove.jsx-2679399884{cursor:pointer;color:#ff257b;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaXJvYWtpby9XZWItRGVzaWduL0ZyZWVsYW5jZXIvZm9ybS1tYWtpbmcvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlvQixBQUdtRCxBQUcxQixBQUtFLEFBR1csQUFXYixBQU1NLEFBSUgsWUE1QkUsQUFtQk4sRUFkYixDQXdCZ0IsR0FKSCxLQUxjLEVBWlgsSUFQSSxBQXlCcEIsQUFJa0IsUUFqQ2xCLEVBWW1CLE1Bc0JuQixFQTdCQSxDQW1CYSxRQVhBLEdBWWIsUUFYb0Isa0JBQ04sWUFDSyxpQkFDQyxrQkFDUCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9qaXJvYWtpby9XZWItRGVzaWduL0ZyZWVsYW5jZXIvZm9ybS1tYWtpbmcvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBzdXBlcmFnZW50IGZyb20gXCJzdXBlcmFnZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xuICAgICAgY29uc29sZS5sb2coZGIpO1xuICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGRiXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiQ29tcGFueVwiKVxuICAgICAgICAuZmluZCgpXG4gICAgICAgIC5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KVxuICAgICAgICAudG9BcnJheSgpO1xuICAgICAgcmV0dXJuIHsgbGlzdCB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbGlzdCB9ID0gYXdhaXQgc3VwZXJhZ2VudFxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuYm9keSk7XG4gICAgcmV0dXJuIHsgbGlzdCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBmb3JtRGF0YTogeyBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiB9IH07XG4gIH1cblxuICBzZXRGb3JtKHByb3ApIHtcbiAgICByZXR1cm4gZXYgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBzdGF0ZS5mb3JtRGF0YSB8fCB7fTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZm9ybURhdGE6IE9iamVjdC5hc3NpZ24oe30sIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICBbcHJvcF06IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICBpc0Zvcm1JbnZhbGlkKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHN0YXRlLmZvcm1EYXRhIHx8IHt9O1xuICAgIHJldHVybiAhZm9ybURhdGEubmFtZSB8fCAhZm9ybURhdGEuZGVzY3JpcHRpb247XG4gIH1cblxuICByZW1vdmUoX2lkKSB7XG4gICAgcmV0dXJuIGV2ID0+IHtcbiAgICAgIHN1cGVyYWdlbnRcbiAgICAgICAgLmRlbChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8ke19pZH1gKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLmxpc3QgfHwgdGhpcy5wcm9wcy5saXN0IHx8IFtdO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICBsaXN0OiBsaXN0LmZpbHRlcihjb21wYW55ID0+IGNvbXBhbnkuX2lkICE9PSBfaWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKSk7XG4gICAgfTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICByZXR1cm4gZXYgPT4ge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gc3RhdGUuZm9ybURhdGEgfHwge307XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgZm9ybURhdGE6IHsgbmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIiwgZm9ybURhdGEpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLmxpc3QgfHwgdGhpcy5wcm9wcy5saXN0IHx8IFtdO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICBsaXN0OiBbcmVzLmJvZHkuY29tcGFueV0uY29uY2F0KGxpc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKSk7XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5zdGF0ZS5saXN0IHx8IHRoaXMucHJvcHMubGlzdDtcbiAgICBjb25zdCB7IGZvcm1EYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5OZXcgQ29tcGFueTwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJpbnB1dC1jb21wYW55XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkKCl9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybShcIm5hbWVcIil9XG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55IE5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldEZvcm0oXCJkZXNjcmlwdGlvblwiKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmF1dGhvcn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5pc0Zvcm1JbnZhbGlkKCl9PkFkZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMT5Db21wYW55IExpc3Q8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwiY29tcGFueS1saXN0XCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2xpc3QubWFwKGNvbXBhbnkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tcGFueS5faWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbW92ZVwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlKGNvbXBhbnkuX2lkKX0+XG4gICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8aT57Y29tcGFueS5uYW1lfTwvaT5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IHtjb21wYW55LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJzYW5zLXNlcmlmXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjY2NiYzFkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjU3YjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAtMC4yZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZW1vdmUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZjI1N2I7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/jiroakio/Web-Design/Freelancer/form-making/pages/index.js */"
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=index.js.map