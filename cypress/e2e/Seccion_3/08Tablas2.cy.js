
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Seleccionar los elementos siguientes NextAll. ", () =>{
    it("Seleccionar por elemento NEXTALL ", () =>{

    cy.visit('https://selenium.qabible.in/bootstrap-alert.php')
    cy.title().should('eq','Obsqura Testing')
    cy.wait(1000)

    cy.get('#autoclosable-btn-success').should('contain','Autoclosable success')
    cy.wait(1000)
    cy.get('#autoclosable-btn-success').should('contain','Autoclosable success').nextAll().should('have.length', 7)
        cy.wait(1000)

// SELECCIONAMOS EL ELEMENTO PADRE.

        cy.get('#autoclosable-btn-danger').parent('.col-md-6').should('have.class', 'col-md-6')

// SIGUIENTE RETO ES MARCAR TODAS LAS OPCIONES DE LA PAGINA. 

    })
         it("EJERCICIO DE SELECCIONAR TODAS LAS OPCIONES  ", () =>{

            cy.visit('https://selenium.qabible.in/bootstrap-alert.php')
            cy.title().should('eq','Obsqura Testing')
            cy.wait(1000)

            cy.get('.card-body > .row > :nth-child(1)').should('have.length', 1)
            cy.get('.col-md-6').contains('autoclosable')
            cy.wait(1000)
            
            cy.get('.col-md-6').should('contain','normal')
            cy.get('[style="display: none;"]').first().last().click({force:true})
            cy.get('.card-body > .row > :nth-child(2)').should('be.visible')

        })


        it("EJERCICIO DE SELECCIONAR TODAS LAS OPCIONES USANDO FUNCION FOR  ", () =>{

            cy.visit('https://selenium.qabible.in/bootstrap-alert.php')
            cy.title().should('eq','Obsqura Testing')
            cy.wait(1000)

            for(let x=0; x<=3; x++){
                cy.get('.col-md-6').eq(x).click({force:true})
                cy.wait(1000)
                cy.get('.card-body > .row > :nth-child(1)').click()
                cy.wait(1000)
            }
    })

        
})
