import { nanoid } from "nanoid";
import React, { useState } from "react";
import { styled } from "styled-components";
import List from "./List";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  font-family: Helvetica, "PingFang TC", "微軟正黑體", sans-serif;
`;

const TopRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 24px 0;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 32px;
  text-align: center;
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  cursor: pointer;
`;

export interface ItemProps {
  id: string;
  text: string;
  color: string;
}

const list: ItemProps[] = [
  { id: nanoid(), text: "Item 1", color: "#F65F55" },
  { id: nanoid(), text: "Item 2", color: "#FFA940" },
  { id: nanoid(), text: "Item 3", color: "#FFC53D" },
  { id: nanoid(), text: "Item 4", color: "#FADB14" },
  { id: nanoid(), text: "Item 5", color: "#4ECC80" },
  { id: nanoid(), text: "Item 6", color: "#05ADA2" },
  { id: nanoid(), text: "Item 7", color: "#449DFC" },
  { id: nanoid(), text: "Item 8", color: "#9254DE" },
];

const JSOnlyPage = () => {
  const [items, setItems] = useState(list);

  const handleReset = () => {
    setItems(list);
  };
  return (
    <Container>
      <TopRowContainer>
        <Title>Drag and Drop (JS only)</Title>
        <Button onClick={handleReset}>Reset</Button>
      </TopRowContainer>
      <List items={items} setItems={setItems} />
    </Container>
  );
};

export default JSOnlyPage;
