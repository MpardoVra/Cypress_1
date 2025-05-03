import ProyectoUno_Po from '../../support/pageObjects/ProyectoUno_PO/ProyectoUno_PO'
/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ( 'cypress-xpath' ) ;
require('cypress-plugin-tab')


describe('Page object Models', () =>{ 

    const master=new ProyectoUno_Po()

    master.visitHome()

    
    it('test Seccion Uno', () =>{
            master.SeccionUno('Loreto','Rivera','Loretito@gmail.com',1000)
    })

    it('test Seccion Dos', () =>{
        master.SeccionDos('Almeria','Andalucia','07119',1000)
})
})

// podemos crear varias secciones y solo ejecutar parte del codigo usando la opcion .only en la seccion a analizar. 