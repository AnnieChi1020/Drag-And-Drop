import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ItemProps } from ".";
import { styled } from "styled-components";
import Card from "./Card";
import { types } from "../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface ListProps {
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

const List = (props: ListProps) => {
  const { items, setItems } = props;

  const reorder = (list: ItemProps[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={types.CARD}>
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {items.map(({ id, text, color }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    <Card text={text} color={color} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
