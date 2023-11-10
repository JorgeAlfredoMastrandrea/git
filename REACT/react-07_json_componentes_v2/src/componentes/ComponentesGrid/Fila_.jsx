import React from 'react'

export const Fila_ = ({ src, className, ky, style ,  children }) => {
    return (
        <div key={ky} className={className} styled={style}>
            {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
            {children}
        </div>
    )
}

//<div className={className}>
//            {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
//            <img src={src} alt="Imagen" />
//            {children}
//        </div>