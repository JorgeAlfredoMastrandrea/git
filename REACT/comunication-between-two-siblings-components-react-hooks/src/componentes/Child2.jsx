import React from 'react'

/*
In the Child2 we will show the changed message like below:-

..fin
*/

export const Child2 = ({selectedMessage}) => {
  return (
    <div>
        <p>
            <strong>Soy el Child2 : </strong><span>{selectedMessage}</span>
        </p>
    </div>
  )
}