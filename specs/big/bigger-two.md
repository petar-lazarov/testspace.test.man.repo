# BIGGER TWO Suite

We are introducing our second version of Test Analytics - `Testspace Insights`. This article provides an overview of the feature set and provides a brief description of other important metrics being considered for future releases.

**Used to optimize the change-build-test workflow.** When complex software is being built, with large and distributed teams, **time** is 
one of the most challenging items to manage. The efficiency of this *workflow* directly impacts the overall time required to 
release software -- *aka [Release Management](https://en.wikipedia.org/wiki/Release_management){:target="_blank"}*. Release Management 
is the process of managing, planning, scheduling and controlling a software build through different stages; including testing and deploying. 

> Insights facilitate the improvement of the change-build-test workflow.

So, what are some of the **time-sinks** of the `change-build-test workflow`? 
```
  Insufficient test coverage: The automated tests are poorly designed and don't identify enough side-effects from source code changes. Thus, defects escape into the next phase. 
  Poor test failure management: Ignoring test failures while the software continues to change. Tracking and responding to test failures using console output, email, and other archaic techniques. Requiring a heavy and time-consuming bug tracking system to manage resolving failures.   
  Unstable results: Weak test automation, random test failures, and flaky tests all combined together can generate noise, resulting in time-wasting activities.
  Lack of transparency: What is the current status? Are we progressing? Are members communicating? Meetings, emails, and handcrafted reports are useful, but visibility solely based on these traditional methods, versus mined data, can inhibit quick and timely informed decision making.    
```
Using **Insights** generated from the `change-build-test workflow` can significantly improve team member engagement and better enable driving operational effectiveness for releasing software. 


## Disconnected Workflows

Automated testing can leverage Version Control platforms and Continuous Integration tools to execute 
tests daily or even with *every software change committed*, potentially resulting in a **high volume** of test result content. 
When failures occur, **Test failure** tracking can be used to manage resolution. Variations in result content are 
common and expected whether due to new features, refactoring, or the removal of stale tests and must 
be handled by the Test Management tool.

  * Do this scenario a bunch of times
  * Do that seenario a few times
  * Think about this a little
  * Think about this a lot
  * Now what should be done
  * Ok how about this
  * Or hos about that

## Benefits 

The **Status** of the software, regardless of the type of testing, is seamlessly aggregated. All of the metrics: test results, code coverage, 
defects, requirements, etc., are collected and used together. 

**Test Analytics** used to recommend process improvements now *seamlessly* include all of the project's testing content and activity. Projects can now better assess that their testing process is adequately capturing defects and change side-effects from slipping into production. 
Testing processes are also viewed for efficiency regarding  people, time, and equipment. 

The **Readiness** of the software during development is visible and more predictable.  


  * Do this scenario a bunch of times
  * Do that seenario a few times
  * Think about this a little
  * Think about this a lot
  * Now what should be done
  * Ok how about this
  * Or hos about that

## Continuous Integration Reporting
As previously mentioned, the primary focus of *existing* Test Management systems is on executing and managing **manual tests**. 
Although most systems provide a means to import automated tests results they are not suited for scaling to the 
high volume of results from automated CI. 

> Existing applications are not suited for scaling to the high volume of results from automated CI
 

  * Do this scenario a bunch of times
  * Do that seenario a few times
  * Think about this a little
  * Think about this a lot
  * Now what should be done
  * Ok how about this
  * Or hos about that  
  

## Connects to Existing Automation

Testspace connects to your `change-build-test workflow` using a simple command line utility. The utility is used to push content from your test automation system to the Testspace server. Content such as build status, test results, code coverage, source code changes, etc., are automatically collected, stored, analyzed, and then **published with the current status**. Computational analysis is continuously performed on the historical data using regression patterns, test effectiveness calculations, trends in coverage, and rates for resolving failures; all used _together_ to generate **Insights**.
 
  * Do this scenario a bunch of times
  * Do that seenario a few times
  * Think about this a little
  * Think about this a lot
  * Now what should be done
  * Ok how about this
  * Or hos about that  

## How to use the Indicators

The `Indicators` are calculated based on historical data collected for the selected period. There are 3 Indicators that focus on different areas; all related to providing more visibility into the **efficiency** of the `change-build-test workflow`. These indicators all work in concert, using mined data for the continuous assessments. 

The core tenets of an efficient workflow are:

  * stable and consistent test results
  * automated tests that are actually capturing side-effects (i.e. failing tests) from source code changes
  * resolution of test failures at a reasonable rate

> Efficient workflows generate healthy regressions, capture side-effects, and resolve these failures at a rapid rate.

In addition to the Indicators, other important metrics are also provided showing `system instability`, `high-frequency failures` (i.e. team ignoring the failures), and `trends in coverage`. 

## Results Strength 
The `Results Strength` indicator is used to provide a _macro view_ of the consistency of results being generated by your test automation. The very first step in optimizing the *workflow* is stabling automated test results. Without a _reasonable_ level of consistency from testing, it is nearly impossible to make process improvements. 

> Improvement requires consistent test results.

[Test Analytics Results Strength]()

A combination of the overall _Passing average_ and the _Healthy Results average_ are used. *Healthy Results* are the percentage of passing tests determined to be "_reasonable_" based on the current stage of development. The default is `100%`, but this can be defined by the team. By tracking both the average _Pass rate_ and _Health rate_, the `Results Strength` indicator provides insight into the collective strength of the software under test for the selected time period. 

Also factored in are results tagged as `Invalid`. This is based on significant variations from previous results such as drops in case count. 

For more information regarding `Results Strength` refer [here](https://help.testspace.com/projects:insights#results-strength){:target="_blank"}.

  * Do this scenario a bunch of times
  * Do that seenario a few times
  * Think about this a little
  * Think about this a lot
  * Now what should be done
  * Ok how about this
  * Or hos about that  
  
## Test Effectiveness 

The `Test Effectiveness` indicator is used for assessing how good the automated tests are at capturing side-effects, based on source code changes -- i.e. generating **new** failures. These new failures have had a minimum 5 non-failing test status. In general, new failures should be the result of source code changes – otherwise, instability of the application/infrastructure causes additional quality risk (i.e. random factors). If the source code is changing at a rapid rate, with no regressions, there may be a problem with the _usefulness_ of the existing tests. 

> Reasonable test regressions are considered healthy and beneficial to the workflow.

[Test Analytics Test Effectiveness]()


For more information regarding `Test Effectiveness` refer [here](https://help.testspace.com/projects:insights#test-effectiveness){:target="_blank"}.
 
  * Do this scenario a bunch of times
  * Do that seenario a few times
  * Think about this a little
  * Think about this a lot
  * Now what should be done
  * Ok how about this
  * Or hos about that  
  

## Workflow Efficiency 

The `Workflow Efficiency` indicator is used to provide a macro view of the efficiency of resolving test case failures. Lots of 
regressions can indicate that the tests are effective, but even with good test coverage you still want rapid recovery.  Referring to 
Martin Flower in his popular [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html){:target="_blank"} article, failures should be addressed immediately. New test failures that are not addressed, in a reasonable timeframe, are considered “drifts” and add to the quality debt! By tracking the overall _Failures Resolved %_ and the _Average Resolution Time_, teams can assess if their failure resolution process is acceptable. 

> Letting test failures drift, while source file changes continue, adds considerable effort to triage activity.

[Test Analytics Workflow Efficiency]()

For more information regarding `Workflow Efficiency` refer [here](https://help.testspace.com/projects:insights#workflow-efficiency){:target="_blank"}.
 
  * Do this scenario a bunch of times
  * Do that seenario a few times
  * Think about this a little
  * Think about this a lot
  * Now what should be done
  * Ok how about this
  * Or hos about that  
 

## Our Data

We measure and track *our own* Testspace development, and you can see it  [HERE](https://s2.testspace.com/projects/s2technologies:testspace/insights){:target="_blank"}.<br> 
The Testspace server is developed using [Ruby on Rails](http://rubyonrails.org/){:target="_blank"}, the source code is hosted using [GitHub](https://github.com/){:target="_blank"}, and we use [Circle CI](https://circleci.com){:target="_blank"} for test automation.


![Test Analytics for Continuous Integration](/assets/images/blog/test-analytics-graph.png "Test Analytics for CI")


For more information regarding Insights refer to our help documentation [here](https://help.testspace.com/projects:insights).
 
* At Least One Step

## Our Model is constantly improving

We are constantly monitoring and improving our `algorithms` and `statistical models` to extract out more useful and **actionable** data that customers can use to improve their software development process. We track regression patterns, resolution rates for failures, risk related to change, and trends in code coverage. In order to continue improving Testspace Insights, we will continue to collect more data such as:

* Code Review cycle - GitHub Pull Request, GitLab Merge requests, Gerrit Code, etc.
* Defect Tracking tool - Jira, GitHub Issues, etc.
* Failure triage - tracking user review of test failures.

As a company, our focus is to better enable software development teams to **optimize the change-build-test workflow** by leveraging all of the data they generate during development. Building a model that adapts, learns, and prescribes in an automated fashion is the focus of Testspace.  

> Don't let **your data** get dropped on the floor 
