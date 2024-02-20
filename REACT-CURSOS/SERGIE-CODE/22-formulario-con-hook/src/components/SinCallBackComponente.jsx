import { useState } from "react"
import { SinCallBackIncrementar } from "./SinCallBackIncrementar"

export const SinCallBackComponente = () => {

    const [counter, setCounter] = useState(0)

    const incremetarPadre = ( val ) => {
        setCounter(counter + val)
    }

    return (
        <>
            <h1>Contador : {counter}</h1>
            <SinCallBackIncrementar incrementar={incremetarPadre}></SinCallBackIncrementar>
        </>
    )
}
