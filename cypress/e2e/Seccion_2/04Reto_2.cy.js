
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Reto N2 ", () =>{

    it("Opcion Multi-Select = Reto solo ", () =>{

        cy.visit('https://selenium.qabible.in/bootstrap-dual-list.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        
        cy.get('.bootstrap-duallistbox-container row moveonselect moveondoubleclick')
        
            


    })
})
// ME QUEDE PEGADO SIN RESOLVER. HACER LUEGO.