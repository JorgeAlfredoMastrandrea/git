// LAS PROMESAS SON UN TIPO ESPECIAL DE OBJETOS QUE PERMITE REALIZAR TAREAS EN FORMA ASINCRONA Y LUEGO MANEJAR LOS RESULTADOS
// PUEDEN TENER EXITO O NO , SE UTILIZAN MUCHO PARA TRAER DATOS DE LOS SERVIDORES MEDIANTE APIS, EL PROBLEMA ES LA DEMORA 
// QUE SE PUEDE PRESENTAR EN ESA ACCIÓN Y QUE PUEDE TRABAR LA EJECUCIÓN DE LA APLICACIÓN EN EL TIEMPO QUE SUCEDE ESO.

let promesa = new Promise((response , reject) => {    
    setTimeout(() => {
        let resp = {
            response : 200, // 200 es éxito , hay varios códigos de error ..
            description : 'Esta info es importante' // la respuesta puede ser cualquier cosa, un objeto, un string una fecha, etc
        }; 
        response(resp);
        reject('Falló');
    }, 3000);
});

// acá la llamamos a la promesa , de acuerdo a lo que haya pasado, mostramos la respuesta res
promesa.then(res => {
    // si sale todo bien ...
    console.log(res.description);
}).catch(error => {
    // si sale todo mal ...
    console.log(error) // podemos usar console.error para que en el navegador se vea rojo
})
