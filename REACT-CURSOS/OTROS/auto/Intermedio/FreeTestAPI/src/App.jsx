import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await axios.get('https://freetestapi.com/api/v1/products');
        setProductos(respuesta.data);
      } catch (error) {
        console.error('Hubo un error al obtener los productos: ', error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <>
      <div className="productos">
        {productos.map(producto => (
          <div key={producto.id} className="producto">
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>
            <p><strong>Precio:</strong> ${producto.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

