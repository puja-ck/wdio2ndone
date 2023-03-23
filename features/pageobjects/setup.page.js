const { expect } = require('chai');
// import setText from './reusables/reusable';

const Page = require('./page');

class SetupPage extends Page{

    get assertText() {
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

    get lastnameText(){
        return $('//input[@name="lastName"]');
    }

    get companyText(){
        return $('//input[@name="Company"]');
    }

    get saveButton(){
        return $('//button[@name="SaveEdit"]');
    }

    get nameheader(){
        return $('//lightning-formatted-name[@slot="primaryField"]')
    }

    async waitForText(number) {
        await browser.pause(number * 1000);
    }

    async isVisible(text) {
        const selector = await this.assertText;
        const displayedText = await selector.getText();
        expect(displayedText).to.equal(text);
    }
    async clickAppLauncher(){
        await this.applauncherButton.click();
    }

    async clickSaleslogo(){
        await this.salesLogo.click();
    }
    
    // async clickSearchbar(){
    //     await this.searchBar.click();
    // }
    async setText(text){
        await this.searchBar.setValue(text);
    }

    async clickLeads(){
        await this.leadsArrowText.click();
    }
    async clickNewLeads(){
        await this.newLeadText.click();
    }

    async clickSave(){
        await this.saveButton.click();
    }

    async assertName(text){
        const selector = await this.nameheader;
        const displayedText = await selector.getText();
        expect(displayedText).to.equal(text);
    }

}

module.exports = new SetupPage();