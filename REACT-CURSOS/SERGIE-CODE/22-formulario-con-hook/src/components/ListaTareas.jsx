import { useForm } from "../hooks/useForm"
import { useReducer } from 'react'

// el estado inicial
const initialState = [{
    id: new Date().getDate(),
    tarea: 'Una Tarea',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Otra Tarea',
    finalizada: false
}

// const editarTarea = {
//     type: '[TAREAS] Edita tarea',
//     payload: nuevaTarea
// }

const borrarTarea = {
    type: '[TAREAS] Borra tarea',
}

// por defecto el state si no le pasamos nada va a ser = initialState,
// y si no le pasamos ninguna action, entoces va a ser igual a {} un objeto vacío
const tareaReduce = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[TAREAS] Agrega tarea':
            return [...state, action.payload]

        case '[TAREAS] Finaliza tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada // revierto el cambio que tenga
                    }
                } return tarea
            })

        case '[TAREAS] Elimina tarea':
            return state.filter(tarea => tarea.id !== action.payload)

        case '[TAREAS] Borra todas las tareas':
            return action.payload

        default:
            return state;
    }
    //return state
}


export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReduce, initialState)

    const {
        tarea,
        formState,
        onInputChange } = useForm({ tarea: '' })

    const agregarTarea = (event) => {
        event.preventDefault()
        if (event.target.value == '') return
        console.log(formState)
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agrega tarea',
            payload: tarea
        }
        dispatch(action)
    }

    const finalizarTarea = (id) => {
        const action = {
            type: '[TAREAS] Finaliza tarea',
            payload: id
        }
        console.log(action)
        dispatch(action)
    }

    const eliminarTarea = (id) => {
        const action = {
            type: '[TAREAS] Elimina tarea',
            payload: id
        }
        console.log(action)
        dispatch(action)
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Borra todas las tareas',
            payload:[]
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingrese tarea"
                        value={tarea}
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className='list-group'>
                {tareasState.map(item => {
                    return (
                        <li key={item.tarea} className='list-group-item d-flex justify-content-between'>
                            <span>{item.tarea}</span>
                            <div>
                                <input
                                    type='checkbox'
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item.id)}
                                />
                                <button
                                    className='btn btn-danger'
                                    onClick={() => eliminarTarea(item.id)}>
                                    Borrar
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
