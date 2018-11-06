/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() { //your code loads before the test
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

// Must include following testing methods and function to write this test
// describe
// (it = "expectation" is your expectation : how you exepect your code to function
// beforeEach()
// done(); function callbacks 
                            
                                /***** FIRST TEST SUITE WITH 3 TESTS*****/

// https://jasmine.github.io/tutorials/your_first_suite
// https://jasmine.github.io/tutorials/your_first_suite
// https://devhints.io/jasmine
        
/*TEST SUITE 1: Test suite named 'RSS Feeds' */

/* TEST 1 : it tests to make sure that the
* allFeeds variable has been defined and that it is not
* empty. Experiment with this before you get started on
* the rest of this project. What happens when you change
* allFeeds in app.js to be an empty array and refresh the
* page?
*/ 

/* TEST 2: Write a test that loops through each feed
* in the allFeeds object and ensures it has a URL defined
* and that the URL is not empty.
*/


/* TEST 3: Write a test that loops through each feed
* in the allFeeds object and ensures it has a name defined
* and that the name is not empty.
*/

    describe('RSS Feeds', function() { // new test suite with a collection of tests under it (it) test 1, 2 and 3 
        
        it('allFeeds variable is defined and not empty', function() { //description of test, function for what test should do
            expect(allFeeds).toBeDefined(); // var allFeeds provides all the URL's(feeds) (in the array) for the web page
            expect(allFeeds.length).not.toBe(0); // the length in the array should not be less than 0,
        });                                      // should have atleast 1 feed inside array

    
        it('allFeeds object has URL defined and URL not empty', function() { // //description of test, function for what test should do
            allFeeds.forEach(function(feedEntry) {  // variable has all the feeds listed under app.js file,function loops through each URL, make sure not empty
                                                    // for each feed in the allFeeds array, loop over and make sure URL is defined and not empty
                expect(feedEntry.url).toBeDefined(); // each URL must be defined, check in app.js file if test fails
                expect(feedEntry.url.length).not.toBe(0); // the length of the URL(feed) must be greater than 0
                                                    
                                                    // check in app.js file if test fails
                                                    // check in developer tools: allFeeds; should display array with 
                                                    // index id, name and URL of each feed. Total of 4 feeds.
                                                    // check in developer tools: allFeeds[0], displays 1 object each feed.
                                                    // check in developer tools: allFeeds[0].url, displays url of that object feed
                                                    // all 4 items in the array must be defined, keeps looping until true.
            });
        });
        
       
        it('loop through feed and ensure name is defined and is not empty', function() { // //description of test, function for what test should do
            allFeeds.forEach(function(feedEntry) { // function loops through each URL feed (entry)
                expect(feedEntry.name).toBeDefined(); //ensures URL name is defined, check in app.js file if test fails
                expect(feedEntry.name.length).not.toBe(0); // ensures the length of the name is greater than 0 
                                                           //check it test fails

            });
        }); 

    });


                                
                                /***** SECOND TEST SUITE WITH 2 TESTS*****/

// https://jasmine.github.io/tutorials/your_first_suite
// https://devhints.io/jasmine
    
/* TEST SUITE 2: Write a new test suite named "The menu" */

/* TEST 1: Write a test that ensures the menu element is
* hidden by default. You'll have to analyze the HTML and
* the CSS to determine how we're performing the
* hiding/showing of the menu element.
*/

/* TEST 2: Write a test that ensures the menu changes
* visibility when the menu icon is clicked. This test
* should have two expectations: does the menu display when
* clicked and does it hide when clicked again.
*/        

//using JQuery or plain JavaScript


    describe('The Menu', function() { // new test suite with a collection of tests under it (it) test 1 and test 2

        it('menu element is hidden by default', function() { // check the <body> tag in index.html file to view the class menu-hidden 
            expect($('body').hasClass('menu-hidden')).toBe(true); //the body does have a class called menu-hidden (true)

        });


        it('the menu icon is displayed when clicked and hides when clicked again', function() { // description of test/function
            $('.menu-icon-link').click();  // in index.html file can view <a> tag class menu-icon-link to see if clicking on this
                                          // menu changes visitiblity or not, this creates a event listener for the menu when clicked
            
            expect($('body').hasClass('menu-hidden')).toBe(false); // if menu icon is clicked it will not have this class menu-hidden in the body

            
            
            $('.menu-icon-link').click(); // in index.html file can view <a> tag class for menu-icon-link to see if clicking on this
                                          // menu changes visitiblity or not, this creates a event listener for the menu when clicked  
            
            expect($('body').hasClass('menu-hidden')).toBe(true); //if menue icon is clicked again it will have this class menu-hidden in the body


        })

    });
  
        


                                    /***** THIRD TEST SUITE WITH beforeEach function and 1 TEST*****/

// https://jasmine.github.io/tutorials/async
// https://devhints.io/jasmine
// https://jasmine.github.io/tutorials/your_first_suite
// https://jasmine.github.io/api/edge/global.html#beforeEach
    
/* TEST SUITE: Write a new test suite named "Initial Entries" */
        
/* TEST 1: Write a test that ensures when the loadFeed
* function is called and completes its work, there is at least
* a single .entry element within the .feed container.
* Remember, loadFeed() is asynchronous so this test will require
* the use of Jasmine's beforeEach and asynchronous done() function.
*/

   
    describe('Initial Entries', function() { // new test suite with a collection of tests under it (it) test 1 

        beforeEach(function(done) { // global function, called once before each spec(test) in the (describe) test suite in which it is called
                                   // afterEach function is called after each spec(test).
                                  // in the index.html file refer to the .feed container class "feed" and the <article> tag 
                                 // has atleast 1 entry (feed)

            
            loadFeed(0, done); // line # 43 in app.js file loadFeed function has 2 parameters, takes (id) of feed and a (cb) call back function
                              // load the first feed (entry) in the .feed container. 
                             // call back function is (done)
                             // this function loads the feeds (URL's) first, then all the tests below are run
        });
    
        
        it('when loadFeed function called and done a single entry in feed container exists', function() { // this checks if at least 1 entry exists 
            expect($('.feed .entry').length > 0).toBe(true);// this takes all the entries in the feed container and add them to an array
                                                                // this will check if the entire array has more than 0 entries(index) in array
                                                                //in the .feed container ( at least 1 article)
                                                                // in the app.js file, if you try to modify the URL in the (var allFeeds) variable
                                                                // you will notice a jasmin error on your web page.
        });                                                     // this test run after the above loadFeeds are loaded first

    }); 





                                 /***** FOURTH TEST SUITE WITH beforeEach function, variables and 1 TEST*****/

// https://jasmine.github.io/tutorials/your_first_suite
// https://devhints.io/jasmine   
// https://jasmine.github.io/api/edge/global.html#beforeEach 
    
/* TEST SUITE: Write a new test suite named "New Feed Selection" */

/* TEST 1: Write a test that ensures when a new feed is loaded
* by the loadFeed function that the content actually changes.
* Remember, loadFeed() is asynchronous.
*/

    describe('New Feed Selection', function() { // new test suite with a collection of tests under it (it) test 1 
            
            var feedEntryOne; // 2 variables that are used to save each feed (entry) and load it one after the other without errors
            var feedEntryTwo; // these variables are created here at global scope so they can be used anywhere in our code and we can save
                              //our contents of the feed (entry) 1 and feed (entry) 2

            // essentially you have to test 2 feed (entries) to see if the contents actually change when the new feed (entry) is loaded        

            beforeEach(function(done) { // global function, called once before each spec(test) in the (describe) test suite in which it is called
                                       // afterEach function is called after each spec(test).
                                       // done(); function is called after 2 feeds load and (it) test begins
          
                loadFeed(0, function() {
                    feedEntryOne = $('.feed').html(); //this takes the contents of the feed (entry) 1, loads it and 
                                                     // saves it inside of the variable (feedEntryOne)
                                                     // can't use done(); function here, loadfeed is asyncronous will load after one another
                                                     //we dont want this so call the done(); function after the second feed loads, so the spec
                                                     //(test) also runs after the second feed is loaded, not the first.
            

                loadFeed(1, function() {
                    feedEntryTwo = $('.feed').html(); // this takes the contents of the feed (entry) 2, loads it  and 
                                                     // saves it inside the variable (feedEntryTwo)
                    done();                         // we call the done(); function before the test (it) using done(); function
                                                    // second loadFeed function runs after first feed finishes loading
                                                    // done(); callback is called after the second loadFeed function finishes loading
                                                    // now below spec(test) (it) will run after both above (feeds) have loaded
                                                         
                }); 

                });

            });
            
// above loadFeed function is Asynchronous - loads both feeds - process is complete - then tests are run
//after the above beforeEach (done) function, all the contents are loaded and saved in 2 different 
//variables (feedEntryOne and feedEntryTwo).
//we can now write a test (it) that compares the two feed (entries) saved in the 2 diff variables and check
//if they actually load one after the other and are not the same feeds loading

            it('when new feed loaded by loadFeed function content changes', function() {
                expect(feedEntryTwo).not.toBe(feedEntryOne);    //comparing the 2 loaded feeds
                                                                // feed(entry) 1 content is not the same as feed(entry) 2 content 
                                                                // if the entry was not the same, then you would see an error in your test


            });


    });




}()); //immediatley invoking the function that was initially set on line # 11
