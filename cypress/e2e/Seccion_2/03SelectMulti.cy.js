
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Selecciones Multiples ", () =>{

    it("Opcion Multi-Select ", () =>{

        cy.visit('https://selenium.qabible.in/select-input.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        cy.get('#multi-select-field').should('be.visible').select(['Red','Green']).then(()=>{
            cy.get('#button-first').should('be.visible').click()
        })


    })
})

// PARA QUE SE CUMPLAN LOS SELECT HAY QUE ENCERRAR EN []
//ejemplo de la fila 15 - funcion THEN, es cuando le decimos al sistema, has esto y LUEGO HAS ESTO OTRO. o entonces has esto. 

// FORMULA THEN: .then(()=>{

// })
