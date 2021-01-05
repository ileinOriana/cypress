class myAccountPage{

    clickMyWishList = (item) => {
        cy.fixture('myAccount.json').then((locators) => {
            cy.get(locators.myWishListLink).click()
        });
    }

    clickMyProfileButton = (profile) => {
        cy.fixture('myAccount.json').then((locators) => {
            cy.get(locators.myprofileButton).click()
        });
    }
}

export default new myAccountPage();