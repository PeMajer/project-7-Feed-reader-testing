/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /**
    * @description this suite is all about the RSS feeds definitions, the allFeeds variable in application
    */
    describe('RSS Feeds', function() {

        /**
        * @description it tests to make sure that the allFeeds variable has been defined and that it is not empty
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
        * @description test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
        */
        it('all URLs are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /**
        * @description test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
        */
        it('all names are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /**
    * @description this suite is all about the menu
    */
    describe('The menu', function(){

        /**
        * @description test that ensures the menu element is hidden by default
        */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /**
        * @description test that ensures the menu changes visibility when the menu icon is clicked
        */
        it('change visibility on click', function() {
            const icon = $('.menu-icon-link');

            icon.click(); // display menu
            expect($('body').hasClass('menu-hidden')).not.toBe(true);

            icon.click(); // hide menu
            expect($('body').hasClass('menu-hidden')).not.toBe(false);
        });
    });

    /**
    * @description this suite is all about Initial Entries
    */
    describe('Initial Entries', function() {

        /**
        * @description test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
        */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('contain at least one feed.', function(done){
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    /**
    * @description this suite is all about new feed selection
    */
    describe('New Feed Selection', function() {
        let feedContentOne,
            feedContentTwo;

        /**
        * @description loaded first feed and get his content
        */
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedContentOne = $('.feed').html();
                done();
            });
        });

        /**
        * @description test that ensures when a new feed is loaded by the loadFeed function that the content actually changes
        */
        it('change content of feed after loading feed', function(done) {
            loadFeed(1, function() {
                feedContentTwo = $('.feed').html();
                expect(feedContentTwo).not.toBe(feedContentOne);
                done();
            });
        });
    });
}());
