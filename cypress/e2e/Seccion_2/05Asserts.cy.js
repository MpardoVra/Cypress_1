
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Asserts Contains ", () =>{

    it("Asserts usando contains ", () =>{

        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq','My Shop')
        cy.wait(1000)

        cy.get('#block_top_menu').contains('Women').click()
// este CONTAINS debe salir... (ARRAY) desde un PADRE hasta llegar al HIJO.


    })

    it.only("Asserts usando .FIND .EQ ", () =>{

        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq','My Shop')
        cy.wait(1000)

        cy.get('.product-container').find('.product-image-container').eq(0).click({force: true}) 

        cy.get('#product_condition .editable').then((e)=>{
            cy.log(e.text())
            cy.wait(5000)
            //let estado=e.text()
            //cy,log(estado)
            //if(estado=='New product'){
            //    cy.log('El vestido es nuevo')
            //}

        })



})


})

