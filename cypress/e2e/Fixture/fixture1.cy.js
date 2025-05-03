
/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')


describe('Carga por Fixture', () =>{ 
/*
// PRIMER METODO USANDO globalThis o this.

    before(function(){
        cy.fixture('1Datos').then(function(data){
            //this.data=data
            globalThis.data=data
        })
    })
*/

// SEGUNDO METODO USANDO ALIAS (AS).

    before(function(){
        cy.fixture('1Datos').as('datos_json')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

    it('test Uno Cagrando desde Jason', () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('@datos_json').then((data)=>{

                cy.get('#userName').should('be.visible').type(data.nombre)
                cy.get('#userEmail').should('be.visible').type(data.email)
                cy.get('#currentAddress').should('be.visible').type(data.dir1)
                cy.get('#permanentAddress').should('be.visible').type(data.dir2)
                cy.get('#submit').should('be.visible').click({force: true})
    })

    })
});