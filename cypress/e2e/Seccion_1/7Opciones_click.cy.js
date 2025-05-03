
/// <reference types="Cypress" />

describe("Opciones de click ", () =>{

    it("Click sencillo ", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
        cy.title().should('eq','OrangeHRM')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
   
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
        cy.wait(2000)
        cy.get('.oxd-button > .oxd-icon').should('be.visible').click()
        cy.wait(5000)

    })

})

// CLICK FORZADO. ////////////////////////////////////////////////////////////////////////////////////
// USAMOS {force: true} para los click que nos den problama por tener mas opciones o argumentos de entrada o salida. 

/// <reference types="Cypress" />

describe("Opciones de click ", () =>{

    it("Click Forzado ", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
        cy.title().should('eq','OrangeHRM')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
   
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
        cy.wait(2000)
        cy.get('.oxd-button > .oxd-icon').should('be.visible').click({force: true})
        cy.wait(5000)

    })

})

// CLICK POR COORDENADAS X-Y. ////////////////////////////////////////////////////////////////

// USAMOS ONLY PARA REPRODUCIR LA PRUEBA SOLO EN ESTE PEDAZO DE SCRIPT.

/// <reference types="Cypress" />
describe("Click por croodenadas (x-y) ", () =>{

    it.only("Click por croodenadas (x-y) ", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
        cy.title().should('eq','OrangeHRM')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        
        cy.get('.oxd-button').should('be.visible').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').click(50,5)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').click(10,15)

    })

})


