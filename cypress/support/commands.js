// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("texto_visible", (selector,texto,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto)
        cy.wait(tiempo)

})

Cypress.Commands.add("texto_visible_xpath", (selector,texto,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
        cy.wait(tiempo)

})

Cypress.Commands.add("click_get", (selector,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)

})

Cypress.Commands.add("click_force", (selector,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)

})

Cypress.Commands.add("click_force_xpath", (selector,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)

})

Cypress.Commands.add("Validar_Campo_xpath", (selector,men,nombre_campo,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').then((val)=>{
        let dato=val.text()
        let mensaje=men
        cy.log(dato)
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log('###############################')
            cy.log('El '+ nombre_campo +' no es valido')
            cy.log('###############################')
        }
    })
})

Cypress.Commands.add("Validar_Campo", (selector,men,nombre_campo,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').then((val)=>{
        let dato=val.text()
        let mensaje=men
        cy.log(dato)
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log('###############################')
            cy.log('El '+ nombre_campo +' no es valido')
            cy.log('###############################')
        }
    })
})

Cypress.Commands.add("Validar_Campo2", (selector,men,nombre_campo,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').should('contain',men).then((val)=>{
      
            cy.log('###############################')
            cy.log('El '+ nombre_campo +' no es valido')
            cy.log('###############################')
        
    })
})









// FUNCIONES POR CONJUNTO.

// CREANDO LA FUNCION TOOLSQA.

Cypress.Commands.add('bloque_ToolsQA', (name, email, dir1, dir2,t) => {
    let tiempo=t
    cy.get('#userName').should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(tiempo)
    cy.get('#submit').should('be.visible').click({force: true})
    cy.wait(tiempo)

 })

 Cypress.Commands.add('bloque_ToolsQA_Dos', (name, email, dir1, dir2,t) => {
    let tiempo=t

 cy.texto_visible('#userName',name,1000)
 cy.texto_visible('#userEmail',email,1000)
 cy.texto_visible_xpath('//textarea[@id="currentAddress"]',dir1,1000)
 cy.texto_visible_xpath('//textarea[@id="permanentAddress"]',dir2,1000)
 cy.click_force_xpath('//button[@id="submit"]',500)

})

// creando reto Formulario.

Cypress.Commands.add('Bloque_Formulario', (name,Last_name, Username, city, state, zip, t) => {
    let tiempo=t
    cy.get('#validationCustom01').should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get('#validationCustom02').should('be.visible').type(Last_name)
    cy.wait(tiempo)
    cy.get('#validationCustomUsername').should('be.visible').type(Username)
    cy.wait(tiempo)
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
})