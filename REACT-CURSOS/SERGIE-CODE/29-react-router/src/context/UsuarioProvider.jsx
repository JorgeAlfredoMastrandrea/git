import React, { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

// mediante las props , va a recibir los hijos
export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({})

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}
