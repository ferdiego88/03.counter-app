import { render,screen } from "@testing-library/react";
import PrimeraAPP from "../PrimerApp";
import { shallow }from 'Enzyme'

describe('Pruebas en <PrimeraApp />', () => {


    //PRUEBAS CON JEST

    // test('debe de mostrar el mensaje "Hola, soy Goku"', () => {

    //     const saludo = "Hola, soy Goku";

    //     render(<PrimeraAPP saludo= {saludo}/>);
    //     expect( screen.getByText(saludo)).toBeInTheDocument();
        
    // })

    //PRUEBA CON ENZYME

    test('debe de mostrar </PrimeraApp> correctamente', () => { 

        const saludo = 'Hola, soy Goku';

        const wrapper = shallow(<PrimeraAPP saludo={saludo} /> );

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el subtítulo enviado por props', () => { 

        
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';
       
        const wrapper = shallow(
        <PrimeraAPP 
            saludo={saludo} 
            subtitulo={subtitulo} 
        /> 
        );
        
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
     })
})