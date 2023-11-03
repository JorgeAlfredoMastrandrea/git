/*
El componente Link es similar al elemento anchor (<a>) en HTML. Su atributo to especifica a qué ruta nos lleva el enlace.

Recuerda que hemos creado los nombres de ruta listados en el componente Aplicacion para que cuando hagas clic en el enlace, 
revise tus rutas y renderice el componente que corresponda a dicho nombre.

Recuerda que siempre debes importar Link desde react-router-dom antes de poder usarlo.
*/

import React from 'react'
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>
      <h1>Esta es la página de inicio</h1>
      <p>
        <Link to="sobre-nosotros">Haz clic para ver la página sobre nosotros</Link>
      </p>
      <p>
        <Link to="contacto">Haz clic para ver la página de contacto</Link>
      </p>
    </div>
  )
}
