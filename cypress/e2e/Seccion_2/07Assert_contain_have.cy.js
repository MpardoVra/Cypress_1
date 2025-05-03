
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Asserts Contain y HAVE ", () =>{

    it("Asserts usando CONTAIN.TEXT Y HAVE .TEXT ", () =>{

        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').type('Javier guapo Muñoz')
        cy.get('#userEmail').should('be.visible').type('javierito@gmail.com')
        cy.get('#submit').should('be.visible').click()

        cy.get('#name').should('have.text','Name:Javier guapo Muñoz')
        cy.get('#name').should('contain.text','guapo')




        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

    })

})

// ESTAS OPCIONES SE USAN PARA VALIDAR EL TEXTO Y OBTENER ASSERT
//HAVE TEXT: tiene que tener la palabra o texto exacto.
//CONTAIN TEXT: puede contener una palabra del texto.





   
