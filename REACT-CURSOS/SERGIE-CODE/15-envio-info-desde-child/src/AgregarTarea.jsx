import React from 'react'
import { useState } from 'react'

export const AgregarTarea = ({agregarTarea}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (evento) => {
        setInputValue(evento.target.value);
        console.log('está escribiendo');
    }

    const onSubmitFormulario = (evento) => {        
        evento.preventDefault(); // es para que no se actualice la página
        agregarTarea(inputValue);
    }

    return (
        <form onSubmit={(evento) => onSubmitFormulario(evento)}>
            < input
                type="text"
                placeholder="Ingresa tarea nueva"
                value={inputValue}
                onChange={(evento) => onInputChange(evento)}
            />
        </form>

    )
}
