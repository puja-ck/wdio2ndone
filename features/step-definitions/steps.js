const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const setupPage = require('../pageobjects/setup.page');
// const { expect } = require('chai');
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


When(/^wait for (\w+) seconds$/, async (time) => {
    await browser.pause(time * 1000);
});

When(/^expect (\w+) text on (\w+) page to equal (.*)$/, async (element, pagename,text) => {
    let exp = pagename+'Page.'+element+'Text';
    console.log(exp);
    const selector = await eval(exp);
    const displayedText = await selector.getText();
    expect(displayedText).toEqual(text);
    
});

When(/^click (\w+) (\w+) on (\w+) page$/, async(element,eletype,pagename) => {
     let exp = pagename+'Page.'+element+eletype;
     await eval(exp).click();
});


When(/^set (\w+) field as \"(.*)\" on (\w+) page$/, async (element,text,pagename) => {
    let exp = pagename+'Page.'+element+'Field';
    await eval(exp).setValue(text);
    
});