/*
las props o propiedades son un mecanismo para mandar info entre componentes
padre hijo o entre hermanos
las props en si son objetos
por lo general vamos a ver la palabra "props" pero es un nombre usado
para cuando se enseña react... nosotros podemos usar cualquier nombre
*/

import React from 'react'
import PropTypes from 'prop-types';

export const ComponenteProps = ( {titulo , subtitulo , numero} ) => {
    // lo podemos ver por consola pero no lo podemos renderizar dentro 
    // de las  { props } ... esto daría un error..! 
    console.log(titulo)
    console.log(subtitulo)
    return (
        <div>
            <h4>Componente Props</h4>
            <p>{titulo}</p>
            <p>{subtitulo}</p>
            <p>{subtitulo + numero}</p>
            <p>{1 + numero}</p>
        </div>
    )
}

ComponenteProps.propTypes = {
    titulo: PropTypes.string.isRequired, /*esto significa que si o si necesitamos que esté ese props*/    
}