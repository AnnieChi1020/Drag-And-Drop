import React, { useState } from "react";
import List from "./List";
import { styled } from "styled-components";
import { list } from "../../constants/list";

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

function WithButtonsPage() {
  const [items, setItems] = useState(list);

  const handleReset = () => {
    setItems(list);
  };

  return (
    <Container>
      <TopRowContainer>
        <Title>Drag and Drop (Buttons)</Title>
        <Button onClick={handleReset}>Reset</Button>
      </TopRowContainer>
      <List items={items} setItems={setItems} />
    </Container>
  );
}

export default WithButtonsPage;
