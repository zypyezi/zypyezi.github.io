(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(169);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
   return obj && obj.__esModule ? obj : { default: obj };
}

var PopRight = function (_Component) {
   (0, _inherits3.default)(PopRight, _Component);

   function PopRight(props) {
      (0, _classCallCheck3.default)(this, PopRight);
      return (0, _possibleConstructorReturn3.default)(this, (PopRight.__proto__ || (0, _getPrototypeOf2.default)(PopRight)).call(this, props));
   }

   (0, _createClass3.default)(PopRight, [{
      key: 'handleClick',
      value: function handleClick(e) {
         e.stopPropagation;
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             popData = _props.popData,
             show = _props.show;

         return _react2.default.createElement('div', { className: _index2.default.popright, style: { width: show ? '450px' : '0px' }, onClick: this.handleClick }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: popData }, className: _index2.default.content }));
      }
   }]);
   return PopRight;
}(_react.Component);

exports.default = PopRight;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(170);

var _index2 = _interopRequireDefault(_index);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var renderMethod = {
    renderText: function renderText(_ref) {
        var content = _ref.content;

        return _react2.default.createElement('div', { className: _index2.default.block }, content);
    },
    renderUrl: function renderUrl(_ref2) {
        var _ref2$content = _ref2.content,
            content = _ref2$content === undefined ? 'demo' : _ref2$content,
            _ref2$url = _ref2.url,
            url = _ref2$url === undefined ? '' : _ref2$url;

        return _react2.default.createElement('a', { href: url, target: '_blank', className: _index2.default.block }, content);
    },
    renderTitle: function renderTitle(_ref3) {
        var content = _ref3.content;

        return _react2.default.createElement('div', { className: _index2.default.title }, content);
    },
    renderSubTitle: function renderSubTitle(_ref4) {
        var content = _ref4.content;

        return _react2.default.createElement('div', { className: _index2.default.subtitle }, content);
    },
    renderBold: function renderBold(_ref5) {
        var content = _ref5.content;

        return _react2.default.createElement('div', { className: _index2.default.bold }, content);
    },
    renderUl: function renderUl(_ref6) {
        var _ref6$content = _ref6.content,
            content = _ref6$content === undefined ? [] : _ref6$content;

        return _react2.default.createElement('ul', { className: _index2.default.ul }, content.map(function (item, index) {
            return _react2.default.createElement('li', { key: index }, index + 1, '. ', item);
        }));
    },
    renderCSS: function renderCSS(_ref7) {
        var content = _ref7.content;

        return _react2.default.createElement('pre', null, _react2.default.createElement('code', { className: 'language-css' }, content));
    },
    renderJS: function renderJS(_ref8) {
        var content = _ref8.content;

        return _react2.default.createElement('pre', null, _react2.default.createElement('code', { className: 'language-javascript' }, content));
    },
    renderHtml: function renderHtml(_ref9) {
        var content = _ref9.content;

        return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content } });
    },
    renderPop: function renderPop(_ref10, props) {
        var content = _ref10.content,
            html = _ref10.html;

        return _react2.default.createElement('div', { className: _index2.default.pop }, html, _react2.default.createElement('svg', { onClick: function onClick(e) {
                return props.showPop(e, true, content);
            }, className: 'icon ' + _index2.default.icon + ' cp', 'aria-hidden': 'true' }, _react2.default.createElement('use', { xlinkHref: '#icontip' })));
    }
};

exports.default = function (data, props) {
    return _react2.default.createElement('div', null, data.map(function (item) {
        if (item.type == 'renderPop') {
            return renderMethod[item.type](item, props);
        } else {
            return renderMethod[item.type](item);
        }
    }));
};

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
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
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.summary = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _JS = __webpack_require__(72);

var _Vue = __webpack_require__(84);

var _MobileQuestion = __webpack_require__(93);

var _React = __webpack_require__(97);

var _Css = __webpack_require__(100);

var _Webpack = __webpack_require__(105);

var _Math = __webpack_require__(108);

var _Http = __webpack_require__(110);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var summary = exports.summary = [(0, _extends3.default)({}, _JS.jsData), (0, _extends3.default)({}, _Vue.vueData), (0, _extends3.default)({}, _MobileQuestion.MQData), (0, _extends3.default)({}, _React.ReactData), (0, _extends3.default)({}, _Webpack.webpackData), (0, _extends3.default)({}, _Css.CssData), (0, _extends3.default)({}, _Math.MathData), (0, _extends3.default)({}, _Http.HttpData)];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.jsData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _JS = __webpack_require__(168);

var _JS2 = _interopRequireDefault(_JS);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var jsData = exports.jsData = {
    title: 'JS',
    id: 'Js',
    component: _JS2.default,
    subtitle: 'js相关知识',
    path: '/js',
    default: '/dataType',
    navData: [{
        name: 'js基础知识',
        submenus: [{
            name: '数据类型',
            id: 'dataType'
        }, {
            name: '闭包',
            id: 'bibao'
        }, {
            name: 'this',
            id: 'this'
        }, {
            name: '原型',
            id: 'propotype'
        }, {
            name: 'js中常见异步',
            id: 'sync'
        }, {
            name: '事件循环',
            id: 'eventLoop'
        }, {
            name: '订阅发布模式',
            id: 'pubsub'
        }, {
            name: '单例模式',
            id: 'singleton'
        }, {
            name: '缓存',
            id: 'cache'
        }, {
            name: 'jsonp',
            id: 'jsonp'
        }, {
            name: 'xss攻击',
            id: 'xss'
        }, {
            name: '杂记',
            id: 'all'
        }]
    }, {
        name: 'es6',
        submenus: [{
            name: 'var 和 let const',
            id: 'let'
        }, {
            name: 'promise',
            id: 'promise'
        }, {
            name: 'proxy',
            id: 'proxy'
        }, {
            name: 'class',
            id: 'class'
        }, {
            name: 'module',
            id: 'module'
        }]
    }, {
        name: '正则',
        submenus: [{
            name: '基础类校验',
            id: 'baseRegexp'
        }]
    }, {
        name: '常用的js方法',
        submenus: [{
            name: '基础类',
            id: 'basemethods'
        }]
    }]
};

