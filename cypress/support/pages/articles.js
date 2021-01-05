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

    addToWishList = (itemadedtoWishList) => {
        cy.fixture('articles.json').then((locators)=> {
            cy.get(locators.addToWishListButton).click(); 
            cy.get(locators.addedToWishListPopup); 
            cy.get(locators.closeAddedtoWishListPopup).click();
        });
    }

    clickMoreButton = (moreButton) => {
        cy.fixture('articles.json').then((locators)=> {
            cy.get(locators.moreButton).click();
        });
    }


    
} 
export default new articlesPage();
