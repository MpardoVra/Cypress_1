
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Ocultar y mostrar RETO ", () =>{
    it("Mostrando los campos de la tabla  ", () =>{

    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(1000)

        cy.get('[for="surname"]').invoke('hide')
        cy.get('#surname').invoke('hide')

        cy.get('#firstname').should('be.visible').type('Javierito').then(()=>{
            cy.wait(2000)
            cy.get('[for="surname"]').invoke('show','8s')
            cy.get('#surname').invoke('show','8s')
            cy.wait(2000)
            cy.get('#surname').type('Rios Nadal')

        })


    })

})