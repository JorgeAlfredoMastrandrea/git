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


/*
import React from 'react';

export const BotónAñoAnterior = ({ handleClickBotonAñoAnterior }) => {

    //console.log('----------- ', handleClickBotonAñoAnterior)

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const manejarClickBotonAñoAnterior = mensajeBotonAñoSiguiente => {
        handleClickBotonAñoAnterior(randomIntFromInterval(1, 100))
    };

    handleClickBotonAñoAnterior('BotonAñoAnteriorPresionado')



    return (
        <div className="">
            {
                <>
                    <div className="boton-año-anterior">
                        <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><small><span
                            className="material-symbols-outlined" onClick={(event) => manejarClickBotonAñoAnterior()}>
                            arrow_back
                        </span></small></a>
                    </div>
                </>
            }
        </div>
    );
}
*/