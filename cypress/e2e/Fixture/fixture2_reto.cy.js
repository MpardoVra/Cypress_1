/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')


describe('Carga por Fixture', () =>{ 

    it('test Uno Cagrando desde Jason', () =>{
        

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

        cy.fixture('MOCK_DATA').then( testdata =>{
            testdata.forEach(data => {

            const d_nombre=data.nombre
            const d_email=data.email
            const d_dir1=data.dir1
            const d_dir2=data.dir2

            cy.visit('https://demoqa.com/text-box')
            cy.title().should('eq','DEMOQA')
            cy.wait(2000)

                        cy.get('#userName').should('be.visible').type(d_nombre)
                        cy.wait(2000)
                        cy.get('#userEmail').should('be.visible').type(d_email)
                        cy.wait(2000)
                        cy.get('#currentAddress').should('be.visible').type(d_dir1)
                        cy.wait(2000)
                        cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                        cy.wait(2000)
                        cy.get('#submit').should('be.visible').click({force: true})
                        
                })
        })
    })

})