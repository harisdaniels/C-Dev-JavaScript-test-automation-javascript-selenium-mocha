const {By, Key} = require('selenium-webdriver');
const BasePage = require('./base-page.js');

class LoginPage extends BasePage {

    async clearEmailField() {
        await driver.findElement(By.id('Email')).clear();
    }

    async inputEmailField(email) {
        await driver.findElement(By.id('Email')).sendKeys(email);
    }

    async clearPasswordField() {
        await driver.findElement(By.id('Password')).clear();
    }

    async inputPasswordField(password) {
        await driver.findElement(By.id('Password')).sendKeys(password);
    }

    async enterLogin() {
        await driver.findElement(By.css('button[type="submit"]')).click();
        // await driver.findElement(By.css('button[type="submit"]')).sendKeys(Key.ENTER);
        // await driver.findElement(By.id('Password')).sendKeys(Key.RETURN);
    }

    async logout() {
        await driver.findElement(By.css('a[href="/logout"]')).click();
    }
}

module.exports = new LoginPage();