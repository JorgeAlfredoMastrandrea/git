import React from 'react'

export const VisorAño = ({añoOperativo}) => {
  return (
    <>
      <h5 id="año" className="card-title h2 link-body-emphasis d-inline-flex text-decoration-none rounded py-1">
        <strong>{añoOperativo}</strong>
      </h5>
    </>
  )
}
