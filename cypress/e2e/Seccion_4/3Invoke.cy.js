/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Mostrando los campos  ", () =>{
    it("Mostrando los campos de la tabla  ", () =>{

    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(1000)

    cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
    cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')
// HASTA AQUI VALIDAMOS EL TITULO DE LA PAGINA CON LA FUNCION INVOKE + .AS QUE PASARIA A SER COMO UNA VARIABLE. 
// AHORA VALIDAMOS EL CAMPO FIRST NAME 
        cy.get('[for="firstname"]').invoke('text').as('titleName')
        cy.wait(1000)
        cy.get('@titleName').should('contain','First name:').then(()=>{
            cy.get('#firstname').type('Margarita')
        })

    })

    it("INVOKE ESTILOS  ", () =>{

        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(1000)
// ESTO NOS SIRVE PARA QUE RESALTE EL TEXTO

        cy.get('[for="firstname"]').invoke('attr','style','color:Blue; font-size: 80px')

})

it.only("INVOKE OCULTAR Y MOSTRAR  ", () =>{

    cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(1000)

        cy.get('[for="firstname"]').invoke('hide')
        cy.get('#firstname').invoke('hide')

        cy.wait(1000)
        cy.get('[for="firstname"]').invoke('show','3s')
        cy.get('#firstname').invoke('show','3s')

})

})
