"use client"

import React, { useState } from 'react';

export const DynamicLayout = () => {
  // Estado inicial con una fila y una columna de ejemplo
  const [layout, setLayout] = useState([
    { id: 1, columns: [{ id: 1, content: 'Columna 1' }] },
  ]);

  // Función para agregar una nueva fila
  const addRow = () => {
    const newRow = { id: layout.length + 1, columns: [] };
    setLayout([...layout, newRow]);
  };

  // Función para agregar una columna a una fila específica
  const addColumn = (rowId) => {
    const newLayout = layout.map((row) => {
      if (row.id === rowId) {
        const newColumn = { id: row.columns.length + 1, content: `Nueva Columna` };
        return { ...row, columns: [...row.columns, newColumn] };
      }
      return row;
    });
    setLayout(newLayout);
  };

  // Función para actualizar el contenido de una columna
  const updateColumnContent = (rowId, columnId, content) => {
    const newLayout = layout.map((row) => {
      if (row.id === rowId) {
        const newColumns = row.columns.map((column) => {
          if (column.id === columnId) {
            return { ...column, content };
          }
          return column;
        });
        return { ...row, columns: newColumns };
      }
      return row;
    });
    setLayout(newLayout);
  };

  const exportToJson = () => {
    const jsonString = JSON.stringify(layout, null, 2); // Convierte el estado a JSON
    const blob = new Blob([jsonString], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = "layout.json"; // Nombre del archivo para descargar
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <div>
      <button onClick={addRow}>Agregar Fila</button>
      <button onClick={exportToJson}>Exportar a JSON</button>
      {layout.map((row) => (
        <div key={row.id} className="row">
          {row.columns.map((column) => (
            <div key={column.id} className="col">
              <input
                type="text"
                value={column.content}
                onChange={(e) => updateColumnContent(row.id, column.id, e.target.value)}
              />
              <button onClick={() => addColumn(row.id)}>Agregar Columna</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


