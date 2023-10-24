/*
los eventos en ract son mecanismo por lo cual los componentes pueden reaccionar
a la interacción del usuario..
por ejemplo: un click, a escribir en un input mover el mouse o cualquier otra cosa
que haga el usuario con la interaccion de la app

https://es.legacy.reactjs.org/docs/handling-events.html

https://es.react.dev/reference/react-dom/components/common#handling-mouse-events

siempre empiezan con "on..."
*/

/*
Qué son los Hooks ??
es una función especial para usar una función de react y sirven para 
manejar los estados
sin necesidas de usar clases hay de dos tipos
los de react useState, useEffect, etc
y los que creamos nosotros..

Qué es un estado en react ?
es un objeto que contiene datos y representa la información que una
interfaz necesita para poder renderizarse y funcionar correctamente..

*/

import React from 'react';
import { useState } from 'react';

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

    
    
    
    // se declara primero el nombre de la variable y luego la funcion
    // que la va a modificar
    const [contador , setContador] = useState(valor)

    // esta es la forma recomendada de armar a las funciones..
    const handleClickCuartoBoton = () => {
        // cuando hagan click sobre este botón, reeact tiene que
        // saber el cambio del estado del valor para poder
        // redibujarlo, por lo tanto 'valor' va a cambiar de acuerdo al estado        
        valor++;
        console.log(valor);
        setContador(contador+1);
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

            <p>este es el valor que me mandó mi padre : {contador}</p>
        </>
    )
}