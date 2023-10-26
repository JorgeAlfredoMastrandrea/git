// es el componente que mantien todos los meses agrupados y que va a comunicarse con el padre.
// el componente padre le va a mandar los meses a renderizar..
import { useState } from "react";
import { useEffect } from "react";

export const TableroMeses = ({ meseAMostrar , setMessage}) => {

    // desempaquetar el objeto meses y guardarlo en un array para mayor facilidad de manejo ...
    const cantidadMeses = Object.keys(meseAMostrar).length;
    const arrayMeseAMostrar = [];
    // console.log(' objeto meses a mostrar : ', ...Object.values(meseAMostrar));    
    for (let index = 0; index < cantidadMeses; index++) {
        // console.log(Object.values(meseAMostrar).at(index).nombre);
        arrayMeseAMostrar[index] = Object.values(meseAMostrar).at(index).nombre;
    }

    // console.log('arrayMeseAMostrar : ', arrayMeseAMostrar);
    const [active_enero, setActive_enero] = useState(false);
    const [active_febrero, setActive_febrero] = useState(false);
    const [active_marzo, setActive_marzo] = useState(false);
    const [active_abril, setActive_abril] = useState(false);
    const [active_mayo, setActive_mayo] = useState(false);
    const [active_junio, setActive_junio] = useState(false);
    const [active_julio, setActive_julio] = useState(false);
    const [active_agosto, setActive_agosto] = useState(false);
    const [active_setiembre, setActive_setiembre] = useState(false);
    const [active_octubre, setActive_octubre] = useState(false);
    const [active_noviembre, setActive_noviembre] = useState(false);
    const [active_diciembre, setActive_diciembre] = useState(false);

    // obtener el último mes de la medicion para dejar activa esa ...
    const ultimoMes = arrayMeseAMostrar[arrayMeseAMostrar.length - 1];
    console.log(ultimoMes);

    
    const activarUltimoMes = () => {
        // obtener el último mes de la medicion para dejar activa esa ...
        const ultimoMes = arrayMeseAMostrar[arrayMeseAMostrar.length - 1];
        // acá debo poner en color verde al botón cuando se lo selecciona ...
        if (ultimoMes === 'enero') setActive_enero(true);
        if (ultimoMes === 'febrero') setActive_febrero(true);
        if (ultimoMes === 'marzo') setActive_marzo(true);
        if (ultimoMes === 'abril') setActive_abril(true);
        if (ultimoMes === 'mayo') setActive_mayo(true);
        if (ultimoMes === 'junio') setActive_junio(true);
        if (ultimoMes === 'julio') setActive_julio(true);
        if (ultimoMes === 'agosto') setActive_agosto(true);
        if (ultimoMes === 'setiembre') setActive_setiembre(true);
        if (ultimoMes === 'octubre') setActive_octubre(true);
        if (ultimoMes === 'noviembre') setActive_noviembre(true);
        if (ultimoMes === 'diciembre') setActive_diciembre(true);
    }

    const desactivarTodosLosMeses = () => {
        setActive_enero(false);
        setActive_febrero(false);
        setActive_marzo(false);
        setActive_abril(false);
        setActive_mayo(false);
        setActive_junio(false);
        setActive_julio(false);
        setActive_agosto(false);
        setActive_setiembre(false);
        setActive_octubre(false);
        setActive_noviembre(false);
        setActive_diciembre(false);
    }

    const mesSeleccionado = (event, setMessage) => {
        //console.log(event, mesElegido);
        desactivarTodosLosMeses();
        // acá debo poner en color verde al botón cuando se lo selecciona ...
        if (mesElegido === 'enero') setActive_enero(true);
        if (mesElegido === 'febrero') setActive_febrero(true);
        if (mesElegido === 'marzo') setActive_marzo(true);
        if (mesElegido === 'abril') setActive_abril(true);
        if (mesElegido === 'mayo') setActive_mayo(true);
        if (mesElegido === 'junio') setActive_junio(true);
        if (mesElegido === 'julio') setActive_julio(true);
        if (mesElegido === 'agosto') setActive_agosto(true);
        if (mesElegido === 'setiembre') setActive_setiembre(true);
        if (mesElegido === 'octubre') setActive_octubre(true);
        if (mesElegido === 'noviembre') setActive_noviembre(true);
        if (mesElegido === 'diciembre') setActive_diciembre(true);

        // devuelvo al padre el mes elegido..
        setMessage(mesElegido);
    }

    useEffect( () => {
        activarUltimoMes()
    },[]
    )

    return (
        <>        
            <div className="enero">
                {arrayMeseAMostrar.includes('enero') ? <a id="enero" className={active_enero ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'enero')}
                    role="button"><small>ene</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">ene</h6>}
            </div>

            <div className="febrero">
                {arrayMeseAMostrar.includes('febrero') ? <a id="febrero" className={active_febrero ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'febrero')}
                    role="button"><small>feb</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">feb</h6>}
            </div>

            <div className="marzo">
                {arrayMeseAMostrar.includes('marzo') ? <a id="marzo" className={active_marzo ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'marzo')}
                    role="button"><small>mar</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">mar</h6>}
            </div>

            <div className="abril">
                {arrayMeseAMostrar.includes('abril') ? <a id="abril" className={active_abril ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'abril')}
                    role="button"><small>abr</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">abr</h6>}
            </div>

            <div className="mayo">
                {arrayMeseAMostrar.includes('mayo') ? <a id="mayo" className={active_mayo ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'mayo')}
                    role="button"><small>may</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">may</h6>}
            </div>

            <div className="junio">
                {arrayMeseAMostrar.includes('junio') ? <a id="junio" className={active_junio ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'junio')}
                    role="button"><small>jun</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">jun</h6>}
            </div>

            <div className="julio">
                {arrayMeseAMostrar.includes('julio') ? <a id="julio" className={active_julio ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'julio')}
                    role="button"><small>jul</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">jul</h6>}
            </div>

            <div className="agosto">
                {arrayMeseAMostrar.includes('agosto') ? <a id="agosto" className={active_agosto ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'agosto')}
                    role="button"><small>ago</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">ago</h6>}
            </div>

            <div className="setiembre">
                {arrayMeseAMostrar.includes('setiembre') ? <a id="setiembre" className={active_setiembre ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'setiembre')}
                    role="button"><small>set</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">set</h6>}
            </div>

            <div className="octubre">
                {arrayMeseAMostrar.includes('octubre') ? <a id="octubre" className={active_octubre ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'octubre')}
                    role="button"><small>oct</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">oct</h6>}
            </div>

            <div className="noviembre">
                {arrayMeseAMostrar.includes('noviembre') ? <a id="noviembre" className={active_noviembre ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'noviembre')}
                    role="button"><small>nov</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">nov</h6>}
            </div>

            <div className="diciembre">
                {arrayMeseAMostrar.includes('diciembre') ? <a id="diciembre" className={active_diciembre ? "w-100 h-100 btn btn-success text-white h6 p-1" : "w-100 h-100 btn btn-primary text-white h6 p-1"} href="#"
                    onClick={(event) => mesSeleccionado(event, 'diciembre')}
                    role="button"><small>dic</small></a> :
                    <h6 className="rounded w-100 h-100 bg-secondary text-white h6 p-1 ">dic</h6>}
            </div>
        </>
    )
}