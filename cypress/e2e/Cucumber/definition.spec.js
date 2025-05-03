Given('Abrir el navegador principal',()=>{
    cy.visit('https://demoqa.com/text-box')
  
}) 

When('Cargando el nombre',()=>{
    cy.get('#userName').should('be.visible').type('')
    cy.wait(1000)

}) 

When('Cargando el email',()=>{
    cy.get('#userEmail').should('be.visible').type('')
    cy.wait(1000)

}) 

And('Cargando la direccion',()=>{
    cy.get('#currentAddress').should('be.visible').type('')
    cy.wait(1000)

}) 

Then('Validar el nombre de la pagina',()=>{
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)

}) 

