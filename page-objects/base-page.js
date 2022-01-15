const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});
driver.manage().window().maximize();
driver.manage().deleteAllCookies();

class BasePage {
    constructor() {
        global.driver = driver;
    }

    async goToUrl(url) {
        try {
            await driver.get(url);           
        } catch (error) {
            console.log(error);
        }
    }

    async quit() {
        try {
            await driver.close();
            await driver.quit();           
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BasePage;