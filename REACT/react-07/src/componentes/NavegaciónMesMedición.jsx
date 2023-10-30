import React from 'react'

export const NavegaciónMesMedición = (props) => {
  
  {console.log('res final : NavegaciónMesMedición : ' , props.mesAMostrarSeleccionado , ' ' , props.navLinkAñoMedicion)}
  
  return (
    <div>{props.mesAMostrarSeleccionado}</div>    
  )
}
