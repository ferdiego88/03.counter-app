
import { shallow }from 'Enzyme'
import CounterApp from '../../CounterApp';
describe('Pruebas en <CounterApp />',() => {


    test('debe de mostrar <CounterApp /> correctamente', () => { 

        const number = 10;

        const wrapper = shallow(<CounterApp value={number} />);

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
        console.log(numeroEncontrado);

        expect(numeroEncontrado).toBe(number);

      })
})