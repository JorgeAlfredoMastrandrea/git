import React from 'react'

/*
In the Child1 component, we are setting the message. Our Child1 component looks like.

Here on Button click, we are changing the value of our message from empty to “Message from child 1”.

..continua en Child2..
*/

export const Child1 = ({ setMessage }) => {
    
    const onButtonClick = (changeValue) => {
        setMessage(changeValue);
    }
    
    return (
        <div>
            <button onClick={() => onButtonClick('Mensaje desde Child1')}>Child1 : (pulsa para mandar el mensaje)</button>
        </div>
    )
}