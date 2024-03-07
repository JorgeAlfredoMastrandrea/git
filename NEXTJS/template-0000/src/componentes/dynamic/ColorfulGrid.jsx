import React from 'react'

export const ColorfulGrid = () => {
  // Definimos un array con los colores para nuestras columnas
  const colors = ['primary', 'secondary', 'success', 'danger'];

  return (
    <div className="container">
      <div className="row">
        {colors.map((color, index) => (
          <div key={index} className={`col bg-${color} text-white text-center p-4`}>
            Columna {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
