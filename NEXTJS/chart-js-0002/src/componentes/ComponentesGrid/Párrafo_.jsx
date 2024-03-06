import React from 'react'

export const Párrafo_ = ({ src, className, id , mKey, style, children }) => {
    return (
        <p id={id} key={mKey} className={className} style={style}>
            {src}
        </p>
    )
}