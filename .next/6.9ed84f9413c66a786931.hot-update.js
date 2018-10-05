webpackHotUpdate(6,{

/***/ "./components/tag-label.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsxFileName = "/Users/mike-macbook/Desktop/Projects/matrixki/components/tag-label.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var tagLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(tagLabel, _React$Component);

  function tagLabel(props) {
    var _this;

    _classCallCheck(this, tagLabel);

    _this = _possibleConstructorReturn(this, (tagLabel.__proto__ || Object.getPrototypeOf(tagLabel)).call(this, props));
    _this.state = {
      tag: []
    };
    return _this;
  }

  _createClass(tagLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.tagId) {
        var url = 'https://blog.matrixki.com/wp-json/wp/v2/tags/' + this.props.tagId;
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (res) {
          return res.data;
        }).then(function (tag) {
          console.log(tag);

          _this2.setState(function (state, props) {
            return {
              tag: tag
            };
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "tag-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.state.tag.name);
    }
  }]);

  return tagLabel;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;
/* harmony default export */ __webpack_exports__["a"] = (tagLabel);

/***/ })

})
//# sourceMappingURL=6.9ed84f9413c66a786931.hot-update.js.map