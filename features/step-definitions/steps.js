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
  // eslint-disable-next-line wdio/no-pause
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

When(/^click test (\w+) (\w+) on (\w+) page$/, async (element, eletype, pagename) => {
  

  await browser.setupInterceptor();

  const exp = `${pagename}Page.${element}${eletype}`;
  await eval(exp).click();
  // eslint-disable-next-line wdio/no-pause
  await browser.pause(5000)
 //await browser.expectRequest('POST','https://cloudkaptanconsultancyse-3f-dev-ed.lightning.force.com/aura?r=68&aura.RecordUi.createRecord=1',200)
   let request = await browser.getRequest(0,'POST','https://cloudkaptanconsultancyse-3f-dev-ed.lightning.force.com/aura?r=68&aura.RecordUi.createRecord=1'); 
   //let log =await request.response
   console.log(request);
      
});


When(/^set (\w+) field as "(.*)" on (\w+) page$/, async (element, text, pagename) => {
  const exp = `${pagename}Page.${element}Field`;
  // eslint-disable-next-line no-eval
  await eval(exp).setValue(text);
});


Then(/^set (\w+) dummy "(.*)" on (\w+) page$/, async (element, text, pagename) => {
  const exp = `${pagename}Page.${element}Field`;
  // eslint-disable-next-line no-eval
  await eval(exp).setValue(text);
});

// When(/^run interceptor on network field on setup page$/, async () => {

//    console.log("Network tab assertion Start");
//    await browser.setupInterceptor();
//    // eslint-disable-next-line wdio/no-pause
//    await browser.pause(3000)
//    await browser.expectRequest('GET','https://static.lightning.force.com/ap26/auraCmpDef?_au=0-yIdbkzbvPjqbRz8oI1MA&_c=false&_density=VIEW_ONE&_ff=DESKTOP&_l=true&_l10n=en_US&_lrmc=348087373&_style=-205728250&_uid=-1148776111&aura.app=markup://one:one&aura.mode=PROD&runtime_sales_lead=pathAssistant&runtime_sales_merge=mergeCandidatesPreviewCard',200)
//    // eslint-disable-next-line wdio/no-pause
//    await browser.pause(3000)

//    await browser.assertRequests();
//   console.log("Network tab assertion End");
  
//   });