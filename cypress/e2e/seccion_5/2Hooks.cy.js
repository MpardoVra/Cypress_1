
/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')


describe('Reto de la funcion Hooks', () =>{ 

    let tiempo=3000
    beforeEach(()=>{
        
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.title().should('eq','OrangeHRM')
            cy.wait(tiempo)

            cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('admin')
            cy.wait(tiempo)
            cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('admin123')
            cy.wait(tiempo)
            cy.xpath('//button[@type="submit"]').should('be.visible').click({force: true})
            cy.wait(tiempo)
            
        })
    after(()=>{
            cy.log('#################----ultimo ciclo----#####################')
            cy.wait(tiempo)
            cy.xpath('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath('//a[normalize-space()="Logout"]').should('be.visible').click({force: true})
            cy.wait(tiempo)

    })
        it('test uno', () =>{
            cy.xpath('//li[1]//a[1]//span[1]').should('be.visible').click({force: true})
            cy.wait(tiempo)

    })
        it('test dos', () =>{
        cy.xpath('//span[normalize-space()="My Info"]').should('be.visible').click({force: true})
        cy.wait(tiempo)
        
    })
        it('test tres', () =>{
        cy.xpath('//span[normalize-space()="Performance"]').should('be.visible').click({force: true})
        cy.wait(tiempo)
    
    })

})
