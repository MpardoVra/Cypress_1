/*
describe("Bucles For y Each ", () =>{

    it("For uno", () =>{

        for(let i=1; i<=100; i=i+10){
            cy.log('numero: ' +i)
        }
    })

    it.only("For Dos", () =>{

        for(let i=1; i<=10; i++){
            let t=5
            cy.log(t + ' x ' + i + '=' + t*i)
            
        }
    })

})
*/
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) 
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe("Campos de tipo Fecha ", () =>{

    it("Each Uno ", () =>{

        let tiempo=1000
        cy.visit('http://opencart.abstracta.us/')
        cy.title('eq','Your Store')
        cy.wait(tiempo)

// EL COMANDO EACH VIENE CON 3 OPCIONES AQUI ABAJO, CADA UNA SIRVE PARA BUSCAR CIERTOS PARAMETROS. 
        cy.get('.product-layout').each(($el,index,$list)=>{
            //cy.log(index)
            cy.log($el.text())
            //cy.log($list)
            let iphone=$el.text()
            if(iphone.includes('Apple Cinema 30')){
                cy.wrap($el).click()
// EL COMANDO WRAP AGARRA LOS ELEMENTOS QUE ESTAMOS RECORRIENDO CON LA FUNCION EACH Y BUSCA UNOS EN ESPECIAL.
            }

        })



    })

})