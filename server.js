module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nmodule.exports = {\n    port: 5000,\n    sessionSecretKey: bcrypt.hashSync(\"SECRET_KEY\", 2)\n};\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./src/client/redux/actions.js":
/*!*************************************!*\
  !*** ./src/client/redux/actions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    addContractInstance: function addContractInstance(contract) {\n        return {\n            type: \"ADD_CONTRACT_DETAILS\",\n            contract: contract\n        };\n    },\n    addWeb3DefaultAccount: function addWeb3DefaultAccount(web3DefaultAccount) {\n        return {\n            type: \"ADD_WEB3_DEFAULT_ACCOUNT\",\n            web3DefaultAccount: web3DefaultAccount\n        };\n    },\n    addEthInstance: function addEthInstance(ethInstance) {\n        return {\n            type: \"ADD_ETH_INSTANCE\",\n            ethInstance: ethInstance\n        };\n    },\n    getContractInstance: function getContractInstance() {\n        return {\n            type: \"GET_CONTRACT_INSTANCE\"\n        };\n    }\n\n};\n\n//# sourceURL=webpack:///./src/client/redux/actions.js?");

/***/ }),

/***/ "./src/client/redux/index.js":
/*!***********************************!*\
  !*** ./src/client/redux/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _store = __webpack_require__(/*! ./store */ \"./src/client/redux/store.js\");\n\nObject.defineProperty(exports, 'store', {\n    enumerable: true,\n    get: function get() {\n        return _store.store;\n    }\n});\n\n//# sourceURL=webpack:///./src/client/redux/index.js?");

/***/ }),

/***/ "./src/client/redux/initialState.js":
/*!******************************************!*\
  !*** ./src/client/redux/initialState.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar initialState = {\n    contract: {},\n    web3DefaultAccount: '',\n    web3Eth: {}\n};\n\nmodule.exports = {\n    initialState: initialState\n};\n\n//# sourceURL=webpack:///./src/client/redux/initialState.js?");

/***/ }),

/***/ "./src/client/redux/reducer.js":
/*!*************************************!*\
  !*** ./src/client/redux/reducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _initialState = __webpack_require__(/*! ./initialState */ \"./src/client/redux/initialState.js\");\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar reducer = async function reducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState.initialState;\n    var Action = arguments[1];\n\n    switch (Action.type) {\n        case \"ADD_CONTRACT_DETAILS\":\n\n            console.log('Action :', Action);\n            return await Object.assign({}, state, {\n                contract: Action.contract\n            });\n\n        case \"ADD_WEB3_DEFAULT_ACCOUNT\":\n            console.log(\"ADD_WEB3_DEFAULT_ACCOUNT\");\n\n            return await Object.assign({}, state, {\n                web3DefaultAccount: Action.web3DefaultAccount\n            });\n        case \"ADD_ETH_INSTANCE\":\n            console.log(\"ADD_ETH_INSTANCE\");\n\n            return await Object.assign({}, state, {\n                web3Eth: Action.ethInstance\n            });\n\n        default:\n            return state;\n    }\n};\n\nmodule.exports = {\n    reducer: reducer\n};\n\n//# sourceURL=webpack:///./src/client/redux/reducer.js?");

/***/ }),

/***/ "./src/client/redux/store.js":
/*!***********************************!*\
  !*** ./src/client/redux/store.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/client/redux/reducer.js\");\n\nvar store = (0, _redux.createStore)(_reducer.reducer);\n\nstore.subscribe(async function () {\n  return console.log(\"> ACTION DISPATCHED <\", (await store.getState()));\n});\n\nmodule.exports = {\n  store: store\n};\n\n//# sourceURL=webpack:///./src/client/redux/store.js?");

/***/ }),

