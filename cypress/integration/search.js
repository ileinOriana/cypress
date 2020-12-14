import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';
import controllerOrderPage from '../support/pages/controllerOrder';

describe('Search tests cases', function(){
    before(function(){
        cy.log("Before executing all the suite test");
    }); 

    after(function(){
        cy.log("After executing all the suite test");
        
    });

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');

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
        
        
        //cy.intercept({method: 'POST', url: '/index.php?rand=1607907898262'}).as('compra');
        //cy.wait('@compra').then(xhr => {
            //expect(xhr.Status).eql(200);
            //cy.get(':nth-child(2) > .product-container > .right-block > .content_price > .price').should('contain', xhr.response.producTotal);

        })

    });
/*
    it('Search hats', function(){
        indexPage.search('hat');
        articlesPage.verifyArticle('"hat"');
    });
*/
 

