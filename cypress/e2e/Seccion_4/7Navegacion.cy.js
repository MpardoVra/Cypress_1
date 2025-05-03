

/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Navegacion entre las paginas  ", () =>{

    it("Back, forwards ", () =>{

        cy.visit('https://demoqa.com/')
        cy.title().should('eq','DEMOQA')
        let tiempo=1500

        cy.xpath('//div[@class="category-cards"]//div[1]//div[1]//div[3]').should('be.visible').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click()

            cy.wait(tiempo)
            cy.go('back')
            cy.go('back')

            cy.wait(tiempo)
            cy.go('forward')
            cy.go('forward')

            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
              })

    })


    it.only("Reload ", () =>{

        cy.visit('https://demoqa.com/')
        cy.title().should('eq','DEMOQA')
        let tiempo=1500

        cy.xpath('//div[@class="category-cards"]//div[1]//div[1]//div[3]').should('be.visible').click()
        cy.wait(tiempo)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click()
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('Javieroto')
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type('javierotoelpro@gmail.com')
        cy.wait(tiempo)

        cy.reload()
        cy.wait(tiempo)

        cy.go('back')
           

            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
              })

    })
})

