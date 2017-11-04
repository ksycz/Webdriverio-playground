var assert = require('assert');

/*Test case:
Go to the login page
Enter valid credentials
Click submit
Validate we're logged in
*/

//log in with a correct password
describe('Login Page', function () {
    it('should let you log in', function () {
        browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        browser.setValue('input[name="email"]', 'tester@domain.com');
        browser.setValue('input[name="passwd"]', 'tester');
        browser.click('.button=Sign in');
        // browser.submitForm('input[name="email"]');
        var pageUrl = browser.getUrl();
        // assert.notEqual(pageUrl, 'http://testyourlog.in/example/');
        assert.equal(pageUrl, 'http://automationpractice.com/index.php?controller=my-account');
    })
});
