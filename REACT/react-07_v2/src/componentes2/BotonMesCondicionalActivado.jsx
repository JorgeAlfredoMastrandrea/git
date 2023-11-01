// este componente es condicional, quiere decir que si el mes debe ser representado entonces se verá el botón
// en caso contrario, solamente deberá verse el div de color gris..
import { useState } from "react";

export const BotonMesCondicionalActivado = ( propiedades ) => {
  
  const [active, setActive] = useState(false);

  const onButtonClicked = (event, mesElegido) => {
    setActive(true);
    
    for (let index = 0; index < propiedades.arrayMeseAMostrar.length; index++) {
      if (propiedades.arrayMeseAMostrar[index] !== mesElegido) {
        //console.log('desactivo : ', propiedades.arrayMeseAMostrar[index]);
        document.getElementById(propiedades.arrayMeseAMostrar[index]).style.background = '#0d6efd';
      }
      document.getElementById(mesElegido).style.background = "#198754";
    }
    // devuelvo al padre el mes elegido..
    // cuando lo devuelvo, debo armar el objeto mes completo ..!!!
    propiedades.cambiarMes( mesElegido ); // acá se puede hacer esto --> { mes : mesElegido }
  }

  return (
    <>
      <div key={propiedades.mes+'_activo'} className={propiedades.mes} >
        <a key={propiedades.mes+'_anchor'} id={propiedades.mes} className={active ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
          onClick={(event) => onButtonClicked(event, propiedades.mes)}
          role="button"><small>{propiedades.mes.substr(0, 3)}</small></a>
      </div>
    </>
  )
}