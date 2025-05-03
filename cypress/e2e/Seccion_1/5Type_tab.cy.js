

/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Ejemplo funcion tab ", () =>{

    it("Type con tab ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        

        cy.get('#firstName').type("Mauricio").tab().
        type("Pardo").tab().
        type("mauricio@gmail.com")

    })

})
// el ejercicio esta bien hecho, el body tambien, se queda pegado en mail. da error. 
// funcion TAB    .tab().   NO OLVIDAR EL PUNTO FINAL CUANDO SON VARIOS, PARA CONCATENAR CON EL PROXIMO TAB.
// usar funcion uncaught.exception error. 
