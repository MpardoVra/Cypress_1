
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Selecciones ", () =>{

    it("Select de Uno en Uno", () =>{

        cy.visit('https://selenium.qabible.in/select-input.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        cy.get('#single-input-field').should('be.visible').select('Yellow').should('have.value','Yellow')
        cy.wait(4000)
        cy.get('#single-input-field').should('be.visible').select('Green').should('have.value','Green')


    })

    it.only("Select de AUTOCOMPLETADOS ", () =>{

        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.wait(1000)

        cy.get('#L2AGLb > .QS5gu').click()
        cy.wait(1500)
        cy.get('[name="q"]').should('be.visible').type('ferrari')//.type('{enter}')
        cy.get('.XDyW0e').click() // PARA PRESIONAR BOTON DE MICROFONO EN GOOGLE.

    })
})
