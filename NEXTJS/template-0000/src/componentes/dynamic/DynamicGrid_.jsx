"use client"

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const DynamicGrid_ = () => {
  const [rows, setRows] = useState([{ columns: [{ id: Date.now(), width: 4, color: 'light' }] }]);

  // Función para manejar el fin del arrastre
  const onDragEnd = (result) => {
    const { destination, source } = result;

    // Si no hay destino (se soltó fuera de cualquier droppable), no hacemos nada
    if (!destination) {
      return;
    }

    // Reordenar las filas
    const newRows = Array.from(rows);
    const [removed] = newRows.splice(source.index, 1);
    newRows.splice(destination.index, 0, removed);

    setRows(newRows);
  };
  
  const addRow = () => {
    setRows([...rows, { columns: [{ id: Date.now(), width: 4, color: 'light' }] }]);
  };

  const addRowInBetween = (rowIndex) => {
    const newRow = { columns: [{ id: Date.now(), width: 4, color: 'light' }] };
    const updatedRows = [...rows.slice(0, rowIndex + 1), newRow, ...rows.slice(rowIndex + 1)];
    setRows(updatedRows);
  };

  const deleteRow = (rowIndex) => {
    const updatedRows = rows.filter((_, index) => index !== rowIndex);
    setRows(updatedRows);
  };

  const addColumn = (rowIndex) => {
    const newRows = [...rows];
    const row = newRows[rowIndex];
    const currentTotalWidth = row.columns.reduce((acc, column) => acc + column.width, 0);
    if (currentTotalWidth < 12) { // Solo permite agregar si el ancho total es menor que 12
      row.columns.push({ id: Date.now(), width: 1, color: 'light' }); // Suponiendo que quieres añadir columnas de ancho 1
      setRows(newRows);
    }
  };

  const deleteColumn = (rowIndex, columnIndex) => {
    const newRows = [...rows];
    const row = newRows[rowIndex];
    row.columns = row.columns.filter((_, index) => index !== columnIndex);
    setRows(newRows);
  };

  const adjustColumnWidth = (rowIndex, columnIndex, adjustment) => {
    const newRows = [...rows];
    const row = newRows[rowIndex];
    const column = row.columns[columnIndex];
    let newWidth = column.width + adjustment;

    const currentTotalWidth = row.columns.reduce((acc, column) => acc + column.width, 0);
    const futureTotalWidth = currentTotalWidth - column.width + newWidth;

    // Asegúrate de que la nueva anchura esté dentro de los límites y el total futuro no supere 12
    if (newWidth >= 1 && newWidth <= 12 && futureTotalWidth <= 12) {
      column.width = newWidth;
      setRows(newRows);
    }
  };

  const changeColor = (rowIndex, columnIndex) => {
    const newRows = [...rows];
    const column = newRows[rowIndex].columns[columnIndex];
    column.color = column.color === 'light' ? 'info' : 'light';
    setRows(newRows);
  };

  const exportToHTML = () => {
    let html = `<!DOCTYPE html>
  <html lang="es">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Exportado</title>
  <!-- Referencia a Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
  <div class="container">\n`;

    rows.forEach((row, rowIndex) => {
      html += `  <div class="row">\n`;
      row.columns.forEach((column, columnIndex) => {
        html += `    <div class="col-${column.width} p-2 border text-center bg-${column.color}">\n`;
        html += `      Fila ${rowIndex + 1}, Columna ${columnIndex + 1} - Ancho: ${column.width}\n`;
        html += `    </div>\n`;
      });
      html += `  </div>\n`;
    });

    html += `</div>
  </body>
  </html>`;

    // Crear un Blob con el HTML
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Crear un enlace temporal para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grid.html'; // Nombre del archivo a descargar
    document.body.appendChild(a); // Añadir el enlace al documento para hacerlo "clicable"
    a.click(); // Simular un click en el enlace para iniciar la descarga

    // Limpiar creando un breve delay para asegurar la descarga
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url); // Liberar el objeto URL creado
    }, 0);
  };

  return (
    <div className="container mt-3">
      <button onClick={addRow} className="btn btn-primary mb-1">+R</button>
      <button onClick={exportToHTML} className="btn btn-success mb-1">Exportar a HTML</button>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-0">
          <div className="row align-items-center" style={{ marginBottom: '5px' }}>
            {row.columns.map((column, columnIndex) => (
              <div key={column.id} className={`col-${column.width} border text-center bg-${column.color} p-2 position-relative`} style={{ padding: '.25rem .4rem', fontSize: '.75rem', lineHeight: '1', borderRadius: '.2rem' }}>
                <div className="btn-group mt-1">
                  <button onClick={() => adjustColumnWidth(rowIndex, columnIndex, -1)} className="btn btn-secondary"
                    style={{ padding: "0.5rem 0.4rem", fontSize: "0.5rem", lineHeight: "0.5", borderRadius: "0.1rem" }}>
                    -
                  </button>
                  <button onClick={() => adjustColumnWidth(rowIndex, columnIndex, 1)} className="btn btn-secondary btn-xs"
                    style={{ padding: "0.5rem 0.4rem", fontSize: "0.5rem", lineHeight: "0.5", borderRadius: "0.1rem" }}>
                    +
                  </button>
                  <span style={{ fontSize: "0.75rem", padding: "0 0.4rem" }}>{column.width}</span>
                  <button onClick={() => deleteColumn(rowIndex, columnIndex)} className="btn btn-danger btn-xs"
                    style={{ padding: "0.5rem 0.4rem", fontSize: "0.5rem", lineHeight: "0.5", borderRadius: "0.1rem" }}>
                    X
                  </button>
                  {columnIndex === row.columns.length - 1 && (
                    <>
                      <button onClick={() => deleteRow(rowIndex)} className="btn btn-danger btn-xs"
                        style={{ padding: "0.5rem 0.4rem", fontSize: "0.5rem", lineHeight: "0.5", borderRadius: "0.1rem" }}>
                        -R
                      </button>
                      <button onClick={() => addRowInBetween(rowIndex)} className="btn btn-info btn-xs"
                        style={{ padding: "0.5rem 0.4rem", fontSize: "0.5rem", lineHeight: "0.5", borderRadius: "0.1rem" }}>
                        +R
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
            {row.columns.reduce((acc, column) => acc + column.width, 0) < 12 && (
              <button onClick={() => addColumn(rowIndex)} className="btn btn-primary btn-sm mt-2" style={{ padding: '.25rem .4rem', fontSize: '.75rem', lineHeight: '1', borderRadius: '.2rem' }}>+C</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );  
};