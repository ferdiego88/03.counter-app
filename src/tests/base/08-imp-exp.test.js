import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('debe de retornar un heroe', () => { 

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
     });

    test('debe de retornar undefined si Heroe no existe', () => { 

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
     });


     test('debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';

        const heroesbyOwner = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroesbyOwner).toEqual(heroeData);
     })

     test('debe de retonar un arreglo de Marvel de length 2', () => {

        const owner = 'Marvel';
        const heroesbyOwner = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroesbyOwner).toEqual(heroeData);
        expect(heroesbyOwner).toHaveLength(2);
     })

})