import React from "react";
import styled from "styled-components";

const Container = styled.div<{
  $backgroundColor: string;
}>`
  min-height: 200px;
  border-radius: 8px;
  padding: 24px;
  cursor: move;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

interface CardProps {
  text: string;
  index: number;
  color: string;
  handleMoveUp: (index: number) => void;
  handleMoveDown: (index: number) => void;
}

function Card(props: CardProps) {
  const { text, index, color, handleMoveUp, handleMoveDown } = props;

  return (
    <Container $backgroundColor={color} className="card">
      <Text>{text}</Text>
      <ButtonsContainer>
        <Button onClick={() => handleMoveUp(index)}>Up</Button>
        <Button onClick={() => handleMoveDown(index)}>Down</Button>
      </ButtonsContainer>
    </Container>
  );
}

export default Card;
