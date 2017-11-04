var assert = require('assert');

describe('Women tab', function () {
    //check if the women tab exists
    it('should have a link to it from the homepage', function() {
        browser.url('http://automationpractice.com');
        var hasWomenTab = browser.isExisting('=Women') //returns True or False
        assert(hasWomenTab);
    })

        //check if the Women tab is clickable
        it('should take you to the Women tab', function() {
            browser.url('http://automationpractice.com');
            browser.click('=Women')

            //check if the title of the page will change
            var title = browser.getTitle();
            assert.equal(title, 'Women - My Store')

            //browser.debugg(); //pause the execution state until you press enter
            //browser.pause(2000); //pause the execution for 2 seconds in this case
        })

        //takes a screenshot when entering a keyword for searching
        it('should filter search results', function() {
            browser.url('http://automationpractice.com');

            browser.setValue('input[name="search_query"]', 'dress');

            browser.saveScreenshot('main_search_results.png');

        })
});

 