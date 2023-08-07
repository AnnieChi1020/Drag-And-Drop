import React from "react";
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

  const handleMoveUp = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (index === 0) return;

    setItems((prev) => {
      const newItems = JSON.parse(JSON.stringify(prev));
      const movedItem = newItems.splice(index, 1)[0];
      newItems.splice(index - 1, 0, movedItem);
      return newItems;
    });

    const cards = document.querySelectorAll(".card");

    window.scrollTo({
      top: cards[index - 1].getBoundingClientRect().top + window.scrollY,
    });
  };

  const handleMoveDown = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (index === items.length - 1) return;

    setItems((prev) => {
      const newItems = JSON.parse(JSON.stringify(prev));
      const movedItem = newItems.splice(index, 1)[0];
      newItems.splice(index + 1, 0, movedItem);
      return newItems;
    });

    const cards = document.querySelectorAll(".card");

    window.scrollTo({
      top: cards[index + 1].getBoundingClientRect().top + window.scrollY,
    });
  };

  return (
    <Container>
      {items.map((item, index) => (
        <Card
          text={item.text}
          color={item.color}
          key={item.id}
          index={index}
          handleMoveUp={handleMoveUp}
          handleMoveDown={handleMoveDown}
        />
      ))}
    </Container>
  );
}

export default List;
