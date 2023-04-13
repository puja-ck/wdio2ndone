const Page = require('./page');
const WebdriverAjax = require('wdio-intercept-service')

class SetupPage extends Page {
  get headerText() {
    return $('span[title="Setup"]');
  }

  get appLauncherbutton() {
    return $('.slds-icon-waffle');
  }

  get searchbarField() {
    return $('//label[text()="Search apps and items..."]/..//input');
  }

  get saleslogo() {
    return $('//a[@data-label="Sales"]//b');
  }

  get leadstext() {
    return $('//span[@class="slds-truncate" and text()="Leads"]/..//following-sibling::one-app-nav-bar-item-dropdown//lightning-primitive-icon');
  }

  get newleadstext() {
    return $('//span[text()="New Lead"]/..//lightning-icon//span');
  }

  get lastnameField() {
    return $('//input[@name="lastName"]');
  }

  get companyField() {
    return $('//input[@name="Company"]');
  }

  get savebutton() {
    return $('//button[@name="SaveEdit"]');
  }

  get nameheaderText() {
    return $('//lightning-formatted-name[@slot="primaryField"]');
  }
}

module.exports = new SetupPage();
