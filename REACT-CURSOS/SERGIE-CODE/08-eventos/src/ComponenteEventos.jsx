/*
los eventos en ract son mecanismo por lo cual los componentes pueden reaccionar
a la interacción del usuario..
por ejemplo: un click, a escribir en un input mover el mouse o cualquier otra cosa
que haga el usuario con la interaccion de la app

https://es.legacy.reactjs.org/docs/handling-events.html

https://es.react.dev/reference/react-dom/components/common#handling-mouse-events

siempre empiezan con "on..."
*/

import React from 'react'

function handleClick(event, arg) {
    // esto es una función anónima.. la podeemos escribir por fuera 
    // pero debería ponerse un nombre
    console.log('me haz hecho click');
    console.log('un argumento :', arg);
    console.log(event); // podemos usar el event para poder sacar mucha info que podría ser usada para otras cosas
}
const Boton = () => {
    return (
        <button onClick={(event) => handleClick(event, 'otro argumento')}>
            Soy un botón
        </button>
    )
}

function handleClickOtroBoton(event) {
    console.log('me hiciste click, soy el otro botón');
    console.log('soy el evento del otro boton ', event);
}
const OtroBoton = () => {
    return (
        <button onClick={handleClickOtroBoton}>
            Soy otro botón
        </button>
    )
}

export const ComponenteEventos = ({ valor }) => {
    function handleClickTercerBoton(event) {
        console.log('soy el tercer boton largo')
        console.log(event)
    }

    // esta es la forma recomendada de armar a las funciones..
    const handleClickCuartoBoton = () => {
        // cuando hagan click sobre este botón, reeact tiene que
        // saber el cambio del estado del valor para poder
        // redibujarlo, por lo tanto 'valor' va a cambiar de acuerdo al estado
        console.log('soy el caurto boton largo')
    }


    return (
        <>
            <h4>Componente Eventos</h4>
            <Boton></Boton>
            <OtroBoton></OtroBoton>
            <button onClick={handleClickTercerBoton}>
                Yo soy un botón que tengo mi función dentro del componente
            </button>

            <button onClick={handleClickCuartoBoton}>
                Yo soy diferente
            </button>

            <p>este es el valor que me mandó mi padre : {valor}</p>
        </>
    )
}