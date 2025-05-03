
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Tablas desde children. ", () =>{

    it("CHILDREN ", () =>{

        cy.visit('https://selenium.qabible.in/bootstrap-alert.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        cy.get('.col-md-6').children('#autoclosable-btn-success')
        cy.wait(1000)

        cy.get('.col-md-6').children('#autoclosable-btn-success').should('contain','Autoclosable success').click()
        cy.wait(1000)

        cy.get('.col-md-6').children('#normal-btn-danger').should('contain','Normal danger').click()
        cy.wait(1000)

    })


    it("Seleccionar por los elementos EQ ", () =>{

        cy.visit('https://selenium.qabible.in/bootstrap-alert.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)

        cy.get('#autoclosable-btn-success').eq(0).should('contain','Autoclosable success').click()
        cy.wait(1000)

        cy.get('#normal-btn-success').eq(0).should('contain','Normal success').click()
        cy.wait(1000)
// GENERALMENTE LOS INDICES EN UNA LISTA EMPIEZAN DESDE 0,1,2,3...
// EN ESTE CASO EL INDICE ES CERO PARA TODOS LOS EQ. 

        cy.get('#autoclosable-btn-success').filter('.btn-success').should('contain','Autoclosable success').click()
// TAMBIEN PODEMOS USAR FILTER, PARA FILTRAR POR ALGUNA PALABRA ESPECIFICA ACOMPAÑADA DE SHOULD + CONTAIN.
    })
})

// TAMBIEN PODEMOS BUSCAR A TRAVES DE LA FUNCION .FIND, LA CUAL SE PARECE MUCHO A .CONTAINS

it.only("Seleccionar por los elementos FIND, LAST Y FIRST ", () =>{

    cy.visit('https://selenium.qabible.in/bootstrap-alert.php')
    cy.title().should('eq','Obsqura Testing')
    cy.wait(1000)

    cy.get('.col-md-6').find('button').first().click()
    cy.wait(1000)
    //FUNCION LAST PARA EL ULTIMO.
    cy.get('.col-md-6').find('button').last().click({force:true})



})
