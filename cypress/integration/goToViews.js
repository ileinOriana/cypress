describe('Go to different views', function(){
    beforeEach('First go to the Home page', function(){
        cy.visit('http://automationpractice.com/index.php');

    })

    it('Go to the Women page', function(){
        cy.get('[class=sf-with-ul]').first().click(); //Con esto selecciono lo primero que esta en la clase con multiples elementos
    })

    it('Go to the Dresses page', function(){
        cy.get('[class=sf-with-ul]').eq(3).click(); //eq sirve para indicar el indice del elemento
    })

}); 