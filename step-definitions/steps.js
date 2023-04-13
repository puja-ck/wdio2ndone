const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const setupPage = require('../pageobjects/setup.page');
// const { expect } = require('chai');
const pages = {
  login: LoginPage,
  setup: setupPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
  await browser.maximizeWindow();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});
When(/^wait for (\w+) seconds$/, async (time) => {
  await browser.pause(time * 1000);
});

When(/^expect (\w+) text on (\w+) page to equal (.*)$/, async (element, pagename, text) => {
  const exp = `${pagename}Page.${element}Text`;
  // eslint-disable-next-line no-eval
  const selector = await eval(exp);
  const displayedText = await selector.getText();
  expect(displayedText).toEqual(text);
});

When(/^click (\w+) (\w+) on (\w+) page$/, async (element, eletype, pagename) => {
  const exp = `${pagename}Page.${element}${eletype}`;
  // eslint-disable-next-line no-eval
  await eval(exp).click();
});

When(/^set (\w+) field as "(.*)" on (\w+) page$/, async (element, text, pagename) => {
  const exp = `${pagename}Page.${element}Field`;
  // eslint-disable-next-line no-eval
  await eval(exp).setValue(text);
});

When(/^run interceptor on (\w+) field on (\w+) page$/, async (element, pagename) => {
   await browser.setupInterceptor();  
   //await $('//label[text()="Search apps and items..."]/..//input').setValue('Sales')  
   await browser.pause(3000)  
   await browser.expectRequest('POST','https://cloudkaptanconsultancyse-3f-dev-ed.lightning.force.com/aura?r=44&aura.RecordUi.createRecord=1',200)
   let logs = await browser.getRequest(0)//'POST','https://cloudkaptanconsultancyse-3f-dev-ed.lightning.force.com/aura?r=44&aura.RecordUi.createRecord=1')  
   console.log(logs.response.body.actions[0].returnValue)
   await browser.assertRequests()
   //const exp = `${pagename}Page.${element}Field`;

   // eslint-disable-next-line no-eval
  
   //await eval(exp).setValue(text);
  
  });
