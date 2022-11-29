import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";



describe('Pruebas en 08-imp-exp ', () => {
  test(' getHeroesById debe de retornar un heroe', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect (heroe).toEqual({id: 1, name:"Batman", owner:"DC"})

  })
  test('getHeroesById debe de retornar undefines si no existe ', () => {
      const id = 100;
      const heroe = getHeroeById(id);
      
      expect (heroe).toBeFalsy()
      
      
    })
    test(' must return all objects of the same owner', () => {
      const owner= "DC"
      const heroe = getHeroesByOwner(owner);
      
      expect (heroe).toEqual( heroes.filter(hero => hero.owner=== owner) )
    })
    test('must return all objects of same owner ', () => {
        const owner= "Marvel"
      const heroe = getHeroesByOwner(owner);
      
      expect (heroe).toEqual( heroes.filter(hero => hero.owner=== owner) )
    })

})
