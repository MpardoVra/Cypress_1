
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) 
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe("Campos de tipo Fecha ", () =>{

    it("Campo Fecha ", () =>{

        let tiempo=1000
        cy.visit('https://selenium.qabible.in/date-picker.php')
        cy.title('eq','Obsqura Testing')
        cy.wait(1500)

        cy.get('#single-input-field').should('be.visible').click()
        cy.wait(1500)
        cy.get('[data-date="1744675200000"]').click()

    })


    it("Campo Fecha 2 ", () =>{

        let tiempo=1000
        cy.visit('https://selenium.qabible.in/date-picker.php')
        cy.title('eq','Obsqura Testing')
        cy.wait(tiempo)

        cy.get('#single-input-field2').should('be.visible').click()
        cy.wait(tiempo)
        cy.get('.left').should('be.visible')
        cy.get('[data-title="r2c1"]').first().click({force:true})

        cy.get('.right').should('be.visible')
        cy.wait(tiempo)
        cy.get('[data-title="r0c5"]').first().click({force:true})

    })

})


