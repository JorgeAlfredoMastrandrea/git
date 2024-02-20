// acá vamos a desarrollar lógica de js, no de jsx
import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = ( endPoint ) => {
    
    const [data, setData] = useState([]);
    const [isLoading , setIsLoading] = useState(true)    

    //.. esta función debe quedar por fuera del useEffect porque
    // no puedo llamar cosas asíncronas dentro del useEffect..!
    const getData = async () => {
        const { data , isLoading } = await fetchData(endPoint) // llamamos a la función helper
        setData(data)
        setIsLoading(isLoading)
    }
    
    useEffect( () => {
        // no podemos definir algo de manera asíncrona acá, por eso
        // hago la función por fuera ...
        getData()
    } , [endPoint])    
    
    // va a devolver un objeto, 
    return {
        data, // devulevo los objetos
        isLoading // devuelve que ya no está cargando mas
    }
}
