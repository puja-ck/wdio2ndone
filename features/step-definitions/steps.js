const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const setupPage = require('../pageobjects/setup.page');
const SecurePage = require('../pageobjects/secure.page');
const { expect } = require('chai');
const pages = {
    login: LoginPage,
    setup: setupPage,
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

When(/^wait for (\w+) seconds$/, async (time) => {
    await browser.pause(time * 1000);
});

When(/^expect (\w+) text on (\w+) page to equal (.*)$/, async (element, pagename,text) => {
    let exp = pagename+'Page.'+element+'Text';
    console.log(exp);
    const selector = await eval(exp);
    const displayedText = await selector.getText();
    expect(displayedText).to.equal(text);
    
});

// When(/^expect nameHeader text on (\w+) page to equal (.*)$/, async (pagename,text) => {
//     const selector = await pages[pagename].nameheader;
//     const displayedText = await selector.getText();
//     expect(displayedText).to.equal(text);
// });

When(/^click appLauncher button on (\w+) page$/, async(pagename) => {
     await pages[pagename].applauncherButton.click();
});

When(/^click Sales logo on (\w+) page$/, async(pagename) => {
    await pages[pagename].salesLogo.click();

});

When(/^click leads text on (\w+) page$/, async(pagename) => {
    await pages[pagename].leadsArrowText.click();

});

When(/^click new leads text on (\w+) page$/, async(pagename) => {
    await pages[pagename].newLeadText.click();

});

When(/^click save button on (\w+) page$/, async(pagename) => {
    await pages[pagename].saveButton.click();

});
When(/^set search bar field as \"(.*)\" on (\w+) page$/, async (text,pagename) => {
    await pages[pagename].searchBar.setValue(text);
});

When(/^set (\w+) field as \"(.*)\" on the (\w+) page$/, async (element,text,pagename) => {
    await pages[pagename].lastname.setValue(text);
});

When(/^set (\w+) field as \"(.*)\" on (\w+) page$/, async (element,text,pagename) => {
    await pages[pagename].company.setValue(text);
    let myObj = await pages[pagename]
    console.log("this is the ->>" + await pages[pagename])
    console.log("this is the ->>" +  typeof myObj)
});