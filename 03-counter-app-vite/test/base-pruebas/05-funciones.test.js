import { getUser } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('should return an object', () => {
        const name="luis"
        const testUser= {
            uid: 'ABC123',
            username: "luis"
        }

        const user= getUser(name);
        expect(testUser).toEqual(user)
        
        
    })
    
    
});
