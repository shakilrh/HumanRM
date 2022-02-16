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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 151);
/******/ })
/************************************************************************/
/******/ ({

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(210);


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\xampp\\htdocs\\HRMLaravelProject\\package.json: Error while parsing JSON - Unexpected token < in JSON at position 3\n    at JSON.parse (<anonymous>)\n    at ConfigChainBuilder.addConfig (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:150:65)\n    at ConfigChainBuilder.findConfigs (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:102:30)\n    at buildConfigChain (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:61:13)\n    at OptionManager.init (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:354:58)\n    at File.initOptions (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-loader\\lib\\index.js:50:20)\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-loader\\lib\\fs-cache.js:118:18\n    at ReadFileContext.callback (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\babel-loader\\lib\\fs-cache.js:31:21)\n    at FSReqCallback.readFileAfterOpen [as oncomplete] (fs.js:273:13)");

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\autoprefixer\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\autoprefixer\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\autoprefixer\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\postcss-loader\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\postcss-loader\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\postcss-loader\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\postcss-loader\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\postcss-loader\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\postcss-loader\\lib\\index.js:145:8\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\webpack\\lib\\NormalModule.js:195:19\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\xampp\\htdocs\\HRMLaravelProject\\node_modules\\postcss-loader\\lib\\index.js:194:71\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)");

/***/ })

/******/ });