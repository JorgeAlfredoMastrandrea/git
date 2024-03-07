"use client"
import React from 'react'
import { useState } from 'react';


export const DynamicGrid = () => {
    const [rows, setRows] = useState([{ columns: [{}] }]); // Estado inicial con 1 fila y 1 columna

  const addRow = () => {
    setRows([...rows, { columns: [{}] }]);
  };

  const addColumn = (rowIndex) => {
    const newRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, columns: [...row.columns, {}] };
      }
      return row;
    });
    setRows(newRows);
  };

  // Función para eliminar una fila específica
  const deleteRow = (rowIndex) => {
    const newRows = rows.filter((_, index) => index !== rowIndex);
    setRows(newRows);
  };

  const generateHtml = () => {
    let html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">\n</head>\n<body>\n<div class="container">\n';
    rows.forEach((row, rowIndex) => {
      html += '  <div class="row">\n';
      row.columns.forEach((_, columnIndex) => {
        html += `    <div class="col border text-center" style="padding: 10px;">Fila ${rowIndex + 1}, Columna ${columnIndex + 1}</div>\n`;
      });
      html += '  </div>\n';
    });
    html += '</div>\n</body>\n</html>';
    return html;
  };

  const exportHtml = () => {
    const html = generateHtml();
    const blob = new Blob([html], { type: 'text/html' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'grid-layout.html'; // Nombre del archivo para descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mt-3">
      <div className="mb-2">
        <button className="btn btn-primary me-2" onClick={addRow}>Agregar Fila</button>
        <button className="btn btn-info me-2" onClick={exportHtml}>Exportar a HTML</button>
      </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-2 d-flex align-items-center">
          <div>
            {row.columns.map((_, columnIndex) => (
              <span key={columnIndex} className="me-2">
                Fila {rowIndex + 1}, Columna {columnIndex + 1}
              </span>
            ))}
            <button className="btn btn-secondary ms-2" onClick={() => addColumn(rowIndex)}>Agregar Columna</button>
          </div>
          <button className="btn btn-danger ms-2" onClick={() => deleteRow(rowIndex)}>Eliminar Fila</button>
        </div>
      ))}
      <h5 className="mt-3">Vista Previa</h5>
      <div dangerouslySetInnerHTML={{ __html: generateHtml() }} />
    </div>
  );
};