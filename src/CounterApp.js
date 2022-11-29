import PropTypes from "prop-types";
import {useState} from 'react';

const CounterApp = ({value}) => {

    //handleAdd
    const [counter, setCounter ] = useState(0);



    const handleAdd = (e) => {
        setCounter(counter + 1);
    }

    return (
        <>
           <h1> CounterApp </h1>
           <h2> {counter} </h2>
           <button onClick={handleAdd}>Sumar +1</button>    
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp