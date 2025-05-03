
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Validacion de UTF escritura y url  ", () =>{

    it("Validar escrituras UTF y URL ", () =>{

        cy.visit('https://testsheepnz.github.io/index.html#the-number-game')
        cy.title('TestSheepNZ Resource Page')
        cy.wait(1000)

        cy.document().should('have.property', 'charset').and('eq','UTF-8')

        cy.url().should('include','number-game')
        cy.url().should('eq','https://testsheepnz.github.io/index.html#the-number-game')

    })

})