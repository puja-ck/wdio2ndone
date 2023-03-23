const { expect } = require('chai');
const Page = require('./page');

class SetupPage extends Page{

    get headerText() {
        return $('span[title="Setup"]');
    }

    get applauncherButton(){
        return $('.slds-icon-waffle');
    }

    get searchBar(){
        return $('//label[text()="Search apps and items..."]/..//input');
    }
    get salesLogo(){
        return $('//a[@data-label="Sales"]//b');
    }

    get leadsArrowText(){
        return $('//span[@class="slds-truncate" and text()="Leads"]/..//following-sibling::one-app-nav-bar-item-dropdown//lightning-primitive-icon');
    }

    get newLeadText(){
        return $('//span[text()="New Lead"]/..//lightning-icon//span');
    }

    get lastname(){
        return $('//input[@name="lastName"]');
    }

    get company(){
        return $('//input[@name="Company"]');
    }

    get saveButton(){
        return $('//button[@name="SaveEdit"]');
    }

    get nameheader(){
        return $('//lightning-formatted-name[@slot="primaryField"]')
    }

    get custom() {
        return "CK";
    }

}

module.exports = new SetupPage();