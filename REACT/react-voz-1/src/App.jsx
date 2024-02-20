import React, { useState, useEffect } from 'react';

function App() {
  const [textoAnalizado, setTextoAnalizado] = useState('');
  const [textoReconocido, setTextoReconocido] = useState('');
  const [textoComparado, setTextoComparado] = useState('');

  const analizarTexto = (texto) => {
    // Convertir el texto a mayúsculas antes de analizarlo
    setTextoAnalizado(texto.toUpperCase());
  };

  const mostrarTextoReconocido = (texto) => {
    // Convertir el texto a mayúsculas antes de mostrarlo
    setTextoReconocido(texto.toUpperCase());
    // Comparar con el texto ingresado por el usuario
    compararTextos(texto.toUpperCase(), textoComparado);
  };

  const compararTextos = (textoReconocido, textoUsuario) => {
    // Comparar textos en mayúsculas
    console.log('Comparación:', textoReconocido === textoUsuario.toUpperCase());
  };

  const handleTextoUsuarioChange = (event) => {
    const textoUsuario = event.target.value.toUpperCase();
    setTextoComparado(textoUsuario);
    compararTextos(textoReconocido, textoUsuario);
  };

  const limpiarTexto = () => {
    setTextoComparado('');
    setTextoAnalizado('');
    setTextoReconocido('');
  };

  return (
    <div>
      <h1>Speech Recognition App</h1>
      <div>
        <h2>Texto Analizado</h2>
        <p>{textoAnalizado}</p>
      </div>
      <div>
        <h2>Texto Reconocido</h2>
        <p>{textoReconocido}</p>
      </div>
      <div>
        <h2>Comparación</h2>
        <p>{textoReconocido === textoComparado ? 'Coincide' : 'No coincide'}</p>
      </div>
      <div>
        <label>
          Texto Usuario:
          <input type="text" value={textoComparado} onChange={handleTextoUsuarioChange} />
        </label>
        <button onClick={limpiarTexto}>Limpiar</button>
      </div>
      <SpeechRecognitionComponent onTextAnalyzed={analizarTexto} onTextRecognized={mostrarTextoReconocido} />
    </div>
  );
}

function SpeechRecognitionComponent({ onTextAnalyzed, onTextRecognized }) {
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    let recognitionInstance;
  
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognitionInstance = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
      recognitionInstance.lang = 'es-ES';
      
      // Obtener resultados provisionales durante el reconocimiento
      recognitionInstance.interimResults = true;
      
      // Obtener hasta 5 alternativas de resultados
      recognitionInstance.maxAlternatives = 5;
  
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Texto reconocido:', transcript);
  
        onTextAnalyzed(transcript);
        onTextRecognized(transcript);
      };
  
      recognitionInstance.onerror = (event) => {
        console.error('Error en el reconocimiento de voz:', event.error);
      };
  
      setRecognition(recognitionInstance);
    } else {
      console.error('El navegador no admite la API de reconocimiento de voz.');
    }
  
    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop();
      }
    };
  }, [onTextAnalyzed, onTextRecognized]);





  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    } else {
      console.error('El reconocimiento de voz no está disponible.');
    }
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div>
      <h2>Componente de Reconocimiento de Voz</h2>
      <button onMouseDown={startRecognition} onMouseUp={stopRecognition}>
        Iniciar Reconocimiento de Voz
      </button>
    </div>
  );
}

export default App;

