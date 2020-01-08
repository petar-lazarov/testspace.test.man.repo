const core = require('@actions/core');
const github = require('@actions/github');

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