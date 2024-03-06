import React from 'react'

export const Columna_ = ({ src, className, id ,mKey, style ,  children }) => {
    return (
        <div id={id} key={mKey} className={className} style={style}>
            {children}
        </div>
    )
}