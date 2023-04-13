
const Page = require('./page');

class Reusable extends Page{

    async setText(text, element){
        await element.setValue(text);
    }

}
module.exports = new Reusable();