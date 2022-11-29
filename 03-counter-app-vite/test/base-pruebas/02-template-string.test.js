import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe("pruebas en template-strings", ()=>{
    
    test('getSaludo debe retornar hola Luis', () => {

    const name = "Luis";
    const message = getSaludo(name);  
    
    expect(message).toBe(`hola ${name}`)
    }) 
})