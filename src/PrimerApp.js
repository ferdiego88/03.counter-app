//FC

const PrimeraAPP = ({saludo = 'Hola Mundo'}) => {
    //const saludo = 'Hola Mundo';
    
    return (
        <>
            <h1>{saludo}  </h1>
            {/* <pre> { JSON.stringify(saludo,null,3) } </pre> */}
            <p>Mi Primera aplicación</p>
        </>
    );
}

export default PrimeraAPP

