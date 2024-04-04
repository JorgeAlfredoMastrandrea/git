import React, { useState } from 'react';

export const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    );
}

// Este código define un componente React funcional llamado SearchBar, que es una barra de búsqueda diseñada 
// para permitir al usuario ingresar términos de búsqueda. 
// Este componente es probablemente utilizado en conjunto con el componente App que comentamos anteriormente. Vamos a desglosarlo:

// Importaciones:

// import React, { useState } from 'react';: Importa React y el Hook useState desde la biblioteca de React. 
// useState se usa para manejar el estado dentro de componentes funcionales.
// Componente SearchBar:

// Este componente acepta una prop onFormSubmit, que es una función proporcionada por el componente padre (App) 
// que se llamará cuando se envíe el formulario.
// Estado term:

// Se declara un estado llamado term mediante el hook useState, inicializado con una cadena vacía (''). 
// Este estado se utiliza para almacenar el valor actual del campo de entrada de texto donde el usuario escribe su término de búsqueda.
// Manejador de Envío (onSubmit):

// Se define una función onSubmit que se ejecuta cuando el formulario se envía. Esta función recibe un evento event como argumento.
// event.preventDefault(): Evita el comportamiento predeterminado del formulario al enviarlo, que normalmente recargaría la página.
// onFormSubmit(term): Llama a la función onFormSubmit proporcionada por el componente padre 
// y le pasa el término de búsqueda actual (term). Esta es la manera en que SearchBar comunica el término de búsqueda seleccionado de vuelta al componente padre.
// Renderizado:

// El componente devuelve JSX que incluye un formulario (<form>) con un campo de entrada (<input>) donde el usuario puede escribir su término de búsqueda.
// El atributo value del campo de entrada está vinculado al estado term, asegurando que el campo de entrada sea controlado por React y su valor siempre refleje el estado term.
// El evento onChange del campo de entrada se maneja con una función que actualiza el estado term 
// con el valor actual del campo de entrada cada vez que el usuario escribe algo. Esto se logra llamando a setTerm(event.target.value).
// Cuando el formulario se envía (por ejemplo, al presionar Enter o al activar un botón de envío, si estuviera presente), se llama a la función onSubmit.
// En resumen, SearchBar es un componente de barra de búsqueda que permite al usuario ingresar un término de búsqueda. 
// Cuando se envía el formulario, el componente notifica al componente padre sobre el término de búsqueda, 
// permitiendo al componente padre tomar la acción correspondiente, como realizar una búsqueda de videos basada en ese término.
