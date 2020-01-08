module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(641);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 492:
/***/ (function() {

eval("require")("@actions/core");


/***/ }),

/***/ 641:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(492);
const github = __webpack_require__(972);

async function run() {
    try { 
  
      console.log("Teardown script running ..")

      orgName  = core.getInput('gh-org');
      repoName = core.getInput('gh-repo');
      ghToken  = core.getInput('gh-token');
      
      // orgName  = 'stridespace'; 
      // repoName = 'testRepo'; 
      // ghToken  = '';
  
      console.log(orgName);
      console.log(repoName);
  
      const octokit  = new github.GitHub(ghToken);
      
      //////////////////////////////////////////
      // Delete Test Repo
      /////////////////////////////////////////
      await octokit.repos.delete({
        owner: orgName,
        repo:  repoName
      });
             
    } 
    catch (error) {
      core.setFailed(error.message);
    }
  }
  
  run()

/***/ }),

/***/ 972:
/***/ (function() {

eval("require")("@actions/github");


/***/ })

/******/ });