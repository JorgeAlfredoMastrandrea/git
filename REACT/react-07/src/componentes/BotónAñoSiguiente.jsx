import React from 'react'

export const BotónAñoSiguiente = ({ handleClickBotonAñoSiguiente }) => {    

    return (
        <div className="">
            {
                <>
                    <div className="boton-año-anterior">
                        <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><small><span
                            className="material-symbols-outlined" onClick={(event) => handleClickBotonAñoSiguiente('BotonAñoSiguientePresionado')}>
                            arrow_forward
                        </span></small></a>
                    </div>
                </>
            }
        </div>
    )
}
