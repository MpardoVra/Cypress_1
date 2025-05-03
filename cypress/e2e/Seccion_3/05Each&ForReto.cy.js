
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

        for(let x=0; x<=3; x++){
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