import React from 'react'

export const Fila_ = ({ src, className, id , mKey, style ,  children }) => {
    return (
        <div id={id} key={mKey} className={className} style={style}>
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