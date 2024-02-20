import React from "react"

export const ConCallBackIncrementar = React.memo(({ incrementar }) => {

    // este componente es simplemente un botón, cada vez que se pulsa, se redibuja
    // no tiene sentido que eso suceda, entonces..!!
    // vamos a complicar un poco mas la cosa y lo que vamos a mandarle a lafunción
    // es un parámetro..le vamos a pasar un valor por ejemplo incrementar(10)
    // la única forma de que pueda ser redibujado es que el valor que
    // le estamos pasando 'incrementar(10)' cambie..o sea incrementar(20)
    console.log('Me estoy redibujando..!!')

    return (
        <button onClick={() => incrementar(10)}>+1</button>
    )
}
)