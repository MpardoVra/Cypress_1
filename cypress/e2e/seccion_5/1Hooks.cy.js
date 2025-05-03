
/// <reference types="Cypress" />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ( 'cypress-xpath' ) 
require('cypress-plugin-tab')


describe("Hooks Ejemplos ", () =>{
    
let tiempo=1500 // SE PONE ARRIBA PARA QUE SEA UNA VARIABLE GLOBAL EN TODO ESTE CODIGO. 
// con el before, solo valida el titulo una vez.
// con beforeEach, valida la pagina 3 veces. 
// //Al estar la pagina defectuosa para hacer un before, lo dejo en beforeEach. 
    beforeEach(()=>{

        cy.visit('https://selenium.qabible.in/check-box-demo.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(tiempo)
       
    })

    it("Test Uno ", () =>{
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(tiempo)

    })
   
      
    it("Test Dos ", () =>{
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        cy.wait(tiempo)

    })

    it("Test Tres ", () =>{
        cy.get('#check-box-three').check()
        cy.wait(tiempo)

    })

})