/***/ "./src/common/components/app.jsx":
/*!***************************************!*\
  !*** ./src/common/components/app.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _header = __webpack_require__(/*! ./header.jsx */ \"./src/common/components/header.jsx\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _register = __webpack_require__(/*! ./register.jsx */ \"./src/common/components/register.jsx\");\n\nvar _register2 = _interopRequireDefault(_register);\n\nvar _paymentcontainer = __webpack_require__(/*! ./paymentcontainer.jsx */ \"./src/common/components/paymentcontainer.jsx\");\n\nvar _paymentcontainer2 = _interopRequireDefault(_paymentcontainer);\n\nvar _web = __webpack_require__(/*! web3 */ \"web3\");\n\nvar _web2 = _interopRequireDefault(_web);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! ../../client/redux */ \"./src/client/redux/index.js\");\n\nvar _actions = __webpack_require__(/*! ../../client/redux/actions */ \"./src/client/redux/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n    }\n\n    _createClass(App, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var web3 = new _web2.default(_web2.default.givenProvider || new _web2.default(new _web2.default.providers.HttpProvider('http://localhost:7545')));\n            var walletContract = {};\n            $.getJSON('../../contracts/Wallet.json', async function (walletContractJSONabi) {\n                walletContract = new web3.eth.Contract(walletContractJSONabi.abi, '0xc74c8d941494495a4f65c42bebc556398e1f028d' // contract address\n                );\n\n                // store walletContract in redux store\n                var reduxStateAfterContractDispact = await _redux.store.dispatch((0, _actions.addContractInstance)(walletContract));\n                console.log('reduxStateAfterContractDispact :', reduxStateAfterContractDispact);\n                web3.eth.getAccounts().then(async function (res) {\n                    web3.eth.defaultAccount = res[0];\n                    // default account,\n                    var reduxStateAfterDefaultAccountDispatch = await _redux.store.dispatch((0, _actions.addWeb3DefaultAccount)(res[0]));\n                    walletContract.options.from = res[0];\n                });\n                // adding web3.eth to store\n                var reduxStoreAfterWeb3EthDispatch = await _redux.store.dispatch((0, _actions.addEthInstance)(web3.eth));\n                console.log('reduxStoreAfterWeb3EthDispatch :', reduxStoreAfterWeb3EthDispatch);\n            });\n            _redux.store.getState().then(function (res) {\n                return console.log('get state res :', res);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            _redux.store.getState().then(function (res) {\n                console.log(\"getstate fomr lvlvllv\", res);\n            });\n            return _react2.default.createElement(\n                'div',\n                { className: ' ' },\n                _react2.default.createElement(\n                    _reactRedux.Provider,\n                    { store: _redux.store },\n                    _react2.default.createElement(\n                        'div',\n                        { className: ' mx-auto' },\n                        _react2.default.createElement(_header2.default, null),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'container mx-auto' },\n                            _react2.default.createElement(_register2.default, null),\n                            _react2.default.createElement(_paymentcontainer2.default, null)\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nApp.propTypes = {};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/common/components/app.jsx?");

/***/ }),

/***/ "./src/common/components/header.jsx":
/*!******************************************!*\
  !*** ./src/common/components/header.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n    _inherits(Header, _React$Component);\n\n    function Header(props) {\n        _classCallCheck(this, Header);\n\n        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    _createClass(Header, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'nav',\n                { className: 'bg-white p-2 py-4' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'container mx-auto ' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'flex' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ' },\n                            _react2.default.createElement(\n                                'h3',\n                                { className: 'text-2xl font-mono' },\n                                'Wallet'\n                            )\n                        ),\n                        _react2.default.createElement('div', { className: 'flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ' }),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ' },\n                            _react2.default.createElement(\n                                'ul',\n                                { className: 'list-reset flex' },\n                                _react2.default.createElement(\n                                    'li',\n                                    { className: 'mr-6' },\n                                    _react2.default.createElement(\n                                        'a',\n                                        { className: 'text-grey-darker hover:text-grey-darker font-semibold no-underline', href: '#' },\n                                        'Active'\n                                    )\n                                ),\n                                _react2.default.createElement(\n                                    'li',\n                                    { className: 'mr-6' },\n                                    _react2.default.createElement(\n                                        'a',\n                                        { className: 'text-grey-darker hover:text-grey-darker font-semibold no-underline', href: '#' },\n                                        'Link'\n                                    )\n                                ),\n                                _react2.default.createElement(\n                                    'li',\n                                    { className: 'mr-6' },\n                                    _react2.default.createElement(\n                                        'a',\n                                        { className: 'text-grey-darker hover:text-grey-darker font-semibold no-underline', href: '#' },\n                                        'Link'\n                                    )\n                                ),\n                                _react2.default.createElement(\n                                    'li',\n                                    { className: 'mr-6' },\n                                    _react2.default.createElement(\n                                        'a',\n                                        { className: 'text-grey-darker  font-semibold no-underline', href: '#' },\n                                        'Disabled'\n                                    )\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Header;\n}(_react2.default.Component);\n\nHeader.propTypes = {};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/common/components/header.jsx?");

/***/ }),

