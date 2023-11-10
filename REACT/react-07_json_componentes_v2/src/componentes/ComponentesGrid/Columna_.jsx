import React from 'react'

export const Columna_ = ({ src, className, ky, style ,  children }) => {
    return (
        <div key={ky} className={className} styled={style}>
            {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
            {children}
        </div>
    )
}