var navData = jsData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(171)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: '事件委托'
}, {
    type: 'renderHtml',
    content: '\n            <text>\u4E5F\u79F0\u4F5C\u4E8B\u4EF6\u4EE3\u7406\uFF0C\u5229\u7528\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u53EA\u6307\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF0C\u5C31\u53EF\u4EE5\u7BA1\u7406\u67D0\u4E00\u7C7B\u578B\u7684\u6240\u6709\u4E8B\u4EF6</text>\n            <text>\u4F7F\u7528\u4E8B\u4EF6\u4EE3\u7406\u7684\u4F18\u70B9\uFF1A</text>\n            <text>1. \u51CF\u5C11\u5185\u5B58\uFF0C\u5C06\u4E0Edom\u7684\u4EA4\u4E92\u64CD\u4F5C\u51CF\u5C11\u4E3A1\u6B21\uFF0C\u63D0\u5347\u6027\u80FD</text>\n            <text>2. \u52A8\u6001\u63D2\u5165\u7684\u5B50\u5143\u7D20\u4ECD\u65E7\u53EF\u4EE5\u76D1\u542C\u5230\u4E8B\u4EF6</text>\n            <text>\u83B7\u53D6\u5B9E\u9645\u64CD\u4F5Cdom\u8282\u70B9  event.target || event.srcElement</text>\n        '
}, {
    type: 'renderPop',
    html: 'DOM事件流阶段',
    content: '\n            <title>DOM\u4E8B\u4EF6\u6D41\u9636\u6BB5</title>\n            <p>DOM\u4E8B\u4EF6\u6D41\u5B58\u5728\u4E09\u4E2A\u9636\u6BB5\uFF0C\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5\u3001\u76EE\u6807\u9636\u6BB5\u3001\u5192\u6CE1\u3010\u4E8B\u4EF6\u76D1\u542C\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E3Afalse\uFF0C \u9ED8\u8BA4\u503C\u3011\u9636\u6BB5</p>\n\n\n            <codeBlock>\n                <p>\u5F53\u4E8B\u4EF6\u6355\u83B7\u548C\u4E8B\u4EF6\u5192\u6CE1 \u4E00\u8D77\u5B58\u5728\u65F6</p>\n                <code>1.document \u5F80 target\u8282\u70B9\uFF0C\u6355\u83B7\u524D\u8FDB\uFF0C\u9047\u5230\u6CE8\u518C\u7684\u6355\u83B7\u4E8B\u4EF6\u7ACB\u5373\u89E6\u53D1\u6267\u884C</code>\n                <code>2.\u5230\u8FBEtarget\u8282\u70B9\uFF0C\u89E6\u53D1\u4E8B\u4EF6\uFF08\u5BF9\u4E8Etarget\u8282\u70B9\u4E0A\uFF0C\u662F\u5148\u6355\u83B7\u8FD8\u662F\u5148\u5192\u6CE1\u5219\u6355\u83B7\u4E8B\u4EF6\u548C\u5192\u6CE1\u4E8B\u4EF6\u7684\u6CE8\u518C\u987A\u5E8F\uFF0C\u5148\u6CE8\u518C\u5148\u6267\u884C\uFF09</code>\n                <code>3.target\u8282\u70B9 \u5F80 document \u65B9\u5411\uFF0C\u5192\u6CE1\u524D\u8FDB\uFF0C\u9047\u5230\u6CE8\u518C\u7684\u5192\u6CE1\u4E8B\u4EF6\u7ACB\u5373\u89E6\u53D1</code>\n            </codeBlock>\n\n            <p>\n            stopPropagation\u65B9\u6CD5\u963B\u6B62\u4E8B\u4EF6\u5728 DOM \u4E2D\u7EE7\u7EED\u4F20\u64AD\uFF0C\u9632\u6B62\u518D\u89E6\u53D1\u5B9A\u4E49\u5728\u522B\u7684\u8282\u70B9\u4E0A\u7684\u76D1\u542C\u51FD\u6570\uFF0C\u4F46\u662F\u4E0D\u5305\u62EC\u5728\u5F53\u524D\u8282\u70B9\u4E0A\u5176\u4ED6\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\u3002\n            \u65E2\u53EF\u4EE5\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4E5F\u53EF\u4EE5\u963B\u6B62\u4E8B\u4EF6\u6355\u83B7\uFF0C\u4E5F\u53EF\u4EE5\u963B\u6B62\u5904\u4E8E\u76EE\u6807\u9636\u6BB5\n            </p>\n            <p>stopImmediatePropagation\u65B9\u6CD5\u963B\u6B62\u540C\u4E00\u4E2A\u4E8B\u4EF6\u7684\u5176\u4ED6\u76D1\u542C\u51FD\u6570\u88AB\u8C03\u7528\uFF0C\u4E0D\u7BA1\u76D1\u542C\u51FD\u6570\u5B9A\u4E49\u5728\u5F53\u524D\u8282\u70B9\u8FD8\u662F\u5176\u4ED6\u8282\u70B9</p>\n        '
}, {
    type: 'renderTitle',
    content: 'load 和 DOMContentLoaded'
}, {
    type: 'renderHtml',
    content: '\n            <text>load</text>\n            <codeBlock>\n                <code>load \u5E94\u8BE5\u4EC5\u7528\u4E8E\u68C0\u6D4B\u4E00\u4E2A\u5B8C\u5168\u52A0\u8F7D\u7684\u9875\u9762 \u5F53\u4E00\u4E2A\u8D44\u6E90\u53CA\u5176\u4F9D\u8D56\u8D44\u6E90\u5DF2\u5B8C\u6210\u52A0\u8F7D\u65F6\uFF0C\u5C06\u89E6\u53D1load\u4E8B\u4EF6</code>\n                <code>\u9875\u9762\u7684html\u3001css\u3001js\u3001\u56FE\u7247\u7B49\u8D44\u6E90\u90FD\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u4E4B\u540E\u624D\u4F1A\u89E6\u53D1 load \u4E8B\u4EF6</code>\n            </codeBlock>\n            <text>DOMContentLoaded</text>\n            <codeBlock>\n                <code>\u5F53\u521D\u59CB\u7684 HTML \u6587\u6863\u88AB\u5B8C\u5168\u52A0\u8F7D\u548C\u89E3\u6790\u5B8C\u6210\u4E4B\u540E\uFF0CDOMContentLoaded \u4E8B\u4EF6\u88AB\u89E6\u53D1\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6837\u5F0F\u8868\u3001\u56FE\u50CF\u548C\u5B50\u6846\u67B6\u7684\u5B8C\u6210\u52A0\u8F7D</code>\n                <code>HTML\u88AB\u52A0\u8F7D\u3001\u89E3\u6790\u5B8C\u6BD5\u4E4B\u540E\u5C31\u89E6\u53D1\uFF0C \u53EF\u4EE5\u8BBF\u95EE\u5230dom\u5143\u7D20</code>\n            </codeBlock>\n        '
}, {
    type: 'renderPop',
    html: '页面输入一个URL之后，发生了什么',
    content: '\n            <title>\u9875\u9762\u8F93\u5165\u4E00\u4E2AURL\u4E4B\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48</title>\n        '
}, {
    type: 'renderTitle',
    content: 'instanceof 原理'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u6839\u636E\u539F\u578B\u94FE\u7684__proto__ \u5C5E\u6027\u9010\u7EA7\u5F80\u4E0A\u67E5\u627E</text>\n        <codeBlock>\n        <code>var  L = A.__proto__</code>\n        <code>var  R =  B.prototype</code>\n        <code>if  ( L === R  ) {</code>\n            <code>return true</code>\n            <code>}</code>\n        \n        <codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var bibao = [{
    type: 'renderTitle',
    content: '闭包'
}, {
    type: 'renderUl',
    content: ['简单类型 -  undefined 	 null		string 	number		boolean', '复杂类型 -  object', 'es6 新增类型 - symbol']
}, {
    type: 'renderJS',
    content: 'symbol\n\n        let s = Symbol()\n        let s2 = Symbol()\n        s === s2  // false\n        \n        let s3 = Symbol(\'foo\')\n        s3.toString() // \'Symbol(foo)\'\n        s3.description // \'foo\'   es2019\n        \n        let s1 = Symbol.for("bar")  // \u5168\u5C40\u767B\u8BB0\n        let s2 = Symbol.for("bar")\n        s1 === s2 // true\n        Symbol.keyFor(s1) // "bar"\n        \n         1. \u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C \u5BB9\u6613\u9020\u6210\u5C5E\u6027\u540D\u7684\u51B2\u7A81\u3002es6\u5F15\u5165Symbol\u7684\u6982\u5FF5\uFF0C\u4F7F\u7528Symbol\u751F\u6210\u7684\u5C5E\u6027\u540D\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\n         2. Symbol \u4E0D\u662F\u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u4E0D\u80FD\u4F7F\u7528new \u547D\u4EE4\n         3. \u4E3A\u4E86\u4FBF\u4E8E\u67E5\u770B\u533A\u5206\uFF0C\u53EF\u4EE5\u4F20\u9012\u53C2\u6570 Symbol(\'foo\') ; \u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6B64\u65F6\u4F1A\u8C03\u7528\u8BE5\u5BF9\u8C61\u7684toString\u65B9\u6CD5\uFF0C\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u518D\u751F\u6210\n         4. Symbol \u4E0D\u80FD\u548C\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u8FDB\u884C\u8FD0\u7B97, \u4F46\u662F\u53EF\u4EE5\u8F6C\u5316\u4E3A\u5E03\u5C14\u503C\uFF0C Boolean(s)  !s\n         5. \u4F7F\u7528Symbol \u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u540D\u65F6\uFF0C\u4E0D\u80FD\u4F7F\u7528\u70B9\u8FD0\u7B97\u7B26\n         6. Symbol \u4E0D\u4F1A\u51FA\u73B0\u5728for...in  for...of \u5FAA\u73AF\u4E2D\uFF0C \u4E5F\u4E0D\u4F1A\u88ABObject.keys()\u3001Object.getOwnPropertyNames()\u3001JSON.stringify()\u8FD4\u56DE\uFF0C\n             \u53EF\u901A\u8FC7 Object.getOwnPropertySymbols \u83B7\u53D6\uFF0C\u3010\u975E\u79C1\u6709\u3011\n             Reflect.ownKeys \u53EF\u4EE5\u8FD4\u56DE\u5305\u542BSymbol\u5728\u5185\u7684\u6240\u6709\u5065\u540D\n        \n        '
}];

exports.default = bibao;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var data = [{
    type: 'renderTitle',
    content: '缓存'
}, {
    type: 'renderSubTitle',
    content: '页面的缓存可以分为两种：'
}, {
    type: 'renderHtml',
    content: '\n        <text>1. \u5F3A\u5236\u7F13\u5B58 </text>\n        <text>    -- \u5373\u6BCF\u6B21\u8FDB\u9875\u9762\u90FD\u4F1A\u5F3A\u5236\u91CD\u65B0\u83B7\u53D6\u8D44\u6E90\u6587\u4EF6</text>\n        <text>    -- http\u8BF7\u6C42\u7684cache-control\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u8BBE\u7F6Epublic\u548Cmax-size\uFF0C \u8868\u660E\u5728\u67D0\u4E00\u6BB5\u65F6\u95F4\u5185\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u8D44\u6E90\u4E0D\u53BB\u8BF7\u6C42\u670D\u52A1\u5668</text>\n        <text>    -- \u8FD9\u79CD\u65B9\u5F0F\u5982\u679C\u51FA\u73B0\u4E00\u6BB5\u65F6\u95F4\u5185\u8D44\u6E90\u88AB\u66F4\u65B0\u7684\u60C5\u51B5\uFF0C \u90A3\u5C31\u4F1A\u5BFC\u81F4\u7528\u6237\u770B\u5230\u7684\u4ECD\u662F\u65E7\u7684\u8D44\u6E90\uFF0C\u5E76\u4E14\u5982\u679C\u63A5\u53E3\u5DF2\u88AB\u540C\u6B65\u66F4\u65B0\uFF0C\u53EF\u80FD\u5C31\u4F1A\u51FA\u73B0\u62A5\u9519</text>\n        <text>2. \u534F\u5546\u7F13\u5B58</text>\n        <text>    -- \u6BCF\u6B21\u8BFB\u53D6\u8D44\u6E90\u6587\u4EF6\u65F6\uFF0C\u4F1A\u50CF\u6D4F\u89C8\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u8BE2\u95EE\u662F\u5426\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u7F13\u5B58</text>\n        <text>    -- \u8FD9\u79CD\u65B9\u5F0F\u4E0D\u80FD\u5F88\u597D\u7684\u5229\u7528\u7F13\u5B58\u7B56\u7565\uFF0C \u6D6A\u8D39\u8F83\u591A\u7684\u8D44\u6E90</text>\n        '
}, {
    type: 'renderSubTitle',
    content: '最佳实践'
}, {
    type: 'renderHtml',
    content: '\n        <text> \u6700\u4F73\u7684\u5B9E\u8DF5\u65B9\u5F0F\u5C31\u662F\u5C3D\u53EF\u80FD\u7684\u4F7F\u7528\u5F3A\u7F13\u5B58\uFF0C\u4F46\u662F\u80FD\u5728\u7248\u672C\u66F4\u65B0\u7684\u65F6\u5019\u8BA9\u539F\u6709\u7F13\u5B58\u5931\u6548\u3002</text>\n        <text> \u6240\u4EE5\u6211\u4EEC\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF1A html\u8D44\u6E90\u4F7F\u7528\u534F\u5546\u7F13\u5B58\uFF0C js\u548Ccss\u8D44\u6E90\u4F7F\u7528\u5F3A\u7F13\u5B58\uFF0C\u5E76\u4E14\u4F1A\u5E26\u4E0Ahash\u503C\u3002\u6BCF\u6B21\u66F4\u65B0\u7248\u672C\u65F6\uFF0C \u4F1A\u4FEE\u6539\u9759\u6001\u8D44\u6E90\u7684\u8DEF\u5F84</text>\n        '
}, {
    type: 'renderSubTitle',
    content: '后端设置'
}, {
    type: 'renderHtml',
    content: '\n        <text>    \u534F\u5546\u7F13\u5B58\uFF1A res.setHeader(\'Cache-Control\', \'public, max-age=xxx\')</text>\n        <text>    \u5F3A\u7F13\u5B58\uFF1A   </text>\n        <text>    res.setHeader(\'Cache-Control\', \'public, max-age=0\')</text>\n        <text>    res.setHeader(\'Last-Modified\', xxx)</text>\n        <text>    res.setHeader(\'ETag\', xxx)</text></text>\n        '
}];

exports.default = data;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var arr1 = [{
    type: 'renderTitle',
    content: '七种内置类型'
}, {
    type: 'renderUl',
    content: ['基本类型 -  undefined 	 null	string 	number		boolean', '引用类型 -  object  传递的是引用地址', 'es6 新增类型 - symbol  属于基本类型']
}, {
    type: 'renderPop',
    html: 'symbol',
    content: ' \n        <title>symbol</title>\n\n        <codeBlock>\n            <code>let s = Symbol()</code>\n            <code> let s2 = Symbol()</code>\n            <code>s === s2  // false</code>\n        </codeBlock>\n    \n        <codeBlock>\n            <code>let s3 = Symbol(\'foo\')</code>\n            <code>s3.toString() // \'Symbol(foo)\'</code>\n            <code>s3.description // \'foo\'   es2019</code>\n        </codeBlock>\n        <codeBlock>\n            <code>let s1 = Symbol.for("bar")  // \u5168\u5C40\u767B\u8BB0</code>\n            <code>let s2 = Symbol.for("bar")</code>\n            <code>s1 === s2 // true</code>\n            <code>Symbol.keyFor(s1) // "bar"</code>\n        </codeBlock>\n        \n        \n        <div>\n         <p>1. \u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C \u5BB9\u6613\u9020\u6210\u5C5E\u6027\u540D\u7684\u51B2\u7A81\u3002es6\u5F15\u5165Symbol\u7684\u6982\u5FF5\uFF0C\u4F7F\u7528Symbol\u751F\u6210\u7684\u5C5E\u6027\u540D\u662F\u72EC\u4E00\u65E0\u4E8C\u7684</p>\n         <p>2. Symbol \u4E0D\u662F\u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u4E0D\u80FD\u4F7F\u7528new \u547D\u4EE4</p>\n         <p>3. \u4E3A\u4E86\u4FBF\u4E8E\u67E5\u770B\u533A\u5206\uFF0C\u53EF\u4EE5\u4F20\u9012\u53C2\u6570 Symbol(\'foo\') ; \u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6B64\u65F6\u4F1A\u8C03\u7528\u8BE5\u5BF9\u8C61\u7684toString\u65B9\u6CD5\uFF0C\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u518D\u751F\u6210</p>\n         <p>4. Symbol \u4E0D\u80FD\u548C\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u8FDB\u884C\u8FD0\u7B97, \u4F46\u662F\u53EF\u4EE5\u8F6C\u5316\u4E3A\u5E03\u5C14\u503C\uFF0C Boolean(s)  !s</p>\n         <p>5. \u4F7F\u7528Symbol \u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u540D\u65F6\uFF0C\u4E0D\u80FD\u4F7F\u7528\u70B9\u8FD0\u7B97\u7B26</p>\n         <p>6. Symbol \u4E0D\u4F1A\u51FA\u73B0\u5728for...in  for...of \u5FAA\u73AF\u4E2D\uFF0C \u4E5F\u4E0D\u4F1A\u88ABObject.keys()\u3001Object.getOwnPropertyNames()\u3001JSON.stringify()\u8FD4\u56DE\uFF0C\n         \u53EF\u901A\u8FC7 Object.getOwnPropertySymbols \u83B7\u53D6\uFF0C\u3010\u975E\u79C1\u6709\u3011\n         Reflect.ownKeys \u53EF\u4EE5\u8FD4\u56DE\u5305\u542BSymbol\u5728\u5185\u7684\u6240\u6709\u5065\u540D</p>\n    \n        </div>\n        '
}];

var arr2 = [{
    type: 'renderTitle',
    content: 'undefiend 和 null 的区别'
}, {
    type: 'renderSubTitle',
    content: 'null ---- 人为设置的空对象'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>1\u3001  Null \u7C7B\u578B\uFF0C \u4EE3\u8868\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u6307\u9488\u3010\u6808\u4E2D\u7684\u53D8\u91CF\u6CA1\u6709\u6307\u5411\u5806\u4E2D\u7684\u5185\u5B58\u5BF9\u8C61\u3011</code>\n                <code>\n                    2\u3001  \u5224\u65AD\u7C7B\u578B\u65B9\u6CD5 \n                    <p>a.   typeof null == \u201Cobject\u201D</p>\n                    <p>b.   Object.prototype.toString.call(null)  ==  [Object Null]</p>\n                </code>\n           \n                <code>\n                    3\u3001  \u5E38\u89C1\u7684\u51E0\u79CDnull\u60C5\u51B5\n            \n                    <p>--   \u5BF9\u8C61\u539F\u578B\u94FE\u7684\u7EC8\u70B9</p>\n        \n                    <p>--   \u5F53\u4E00\u4E2A\u5BF9\u8C61\u88AB\u8D4B\u503Cnull\u4E4B\u540E\uFF0C\u539F\u6765\u7684\u5BF9\u8C61\u5728\u5185\u5B58\u4E2D\u5C31\u5931\u53BB\u4E86\u6307\u5411\uFF0CGC\u4F1A\u62E9\u673A\u56DE\u6536\u8BE5\u5BF9\u8C61\u91CA\u653E\u5185\u5B58\u3002</p>\n        \n                    <p>--   null\u6709\u5C5E\u4E8E\u81EA\u5DF1\u7684\u7C7B\u578BNull\uFF0C\u4F46\u662Ftypeof\u4E4B\u6240\u4EE5\u4F1A\u88AB\u5224\u5B9A\u4E3AObject.</p>\n                    <p> \u8FD9\u662F\u56E0\u4E3Ajs\u6570\u636E\u7C7B\u578B\u5728\u5E95\u5C42\u662F\u4EE5\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5B58\u5728\u7684\u3002\u4E8C\u8FDB\u5236\u7684\u524D\u4E09\u4F4D\u4E3A0 \u4F1A\u88ABtypeof \u5224\u65AD\u4E3A\u5BF9\u8C61\u7C7B\u578B\u3002\u800Cnull\u7684\u4E8C\u8FDB\u5236\u6070\u597D\u90FD\u662F0\uFF0C\u56E0\u4E3A\u88AB\u8BEF\u5224\u4E3AObject </p>    \n                    <p>\u3010000 - \u5BF9\u8C61\u3011\u3010100 - \u5B57\u7B26\u4E32\u3011 \u3010110 - \u5E03\u5C14\u3011</p>    \n                        \n                </code>\n            </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: 'undefined ---- 原始状态'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>1\u3001 undefined \u7C7B\u578B\uFF0C\u4E00\u4E2A\u53D8\u91CF\u5DF2\u88AB\u58F0\u660E\uFF0C\u4F46\u672A\u521D\u59CB\u5316</code>\n                <code>2\u3001 typeof undefined == "undefined"</code>\n           \n                <code>\n                    3\u3001  \u5E38\u89C1\u7684\u51E0\u79CDundefined\u60C5\u51B5\n                    <p>--   \u8BBF\u95EE\u5BF9\u8C61\u4E0A\u4E0D\u5B58\u5728\u7684\u5C5E\u6027</p>\n                    <p>--   \u5B9A\u4E49\u5F62\u53C2\uFF0C\u4F46\u662F\u6CA1\u6709\u4F20\u9012\u5B9E\u53C2</p>\n                    <p>--   void \u64CD\u4F5C\u7B26\u5BF9\u4EFB\u4F55\u8868\u8FBE\u5F0F\u6C42\u503C\u90FD\u8FD4\u56DEundefined</p>\n                </code>\n            </codeBlock>\n        '
}, {
    type: 'renderPop',
    html: 'Q',
    content: '\n            <title>Q</title>\n            <codeBlock>\n                <code>null == undefined   </code>\n                <code>// true    null \u548Cundefiend \u884C\u4E3A\u76F8\u4F3C\uFF0C\u90FD\u8868\u793A\u4E00\u4E2A\u65E0\u6548\u7684\u503C</code>\n                <code>null === undefined            //  false      \u4E0D\u5C5E\u4E8E\u540C\u4E00\u79CD\u7C7B\u578B</code>\n                <code>null >= 0                             //  true</code>\n                <code>null == 0                            //  false</code>\n\n            </codeBlock>\n            \n        '
}, {
    type: 'renderPop',
    html: '== 和 === 的区别',
    content: '\n            <title>== \u548C === \u7684\u533A\u522B</title>\n            <div>\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u7B26\u90FD\u4F1A\u5148\u8F6C\u6362\u64CD\u4F5C\u6570\u3010\u5F3A\u5236\u8F6C\u578B\u3011\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u76F8\u7B49\u6027\u7684\u5224\u65AD</div>\n            <div>\u5B57\u7B26\u4E32 & \u6570\u503C -- \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u503C</div>\n            <div>\u5E03\u5C14\u503C &\u3002 -- \u5C06\u4E4B\u8F6C\u6362\u4E3A\u6570\u503C 0 \u548C 1</div>\n            <div>\u5BF9\u8C61 & \u975E\u5BF9\u8C61 -- \u8C03\u7528valueOf() \u65B9\u6CD5\uFF0C \u518D\u6309\u7167\u4E4B\u524D\u7684\u57FA\u672C\u7C7B\u578B\u89C4\u5219</div>\n            <div>null \u548C undefined \u4E0D\u80FD\u8F6C\u6362\u4E3A\u5176\u5B83\u4EFB\u4F55\u503C</div>\n            <div>NaN \u4E0D\u7B49\u4E8ENaN</div>\n            <div>\u5BF9\u8C61\u7684\u6BD4\u8F83 \uFF1A \u5982\u679C\u4E24\u4E2A\u64CD\u4F5C\u6570\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u76F8\u7B49</div>\n            <div>\u5BF9\u8C61\u901A\u8FC7\u5B83\u4EEC\u7684\u5F15\u7528\uFF08reference\uFF09\u8FDB\u884C\u6BD4\u8F83\u3002JavaScript \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u5177\u6709\u5BF9\u5185\u5B58\u4E2D\u76F8\u540C\u4F4D\u7F6E\u7684\u5F15\u7528</div>\n            <div>{ age: 18 } == { age: 18 } // false</div>\n        '
}, {
    type: 'renderPop',
    html: '关系运算符 和 相等运算符',
    content: '\n            <title>\u5173\u7CFB\u8FD0\u7B97\u7B26 \u548C \u76F8\u7B49\u8FD0\u7B97\u7B26</title>\n            <div>\u4E24\u8005\u5E76\u4E0D\u662F\u540C\u4E00\u7C7B\u522B\u7684</div>\n            <div>\u5173\u7CFB\u8FD0\u7B97\u7B26\u9700\u8981\u5C1D\u8BD5\u5C06\u8FD0\u7B97\u5143\u8F6C\u4E3A\u4E00\u4E2Anumber</div>\n            <codeBlock>\n                <code>null > 0                       // true    null \u5C1D\u8BD5\u8F6C\u578B\u4E3Anumber \u5219\u4E3A0</code>\n                <code>null == 0                   // false     \u5728\u6B64\u5904\u4E0D\u5141\u8BB8\u88AB\u8F6C\u578B</code> \n            </codeBlock>\n        '
}];

var arr3 = [{
    type: 'renderTitle',
    content: '判断类型的方式'
}];

var dataType = [].concat(arr1, arr2, arr3);

exports.default = dataType;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Data = [{
    type: 'renderTitle',
    content: 'EventLoop 事件循环'
}, {
    type: 'renderHtml',
    content: '\n            <text>\u9996\u5148\uFF0C\u9700\u8981\u4E86\u89E3JS\u662F\u5355\u7EBF\u7A0B\u7684\uFF0CJS\u901A\u8FC7\u4E8B\u4EF6\u5FAA\u73AF\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u5F02\u6B65\u56DE\u8C03</text>\n            <codeBlock>\n                <code>\u5173\u4E8E\u8FDB\u7A0B\u3001\u7EBF\u7A0B</code>\n                <ul>\n                    <li>1. \u8FDB\u7A0B\u4EE3\u8868CPU\u6240\u80FD\u5904\u7406\u7684\u5355\u4E2A\u4EFB\u52A1\uFF0C\u662FCPU\u8D44\u6E90\u5206\u914D\u7684\u6700\u5C0F\u5355\u4F4D</li>\n                    <li>2. \u7EBF\u7A0B\u662FCPU\u8C03\u5EA6\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u7EBF\u7A0B</li>\n                </ul>\n            </codeBlock>\n            <text>\u800C\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684\u3002\u6BCF\u4E00\u4E2Atab\u9875\uFF0C\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FDB\u7A0B\u3002</text>\n            <codeBlock>\n                <code> \u6D4F\u89C8\u5668\u5305\u542B\u54EA\u4E9B\u7EBF\u7A0B\uFF1A</code>\n                <ul>\n                    <li>1. \u4E3B\u8FDB\u7A0B \uFF1A \u7528\u4E8E\u534F\u8C03\u5176\u5B83\u5B50\u8FDB\u7A0B\u3001\u6D4F\u89C8\u5668\u754C\u9762\u663E\u793A\u3001</li>\n                    <li>2. \u7B2C\u4E09\u65B9\u63D2\u4EF6\u8FDB\u7A0B\uFF1A \u4EC5\u5F53\u4F7F\u7528\u63D2\u4EF6\u65F6\u624D\u521B\u5EFA</li>\n                    <li>3. GPU\u8FDB\u7A0B\uFF1A \u7528\u4E8E3D\u7ED8\u5236</li>\n                    <li>4. \u6E32\u67D3\u8FDB\u7A0B\uFF1A \u8D1F\u8D23\u9875\u9762\u6E32\u67D3\u3001\u6267\u884C\u811A\u672C\u3001\u4E8B\u4EF6\u5904\u7406\u3010\u6D4F\u89C8\u5668\u5185\u6838\u3011</li>\n                </ul>\n            </codeBlock>\n            <text>\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u7684\u662F\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u8FD9\u662F\u524D\u7AEF\u63A5\u89E6\u6700\u591A\u4E5F\u662F\u6700\u91CD\u8981\u7684\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684\u6D4F\u89C8\u5668\u5185\u6838\u3002</text>\n            <text>\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u7EBF\u7A0B\u3002</text>\n            <codeBlock>\n                <code>\u6E32\u67D3\u8FDB\u7A0B\u5305\u542B\u54EA\u4E9B\u7EBF\u7A0B\uFF1A </code>\n                <ul>\n                    <li>1. GUI\u6E32\u67D3\u7EBF\u7A0B - \u9875\u9762\u6E32\u67D3\u3001\u5E03\u5C40\u548C\u7ED8\u5236 \n                    \u3010\u548CJS\u5F15\u64CE\u6E32\u67D3\u4E92\u65A5 - \u9632\u6B62\u6E32\u67D3\u7ED3\u679C\u4E0D\u53EF\u9884\u671F\u3011\n                    \u3010\u56DE\u6D41\u548C\u91CD\u7ED8\u4F1A\u5F15\u53D1\u8BE5\u7EBF\u7A0B\u3011</li>\n                    <li>\n                    2. JS\u5F15\u64CE\u7EBF\u7A0B  - \u89E3\u6790\u6267\u884Cjs\u811A\u672C\n                    \u3010\u5355\u7EBF\u7A0B\u3011\n                    </li>\n                    <li>3. \u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B  - \u63A7\u5236\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u6EE1\u8DB3\u89E6\u53D1\u6761\u4EF6\u540E\uFF0C\u5C06\u4E8B\u4EF6\u653E\u5165js\u5F15\u64CE\u6240\u5728\u6267\u884C\u961F\u5217</li>\n                    <li>4. \u5B9A\u65F6\u89E6\u53D1\u5668\u7EBF\u7A0B - setInterval & setTimeout \n                    \u3010\u5B9A\u65F6\u4EFB\u52A1\u7531\u5B9A\u65F6\u7EBF\u7A0B\u5904\u7406\u3011\n                    \u3010\u8BA1\u65F6\u5B8C\u6BD5\uFF0C\u901A\u77E5\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B\u3011</li>\n                    <li>5. \u5F02\u6B65http\u8BF7\u6C42\u7EBF\u7A0B - ajax\u8BF7\u6C42\n                    \u3010\u8BF7\u6C42\u5B8C\u6BD5\uFF0C\u82E5\u6709\u56DE\u8C03\uFF0C\u901A\u77E5\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B\u3011\n                    </li>\n                </ul>\n            </codeBlock>\n            <text>\u540C\u6B65\u4EFB\u52A1\u90FD\u5728JS\u5F15\u64CE\u7EBF\u7A0B\u4E0A\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684\u6267\u884C\u6808\u3002</text>\n            <text>\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B\u7BA1\u7406\u7740\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217\uFF0C\u5F02\u6B65\u4EFB\u52A1\u88AB\u89E6\u53D1\u540E\uFF0C\u4F1A\u5C06\u56DE\u8C03\u51FD\u6570\u653E\u5165\u4EFB\u52A1\u961F\u5217\u3002\u5F53\u6267\u884C\u6808\u4E2D\u7684\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u8BFB\u53D6\u4EFB\u52A1\u961F\u5217\uFF0C\u5C06\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u653E\u81F3\u6267\u884C\u6808\u4E2D\uFF0C\u8FBE\u5230\u5F02\u6B65\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u76EE\u7684</text>\n            <text>Eg\uFF1A\u5F53\u6267\u884C\u4E00\u4E2AsetTimeout\u4EE3\u7801\u65F6\uFF0C\u9996\u5148setTimeout\u672C\u8EAB\u662F\u4E00\u4E2A\u540C\u6B65\u51FD\u6570\uFF0CJS\u5F15\u64CE\u7EBF\u7A0B\u6267\u884C\u5230\u8FD9\u91CC\u65F6\uFF0C\u4F1A\u901A\u77E5\u5B9A\u65F6\u5668\u7EBF\u7A0B\uFF0C\u95F4\u9694\u4E00\u5B9A\u65F6\u95F4\u540E\uFF0C\u89E6\u53D1\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u88AB\u653E\u5165\u4E8B\u4EF6\u7EBF\u7A0B\u7BA1\u7406\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u5F53JS\u5F15\u64CE\u7EBF\u7A0B\u6240\u5728\u7684\u6267\u884C\u6808\u7A7A\u95F2\u4E86\u540E\uFF0C\u5C31\u4F1A\u53BB\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u8BE5\u56DE\u8C03\u51FD\u6570\u6267\u884C\u3002</text>\n            <codeBlock>\n                <code>\u4EC0\u4E48\u662F\u5B8F\u4EFB\u52A1\uFF0C\u4EC0\u4E48\u662F\u5FAE\u4EFB\u52A1</code>\n                <ul>\n                    <li>\n                        1. \u6BCF\u6B21\u5728\u6267\u884C\u6808\u4E2D\u6267\u884C\u7684\u4EE3\u7801\u5C31\u662F\u4E00\u6B21\u5B8F\u4EFB\u52A1\u3002\n                        <p>\u3010\u6CE8\u610F\u6BCF\u6B21\u4ECE\u4EFB\u52A1\u961F\u5217\u53D6\u51FA\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u653E\u5165\u6267\u884C\u6808\u6267\u884C\u5C31\u662F\u4E00\u6B21\u5B8F\u4EFB\u52A1\u3011</p>\n                        <p>\u3010GUI\u6E32\u67D3\u8FDB\u7A0B\u7684\u5DE5\u4F5C\u65F6\u95F4\u662F\u524D\u4E00\u6B21\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u4E0B\u4E00\u6B21\u5B8F\u4EFB\u52A1\u672A\u5F00\u59CB\u6267\u884C\u4E4B\u524D\uFF0C \u4E5F\u5C31\u662F\u4E24\u4E2A\u5B8F\u4EFB\u52A1\u4E4B\u95F4\u3011 </p>\n                    </li>\n                    <li>\n                        2. \u5FAE\u4EFB\u52A1\u5C31\u662F\u5728\u6BCF\u4E00\u6B21\u5B8F\u4EFB\u52A1\u7ED3\u675F\u540E\u90FD\u4F1A\u7ACB\u9A6C\u88AB\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u6267\u884C\u65F6\u673A\u5728\u6E32\u67D3\u524D\n                        \u3010promise\u3001nextTick\u5C5E\u4E8E\u5FAE\u4EFB\u52A1\u3011\n                    </li>\n                </ul>\n            </codeBlock>\n        '
}];

exports.default = Data;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'jsonp'
}, {
    type: 'renderSubTitle',
    content: '什么是跨域'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u8DE8\u57DF\u662F\u7531\u4E8E\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u5BFC\u81F4\u7684\u3002</text>\n        <text>\u6D4F\u89C8\u5668\u5B58\u5728\u540C\u6E90\u7B56\u7565\uFF0C\u8BE5\u7B56\u7565\u662F\u4E3A\u4E86\u4FDD\u62A4\u7528\u6237\u4FE1\u606F\u7684\u5B89\u5168\uFF0C\u9632\u6B62\u6076\u610F\u7684\u7F51\u7AD9\u7A83\u53D6\u6570\u636E</text>\n        <text>\u6700\u5E38\u89C1\u7684\uFF0C\u5982\u679C\u6CA1\u6709\u540C\u6E90\u7B56\u7565\uFF0C\u90A3\u4E48\u4E0D\u540C\u7F51\u7AD9\u4E4B\u95F4\u7684cookie\u4FE1\u606F\u53EF\u4EE5\u968F\u610F\u88AB\u83B7\u53D6\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u5173\u952E\u4FE1\u606F\u7684\u6CC4\u6F0F\uFF0C\u5E76\u4E14\u88AB\u76D7\u53D6\u8D26\u53F7</text>\n        <text>\u975E\u540C\u6E90\u5C06\u7981\u6B62\u83B7\u53D6cookie\u3001localStorage\u3001indexedDB\uFF0C \u7981\u6B62\u8BBF\u95EEDOM\uFF0C \u7981\u6B62\u53D1\u9001ajax\u8BF7\u6C42 \uFF08\u8BF7\u6C42\u53EF\u4EE5\u53D1\u9001\uFF0C\u4F46\u662F\u6D4F\u89C8\u5668\u62D2\u7EDD\u63A5\u53D7\u54CD\u5E94\uFF09</text>\n        '
}, {
    type: 'renderSubTitle',
    content: '为什么要有跨域'
}, {
    type: 'renderHtml',
    content: '\n        <text>ajax\u7684\u540C\u6E90\u7B56\u7565\u4E3B\u8981\u662F\u4E3A\u4E86\u9632\u6B62CSRF\u653B\u51FB\u3002</text>\n        <text>\u56E0\u4E3A\u6211\u4EEC\u6BCF\u4E00\u6B21\u53D1\u8D77HTTP\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u5E26\u4E0A\u76F8\u5E94\u7684cookie</text>\n        <text>DOM\u7684\u540C\u6E90\u7B56\u7565\u540C\u7406\u3002iframe\u5982\u679C\u53EF\u4EE5\u8DE8\u57DF\u8BBF\u95EE\u4E5F\u4F1A\u5BFC\u81F4\u653B\u51FB</text>\n        '
}, {
    type: 'renderSubTitle',
    content: 'CORS（跨域资源共享）'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u5B9E\u73B0CORS\u901A\u4FE1\u7684\u5173\u952E\u662F\u670D\u52A1\u5668\uFF0C\u53EA\u8981\u670D\u52A1\u5668\u5B9E\u73B0\u4E86CORS\u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u8DE8\u57DF\u901A\u4FE1</text>\n        <text>\n        CORS\u8DE8\u57DF\u7684\u5224\u5B9A\u6807\u51C6\uFF1A</text>\n        <text>1. \u6D4F\u89C8\u5668\u6839\u636E\u540C\u6E90\u7B56\u7565\u5BF9\u524D\u7AEF\u9875\u9762\u548C\u540E\u53F0\u4EA4\u4E92\u5730\u5740\u505A\u5339\u914D\uFF0C\u82E5\u540C\u6E90\uFF0C\u5219\u76F4\u63A5\u53D1\u9001\u6570\u636E\u8BF7\u6C42\uFF1B\u82E5\u4E0D\u540C\u6E90\uFF0C\u5219\u53D1\u9001\u8DE8\u57DF\u8BF7\u6C42</text>\n        <text>2. \u670D\u52A1\u5668\u6536\u5230\u6D4F\u89C8\u5668\u8DE8\u57DF\u8BF7\u6C42\u540E\uFF0C\u6839\u636E\u81EA\u8EAB\u914D\u7F6E\u8FD4\u56DE\u5BF9\u5E94\u5934\u6587\u4EF6\u3002\u82E5\u672A\u914D\u7F6E\u8FC7\u4EFB\u4F55\u5141\u8BB8\u8DE8\u57DF\uFF0C\u5219\u6587\u4EF6\u5934\u4E0D\u5305\u542BAccess-Control-Allow-origin\u5B57\u6BB5\u3002\u82E5\u914D\u7F6E\u8FC7\u57DF\u540D\uFF0C\u5219\u8FD4\u56DEAccess-Control-Allow-origin + \u5BF9\u5E94\u914D\u7F6E\u89C4\u5219\u91CC\u7684\u57DF\u540D\u65B9\u5F0F</text>\n        <text>3. \u6D4F\u89C8\u5668\u6839\u636E\u63A5\u6536\u5230\u7684\u54CD\u5E94\u5934\u7684Access-Control-Allow-origin \u5B57\u6BB5\u505A\u5339\u914D\uFF0C\u82E5\u65E0\u8BE5\u5B57\u6BB5\u5219\u8BF4\u660E\u4E0D\u5141\u8BB8\u8DE8\u57DF\uFF0C\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u82E5\u6709\u8BE5\u5B57\u6BB5\u5219\u8FDB\u884C\u5F53\u524D\u57DF\u540D\u5339\u914D\u3002</text>\n        <text>\u4EE5\u4E0A\u4E24\u79CD\u65B9\u5F0F\u662F\u4E0D\u540C\u7684\uFF0C\u4E00\u8005\u662F\u670D\u52A1\u5668\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u4F46\u662Forigin\u6307\u5B9A\u7684\u6E90\u4E0D\u5728\u8BB8\u53EF\u8303\u56F4\u5185\u3002\u4E00\u8005\u662F\u670D\u52A1\u5668\u4E0D\u5141\u8BB8\u4EFB\u4F55\u8DE8\u57DF\u8BF7\u6C42</text>\n        \n        '
}, {
    type: 'renderSubTitle',
    content: '简单请求和非简单请求'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u7B80\u5355\u8BF7\u6C42\uFF1A</text>\n        <text>\u975E\u7B80\u5355\u8BF7\u6C42\uFF1A</text>\n        '
}, {
    type: 'renderSubTitle',
    content: '原理'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u6838\u5FC3\u662F\u52A8\u6001\u6DFB\u52A0script\u6807\u7B7E\u6765\u8C03\u7528\u670D\u52A1\u5668\u63D0\u4F9B\u7684js\u811A\u672C</text>\n        <text>\u6211\u4EEC\u77E5\u9053script\u6807\u7B7E\u53EF\u4EE5\u8DE8\u57DF\u8BBF\u95EE\u8D44\u6E90\uFF0C\u662F\u4E0D\u5B58\u5728\u8BBF\u95EE\u9650\u5236\u7684\u3002jsonp\u5176\u5B9E\u5C31\u662F\u5229\u7528\u4E86\u8FD9\u4E00\u539F\u7406\u3002\u6211\u4EEC\u5728\u9875\u9762\u4E0A\u6784\u9020\u4E00\u4E2Ascript\u6807\u7B7E\uFF0C\n        \u5C06\u9700\u8981\u8BBF\u95EE\u7684\u63A5\u53E3\u540D\u5B57\u4F5C\u4E3Asrc\u53C2\u6570\u4F20\u5165\uFF0C\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230\u8BE5\u63A5\u53E3\u3002\u4F46\u662F\u540E\u7EED\u7684\u4EA4\u4E92\u9700\u8981\u540E\u7AEF\u7684\u914D\u5408\u3002\u6211\u4EEC\u9700\u8981\u5728\u62FC\u63A5\u7684url\u540E\u9762\u8DDF\u4E0Acallback\u56DE\u8C03\u51FD\u6570\u3002\n        \u540E\u7AEF\u7ECF\u8FC7\u5904\u7406\uFF0C\u8BC6\u522B\u5230\u662F\u8DE8\u57DF\u8BF7\u6C42\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6267\u884Ccallback\u56DE\u8C03\u7684js\u4EE3\u7801\uFF0C\u5E76\u4E14\u53C2\u6570\u4E3A\u8FD4\u56DE\u7684json</text>\n        <text>jquery\u7684jsonp\u65B9\u6CD5\uFF0C\u5176\u5B9E\u5C31\u662F\u5BF9\u539F\u751F\u7684jsonp\u8FDB\u884C\u4E86\u4E00\u5C42\u5C01\u88C5\uFF0C\u65B9\u4FBF\u6211\u4EEC\u53EF\u4EE5\u50CF\u4F7F\u7528\u4E00\u822C\u7684get\u8BF7\u6C42\u4E00\u6837\u8FDB\u884Cjsonp\u7684\u5904\u7406</text>\n        <text>axios\u4E0D\u652F\u6301jsonp\u7684\u8BF7\u6C42</text>\n        '
}, {
    type: 'renderSubTitle',
    content: '原生代码示例'
}, {
    type: 'renderJS',
    content: '\n    const jsonP = (url, data={}, callback, removeCookieFromUrl) =>{\n\n        window[callback.name] = callback.fn\n        let fullUrl = url + \'?callback=\' + callback.name\n        if(!removeCookieFromUrl){\n            let cookieArr = document.cookie.split(\';\')\n            for (let i = 0; i < cookieArr.length; i++) {\n            let nv = cookieArr[i].split(\'=\')\n            data[nv[0].replace(/(^s*)|(s*$)/g, \'\')] = nv[1]\n            }\n        }\n    \n        for (let i in data) {\n            fullUrl += \'&\' + i + \'=\' + data[i]\n        }\n    \n        let script = document.createElement(\'script\')\n        script.src = fullUrl\n    \n        document.getElementsByTagName(\'head\')[0].appendChild(script)\n    \n    }\n    \n        '
}];

