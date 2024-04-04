import './App.css'
import { SearchBar } from './Componentes/SearchBar'
import { VideoList } from './Componentes/VideoList'
import { useState } from 'react'
import axios from 'axios'


function App() { 

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  const onTermSubmit = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: apiKey // Reemplaza esto con tu propia API Key
      }
    });

    setVideos(response.data.items);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div>
        <SearchBar onFormSubmit={onTermSubmit} />
        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        {
          selectedVideo && (
            <div>
              <iframe id="ytplayer" type="text/html" width="720" height="405"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                frameBorder="0" allowFullScreen></iframe>
              <h4>{selectedVideo.snippet.title}</h4>
              <p>{selectedVideo.snippet.description}</p>
            </div>
          )
        }

      </div>
    </>
  )
}

export default App

// Este código es para una aplicación React que utiliza la API de YouTube para buscar y mostrar videos. Vamos a desglosarlo paso a paso:

// Importaciones:

// import './App.css': Importa el archivo CSS para aplicar estilos a la aplicación.
// import { SearchBar } from './Componentes/SearchBar' y import { VideoList } from './Componentes/VideoList': 
// Importan dos componentes que presumiblemente forman parte de la aplicación: SearchBar para la barra de búsqueda y VideoList para listar los videos.
// import { useState } from 'react': Importa el Hook useState de React, que permite a la aplicación manejar estado.
// import axios from 'axios': Importa Axios, una biblioteca de cliente HTTP basada en promesas, para facilitar las solicitudes a la API de YouTube.
// Función App:

// La función App es el componente principal de la aplicación.
// Dentro de App, se declaran dos estados usando useState: videos, un arreglo para almacenar los videos obtenidos de la API, y selectedVideo, 
// para almacenar el video seleccionado por el usuario.
// apiKey obtiene su valor de una variable de entorno, que debería contener la clave API para autenticarse con la API de YouTube.
// Funciones:

// onTermSubmit: Es una función asíncrona que se ejecuta cuando el usuario envía un término de búsqueda. Utiliza Axios 
// para hacer una solicitud GET a la API de YouTube, buscando videos basados en el término ingresado. 
// Los parámetros incluyen el término de búsqueda (q), el tipo de datos solicitados (part: 'snippet'), 
// el número máximo de resultados (maxResults), y la clave API. Los resultados se almacenan en el estado videos.
// onVideoSelect: Función que actualiza el estado selectedVideo con el video seleccionado por el usuario.
// Renderizado:

// El componente App devuelve JSX que incluye:
// SearchBar: Componente de la barra de búsqueda. onFormSubmit se pasa como prop, lo que permite que SearchBar 
// ejecute onTermSubmit cuando el usuario envía un término de búsqueda.
// VideoList: Componente que lista los videos. Recibe dos props: videos, la lista de videos a mostrar, y onVideoSelect, 
// la función para manejar la selección de un video.
// Condición para mostrar el video seleccionado: Si hay un selectedVideo, se muestra un <iframe> 
// que carga el video de YouTube seleccionado, junto con su título y descripción.
// Este código proporciona una estructura básica para una aplicación de búsqueda de videos de YouTube, 
// permitiendo a los usuarios buscar videos y seleccionar uno para verlo dentro de la misma página.
