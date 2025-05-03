
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) 
import 'cypress-file-upload'
require('cypress-plugin-tab')

describe("Upload Imagenes  ", () =>{

    it("Cargando imagenes ", () =>{

        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title('DEMOQA')
        cy.wait(2000)

        const ruta='img1.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)


        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })

})

