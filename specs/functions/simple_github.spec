---
before:
  name: github:s2technologies/testspace@master:start
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
after:
  name: github:s2technologies/testspace@master:stop
  description: 'Blah-blah setup presentation entities blah-blah.'
  input: >
   {
    repo: "testProjectConfig",
    templateOrgRepoBranch: "master",
    issues: [],
    cycles: ["cycle1", "cycle2", "cycle3"],
    sessions: "@master.json"
   }
  timeout: 60

---

# Basic One Suite

This is a generic Spec headers (Aka `Suite`). The following text is descriptional, and can
contain general markdown syntax. 


## ONE: Scenario / Case 
This is a generic Scenario header that will be used throughout.

  * Do this
  * Do that

## TWO: Scenario / Case 
This is a generic Scenario header that will be used throughout.

  * Do this
  * Do that
