
/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')


describe('Reto cypress por medio de comandos personalizados ', () =>{ 
    let tiempo=1000
    before(()=>{   
        cy.visit('https://selenium.qabible.in/form-submit.php'),
        cy.title().should('eq','Obsqura Testing')
        cy.wait(tiempo)
/*
// con una pagina valida intentar validar esta linea cambiando a beforeEach.
// si resulta, es mi idea de comprobar y lanzar ambas validaciones.
        after(()=>{
            cy.log('Log de todas las pruebas')
            cy.Validar_Campo('#validationCustomUsername','Plase supply a valid email address','email')
            cy.Validar_Campo2('#validationCustom03','Plase supply a valid email address','City')

        })
*/

    })
    it('test', () =>{
       cy.Bloque_Formulario('Andrea','Muñoz','r$%67**','san jose','Almeria','08118',600)
       cy.Validar_Campo('#validationCustomUsername','Plase supply a valid email address','email')
// en este ejercicio, deberia tener la pagina web una condicion en el email que solo se pueda meter una direccion valida.
// como no tiene la condicion, la prueba pasa. pero no deberia pasar. 

    })

    it('test', () =>{
        cy.Bloque_Formulario('Andrea','Muñoz','r$%67**','san jose','Almeria','08118',600)
        cy.Validar_Campo2('#validationCustom03','Plase supply a valid email address','City')
// ESTA OPCION ES LA MISMA PERO CON EL CODIGO MAS CORTO. CLASE: 176, 177, 178.
 // en este ejercicio, deberia tener la pagina web una condicion en el email que solo se pueda meter una direccion valida.
 // como no tiene la condicion, la prueba pasa. pero no deberia pasar. 

        
})


})
