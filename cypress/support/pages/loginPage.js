class loginPage{
    insertCredentials = (email, password) => {
        cy.fixture('login.json').then((locators)=> {
            cy.get(locators.email).type(email);
            cy.get(locators.password).type(password);
            cy.get(locators.submitLogin).click();
        });
    }

    verifySignIn = (text) => {
        cy.fixture('login.json').then((locators)=> {
            cy.get(locators.textLoginSuccess).contains(text)
        })
    };

}

export default new loginPage(); 