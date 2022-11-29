import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe('debe retornar un heroe asincronico ', () => {
  test('should return a heroe  by id', (done) => {
    const id = 1
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

      done()
    })
  })
  test('should return an error if here does not exist', (done) => {
    const id = 1000
    getHeroeByIdAsync(id)
       .catch (error => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`) ;
          done();
        }); 
         
  })
})
