import React from "react";
import styled from "styled-components";

const Container = styled.div<{
  $backgroundColor: string;
}>`
  min-height: 40px;
  border-radius: 8px;
  padding: 12px;
  cursor: move;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  text-align: center;
`;

interface CardProps {
  text: string;
  color: string;
}

const Card = (props: CardProps) => {
  const { text, color } = props;

  return (
    <Container $backgroundColor={color}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Card;
