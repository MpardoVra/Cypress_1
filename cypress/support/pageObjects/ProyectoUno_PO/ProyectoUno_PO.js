
class ProyectoUno_Po{

    visitHome(){
        let tiempo=1000
    beforeEach(()=>{   
        cy.visit('https://selenium.qabible.in/form-submit.php'),
        cy.title().should('eq','Obsqura Testing')
        cy.wait(tiempo)
    })

   }

        SeccionUno(name,Last_name, Username,t){
            let tiempo=t
    cy.get('#validationCustom01').should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get('#validationCustom02').should('be.visible').type(Last_name)
    cy.wait(tiempo)
    cy.get('#validationCustomUsername').should('be.visible').type(Username)
    cy.wait(tiempo)

        }

        SeccionDos(city, state, zip,t){
            let tiempo=t
            cy.get('#validationCustom03').should('be.visible').type(city)
            cy.wait(tiempo)
            cy.get('#validationCustom04').should('be.visible').type(state)
            cy.wait(tiempo)
            cy.get('#validationCustom05').should('be.visible').type(zip)
            cy.wait(tiempo)
            cy.get('#invalidCheck').check().should('be.checked')
            cy.wait(tiempo)
            cy.get('.btn').should('be.visible').click({force: true})
            cy.wait(tiempo)
    

        }


}// final

export default ProyectoUno_Po;