exports.default = data;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var prototype = [{
    type: 'renderTitle',
    content: '原型'
}, {
    type: 'renderSubTitle',
    content: '原型介绍'
}, {
    type: 'renderSubTitle',
    content: '原型继承'
}, {
    type: 'renderSubTitle',
    content: '经典试题'
}];

exports.default = prototype;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Data = [{
    type: 'renderTitle',
    content: '发布订阅模式'
}, {
    type: 'renderSubTitle',
    content: '观察者模式  VS 发布订阅模式'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E2D\uFF0C\u53D1\u5E03\u8005\u548C\u89C2\u5BDF\u8005\u76F4\u63A5\u901A\u4FE1\u3002</code>\n                <code>\u800C\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C \u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u5E76\u4E0D\u77E5\u9053\u5BF9\u65B9\u7684\u5B58\u5728\uFF0C\u800C\u662F\u901A\u8FC7\u7B2C\u4E09\u65B9\u7684\u6D88\u606F\u4EE3\u7406\u6765\u8FDB\u884C\u901A\u4FE1\u4EA4\u4E92</code>\n            </codeBlock>\n        '
}, {
    type: 'renderPop',
    html: '观察者模式简单demo',
    content: '\n        <title>\u89C2\u5BDF\u8005\u6A21\u5F0F</title>\n        <pre><code>\nconst Subject = function () {\n    return {\n        observers:[],\n        add: function (obj) {\n            this.observers.push(obj)\n        },\n        remove: function () {\n            \n        },\n        notify: function (...args) {\n            this.observers.forEach(observer => observer.update(...args));\n        }\n    }\n}\n\nconst Observer = function () {\n    return {\n        update: function (...args) {\n            console.log(...args)\n        }\n    }\n    \n}\n        \nconst obj1 = new Observer()\nconst obj2 = new Observer()\nconst sub = new Subject()\nsub.add(obj1)  // \uFF08\u76EE\u6807\u548C\u89C2\u5BDF\u8005\u5EFA\u7ACB\u4E86\u4F9D\u8D56\u5173\u7CFB\uFF09\nsub.add(obj2)\nsub.notify(\'notified !\');\n\n        </code></pre>\n        '
}, {
    type: 'renderPop',
    html: '订阅发布模式简单demo',
    content: '\n        <title>\u8BA2\u9605\u53D1\u5E03\u6A21\u5F0F</title>\n        <pre><code>\nconst Observe = {\n    subs:{},\n    // \u6DFB\u52A0\u6CE8\u518C\n    add: function (type, fn){\n        this.subs[type] \n        ?  this.subs.push(fn) \n        :  this.subs[type] = [fn]\n    },\n    // \u79FB\u9664\n    remove: function (type, fn) {\n        let i = __message[type].length - 1\n        for ( ; i >= 0; i-- ) {\n            this.subs[type][i] === fn \n            && this.subs[type].splice(1,1)\n        }\n        \n    },\n    // \u53D1\u5E03\n    subscribe : function (type, args) {\n        var subList = this.subs[type]\n        for ( let i =0 ; i < subList.length; i++ ) {\n            subList[i].call(this, args)\n        }\n    }\n}\n\n\n//\u8BA2\u9605\u6D88\u606F\nObserve.add(\'say\', function (data) {\n    console.log(data);\n})\n\n//\u53D1\u5E03\u6D88\u606F\nObserve.subscribe(\'say\', { text : \'hello world\' } )  // {text: "hello world"}\n        </code></pre>\n        '
}];

exports.default = Data;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var dataType = [{
    type: 'renderTitle',
    content: 'js中常见异步'
}, {
    type: 'renderSubTitle',
    content: '同步 VS 异步'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>\u540C\u6B65\uFF1A \u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u5FC5\u987B\u524D\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u624D\u80FD\u6267\u884C\u4E0B\u4E00\u4E2A\u4EFB\u52A1</code>\n                <code>\u5F02\u6B65\uFF1A \u8FDB\u5165\u4EFB\u52A1\u961F\u5217\u6392\u961F\u7684\u4EFB\u52A1\u3002</code>\n                <code>\u5F53\u5F02\u6B65\u4EFB\u52A1\u5B8C\u6210\uFF0C\u4F1A\u5728\u961F\u5217\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6\u3010\u56DE\u8C03\u51FD\u6570etc\u3011\uFF0C\u8868\u660E\u5F53\u524D\u7684\u5F02\u6B65\u4EFB\u52A1\u53EF\u4EE5\u8FDB\u5165\u6267\u884C\u6808\u3002</code>\n                <code>\u4F46\u662F\u53EA\u6709\u5F53\u6267\u884C\u6808\u4E2D\u7684\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u5B8C\u6210\uFF0C\u7CFB\u7EDF\u624D\u4F1A\u53BB\u8BFB\u53D6\u4EFB\u52A1\u961F\u5217</code>\n            </codeBlock>\n            \n        '
}, {
    type: 'renderSubTitle',
    content: '事件循环'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>js\u4E3B\u7EBF\u7A0B\u62E5\u6709\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u6808\u548C\u4EFB\u52A1\u961F\u5217</code>\n                <code>JavaScript \u4E3B\u7EBF\u7A0B\u4F1A\u5728\u6267\u884C\u6808\u6E05\u7A7A\u540E\uFF0C\u8BFB\u53D6\u4EFB\u52A1\u961F\u5217\u3002\u5728\u8BFB\u53D6\u5230\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u51FD\u6570\u540E\uFF0C\u5C06\u8BE5\u51FD\u6570\u5165\u6808\u3002\u4E00\u76F4\u8FD0\u884C\u76F4\u5230\u6267\u884C\u6808\u6E05\u7A7A\uFF0C\u518D\u6B21\u53BB\u8BFB\u53D6\u4EFB\u52A1\u961F\u5217\uFF0C\u4E0D\u65AD\u5FAA\u73AF\u3002</code>\n                <code>\u5F53\u5F02\u6B65\u4EFB\u52A1\u5B8C\u6210\uFF0C\u4F1A\u5728\u961F\u5217\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6\u3010\u56DE\u8C03\u51FD\u6570etc\u3011\uFF0C\u8868\u660E\u5F53\u524D\u7684\u5F02\u6B65\u4EFB\u52A1\u53EF\u4EE5\u8FDB\u5165\u6267\u884C\u6808\u3002</code>\n            </codeBlock>\n            \n        '
}, {
    type: 'renderSubTitle',
    content: 'js中的几种异步'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <p>setTimeout / setInterval</p>\n                <code>1.\u7531\u6D4F\u89C8\u5668\u5185\u6838\u7684timer\u6A21\u5757\u6765\u5904\u7406\uFF0C\u53EA\u6709\u5F53\u65F6\u95F4\u5230\u8FBE\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u5C06\u56DE\u8C03\u51FD\u6570\u6DFB\u52A0\u5230\u4EFB\u52A1\u961F\u5217\u4E2D</code>\n                <code>2.\u9700\u7B49\u4E3B\u7EBF\u7A0B\u7684\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u5B8C\u6210\u540E\u624D\u4F1A\u6267\u884C\uFF0C\u6240\u4EE5\u5373\u4F7F\u5B9A\u65F6\u65F6\u95F4\u4E3A0\u4E5F\u4E0D\u4E00\u5B9A\u7ACB\u9A6C\u6267\u884C</code>\n                <pre><code className="language-javascript">\n    console.log(1);\n    setTimeout(function(){console.log(2);},0);\n    console.log(3);\n    \n    // 1\uFF0C3\uFF0C2\n                </code></pre>\n            </codeBlock>\n            <codeBlock>\n                <p>\u4E8B\u4EF6</p>\n                <code> \u7531\u6D4F\u89C8\u5668\u5185\u6838\u7684DOM Binding\u6A21\u5757\u3010\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B\u3011\u6765\u5904\u7406\uFF0C\u5F53\u4E8B\u4EF6\u89E6\u53D1\u7684\u65F6\u5019\uFF0C\u56DE\u8C03\u51FD\u6570\u7ACB\u5373\u6DFB\u52A0\u81F3\u961F\u5217</code>\n            </codeBlock>\n            <codeBlock>\n                <p>ajax</p>\n                <code>\u7531\u6D4F\u89C8\u5668\u5185\u6838\u7684network\u6A21\u5757\u3010\u5F02\u6B65http\u8BF7\u6C42\u7EBF\u7A0B\u3011\u6765\u5904\u7406\uFF0C\u5728\u7F51\u7EDC\u8BF7\u6C42\u5B8C\u6210\u8FD4\u56DE\u4E4B\u540E\uFF0C\u624D\u5C06\u56DE\u8C03\u6DFB\u52A0\u81F3\u961F\u5217</code>\n            </codeBlock>\n            <codeBlock>\n            <p>nodejs \u7684 process.nextTick</p>\n            <code>\u5728\u4E0B\u4E00\u6B21Event Loop\u4E4B\u524D\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u3010\u4E3B\u7EBF\u7A0B\u8BFB\u53D6\u4EFB\u52A1\u961F\u5217\u524D\u3011\u5373\u5728\u53D1\u751F\u5F02\u6B65\u4EFB\u52A1\u524D [\u5728\u5FAE\u4EFB\u52A1\u524D]</code>\n            <code>\u5168\u90E8process.nextTick\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6267\u884C\u90FD\u4F1A\u65E9\u4E8EPromise</code>\n            <pre><code className="language-javascript">\n   \n        process.nextTick(function A() {\n            console.log(1);\n            process.nextTick(function B(){console.log(2);});\n        });\n\n        setTimeout(function timeout() {\n            console.log(\'TIMEOUT FIRED\');\n        }, 0)\n        \n        // 1\n        // 2\n        // TIMEOUT FIRED\n        \n   // \u5373\u4F7F\u5D4C\u5957\u591A\u4E2A\uFF0C\u90FD\u4F1A\u5728\u5F53\u524D\u6267\u884C\u6808\u6267\u884C\u3010\u6307\u5B9A\u7684\u56DE\u8C03\u603B\u5728\u5F53\u524D\u6267\u884C\u6808\u5C3E\u90E8\u89E6\u53D1\u3011\n            </code></pre>\n            </codeBlock>\n            <codeBlock>\n                <p>promise</p>\n                <code>\u8FFD\u52A0\u5728\u672C\u8F6E\u5FAA\u73AF\uFF0C\u4F46\u662Fpromise\u5C5E\u4E8E\u5FAE\u4EFB\u52A1\uFF0C\u6240\u4EE5\u5728nextTick\u540E\u6267\u884C</code>\n            </codeBlock>\n            <codeBlock>\n            <p>nodejs \u7684setImmediate</p>\n            <pre><code className="language-javascript">\n//\u5728\u5F53\u524D\u4EFB\u52A1\u961F\u5217\u7684\u5C3E\u90E8\u6DFB\u52A0\u4E8B\u4EF6\uFF0C\u5728\u4E0B\u4E00\u6B21Event Loop\u65F6\u6267\u884C\n    setImmediate(function A() {\n        console.log(1);\n        setImmediate(function B(){console.log(2);});\n    });\n\n    setTimeout(function timeout() {\n        console.log(\'TIMEOUT FIRED\');\n    }, 0);\n\n    console.log(55)\n    \n    //\u8FD0\u884C\u7ED3\u679C\u53EF\u80FD\u662F1--TIMEOUT FIRED--2\uFF0C\u4E5F\u53EF\u80FD\u662FTIMEOUT FIRED--1--2\n    // \u5373\u4F7FsetTimeout\u672A\u8BBE\u7F6E\u65F6\u95F4\u53C2\u6570\uFF0C\u4F46\u662F\u6709\u4E00\u4E2A\u4E0B\u9650\u503C\uFF0C\u89C4\u5B9A\u4E0D\u80FD\u5C0F\u4E8E4ms\uFF0C \u6240\u4EE5\u81F3\u5C11\u662F\u57284ms\u540E\u624D\u4F1A\u6267\u884CsetTimeout\u7684\u56DE\u8C03\u51FD\u6570\n    // \u4F46\u662F\u7531\u4E8E\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u65F6\u95F4\u4E00\u822C\u80AF\u5B9A\u4F1A\u8D85\u8FC74ms\uFF0C \u6240\u4EE5\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0CsetTimeout\u5B9E\u9645\u5DF2\u5230\u4E86\u89E6\u53D1\u4E8B\u4EF6\n    // \u6240\u4EE5\u6B64\u65F6\u5F02\u6B65\u5B8F\u4EFB\u52A1\u5DF2\u88AB\u89E6\u53D1\uFF0CsetTimeout\u5DF2\u7ECF\u88AB\u653E\u5165\u961F\u5217\u4E2D\uFF0C\u6240\u4EE5\u4E00\u822C\u7ED3\u679C\u662F TIMEOUT FIRED--1--2\n    setImmediate \u603B\u662F\u5C06\u4E8B\u4EF6\u6CE8\u518C\u5230\u4E0B\u4E00\u8F6EEvent Loop \n    \n    //\u5C06\u4E0A\u8FF0\u4F8B\u5B50\u4FEE\u6539\u4E00\u4E0B\n    \n    setImmediate(function (){\n        setImmediate(function A() {\n            console.log(1);\n            setImmediate(function B(){console.log(2);});\n        });\n\n        setTimeout(function timeout() {\n            console.log(\'TIMEOUT FIRED\');\n        }, 0);\n    });\n    \n    // 1\n    // TIMEOUT FIRED\n    // 2\n    // \u8FD0\u884C\u7ED3\u679C\u662F\u56FA\u5B9A\u7684\uFF0C\u5F53\u6267\u884C\u56DE\u8C03\u65F6\uFF0C\u6B64\u65F6\u961F\u5217\u91CC\u9762\u662F\u7A7A\u7684\uFF0CsetImmediate\u4F1A\u76F4\u63A5\u88AB\u8C03\u7528\u3010\u4F18\u5148\u7EA7\u66F4\u9AD8\u3011\uFF0C\u800CsetTimeout \u4F1A\u8FDB\u5165\u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\n    // \u63A8\u8350\u4F7F\u7528setImmediate\n               </pre></code>\n            </codeBlock>\n        '
}];

