// import setText from './reusables/reusable';

const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('input[type="submit"]');
    }

    // get assertText() {
    //     return $('span[title="Setup"]');
    // }

    // get applauncherButton(){
    //     return $('.slds-icon-waffle');
    // }

    // async assertText(text) {
    //     let actualText = await $('span[title="Setup"]').getText();
    //     expect(actualText).toEqual(text);
    // }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // async waitForText(number) {
    //     await browser.pause(number * 1000);
    // }

    // async isVisible(text) {
    //     const selector = await this.assertText;
    //     const displayedText = await selector.getText();
    //     expect(displayedText).to.equal(text);
    // }
    // async clickButton(){
    //     await this.applauncherButton.click();
    // }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