/***/ "./src/common/components/paymentcontainer.jsx":
/*!****************************************************!*\
  !*** ./src/common/components/paymentcontainer.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PaymentContainer = function (_React$Component) {\n    _inherits(PaymentContainer, _React$Component);\n\n    function PaymentContainer(props) {\n        _classCallCheck(this, PaymentContainer);\n\n        var _this = _possibleConstructorReturn(this, (PaymentContainer.__proto__ || Object.getPrototypeOf(PaymentContainer)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    _createClass(PaymentContainer, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'flex m-4' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w-full ' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: ' bg-white w-full my-4 p-6' },\n                            _react2.default.createElement(\n                                'label',\n                                { className: 'block text-left py-4 text-grey-darker text-sm font-bold mb-2', htmlFor: 'username' },\n                                'Address'\n                            ),\n                            _react2.default.createElement('input', { className: ' border-grey-lighter border appearance-none w-full py-2 px-3 text-grey-darker leading-tight', id: 'reciever_user_addr', type: 'text', placeholder: 'address' }),\n                            _react2.default.createElement(\n                                'label',\n                                { className: 'block text-left py-4 text-grey-darker text-sm font-bold mb-2', htmlFor: 'username' },\n                                'Amount'\n                            ),\n                            _react2.default.createElement('input', { className: ' border-grey-lighter border appearance-none w-full py-2 px-3 text-grey-darker leading-tight', id: 'reciever_user_amount', type: 'number', placeholder: 'amount' }),\n                            _react2.default.createElement(\n                                'button',\n                                { id: 'pay-btn', className: 'bg-grey hover:bg-blue-dark text-white font-bold py-1 px-2 m-2 rounded-full' },\n                                'pay'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'flex m-4 min-w-0' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w-full max-w-full' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'w-full  my-4 bg-white ' },\n                            _react2.default.createElement('ul', { id: 'payment-reciept' })\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return PaymentContainer;\n}(_react2.default.Component);\n\nPaymentContainer.propTypes = {};\n\nexports.default = PaymentContainer;\n\n//# sourceURL=webpack:///./src/common/components/paymentcontainer.jsx?");

/***/ }),