exports.default = dataType;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Data = [{
    type: 'renderTitle',
    content: 'this'
}, {
    type: 'renderHtml',
    content: '\n            <text>javascript \u4E2D\u7684this\u6307\u5411\uFF0C \u662F\u5728\u51FD\u6570\u88AB\u8C03\u7528\u65F6\u786E\u5B9A\u7684\uFF0C \u800C\u4E0D\u662F\u5728\u51FD\u6570\u5B9A\u4E49\u65F6\u786E\u5B9A\u7684\u3002\n            \u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\u51B3\u5B9A\u4E86this\u7684\u6307\u5411\uFF0C\u8981\u5224\u65ADthis\u6307\u5411\u9700\u8981\u786E\u5B9Athis\u7684\u771F\u6B63\u8C03\u7528\u8005\u3010\u8FD9\u53E5\u8BDD\u5F88\u91CD\u8981\uFF01\uFF01\uFF01\u3011</text>\n        '
}, {
    type: 'renderSubTitle',
    content: '常见的几种调用方式'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>1. \u76F4\u63A5\u8C03\u7528  \uFF1A func(arg1, arg2)  \u7B49\u4EF7\u4E8Efunc.call(undefined, arg1, arg2)</code>\n                <code>2. \u65B9\u6CD5\u8C03\u7528\u3010\u9690\u5F0F\u7ED1\u5B9A\u3011  \uFF1A obj.func(arg1, arg2)     </code> \n                <li> \u7B49\u4EF7\u4E8E obj.func.call(obj, arg1, arg2)   \u76F4\u63A5\u70B9\u53F7\u8C03\u7528\uFF0C \u8C03\u7528\u8005\u5C31\u662Fobj</li>\n                <code>3. \u663E\u5F0F\u7ED1\u5B9A  \uFF1A func.call(obj, arg1, arg2)   //\u76F4\u63A5\u7ED1\u5B9A\u4FEE\u6539func\u5185\u90E8this\u6307\u5411</code>\n            </codeBlock>\n            <text>\u4EE5\u4E0A\u4E09\u79CD\u65B9\u5F0F \u5176\u5B9E\u90FD\u53EF\u4EE5\u603B\u7ED3\u4E3A\u4E00\u79CD\u65B9\u5F0F  func.call(context, arg1, arg2), this\u5176\u5B9E\u672C\u8D28\u5C31\u662Fcontext \u7684\u5185\u5BB9</text>\n            <text>\u76F4\u63A5\u8C03\u7528\u65B9\u5F0F\uFF0C\u6B64\u65F6this\u76F8\u5F53\u4E8Eundefiend\uFF0C \u4F46\u662F\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u6B64\u65F6\u4F1A\u6307\u5411window</text>\n            <text>\u4F7F\u7528bind \u5176\u5B9E\u672C\u8D28\u4E5F\u662F\u4F7F\u7528\u4E86call</text>\n        '
}, {
    type: 'renderJS',
    content: '\u4F7F\u7528\u6570\u7EC4\u7684\u5F62\u5F0F\uFF1A\n\n        function fn (){ console.log(this) }\n        var arr = [fn, fn2]\n        arr[0]()  // this \u6307\u5411arr\n\n\u4F7F\u7528\u5BF9\u8C61\u5F62\u5F0F\uFF1A    \n        var obj = {\n            foo : function(){ console.log(this.bar) },\n            bar : 1\n          }\n          \n          var foo = obj.foo\n          var bar = 2\n          \n          obj.foo()  // 1 \u3002 \u5C5E\u4E8E\u65B9\u6CD5\u8C03\u7528\u6A21\u5F0F\n          foo()     //2  \u5C5E\u4E8E\u76F4\u63A5\u8C03\u7528\u6A21\u5F0F\n\nEventHandler \uFF1A\n        btn.addEventListener(\'click\', function handler(){\n            console.log(this) \n        })\n        // \u5F53\u4F7F\u7528 addEventListener() \u4E3A\u4E00\u4E2A\u5143\u7D20\u6CE8\u518C\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\n        // \u53E5\u67C4\u91CC\u7684 this \u503C\u662F\u8BE5\u5143\u7D20\u7684\u5F15\u7528\u3002\u5176\u4E0E\u4F20\u9012\u7ED9\u53E5\u67C4\u7684 event \u53C2\u6570\u7684 currentTarget \u5C5E\u6027\u7684\u503C\u4E00\u6837\u3002\n        // \u76F8\u5F53\u4E8E handler.call(event.currentTarget, event) \n        // \u6CE8\u610F\u4E00\u4E9B\u5C01\u88C5\u7684\u4E8B\u4EF6 \u9700\u8981\u53BB\u770B\u5B9E\u9645\u5B9E\u73B0\u6E90\u7801\u624D\u80FD\u786E\u5B9Athis\u6307\u5411\uFF0C \u6216\u8005\u76F4\u63A5console \u5C31\u66F4\u5FEB\u5566\n        '
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>4. \u4F7F\u7528new\u521B\u5EFA</code>\n                <code> </code> \n                <code></code>\n            </codeBlock>\n        '
}, {
    type: 'renderPop',
    html: 'new 一个实例的时候，发生了什么',
    content: '\n            <title>new \u4E00\u4E2A\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48</title>\n            <codeBlock>\n                <code>1\uFF09\u521B\u5EFA\u7A7A\u5BF9\u8C61</code>\n                <code>2\uFF09\u6DFB\u52A0\u5B9E\u4F8B\u5BF9\u8C61\u7684__proto__,  \u6307\u5411\u51FD\u6570\u5BF9\u8C61\u539F\u578B Foo.prototype</code>\n                <code>3\uFF09\u5C06this\u7ED1\u5B9A\u81F3\u5B9E\u4F8B\u5BF9\u8C61</code>\n                <code>4\uFF09new \u7684\u7ED3\u679C\u662F\u7531\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61</code>\n            </codeBlock>\n            <text>\u7B80\u5355\u5B9E\u73B0</text>\n            <codeBlock>\n                <pre ><code className="language-javascript">\n    function Foo ( name ){\n        this.name = name\n    }\n    \n    \n    new Foo = {\n        let obj = {}\n        obj.__proto__ = Foo.prototype\n        var result =  Foo.call(obj,\u201Dname\u201D);\n        return \n            typeof  result ===\u2018object\u2019  \n            ?  result  \n            :  obj\n    }\n                </code></pre>\n            </codeBlock>\n\n            <text>Demo</text>\n        <codeBlock>\n            <pre><code className="language-javascript">\n    function Foo(){\n        getName = function(){\n            console.log(1)\n        }\n        return this;\n    }\n    Foo.getName = function(){\n        console.log(2)\n    }\n    Foo.prototype.getName = function(){\n        console.log(3)\n    }\n    var getName = function(){\n        console.log(4)\n    }\n    function getName(){\n        console.log(5)\n    }\n    \n    \n    // ouput:\n    Foo.getName();\n    getName();\n    Foo().getName();\n    getName();\n    new Foo.getName();\n    new Foo().getName();\n    new new Foo().getName();\n    \n    \n    \u5206\u6790 \uFF1A\n        1. Foo.getName();\n        --  \u76F4\u63A5\u8C03\u7528Foo.getName\u65B9\u6CD5\uFF0C \u8F93\u51FA 2\n    \n        2. getName();\n        --  \u5B9A\u4E49\u8FC7\u7A0B\u4E2D\uFF0CgetName\u51FD\u6570\u5B9E\u9645\u4E0A\u88AB\u5B9A\u4E49\u4E86\u4E24\u6B21[\u53D8\u91CF\u63D0\u5347]\u3002\u76F8\u5F53\u4E8E\u4F9D\u6B21\u6267\u884C\n        --  function getName() { console.log(5) }\n        --  var getName\n        --  getName = function(){ console.log(4) }\n        --  \u8F93\u51FA 4\n    \n        3. Foo().getName();\n        -- \u6267\u884CFoo()  \u5F97\u5230\u6307\u5411Foo\u7684this\u6307\u9488\n        -- Foo().getName == function(){ console.log(1) }\n        -- \u8F93\u51FA 1\n    \n        4. getName();\n        -- \u7ECF\u8FC7\u7B2C\u4E09\u6B65\u9AA4\u7684\u6267\u884C\u540E\uFF0C\u7531\u4E8EFoo\u51FD\u6570\u5185\u90E8\u7684getName\u53D8\u91CF\u524D\u9762\u5E76\u6CA1\u6709var\uFF0C \n        -- \u6240\u4EE5\u5B9E\u9645\u4E0A\u662F\u518D\u6B21\u4FEE\u6539\u4E86\u5168\u5C40\u53D8\u91CFgetName\n        -- \u8F93\u51FA  1\n        -- \u3010\u82E5 getName \u524D\u9762\u7531var\uFF0C \u5219\u8BE5\u7B54\u6848\u4ECD\u7136\u662F 4 \u3011\n        \n        5. new Foo.getName();\n        --  var Func = Foo.getName()  ==> \u0192 (){console.log(2)}\n        --  new Func  ==>  \n        --  \u8F93\u51FA  2\n        \n        6. new Foo().getName();\n        --  var a = new Foo()  ==>  \u521B\u5EFAFoo\u5B9E\u4F8B\n        --  a.getName ==>  a\u5B9E\u4F8B\u4E0A\u65E0getName\u65B9\u6CD5\uFF0C\u6CBF\u7740\u539F\u578B\u94FE\u5F80\u4E0A\u67E5\u627E\uFF0C \u6700\u7EC8\u53D6\u5230Foo.prototype.getName\n        --  \u8F93\u51FA  3\n        --  \u3010Foo.getName\uFF0C \u5B9A\u4E49\u7684\u662FFoo\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u7EE7\u627F\u3011\n        \n        7. new new Foo().getName();\n        -- var a = new Foo()  ==>  \u521B\u5EFAFoo\u5B9E\u4F8B\n        -- var Func = a.getName()  ==>  \u0192 (){console.log(3)}\n        -- new Func\n        -- \u8F93\u51FA 3\n            </code></pre>\n        </codeBlock>\n        '
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <code>5. \u7BAD\u5934\u51FD\u6570</code>\n                <code> \u7BAD\u5934\u51FD\u6570\u5728\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\u5185\u4E0D\u7ED1\u5B9A this\u3002\u5982\u679C\u8981\u4F7F\u7528 this \uFF0C\u5C31\u4F1A\u6307\u5411\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u4F5C\u7528\u57DF\u7684 this \u503C\u3002\u4E4B\u524D\u7684this\u6307\u5411\u9700\u8981\u6839\u636E\u5B9E\u9645\u8C03\u7528\u8005\u8FDB\u884C\u5224\u65AD\uFF0C \u73B0\u5728\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u5C31\u53EF\u4EE5\u76F4\u63A5\u6839\u636E\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u4F5C\u7528\u57DF\u6765\u5224\u65AD\uFF0C\u66F4\u65B9\u4FBF\u7B80\u660E</code> \n                <code> \u5373\u4F7F\u4F7F\u7528bind\u3001call\u65B9\u6CD5\u4FEE\u6539\u4ECD\u7136\u4E0D\u4F1A\u6709\u5F71\u54CD</code>\n            </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: 'this指向当前函数运行的环境'
}, {
    type: 'renderJS',
    content: 'Eg1 : \n        var obj = { foo : 1 }\n      \n      // js\u5F15\u64CE\u5148\u5728\u5185\u5B58\u91CC\u9762\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61 { foo : 1 }\n      // \u628A\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5185\u5B58\u5730\u5740\u8D4B\u503C\u7ED9\u53D8\u91CFobj\n      /**\n        * -- \u8BFB\u53D6obj.foo\n        *   1. \u4ECEobj\u62FF\u5230\u5185\u5B58\u5730\u5740\n        *   2. \u4ECE\u8BE5\u5730\u5740\u8BFB\u51FA\u539F\u59CB\u7684\u5BF9\u8C61    \n        *   3. \u8FD4\u56DE\u539F\u59CB\u5BF9\u8C61\u7684foo\u5C5E\u6027\n     **/\n        {\n          foo : {\n              [[value]] : 1,\n              [[writable]]: true,     // \u53EF\u5199\u5165\n              [[enumerable]]:true,    // \u53EF\u679A\u4E3E\n              [[configurable]]:true   // \u53EF\u4FEE\u6539\u5C5E\u6027\u3001\u5220\u9664\n          }\n        }\n    '
}, {
    type: 'renderJS',
    content: ' Eg2 :\n        var obj = { foo : function () {} } \n        \n       // \u5F15\u64CE\u5C06\u51FD\u6570\u5355\u72EC\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u5C06\u51FD\u6570\u5730\u5740\u8D4B\u7ED9foo\u5C5E\u6027\u7684value\u503C\n       // \u7531\u4E8E\u51FD\u6570\u662F\u5355\u72EC\u5B58\u50A8\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u8FD0\u884C\u73AF\u5883 ==>  this\u7684\u5F15\u51FA\uFF0C \u6307\u4EE3\u51FD\u6570\u5F53\u524D\u8FD0\u884C\u73AF\u5883\n       {\n          foo : {\n              [[value]] : \u51FD\u6570\u5185\u5B58\u5730\u5740,\n              [[writable]]: true,     // \u53EF\u5199\u5165\n              [[enumerable]]:true,    // \u53EF\u679A\u4E3E\n              [[configurable]]:true   // \u53EF\u4FEE\u6539\u5C5E\u6027\u3001\u5220\u9664\n          }\n        }\n      '
}, {
    type: 'renderPop',
    html: 'bind pollfill实现',
    content: '\n        <codeBlock>\n        <pre ><code className="language-javascript">\nif (!Function.prototype.bind) {\n  Function.prototype.bind = function (oThis) {\n    var aArgs = Array.prototype.slice.call(arguments, 1),\n      fToBind = this, // this\u5728\u8FD9\u91CC\u6307\u5411\u7684\u662F\u76EE\u6807\u51FD\u6570\n      fBound = function () {\n        return fToBind.apply(\n        // \u5982\u679C\u5916\u90E8\u6267\u884Cvar obj = new fBound(),\u5219\u5C06obj\u4F5C\u4E3A\u6700\u7EC8\u7684this\uFF0C\u653E\u5F03\u4F7F\u7528oThis\n          this instanceof fToBind\n            ? this  // \u6B64\u65F6\u7684this\u5C31\u662Fnew\u51FA\u7684obj\n            : oThis || this, // \u5982\u679C\u4F20\u9012\u7684oThis\u65E0\u6548\uFF0C\u5C31\u5C06fBound\u7684\u8C03\u7528\u8005\u4F5C\u4E3Athis\n\n            / \u5C06\u901A\u8FC7bind\u4F20\u9012\u7684\u53C2\u6570\u548C\u8C03\u7528\u65F6\u4F20\u9012\u7684\u53C2\u6570\u8FDB\u884C\u5408\u5E76\uFF0C\u5E76\u4F5C\u4E3A\u6700\u7EC8\u7684\u53C2\u6570\u4F20\u9012\n          aArgs.concat(Array.prototype.slice.call(arguments)));\n        };\n\n    // \u5C06\u76EE\u6807\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u62F7\u8D1D\u5230\u65B0\u51FD\u6570\u4E2D\uFF0C\u56E0\u4E3A\u76EE\u6807\u51FD\u6570\u6709\u53EF\u80FD\u88AB\u5F53\u4F5C\u6784\u9020\u51FD\u6570\u4F7F\u7528\n      fBound.prototype = this.prototype;\n\n    / \u8FD4\u56DEfBond\u7684\u5F15\u7528\uFF0C\u7531\u5916\u90E8\u6309\u9700\u8C03\u7528\n   return fBound;\n  };\n}\n        </code></pre>\n        </codeBlock>\n        '
}, {
    type: 'renderPop',
    html: '《js高级程序设计》里对作用域的解释',
    content: '\n            <title>\u300Ajs\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B\u91CC\u5BF9\u4F5C\u7528\u57DF\u7684\u89E3\u91CA</title>\n            <codeBlock>\n                <code>\u5F15\u8A00\uFF1A\u4F5C\u7528\u57DF\u5BF9\u4E8E\u5F88\u591A\u6982\u5FF5\u7684\u7406\u89E3\u6709\u5F88\u91CD\u8981\u7684\u4F5C\u7528\uFF0C\u6240\u4EE5\u653E\u5728\u5F00\u5934  </code>\n            </codeBlock>\n            <codeBlock>\n                <title>\u4E00\u3001</title>\n                <code>\u6267\u884C\u73AF\u5883   --  \u5B9A\u4E49\u4E86\u53D8\u91CF\u6216\u51FD\u6570\u6709\u6743\u8BBF\u95EE\u7684\u5176\u4ED6\u6570\u636E</code>\n                <code>\u53D8\u91CF\u5BF9\u8C61 VO  --  \u4FDD\u5B58\u7684\u662F\u73AF\u5883\u4E2D\u5B9A\u4E49\u7684\u6240\u6709\u53D8\u91CF\u548C\u51FD\u6570</code>\n                <code>\u5168\u5C40\u6267\u884C\u73AF\u5883  --  \u6700\u5916\u56F4\u7684\u6267\u884C\u73AF\u5883\u3002\u6839\u636E\u5BBF\u4E3B\u73AF\u5883\uFF0C\u6709\u4E0D\u540C\u7684\u5168\u5C40\u6267\u884C\u73AF\u5883</code>\n                <code>web\u6D4F\u89C8\u5668  ---  window\u5BF9\u8C61</code>\n                <code>VO\u9500\u6BC1\u65F6\u673A  ---   \u6267\u884C\u73AF\u5883\u4E2D\u7684\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u73AF\u5883\u88AB\u9500\u6BC1\uFF0C\u53D8\u91CF\u5BF9\u8C61\u90A3\u4E2A\u968F\u4E4B\u9500\u6BC1</code>\n                <code>\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u81EA\u5DF1\u7684\u6267\u884C\u73AF\u5883\u3002\u6267\u884C\u51FD\u6570\u65F6\uFF0C\u51FD\u6570\u7684\u73AF\u5883\u5C31\u4F1A\u88AB\u63A8\u5165\u4E00\u4E2A\u73AF\u5883\u6808\uFF0C\u6267\u884C\u5B8C\u6BD5\u63A8\u51FA\u6808</code>\n                </code>\n            </codeBlock>\n            <codeBlock>\n                <title>\u4E8C\u3001</title>\n                <code>\u4F5C\u7528\u57DF\u94FE  --  \u4FDD\u8BC1\u5BF9\u6267\u884C\u73AF\u5883\u5185\u7684\u53D8\u91CF\u5BF9\u8C61\u7684\u6709\u5E8F\u8BBF\u95EE</code>\n                <code>\u4F5C\u7528\u57DF\u94FE\u7684\u6700\u524D\u7AEF\u6C38\u8FDC\u662F\u5F53\u524D\u6267\u884C\u7684\u51FD\u6570\u6240\u5728\u73AF\u5883\u7684\u53D8\u91CF\u5BF9\u8C61</code>\n                <code>\u4F5C\u7528\u57DF\u94FE\u9010\u7EA7\u5F80\u4E0B\u4E00\u4E2A\u5305\u542B\u73AF\u5883\u5BFB\u627E\uFF0C\u76F4\u81F3\u5168\u5C40\u6267\u884C\u73AF\u5883</code>\n                <code>\u53EA\u6709\u4F5C\u7528\u57DF\u94FE\u4E0A\u5B58\u5728\u7684\u53D8\u91CF\u624D\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u5230</code>\n                </code>\n            </codeBlock>\n            <codeBlock>\n                <title>\u4E09\u3001</title>\n                <code>\u6D3B\u52A8\u5BF9\u8C61  --  \u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u51FD\u6570\u7684\u53D8\u91CF\u5BF9\u8C61</code>\n                <code>\u548CVO\u5176\u5B9E\u662F\u4E00\u6837\u7684\u5BF9\u8C61\uFF0C\u4F46\u662F\u662F\u4E0D\u540C\u65F6\u95F4\u6BB5\u51FA\u73B0\u7684</code>\n                <code>\u6700\u5F00\u59CB\u53EA\u5305\u542B\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5373arguments\u5BF9\u8C61\u3010\u5168\u5C40\u73AF\u5883\u4E0D\u5B58\u5728\u3011</code>\n                </code>\n            </codeBlock>\n            <codeBlock>\n                <title>\u56DB\u3001</title>\n                <code>\u5EF6\u957F\u4F5C\u7528\u57DF\u94FE  --   \u5728\u4F5C\u7528\u57DF\u94FE\u7684\u524D\u7AEF\u4E34\u65F6\u589E\u52A0\u4E00\u4E2A\u53D8\u91CF\u5BF9\u8C61</code>\n                <code>with  \u5C06\u6307\u5B9A\u7684\u5BF9\u8C61\u6DFB\u52A0\u5230\u4F5C\u7528\u57DF\u94FE\u4E2D</code>\n                <code>catch  \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u3010\u88AB\u629B\u51FA\u7684\u9519\u8BEF\u5BF9\u8C61\u3011</code>\n                </code>\n            </codeBlock>\n            \n        '
}, {
    type: 'renderPop',
    html: '执行上下文（Execution Context = 【VO, ScopeChain）',
    content: '\n            <title>\u6267\u884C\u4E0A\u4E0B\u6587</title>\n\n            <p>\u51FD\u6570\u8C03\u7528\u6808 \uFF08call stack\uFF09 -- \u6808\u5E95\u6C38\u8FDC\u662F\u5168\u5C40\u4E0A\u4E0B\u6587\uFF0C\u6808\u9876\u662F\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u4E0A\u4E0B\u6587\u3002\u5168\u5C40\u4E0A\u4E0B\u6587\u5728\u6D4F\u89C8\u5668\u5173\u95ED\u540E\u51FA\u6808</p>\n            <h3># \u751F\u547D\u5468\u671F</h3>\n\n                <h4>\u521B\u5EFA\u9636\u6BB5</h4>\n                <ul>\n                    <li>1.\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61</li>\n                    <codeBlock>\n                        <code>arguments\u5BF9\u8C61</code>\n                        <code>\u51FD\u6570\u58F0\u660E -- \u6839\u636E\u51FD\u6570\u540D\u521B\u5EFA\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5C5E\u6027\u503C\u6307\u5411\u8BE5\u51FD\u6570\u7684\u5185\u5B58\u5730\u5740\u3002\u540C\u540D\u51FD\u6570\u4F1A\u88AB\u8986\u76D6\u4F18\u5148\u7EA7\u9AD8\u4E8E\u53D8\u91CF\u58F0\u660E</code>\n                        <code>\u53D8\u91CF\u58F0\u660E -- \u6839\u636E\u53D8\u91CF\u540D\u521B\u5EFA\u4E00\u4E2A\u5C5E\u6027\uFF0C\u503C\u4E3Aundefined\u3002</code>\n                        <code> a.\u82E5\u540C\u540D\u53D8\u91CF\u5DF2\u5B58\u5728\uFF0C\u4E3A\u4E86\u9632\u6B62\u540C\u540D\u51FD\u6570\u88AB\u4FEE\u6539\uFF0C\u4F1A\u8DF3\u8FC7\u8BE5\u64CD\u4F5C</code>\n                        <code> b.\u6CE8\u610F\u4E3Avar\u58F0\u660E\u7684\u53D8\u91CF\u5F53\u9047\u5230\u540C\u540D\u7684\u5C5E\u6027\u65F6\uFF0C\u4F1A\u8DF3\u8FC7\u800C\u4E0D\u4F1A\u8986\u76D6</code>\n                        <code> c.es6\u4E2D\u7684let\u60C5\u51B5\u6709\u6240\u4E0D\u540C</code>\n                    </codeBlock>\n                    <codeBlock>\n                        <code>VO = {</code>\n                        <code> arguments: {...}, </code>\n                        <code> foo: <foo reference>  // \u8868\u793Afoo\u7684\u5730\u5740\u5F15\u7528</code>\n                        <code> a: undefined</code>\n                        <code>}</code>\n                    </codeBlock>\n                    <li>2.\u751F\u6210\u4F5C\u7528\u57DF\u94FE</li>\n                    <codeBlock>\n                        <code>\u5168\u5C40\u4F5C\u7528\u57DF\u548C\u51FD\u6570\u4F5C\u7528\u57DF</code>\n                        <code>\u7531\u5F53\u524D\u73AF\u5883\u4E0E\u4E0A\u5C42\u73AF\u5883\u7684\u4E00\u7CFB\u5217\u53D8\u91CF\u5BF9\u8C61\u7EC4\u6210\uFF0C\u5B83\u4FDD\u8BC1\u4E86\u5F53\u524D\u6267\u884C\u73AF\u5883\u5BF9\u7B26\u5408\u8BBF\u95EE\u6743\u9650\u7684\u53D8\u91CF\u548C\u51FD\u6570\u7684\u6709\u5E8F\u8BBF\u95EE</code>\n                    </codeBlock>\n                    <li>3.\u786E\u5B9Athis\u6307\u5411</li>\n                    <codeBlock>\n                        <code>.\u5982\u679C\u8C03\u7528\u8005\u51FD\u6570\uFF0C\u88AB\u67D0\u4E00\u4E2A\u5BF9\u8C61\u6240\u62E5\u6709\uFF0C\u90A3\u4E48\u8BE5\u51FD\u6570\u5728\u8C03\u7528\u65F6\uFF0C\u5185\u90E8\u7684this\u6307\u5411\u8BE5\u5BF9\u8C61\u3002</code>\n                        <code>.\u5982\u679C\u51FD\u6570\u72EC\u7ACB\u8C03\u7528\uFF0C\u90A3\u4E48\u8BE5\u51FD\u6570\u5185\u90E8\u7684this\uFF0C\u5219\u6307\u5411undefined</code>\n                        <code>.\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E2D\uFF0C\u5F53this\u6307\u5411undefined\u65F6\uFF0C\u5B83\u4F1A\u88AB\u81EA\u52A8\u6307\u5411\u5168\u5C40\u5BF9\u8C61</code>\n                        <code>.{}\u4E0D\u4F1A\u5F62\u6210\u4F5C\u7528\u57DF</code>\n                        <code>.\u533F\u540D\u51FD\u6570\uFF0Cthis\u6307\u5411\u5168\u5C40</code>\n                    </codeBlock>\n                </ul>\n                <code></code>\n                <h4>\u6267\u884C\u9636\u6BB5</h4>\n                <ul>\n                    <codeBlock>\n                        <code>// \u6267\u884C\u9636\u6BB5</code>\n                        <code>VO ->  AO   // Active Object</code>\n                        <code>// \u53D8\u91CF\u5BF9\u8C61\u548C\u6D3B\u52A8\u5BF9\u8C61\u662F\u5904\u4E8E\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u4E0D\u540C\u751F\u547D\u5468\u671F\u7684\u540C\u4E00\u4E2A\u5BF9\u8C61</code>\n                        <code>AO = {</code>\n                            <code>arguments: {...},</code>\n                            <code>foo: <foo reference>,</code>\n                            <code> a: 1,</code>\n                            <code>this: Window</code>\n                            <code>}</code>\n                    </codeBlock>\n                    <li>1.\u53D8\u91CF\u590D\u5236</li>\n                    <li>2.\u51FD\u6570\u5F15\u7528</li>\n                    <li>3.\u6267\u884C\u5176\u4ED6\u4EE3\u7801</li>\n                </ul>\n        \n        '
}];

