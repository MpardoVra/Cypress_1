
/// <reference types="Cypress" />
require('cypress-plugin-tab')
describe("Primer reto ", () =>{

    it("Todo el reto", () =>{

        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#searchBox').should('be.visible').type('Cierra')
        cy.wait(2000)
        cy.get('#searchBox').should('be.visible').clear()

        //AGREGANDO CAMPO
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.wait(1000)
        cy.get('#firstName').should('be.visible').type('Juan').tab().
        type('Perez').tab().
        type('juanperez@gmail.com').tab().
        type('35').tab().
        type('30000').tab().
        type('Sistemas')
        cy.get('#submit').should('be.visible').click()

        cy.get('#searchBox').should('be.visible').type('Juan')
        cy.wait(2000)
        cy.get('#searchBox').should('be.visible').clear()

        //editar un campo.
        cy.get('#edit-record-1').should('be.visible').click()
        cy.wait(2000)
        cy.get('#age').should('be.visible').clear().type('50')
        cy.wait(2000)
        cy.get('#salary').should('be.visible').clear().type('2225000')
        cy.wait(2000)
        cy.get('#submit').should('be.visible').click()

        cy.get('#delete-record-2').should('be.visible').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

    })
})

