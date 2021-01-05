import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';
import controllerOrderPage from '../support/pages/controllerOrder';
import loginPage from '../support/pages/loginPage';
import myAccountPage from '../support/pages/myAccountPage';
const { WishListPage } = require('../support/pages/wishListPage');
const wishListPage = new WishListPage();
 

describe('Search tests cases', function(){
    before(function(){
        cy.log("Before executing all the suite test for Login cases");
        cy.visit('/')

    }); 

    after(function(){
        cy.log("After executing all the suite test for Login cases");
        
    });

    beforeEach(() => {
        cy.visit(`${Cypress.env("loginUrl")}`); 
        loginPage.insertCredentials('ileinoriana@gmail.com', '123456'); 
        loginPage.verifySignIn('Welcome to your account. Here you can manage all of your personal information and orders.');
        cy.intercept('POST', '**/index.php?rand=**').as("Purchase")
    });

    afterEach(function(){
        cy.log('Every postcondition test')
    })
    
    it('Log in Success and then select a tshirt', () => {
        articlesPage.selectTshirt();
        cy.wait("@Purchase").then(xhr => {
            expect(xhr.response.statusCode).eql(200);
            let jsonBody = JSON.parse(xhr.response.body) //El body venia como string, por ende habia que convertirlo a Objeto para acceder a sus propiedades
            controllerOrderPage.summaryTab().getTotalAmount().should('contain.text', jsonBody.total)        
        })
    });

    it.only('Add an item to the Wish List', ()=> {
        indexPage.clickHome();
        articlesPage.clickMoreButton();
        articlesPage.addToWishList(); 
        myAccountPage.clickMyProfileButton(); 
        myAccountPage.clickMyWishList();
        //cy.get(".bold").contains(1)
        wishListPage.getQuantity().contains(1)
    })
});