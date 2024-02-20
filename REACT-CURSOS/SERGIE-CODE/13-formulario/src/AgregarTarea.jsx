import React from 'react'
import { useState } from 'react'

export const AgregarTarea = () => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (evento) => {
        // esto hace que se cambie el valor del input
        // de acuerdo a lo que se va escribiendo
        setInputValue(evento.target.value);
        console.log('está escribiendo');
    }

    const onSubmitFormulario = (evento) => {
        evento.preventDefault(); // es para que no se actualice la página
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
