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



export const ComponenteEventoContador = ({ valor }) => {
    // se declara primero el nombre de la variable y luego la funcion
    // que la va a modificar
    const [contador , setContador] = useState(valor)

    // esta es la forma recomendada de armar a las funciones..
    const handleClickCuartoBoton = () => {        
        setContador(contador+1);
    }

    return (
        <>
            <h4>Componente Eventos Contador</h4>
            <button onClick={handleClickCuartoBoton}>
                Botón Incremento
            </button>

            <p>este es el valor que me mandó mi padre : {contador}</p>
        </>
    )
}