exports.default = Data;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Data = [{
    type: 'renderTitle',
    content: '网络攻击'
}, {
    type: 'renderSubTitle',
    content: '一、xss攻击'
}, {
    type: 'renderHtml',
    content: '\n            <text>XSS(Cross-Site Scripting\uFF0C\u8DE8\u7AD9\u811A\u672C\u653B\u51FB)\u662F\u4E00\u79CD\u4EE3\u7801\u6CE8\u5165\u653B\u51FB\u3002\u653B\u51FB\u8005\u5728\u76EE\u6807\u7F51\u7AD9\u4E0A\u6CE8\u5165\u6076\u610F\u4EE3\u7801\uFF0C\u5F53\u88AB\u653B\u51FB\u8005\u767B\u9646\u7F51\u7AD9\u65F6\u5C31\u4F1A\u6267\u884C\u8FD9\u4E9B\u6076\u610F\u4EE3\u7801\uFF0C\u8FD9\u4E9B\u811A\u672C\u53EF\u4EE5\u8BFB\u53D6 cookie\uFF0Csession tokens\uFF0C\u6216\u8005\u5176\u5B83\u654F\u611F\u7684\u7F51\u7AD9\u4FE1\u606F\uFF0C\u5BF9\u7528\u6237\u8FDB\u884C\u9493\u9C7C\u6B3A\u8BC8\uFF0C\u751A\u81F3\u53D1\u8D77\u8815\u866B\u653B\u51FB\u7B49</text>\n            <text>\n                <ul>\n                    <li>1. \u5B58\u50A8\u578B(\u6301\u4E45\u6027)</li>\n                    <p>\u6076\u610F\u811A\u672C\u6C38\u4E45\u5B58\u50A8\u5728\u76EE\u6807\u670D\u52A1\u5668\u4E0A\u3002\u5F53\u6D4F\u89C8\u5668\u8BF7\u6C42\u6570\u636E\u65F6\uFF0C\u811A\u672C\u4ECE\u670D\u52A1\u5668\u4F20\u56DE\u5E76\u6267\u884C\uFF0C\u5F71\u54CD\u8303\u56F4\u6BD4\u53CD\u5C04\u578B\u548CDOM\u578BXSS\u66F4\u5927\u3002\u5B58\u50A8\u578BXSS\u653B\u51FB\u7684\u539F\u56E0\u4ECD\u7136\u662F\u6CA1\u6709\u505A\u597D\u6570\u636E\u8FC7\u6EE4\uFF1A\u524D\u7AEF\u63D0\u4EA4\u6570\u636E\u81F3\u670D\u52A1\u7AEF\u65F6\uFF0C\u6CA1\u6709\u505A\u597D\u8FC7\u6EE4\uFF1B\u670D\u52A1\u7AEF\u5728\u63A5\u53D7\u5230\u6570\u636E\u65F6\uFF0C\u5728\u5B58\u50A8\u4E4B\u524D\uFF0C\u6CA1\u6709\u505A\u8FC7\u6EE4\uFF1B\u524D\u7AEF\u4ECE\u670D\u52A1\u7AEF\u8BF7\u6C42\u5230\u6570\u636E\uFF0C\u6CA1\u6709\u8FC7\u6EE4\u8F93\u51FA</p>\n                    <codeBlock>\n                        <text>\u653B\u51FB\u6B65\u9AA4</text>\n                        <code>1.\u653B\u51FB\u8005\u5C06\u6076\u610F\u4EE3\u7801\u63D0\u4EA4\u5230\u76EE\u6807\u7F51\u7AD9\u7684\u6570\u636E\u5E93\u4E2D\u3002</code>\n                        <code>2.\u7528\u6237\u6253\u5F00\u76EE\u6807\u7F51\u7AD9\u65F6\uFF0C\u7F51\u7AD9\u670D\u52A1\u7AEF\u5C06\u6076\u610F\u4EE3\u7801\u4ECE\u6570\u636E\u5E93\u53D6\u51FA\uFF0C\u62FC\u63A5\u5728 HTML \u4E2D\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u3002</code>\n                        <code>3.\u7528\u6237\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u54CD\u5E94\u540E\u89E3\u6790\u6267\u884C\uFF0C\u6DF7\u5728\u5176\u4E2D\u7684\u6076\u610F\u4EE3\u7801\u4E5F\u88AB\u6267\u884C\u3002</code>\n                        <code>4.\u6076\u610F\u4EE3\u7801\u7A83\u53D6\u7528\u6237\u6570\u636E\u5E76\u53D1\u9001\u5230\u653B\u51FB\u8005\u7684\u7F51\u7AD9\uFF0C\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884C\u4E3A\uFF0C\u8C03\u7528\u76EE\u6807\u7F51\u7AD9\u63A5\u53E3\u6267\u884C\u653B\u51FB\u8005\u6307\u5B9A\u7684\u64CD\u4F5C\u3002</code>\n                    </codeBlock>\n                    <codeBlock>\n                        <text>\u9632\u5FA1\u63AA\u65BD</text>\n                        <code>1.\u524D\u7AEF\u6570\u636E\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u4E4B\u524D\uFF0C\u5148\u8F6C\u4E49/\u8FC7\u6EE4(\u9632\u8303\u4E0D\u4E86\u6293\u5305\u4FEE\u6539\u6570\u636E\u7684\u60C5\u51B5)</code>\n                        <code>2.\u670D\u52A1\u5668\u63A5\u6536\u5230\u6570\u636E\uFF0C\u5728\u5B58\u50A8\u5230\u6570\u636E\u5E93\u4E4B\u524D\uFF0C\u8FDB\u884C\u8F6C\u4E49/\u8FC7\u6EE4</code>\n                        <code>3.\u524D\u7AEF\u63A5\u6536\u5230\u670D\u52A1\u5668\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u5728\u5C55\u793A\u5230\u9875\u9762\u524D\uFF0C\u5148\u8FDB\u884C\u8F6C\u4E49/\u8FC7\u6EE4</code>\n                    </codeBlock>\n                </ul>\n            </text>\n            <text>\n                <ul>\n                    <li>2.\u53CD\u5C04\u578B(\u975E\u6301\u4E45\u578B)</li>\n                    <codeBlock>\n                        <text>\u653B\u51FB\u6B65\u9AA4</text>\n                        <code>1.\u653B\u51FB\u8005\u6784\u9020\u51FA\u7279\u6B8A\u7684 URL\uFF0C\u5176\u4E2D\u5305\u542B\u6076 \u610F\u4EE3\u7801\u3002</code>\n                        <code>2.\u7528\u6237\u6253\u5F00\u5E26\u6709\u6076\u610F\u4EE3\u7801\u7684 URL \u65F6\uFF0C\u7F51\u7AD9\u670D\u52A1\u7AEF\u5C06\u6076\u610F\u4EE3\u7801\u4ECE URL \u4E2D\u53D6\u51FA\uFF0C\u62FC\u63A5\u5728 HTML \u4E2D\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u3002</code>\n                        <code>3.\u7528\u6237\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u54CD\u5E94\u540E\u89E3\u6790\u6267\u884C\uFF0C\u6DF7\u5728\u5176\u4E2D\u7684\u6076\u610F\u4EE3\u7801\u4E5F\u88AB\u6267\u884C\u3002</code>\n                        <code>4.\u6076\u610F\u4EE3\u7801\u7A83\u53D6\u7528\u6237\u6570\u636E\u5E76\u53D1\u9001\u5230\u653B\u51FB\u8005\u7684\u7F51\u7AD9\uFF0C\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884C\u4E3A\uFF0C\u8C03\u7528\u76EE\u6807\u7F51\u7AD9\u63A5\u53E3\u6267\u884C\u653B\u51FB\u8005\u6307\u5B9A\u7684\u64CD\u4F5C</code>\n                    </codeBlock>\n                    <codeBlock>\n                        <text>\u9632\u5FA1\u63AA\u65BD</text>\n                        <code>1.\u540E\u7AEF\u53EF\u4EE5\u8BBE\u7F6E httpOnly</code>\n                        <code>2.\u5BF9url\u7684\u67E5\u8BE2\u53C2\u6570\u8FDB\u884C\u8F6C\u4E49\u540E\u518D\u8F93\u51FA\u5230\u9875\u9762</code>\n                    </codeBlock>\n                </ul>\n            </text>\n            <text>\n                <ul>\n                    <li>3.DOM\u578B</li>\n                    <codeBlock>\n                        <text>\u653B\u51FB\u6B65\u9AA4</text>\n                        <code>1.\u653B\u51FB\u8005\u6784\u9020\u51FA\u7279\u6B8A\u6570\u636E\uFF0C\u5176\u4E2D\u5305\u542B\u6076\u610F\u4EE3\u7801\u3002</code>\n                        <code>2.\u7528\u6237\u6D4F\u89C8\u5668\u6267\u884C\u4E86\u6076\u610F\u4EE3\u7801\u3002</code>\n                        <code>3.\u6076\u610F\u4EE3\u7801\u7A83\u53D6\u7528\u6237\u6570\u636E\u5E76\u53D1\u9001\u5230\u653B\u51FB\u8005\u7684\u7F51\u7AD9\uFF0C\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884C\u4E3A\uFF0C\u8C03\u7528\u76EE\u6807\u7F51\u7AD9\u63A5\u53E3\u6267\u884C\u653B\u51FB\u8005\u6307\u5B9A\u7684\u64CD\u4F5C\u3002</code>\n                    </codeBlock>\n                    <codeBlock>\n                        <text>\u9632\u5FA1\u63AA\u65BD</text>\n                        <code>1.\u9632\u8303 DOM \u578B XSS \u653B\u51FB\u7684\u6838\u5FC3\u5C31\u662F\u5BF9\u8F93\u5165\u5185\u5BB9\u8FDB\u884C\u8F6C\u4E49(DOM \u4E2D\u7684\u5185\u8054\u4E8B\u4EF6\u76D1\u542C\u5668\u548C\u94FE\u63A5\u8DF3\u8F6C\u90FD\u80FD\u628A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u4EE3\u7801\u8FD0\u884C\uFF0C\u9700\u8981\u5BF9\u5176\u5185\u5BB9\u8FDB\u884C\u68C0\u67E5)</code>\n                    </codeBlock>\n                </ul>\n            </text>\n\n            <text>\u5176\u4ED6\u63AA\u65BD:</text>\n            <text>1.\u670D\u52A1\u7AEF\u4F7F\u7528 HTTP\u7684 Content-Security-Policy \u5934\u90E8\u6765\u6307\u5B9A\u7B56\u7565\uFF0C\u6216\u8005\u5728\u524D\u7AEF\u8BBE\u7F6E meta \u6807\u7B7E\n            <text>2.\u8F93\u5165\u5185\u5BB9\u957F\u5EA6\u548C\u5185\u5BB9\u9650\u5236</text>\n            <text>3.HTTP-only Cookie: \u7981\u6B62 JavaScript \u8BFB\u53D6\u67D0\u4E9B\u654F\u611F Cookie\uFF0C\u653B\u51FB\u8005\u5B8C\u6210 XSS \u6CE8\u5165\u540E\u4E5F\u65E0\u6CD5\u7A83\u53D6\u6B64 Cookie\u3002</text>\n           \n        '
}, {
    type: 'renderSubTitle',
    content: '二、csrf攻击'
}, {
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                <text>\u653B\u51FB\u6D41\u7A0B</text>\n                <code>1.\u53D7\u5BB3\u8005\u767B\u5F55A\u7AD9\u70B9\uFF0C\u5E76\u4FDD\u7559\u4E86\u767B\u5F55\u51ED\u8BC1\uFF08Cookie\uFF09\u3002</code>\n                <code>2.\u653B\u51FB\u8005\u8BF1\u5BFC\u53D7\u5BB3\u8005\u8BBF\u95EE\u4E86\u7AD9\u70B9B\u3002</code>\n                <code>3.\u7AD9\u70B9B\u5411\u7AD9\u70B9A\u53D1\u9001\u4E86\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9ED8\u8BA4\u643A\u5E26\u7AD9\u70B9A\u7684Cookie\u4FE1\u606F\u3002</code>\n                <code>4.\u7AD9\u70B9A\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u5BF9\u8BF7\u6C42\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u5E76\u786E\u8BA4\u662F\u53D7\u5BB3\u8005\u7684\u51ED\u8BC1\uFF0C\u8BEF\u4EE5\u4E3A\u662F\u65E0\u8F9C\u7684\u53D7\u5BB3\u8005\u53D1\u9001\u7684\u8BF7\u6C42\u3002</code>\n                <code>5.\u7AD9\u70B9A\u4EE5\u53D7\u5BB3\u8005\u7684\u540D\u4E49\u6267\u884C\u4E86\u7AD9\u70B9B\u7684\u8BF7\u6C42\u3002</code>\n                <code>6.\u653B\u51FB\u5B8C\u6210\uFF0C\u653B\u51FB\u8005\u5728\u53D7\u5BB3\u8005\u4E0D\u77E5\u60C5\u7684\u60C5\u51B5\u4E0B\uFF0C\u5192\u5145\u53D7\u5BB3\u8005\u5B8C\u6210\u4E86\u653B\u51FB\u3002</code>\n            </codeBlock>\n            <codeBlock>\n                <text>\u9632\u5FA1\u63AA\u65BD</text>\n                <code>1. \u6DFB\u52A0\u9A8C\u8BC1\u7801(\u4F53\u9A8C\u4E0D\u597D)\u9A8C\u8BC1\u7801\u80FD\u591F\u9632\u5FA1CSRF\u653B\u51FB\uFF0C\u4F46\u662F\u6211\u4EEC\u4E0D\u53EF\u80FD\u6BCF\u4E00\u6B21\u4EA4\u4E92\u90FD\u9700\u8981\u9A8C\u8BC1\u7801\uFF0C\u5426\u5219\u7528\u6237\u7684\u4F53\u9A8C\u4F1A\u975E\u5E38\u5DEE\uFF0C\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u5728\u8F6C\u8D26\uFF0C\u4EA4\u6613\u7B49\u64CD\u4F5C\u65F6\uFF0C\u589E\u52A0\u9A8C\u8BC1\u7801\uFF0C\u786E\u4FDD\u6211\u4EEC\u7684\u8D26\u6237\u5B89\u5168\u3002</code>\n                <code>2. \u5224\u65AD\u8BF7\u6C42\u7684\u6765\u6E90\uFF1A\u68C0\u6D4BReferer(\u5E76\u4E0D\u5B89\u5168\uFF0CReferer\u53EF\u4EE5\u88AB\u66F4\u6539)  Referer \u53EF\u4EE5\u4F5C\u4E3A\u4E00\u79CD\u8F85\u52A9\u624B\u6BB5\uFF0C\u6765\u5224\u65AD\u8BF7\u6C42\u7684\u6765\u6E90\u662F\u5426\u662F\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u9274\u4E8E Referer \u672C\u8EAB\u662F\u53EF\u4EE5\u88AB\u4FEE\u6539\u7684\uFF0C\u56E0\u4E3A\u4E0D\u80FD\u4EC5\u4F9D\u8D56\u4E8EReferer</code>\n                <code>3. \u4F7F\u7528Token(\u4E3B\u6D41)\n                CSRF\u653B\u51FB\u4E4B\u6240\u4EE5\u80FD\u591F\u6210\u529F\uFF0C\u662F\u56E0\u4E3A\u670D\u52A1\u5668\u8BEF\u628A\u653B\u51FB\u8005\u53D1\u9001\u7684\u8BF7\u6C42\u5F53\u6210\u4E86\u7528\u6237\u81EA\u5DF1\u7684\u8BF7\u6C42\u3002\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u8981\u6C42\u6240\u6709\u7684\u7528\u6237\u8BF7\u6C42\u90FD\u643A\u5E26\u4E00\u4E2ACSRF\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u53D6\u5230\u7684Token\u3002\u670D\u52A1\u5668\u901A\u8FC7\u6821\u9A8C\u8BF7\u6C42\u662F\u5426\u643A\u5E26\u6B63\u786E\u7684Token\uFF0C\u6765\u628A\u6B63\u5E38\u7684\u8BF7\u6C42\u548C\u653B\u51FB\u7684\u8BF7\u6C42\u533A\u5206\u5F00\u3002\u8DDF\u9A8C\u8BC1\u7801\u7C7B\u4F3C\uFF0C\u53EA\u662F\u7528\u6237\u65E0\u611F\u77E5\u3002</code>\n                <code>- \u670D\u52A1\u7AEF\u7ED9\u7528\u6237\u751F\u6210\u4E00\u4E2Atoken\uFF0C\u52A0\u5BC6\u540E\u4F20\u9012\u7ED9\u7528\u6237</code>\n                <code>- \u7528\u6237\u5728\u63D0\u4EA4\u8BF7\u6C42\u65F6\uFF0C\u9700\u8981\u643A\u5E26\u8FD9\u4E2Atoken</code>\n                <code>- \u670D\u52A1\u7AEF\u9A8C\u8BC1token\u662F\u5426\u6B63\u786E</code>\n                <code>4. Samesite Cookie\u5C5E\u6027</code>\n                \u4E3A\u4E86\u4ECE\u6E90\u5934\u4E0A\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CGoogle\u8D77\u8349\u4E86\u4E00\u4EFD\u8349\u6848\u6765\u6539\u8FDBHTTP\u534F\u8BAE\uFF0C\u4E3ASet-Cookie\u54CD\u5E94\u5934\u65B0\u589ESamesite\u5C5E\u6027\uFF0C\u5B83\u7528\u6765\u6807\u660E\u8FD9\u4E2A Cookie\u662F\u4E2A\u201C\u540C\u7AD9 Cookie\u201D\uFF0C\u540C\u7AD9Cookie\u53EA\u80FD\u4F5C\u4E3A\u7B2C\u4E00\u65B9Cookie\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u7B2C\u4E09\u65B9Cookie\uFF0CSamesite \u6709\u4E24\u4E2A\u5C5E\u6027\u503C\uFF0C\u5206\u522B\u662F Strict \u548C Lax\u3002\n            </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: '三、点击劫持'
}, {
    type: 'renderHtml',
    content: '\n            <text>\u4E00\u4E2AWeb\u9875\u9762\u4E2D\u9690\u85CF\u4E86\u4E00\u4E2A\u900F\u660E\u7684iframe\uFF0C\u7528\u5916\u5C42\u5047\u9875\u9762\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\uFF0C\u5B9E\u9645\u4E0A\u662F\u5728\u9690\u85CF\u7684frame\u4E0A\u89E6\u53D1\u4E86\u70B9\u51FB\u4E8B\u4EF6\u8FDB\u884C\u4E00\u4E9B\u7528\u6237\u4E0D\u77E5\u60C5\u7684\u64CD\u4F5C</text>\n            <codeBlock>\n                <text>\u653B\u51FB\u6D41\u7A0B</text>\n                <code>1.\u653B\u51FB\u8005\u6784\u5EFA\u4E86\u4E00\u4E2A\u7F51\u9875</code>\n                <code>2.\u5C06\u88AB\u653B\u51FB\u7684\u9875\u9762\u653E\u7F6E\u5728\u5F53\u524D\u9875\u9762\u7684 iframe \u4E2D</code>\n                <code>3.\u4F7F\u7528\u6837\u5F0F\u5C06 iframe \u53E0\u52A0\u5230\u5185\u5BB9\u7684\u4E0A\u65B9</code>\n                <code>4.\u5C06iframe\u8BBE\u7F6E\u4E3A100%\u900F\u660E</code>\n                <code>5.\u4F60\u88AB\u8BF1\u5BFC\u70B9\u51FB\u4E86\u7F51\u9875\u5185\u5BB9\uFF0C\u4F60\u4EE5\u4E3A\u4F60\u70B9\u51FB\u7684\u662F***\uFF0C\u800C\u5B9E\u9645\u4E0A\uFF0C\u4F60\u6210\u529F\u88AB\u653B\u51FB\u4E86</code>\n            </codeBlock>\n            <codeBlock>\n                <text>\u9632\u5FA1</text>\n                <code>1.frame busting\n                <pre><code>\n    if ( top.location != window.location ){\n        top.location = window.location\n    }\n                    </code>\n                </pre>\n                <code>\n                \u9700\u8981\u6CE8\u610F\u7684\u662F: HTML5\u4E2Diframe\u7684 sandbox \u5C5E\u6027\u3001IE\u4E2Diframe\u7684security \u5C5E\u6027\u7B49\uFF0C\u90FD\u53EF\u4EE5\u9650\u5236iframe\u9875\u9762\u4E2D\u7684JavaScript\u811A\u672C\u6267\u884C\uFF0C\u4ECE\u800C\u53EF\u4EE5\u4F7F\u5F97 frame busting \u5931\u6548\u3002\n                </code>\n                <code>2. X-Frame-Options</code>\n                <code>X-FRAME-OPTIONS\u662F\u5FAE\u8F6F\u63D0\u51FA\u7684\u4E00\u4E2Ahttp\u5934\uFF0C\u4E13\u95E8\u7528\u6765\u9632\u5FA1\u5229\u7528iframe\u5D4C\u5957\u7684\u70B9\u51FB\u52AB\u6301\u653B\u51FB\u3002\u5E76\u4E14\u5728IE8\u3001Firefox3.6\u3001Chrome4\u4EE5\u4E0A\u7684\u7248\u672C\u5747\u80FD\u5F88\u597D\u7684\u652F\u6301\u3002</code>\n                <code>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4EE5\u4E0B\u503C:</code>\n                <code>DENY: \u62D2\u7EDD\u4EFB\u4F55\u57DF\u52A0\u8F7D</code>\n                <code>SAMEORIGIN: \u5141\u8BB8\u540C\u6E90\u57DF\u4E0B\u52A0\u8F7D</code>\n                <code>ALLOW-FROM: \u53EF\u4EE5\u5B9A\u4E49\u5141\u8BB8frame\u52A0\u8F7D\u7684\u9875\u9762\u5730\u5740</code>\n                </code>\n            </codeBlock>\n        '
}];

exports.default = Data;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.vueData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _Vue = __webpack_require__(172);

var _Vue2 = _interopRequireDefault(_Vue);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var vueData = exports.vueData = {
    title: 'Vue',
    id: 'vue',
    component: _Vue2.default,
    path: '/vue',
    subtitle: 'Vue相关',
    default: '/diff',
    navData: [{
        name: '基础原理',
        submenus: [{
            name: 'data属性相关',
            id: 'data'
        }, {
            name: '属性重名问题',
            id: 'repeatName'
        }]
    }, {
        name: 'vue源码',
        submenus: [{
            name: 'diff',
            id: 'diff'
        }, {
            name: '双向绑定',
            id: 'bind'
        }]
    }, {
        name: '使用技巧及注意点',
        submenus: [{
            name: 'eventbus的使用',
            id: 'eventbus'
        }, {
            name: 'v-model的更多用法',
            id: 'vmodel'
        }, {
            name: '问题记录',
            id: 'question'
        }, {
            name: '优化点',
            id: 'optimize'
        }, {
            name: '小记录',
            id: 'record'
        }]
    }]
};

