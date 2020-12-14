describe('Pruebas en la vista Women', function(){
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })

    it('Large Tops Search', function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        /*Ahora tambien puedo hacer uncheck de esa lista */ 
        cy.get('#layered_category_4').uncheck();
    });

    it('Sort by: In stock', function(){
        cy.get('#selectProductSort').select('In stock');
    })

})