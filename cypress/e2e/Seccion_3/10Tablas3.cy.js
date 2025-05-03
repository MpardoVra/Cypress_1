
/// <reference types="Cypress" />

require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')

describe("Mostrando los campos  ", () =>{
    it("Mostrando los campos de la tabla  ", () =>{

    cy.visit('https://selenium.qabible.in/table-pagination.php')
    cy.title().should('eq','Obsqura Testing')
    cy.wait(1000)

    // utilizamos una constante, un arreglo de datos. aqui estamos esperando estos datos y los almacenamos. 
    const datos=[]
    // aqui abajo buscamos por su clase y continuamente atacamos por el td. 
    cy.get('.odd td').each(($el,index,$list)=>{
        datos[index]=$el.text()
    }).then(()=>{
        for(let i=0; i<=datos.length; i++){
            cy.log(datos[i])
        }
    })

    })


    it("Sumando los valores de los campos con la clase .odd  ", () =>{

        cy.visit('https://selenium.qabible.in/table-pagination.php')
        cy.title().should('eq','Obsqura Testing')
        cy.wait(1000)
    
        const datos=[]
        let cantidadOdd=0

        // AQUI EL CAMBIO ES QUE AGARRAMOS EL OBJETO tbody QUE NOS DEVUELVE TODOS LOS DATOS DE LA TABLA 
        // YA QUE ES UN OBJETO EN COMUN PARA TODA LA LISTA DE LA TABLA. 

        cy.get('tbody td').each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                        cantidadOdd+=Number(datos[i])
                }
            }
            cy.log('la cantidad total es: ' + cantidadOdd)
            expect(cantidadOdd).to.eq(482)
        })
    
        })

        it.only("Valor de un campo en especifico ", () =>{

            cy.visit('https://selenium.qabible.in/table-pagination.php')
            cy.title().should('eq','Obsqura Testing')
            cy.wait(1000)

            const campo=cy.get(':nth-child(10) > :nth-child(1)')
            //cy.log(campo)
            campo.each(($el,index,$list)=>{
                const dato=$el.text()
                cy.log(dato)

                    if(dato.includes('Sonya Frost')){
                        campo.eq(index).next().next().next().then((age)=>{
                            const edad=age.text()
                            cy.log(edad)
                            cy.log('La edad de Sonya Frost es: ' + edad)
                            expect(edad).to.equal('23')
                        })
                    }
            })

    })

})