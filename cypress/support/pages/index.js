class indexPage{
    search = (element) => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.searchInput).type(element);
            cy.get(locators.searchButton).click();
        })
    }

    clickHome = (homeButton) => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.homeButton).click();
        })
    }
}

export default new indexPage();