var navData = vueData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(173)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'data相关的问题'
}];

exports.default = data;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var demo = [{
    type: 'renderCSS',
    content: ''
}, {
    type: 'renderJS',
    content: '\n        '
}];

exports.default = demo;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var data = [{
    type: 'renderTitle',
    content: 'EventBus'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u5229\u7528\u53D1\u5E03/\u8BA2\u9605\u7684\u6A21\u5F0F</text>\n        <text>\u6CE8\u518C\u4E00\u4E2A\u5BF9\u8C61\u3010\u4E2D\u95F4\u8005\u3011\uFF0C \u91CC\u9762\u4E3B\u8981\u5305\u542BaddEventListener \u548C dispatch \u4E24\u4E2A\u51FD\u6570\u3002\n    \u6BCF\u4E00\u6B21addEventListener\u65F6\uFF0C\u4F1A\u5411\u603B\u5BF9\u8C61\u8BA2\u9605\u4E00\u4E2A\u4E8B\u4EF6 \u3010\u4E00\u822C\u5305\u542B\u4F5C\u7528\u57DF\u3001\u4E8B\u4EF6\u540D\u5B57\u3001\u53C2\u6570\u3011\n    \u800C\u6267\u884Cdispatch \u7684\u65F6\u5019\uFF0C \u5C31\u662F\u5728\u8BE5\u5BF9\u8C61\u4E2D\u53BB\u5BFB\u627E\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u5E76\u6267\u884C</text>\n    <text>\u5177\u4F53\u5B9E\u8DF5\uFF0C\u5728vue \u4E2D\u4F7F\u7528eventbus</text>\n        '
}, {
    type: 'renderJS',
    content: '\n// \u521B\u5EFAIndex.vue \u5305\u542B\u4E24\u4E2A\u5B50\u7EC4\u4EF6\n<template>\n  <div>\n      <click-child></click-child>\n      <show-child></show-child>\n  </div>\n</template>\n<script>\nimport ClickChild from \'./ClickChild.vue\'\nimport ShowChild from \'./ShowChild.vue\'\nexport default {\n  name: \'event-bus\' ,\n  components:{ClickChild,ShowChild},\n}\n</script>\n        '
}, {
    type: 'renderSubTitle',
    content: '一、利用vue自身的$emit $on '
}, {
    type: 'renderHtml',
    content: '\n        <text>\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2Avue \u5B9E\u4F8B\uFF0C \u53EF\u4EE5\u5229\u7528\u5B9E\u4F8B\u7684$emit $on \u65B9\u6CD5\u76F4\u63A5\u8FDB\u884C\u7EC4\u4EF6\u95F4\u7684\u4EA4\u4E92</text>\n        <text>\u5E73\u65F6\u7EC4\u4EF6\u5185\u4F7F\u7528\u7684this.$emit \u65B9\u6CD5\uFF0C this\u6307\u5411\u7684\u662Fvm \u5B9E\u4F8B\uFF0C \u6240\u4EE5\u5176\u5B9E\u672C\u8D28\u662F\u4E00\u6837\u7684</text>\n        <codeBlock>\n            // bus.js \u6587\u4EF6\n            <code>import Vue from \'vue\'</code>\n            <code>export const EventBus = new Vue()</code>\n            \n            // click-child\u7EC4\u4EF6\n            <code>EventBus.$emit(\'click\')</code>\n            // show-child\u7EC4\u4EF6\n            <code>EventBus.$on(\'click\', () => {} )</code>\n        </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: '二、全局的事件总线  -- 发布/订阅方法 ， '
}, {
    type: 'renderHtml',
    content: '\n        <text> \u76F8\u6BD4\u4E8E\u524D\u8005\uFF0C\u53EA\u662F\u628AEventBus \u521B\u5EFA\u7684\u5B9E\u4F8B\u653E\u5230\u4E86 Vue\u7684\u539F\u578B\u4E0A</text>\n        <text>\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u5168\u5C40\u901A\u8FC7this.$bus\u6765\u76F4\u63A5\u8BBF\u95EE \u4E8B\u4EF6\u603B\u7EBF\u7684\u5B9E\u4F8B\uFF0C \u907F\u514D\u5404\u5904\u5F15\u7528bus.js \u6587\u4EF6\u7684\u5F0A\u7AEF</text>\n        <codeBlock>\n            <pre><code>\n     Object.defineProperties(Vue.prototype, {\n        $bus: {\n            get: function () {\n                return EventBus\n            }\n        }\n    })    \n</code></pre>\n    </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: '三、原生实现 '
}, {
    type: 'renderJS',
    content: '\n// \u5728Index.vue \u4E2D\u5F15\u5165\u6587\u4EF6   import \'./eventBus\'\n//  \u6838\u5FC3\u6587\u4EF6  eventBus.js\nimport Vue from \'vue\'\nvar factory = function (){\n    var EventBusClass = {}\n\n    EventBusClass = function () {\n        this.listeners = {}\n    }\n    EventBusClass.prototype = {\n        addEventListener: function(type, callback, scope) {\n\t\t\t// arguments \u662F\u4F2A\u6570\u7EC4 \u65E0\u6CD5\u76F4\u63A5\u8C03\u7528slice\u65B9\u6CD5\n\t\t\t// \u5229\u7528 call \u5C06Array.prototype.slice \u65B9\u6CD5\u4F5C\u7528\u57DFarguments\n\t\t\t// \u800Cslice\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\n\t\t\t// \u6240\u4EE5\u53D8\u76F8\u5C06arguments \u8F6C\u5316\u6210\u4E86\u4E00\u4E2A\u5177\u6709\u5B9E\u4F8B\u65B9\u6CD5\u7684\u6570\u7EC4 \u3010\u672C\u8D28\u662F\u751F\u6210\u4E86\u65B0\u7684\u6570\u7EC4\u3011\n\t\t\tvar args = Array.prototype.slice.call(arguments)\n\t\t\targs = args.length > 3 ? args.slice(3) : []\n\t\t\tif(typeof this.listeners[type] != "undefined") {\n\t\t\t\tthis.listeners[type].push({scope:scope, callback:callback, args:args});\n\t\t\t} else {\n\t\t\t\tthis.listeners[type] = [{scope:scope, callback:callback, args:args}];\n\t\t\t}\n        },\n        removeEventListener: function(type, callback, scope) {\n            var curListeners = this.listeners[type]\n\t\t\tif(typeof curListeners != "undefined") {\n\t\t\t\tvar len = this.listeners[type].length;\n\t\t\t\tvar newArray = [];\n\t\t\t\tfor(var i=0; i<len; i++) {\n\t\t\t\t\tvar listener = this.listeners[type][i];\n\t\t\t\t\tif(listener.scope != scope || listener.callback != callback) {\n                        newArray.push(listener)\n\t\t\t\t\t} \n\t\t\t\t}\n\t\t\t\tthis.listeners[type] = newArray;\n\t\t\t}\n        },\n        dispatch: function(type) {\n\t\t\tvar args = Array.prototype.slice.call(arguments)\n            var curListener = this.listeners[type]\n\t\t\tif(typeof curListener != "undefined") {\n\t\t\t\tvar listeners = curListener.slice();\n\t\t\t\tfor(var i=0; i<listeners.length; i++) {\n\t\t\t\t\tvar listener = listeners[i];\n\t\t\t\t\tif(listener && listener.callback) {\n\t\t\t\t\t\tvar concatArgs = args.slice(1).concat(listener.args);\n\t\t\t\t\t\tlistener.callback.apply(listener.scope, concatArgs);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n        },\n        \n    }\n\n\n\tvar EventBus = new EventBusClass();\n\treturn EventBus;\n}\nvar EventBus = factory()\n\nObject.defineProperties(Vue.prototype, {\n    $bus: {\n        get: function () {\n            return EventBus\n        }\n    }\n})\n\n'
}, {
    type: 'renderJS',
    content: '\n// showChild \u5B50\u7EC4\u4EF6\n mounted() {\n    // \u7531\u4E8Ethis.$bus \u6CE8\u518C\u5230\u4E86\u5168\u5C40 \u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528addEventListener, \u6CE8\u518C\u81EA\u5B9A\u4E49\u4E8B\u4EF6\n    this.$bus.addEventListener(\'click\', (e, data) => {\n      console.log(e, \'clickme\')\n    })\n  }\n        '
}, {
    type: 'renderJS',
    content: '\n// clickChild \u5B50\u7EC4\u4EF6\n methods:{\n  handleClick(item){\n      this.$bus.dispatch(\'click\', item)\n      }\n  }\n        '
}, {
    type: 'renderHtml',
    content: '<text> \u6CE8\uFF1A \u867D\u7136\u5C1A\u672A\u4F7F\u7528\u8FC7vue1.0\uFF0C \u4F46\u662F\u67E5\u770B\u8D44\u6599\u8BF4\uFF0Cvue1.0 \u4E2D\u7EC4\u4EF6\u7684\u901A\u4FE1\u4E3B\u8981\u901A\u8FC7vm.dispatch \u6CBF\u7236\u94FE\u5411\u4E0A\u4F20\u64AD\uFF0C \u7528vm.$broadcast \u5411\u4E0B\u5E7F\u64AD</text>'
}];

exports.default = data;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var data = [{
    type: 'renderHtml',
    content: '\n            <codeBlock>\n                vue \u901A\u8FC7Object.defineProperty \u5B9E\u73B0\u6570\u636E\u52AB\u6301\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u7EAF\u5C55\u793A\u7684\u754C\u9762\uFF0C\u53EF\u4EE5\u901A\u8FC7Object.freeze(obj) \u89E3\u9664\u53CC\u5411\u7ED1\u5B9A\uFF0C\u52A0\u5FEB\u901F\u5EA6\u3002\n            </codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var data = [];

exports.default = data;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var data = [{
    type: 'renderTitle',
    content: 'v-if & v-show'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n            <code>v-if \u662F\u6761\u4EF6\u6E32\u67D3\uFF0C\u5E76\u4E14\u662F\u60F0\u6027\u7684</code>\n            <code>v-show \u53EA\u662Fcss display\u5C5E\u6027\u7684\u5207\u6362\u3002\u521D\u59CB\u6E32\u67D3\u6210\u672C\u66F4\u9AD8</code>\n            <code>\u5BF9\u4E00\u4E9B\u573A\u666F\uFF0C\u6BD4\u5982\u6709\u6EDA\u52A8\u7684\u5F39\u6846\uFF0C\u4F7F\u7528v-show\u4F1A\u8BB0\u4F4F\u6EDA\u52A8\u72B6\u6001\u3002\u4E00\u822C\u72B6\u6001\u7684\u91CD\u7F6E\u53EF\u80FD\u4F1A\u9700\u8981\u591A\u52A0\u4E00\u4E9B\u53C2\u6570\u53BB\u63A7\u5236\uFF0C\u5E76\u4E14\u4F1A\u9020\u6210\n            \u4EE3\u7801\u7684\u4E0D\u6613\u7406\u89E3\uFF0C\u6240\u4EE5\u5B9E\u8DF5\u4E2D\uFF0C\u4E00\u822C\u4F1A\u76F4\u63A5\u4F7F\u7528v-if</code>\n        </codeBlock>\n        '
}, {
    type: 'renderTitle',
    content: 'computed & watch'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n            <code>computed \u4F1A\u4F7F\u7528\u7F13\u5B58</code>\n            <code>watch \u5E38\u9002\u7528\u4E8E\u5F02\u6B65\u6216\u8005\u5F00\u9500\u5927\u7684\u64CD\u4F5C</code>\n            <code>\u53EA\u6709\u754C\u9762\u4E0A\u4F7F\u7528\u5230\u7684\u6570\u636E\u624D\u4F1A\u88AB\u6CE8\u518C\u76D1\u542C\uFF0C\u5373\u89E6\u53D1computed\u81EA\u52A8\u8BA1\u7B97\u3002watch\u5E38\u7528\u8BED\u8DEF\u7531\u53D8\u5316\u68C0\u6D4B</code>\n        </codeBlock>\n        '
}, {
    type: 'renderTitle',
    content: 'v-for'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n            <code>v-for\u4F18\u5148\u7EA7\u9AD8\u4E8Ev-if\uFF0C \u4E24\u8005\u5E94\u907F\u514D\u540C\u65F6\u4F7F\u7528</code>\n        </codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var data = [{
    type: 'renderTitle',
    content: '属性重名问题'
}, {
    type: 'renderSubTitle',
    content: '先给出结论： 优先级 props > data  > computed > methods'
}, {
    type: 'renderSubTitle',
    content: '初始化顺序 props > methods > data > computed '
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L48">\u6E90\u7801\u5730\u5740</a>\n    vm._watchers = []\n    const opts = vm.$options\n    if (opts.props) initProps(vm, opts.props)\n    if (opts.methods) initMethods(vm, opts.methods)\n    if (opts.data) {\n        initData(vm)\n    } else {\n        observe(vm._data = {}, true /* asRootData */)\n    }\n    if (opts.computed) initComputed(vm, opts.computed)\n    if (opts.watch && opts.watch !== nativeWatch) {\n        initWatch(vm, opts.watch)\n}</code></pre>\n        </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: '有以下几种属性重名的情况'
}, {
    type: 'renderUl',
    content: ['data 和 computed 出现同名的情况', 'data 和 props 出现同名', 'computed 和 methods 同名']
}, {
    type: 'renderHtml',
    content: '\n         <h4>data \u548C props \u51FA\u73B0\u540C\u540D</h4>\n         <text>props\u4E0A\u7684\u540C\u540D\u5C5E\u6027\u4F1A\u8986\u76D6data,\u629B\u51FA\u8B66\u544A</text>\n         <codeBlock>\n         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L140">\u6E90\u7801\u5730\u5740</a>\n    // initData \u51FD\u6570\n   if (props && hasOwn(props, key)) {\n      process.env.NODE_ENV !== \'production\' && warn(\n        `The data property key is already declared as a prop. ` +\n        `Use prop default value instead.`,\n        vm\n      )\n    }\n        </code></pre>\n        </codeBlock>\n        <h4>data \u548C computed \u51FA\u73B0\u540C\u540D\u7684\u60C5\u51B5</h4>\n        <text>data \u5B9A\u4E49\u7684\u53D8\u91CF\u7684\u4F18\u5148\u7EA7\u6BD4 computed \u9AD8\uFF0C computed \u5B9A\u4E49\u7684\u53D8\u91CF\u4F1A\u88AB\u8986\u76D6\u6389</text>\n        <text> \u6E90\u7801\u4E2D\u6709\u4E00\u6BB5\u4EE3\u7801\uFF0C\u4F1A\u5BF9\u8BE5\u60C5\u51B5\u63D0\u51FA\u4E00\u79CD\u8B66\u544A</text>\n         <codeBlock>\n         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L200">\u6E90\u7801\u5730\u5740</a>\n    // initComputed \u51FD\u6570\n   if (key in vm.$data) {\n        warn(\'The computed property key is already defined in data\', vm)\n    }else if (vm.$options.props && key in vm.$options.props) {\n        warn(The computed property key is already defined as a prop.\', vm)\n    }\n        </code></pre>\n        </codeBlock>\n        <h4>computed \u548C methods \u540C\u540D </h4>\n        <codeBlock>\n         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L230">\u6E90\u7801\u5730\u5740</a>\n    // initComputed \u51FD\u6570  \n   if (process.env.NODE_ENV !== \'production\' &&\n      sharedPropertyDefinition.set === noop) {\n        sharedPropertyDefinition.set = function () {\n        warn(\n            `Computed property key was assigned to but it has no setter.`,\n            this\n        )\n        }\n    }\n        </code></pre>\n        </codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var data = [{
    type: 'renderTitle',
    content: 'v-model更多用法'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u7075\u6D3B\u4F7F\u7528v-model\u53EF\u4EE5\u51CF\u5C11\u5F88\u591A\u4EE3\u7801\u91CF\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406\u7684\u6570\u636E\u90FD\u53EF\u4EE5\u4F7F\u7528v-model</text>\n        <text>\u5E38\u89C1\u7684\u51E0\u79CD input\u3001radio\u3001checkbox\u89C1\u4E0B\u65B9\u7684demo1</text>\n        <text>demo2 \u4E3B\u8981\u662F\u60F3\u8BB0\u5F55\u4E00\u4E0B v-model \u5728\u7EC4\u4EF6\u4E0A\u7684\u7528\u6CD5\u3002\u662F\u7684\uFF0C\u5B83\u8FD8\u53EF\u4EE5\u4F5C\u7528\u5728\u7EC4\u4EF6\u4E0A</text>\n        '
}, {
    type: 'renderJS',
    content: '\ndemo1 : \u5E38\u89C1\u7684\u51E0\u79CDv-model\u7528\u6CD5\n\n<template>\n    <div>\n        <div>\n            <input v-model="msg" placeholder="input message">\n            <p>Msg: {{ msg }}</p>\n        </div>\n       \n        <div>\n            <input type="radio" value="msg1" v-model="msg1">\n            <input type="radio" value="msg2" v-model="msg1">\n            <p>data: {{ msg1 }}</p>\n        </div>\n        \n        <div>\n            <input type="checkbox" value="check" v-model="isChecked" true-value="1" false-value="0"> \n            <p>checked: {{ isChecked }}</p>\n        </div>\n\n        <div>\n            <input type="checkbox" value="c1" v-model="vals">\n            <input type="checkbox" value="c2" v-model="vals">\n            <input type="checkbox" value="c3" v-model="vals">\n            <p>checked: {{ vals }}</p>\n        </div>\n\n        <div @click="showData">\u67E5\u770B\u6570\u636E</div>\n    </div>\n</template>\n\n<script>\n export default {\n  name: \'v-model\' ,\n  data(){\n      return{\n        baseValue: \'33\',\n        checkValue: true,\n        msg: \'\',\n        msg1: false,\n        isChecked: 1,\n        vals: []\n      }\n  },\n  created(){\n\n  },\n  methods: {\n    showData (){\n    }  \n}\n}\n</script>\n        '
}, {
    type: 'renderJS',
    content: '\n1. \u4E00\u4E2A\u7EC4\u4EF6\u4E0A\u7684 v-model \u9ED8\u8BA4\u4F1A\u5229\u7528\u540D\u4E3A value \u7684 prop \u548C\u540D\u4E3A input \u7684\u4E8B\u4EF6\n  |-- \u56E0\u4E3Av-model \u53EA\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\n  |-- \u4EFB\u610F\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u4F7F\u7528\u8BE5\u65B9\u6CD5\uFF0C\u76F4\u63A5\u4F7F\u7528\u9ED8\u8BA4\u7684input \u4E8B\u4EF6 \u548C value props \u503C\n\n  ```\n  <base-model :value="baseValue" @input="parentValue = arguments[0]"></base-model>\n  \n  ```\n2. \u5F53 value\u88AB\u5360\u7528 \u6216\u8005input \u4E0D\u5B58\u5728\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539model \u7684\u5C5E\u6027 [\u5E38\u89C1\u4E8Eselect / checkbox]\n  |-- prop  \u8BE5\u8868\u5355\u5143\u7D20\u7684\u503C\n  |-- event  \u6539\u53D8\u5143\u7D20\u503C\u65F6\u89E6\u53D1\u7684\u4E8B\n\n// demo2 \n\n <base-model v-model="baseValue" ></base-model>\n \nexport const  baseModel = {\n    props: {\n        value: String\n    },\n\n    methods: {\n        handleClick () {\n            this.$emit(\'input\', \'test\')\n        }\n    },\n    \n\n    render (h) {\n        return (\n            <div onClick={() => this.handleClick() }>{this.value}</div>\n        )\n    }\n}\n\n\n<check-model v-model="checkValue"></check-model>\n\nexport const checkModel = {\n    model: {\n        prop: \'checked\',\n        event: \'change\'\n    },\n    props: {\n        checked: Boolean\n    },\n    template: `\n    <input\n      type="checkbox"\n      v-bind:checked="checked"\n      v-on:change="$emit(\'change\', $event.target.checked)"\n    >\n  `\n}\n\n\n        '
}];

exports.default = data;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.MQData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _MobileQuestion = __webpack_require__(174);

var _MobileQuestion2 = _interopRequireDefault(_MobileQuestion);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var MQData = exports.MQData = {
    title: '移动端问题',
    id: 'h5',
    component: _MobileQuestion2.default,
    path: '/mobileQuestion',
    subtitle: '移动端遇到的问题总结',
    default: '/rem',
    navData: [{
        name: '适配问题',
        submenus: [{
            name: 'rem',
            id: 'rem'
        }]
    }]
};

var navData = MQData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(175)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var data = [{
  type: 'renderTitle',
  content: 'ios 输入框 设置line-height， 导致光标显示异常'
}, {
  type: 'renderHtml',
  content: '\n        <text>\u8C03\u8BD5\u65F6\u7528\u7684\u662F\u5B89\u5353\u624B\u673A\uFF0C\u7531\u4E8E\u5B89\u5353input\u8F93\u5165\u6846\u7684\u5149\u6807\u6CA1\u6709ios\u90A3\u4E48\u660E\u663E\uFF0C\u6240\u4EE5\u4E00\u76F4\u6CA1\u6709\u53D1\u73B0\u8FD9\u4E2A\u95EE\u9898\u3002\n        \u4EA7\u751F\u539F\u56E0 \uFF1A \u4E3A\u4E86\u4FDD\u8BC1\u6807\u9898 \u548C input \u6846\u4E2D\u7684\u6587\u5B57\u5782\u76F4\u5C45\u4E2D\uFF0C\u4F7F\u7528\u4E86heigh\u548Cline-height\uFF0C\u5BFC\u81F4\u6574\u4E2A\u5149\u6807\u9AD8\u5EA6\u53D8\u6210\u4E86\u8F93\u5165\u6846\u7684\u9AD8\u5EA6\u3002\u5982\u679C\u4E0D\u5C0F\u5FC3\u5C06 input \u7684height \u6216\u8005 line-height \u8BBE\u7F6E\u4E86\uFF0C \u53EF\u80FD\u5C31\u4F1A\u5BFC\u81F4\u84DD\u8272\u5149\u6807\u5F02\u5E38\u663E\u793A\u7684\u60C5\u51B5\u3002\n        \n        \u8BBE\u8BA1\u7A3F\u89C4\u5219\u662F \uFF1A \u5DE6\u4FA7\u662F\u6807\u9898\uFF0Cinput\u6846\u4F4D\u4E8E\u540C\u4E00\u884C\uFF0C\u9760\u53F3\u4FA7\u8FB9\u7F18\u3002\n        \u601D\u8DEF\u662F \uFF1A \u7531\u4E8E\u672C\u6765\u662F\u8F93\u5165\u6846\u53F3\u6D6E\u52A8\uFF0C\u60F3\u8981\u5782\u76F4\u5C45\u4E2D\uFF0C\u5C31\u4F7F\u7528\u4E86line-height\u3002 \u73B0\u5728\u6539\u53D8\u4E86\u601D\u8DEF\uFF0C\u4F7F\u6574\u4E00\u884C\u9760\u53F3\u663E\u793A\uFF0C\u5C06\u6807\u9898\u8BBE\u7F6E\u4E3A\u6D6E\u52A8\uFF0C\u6B64\u65F6\u5C31\u4E0D\u9700\u8981\u8003\u8651\u8F93\u5165\u6846\u7684\u5C45\u4E2D\u95EE\u9898\u4E86\u3002\n       </text>\n        <codeBlock>\n            <pre><code>\n// \u539F\u4EE3\u7801\n.label { }\n.input{\n\tfloat : right ;\n\theight : 40px;\n\tline-height : 40px;\n}\n\n// \u6700\u7EC8\u89E3\u51B3\u7684\u65B9\u6CD5\u662F\n.form-item{\n\ttext-align : right\n}\n .label { float : left }\n.input{\n\tline-height:20px;\n}\n            </code></pre>\n        </codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'rem'
}, {
    type: 'renderUrl',
    url: 'http://jsrun.pro/8kWKp/edit'
}, {
    type: 'renderHtml',
    content: '\n        <iframe src="//result.jsrun.top/8kWKp/result/light/" frameborder="0" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n        '
}];

exports.default = data;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.ReactData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _React = __webpack_require__(176);

var _React2 = _interopRequireDefault(_React);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var ReactData = exports.ReactData = {
    title: 'React',
    id: 'react',
    component: _React2.default,
    path: '/react',
    subtitle: 'React 相关问题',
    default: '/all',
    navData: [{
        name: 'react',
        submenus: [{
            name: 'react-hook',
            id: 'reacthook'
        }, {
            name: '杂记',
            id: 'all'
        }]
    }, {
        name: 'react-router',
        submenus: [{
            name: '简单远离实现',
            id: 'demo'
        }]
    }]
};

var navData = ReactData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(177)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var demo1 = [{
    type: 'renderTitle',
    content: 'React Element VS React Component'
}, {
    type: 'renderHtml',
    content: '\n            <text>Element \u662F\u4E00\u4E2A\u7EAF\u5BF9\u8C61</text>\n            <text>Component\u6570\u636E\u7ED3\u6784\u662F\u7C7B\u6216\u8005\u7EAF\u5BF9\u8C61\uFF0C\u5B83\u6839\u636E\u8F93\u5165\u53C2\u6570\uFF0C\u5E76\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2AReact Element</text>\n            <text>React \u901A\u8FC7\u5224\u65ADtype\u662F\u5B57\u7B26\u4E32\u8FD8\u662F\u51FD\u6570\u6765\u51B3\u5B9A\u662FElement\u8FD8\u662FComponent</text>\n        '
}, {
    type: 'renderJS',
    content: '\n    // <E /> \u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C \u76F8\u5F53\u4E8EReact.createElement(type, props, children)\n    // \u800CReact.createElement(\'p\', {}, \'\')\u83B7\u5F97\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\n    const E = <p>Wow</p>;\n    render(){\n        return (\n            <div><E /></div>  //\u4F1A\u62A5\u9519\n        )\n    }\n    \n    render(){\n        return (\n            <div>{E}</div>  //\u4E0D\u4F1A\u62A5\u9519\n        )\n    }\n\n\n    render (){\n        // children\u662F\u4E00\u4E2AReact\u5143\u7D20\n        const Child = this.props.children\n        // \u8FD9\u79CD\u65B9\u6CD5\u662F\u9519\u8BEF\u7684\uFF0C children\u662F\u4E00\u4E2AReact\u5143\u7D20\uFF0C \u4E0D\u662F\u7EC4\u4EF6\n        return <div><Child /></div>\n        // \u4EE5\u4E0B\u7684\u65B9\u6CD5\u624D\u662F\u6B63\u786E\u7684\n        return <div>{React.cloneElement(child, {tip: \'right!\'})}</div>\n    }\n'
}];

var data = [].concat(demo1);

exports.default = data;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.CssData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _Css = __webpack_require__(178);

var _Css2 = _interopRequireDefault(_Css);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CssData = exports.CssData = {
    title: 'Html & Css',
    id: 'css',
    component: _Css2.default,
    path: '/htmlcss',
    subtitle: 'html & css 相关问题',
    default: '/all',
    navData: [{
        name: 'Html',
        submenus: [{
            name: 'html5 新增内容',
            id: 'html5'
        }]
    }, {
        name: 'Css',
        submenus: [{
            name: '杂记',
            id: 'all'
        }, {
            name: 'css3 新属性',
            id: 'css3'
        }, {
            name: 'BFC',
            id: 'bfc'
        }, {
            name: '实现局中',
            id: 'center'
        }, {
            name: '盒模型',
            id: 'box'
        }, {
            name: 'flex',
            id: 'flex'
        }]
    }]
};

var navData = CssData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(179)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'css  是否会阻止页面的解析和渲染'
}, {
    type: 'renderHtml',
    content: '\n        <text>1. \u9875\u9762\u7684\u5B8C\u6574\u52A0\u8F7D\u8FC7\u7A0B\u5E94\u8BE5\u53EF\u4EE5\u5206\u4E3A\u89E3\u6790\u548C\u6E32\u67D3\u4E24\u90E8\u5206</text>\n        <text>2. \u7531\u4E8Ejs \u548C css \u7684\u89E3\u6790\u8FC7\u7A0B\u5176\u5B9E\u662F\u4E24\u4E2A\u7EBF\u7A0B\u8FDB\u884C\u7684\uFF0C \u6240\u4EE5\u9875\u9762\u6267\u884C\u5230css\u65F6\uFF0Ccss\u7EBF\u7A0B\u83B7\u53D6\u83B7\u53D6css\u8D44\u6E90\u5E76\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u4E0D\u4F1A\u963B\u585E\u9875\u9762js\u7684\u6267\u884C\u548Cdom\u7ED3\u6784\u7684\u89E3\u6790\u3002</text>\n        <text>3. \u4F46\u662F\u7531\u4E8E\u9875\u9762\u6E32\u67D3\u4F1A\u4F9D\u8D56css\uFF0C\u5E76\u4E14js\u4E5F\u6709\u53EF\u80FD\u5F71\u54CD\u9875\u9762\u7684\u6E32\u67D3\uFF0C\u6240\u4EE5\u6700\u7EC8\u7684\u6E32\u67D3\u8FC7\u7A0B\u4F1A\u7B49\u9875\u9762\u6240\u6709\u7684\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6BD5\u4E4B\u540E\u518D\u6267\u884C\uFF0C\u5373css\u4F1A\u5F71\u54CD\u9875\u9762\u7684</text>\n        '
}];

exports.default = data;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'css3 新增属性'
}, {
    type: 'renderSubTitle',
    content: '一. css3新增了很多选择器， 解决了很多需要js才能解决的布局问题'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n        \n        </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: '二. @font-size 加载字体样式，允许进行自定义字体的载入'
}, {
    type: 'renderSubTitle',
    content: '其他属性'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n            <code>1. word-wrap : </code>\n        </codeBlock>\n        '
}, {
    type: 'renderPop',
    html: 'word-wrap vs  white-space vs word-break',
    content: '\n            <title>word-wrap vs  white-space vs word-break</title>\n            <text>word-wrap -- \u63A7\u5236\u5355\u8BCD\u5982\u4F55\u88AB\u62C6\u5206\u6362\u884C\u7684</text>\n            <codeBlock>\n                <code>1) normal </code>\n                <code>2) break-word  \u53EA\u6709\u5F53\u4E00\u4E2A\u5355\u8BCD\u4E00\u6574\u884C\u90FD\u663E\u793A\u4E0D\u4E0B\u65F6\uFF0C\u624D\u4F1A\u62C6\u5206\u6362\u884C\u8BE5\u5355\u8BCD</code>\n            </codeBlock>\n             <text>white-space -- \u63A7\u5236\u7A7A\u767D\u5B57\u7B26\u7684\u663E\u793A</text>\n            <codeBlock>\n                <code>1) normal </code>\n                <code>2) nowrap \u4E0D\u4EC5\u7A7A\u683C\u88AB\u5408\u5E76\uFF0C\u6362\u884C\u7B26\u65E0\u6548\uFF0C\u8FDE\u539F\u672C\u7684\u81EA\u52A8\u6362\u884C\u90FD\u6CA1\u4E86\uFF01\u53EA\u6709br\u6807\u7B7E\u624D\u80FD\u5BFC\u81F4\u6362\u884C</code>\n                <code>3) pre \u7A7A\u683C\u548C\u6362\u884C\u7B26\u5168\u90FD\u88AB\u4FDD\u7559\u4E86\u4E0B\u6765\uFF0C\u4E0D\u8FC7\u81EA\u52A8\u6362\u884C\u8FD8\u662F\u6CA1\u4E86</code>\n                <code>4) pre-wrap \u4FDD\u7559\u7A7A\u683C\u548C\u6362\u884C\u7B26\uFF0C\u4E14\u53EF\u4EE5\u81EA\u52A8\u6362\u884C</code>\n                <code>5) pre-line \u7A7A\u683C\u88AB\u5408\u5E76\u4E86\uFF0C\u4F46\u662F\u6362\u884C\u7B26\u53EF\u4EE5\u53D1\u6325\u4F5C\u7528</code>\n                <code>\u603B\u7ED3\uFF1A </code>\n                <code>1. normal \u662F\u9ED8\u8BA4\u503C\uFF0C\u53EA\u4FDD\u7559\u81EA\u52A8\u6362\u884C\u548Cbr\u6807\u7B7E\uFF0C nbsp;\u6807\u7B7E</code>\n                <code>2. pre-wrap\uFF0C \u7A7A\u683C\u3001\u6362\u884C\u7B26\u3001\u81EA\u52A8\u6362\u884C\u90FD\u4FDD\u7559\u3002pre-line\u76F8\u6BD4\u8F83\u4E8Epre-wrap\uFF0C\u5408\u5E76\u4E86\u7A7A\u683C\u3002pre\u76F8\u6BD4\u8F83\u4E8Epre-wrap\uFF0C\u5931\u53BB\u4E86\u81EA\u52A8\u6362\u884C\u3002</code>\n                <code>3. nowrap\u53EA\u4FDD\u7559br\u548Cnbsp;\u6807\u7B7E</code>\n            </codeBlock>\n             <text>word-break -  \u63A7\u5236\u5355\u8BCD\u5982\u4F55\u88AB\u62C6\u5206\u6362\u884C</text>\n            <codeBlock>\n                <code>1) normal </code>\n                <code>2) break-all  \u6240\u6709\u5355\u8BCD\u78B0\u5230\u8FB9\u754C\u4E00\u5F8B\u62C6\u5206\u6362\u884C</code>\n                <code>3) keep-all  \u6240\u6709\u201C\u5355\u8BCD\u201D\u4E00\u5F8B\u4E0D\u62C6\u5206\u6362\u884C\uFF0C \u53EA\u6709\u7A7A\u683C\u53EF\u4EE5\u89E6\u53D1\u81EA\u52A8\u6362\u884C</code>\n                <code>4) break-word \u6548\u679C\u8DDFword-wrap:break-word\u4E00\u6837\uFF0C\u7136\u800C\u53EA\u6709Chrome\u3001Safari\u7B49\u90E8\u5206\u6D4F\u89C8\u5668\u652F\u6301</code>\n            </codeBlock>\n            \n        '
}];

