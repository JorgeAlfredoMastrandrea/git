import { useState } from "react"

export const useForm = ( initialForm = {} ) => { // lo inicializamos sin nada pero de seguro que va a traer datos

    const [formState, setFomState] = useState( initialForm )    

    const onInputChange = ({ target }) => {
        const { name, value } = target
        // la idea es poder cambia los valores de los elementos del form
        // pero que pasa si hacemos un cambio a la vez?, los otros no cambian
        // es por ello que usamos el spead operator ... para poder hacer eso
        setFomState({
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
