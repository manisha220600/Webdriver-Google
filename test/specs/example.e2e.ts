import GooglePage from '../pageobjects/google.page';

describe('My Login application', () => {
    it('should search and display the contents of the search query', async () => {
        await GooglePage.open();
        await GooglePage.search("Minecraft");
        await GooglePage.logResults();

        expect((await GooglePage.resultStats).getText()).toBePresent();

    });
});


