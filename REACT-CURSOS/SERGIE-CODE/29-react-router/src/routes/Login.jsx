import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { UsuarioContext } from '../context/UsuarioContext'

export const Login = () => {

    const initialForm = {
        nombre: '',
        tecnologia: ''
    }

    const {
        formState,
        nombre,
        tecnologia,
        onInputChange
    } = useForm(initialForm)

    const { setUsuario } = useContext ( UsuarioContext )

    const onSubmit = (e) => {
        e.preventDefault()
        setUsuario(formState)
        console.log(formState)
    }



    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={( evento ) => onInputChange(evento)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tecnología</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tecnologia"
                        value={tecnologia}
                        onChange={( evento ) => onInputChange(evento)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">Registro</button>
            </form>
        </>
    )
}
