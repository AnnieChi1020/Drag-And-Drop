import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  padding: 12px;
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { text } = props;

  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Card;
