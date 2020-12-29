class articlesPage{
    verifyArticle = (article) => {
        cy.fixture('articles.json').then((locators) =>{
            cy.get(locators.banner).contains(article);
        });
    }

    selectDress = (dressAdded) => {
        cy.fixture('articles.json').then((locators) => {
            cy.get(locators.addToCartDress).click();
            cy.get(locators.productSuccesfullyAdded).contains(dressAdded);
            cy.get(locators.proceedToCheckoutButton).click();
        });

    }

    selectTshirt = (tshirtAdded) => {
        cy.fixture('articles.json').then((locators) => {
            cy.get(locators.tshirtView).click();
            cy.get(locators.addToCartTshirt).click();
            cy.get(locators.proceedToCheckoutButton).click()
        });
    }


    
} 
export default new articlesPage();
