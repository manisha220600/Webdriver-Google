import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

class GooglePage extends Page {
    public get searchQuery ()
    {
        return $("input[type='text']");

    }
    public get btnSubmit (){

        return $("input[type='submit']");

    }
    public get resultTitle (){

        return $$("h3");

    }
    public get resultStats (){

        return $('#resultTitle');

    }
    public async search (queryString: string) {

        await this.searchQuery.setValue(queryString);
        await browser.waitUntil(()=>this.btnSubmit.isClickable());
        await this.btnSubmit.click();
        await this.resultStats;

    }
    
    public async logResults () {

        for(let index=0; index<5; index++){

            var logs = await this.resultTitle[index].getText();

            console.log(logs);

        }

    }
    
    public open () {

        return super.open();

    }

}

export default new GooglePage();