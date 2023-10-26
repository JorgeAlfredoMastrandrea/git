// es el componente que mantien todos los meses agrupados y que va a comunicarse con el padre.
// el componente padre le va a mandar los meses a renderizar..
import { useState } from "react";

const listaDeMeses = [
    'enero', 'febrero', 'marzo', 'abril',
    'mayo', 'junio', 'julio', 'agosto',
    'setiembre', 'octubre', 'noviembre', 'diciembre'
];

export const TableroMeses = ({ meseAMostrar }) => {

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
    const mesSeleccionado = (event, mesElegido) => {
        // console.log(event , mesElegido);
        // acá debo poner en color verde al botón cuando se lo selecciona ...
        setActive_enero(!active_enero);
    }

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
