import { useMemo } from "react"
import { useState } from "react"

const getCalculo1 = (listaNumeros) => {
    // para este ejemplo cada vez que se pulse el boton, se va a volver
    // a calcular todo de nuevo, hay que ver la consola para darse cuenta
    // si pulsamos el botón, se vuelve a calcular todo otra vez
    console.log('Calculando')
    return listaNumeros.reduce((a, b) => a * b)
}

export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    const [show, setShow] = useState(true)
    
    // hay que cambiar por getCalculo1 o getCalculo2 en la llamada para
    // poder ver el efecto
    const getCalculo2 = (listaNumeros ) => useMemo(() => {
        // esta sería la forma correcta de hacer que el cálculo 
        // no se esté re haciendo cada vez que se pulse le boton show o hide
        console.log('Calculando')
        return listaNumeros.reduce((a, b) => a * b)
    }, [listaNumeros]) // la dependencia va dentro de un array ,
    // si cambia la lista de numeros, se va a ejecutar el método y se redibujará
    // nuevamente y se calculará de nuevo !!!
    
    const agregarNumero = () => {
        // por cada vez que agregamos un número nuevo, se redibuja todo otra vez
        setListaNumeros([...listaNumeros , listaNumeros[listaNumeros.length - 1] + 1])
        console.log(listaNumeros)
    }

    // la forma de useMemo es 
    // la función es la callback y la dependencia es lo que cambia
    // useMemo(() => función , [dependencia]) 

    return (
        <>
            <h2> Cálculo : </h2>
            <p>{getCalculo2(listaNumeros)} </p>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'} </button>
            <button className='btn btn-danger' onClick={() => agregarNumero()}>Agregar número </button>
        </>
    )
}
