import { useState } from "react"
import { ConCallBackIncrementar } from "./ConCallBackIncrementar"
import { useCallback } from "react"

export const ConCallBackComponente = () => {

    const [counter, setCounter] = useState(0)

    // forma del useCallBack
    // memoriza funciones !!
    // useCallback(
    //     () => {
    //         first // la función
    //     },
    //     [second], // la dependencia
    // )

    // original
    // const incremetarPadre = ( val ) => {
    //     setCounter(counter + val)
    // }

    const incremetarPadre = useCallback (( val ) => {
        // se usa el manejador interno que tiene setCounter, 
        // no podemos seguir usando counter porque no funciona
        // utilizamos los valores internos en este caso lo hemos definido
        // como contador...
        setCounter(contador => contador + val) 
    } , []
    )

    return (
        <>
            <h1>Contador : {counter}</h1>
            <ConCallBackIncrementar incrementar={incremetarPadre}></ConCallBackIncrementar>
        </>
    )
}
