
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Buscando elemento SRC ", () =>{
    it("Invoke SRC  ", () =>{

    cy.visit('https://selenium.qabible.in/bootstrap-modal.php')
    cy.title().should('eq','Obsqura Testing')
    cy.wait(1000)

        cy.xpath('//a[@href="index.php"]//img[@alt="logo"]').invoke('attr','src').should('include','logo')


    })


})
