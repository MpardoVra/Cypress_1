/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Asserts Contains ", () =>{

    it("Asserts usando then y creando variable LET ", () =>{

        cy.visit('http://opencart.abstracta.us/')
        cy.title().should('eq','Your Store')
        cy.wait(1000)

        cy.get('#content > .row > :nth-child(2)')

        cy.get(':nth-child(2) > .product-thumb > .caption > .price').then((p)=>{
            cy.log(p.text())
            let precio=p.text()
            cy.log(precio)
            precio=precio.slice(1,7)
            cy.log(precio)
            
        })
       
            cy.get('#content > div.row > div:nth-child(2) > div > div.button-group > button:nth-child(1)').should('be.visible').click()
            cy.wait(4000)
    })

})
// Validamos el precio y damos clic en añadir al carrito.
