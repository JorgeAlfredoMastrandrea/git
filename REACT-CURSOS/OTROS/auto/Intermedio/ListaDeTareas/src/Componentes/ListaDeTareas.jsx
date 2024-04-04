import React from 'react';
import { useState } from 'react';

export const ListaDeTareas = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        if (!tarea) return; // No agregar tareas vacías
        setTareas([...tareas, { id: Date.now(), texto: tarea, completada: false }]);
        setTarea(''); // Limpiar el input después de agregar
    };

    const toggleCompletada = (id) => {
        setTareas(tareas.map(tarea =>
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        ));
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Añadir nueva tarea"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
            />
            <button onClick={agregarTarea}>Agregar Tarea</button>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                        {tarea.texto}
                        <button onClick={() => toggleCompletada(tarea.id)}>Completar</button>
                        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Estados tarea y tareas: tarea almacena el valor actual del input, 
// mientras que tareas es un array que contiene todas las tareas añadidas.
// agregarTarea: Esta función añade una nueva tarea al array tareas. 
// Cada tarea es un objeto con un id único, el texto de la tarea y un booleano completada para marcar el estado de la tarea.
// toggleCompletada: Cambia el estado de completada de una tarea al hacer clic en el botón "Completar".
// eliminarTarea: Elimina una tarea del array basándose en su id.

// explicaciones adicionales
// El uso de ...tarea en el contexto de React y JavaScript se refiere a la sintaxis de 
// propagación (spread syntax). Esta sintaxis permite "expandir" o "esparcir" los elementos de un objeto 
// o array en otro objeto o array. 
// Es especialmente útil en React para manejar estados de manera inmutable, 
// lo que es una práctica recomendada para evitar mutaciones directas y problemas derivados de ello.

// Veamos cómo se utiliza en diferentes contextos del código:

// En la Actualización de Estados:
// Cuando se añade una nueva tarea a la lista de tareas:
// setTareas([...tareas, { id: Date.now(), texto: tarea, completada: false }]);
// Aquí, ...tareas es usado para copiar todos los elementos existentes del array tareas en un nuevo array. 
// Luego, se añade un nuevo objeto al final del array. 
// De esta manera, se actualiza el estado de tareas de forma inmutable, 
// añadiendo la nueva tarea sin modificar directamente el array original.

// En la Modificación de Objetos
// Cuando se cambia el estado de completado de una tarea:
// setTareas(tareas.map(tarea => 
//     tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
//   ));

// En este caso, ...tarea se utiliza dentro de un objeto para copiar todas las propiedades del objeto tarea 
// en un nuevo objeto. Luego, se sobrescribe la propiedad completada del nuevo objeto. 
// Esto es especialmente útil cuando quieres modificar una sola propiedad de un objeto sin alterar las demás. 
// Haciendo esto, se garantiza que el objeto original no se modifique, manteniendo la inmutabilidad del estado.

// Beneficios de la Sintaxis de Propagación
// Inmutabilidad: En React, es importante tratar los estados de manera inmutable. 
// Modificar directamente el estado (por ejemplo, añadiendo un elemento a un array o cambiando la propiedad de un objeto) 
// puede llevar a comportamientos inesperados, especialmente en componentes complejos y en la gestión de estados.

// Claridad y Concisión: Usar la sintaxis de propagación puede hacer el código más claro y conciso, 
// evitando la necesidad de funciones más verbosas como Object.assign para objetos, 
// o combinaciones de métodos como slice y concat para arrays.

// Flexibilidad: Permite trabajar de manera más fácil y flexible con objetos y arrays, 
// facilitando operaciones como la combinación de objetos, la adición de elementos a arrays, entre otros.

// En resumen, la sintaxis de propagación ... es una herramienta poderosa en JavaScript y React 
// que facilita la manipulación de datos de manera inmutable, clara y efectiva.

// Una mutación directa se refiere a la acción de modificar un objeto o array existente de manera directa, 
// alterando sus valores o su estructura original sin crear una copia del mismo. 
// En el contexto de la programación, especialmente en frameworks y bibliotecas como React, 
// la mutación directa de estados o props se considera una mala práctica por varias razones.

// Ejemplos de Mutación Directa
// Con Arrays:
// let miArray = [1, 2, 3];
// miArray.push(4); // Esto es una mutación directa

// En este caso, se está añadiendo un elemento directamente al array existente, alterando su contenido original.

// Con Objetos:
// let miObjeto = { nombre: 'Juan', edad: 30 };
// miObjeto.edad = 31; // Esto es una mutación directa
// Aquí se está modificando la propiedad edad del objeto existente, cambiando su valor original.

// Por Qué Evitar la Mutación Directa
// Predecibilidad y Pureza de Funciones: La mutación directa puede llevar a efectos secundarios inesperados, 
// haciendo que el código sea más difícil de entender y prever. 
// Las funciones puras, que no alteran los estados o datos de entrada y siempre retornan el mismo resultado para los mismos argumentos, 
// son más fáciles de rastrear y testear.

// Optimización de Rendimiento en React: React utiliza la comparación de objetos y arrays 
// para determinar si necesita re-renderizar un componente. 
// Si mutas directamente un objeto o array, React podría no detectar el cambio, 
// ya que la referencia al objeto o array no ha cambiado, a pesar de que su contenido sí. Esto puede llevar a que la UI no se actualice correctamente.

// Manejo del Estado Inmutable: En arquitecturas como Redux, se enfatiza la inmutabilidad del estado 
// para asegurar que cada cambio pueda ser trazado, revertido o mantenido de manera clara. 
// La mutación directa va en contra de este principio, complicando el manejo del estado.

// Cómo Evitar Mutaciones Directas
// Para evitar mutaciones directas, se pueden usar métodos que no alteren el objeto o array original 
// sino que creen una copia del mismo con las modificaciones deseadas. Algunos ejemplos incluyen:

// Para Arrays: Métodos como .map(), .filter(), .concat(), y el uso de la sintaxis de propagación (...array) para crear copias y modificaciones de arrays.

// Para Objetos: Utilizar la sintaxis de propagación ({...objeto}) para crear una copia del objeto, 
// o Object.assign({}, objeto, { nuevaPropiedad: valor }) para crear un nuevo objeto con modificaciones.

// Adoptar la inmutabilidad y evitar la mutación directa de datos en JavaScript y React ayuda a mantener el código más limpio, 
// predecible y optimizado, facilitando el mantenimiento y la escalabilidad de las aplicaciones.

