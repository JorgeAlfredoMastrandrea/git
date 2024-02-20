import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'

export const Home = () => {

    const { usuario } = useContext(UsuarioContext)
    return (
        <>
            <div>Home</div>
            <p>Nombre usuario :  {usuario.nombre}</p>
            <p>Tecnología usuario :  {usuario.tecnologia}</p>
        </>
    )
}
