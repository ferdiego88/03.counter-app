describe('Pruebas en el archivo demo.test.js',() => {

    test('deben de ser iguales los string', () => { 

        //1. Inicializacion
        const mensaje = 'Hola mundo';
    
        // 2. estimulo
        const mensaje2 = `Hola mundo`;
    
        //3. Observar el comporatamiento
        expect(mensaje).toBe(mensaje2);
     })
})


