
/// <reference types="Cypress" />

describe("Funciones para Type ", () =>{

    it("Type Enter--> ", () =>{

        cy.visit("https://www.google.com/")
        cy.title().should('eq',"Google")
        cy.wait(1500)


        cy.get("[name='q']").type("cypress io {enter}")// AQUI FALTA SABER CUAL ES EL ID DE LA BARRA DE BUSQUEDA DE GOOGLE 

        
        cy.get(".LC20lb").click ()   /// ESTA SERIA LA FUNCION CLICK.
        /// SI ES UN ID SE REFERENCIA CON UN #
        /// SI ES UNA FUNCION LE DAMOS . punto

    })

})//Cierre describe.


