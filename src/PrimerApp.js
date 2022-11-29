//FC
import PropTypes from "prop-types";

const PrimeraAPP = ({saludo}) => {
   

    return (
        <>
            <h1>{saludo}  </h1>
            {/* <pre> { JSON.stringify(saludo,null,3) } </pre> */}
            <p>Mi Primera aplicación</p>
        </>
    );
}

PrimeraAPP.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraAPP

