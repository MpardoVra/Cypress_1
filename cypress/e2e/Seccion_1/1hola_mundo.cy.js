
describe("Bienvenidos al curso de cypress seccion 1", () =>{

    it("Mi primer test -> Hola mundo", () =>{
        cy.log("Hola Mundo")
        cy.wait(4000)
    })

    it("segundo test -> campo name", () =>{
        cy.visit("https://demoqa.com/text-box");
        
        cy.get("#userName").type("Mauri");
        cy.wait(5000)
    })

})
