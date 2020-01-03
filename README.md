[![Testspace](https://www.testspace.com/img/Testspace.png)](https://www.testspace.com)


## Test Data repo 

This Repo is a collection of `specs` used for:
  * https://help.testspace.com/manual
  * parsing tests (markdown support)
    * [GitHub flavored markdown](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
    * [Gauge Examples](https://github.com/getgauge-examples)
  * presentation tests (i.e. big Specs, long scenario names, etc.) 

The Repo will be continuously expanded and used for validation.

---

The file provided example **Metadata** test configurations

`.testspace.yml` format:

<pre>
manual:
  path: "/path/to/specs" # optional path to specs root, defaults to "specs"
  board: # optional, name "Plan: branch-name"
  branches: # optional branch filter
    only: "branch-name" # single name/regex or list of names. 
    ignore: "branch-name" # single name/regex or list of names. 
</pre>

`Cycle Issue` format:
<pre>
testspace:
  branch: "branch-1" # optional, defaults to "master"
  specs: # optional one or more relative to the testspace.yml "path" sub-paths
    path: "/yml-rel-path/tofolder"
    ignore: "**/x*" # optional one or more git-ignore wildcard patterns
</pre>

## Examples

Example for `.testspace.yml` using on release branches. 

<pre>
testspace:
  board:
  path: specs
  branches:
    only: 
      - master
      - ".*_release"
</pre>

Example for a `Cycle Issue`.

<pre>
testspace:
  branch: master 
  specs: 
    path: simple
</pre>
 

