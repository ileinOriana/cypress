import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';
import controllerOrderPage from '../support/pages/controllerOrder';

describe('Search tests', function(){
    before(function(){
        cy.log("Before executing all the suite test without Login");
    }); 

    after(function(){
        cy.log("After executing all the suite test without Login");
    });

    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(function(){
        cy.log('Every postcondition test')
    });

    it('Search and add an article to the cart without Login', () => {
        indexPage.search('dress');
        cy.logSpecialFormat('Custom Command: Searching for dresses');
        articlesPage.verifyArticle('"dress"');
        articlesPage.selectDress("Product successfully added to your shopping cart");
        controllerOrderPage.summary('$30.98'); 
        controllerOrderPage.signIn('Please enter your email address to create an account.')
    })
}); 