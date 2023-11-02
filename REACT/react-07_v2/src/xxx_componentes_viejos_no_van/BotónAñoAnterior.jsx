import React from 'react';

export const BotónAñoAnterior = ({ setMensageBotónAñoAnterior }) => {

    const onButtonClicked = (event, arg) => {        
        setMensageBotónAñoAnterior(arg);
    }
    
    return (
        <div className="">
            {
                <>
                    <div className="boton-año-anterior">
                        <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><small><span
                            className="material-symbols-outlined" onClick={(event) => onButtonClicked(event, 'este es un argumento del boton anterior')}>
                            arrow_back
                        </span></small></a>
                    </div>
                </>
            }
        </div>
    );
}