/***/ "./src/common/components/register.jsx":
/*!********************************************!*\
  !*** ./src/common/components/register.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import {\n//     getContractInstance\n// } from '../../client/redux/actions'\nvar RegisterContainer = function (_React$Component) {\n    _inherits(RegisterContainer, _React$Component);\n\n    function RegisterContainer(props) {\n        _classCallCheck(this, RegisterContainer);\n\n        var _this = _possibleConstructorReturn(this, (RegisterContainer.__proto__ || Object.getPrototypeOf(RegisterContainer)).call(this, props));\n\n        _this.state = {};\n        console.log('this.props :', _this.props);\n        return _this;\n    }\n\n    _createClass(RegisterContainer, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var contract = this.props.contract;\n\n            console.log('contract :', contract);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'flex m-4 my-8' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'flex-1' },\n                    _react2.default.createElement('h5', { className: 'container', id: 'reg-status' }),\n                    _react2.default.createElement(\n                        'form',\n                        { className: 'w-full' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'flex items-center border-b border-b-2 border-teal py-2' },\n                            _react2.default.createElement('input', { required: true, className: 'appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight', type: 'text', placeholder: 'Enter the network address', id: 'user_addr', 'aria-label': 'Full name' }),\n                            _react2.default.createElement('input', { required: true, className: 'appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight', type: 'text', placeholder: 'Enter the Name', id: 'user_name', 'aria-label': 'Full name' }),\n                            _react2.default.createElement(\n                                'button',\n                                { id: 'reg-btn', className: 'flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2  rounded-full', type: 'button' },\n                                'Add User'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return RegisterContainer;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        contract: state.contract,\n        web3DefaultAccount: state.web3DefaultAccount,\n        web3Eth: state.web3Eth\n    };\n};\nvar mapDepatchToProps = function mapDepatchToProps(dispatch) {\n    return {\n        // getContract : ()=> dispatch(getContractInstance())\n    };\n};\n\nRegisterContainer.propTypes = {};\nRegisterContainer = (0, _reactRedux.connect)(mapStateToProps, mapDepatchToProps)(RegisterContainer);\n\nexports.default = RegisterContainer;\n\n//# sourceURL=webpack:///./src/common/components/register.jsx?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.App = undefined;\n\nvar _app = __webpack_require__(/*! ./components/app.jsx */ \"./src/common/components/app.jsx\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.App = _app2.default;\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _common = __webpack_require__(/*! ../common */ \"./src/common/index.js\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar winston = __webpack_require__(/*! winston */ \"winston\");\nvar expressControllers = __webpack_require__(/*! express-controller */ \"express-controller\");\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _require = __webpack_require__(/*! ../../config */ \"./config/index.js\"),\n    port = _require.port,\n    sessionSecretKey = _require.sessionSecretKey;\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar csrf = __webpack_require__(/*! csurf */ \"csurf\");\nvar RateLimit = __webpack_require__(/*! express-rate-limit */ \"express-rate-limit\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\n// SSR\n\n\n// const { renderToString } = require('react-dom/server');\n// const { App } = require('../common');\n\n\n// M\n// Middlewares\nvar app = express();\napp.use(helmet());\n\n// session Middleware\napp.use(session({\n  secret: sessionSecretKey,\n  resave: false,\n  saveUninitialized: true,\n  cookie: { secure: true }\n}));\napp.use(csrf());\napp.set('port', process.env.PORT || port);\n\napp.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));\napp.use(bodyParser.json({ limit: '50mb' }));\napp.use(cors());\n// use this middleware in authentications routes or post method routes\nvar authAPILimiter = new RateLimit({\n  windowMs: 5 * 60 * 1000, // 5 minutes\n  max: 1000,\n  delayMs: 0 // disabled\n});\n// loggin middleware\nvar logger = winston.createLogger({\n  level: 'info',\n  transports: [new winston.transports.Console(), new winston.transports.File({ filename: './logs/error.log', level: 'error' }), new winston.transports.File({ filename: './logs/debug.log', level: 'debug' }), new winston.transports.File({ filename: './logs/crit.log', level: 'crit' }), new winston.transports.File({ filename: './logs/warn.log', level: 'warn' }), new winston.transports.File({ filename: './logs/combined.log' })]\n});\n\n// V\n// static files and views\napp.use(express.static(path.join(__dirname, './public')));\napp.use(express.static(path.join(__dirname, './build')));\napp.set('view engine', 'html');\napp.engine('html', __webpack_require__(/*! ejs */ \"ejs\").renderFile);\napp.set('views', path.join(__dirname, './public'));\n\n// C\n//controller settings\n//setting up the controller\nexpressControllers.setDirectory(path.join(__dirname, '/controller')).bind(app);\n\napp.get('/', function (req, res) {\n  console.log('object :', req);\n  var RenderedAppToString = (0, _server.renderToString)(React.createElement(_common.App, null));\n  var indexHTMLpage = fs.readFileSync('./public/index.html');\n  var indexHTMLpageToString = indexHTMLpage.toString();\n  console.log('indexHTMLpageToString :', indexHTMLpageToString);\n  var HTMLWithSSRComponentInIt = indexHTMLpageToString.replace(\"<!-- __APP__ -->\", RenderedAppToString);\n  console.log('HTMLWithSSRComponentInIt :', HTMLWithSSRComponentInIt);\n  res.send(\"HTMLWithSSRComponentInIt\");\n});\napp.listen(port, function () {\n  console.log('> Server is running on PORT ', port);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csurf\");\n\n//# sourceURL=webpack:///external_%22csurf%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-controller":
/*!*************************************!*\
  !*** external "express-controller" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-controller\");\n\n//# sourceURL=webpack:///external_%22express-controller%22?");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-rate-limit\");\n\n//# sourceURL=webpack:///external_%22express-rate-limit%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3\");\n\n//# sourceURL=webpack:///external_%22web3%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });