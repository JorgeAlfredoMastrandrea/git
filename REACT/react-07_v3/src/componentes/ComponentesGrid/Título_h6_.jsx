import React from 'react'

export const Título_h6_ = ({ src, className, id, mKey, style, children }) => {
  return (
    <h6 id={id} key={mKey} className={className} style={style}>
      {src}
    </h6>
  )
}