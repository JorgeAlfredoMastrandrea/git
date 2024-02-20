
import React, { useEffect } from 'react';
import compromise from 'compromise';

export const SpeechRecognitionComponent = ({ onTextAnalyzed }) => {
  useEffect(() => {
    let recognition;

    // Comprobar si el navegador es compatible con la API de reconocimiento de voz
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

      recognition.lang = 'es-ES';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Texto reconocido:', transcript);

        // Enviar el texto reconocido al componente principal para su análisis
        onTextAnalyzed(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Error en el reconocimiento de voz:', event.error);
      };
    } else {
      console.error('El navegador no admite la API de reconocimiento de voz.');
    }

    return () => {
      // Detener el reconocimiento cuando el componente se desmonta
      if (recognition) {
        recognition.stop();
      }
    };
  }, [onTextAnalyzed]);

  const startRecognition = () => {
    // Iniciar el reconocimiento de voz
    if (recognition) {
      recognition.start();
    }
  };

  return (
    <div>
      <h2>Componente de Reconocimiento de Voz</h2>
      <button onClick={startRecognition}>Iniciar Reconocimiento de Voz</button>
    </div>
  );
}
