

export const BotonMesCondicionalDesactivado = ( propiedades ) => {
  return (
    <>
      <div key={ propiedades.mes+'_des' } className = { propiedades.mes }>
        <a key={propiedades.mes+'_desactivo'} id={ propiedades.mes } className="w-100 h-100 btn btn-secondary text-white h6 p-1 " href="#"
          role="button"><small>{ propiedades.mes.substr(0, 3) }</small></a>
      </div>
    </>
  )
}
