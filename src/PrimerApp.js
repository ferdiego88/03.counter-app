//FC
import PropTypes from "prop-types";

const PrimeraAPP = ({
    saludo, 
    subtitulo}) => {
   

    return (
        <>
            <h1>{saludo}!!!</h1>
            {/* <pre> { JSON.stringify(saludo,null,3) } </pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraAPP.defaultProps = {
    subtitulo: 'Aprendiendo React'
}

PrimeraAPP.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraAPP

