/// <reference types="Cypress" />

describe("<tipos de selectores ", () =>{


    require('cypress-plugin-tab')
    
    it("Selectores por Atributos ", () =>{

        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        
/*
        cy.get('#userName').should('be.visible').type('Carlos')
        cy.get('#userEmail').should('be.visible').type('carloscharly@gmail.com')
*/   

       
        cy.get('[placeholder="Full Name"]').should('be.visible').type('Juan Perez Chavez')
// PARA USAR SELECTOR CON ATRIBUTOS SE USA [] Y DOBLE COMILLAS PARA EL OBJETO COMO EL EJEMPLO DE ARRIBA.


        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false

          })

    })

})

// TODOS LOS ID QUE VAN DENTRO DEL DOOM (INSPECCIONAR EN LA WEB) VAN PRECEDIDOS DE #
// ATRIBUTOS: POR EJEMPLO PLACEHOLDER FULL NAME.