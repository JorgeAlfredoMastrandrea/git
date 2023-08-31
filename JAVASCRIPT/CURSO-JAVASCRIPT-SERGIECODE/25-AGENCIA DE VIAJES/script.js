// desestructuración de datos 
import { barcelona , roma , paris , londres } from "./ciudades.js";

// obtener los elementos del DOM
// hacemos todas las querys de los elementos que sean 'a'
let enlaces             = document.querySelectorAll('a');
let tituloElemento      = document.getElementById('titulo');
let subTituloElemento   = document.getElementById('subtitulo');
let parrafoElemento     = document.getElementById('parrafo');
let precioElemento      = document.getElementById('precio');

//console.log(enlace);
enlaces.forEach(function(enlace){
    enlace.addEventListener('click' , function() {
        // remover el activo (clase)
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        // agregar la clase active al enlace actual
        this.classList.add('active');
        
        // agregar active al que corresponda
        // obtener el contenido segun enlace
        let contenido = obtenerContenido(this.textContent);
        
        // traer la info del objeto correspondiente y mostrar en el dom
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;

    });
});

// nos va a devolver la info de cada ciudad
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma'      : roma,
        'París'     : paris,
        'Londres'   : londres
    };
    return contenido[enlace];
}