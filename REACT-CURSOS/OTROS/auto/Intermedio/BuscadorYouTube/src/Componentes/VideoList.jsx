import React from 'react'
import { VideoItem } from './VideoItem';

export const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
    });

    return <div>{renderedVideos}</div>;
}

// VideoList Component
// Este componente toma la lista de videos y utiliza VideoItem para mostrar cada uno.

// Este código define otro componente React funcional llamado VideoList. 
// Su propósito es renderizar una lista de videos, utilizando el componente VideoItem para cada video individual. Aquí te detallo cómo funciona:

// Estructura y Props:

// VideoList recibe dos props: videos, que es un arreglo de objetos de video, y onVideoSelect, 
// que es una función pasada desde el componente padre. Esta función se utiliza para manejar la selección de un video por el usuario.
// Mapeo de Videos:

// Dentro del componente, se utiliza el método map sobre el arreglo videos para transformar cada objeto de video en un elemento VideoItem.
// Cada VideoItem recibe un key único, que es una buena práctica en React para ayudar al algoritmo de reconciliación 
// a identificar elementos únicos en listas y optimizar el rendimiento. Aquí, el key es video.id.videoId, suponiendo que cada video tiene un ID único.
// Además, cada VideoItem recibe el objeto de video actual (video) y la función onVideoSelect como props. 
// Esto significa que cada video en la lista es clickeable y puede informar al componente padre cuando es seleccionado, gracias a la propagación de la función onVideoSelect.
// Renderizado de la Lista:

// El componente VideoList devuelve un div que contiene el arreglo renderedVideos. 
// Este arreglo es el resultado del mapeo anterior y representa los componentes VideoItem para cada video en la lista.
// Básicamente, este componente actúa como un contenedor para los elementos individuales VideoItem, organizándolos en una lista visual en la UI.
// En resumen, VideoList es un componente que toma un conjunto de datos de videos y los muestra en una lista, 
// utilizando el componente VideoItem para representar cada video individualmente. 
// Es una parte esencial de cualquier aplicación que necesite mostrar múltiples videos de manera organizada, 
// como una aplicación que busca y muestra resultados de videos de YouTube.
