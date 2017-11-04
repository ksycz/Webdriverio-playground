var assert = require('assert');
//checking if the website has the right title
describe('automation practice', function() {
    it('should have the right title', function () {
        browser.url('http://automationpractice.com');
        var title = browser.getTitle();
        assert.equal(title, 'My Store');
    });
});