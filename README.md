# This Is My Sample Project of Web Automation Testing Using JavaScript, Selenium, and Mocha

## Project Information
For this project, i use:
- Selenium WebDriver (https://www.selenium.dev/documentation/webdriver/)
- Mocha Framework (https://mochajs.org/)
- Chai Assertion Library (https://www.chaijs.com/)

### Selenium WebDriver
Selenium WebDriver drives a browser natively, as a user would, either locally or on a remote machine using the Selenium server, marks a leap forward in terms of browser automation.

### Mocha Framework
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. 
Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

### Chai Assertion Library
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Preparation

### Clone Repo
- Clone from this repo https://github.com/harisdaniels/test-automation-javascript-selenium-mocha.git.
- The steps of cloning Github Repository, can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

### Setup
For windows and mac, you can [download node](https://nodejs.org/en/) and install.

### Package Installation
Before start development and running the test you need to install packages that needed for this simple project. To install them, you need to do these step:

- Go to your project repo directory in your local machine with your favorite terminal.
- and type `npm install` in your terminal and press ENTER on your keyboard
- wait, and done


## Test Structure
- Use `describe` function to create Test Suite (group of test cases)
- Use `It` function to create a test case
- Use `before` hooks to run once before the first test in this block
- Use `after` hooks to run once after the last test in this block

```
describe("As an admin, i want to try to do login", function() {
    this.timeout(50000);

    before(async function(){
        await loginPage.goToUrl(url);
    });

    after(async function() {
        await loginPage.quit();
    });

    it("I should be able to do login and do logout", async function() {
        await loginPage.clearEmailField();
        await loginPage.inputEmailField("admin@yourstore.com");
        await loginPage.clearPasswordField();
        await loginPage.inputPasswordField("admin");
        await loginPage.enterLogin();

        const homePageTitle = await driver.getTitle()
        assert.equal(homePageTitle, "Dashboard / nopCommerce administration");
        
        await loginPage.logout();

        const loginPageTitle = await driver.getTitle()
        assert.equal(loginPageTitle, "Your store. Login");
    });
});
```


## Run Test
You can run your test by simply type `npm run test` or just type `npm test` command in your terminal, then press ENTER on your keyboard. And, the test will run.
