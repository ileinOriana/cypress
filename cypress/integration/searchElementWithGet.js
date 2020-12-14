describe('Formas de encontrar un elemento', function(){
    it('Buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola'); //Buscamos por clase y pusimos puntos(.) en los espacios
        cy.get('#search_query_top').type(' Como te va'); //Buscamos por ID
        cy.get('[name="search_query"]').type(' Me va bien'); //Buscamos por cualquier otra propiedad
        cy.get('[placeholder="Search"]').clear(); //Clear borra lo que esta en el elemento

    })


});