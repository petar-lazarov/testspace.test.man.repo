---
setup:
  name: aws:east-2:uiSetup
  description: 'Blah-blah setup presentation entities blah-blah.'
  input: >
   {
    repo: "testProjectConfig",
    templateOrgRepoBranch: "master",
    issues: [],
    cycles: ["cycle1", "cycle2", "cycle3"],
    sessions: "@master.json"
   }
  timeout: 120
---

# Basic One Suite

This is a generic Spec header (Aka `Suite`). The following text is descriptional, and can
contain general markdown syntax. 


## ONE: Scenario / Case 
This is a generic Scenario header that will be used throughout.

  * Do this
  * Do that

## TWO: Scenario / Case 
This is a generic Scenario header that will be used throughout.

  * Do this
  * Do that
