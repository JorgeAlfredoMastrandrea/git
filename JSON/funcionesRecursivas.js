// Función para buscar recursivamente por ID
    // function buscarPorId(data, targetId) {
    //     // console.log('..buscando por division id..!!')
    //     for (let item of data) {
    //         if (item.id === targetId) {
    //             return item; // Se encontró el elemento con el ID deseado
    //         }
    //         if (item.meses) {
    //             // Si el elemento tiene meses, buscar en ellos recursivamente
    //             const resultadoMeses = buscarPorId(item.meses, targetId);
    //             if (resultadoMeses) {
    //                 return resultadoMeses;
    //             }
    //         }
    //         if (item.cursosdivisiones) {
    //             // Si el elemento tiene cursosdivisiones, buscar en ellos recursivamente
    //             const resultadoCursos = buscarPorId(item.cursosdivisiones, targetId);
    //             if (resultadoCursos) {
    //                 return resultadoCursos;
    //             }
    //         }
    //         if (item.división) {
    //             // Si el elemento tiene divisiones, buscar en ellas recursivamente
    //             const resultadoDivisiones = buscarPorId(item.división, targetId);
    //             if (resultadoDivisiones) {
    //                 //console.log('resultadoDivisiones : --------> ', resultadoDivisiones)
    //                 return resultadoDivisiones;
    //             }
    //         }
    //     }
    //     // Si no se encuentra el ID, devolver null
    //     return null;
    // }

    // function insertarObjetoPorDivisionId(cursos, divisionId, objetoAInsertar) {
    //     for (let i = 0; i < cursos.length; i++) {
    //         const curso = cursos[i];

    //         for (let m = 0; m < curso.meses.length; m++) {
    //             const mes = curso.meses[m];

    //             for (let cd = 0; cd < mes.cursosdivisiones.length; cd++) {
    //                 const cursoDivision = mes.cursosdivisiones[cd];

    //                 if (cursoDivision.división && Array.isArray(cursoDivision.división)) {
    //                     for (let d = 0; d < cursoDivision.división.length; d++) {
    //                         const division = cursoDivision.división[d];

    //                         if (division && division.id === divisionId) {
    //                             division.objetoDatosPorDivisión.push(objetoAInsertar);
    //                             return true;
    //                         } else if (division && division.división && division.división.length > 0) {
    //                             if (insertarObjetoPorDivisionId(division.división, divisionId, objetoAInsertar)) {
    //                                 return true;
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }

    //     return false;
    // }


    // Función para obtener la clave asociada al valor
  const getKeyByValue = (object, value) => {
    for (const key in object) {
      if (object[key] === value) {
        return key;
      }
    }
    return null; // Retorna null si el valor no se encuentra en el objeto
  };