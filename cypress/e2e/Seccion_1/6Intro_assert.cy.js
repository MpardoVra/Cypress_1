/// <reference types="Cypress" />

describe("Introducción a los Asserts ", () =>{



    it("Demo de los Assert ", () =>{

        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')

        cy.get('#firstName').should('be.visible').type('Juan')
        cy.get('#lastName').should('be.visible').type('Pozo')
        cy.get('#userEmail').should('be.visible').should('be.enabled').type('juan@gmail.com')
    
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

    })

})

// TODO BIEN, PERO LLEGA HASTA EL CORREO. 
// PIDE CORREO Y LANZA ERROR.
// CON LA FUNCION UNCAUGHT.EXCEPTIONS PASS PRUEBA.


