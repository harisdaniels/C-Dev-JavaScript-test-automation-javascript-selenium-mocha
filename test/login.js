require('chromedriver');
const {By} = require('selenium-webdriver');
const assert = require('chai').assert;
const loginPage = require('../page-objects/login-page.js');


const url = 'https://admin-demo.nopcommerce.com/'
describe("As an admin, i want to try to do login", function() {
    this.timeout(50000);

    before(async function(){
        try {
            await loginPage.goToUrl(url);
        } catch (error) {
            console.log(error);
        }
    });

    after(async function() {
        try {
            await loginPage.quit();          
        } catch (error) {
            console.log(error);
        }
    });

    it("I should be able to do login and do logout", async function() {
        try {
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
        } catch (error) {
            console.log(error);
        }
    });

    it("I should NOT be able to do login with Invalid email", async function() {
        try {
            await loginPage.clearEmailField();
            await loginPage.inputEmailField("test@gmail.com");
            await loginPage.clearPasswordField();
            await loginPage.inputPasswordField("admin");
            await loginPage.enterLogin();

            let messageError = await driver.findElement(By.className('message-error')).getText();
            messageError = messageError.replace("\n", " ");
            assert.equal(messageError, "Login was unsuccessful. Please correct the errors and try again. No customer account found");

            const title = await driver.getTitle()
            assert.equal(title, "Your store. Login");
        } catch (error) {
            console.log(error);
        }
    });

    it("I should NOT be able to do login with Invalid password", async function() {
        try {
            await loginPage.clearEmailField();
            await loginPage.inputEmailField("admin@yourstore.com");
            await loginPage.clearPasswordField();
            await loginPage.inputPasswordField("invalidpassword");
            await loginPage.enterLogin();
    
            let messageError = await driver.findElement(By.className('message-error')).getText();
            messageError = messageError.replace("\n", " ");
            assert.equal(messageError, "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect");
    
            const title = await driver.getTitle()
            assert.equal(title, "Your store. Login");           
        } catch (error) {
            console.log(error);
        }
    });

    it("I should NOT be able to do login with Invalid email and Invalid password", async function() {
        try {
            await loginPage.clearEmailField();
            await loginPage.inputEmailField("test@gmail.com");
            await loginPage.clearPasswordField();
            await loginPage.inputPasswordField("invalidpassword");
            await loginPage.enterLogin();
    
            let messageError = await driver.findElement(By.className('message-error')).getText();
            messageError = messageError.replace("\n", " ");
            assert.equal(messageError, "Login was unsuccessful. Please correct the errors and try again. No customer account found");
    
            const title = await driver.getTitle()
            assert.equal(title, "Your store. Login");           
        } catch (error) {
            console.log(error);
        }
    });
    it("I should NOT be able to do login without inputing anything", async function() {
        try {
            await loginPage.clearEmailField();
            await loginPage.clearPasswordField();
            await loginPage.enterLogin();
    
            const messageError = await driver.findElement(By.className('field-validation-error')).getText();
            assert.equal(messageError, "Please enter your email");
    
            const title = await driver.getTitle()
            assert.equal(title, "Your store. Login");           
        } catch (error) {
            console.log(error);
        }
    });

    it("I should NOT be able to do login without inputing email", async function() {
        try {
            await loginPage.clearEmailField();
            await loginPage.clearPasswordField();
            await loginPage.inputPasswordField("admin");
            await loginPage.enterLogin();
    
            const messageError = await driver.findElement(By.className('field-validation-error')).getText();
            assert.equal(messageError, "Please enter your email");
    
            const title = await driver.getTitle()
            assert.equal(title, "Your store. Login");            
        } catch (error) {
            console.log(error);
        }
    });

    it("I should NOT be able to do login without inputing password", async function() {
        try {
            await loginPage.clearEmailField();
            await loginPage.inputEmailField("admin@yourstore.com");
            await loginPage.clearPasswordField();
            await loginPage.enterLogin();
    
            let messageError = await driver.findElement(By.className('message-error')).getText();
            messageError = messageError.replace("\n", " ");
            assert.equal(messageError, "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect");
    
            const title = await driver.getTitle()
            assert.equal(title, "Your store. Login");           
        } catch (error) {
            console.log(error);
        }
    });

    it("I should NOT be able to do login with wrong email format", async function() {
        try {
            await loginPage.clearEmailField();
            await loginPage.inputEmailField("test");
            await loginPage.clearPasswordField();
            await loginPage.inputPasswordField("admin");
            await loginPage.enterLogin();
    
            const messageError = await driver.findElement(By.className('field-validation-error')).getText();
            assert.equal(messageError, "Wrong email");
    
            const title = await driver.getTitle()
            assert.equal(title, "Your store. Login");          
        } catch (error) {
            console.log(error);
        }
    });
});