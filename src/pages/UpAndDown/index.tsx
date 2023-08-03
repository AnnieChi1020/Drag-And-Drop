import React, { useState } from "react";
import List from "./List";
import { styled } from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
  id: number;
  text: string;
  color: string;
}

const list: ItemProps[] = [
  { id: 1, text: "Item 1", color: "#DE3730 " },
  { id: 2, text: "Item 2", color: "#FA8C16" },
  { id: 3, text: "Item 3", color: "#FFEC3D" },
  { id: 4, text: "Item 4", color: "#2ABF6B" },
  { id: 5, text: "Item 5", color: "#00CCB4" },
  { id: 6, text: "Item 6", color: "#1890FF " },
  { id: 7, text: "Item 7", color: "#9254DE" },
  { id: 8, text: "Item 8", color: "#A6B7C4" },
];

function UpAndDown() {
  const [items, setItems] = useState(list);

  const handleReset = () => {
    setItems(list);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <TopRowContainer>
          <Title>Drag and Drop (react-dnd)</Title>
          <Button onClick={handleReset}>Reset</Button>
        </TopRowContainer>
        <List items={items} setItems={setItems} />
      </Container>
    </DndProvider>
  );
}

export default UpAndDown;
