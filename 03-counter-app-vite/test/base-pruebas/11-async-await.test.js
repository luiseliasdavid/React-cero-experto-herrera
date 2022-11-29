import {getImagen} from '../../src/base-pruebas/11-async-await'

describe('pruebas en 11-async-await', () => {
    test('should an url of the imagen', async() => {
      
        const url= await getImagen()
        expect(typeof url).toBe('string')
    })
    
});
