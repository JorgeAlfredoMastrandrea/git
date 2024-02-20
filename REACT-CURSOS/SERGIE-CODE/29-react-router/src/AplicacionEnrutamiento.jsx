import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './Componentes/NavBar'
import { Login } from './routes/Login'
import { Contact } from './routes/Contact'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { UsuarioProvider } from './context/UsuarioProvider'


export const AplicacionEnrutamiento = () => {
    return (
        <>
            <UsuarioProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
                </Routes>
            </UsuarioProvider>
        </>
    )
}
