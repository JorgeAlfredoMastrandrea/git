"use client"

import React, { useState, useCallback } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import 'bootstrap/dist/css/bootstrap.min.css';

const ROW_TYPE = 'row';

const DraggableRow = ({ index, moveRow, children }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: ROW_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Mueve la fila solo cuando el cursor pasa la mitad de la fila objetivo
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ROW_TYPE,
    item: () => ({ index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="row align-items-center"
      style={{
        background: isDragging ? 'yellow' : 'transparent', // Cambia el color de fondo cuando se arrastra
        cursor: 'grab'
      }}
    >
      {children}
    </div>
  );
};


export const DynamicGrid_copy = () => {

  const [rows, setRows] = useState([{ columns: [{ id: Date.now(), width: 4, color: 'light' }] }]);
  const [hoveredColumn, setHoveredColumn] = useState({ rowIndex: null, columnIndex: null });
  const [draggedRowIndex, setDraggedRowIndex] = useState(null);
  const [editingRowIndex, setEditingRowIndex] = useState(null);


  // // Antes de la función return en tu componente
  // const handleDragStart = (e, index) => {
  //   setDraggedRowIndex(index);
  //   // Aquí puedes añadir más lógica si es necesario
  // };

  // const handleDragEnd = (e) => {
  //   setDraggedRowIndex(null);
  //   // Aquí puedes añadir más lógica si es necesario
  // };


  const moveRow = useCallback((dragIndex, hoverIndex) => {
    const dragRow = rows[dragIndex];
    setRows(update(rows, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragRow],
      ],
    }));
  }, [rows]);


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
      // Utiliza la altura de la fila si está definida, o usa una altura predeterminada (e.g., 50px)
      const rowStyle = row.height ? `style="height: ${row.height}px;"` : 'style="height: 50px;"';
      html += `  <div class="row" ${rowStyle}>\n`;
      row.columns.forEach((column, columnIndex) => {
        // Asume que el ancho de columna es el mismo para todos los tamaños de pantalla por simplicidad
        // Modificar aquí según necesidades específicas de diseño responsive
        const responsiveWidth = `col-12 col-sm-${column.width} col-md-${column.width} col-lg-${column.width} col-xl-${column.width}`;
        html += `    <div class="${responsiveWidth} p-2 border text-center bg-${column.color}" style="min-height: 100%; height: 100%;">\n`;
        // Línea eliminada que añadía texto a cada columna
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



  // Función para ajustar la altura de la fila
  const adjustRowHeight = (rowIndex, delta) => {
    const newRows = [...rows];
    const newHeight = (newRows[rowIndex].height || 50) + delta;
    newRows[rowIndex].height = newHeight > 30 ? newHeight : 30; // Asegura un mínimo de 30px de altura.
    setRows(newRows);
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-3">
        <button onClick={addRow} className="btn btn-primary mb-1 btn-xs">+R</button>
        <button onClick={exportToHTML} className="btn btn-success mb-1 btn-xs">Exportar a HTML</button>
        {rows.map((row, rowIndex) => (
          <DraggableRow
            key={rowIndex}
            index={rowIndex}
            moveRow={moveRow}
            isEditing={editingRowIndex === rowIndex}
            setEditingRowIndex={setEditingRowIndex}
          >
            <div key={rowIndex} className="mb-0">
              <div
                className={`row align-items-center ${draggedRowIndex === rowIndex ? 'dragged-row' : ''}`}
                style={{ marginBottom: '0px', height: `${row.height || 50}px` }}
              >
                {row.columns.map((column, columnIndex) => (
                  <div
                    key={column.id}
                    className={`col-${column.width} border text-center bg-${column.color} p-2 position-relative grid-cell`}
                    style={{ height: '100%' }}
                    onMouseEnter={() => setHoveredColumn({ rowIndex, columnIndex })}
                    onMouseLeave={() => setHoveredColumn({ rowIndex: null, columnIndex: null })}
                  >
                    {columnIndex === 0 && hoveredColumn.rowIndex === rowIndex && (
                      <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', gap: '2px', backgroundColor: 'white', padding: '5px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.2)', zIndex: 10 }}>
                        <button onClick={() => adjustRowHeight(rowIndex, -10)} className="btn btn-secondary btn-xs">-</button>
                        <button onClick={() => adjustRowHeight(rowIndex, 10)} className="btn btn-secondary btn-xs">+</button>
                      </div>
                    )}
                    {hoveredColumn.rowIndex === rowIndex && hoveredColumn.columnIndex === columnIndex && (
                      <div style={{ position: 'absolute', top: 5, right: 5, display: 'flex', flexDirection: 'column', gap: '2px', backgroundColor: 'white', padding: '5px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.2)', zIndex: 10 }}>
                        <button onClick={() => adjustColumnWidth(rowIndex, columnIndex, -1)} className="btn btn-secondary btn-xs">-</button>
                        <button onClick={() => adjustColumnWidth(rowIndex, columnIndex, 1)} className="btn btn-secondary btn-xs">+</button>
                        <button onClick={() => deleteColumn(rowIndex, columnIndex)} className="btn btn-danger btn-xs">X</button>
                        {columnIndex === row.columns.length - 1 && (
                          <>
                            <button onClick={() => deleteRow(rowIndex)} className="btn btn-danger btn-xs">-R</button>
                            <button onClick={() => addRowInBetween(rowIndex)} className="btn btn-info btn-xs">+R</button>
                          </>
                        )}
                        {row.columns.reduce((acc, column) => acc + column.width, 0) < 12 && columnIndex === row.columns.length - 1 && (
                          <button onClick={() => addColumn(rowIndex)} className="btn btn-primary btn-xs">+C</button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </DraggableRow>
        ))}
      </div>
    </DndProvider>
  );
};