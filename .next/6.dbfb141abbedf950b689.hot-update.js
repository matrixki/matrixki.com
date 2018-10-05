webpackHotUpdate(6,{

/***/ "./components/cat-label.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsxFileName = "/Users/mike-macbook/Desktop/Projects/matrixki/components/cat-label.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CatLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CatLabel, _React$Component);

  function CatLabel(props) {
    var _this;

    _classCallCheck(this, CatLabel);

    _this = _possibleConstructorReturn(this, (CatLabel.__proto__ || Object.getPrototypeOf(CatLabel)).call(this, props));
    _this.state = {
      cat: []
    };
    return _this;
  }

  _createClass(CatLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.catId) {
        var url = 'https://blog.matrixki.com/wp-json/wp/v2/categories/' + this.props.catId;
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (res) {
          return res.data;
        }).then(function (cat) {
          console.log(cat);

          _this2.setState(function (state, props) {
            return {
              cat: cat
            };
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "cat-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.state.cat.name);
    }
  }]);

  return CatLabel;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;
/* harmony default export */ __webpack_exports__["a"] = (CatLabel);

/***/ })

})
//# sourceMappingURL=6.dbfb141abbedf950b689.hot-update.js.map