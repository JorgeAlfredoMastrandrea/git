import React from 'react';
import { useState } from 'react';
import { BotonMesCondicionalActivado } from '../componentes2/BotonMesCondicionalActivado';
import { BotonMesCondicionalDesactivado } from '../componentes2/BotonMesCondicionalDesactivado';

export const TableroMeses_v3 = ( props ) => {

    const año = props.añoOperativoCompleto.año;
    const arrayMeseAMostrar = [];
    // el hook que va a servirme para hacer el cambio de los meses
    const [mesSeleccioando, cambiarMes] = useState(props.mesSeleccionadoSistema);
    // los meses del año para hacer las comparativas ...
    const listaDeMeses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
    // desepaqueto los meses que vienen dentro del objeto 'props.añoOperativoCompleto' ..
    for (let index = 0; index < props.añoOperativoCompleto.meses.length; index++){
        console.log('meses ' , props.añoOperativoCompleto.meses[index].nombre)
        arrayMeseAMostrar[index] = props.añoOperativoCompleto.meses[index].nombre;
    }        
    console.log('TableroMeses_v3 objeto completo : ' , props.añoOperativoCompleto);
    console.log('TableroMeses_v3 año : ' , año);
    console.log('TableroMeses_v3 meses para mostrar : ' , arrayMeseAMostrar);   
    
    console.log(mesSeleccioando)
    

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
                //onEnviarMes( mesSeleccioando)
            }
        </>
  )
}
