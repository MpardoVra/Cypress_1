
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Reto de las tablas con funcion FOR con Assert ", () =>{
    it("Tablas con FOR ", () =>{

    cy.visit('https://selenium.qabible.in/jquery-dual-list.php')
    cy.title().should('eq','Obsqura Testing')
    cy.wait(1000)

    for(let x=1;x<=4;x++){
        let nombreBoton=''

        if(x==1){
            nombreBoton='Add'
        }
        if(x==2){
            nombreBoton='Add All'
        }
        if(x==3){
            nombreBoton='Remove'
        }
        if(x==4){
            nombreBoton='Remove All'
        }

        cy.get('[type="button"]').eq(x).should('contain',nombreBoton).click()
        cy.wait(1000)

    }

    })

})