exports.default = data;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = [{
    type: 'renderTitle',
    content: 'flexbox'
}, {
    type: 'renderSubTitle',
    content: 'flex 究竟解决了什么问题？'
}, {
    type: 'renderHtml',
    content: '\n            <text>1. flex \u53EF\u4EE5\u5F88\u597D\u7684\u8FDB\u884C\u81EA\u9002\u5E94\u51E0\u680F\u5E03\u5C40</text>\n            <text>2. flex \u53EF\u4EE5\u5F88\u597D\u7684\u8FDB\u884C\u5BF9\u9F50\u5C45\u4E2D\u64CD\u4F5C</text>\n            <text>2. flex \u5F88\u9002\u5408\u54CD\u5E94\u5F0F\u5E03\u5C40\u3002\u4E0D\u7528\u8BBE\u7F6E\u56FA\u5B9A\u7684\u5BBD\u9AD8\u3002\u5E76\u4E14\u901A\u8FC7\u8BBE\u7F6E\u5143\u7D20\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u53EF\u4EE5\u51CF\u5C11\u540E\u671F\u4FEE\u6539\u4EE3\u7801\u7684\u6210\u672C\u3002</text>\n            <text>flex \u4F7F\u7528\u66F4\u4E3A\u7B80\u6D01\u7684\u6805\u683C\u7CFB\u7EDF\u3002\u4EE5\u5F80\u6211\u4EEC\u90FD\u662F\u4F7F\u7528\u6D6E\u52A8 \u6216\u8005\u5185\u8054 \u6765\u5B9E\u73B0\u76F8\u5173\u7684\u5E03\u5C40\uFF0C\u4F46\u662F\u4F1A\u7275\u626F\u51FA\u5176\u4ED6\u7684\u4E00\u4E9B\u95EE\u9898\u3002\n            \u800C\u4F7F\u7528flex\u5E03\u5C40\u5219\u4E0D\u4F1A\u6709\u8FD9\u4E9B\u5F71\u54CD\u3002</text>\n            <text>\u6211\u4EEC</text>\n        '
}, {
    type: 'renderPop',
    html: '清除浮动带来的影响',
    content: '\n        <title>\u6E05\u9664\u6D6E\u52A8\u5E26\u6765\u7684\u5F71\u54CD</title>\n        <text>1.  \u6E05\u9664\u4E00\u4E2A\u5143\u7D20\u7684\u6D6E\u52A8\u6709\u65F6\u4F1A\u5F3A\u5236\u5B83\u51FA\u73B0\u5728\u4E00\u4E2A\u4E0D\u76F8\u5173\u7684\u9875\u9762\u90E8\u5206\u7684\u4E0B\u8FB9</text>\n        <text>2. \u6E05\u9664\u6D6E\u52A8\u4F1A\u4F7F\u7528\u5230before \u548C after\u4E24\u4E2A\u4F2A\u5143\u7D20\uFF0C\u5BFC\u81F4\u4E0D\u80FD\u5C06\u4F2A\u5143\u7D20\u7528\u4E8E\u5176\u5B83\u7528\u9014</text>\n        '
}, {
    type: 'renderPop',
    html: '使用内联产生的影响',
    content: '\n        <title>\u4F7F\u7528\u5185\u8054\u4EA7\u751F\u7684\u5F71\u54CD</title>\n        <text>1.  \u5185\u8054\u95F4\u7684\u7A7A\u767D\u95EE\u9898</text>\n        <codeBlock>\n            <code>\u65B9\u6CD51:</code>\n            <code><li>1</li </code>\n            <code>/</code>\n            <code>\u65B9\u6CD52:</code>\n            <code><li>1</li><!-- </code>\n            <code>--!><li>2</li></code>\n            <code>\u65B9\u6CD53:</code>\n            <code><li> </code>\n            <code>1</li><li></code>\n            <code>2</li></code>\n            <code>\u65B9\u6CD54:</code>\n            <code><li>1 </code>\n            <code><li>2</code>\n            <code>\u65B9\u6CD55:</code>\n            <code>\u8BBE\u7F6Efont-size\u4E3A0</code>\n            <code>\u65B9\u6CD56:</code>\n            <code>\u8BBE\u7F6E\u8D1F\u7684margin\u503C</code>\n            <code>\u65B9\u6CD57:</code>\n            <code>\u4F7F\u7528flex\u5E03\u5C40</code>\n            <code>\u65B9\u6CD58:</code>\n            <code>\u4F7F\u7528float\u5E03\u5C40</code>\n        </codeBlock>\n        '
}, {
    type: 'renderSubTitle',
    content: 'flex 常见实践'
}, {
    type: 'renderUl',
    content: ['输入附加组件', '粘性页脚', '垂直居中']
}, {
    type: 'renderSubTitle',
    content: 'flex 基础属性'
}];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'html5 新增内容'
}, {
    type: 'renderSubTitle',
    content: ''
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n        \n        </codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.webpackData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _Webpack = __webpack_require__(180);

var _Webpack2 = _interopRequireDefault(_Webpack);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var webpackData = exports.webpackData = {
    title: 'Webpack',
    id: 'Webpack',
    component: _Webpack2.default,
    path: '/webpack',
    subtitle: 'webpack相关',
    default: '/summary1',
    navData: [{
        name: '杂记',
        submenus: [{
            name: '杂记1',
            id: 'summary1'
        }]
    }, {
        name: '使用过的Plugin',
        submenus: [{
            name: 'plugin',
            id: 'Plugin'
        }]
    }]
};

var navData = webpackData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(181)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'copy-webpack-plugin'
}, {
    type: 'renderHtml',
    content: '\n         <codeBlock>\n            const CopyPlugin = require(\'copy-webpack-plugin\')\n            new CopyPlugin([\n                {\n                  from: path.join(__dirname, \'./src/statics/\'),\n                  to: path.resolve(__dirname, \'./dist/statics\')\n                }\n              ])\n          </codeBlock>\n        '
}, {
    type: 'renderTitle',
    content: 'html-webpack-plugin'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n           \n          </codeBlock>\n        '
}, {
    type: 'renderTitle',
    content: 'webpack.DefinePlugin'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n           \n          </codeBlock>\n        '
}, {
    type: 'renderTitle',
    content: 'webpack-runtime-public-path-plugin'
}, {
    type: 'renderHtml',
    content: '\n        <codeBlock>\n           \n          </codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'runtime'
}, {
    type: 'renderHtml',
    content: '\n         <codeBlock>\n            \u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0Cwebpack\u7528\u6765\u8FDE\u63A5\u6A21\u5757\u5316\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u6240\u6709\u4EE3\u7801\u3002\n            \u5305\u542B\uFF1A \u6A21\u5757\u4EA4\u4E92\u65F6\u3001\u8FDE\u63A5\u6A21\u5757\u6240\u9700\u7684\u52A0\u8F7D\u548C\u89E3\u6790\u903B\u8F91\n            \u5305\u62EC\uFF1A \u5DF2\u7ECF\u52A0\u8F7D\u5230\u6D4F\u89C8\u5668\u4E2D\u7684\u8FDE\u63A5\u6A21\u5757\u903B\u8F91\u3001\u5C1A\u672A\u52A0\u8F7D\u6A21\u5757\u7684\u5EF6\u8FDF\u52A0\u8F7D\u903B\u8F91\n         </codeBlock>\n        '
}];

exports.default = data;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.MathData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _Math = __webpack_require__(182);

var _Math2 = _interopRequireDefault(_Math);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var MathData = exports.MathData = {
    title: '编程与数学',
    id: 'math',
    component: _Math2.default,
    path: '/math',
    default: '/andor',
    subtitle: '编程与数学, 从来都是一家',
    navData: [{
        name: 'andor',
        submenus: [{
            name: '与或非',
            id: 'andor'
        }]
    }]
};

var navData = MathData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(183)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: '与或非'
}, {
    type: 'renderText',
    content: '偶然在掘金上看到一篇文章， 讲述了如何简化js中的与或非的逻辑，有所感悟。这的确不就是一道数学题吗?'
}, {
    type: 'renderText',
    content: '虽然并不一定很实用，但我觉得这是一种思路问题， 多种思路多种解决方式。在实际业务中，因为追求代码简化，抛弃了原来的判断逻辑，可能会适得其反，因为后面维护的人就无法得知他的逻辑究竟是什么。所以一切从实际需求出发。'
}, {
    type: 'renderText',
    content: '下面是一个举例，经过数学的处理，可以很完美的解释数学的魅力'
}, {
    type: 'renderJS',
    content: 'a && d || b && c && !d || (!a || !b) && c'
}, {
    type: 'renderHtml',
    content: '\n        <text>\u4E0A\u9762\u7684\u4EE3\u7801\u8F6C\u5316\u4E3A\u6570\u5B66\u539F\u7406\uFF0C\u5176\u5B9E\u5C31\u662F\u5E03\u5C14\u4EE3\u6570\uFF0C \u5927\u5B66\u57FA\u672C\u90FD\u5B66\u8FC7\u3002</text>\n        <text>\u6839\u636E\u4EE5\u4E0B\u7B49\u4EF7\u5173\u7CFB\uFF1A</text>\n        <text>a && d  =>  AB</text>\n        <text>a || b =>  A + B</text>\n        <text>!a => <span class="td-o">A</span></text>\n        <text>\u53EF\u4EE5\u8F6C\u5316\u4E3A\u4EE5\u4E0B\u7684\u6570\u5B66\u9898</text>\n        <text>AD + BC<span class="td-o">D</span> + (<span class="td-o">A</span> + <span class="td-o">B</span>)C</text>\n        '
}, {
    type: 'renderText',
    content: '接下去的问题就转化成了如何简化这一个数学公式。布尔代数有几个基本公式'
}, {
    type: 'renderHtml',
    content: '\n        <text>1. A + A = A, A + <span class="td-o">A</span> = 1</text>\n        <text>2. AB + A<span class="td-o">B</span> = 1</text>\n        <text>3. A + AB = A</text>\n        <text>4. <span class="td-o">A</span> + <span class="td-o">B</span> = <span class="td-o">AB</span> , <span class="td-o">A</span><span class="td-o">B</span> = <span class="td-o">A+B</span></text>\n        <text>5. AB + <span class="td-o">A</span>C= AB + <span class="td-o">A</span>C + BC  </text>\n        '
}, {
    type: 'renderHtml',
    content: '\n        <text>\u539F\u59CB\u5F0F\u5B50\uFF1AAD + BC<span class="td-o">D</span> + (<span class="td-o">A</span> + <span class="td-o">B</span>)C\uFF0C \u4F9D\u6B21\u8F6C\u5316\u5982\u4E0B</text>\n        <text>=> \u5229\u7528\u516C\u5F0F4   AD + BC<span class="td-o">D</span> + <span class="td-o">AB</span>C </text>\n        <text>=> \u5229\u7528\u516C\u5F0F5   AD + BC<span class="td-o">D</span> + ABC +<span class="td-o">AB</span>C</text>\n        <text>=> \u5229\u7528\u516C\u5F0F2   AD + BC<span class="td-o">D</span> + C </text>\n        <text>=> \u5229\u7528\u516C\u5F0F2   AD + C </text>\n        '
}, {
    type: 'renderText',
    content: '至此，转化完毕，简洁的代码出现了'
}, {
    type: 'renderHtml',
    content: '\n\n        \n         \u53C2\u8003\u6587\u7AE0\uFF1A <a href="https://juejin.im/post/5e078eede51d45583a66d1e0">https://juejin.im/post/5e078eede51d45583a66d1e0</a>\n        '
}];

