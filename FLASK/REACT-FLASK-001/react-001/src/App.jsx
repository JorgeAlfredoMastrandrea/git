import { useState  , useEffect} from 'react'

function App() {

  const [mensajeDesdeFlask, setMensajeDesdeFlask] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ejecutar-funcion');
      const data = await response.json();
      setMensajeDesdeFlask(data.mensaje);
    } catch (error) {
      console.error('Error al llamar a la función de Flask:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Realiza la primera solicitud al cargar el componente

    const pollingInterval = setInterval(() => {
      fetchData(); // Realiza la solicitud periódicamente
    }, 1000); // Intervalo de 5 segundos (ajusta según sea necesario)

    return () => clearInterval(pollingInterval); // Limpia el intervalo al desmontar el componente
  }, []);
  
  return (
    <>
      <div>
        <p>hola Mensaje desde Python: {mensajeDesdeFlask}</p>
      </div>
        

      
    </>
  )
}

export default App
