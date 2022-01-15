const {By, Key} = require('selenium-webdriver');
const BasePage = require('./base-page.js');

class LoginPage extends BasePage {

    async clearEmailField() {
        try {
            await driver.findElement(By.id('Email')).clear();          
        } catch (error) {
            console.log(error);
        }
    }

    async inputEmailField(email) {
        try {
            await driver.findElement(By.id('Email')).sendKeys(email);           
        } catch (error) {
            console.log(error);
        }
    }

    async clearPasswordField() {
        try {
            await driver.findElement(By.id('Password')).clear();           
        } catch (error) {
            console.log(error);
        }
    }

    async inputPasswordField(password) {
        try {
            await driver.findElement(By.id('Password')).sendKeys(password);           
        } catch (error) {
            console.log(error);
        }
    }

    async enterLogin() {
        try {
            await driver.findElement(By.css('button[type="submit"]')).click();
            // await driver.findElement(By.css('button[type="submit"]')).sendKeys(Key.ENTER);
            // await driver.findElement(By.id('Password')).sendKeys(Key.RETURN);           
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
        try {
            await driver.findElement(By.css('a[href="/logout"]')).click();           
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginPage();