import { useEffect, useState } from "react"

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const { 
        data , 
        isLoading , 
        errors } = state

    const getFetch = async () => {
        
        try {

            const response = await fetch(url)
            const data = await response.json()

            // en el caso de que tenga éxito
            setState({
                data,
                isLoading: false,
                errors: null
            })

        } 
        // en el caso de que no tenga éxito
        catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
    }

    // usando useEffect cada vez que cambie la url, 
    // se va a estar llamando a getFethc
    // para esta callback la dependencia entonces es la url
    useEffect( () => {
        if (!url) return
        getFetch()
    },[url])



    return {
        data,
        isLoading,
        errors
    }
}
