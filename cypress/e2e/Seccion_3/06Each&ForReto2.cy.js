
// EJEMPLO DE COMO DAR CLICK A TODA LA LISTA DE ELEMENTOS, DE VERSION MOBILE Y VERSION PC.

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
        cy.wait(1000)
        const datos=[];

// ESTA PAGINA NO TIENE ELEMENTOS MOBILE, PERO ASI SERIA LA SOLUCION.
// SI LO TUVIESE, TENDRIA 8 ELEMENTOS Y LOS DETECTARIA TODOS.

        cy.get('.product-thumb > .caption > h4 > a').each(($el,index,$list)=>{
            datos[index]=$el.text()
            //cy.log(datos.length)     // con esta funcion ya los podriamos detectar. seguido de THEN (entonces...) 

        }).then(()=>{
            for(let x=0; x<=datos.length; x++){
                //cy.get('.row .product-layout')
                cy.xpath('//*[@id="content"]/div[2]')
                cy.get('.product-thumb > .caption > h4 > a').eq(x).click({force:true})
                cy.wait(1000)
                cy.get('#input-quantity').should('be.visible').clear().type('4')
                cy.wait(1000)
                cy.get('#button-cart').should('be.visible').click({force:true})
                cy.wait(1000)
                cy.get('.breadcrumb > :nth-child(1) > a > .fa').should('be.visible').click({force:true})
               
            }
            
                cy.get('#cart-total').should('be.visible').click({force:true})
                cy.wait(1000)
        })

    })
})