import React from 'react';

export const BotónAñoSiguiente = ({ setMensageBotónAñoSiguiente }) => {           
    
    const onButtonClicked = (event, arg) => {        
        setMensageBotónAñoSiguiente(arg);
    }
    
    return (
        <div className="">
            {
                <>
                    <div className="boton-año-anterior">
                        <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><small><span
                            className="material-symbols-outlined" onClick={(event) => onButtonClicked(event, 'este es un argumento del boton siguiente')}>
                            arrow_forward
                        </span></small></a>
                    </div>
                </>
            }
        </div>
    )
}