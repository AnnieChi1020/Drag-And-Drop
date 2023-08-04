import React, { useCallback } from "react";
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

  const moveListItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragItem = items[dragIndex];
      const hoverItem = items[hoverIndex];
      setItems((items) => {
        const updatedItems = [...items];
        updatedItems[dragIndex] = hoverItem;
        updatedItems[hoverIndex] = dragItem;
        return updatedItems;
      });
    },
    [items]
  );

  return (
    <Container>
      {items.map((item, index) => (
        <Card
          text={item.text}
          color={item.color}
          key={item.id}
          moveListItem={moveListItem}
          index={index}
        />
      ))}
    </Container>
  );
}

export default List;
