import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-ar', () => {

    test('should return an string and a number', () => {
      
        const [letters, numbers] = retornaArreglo()
        console.log(letters,numbers) 

        expect(letters).toBe("ABC");
        expect(numbers).toBe(123);

        expect(typeof letters).toBe("string");
        expect(typeof numbers).toBe("number");
        
        
    })
    
    
});
