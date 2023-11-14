import { useState ,useRef } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import './meses.css';
//import './styles.css';

import navLinkAñoMedicion from "./medicionesAñosMesesCursosDivisiones.json";
import { NavegaciónAñoMedición_v6 } from './componentes_navegación_año_meses/NavegaciónAñoMedición_v6';
import { NavegaciónCursoDivisión } from './componentes_navegación_curso_división/NavegaciónCursoDivisión';
import { DataProvider } from './componentes_contenedor_datos/DataProvider';
import { DataLayout } from './componentes_contenedor_datos/DataLayout';

function App() {

    const [dataSeleccionadaPorCurso, cambiarDataSeleccionadaPorCurso] = useState(); // ???
    const [layoutSeleccionada_, setLayoutSeleccionada_] = useState(); // ???

    const refLayout = useRef(null)



    const [cursosYDivisiones, setCursosYDivisiones] = useState();
    const gettCursosYDivisiones = (datosDeNavegaciónAñoMedición_v6) => {
        // console.log('gettCursosYDivisiones : ', datosDeNavegaciónAñoMedición_v6);
        setCursosYDivisiones(datosDeNavegaciónAñoMedición_v6)
    }

    // debo leer por primera vez acá los datos de los cursos y divisiones también ?? para eso uso el :
    /*
    {
                                    cursosYDivisiones &&
                                    <NavegaciónCursoDivisión
                                        cursosYDivisiones={cursosYDivisiones}
                                    />
                                }
    */
    const onBuscarDatosSelecionadaPorCurso = (dataSeleccionada, divisionID, objetoDatosPorDivisión) => {
        //console.log('data seleccionada ------ >', dataSeleccionada, '----- layout ---- :', objetoDatosPorDivisión)
        // acá verifico si en el 'objetoDatosPorDivisión' ya está el layout guardado anteriormente ...???

        // experimental ::::: busco por divisionID
        const objetoDivisión = buscarPorId(navLinkAñoMedicion, divisionID)

        // si no tengo nada cargado 'un layout' , entonces lo busco
        if (objetoDivisión.objetoDatosPorDivisión.length === 0) {
            //console.log('no hay layout cargado aun en !! ' , divisionID)
            cambiarDataSeleccionadaPorCurso(dataSeleccionada)
            // lo que hago acá es guardar el id de la división así luego puedo guardar el layout mas adelante ..!!
            refLayout.current = objetoDivisión.id
            // luego lo inserto para que ya quede dentro del JSON grande así no lo vuelvo a buscar...
            // const inserto = insertarObjetoPorDivisionId(navLinkAñoMedicion, divisionID, objetoDatosPorDivisión)
            //console.log(`inserté en ${divisionID}`, inserto , ' --> : ' , objetoDatosPorDivisión)
            //console.log(navLinkAñoMedicion)
        } else {
            // si el objeto tiene datos que ya han sido cargados o sea ya tiene un layout cargado, no lo buscamos nuevamente, lo saco y lo muestro..
            //console.log('ya tengo el layout cargado..!!!.. no hace falta hacer fetch del mismo')
            
            // onMostrarDatosSeleccionadoPorCurso(objetoDatosPorDivisión) está mal !!!
            // debo crear otra funcion para que lea el layout directamente desde el objeto navLink...
            //console.log('leo el layout directamente desde le JSON navlink..!')
            buscarLayoutCargadoAnteriormente(divisionID)
        }
    }

    const buscarLayoutCargadoAnteriormente = (divisionID) => {
        //console.log('andres se la come ' , divisionID)
        const objetoDivisión = buscarPorId(navLinkAñoMedicion, divisionID)
        const elLayoutCargado =  objetoDivisión.objetoDatosPorDivisión
        console.log('ahi tene puto el layout !!! : ' , elLayoutCargado)
        setLayoutSeleccionada_(elLayoutCargado)
    }

    const onMostrarDatosSeleccionadoPorCurso = (layout) => {
        // console.log("soy el layout de datos que estás buscando : ", layout)
        // acá debería poder guardar el layout dentro del atributo 'objetoDatosPorDivisión'

        // inserto el layout..!!
        const objetoDivisión = buscarPorId(navLinkAñoMedicion, refLayout.current)
        if (objetoDivisión.objetoDatosPorDivisión.length === 0){
            const inserto = insertarObjetoPorDivisionId(navLinkAñoMedicion, refLayout.current, layout)
        }
        //console.log('objetoDivisión ' , refLayout.current)
        setLayoutSeleccionada_(layout)

        console.log('--- >' , navLinkAñoMedicion)


    }

    // Función para buscar recursivamente por ID
    function buscarPorId(data, targetId) {
        // console.log('..buscando por division id..!!')
        for (let item of data) {
            if (item.id === targetId) {
                return item; // Se encontró el elemento con el ID deseado
            }
            if (item.meses) {
                // Si el elemento tiene meses, buscar en ellos recursivamente
                const resultadoMeses = buscarPorId(item.meses, targetId);
                if (resultadoMeses) {
                    return resultadoMeses;
                }
            }
            if (item.cursosdivisiones) {
                // Si el elemento tiene cursosdivisiones, buscar en ellos recursivamente
                const resultadoCursos = buscarPorId(item.cursosdivisiones, targetId);
                if (resultadoCursos) {
                    return resultadoCursos;
                }
            }
            if (item.división) {
                // Si el elemento tiene divisiones, buscar en ellas recursivamente
                const resultadoDivisiones = buscarPorId(item.división, targetId);
                if (resultadoDivisiones) {
                    console.log('resultadoDivisiones : --------> ', resultadoDivisiones)
                    return resultadoDivisiones;
                }
            }
        }
        // Si no se encuentra el ID, devolver null
        return null;
    }

    function insertarObjetoPorDivisionId(cursos, divisionId, objetoAInsertar) {
        for (let i = 0; i < cursos.length; i++) {
            const curso = cursos[i];

            for (let m = 0; m < curso.meses.length; m++) {
                const mes = curso.meses[m];

                for (let cd = 0; cd < mes.cursosdivisiones.length; cd++) {
                    const cursoDivision = mes.cursosdivisiones[cd];

                    if (cursoDivision.división && Array.isArray(cursoDivision.división)) {
                        for (let d = 0; d < cursoDivision.división.length; d++) {
                            const division = cursoDivision.división[d];

                            if (division && division.id === divisionId) {
                                division.objetoDatosPorDivisión.push(objetoAInsertar);
                                return true;
                            } else if (division && division.división && division.división.length > 0) {
                                if (insertarObjetoPorDivisionId(division.división, divisionId, objetoAInsertar)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }

        return false;
    }

    return (
        <>

            <div className="container-xxl p-0 ">

                <div class="row text-center">
                    <div class="col-sm-12 themed-grid-col p-0">
                        Datos institucionales
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-sm-2 themed-grid-col p-0">
                        Ciclo lectivo y mes medido
                        <NavegaciónAñoMedición_v6
                            navLinkAñoMedicion={navLinkAñoMedicion}
                            gettCursosYDivisiones={gettCursosYDivisiones}
                        />
                    </div>
                    <div class="col-sm-10 themed-grid-col p-0">
                        Cursos y divisiones
                        {
                            cursosYDivisiones &&
                            <NavegaciónCursoDivisión
                                cursosYDivisiones={cursosYDivisiones}
                                onBuscarDatosSelecionadaPorCurso={onBuscarDatosSelecionadaPorCurso}
                            />
                        }
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-sm-12 themed-grid-col p-0">
                        fila de herramientas
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-sm-12 themed-grid-col p-0">
                        contenedor de datos
                        {
                            dataSeleccionadaPorCurso &&
                            <DataProvider
                                dataSeleccionadaPorCurso={dataSeleccionadaPorCurso}
                                onMostrarDatosSeleccionadoPorCurso={onMostrarDatosSeleccionadoPorCurso}
                            />


                        }
                        {
                            layoutSeleccionada_ &&
                            <DataLayout
                                layoutSeleccionada_={layoutSeleccionada_}
                            />

                        }

                    </div>
                </div>

            </div>
            {
                // desactivo todos los meses que no ha sido seleccionados ...               
                //onBuscarDatosSelecionadaPorCurso(dataSeleccionadaPorCurso)                
            }
        </>
    )
}

export default App