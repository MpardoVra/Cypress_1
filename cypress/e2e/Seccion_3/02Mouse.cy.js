
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) 
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe("Cypress eventos mouse ", () =>{

    it("Drag And Drop ", () =>{

        let tiempo=1000
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title('eq','The Internet')
        cy.wait(1500)

        cy.get('#column-a').drag('#column-b',{force:true})


        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

    })


    it.only("Drag And Drop Opcion 2", () =>{

        let tiempo=1000
        cy.visit('https://selenium.qabible.in/drag-drop.php')
        cy.title('eq','Obsqura Testing')
        cy.wait(1500)

        cy.get('#todrag > :nth-child(2)').drag('#mydropzone', {force:true})
        cy.wait(1500)
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone', {force:true})
        cy.wait(1500)
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone', {force:true})
        cy.wait(1500)
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone', {force:true})


    })

        
})

/*
// EJEMPLO DE COMO QUITAR EL ATRIBUTO TARGET QUE ES... QUE NOS SACA DE LA WEB A OTRO ENLACE.
// TRIGGER ES UN DISPARADOR + MOUSEOVER PARA DESPLEGAR LAS OPCIONES DE LA CASILLA.

cy.contains('selenium').trigger('mouseover') // BUSCAMOS UN ELEMENTO QUE CONTENGA LA PALABRA CONTAINS. 
cy.wait(tiempo)

// INSPECCIONAMOS EL ELEMENTO QUE QUEREMOS PINCHAR. LO BUSCAMOS POR NOMBRE YA QUE NO TIENE ATRIBUTOS O ID, ETC. 
        cy.contains('selenium python video tutorials').invoke('removeAttr','target').click()

// CON ESTAS LINEAS DE CODIGO ELIMINAMOS EL ATRIBUTO TARGET.

*/