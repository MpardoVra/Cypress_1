
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Clase de Assert tipo have.class + then", () =>{

    it("Assert para medir lonjitud=lenght y validar el stilo=css", () =>{

        cy.visit('https://selenium.qabible.in/table-pagination.php')
        cy.title('Obsqura Testing')
        cy.wait(1000)

        cy.get('#dtBasicExample > tbody >tr').should('have.length',10).and('have.css','margin-top','0px') 
// CON ESTO PODEMOS VALIDAR EL LARGO DE UN OBJETO, NO DA LAS CASILLAS QUE NECESITAMOS SABER.
// CSS: es el cuadro que esta a la derecha de los elementos en inspeccionar. 
    })


it.only("Assert para buscar con valores o textos ", () =>{

    cy.visit('https://selenium.qabible.in/simple-form-demo.php')
    cy.title('Obsqura Testing')
    cy.wait(1000)

    cy.get('#single-input-field').should('be.visible').type('Demo del contenido')
    cy.contains('[type="button"]','Show Message').should('be.visible').click({force:true})
// este contains sirve para encontrar elementos que se van a repetir con el mismo nombre y los podemos especificar con su valor, su texto o algo. 
})

})