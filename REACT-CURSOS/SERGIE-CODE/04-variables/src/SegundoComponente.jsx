import React from 'react'
// variables por fuera de la función ...
// siempre van acá fuera del functional commponent
// estas variables no se van a re renderizar cada vez que se pínte el componente..
const cadena = 'abcdefg';
const number = '12345';
const array = ['Jorge', 'Alfredo', 'Mastrandrea'];
const booleano = true;
const funcionA = () => 1 + 1;
const funcionB = (a,b) => {return a*b}
const objeto = {
    nombre: 'Jorge',
    edad: 54
}
const fecha = new Date()

export const SegundoComponente = () => {
    // las variables acá adentro se van a re renderizar !!!!
    // variables dentro de la función
    const cadena2 = 'esta es una cadena de texto'
    return (        
        <>
            <h3>Segundo Componente</h3>
            <p>{ 1 + 1}</p>
            <p>{ cadena} </p>
            <p>{ number} </p>
            <p>{ array /* cuando se ve por pantalla se ven pegados pero eso se puede aprovechar para otras cosas*/} </p>
            <p>{ booleano /*no se ve el valor como tal para los bools*/} </p>
            <p>{ funcionA /*esto genera un warning !!!!! no se renderiza el resultado pero se ejecuta */} </p>
            <p>{ funcionA()} </p>
            <p>{ funcionB(3,4)} </p>
            <p>{ /* acá puedo ejecutar código javascript*/ } </p>
            <p>{ JSON.stringify(objeto) }</p>
            <p>{ JSON.stringify(fecha) } </p>            
            { console.log('esto sale por consola dl navegador') }
        </>
    )
}
