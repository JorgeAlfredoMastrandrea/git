import React from 'react';
import { useState, useEffect } from 'react';
import { BotonMesCondicionalActivado } from '../componentes2/BotonMesCondicionalActivado';
import { BotonMesCondicionalDesactivado } from '../componentes2/BotonMesCondicionalDesactivado';

export const TableroMeses_v3 = (props) => {

    const año = props.añoOperativoCompleto.año;
    const arrayMeseAMostrar = [];    
    let objetoMesCompleto;
    // el hook que va a servirme para hacer el cambio de los meses
    const [mesSeleccioando, cambiarMes] = useState(props.mesSeleccionadoSistema);
    // los meses del año para hacer las comparativas ...
    const listaDeMeses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
    // desenpaqueto los meses que vienen dentro del objeto 'props.añoOperativoCompleto' ..
    for (let index = 0; index < props.añoOperativoCompleto.meses.length; index++) {
        arrayMeseAMostrar[index] = props.añoOperativoCompleto.meses[index].nombre;   
    }
        
    const onEnviarMesYAño = (mesSeleccioando) => {
        // acá es donde yo debo devolver el objeto mes completo..
        // recorrer el objeto meses
        for (let index = 0; index < props.añoOperativoCompleto.meses.length; index++) {
            if (mesSeleccioando == props.añoOperativoCompleto.meses[index].nombre) {                
                objetoMesCompleto = props.añoOperativoCompleto.meses[index];                
            }
        }
        props.tableroMesesYAñoANavegacionMedicion(objetoMesCompleto);
    }

    return (
        <>
            {listaDeMeses.map((mes, i) => {
                return (
                    <>
                        {
                            arrayMeseAMostrar.includes(mes) ?
                                <BotonMesCondicionalActivado
                                    mes={mes}
                                    arrayMeseAMostrar={arrayMeseAMostrar}
                                    cambiarMes={mesSeleccioando => cambiarMes(mesSeleccioando)} /> :
                                <BotonMesCondicionalDesactivado mes={mes} />
                        }
                    </>
                )
            }
            )
            }
            {
                // desactivo todos los meses que no ha sido seleccionados ...               
                onEnviarMesYAño(mesSeleccioando)
            }
        </>
    )
}
