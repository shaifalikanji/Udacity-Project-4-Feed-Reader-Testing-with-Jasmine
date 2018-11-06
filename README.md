# Udacity-Project-4-Feed-Reader-Testing-with-Jasmine

# Udacity-Project-4-Feed-Reader-Jasmine-Testing

# Introduction

It’s important to ensure your applications function the way you intended them to. You can use a testing framework such as Jasmine, that can automate the tasks required to test your code and ensure it is running correctly.

Jasmine is an open source framework that is used for testing JavaScript code. You can view a thorough description of each of the required methods/functions you can use to test your code. For a more detailed walk through for the project please refer to the References section at the end of this README file. **For now, please, familiarize yourself with the following terms that you will use to test your code and how they function**. 

1. **(describe – new test suite)** is a function used to group your tests, it includes a description of your tests and function that executes all your code. You use this every time you write a new test suite.

2. **(It)** is a global jasmine function, which is used to write describe what you are testing and a function(steps) for your tests that you want to execute. You can write multiple tests using (it) under each new test suite (describe).

3. **Expectations()** call back function to define how you expect the test to function.

4. **beforeEach()** is a  global function, which is called once before each spec(test) in the (describe) test suite in which it is called.

5. **afterEach** function is called after each spec(test).

6. **Asynchronous()** done(); function that is used as a callback once your items have all loaded and before the test runs

# Knowledge required for this project:

1. Basic knowledge of JavaScript
2. Object Oriented JavaScript
3. Document Object Model and JavaScript
4. Document Object Model and JQuery
5. Jasmine – (describing) an object
6. Jasmine -what is (it)
7. Jasmine and Asynchronous processes and the role of “done”

# Files included with this project:

1.	index.html
2.	style.css
3.	app.js – you will use this file to update all your code.
4.	feedreader.js (Jasmine spec file) this is the spec file that Jasmine will read and contains.
all of the tests that will be run against your application.


# Instructions:

1. All the Jasmine files and dependencies are included in the **index.html file**. As you write your tests(specs). Jasmine
   suite will automatically start looking for your specs and start running them.
2. You have one feed project for which you need to write multiple tests.
3. **Below** are all the required new test suites and tests you need to write to test your JavaScript code.
4. There is a total of **4 new test suites**.
5. There is a total of **7 tests** that must pass.

**STEP 1** **New Test Suite (describe) “RSS Feeds” contains a set of related tests**

Test 1 is already done for you, Test 2 and Test 3 you must write
1.	A new test suite using (describe) has already been created for you, you can continue writing the tests using (it).
2.	Write 2 tests: first write a test that loops through each feed inside the (allFeeds variable) and checks each URL is named and the length of the URL is more than 0.
3.	In app.js file: write a test that ensures that each URL is defined for each feed.
4.	In app.js file: write a test that ensures the length of each URL is greater than 0.
5.	Test pass (GREEN): index.html file, load your page and check the (Jasmine Tests) you should see (RSS feeds title) along with the description name of your test: 2 specs and 0 failures. 
6.	Test fail (RED) in app.js file: you can remove the (var allFeeds URL’s) and notice the “red” errors listed on your index.html file.
7.	Red = failed tests, errors remaining which require attention and should be fixed!
8.	Green = error free, tests have passed!
9.	Move on to your next test.

**STEP 2** **New Test Suite (describe) “The Menu” contains a set of related tests**

Test 1, Test 2:  
1.	Write a new test suite using (describe) and follow with (it) for the remaining 2 tests below.
2.	Write 2 tests: first ensure the menu element is hidden by default and the menu changes visibility when the menu icon is clicked.
3.	In index.html file, right click the page, select “inspect”, select the “elements tab” for this test you will be using the class “menu-icon link” in the <a> tag for this test.
4.	In app.js file: write a test that ensures the menu element is hidden by default.
5.	In app.js file: write a test that ensures the menu is displayed when clicked once and hides when clicked again.
6.	Test pass (GREEN): index.html file, load your page and check the (Jasmine Tests) you should see “The Menu” title along with the description name of your test: 2 specs and 0 failures.
7.	Red = failed tests, errors remaining which require attention and should be fixed!
8.	Green = error free, tests have passed!
9.	Move on to your next test

