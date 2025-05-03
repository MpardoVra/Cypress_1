
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Mostrando los campos  ", () =>{
    it("Mostrando los campos de la tabla  ", () =>{

    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(1000)

    cy.get('#firstname').should('be.visible').as('nom')
    cy.get('@nom').type('Margarita')

    cy.get('#surname').should('be.visible').as('ap')
    cy.get('@ap').type('Consalez Pardos')

    cy.get('#age').should('be.visible').as('edad')
    cy.get('@edad').type('40')

    cy.get('#country').should('be.visible').as('pais')
    cy.get('@pais').type('Chile')

    cy.get('#notes').should('be.visible').as('notas')
    cy.get('@notas').type('A tomar Margaritas con sal')

    cy.get('[type="submit"]').click()

    })

})