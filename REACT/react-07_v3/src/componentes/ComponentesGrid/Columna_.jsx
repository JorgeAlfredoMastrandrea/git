import React from 'react'

export const Columna_ = ({ src, className, id ,mKey, style ,  children }) => {
    return (
        <div id={id} key={mKey} className={className} style={style}>
            {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
            {children}
        </div>
    )
}
