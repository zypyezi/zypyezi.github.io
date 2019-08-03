(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactRedux = __webpack_require__(109);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(61);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(108);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import store from 'SRC/store/index'


_reactDom2.default.render(
// <Provider store={store}>
_react2.default.createElement(_index2.default, null)
// </Provider>

, document.getElementById('root'));

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(110);

var _Home = __webpack_require__(63);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Routes = function Routes() {
    return _react2.default.createElement(_reactRouterDom.HashRouter, null, _react2.default.createElement(_reactRouterDom.Switch, null, _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default })));
};

exports.default = Routes;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(64);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(69);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(70);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(74);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(100);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.jump = function () {
            location.href = 'http://yezizhang.com/docs/vue/index.html';
        };

        _this.renderTitle = function () {
            return _react2.default.createElement('div', { className: 'transition-down' }, _react2.default.createElement('p', { className: 'title', key: 'title' }, 'Yezi Zhang'), _react2.default.createElement('p', { className: 'subtitle', key: 'subtitle' }, 'my only sunshine'));
        };

        _this.renderContent = function () {
            return _react2.default.createElement('div', { className: 'pos-r ta-l oh mt-60' }, _react2.default.createElement('div', { className: 'title1' }, 'Works'), _react2.default.createElement('div', { className: 'ml-20' }, _react2.default.createElement('div', { className: 'box' }, 'Easy-use-ui')));
        };

        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { onClick: this.jump, className: 'ta-c' }, this.renderTitle(), this.renderContent());
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;

/***/ })

},[[52,1,2]]]);