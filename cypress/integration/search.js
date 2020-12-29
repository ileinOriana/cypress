import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';
import controllerOrderPage from '../support/pages/controllerOrder';
import loginPage from '../support/pages/loginPage';

describe('Search tests cases', function(){
    before(function(){
        cy.log("Before executing all the suite test");
    }); 

    after(function(){
        cy.log("After executing all the suite test");
        
    });

    beforeEach(() => {
        cy.visit('/');
        cy.intercept('POST', '**/index.php?rand=**').as("Purchase")
    });

    afterEach(function(){
        cy.log('Every postcondition test')
    })

    it('Search and add an article to the cart without Login', () => {
        indexPage.search('dress');
        cy.logSpecialFormat('Custom Command: Searching for dresses');
        articlesPage.verifyArticle('"dress"');
        articlesPage.selectDress("Product successfully added to your shopping cart");
        controllerOrderPage.summary('$30.98'); 
        controllerOrderPage.signIn('Please enter your email address to create an account.')
        })
    
    it.only('Log in Success and then select a tshirt', () => {
        cy.visit(`${Cypress.env("loginUrl")}`); 
        loginPage.credentials('ileinoriana@gmail.com', '123456'); 
        loginPage.verifySignIn('Welcome to your account. Here you can manage all of your personal information and orders.'); 
        articlesPage.selectTshirt();
        cy.wait("@Purchase").then(xhr => {
            expect(xhr.response.statusCode).eql(200);
            let jsonBody = JSON.parse(xhr.response.body) //El body venia como string, por ende habia que convertirlo a Objeto para acceder a sus propiedades
            controllerOrderPage.summaryTab().getTotalAmount().should('contain.text', jsonBody.total)        
        })
    });
});