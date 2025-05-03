
/// <reference types="Cypress" />


describe("Ejemplo de type pageUp, pageDown ", () =>{

    it("Type pageUp ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        
        cy.get("#userName").type('{pageup}')
        
        

    })


    it("Type pagedown ", () =>{
        cy.visit("https://demoqa.com/text-box")  /// NO ME FUNCIONA PAGEDOWN, NO PASA PRUEBA EN CYPRESS
        cy.title().should('eq','DEMOQA')

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)

    })


        // SI COPIAMOS Y PEGAMOS VARIAS VECES ESTE TROZO DE CODIGO SE VA A EJECUTAR UNO EN UNO.


it.only("Type pageUp ", () =>{               // CON LA FUNCION ONLY, AL PRINCIPIO DEL SCRIP, SERIAN SOLO LAS QUE SE VAN A EJECUTAR. 
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','DEMOQA')
    
    cy.get("#userName").type('{pageup}')



    })

})          //Cierre describe.