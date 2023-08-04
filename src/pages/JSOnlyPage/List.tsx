import React, { useRef, useState } from "react";
import Card from "./Card";
import { styled } from "styled-components";
import { ItemProps } from "../../constants/list";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface ListProps {
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

function List(props: ListProps) {
  const { items, setItems } = props;

  const [isDragging, setIsDragging] = useState(false);

  const dragItem = useRef<number | null>(null);
  const dragNode = useRef<any | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    dragItem.current = index;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setIsDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    dragItem.current = null;
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragNode.current = null;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    const currentItem = dragItem.current;

    if (e.target !== dragNode.current) {
      setItems((prev) => {
        let newItems = JSON.parse(JSON.stringify(prev));
        newItems.splice(index, 0, newItems.splice(currentItem, 1)[0]);
        dragItem.current = index;
        return newItems;
      });
    }
  };

  return (
    <Container>
      {items.map((item, index) => (
        <Card
          text={item.text}
          color={item.color}
          index={index}
          key={item.id}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragEnter={(e) => (isDragging ? handleDragEnter(e, index) : null)}
          isDragging={!!dragItem && dragItem.current === index}
        />
      ))}
    </Container>
  );
}

export default List;
