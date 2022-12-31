import PropTypes from "prop-types";
import {useState} from 'react';

const CounterApp = ({value = 10}) => {

    //handleAdd
    const [counter, setCounter ] = useState(value); //Retorna un arreglo



    const handleAdd = (e) => {
        // console.log(e);
        setCounter(counter + 1);
        // setCounter( (c) => c + 1 );
    }

    const handleSubstract = (e) => {
        setCounter(counter -1);
    }

    const handleReset = (e) => {
        setCounter(0);
    }


    return (
        <>
           <h1> CounterApp </h1>
           <h2> {counter} </h2>
           <button onClick={handleAdd}>Sumar +1</button>   
           <button onClick={handleReset}>Reset</button>   
           <button onClick={handleSubstract}>Restar -1</button>   
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp