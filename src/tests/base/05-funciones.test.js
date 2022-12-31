import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        
        //toEqual compara los objetos en profundidad
        expect(user).toEqual(userTest);
    })



    test('getUser debe de retornar un objeto que recibe un parametro', () => {

        const nombre = 'Gianluca Sebastian';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        console.log(user);

        expect(user).toEqual(userTest);

    })

})