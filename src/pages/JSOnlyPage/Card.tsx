import React from "react";
import styled from "styled-components";

const Container = styled.div<{
  $backgroundColor: string;
  $isDragging: boolean;
}>`
  min-height: 40px;
  border-radius: 8px;
  padding: 12px;
  cursor: move;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)}; */
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
  index: number;
  isDragging: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragEnd: () => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
}

const Card = (props: CardProps) => {
  const {
    text,
    color,
    index,
    onDragStart,
    isDragging,
    onDragEnd,
    onDragEnter,
  } = props;

  return (
    <Container
      key={index}
      $backgroundColor={color}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnd={onDragEnd}
      onDragEnter={(e) => onDragEnter(e, index)}
      onDragOver={(e) => e.preventDefault()}
      $isDragging={isDragging}
    >
      <Text>{text}</Text>
    </Container>
  );
};

export default Card;
