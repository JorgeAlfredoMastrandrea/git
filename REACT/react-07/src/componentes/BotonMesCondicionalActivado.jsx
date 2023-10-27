// este componente es condicional, quiere decir que si el mes debe ser representado entonces se verá el botón
// en caso contrario, solamente deberá verse el div de color gris..
import { useState } from "react";

export const BotonMesCondicionalActivado = ( propiedades ) => {

  

  const [active, setActive] = useState(false);

  const onButtonClicked = (event, mesElegido) => {
    //propiedades.setMensageBotónMes(arg);
    setActive(true);
    // devuelvo al padre el mes elegido..
    propiedades.cambiarMes(mesElegido); 
  }

  const desactivar = () => {
    propiedades.setActive(false);
  }

  return (
    <>
      <div key={ propiedades.mes } className = { propiedades.mes } >
        <a id={ propiedades.mes } className={active ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
          onClick={(event) => onButtonClicked(event,  propiedades.mes )}
          role="button"><small>{ propiedades.mes.substr(0, 3) }</small></a>
      </div>
    </>
  )
}