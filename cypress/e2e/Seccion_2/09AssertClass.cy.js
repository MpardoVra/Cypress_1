

/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Clase de Assert tipo have.class + then", () =>{

    it("Assert de tipo Class", () =>{

        cy.visit('https://demoqa.com/text-box')
        cy.title('DEMOQA')
        cy.wait(1000)

        //cy.get('#userName').should('be.visible').should('not.have.class','mr-sm-2222') // NOT HAVE CLASS: como la clase 2222 no existe, si va a pasar
        //cy.get('#userName').should('be.visible').and('have.class','mr-sm-2')  // TAMBIEN SE PUEDE USAR EL METODO AND, COMO EN ESTE EJEMPLO.
        cy.get('#userName').should('be.visible').should('have.class','mr-sm-2').then(()=>{
            cy.get('#userName').type('Javierito')
        })



        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

    })

})

