const { SummaryPage } = require('./summaryPage');

class controllerOrderPage{
   summary = (amount) => {
       cy.fixture('controllerOrder.json').then((locators) => {
           cy.get(locators.totalFinal).contains(amount);
           cy.get(locators.proceedToCheckoutButton).click()
       });
    }

    signIn = (signedInRequired) => {
        cy.fixture('controllerOrder.json').then((locators) => {
            cy.get(locators.pleaseSignInText).contains(signedInRequired);
        });
    }

    summaryTab = () => {
        const summaryTab = new SummaryPage();
        return summaryTab;
    }

}

export default new controllerOrderPage();