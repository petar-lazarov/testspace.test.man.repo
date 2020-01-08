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
/******/ 		return __webpack_require__(149);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 149:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(492);
const github = __webpack_require__(972);

const ghTemplateOrg  = 's2technologies';
const ghTemplateRepo = 'testspace.test.repo';

async function run() {
  try { 

    console.log("Setup script running ..")

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
    // Create Test Repo
    /////////////////////////////////////////
    const { data: createRepo } = await octokit.repos.createUsingTemplate({
      template_owner: ghTemplateOrg,
      template_repo:  ghTemplateRepo,
      owner: orgName,
      name:  repoName,
      description: 'Auto-generated Repo'
    });
    console.log("createRepo") // Simply logging 

    /////////////////////////////////////////
    // Create Cycle Issues
    /////////////////////////////////////////

    const { data: allIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'ALL',
      body: 'Used for testing All Specs \n<pre>testspace:\n</pre>'
    });
    console.log("allIssue")

    const { data: conceptIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'Concepts',
      body: 'Used for testing Concepts Specs \n<pre>testspace:\n  branch: master \n  specs: \n    path: concepts\n </pre>'
    });
    console.log("conceptIssue")

    const { data: listsIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'Lists',
      body:  'Used for testing Lists Specs \n<pre>testspace:\n  branch: master \n  specs: \n    path: lists\n </pre>'
    });
    console.log("listsIssue")

    const { data: gaugeIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'Gauge',
      body:  'Used for testing Gauage Specs \n<pre>testspace:\n  branch: master \n  specs: \n    path: gauge\n </pre>'
    });
    console.log("gaugeIssue")

    const { data: imagesIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'Images',
      body:  'Used for testing Images Specs \n<pre>testspace:\n  branch: master \n  specs: \n    path: images\n </pre>'
    });
    console.log("imagesIssue")

    const { data: simpleIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'Simple',
      body:  'Used for testing Simple Specs \n<pre>testspace:\n  branch: master \n  specs: \n    path: simple\n </pre>'
    });
    console.log("simpleIssue")
     
    const { data: testCommits } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'Test Commits',
      body:  'Used for Spec Change testing \n<pre>testspace:\n  branch: master \n  specs: \n    path: test.commits\n </pre>'
    });
    console.log("testCommits")

    const { data: testCards } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'Test Cards',
      body:  'Used for Cards testing \n<pre>testspace:\n  branch: master \n  specs: \n    path: test.cards\n </pre>'
    });
    console.log("testCards")

    const { data: simpleBranchIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'SimpleBranch',
      body:  'Used for testing Simple Specs \n<pre>testspace:\n  branch: branch1 \n  specs: \n    path: simple\n </pre>'
    });
    console.log("simpleBranchIssue")

    const { data: simpleClosedIssue } = await octokit.issues.create({
      owner: orgName,
      repo:  repoName,
      title: 'SimpleClosedIssue',
      body:  'Used for testing Simple Specs \n<pre>testspace:\n  branch: master \n  specs: \n    path: simple\n </pre>'
    });
    console.log("simpleClosedIssue")
    
    const { data: simpleClosedIssueUpdate } = await octokit.issues.update({
      owner: orgName,
      repo:  repoName,
      issue_number: simpleClosedIssue.number,
      state: 'closed'
    });
    console.log("simpleClosedIssueUpdate")


    ////////////////////////////////////////////////
    // Create Test Board
    ////////////////////////////////////////////////
    const { data: createBoard } = await octokit.projects.createForRepo({
      owner: orgName,
      repo:  repoName,
      name: 'Testspace',
      body: 'Test Repo Board'
    });
    console.log("createBoard")
    
    const { data: createCol1 } = await octokit.projects.createColumn({
      project_id: createBoard.id,
      name: 'To do'
    })
    console.log("createCol1")

    const { data: createCol2 } = await octokit.projects.createColumn({
      project_id: createBoard.id,
      name: 'In progress'
    })
    console.log("createCol2")

    const { data: createCol3 } = await octokit.projects.createColumn({
      project_id: createBoard.id,
      name: 'Done'
    })
    console.log("createCol3")

  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()

/***/ }),

/***/ 492:
/***/ (function() {

eval("require")("@actions/core");


/***/ }),

/***/ 972:
/***/ (function() {

eval("require")("@actions/github");


/***/ })

/******/ });