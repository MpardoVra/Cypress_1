

/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Mostrando los campos  ", () =>{
    it("Mostrando los campos de la tabla  ", () =>{

    cy.visit('https://selenium.qabible.in/bootstrap-modal.php')
    cy.title().should('eq','Obsqura Testing')
    cy.wait(1000)


        cy.get(':nth-child(1) > .card > .card-body > [data-toggle="modal"]').click()
        cy.wait(1000)
        cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})

        cy.get(':nth-child(1) > .card > .card-body > [data-toggle="modal"]').click({force:true})
        cy.wait(1000)
        cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click({force:true})

    })

})

