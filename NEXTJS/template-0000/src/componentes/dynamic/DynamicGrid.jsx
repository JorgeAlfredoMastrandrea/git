"use client"



import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'bootstrap/dist/css/bootstrap.min.css';

export const DynamicGrid = () => {
  const [rows, setRows] = useState([{ columns: [{ id: Date.now(), width: 4, color: 'light' }] }]);

  // Función para manejar el fin del arrastre
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const newRows = Array.from(rows);
    const [removed] = newRows.splice(source.index, 1);
    newRows.splice(destination.index, 0, removed);

    setRows(newRows);
  };

  // Resto de tus funciones...

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mt-3">
        <button onClick={addRow} className="btn btn-primary mb-1">+R</button>
        <button onClick={exportToHTML} className="btn btn-success mb-1">Exportar a HTML</button>
        <Droppable droppableId="droppable-rows" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {rows.map((row, rowIndex) => (
                <Draggable key={rowIndex} draggableId={`row-${rowIndex}`} index={rowIndex}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <div className="row align-items-center" style={{ marginBottom: '5px' }}>
                        {/* Agregar un handle para arrastrar la fila. Colócalo al inicio de la fila. */}
                        <div {...provided.dragHandleProps} className="col-auto">
                          <span className="btn btn-light btn-sm">&#x2630;</span>
                        </div>
                        {/* Contenido de la fila */}
                        {row.columns.map((column, columnIndex) => (
                          // Contenido existente de tus columnas...
                        ))}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
};