**STEP 3** **New Test Suite (describe) “Initial Entries” contains a set of related tests**

Test 1:
1.	This test requires Asyncronous Work.
2.	This test requires the use of beforeEach() function, that executes the functions before the actual tests.
3.	Write a new test suite using (describe) and follow with (it) for 1 test below.
4.	Write 1 test:  Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
5.	In index.html file, right click the page, select “inspect”, select the “elements tab” for this test you will be using the class “entry” in the <article> tag under the <div> tags for this test.
6.	In app.js file: Write 1 test:  to check if at least 1 entry is added when loadFeed function is called and completed it’s work (done).
7.	Test fail (RED): in app.js if you modify any URL’s you will come across a error, loadFeed is unable to load the page.
8.	Test pass (GREEN): index.html file, load your page and check the (Jasmine Tests) you should see (RSS feeds title) along with the description name of your test: 1 spec and 0 failures.
9.	Red = failed tests, errors remaining which require attention and should be fixed!
10.	Green = error free, tests have passed!
11.	Move on to your next test.


**STEP 4** **New Test Suite (describe) “New Feed Selection” contains a set of related tests**

Test 1 :
1.	This test requires Asyncronous Work.
2.	This test requires the use of beforeEach() function, that executes the functions before the actual tests.
3.	Write a new test suite using (describe) and follow with (it) for 1 test below.
4.	Write 1 test:  Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. 
5.	Test pass (GREEN): index.html file, load your page and check the (Jasmine Tests) you should see (RSS feeds title) along with the description name of your test: 7 specs and 0 failures.
6.	Red = failed tests, errors remaining which require attention and should be fixed!
7.	Green = error free, tests have passed!
8.	Move on to your next test.

**Once the tests are complete you should pass all tests**

## Additional notes : (Jasmine expectations)
Inside the Jasmine folder, select the library folder - jasmine.js folder, this folder provides a list of expectations you can use to test your code.
    
      'toBe',
      'toBeCloseTo',
      'toBeDefined',
      'toBeFalsy',
      'toBeGreaterThan',
      'toBeLessThan',
      'toBeNaN',
      'toBeNull',
      'toBeTruthy',
      'toBeUndefined',
      'toContain',
      'toEqual',
      'toHaveBeenCalled',
      'toHaveBeenCalledWith',
      'toMatch',
      'toThrow',
      'toThrowError'


## References used

https://jasmine.github.io/tutorials/your_first_suite
https://jasmine.github.io/tutorials/async
https://devhints.io/jasmine
https://jasmine.github.io/api/edge/global.html#beforeEach
https://docs.google.com/spreadsheets/d/1NF750x4wYZY4idQmPGDF0VeujQy8c4EeYN4CQhCi45k/edit#gid=0
https://www.youtube.com/watch?v=eUdkhVkpCf8&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&index=4
https://rkrupnick.github.io/gulp-jasmine.html
https://zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true
https://www.youtube.com/watch?v=7kOBXPbDmyw&feature=youtu.be
https://drive.google.com/drive/folders/1mfNZh6XoCSDjBESw9yayFTS1xgoyYI3t
https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/
https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/
https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/
https://www.youtube.com/watch?v=pPt4oOKNdEk
https://www.youtube.com/watch?v=Ut_L8YUImbw
https://www.youtube.com/watch?v=_XwH-xfvydw


## Image snapshot using Jasmine when you have no "errors" displays in GREEN

<img width="1414" alt="screen shot 2018-11-06 at 10 47 02 am" src="https://user-images.githubusercontent.com/38163931/48099290-f6d05e80-e1d3-11e8-909e-8d9a853a505e.png">

## Image snapshot using Jasmine when you have "errors" displays in RED

<img width="1429" alt="screen shot 2018-11-06 at 10 46 14 am" src="https://user-images.githubusercontent.com/38163931/48099412-4d3d9d00-e1d4-11e8-83a7-b28523dd5068.png">

