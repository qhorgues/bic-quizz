import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const OrderQuestion = ({ question, orderedOptions, handleDragEnd }) => {
  return (
    <div className="order-question">
      <h3>{question}</h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="droppable-container"
            >
              {orderedOptions.map((option, index) => (
                <Draggable key={option.id} draggableId={option.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="draggable-option"
                    >
                      {option.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default OrderQuestion;
