import { useFetchData } from './hooks/useFetchData'

export const UsersList = ({ endPoint }) => {

    // desestructuro lo que estoy importando...
    // acá estamos usando un customHook que nos va a dar
    // la data y el isLoading
    const { data, isLoading} = useFetchData(endPoint)    
    return (
        <>
            <ul>
                {
                    isLoading 
                    ? <p>Cargando... </p> // basicamente los que hace es mostrar si se está cargando
                    : endPoint == 'users' // y una vez que secargó va a mostrar los usuarios
                        ? data.map(item => <li key={item.id}>{item.name}</li>) // pero cuando pulsamos el botón
                        : data.map(item => <li key={item.id}>{item.body}</li>) // se va a mostrar los otros datos
                }
            </ul>
        </>
    )
}
