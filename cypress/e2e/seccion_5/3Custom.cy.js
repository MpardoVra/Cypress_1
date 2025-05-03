

/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')


describe('Comandos personalizados', () =>{ 
    let tiempo=1000
    before(()=>{   
        cy.visit('https://demoqa.com/text-box'),
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })

    it('demo uno', () =>{

        cy.texto_visible('#userName','Javi',1000)
        cy.texto_visible('#userEmail','javi@hotmail.com',1000)
        cy.texto_visible_xpath('//textarea[@id="currentAddress"]','direccion uno',1000)
        cy.texto_visible_xpath('//textarea[@id="permanentAddress"]','direccion dos',1000)
        cy.click_force_xpath('//button[@id="submit"]',500)

    })

    it('demo uno', () =>{

       cy.bloque_ToolsQA('Javier','javito@hotmail.com','calle nueva 16','calle del agua 69',600)

    })

    it.only('demo dos por bloque', () =>{

        cy.bloque_ToolsQA_Dos('Javier','javito@hotmail.com','calle nueva 16','calle del agua 69',600)
 
     })

})
