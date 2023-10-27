import React from 'react';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { BotonMesCondicionalActivado } from './BotonMesCondicionalActivado';
import { BotonMesCondicionalDesactivado } from './BotonMesCondicionalDesactivado';


export const TableroMeses_v2 = (props) => {



    const [mesSeleccioando, setMesSeleccionado] = useState();

    const listaDeMeses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];

    // desempaquetar el objeto meses y guardarlo en un array para mayor facilidad de manejo ...
    const cantidadMeses = Object.keys(props.meseAMostrar).length;
    const arrayMeseAMostrar = [];
    // console.log(' objeto meses a mostrar : ', ...Object.values(meseAMostrar));    
    for (let index = 0; index < cantidadMeses; index++) {
        // console.log(Object.values(meseAMostrar).at(index).nombre);
        arrayMeseAMostrar[index] = Object.values(props.meseAMostrar).at(index).nombre;
    }

    // obtener el último mes de la medicion para dejar activa esa ...
    const ultimoMes = arrayMeseAMostrar[arrayMeseAMostrar.length - 1];

    // poner de color azul a todos los botones menos al que fue seleccionado ...
    const onDesactivar = (mesSeleccioando) => {
        console.log('desactivo todos menos el mes de : ', mesSeleccioando);
        for (let index = 0; index < arrayMeseAMostrar.length; index++) {
            if (arrayMeseAMostrar[index] !== mesSeleccioando) console.log('desactivo : ', arrayMeseAMostrar[index]);
            // cómo los desactivo a los que ya están dibujados ??
            //childRef.current.doSomething();
        }
    }

    return (
        <>
            {listaDeMeses.map((mes, i) => {
                return (
                    <>
                        {
                            arrayMeseAMostrar.includes(mes) ?
                                <BotonMesCondicionalActivado mes={mes} cambiarMes={mesSeleccioando => setMesSeleccionado(mesSeleccioando)}/> :
                                <BotonMesCondicionalDesactivado mes={mes} />
                        }
                    </>
                )
            }
            )
            }
            {
                // desactivo todos los meses que no ha sido seleccionados ...               
                onDesactivar(mesSeleccioando)
            }
        </>
    )
}