exports.default = data;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.content = exports.HttpData = undefined;

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _Render = __webpack_require__(16);

var _Render2 = _interopRequireDefault(_Render);

var _Http = __webpack_require__(184);

var _Http2 = _interopRequireDefault(_Http);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var HttpData = exports.HttpData = {
    title: 'Http',
    id: 'Http',
    component: _Http2.default,
    path: '/http',
    subtitle: '网络知识',
    default: '/cookie',
    navData: [{
        name: '缓存那些事儿',
        submenus: [{
            name: 'cookie、session等',
            id: 'cookie'
        }]
    }]
};

var navData = HttpData.navData;
var menu = {};

navData.map(function (item) {
    item.submenus.map(function (it) {
        menu[it.id] = function (props) {
            return _react2.default.createElement('div', { key: it }, (0, _Render2.default)(__webpack_require__(185)("./" + it.id).default, props));
        };
    });
});

var content = exports.content = (0, _extends3.default)({}, menu);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = [{
    type: 'renderTitle',
    content: 'Cookie、Session'
}, {
    type: 'renderSubTitle',
    content: '认证 Authentication'
}, {
    type: 'renderSubTitle',
    content: '授权 Authorization'
}, {
    type: 'renderText',
    content: '授权方式cookie、session、token、OAuth'
}, {
    type: 'renderSubTitle',
    content: '凭证 Credentials'
}, {
    type: 'renderSubTitle',
    content: 'Cookie'
}, {
    type: 'renderHtml',
    content: '\n        <text>1.</text>\n        '
}];

exports.default = data;

/***/ }),
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactRedux = __webpack_require__(198);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(119);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(123);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(194);

__webpack_require__(195);

var _prismjs = __webpack_require__(196);

var _prismjs2 = _interopRequireDefault(_prismjs);

__webpack_require__(197);

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
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _Home = __webpack_require__(125);

var _Home2 = _interopRequireDefault(_Home);

var _Wrap = __webpack_require__(187);

var _Wrap2 = _interopRequireDefault(_Wrap);

var _config = __webpack_require__(71);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Routes = function Routes() {
    return _react2.default.createElement(_reactRouterDom.HashRouter, null, _react2.default.createElement(_reactRouterDom.Switch, null, _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default, exact: true }), _config.summary.map(function (item) {
        return _react2.default.createElement(_reactRouterDom.Route, {
            key: item.id,
            path: item.path + '/:id',
            render: function render() {
                return _react2.default.createElement(_Wrap2.default, {
                    title: item.title,
                    navData: item.navData,
                    Component: item.component });
            }
        });
    })));
};

exports.default = Routes;

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(71);

var _index = __webpack_require__(186);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var getCurTime = function getCurTime() {
    var t = new Date();
    var m = t.getMonth() + 1;
    var d = t.getDate();
    var h = t.getHours();
    var min = t.getMinutes();
    return {
        month: m > 9 ? m : '0' + m,
        day: d > 9 ? d : '0' + d,
        hour: h > 9 ? h : '0' + h,
        minute: min > 9 ? min : '0' + min
    };
};
var calendar = [getCurTime()];

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.toPage = function (data) {
            _this.props.history.push('' + data.path + (data.default ? data.default : ''));
        };

        _this.getTime = function () {

            var getCurTime = function getCurTime() {
                var t = new Date();
                var m = t.getMonth() + 1;
                var d = t.getDate();
                var h = t.getHours();
                var min = t.getMinutes();
                var calendar = _this.state.calendar;

                calendar.push({
                    month: m > 9 ? m : '0' + m,
                    day: d > 9 ? d : '0' + d,
                    hour: h > 9 ? h : '0' + h,
                    minute: min > 9 ? min : '0' + min
                });
                if (calendar.length > 2) {
                    calendar.splice(0, 1);
                }
                _this.setState({
                    calendar: calendar
                });
            };
            _this.timmer = setInterval(getCurTime, 1000);
        };

        _this.renderTitle = function () {
            return _react2.default.createElement('div', { className: _index2.default['transition-down'] }, _react2.default.createElement('p', { className: _index2.default.title, key: 'title' }, 'Yezi Zhang'), _react2.default.createElement('p', { className: _index2.default.subtitle, key: 'subtitle' }, 'my only sunshine'));
        };

        _this.renderCalendar = function () {
            var calendar = _this.state.calendar;

            var prev = calendar[0];
            var after = calendar[1];
            if (!prev || !after) {
                return null;
            }
            return _react2.default.createElement('div', { className: 'mt-30 ' + _index2.default['calendar-box'] }, _react2.default.createElement('div', { className: _index2.default.calendar }, _react2.default.createElement('span', { key: prev.month }, prev.month), after.month != prev.month && _react2.default.createElement('span', { key: after.month }, after.month)), '\u6708', _react2.default.createElement('div', { className: _index2.default.calendar }, _react2.default.createElement('span', { key: prev.day }, prev.day), after.day != prev.day && _react2.default.createElement('span', { key: after.day }, after.day)), '\u65E5', _react2.default.createElement('div', { className: _index2.default.calendar }, _react2.default.createElement('span', { key: prev.hour }, prev.hour), after.hour != prev.hour && _react2.default.createElement('span', { key: after.hour }, after.hour)), ':', _react2.default.createElement('div', { className: _index2.default.calendar }, _react2.default.createElement('span', { key: prev.minute }, prev.minute), after.minute != prev.minute && _react2.default.createElement('span', { key: after.minute }, after.minute)));
        };

        _this.renderArticles = function () {
            return _react2.default.createElement('div', { className: 'pos-r ta-l oh mt-60' }, _react2.default.createElement('div', { className: _index2.default.title1 }, 'Articles'), _react2.default.createElement('div', { className: 'ml-20' }, _config.summary.map(function (item) {
                return _react2.default.createElement('div', { className: _index2.default.box, key: item.id, onClick: _this.toPage.bind(_this, item) }, _react2.default.createElement('span', { 'data-hover': item.title }, item.title), _react2.default.createElement('span', null, item.subtitle));
            })));
        };

        _this.renderContent = function () {
            return _react2.default.createElement('div', { className: 'pos-r ta-l oh mt-60' }, _react2.default.createElement('div', { className: _index2.default.title1 }, 'Works'), _react2.default.createElement('div', { className: 'ml-20' }));
        };

        _this.state = {
            calendar: calendar
        };

        _this.timer = null;
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getTime();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.timer && clearInterval(this.timer);
        }

        // 暂定 未开放

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'ta-c' }, this.renderTitle(), this.renderCalendar(), this.renderArticles());
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(72);

function _interopRequireDefault(obj) {
   return obj && obj.__esModule ? obj : { default: obj };
}

var JS = function (_Component) {
   (0, _inherits3.default)(JS, _Component);

   function JS(props) {
      (0, _classCallCheck3.default)(this, JS);

      var _this = (0, _possibleConstructorReturn3.default)(this, (JS.__proto__ || (0, _getPrototypeOf2.default)(JS)).call(this, props));

      _this.showPop = function (e, show, html) {
         e.stopPropagation();
         _this.setState({
            showPop: show,
            popData: html
         });
      };

      _this.hidePop = function () {
         _this.setState({
            showPop: false,
            popData: null
         });
      };

      _this.state = {
         showPop: false,
         popData: null
      };
      return _this;
   }

   (0, _createClass3.default)(JS, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         this.preId = activeId;
      }
   }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
         Prism.highlightAll();
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         if (activeId != this.preId) {
            document.getElementById('scroll-container').scrollTop = 0;
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         var Com = _index.content[activeId];
         return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
      }
   }]);
   return JS;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(JS);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"popright":"popright-UDmbY","content":"content-3rNt_"};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"block":"block-1mmd3","icon":"icon-2rkwU","title":"title-2-4Or","subtitle":"subtitle-3yLIN","terminal":"terminal-2XHz9","ul":"ul-1SHeh","pop":"pop-3jPPS"};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all": 73,
	"./all.js": 73,
	"./bibao": 74,
	"./bibao.js": 74,
	"./cache": 75,
	"./cache.js": 75,
	"./dataType": 76,
	"./dataType.js": 76,
	"./eventLoop": 77,
	"./eventLoop.js": 77,
	"./jsonp": 78,
	"./jsonp.js": 78,
	"./prototype": 79,
	"./prototype.js": 79,
	"./pubsub": 80,
	"./pubsub.js": 80,
	"./sync": 81,
	"./sync.js": 81,
	"./this": 82,
	"./this.js": 82,
	"./xss": 83,
	"./xss.js": 83
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 171;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(84);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Vue = function (_Component) {
    (0, _inherits3.default)(Vue, _Component);

    function Vue(props) {
        (0, _classCallCheck3.default)(this, Vue);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Vue.__proto__ || (0, _getPrototypeOf2.default)(Vue)).call(this, props));

        _this.showPop = function (e, show, html) {
            e.stopPropagation();
            _this.setState({
                showPop: show,
                popData: html
            });
        };

        _this.hidePop = function () {
            _this.setState({
                showPop: false,
                popData: null
            });
        };

        _this.state = {
            showPop: false,
            popData: null
        };
        return _this;
    }

    (0, _createClass3.default)(Vue, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            this.preId = activeId;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            Prism.highlightAll();
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            if (activeId != this.preId) {
                document.getElementById('scroll-container').scrollTop = 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            var Com = _index.content[activeId];
            return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
        }
    }]);
    return Vue;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Vue);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./data": 85,
	"./data.js": 85,
	"./diff": 86,
	"./diff.js": 86,
	"./eventbus": 87,
	"./eventbus.js": 87,
	"./optimize": 88,
	"./optimize.js": 88,
	"./question": 89,
	"./question.js": 89,
	"./record": 90,
	"./record.js": 90,
	"./repeatName": 91,
	"./repeatName.js": 91,
	"./vmodel": 92,
	"./vmodel.js": 92
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 173;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(93);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var MobileQuestion = function (_Component) {
    (0, _inherits3.default)(MobileQuestion, _Component);

    function MobileQuestion(props) {
        (0, _classCallCheck3.default)(this, MobileQuestion);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MobileQuestion.__proto__ || (0, _getPrototypeOf2.default)(MobileQuestion)).call(this, props));

        _this.showPop = function (e, show, html) {
            e.stopPropagation();
            _this.setState({
                showPop: show,
                popData: html
            });
        };

        _this.hidePop = function () {
            _this.setState({
                showPop: false,
                popData: null
            });
        };

        _this.state = {
            showPop: false,
            popData: null
        };
        return _this;
    }

    (0, _createClass3.default)(MobileQuestion, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            this.preId = activeId;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            Prism.highlightAll();
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            if (activeId != this.preId) {
                document.getElementById('scroll-container').scrollTop = 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            var Com = _index.content[activeId];
            return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
        }
    }]);
    return MobileQuestion;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(MobileQuestion);

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./firstPage": 94,
	"./firstPage.js": 94,
	"./question1": 95,
	"./question1.js": 95,
	"./rem": 96,
	"./rem.js": 96
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 175;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(97);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var ReactCom = function (_Component) {
    (0, _inherits3.default)(ReactCom, _Component);

    function ReactCom(props) {
        (0, _classCallCheck3.default)(this, ReactCom);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReactCom.__proto__ || (0, _getPrototypeOf2.default)(ReactCom)).call(this, props));

        _this.showPop = function (e, show, html) {
            e.stopPropagation();
            _this.setState({
                showPop: show,
                popData: html
            });
        };

        _this.hidePop = function () {
            _this.setState({
                showPop: false,
                popData: null
            });
        };

        _this.state = {
            showPop: false,
            popData: null
        };
        return _this;
    }

    (0, _createClass3.default)(ReactCom, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            this.preId = activeId;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            Prism.highlightAll();
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            if (activeId != this.preId) {
                document.getElementById('scroll-container').scrollTop = 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            var Com = _index.content[activeId];
            return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
        }
    }]);
    return ReactCom;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(ReactCom);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all": 98,
	"./all.js": 98,
	"./reacthook": 99,
	"./reacthook.js": 99
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 177;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(100);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Css = function (_Component) {
    (0, _inherits3.default)(Css, _Component);

    function Css(props) {
        (0, _classCallCheck3.default)(this, Css);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Css.__proto__ || (0, _getPrototypeOf2.default)(Css)).call(this, props));

        _this.showPop = function (e, show, html) {
            e.stopPropagation();
            _this.setState({
                showPop: show,
                popData: html
            });
        };

        _this.hidePop = function () {
            _this.setState({
                showPop: false,
                popData: null
            });
        };

        _this.state = {
            showPop: false,
            popData: null
        };
        return _this;
    }

    (0, _createClass3.default)(Css, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            this.preId = activeId;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            Prism.highlightAll();
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            if (activeId != this.preId) {
                document.getElementById('scroll-container').scrollTop = 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            var Com = _index.content[activeId];
            return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
        }
    }]);
    return Css;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Css);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all": 101,
	"./all.js": 101,
	"./css3": 102,
	"./css3.js": 102,
	"./flex": 103,
	"./flex.js": 103,
	"./html5": 104,
	"./html5.js": 104
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 179;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(105);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Webpack = function (_Component) {
    (0, _inherits3.default)(Webpack, _Component);

    function Webpack(props) {
        (0, _classCallCheck3.default)(this, Webpack);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Webpack.__proto__ || (0, _getPrototypeOf2.default)(Webpack)).call(this, props));

        _this.showPop = function (e, show, html) {
            e.stopPropagation();
            _this.setState({
                showPop: show,
                popData: html
            });
        };

        _this.hidePop = function () {
            _this.setState({
                showPop: false,
                popData: null
            });
        };

        _this.state = {
            showPop: false,
            popData: null
        };
        return _this;
    }

    (0, _createClass3.default)(Webpack, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            this.preId = activeId;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            Prism.highlightAll();
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            if (activeId != this.preId) {
                document.getElementById('scroll-container').scrollTop = 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var match = this.props.match;
            var params = match.params;

            var activeId = params.id;
            var Com = _index.content[activeId];
            return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
        }
    }]);
    return Webpack;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Webpack);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Plugin": 106,
	"./Plugin.js": 106,
	"./summary1": 107,
	"./summary1.js": 107
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 181;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(108);

function _interopRequireDefault(obj) {
   return obj && obj.__esModule ? obj : { default: obj };
}

var Math = function (_Component) {
   (0, _inherits3.default)(Math, _Component);

   function Math(props) {
      (0, _classCallCheck3.default)(this, Math);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Math.__proto__ || (0, _getPrototypeOf2.default)(Math)).call(this, props));

      _this.showPop = function (e, show, html) {
         e.stopPropagation();
         _this.setState({
            showPop: show,
            popData: html
         });
      };

      _this.hidePop = function () {
         _this.setState({
            showPop: false,
            popData: null
         });
      };

      _this.state = {
         showPop: false,
         popData: null
      };
      return _this;
   }

   (0, _createClass3.default)(Math, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         this.preId = activeId;
      }
   }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
         Prism.highlightAll();
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         if (activeId != this.preId) {
            document.getElementById('scroll-container').scrollTop = 0;
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         var Com = _index.content[activeId];
         return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
      }
   }]);
   return Math;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Math);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./andor": 109,
	"./andor.js": 109
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 183;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _PopRight = __webpack_require__(15);

var _PopRight2 = _interopRequireDefault(_PopRight);

var _index = __webpack_require__(110);

function _interopRequireDefault(obj) {
   return obj && obj.__esModule ? obj : { default: obj };
}

var Http = function (_Component) {
   (0, _inherits3.default)(Http, _Component);

   function Http(props) {
      (0, _classCallCheck3.default)(this, Http);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Http.__proto__ || (0, _getPrototypeOf2.default)(Http)).call(this, props));

      _this.showPop = function (e, show, html) {
         e.stopPropagation();
         _this.setState({
            showPop: show,
            popData: html
         });
      };

      _this.hidePop = function () {
         _this.setState({
            showPop: false,
            popData: null
         });
      };

      _this.state = {
         showPop: false,
         popData: null
      };
      return _this;
   }

   (0, _createClass3.default)(Http, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         this.preId = activeId;
      }
   }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
         Prism.highlightAll();
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         if (activeId != this.preId) {
            document.getElementById('scroll-container').scrollTop = 0;
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var match = this.props.match;
         var params = match.params;

         var activeId = params.id;
         var Com = _index.content[activeId];
         return _react2.default.createElement('div', { key: activeId, className: 'pos-r', onClick: this.hidePop, style: { paddingBottom: '100px' } }, activeId && _react2.default.createElement(Com, { showPop: this.showPop }), _react2.default.createElement(_PopRight2.default, { popData: this.state.popData, showPop: this.showPop, show: this.state.showPop }));
      }
   }]);
   return Http;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Http);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cookie": 111,
	"./cookie.js": 111
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 185;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"title":"title-2Wx0O","subtitle":"subtitle-3WUNs","title1":"title1-3bWNP","box":"box-4FxnV","calendar":"calendar-3DEGf","showpage":"showpage-gomUS","transition-down":"transition-down-2SwLP","slidein":"slidein-2sTMd","calendar-box":"calendar-box-1q7xj","topIn":"topIn-1Y9AR"};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PageHead = __webpack_require__(188);

var _PageHead2 = _interopRequireDefault(_PageHead);

var _Sidebar = __webpack_require__(191);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _index = __webpack_require__(193);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Wrap = function Wrap(_ref) {
    var Component = _ref.Component,
        title = _ref.title,
        navData = _ref.navData;

    return _react2.default.createElement('div', { className: 'h-100 oh' }, _react2.default.createElement(_PageHead2.default, { title: title }), _react2.default.createElement('div', { className: 'h-100 ' }, _react2.default.createElement(_Sidebar2.default, { navData: navData }), _react2.default.createElement('div', { className: _index2.default.container, id: 'scroll-container' }, _react2.default.createElement(Component, null))));
};

exports.default = Wrap;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(189);

var _index2 = _interopRequireDefault(_index);

var _reactRouter = __webpack_require__(190);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var menus = [{
    name: '首页',
    icon: 'iconxiazai44',
    id: 'home',
    path: '/'
}, {
    name: '标签',
    icon: 'iconbiaoqian',
    id: 'tag',
    path: '/'
}, {
    name: '归档',
    icon: 'iconguidang',
    id: 'page',
    path: '/'
}];

var PageHead = function (_Component) {
    (0, _inherits3.default)(PageHead, _Component);

    function PageHead(props) {
        (0, _classCallCheck3.default)(this, PageHead);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PageHead.__proto__ || (0, _getPrototypeOf2.default)(PageHead)).call(this, props));

        _this.jump = function (item) {
            console;
            _this.props.history.push(item.path);
        };

        return _this;
    }

    (0, _createClass3.default)(PageHead, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var title = this.props.title;

            return _react2.default.createElement('div', { className: _index2.default.head }, _react2.default.createElement('div', { className: _index2.default.author }, _react2.default.createElement('div', { className: _index2.default.line, key: 'line1' }), _react2.default.createElement('div', { key: 'title' }, title), _react2.default.createElement('div', { className: _index2.default.line, key: 'line2' })), _react2.default.createElement('ul', { className: _index2.default.menu }, menus.map(function (item) {
                return _react2.default.createElement('li', { className: _index2.default.menuitem, onClick: _this2.jump.bind(_this2, item), key: item.id }, _react2.default.createElement('svg', { className: 'icon ' + _index2.default.menuicon, 'aria-hidden': 'true' }, _react2.default.createElement('use', { xlinkHref: '#' + item.icon })), _react2.default.createElement('span', null, item.name));
            })));
        }
    }]);
    return PageHead;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(PageHead);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"head":"head-3of90","author":"author-3Do7G","line":"line-1yT1a","menu":"menu-CvmU7","menuitem":"menuitem-2GkSk","menuicon":"menuicon-10bHf"};

/***/ }),
/* 190 */,
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(192);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(11);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Sidebar = function (_Component) {
    (0, _inherits3.default)(Sidebar, _Component);

    function Sidebar(props) {
        (0, _classCallCheck3.default)(this, Sidebar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

        _this.showMenu = function (menu) {
            var history = _this.props.history;
            var location = history.location;

            _this.props.history.replace('/' + location.pathname.split('/')[1] + '/' + menu.id);
            _this.setState({
                activeMenu: menu.id
            });
        };

        _this.renderMenus = function (menus) {
            var activeMenu = _this.state.activeMenu;

            return _react2.default.createElement('ul', null, menus.map(function (menu) {
                return _react2.default.createElement('li', {
                    className: (activeMenu == menu.id ? _index2.default.active : '') + ' ' + _index2.default.menu,
                    key: menu.id,
                    onClick: _this.showMenu.bind(_this, menu)
                }, menu.name);
            }));
        };

        _this.state = {
            activeMenu: null
        };
        return _this;
    }

    (0, _createClass3.default)(Sidebar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var id = this.props.match.params.id;

            this.setState({
                activeMenu: id
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var navData = this.props.navData;

            return _react2.default.createElement('div', { className: _index2.default.sidebar }, navData.map(function (category) {
                return _react2.default.createElement('ul', { key: category.name }, _react2.default.createElement('li', { className: _index2.default.category }, category.name), _this2.renderMenus(category.submenus));
            }));
        }
    }]);
    return Sidebar;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Sidebar);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sidebar":"sidebar-3fyi-","category":"category-3suab","menu":"menu-3DFrh","active":"active-aQ2Ek"};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container-3Tdxr"};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fz-8":"fz-8-3_LR9","fz-10":"fz-10-3AKEg","fz-12":"fz-12-3Fk0n","fz-14":"fz-14-27b-j","fz-16":"fz-16-6leMM","fz-18":"fz-18-3VRs3","fz-20":"fz-20-2J1Co"};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"token":"token-29MjU","comment":"comment-1xBQR","prolog":"prolog-xlOHS","doctype":"doctype-3qeQn","cdata":"cdata-BF3C-","punctuation":"punctuation-1_rOZ","namespace":"namespace-3s-Fo","property":"property-209Jn","tag":"tag-YoQHw","constant":"constant-20B89","symbol":"symbol-2OkWC","deleted":"deleted-NvQai","boolean":"boolean-1BC53","number":"number-3G2mO","selector":"selector-4M53U","attr-name":"attr-name-CKGES","string":"string-3Gexh","char":"char-gwR6i","builtin":"builtin-3OZ0N","inserted":"inserted-12oyI","operator":"operator-3728E","entity":"entity-2PpBV","url":"url-rOqkR","language-css":"language-css-NGXuH","style":"style-3fJcp","variable":"variable-2S4r5","atrule":"atrule-3koLJ","attr-value":"attr-value-JHvXo","function":"function-2UPke","class-name":"class-name-2FkV-","keyword":"keyword-3TzF_","regex":"regex-2nHd-","important":"important-2YPzL","bold":"bold-1OzEf","italic":"italic-1rOE6"};

/***/ })
],[[114,1,2]]]);