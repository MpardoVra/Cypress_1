
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Asserts Contain y HAVE ", () =>{

    it("Asserts usando CONTAIN.TEXT Y HAVE .TEXT ", () =>{

        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').type('Javier guapo Muñoz')
        cy.get('#userName').should('contain.value','guapo').then(()=>{
            cy.get('#userEmail').should('be.visible').type('javierito@gmail.com')
            cy.get('#submit').should('be.visible').click()
        })

// DE ESTA FORMA PODEMOS VALIDAR LOS VALORES Y EJECUCIONES.

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

    })

})