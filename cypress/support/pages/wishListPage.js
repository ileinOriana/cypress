const locators = require('../../fixtures/myWishListBox.json')

class WishListPage{
   getQuantity = () => {
        return cy.get(locators.quantityWhished);
    };

    getCreationWish = () => {
        return cy.get(locators.createdWished);
    };
}



module.exports = {
    WishListPage
}