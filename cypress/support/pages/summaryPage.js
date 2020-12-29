const locators = require('../../fixtures/controllerOrder.json')

class SummaryPage {
    getTotalAmount = () => {
        return cy.get(locators.totalFinal);
    }
}

module.exports = {
    SummaryPage
}