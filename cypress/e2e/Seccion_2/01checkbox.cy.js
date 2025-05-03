

/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Nueva seccion CheckBox ", () =>{

    it("Check Uno ", () =>{

        cy.visit('https://selenium.qabible.in/check-box-demo.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        cy.get('[type="checkbox"]').check().should('be.checked')
        // HASTA AQUI HACEMOS CHECK EN TODAS LAS CASILLAS.
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        // aqui las desmarcamos.

    })

    it("Check por seleccion ", () =>{

        cy.visit('https://selenium.qabible.in/check-box-demo.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        //cy.get('#gridCheck').check().should('be.checked')
        //cy.xpath('//input[@id="check-box-four"]').check()

        // TAMBIEN TENEMOS LA OPCION DE HACER CLIC.#########################################

        cy.get('#gridCheck').click()
        cy.xpath('//input[@id="check-box-four"]').click()

    })

    it.only("Radio Buttom ", () =>{

        cy.visit('https://selenium.qabible.in/radio-button-demo.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        cy.get('#inlineRadio2').click()

        

    })
})
