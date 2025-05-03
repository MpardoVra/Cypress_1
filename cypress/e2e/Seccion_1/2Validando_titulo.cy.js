
/// <reference types="Cypress" />
//para que funcionen los comandos.

describe("Seccion 1 validando el titulo ", () =>{

    it("Test validar el titulo ", () =>{

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
// En linea arriba lanzamos un ASSERT que se llama SHOULD que es una funcion para validar.
// La funcion should nos dice 'eq' que va a validar el texto.
        cy.log("La funcion Title es OK")

    })
})//Cierre describe.

