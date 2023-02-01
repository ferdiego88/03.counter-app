
import { shallow }from 'Enzyme'
import CounterApp from '../../CounterApp';
describe('Pruebas en <CounterApp />',() => {

    let wrapper = shallow(<CounterApp />);;

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe de mostrar <CounterApp /> correctamente', () => { 

        expect(wrapper).toMatchSnapshot();
     })

     test('debe de mostrar el valor de 100', () => { 

        const number = 100;

        const wrapper = shallow(
            <CounterApp 
                value={number}
            />
        );
        
        const numeroEncontrado = Number(wrapper.find('h2').text());

        expect(numeroEncontrado).toBe(number);

      })

      test('debe de incrementar con el boton Sumar +1', () => { 

           wrapper.find('button').at(0).simulate('click');
        
           const counterText = wrapper.find('h2').text().trim();

           expect(counterText).toBe('11');
       })

       test('debe de decrementar con el boton Restar -1', () => {

            wrapper.find('button').at(2).simulate('click');
            
            const counterText = wrapper.find('h2').text().trim();
    
            expect(counterText).toBe('9');
        })
})