// este componente es condicional, quiere decir que si el mes debe ser representado entonces se verá el botón
// en caso contrario, solamente deberá verse el div de color gris..

export const BotonMesActivadoCondicional = ({ mes }) => {

  const onButtonClicked = (event, arg) => {
    setMensageBotónMes(arg);
  }

  return (
    <>
      <div key={mes} className={mes}>
        <a id={mes} className="w-100 h-100 btn btn-secondary text-white h6 p-1 " href="#"
          onClick={(event) => onButtonClicked(event, { mes })} 
          role="button"><small>{mes}</small></a>
      </div>
    </>
  )
}