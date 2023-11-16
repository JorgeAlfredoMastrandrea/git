import React from 'react'

export const Título_h1_ = ({ src, className, id, mKey, style, children }) => {
  return (
    <h1 id={id} key={mKey} className={className} style={style}>
      {src}
    </h1>
  )
}
