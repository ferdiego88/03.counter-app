import { render,screen } from "@testing-library/react";
import PrimeraAPP from "../PrimerApp";

describe('Pruebas en <PrimeraApp />', () => {

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {

        const saludo = "Hola, soy Goku";

        render(<PrimeraAPP saludo= {saludo}/>);
        expect( screen.getByText(saludo)).toBeInTheDocument();
        
    })
})