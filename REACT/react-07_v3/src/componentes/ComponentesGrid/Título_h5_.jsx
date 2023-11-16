import React from 'react'

export const Título_h5_ = ({ src, className, id, mKey, style, children }) => {
  return (
    <h5 id={id} key={mKey} className={className} style={style}>
      {src}
    </h5>
  )
}