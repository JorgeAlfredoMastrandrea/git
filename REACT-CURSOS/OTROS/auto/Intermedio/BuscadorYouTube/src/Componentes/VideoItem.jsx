import React from 'react'

export const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div>
                <div>{video.snippet.title}</div>
            </div>
        </div>
    );
}

// VideoItem Component
// Este componente es responsable de mostrar la información de un solo video, como el título y la miniatura.

// Este código define un componente React funcional llamado VideoItem, diseñado para representar un solo video en una lista de resultados de búsqueda, 
// por ejemplo, en una aplicación que consume la API de YouTube para mostrar videos basados en términos de búsqueda. Veamos en detalle:

// Estructura del Componente:

// El componente VideoItem recibe dos props: video, que contiene los detalles de un video específico, 
// y onVideoSelect, que es una función pasada desde un componente padre (probablemente el componente App que mencionamos anteriormente) 
// y se usa para manejar el evento de seleccionar un video.
// Renderizado:

// El componente devuelve JSX compuesto por un contenedor div que envuelve una imagen (<img>) y otro div para el título del video.
// La imagen del video se obtiene de video.snippet.thumbnails.medium.url, que es la URL del thumbnail (imagen previa) 
// del video en una resolución media, según la estructura de datos proporcionada por la API de YouTube.
// El alt de la imagen se establece como video.snippet.title para proporcionar accesibilidad y SEO, describiendo el contenido de la imagen con el título del video.
// Se muestra el título del video dentro de un div, que también toma su valor de video.snippet.title.
// Interactividad:

// El contenedor div exterior tiene un evento onClick asociado, el cual se activa cuando el usuario hace clic en cualquier parte del elemento VideoItem.
// Al hacer clic, se ejecuta la función onVideoSelect(video), pasando el objeto video actual como argumento. 
// Esta acción es una forma de notificar al componente padre que el usuario ha seleccionado este video específico, 
// lo que podría llevar, por ejemplo, a que el video se muestre en un reproductor en la misma página.
// En resumen, VideoItem es un componente que sirve como representación visual de un video individual. 
// Proporciona una forma interactiva de mostrar una imagen previa y el título del video, 
// y permite al usuario seleccionar ese video para una acción posterior, como reproducirlo o mostrar más detalles. 
// Este tipo de componente es útil en interfaces donde se listan múltiples videos 
// y se necesita una forma compacta y eficiente de presentar información clave sobre cada uno.