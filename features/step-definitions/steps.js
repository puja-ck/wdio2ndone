const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
// const { setText } = require('../pageobjects/reusables/reusable');
const SetupPage = require('../pageobjects/setup.page');
// const { inputUsername } = require('../pageobjects/login.page');



const SecurePage = require('../pageobjects/secure.page');
// const elements = {
//     username: inputUsername
// }

const pages = {
    login: LoginPage,
    // applauncher: LoginPage,
    setup: SetupPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await browser.maximizeWindow();
});


When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)

});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

// When(/^set (\w+) text as (.*) on (\w+) page$/, async (element, text, page) => {
//     const webElement = await elements[element]
//     await setText(text, webElement);
// });

When(/^wait for (\w+) seconds$/, async (time) => {
    // await browser.pause();
    await SetupPage.waitForText(time);
});

When(/^expect header text on setup page to equal (.*)$/, async (text) => {
    await SetupPage.isVisible(text);
});

When(/^expect nameHeader text on setup page to equal (.*)$/, async (text) => {
    await SetupPage.assertName(text);
});

When(/^click (\w+) button on (\w+) page$/, async(element, page) => {
    // await pages[container].clickAppLauncher();
    // await SetupPage.clickAppLauncher();
    // await pages[page][element].click();
   console.log(Object.getOwnPropertyNames(SecurePage));

});
When(/^click Sales logo on setup page$/, async() => {
    // await pages[container].clickAppLauncher();
    await SetupPage.clickSaleslogo();

});

When(/^click leads text on setup page$/, async() => {
    // await pages[container].clickAppLauncher();
    await SetupPage.clickLeads();

});

When(/^click new leads text on setup page$/, async() => {
    // await pages[container].clickAppLauncher();
    await SetupPage.clickNewLeads();

});

When(/^click save button on setup page$/, async() => {
    // await pages[container].clickAppLauncher();
    await SetupPage.clickSave();

});
When(/^set search bar field as \"(.*)\" on setup page$/, async (text) => {
    // const webElement = await elements[element]
    await SetupPage.setText(text);
});

When(/^set lastname field as \"(.*)\" on setup page$/, async (text) => {
    await SetupPage.lastnameText.setValue(text);
});


When(/^set (\w+) field as \"(.*)\" on (\w+) page$/, async (element,text,paget) => {
    await pages[paget].companyText.setValue(text);
});