import React from 'react'
import { useState } from 'react'

export const Contador = () => {
    const [contador, setContador] = useState(0);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    )
}

// En este caso, hemos añadido un objeto de estilo directamente a la propiedad style del <div> contenedor. Los estilos aplicados son:
// display: 'flex': Esto convierte al contenedor en un flex container, 
// haciendo que sus hijos (los botones y el <h2>) se comporten como flex items. 
// Por defecto, esto los alinea horizontalmente porque la dirección del flex contenedor es row por defecto.
// alignItems: 'center': Esto centra verticalmente los elementos hijos en el contenedor.
// justifyContent: 'center': Esto centra horizontalmente los elementos hijos en el contenedor, 
// pero dado que queremos que estén alineados uno al lado del otro y ya lo están por la naturaleza de flexbox, 
// este estilo podría ajustarse o incluso omitirse dependiendo del diseño exacto que busques. 
// En este caso, ayuda a mantener los elementos centrados en el contenedor si el contenedor es más ancho que la suma de los anchos de sus hijos.
// gap: '20px': Esto asegura que haya un espacio de 20 píxeles entre cada elemento hijo.
// Este código hará que el botón de "Incrementar", el contador y el botón de "Decrementar" 
// se alineen horizontalmente en el centro del <div> contenedor. 
// Puedes ajustar los valores según tus necesidades, por ejemplo, cambiando el gap para aumentar o disminuir el espacio entre los elementos.
