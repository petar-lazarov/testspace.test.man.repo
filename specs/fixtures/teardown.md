# FIXTURE TEARDOWN 

A test fixture is a set of Steps required to ensure a test case is in a well-known and fixed environment, 
enabling tests to run in a repeatable context. Test Fixtures in the context of Gauge run before and/or 
after each Cases defined for the Suite. 

Teardown Fixtures are called Tear Downs in Gauge. Teardown Steps are listed after the last Case using 3 or more underscores: 


## ONE: Scenario / Case 
This is a generic Scenario header that will be used throughout.

  * Do this
  * Do that

## TWO: Scenario / Case 
This is a generic Scenario header that will be used throughout.

  * Do this
  * Do that

----

This is teardown text that goes here.

* Teardown Step One
* Teardown Step Two

And can contain *optional* text here 
