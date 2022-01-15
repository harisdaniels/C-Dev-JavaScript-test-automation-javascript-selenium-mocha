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
        await driver.get(url);
    }

    async quit() {
        await driver.close();
        await driver.quit();
    }
}

module.exports = BasePage;