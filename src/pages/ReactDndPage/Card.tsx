import React, { useRef } from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
import { types } from "../../types";

const Container = styled.div<{
  $isDragging: boolean;
  $backgroundColor: string;
}>`
  min-height: 40px;
  border-radius: 8px;
  padding: 12px;
  cursor: move;
  opacity: ${({ $isDragging }) => ($isDragging ? 0 : 1)};
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
  index: number;
  color: string;
  moveListItem: (dragIndex: number, hoverIndex: number) => void;
}

function Card(props: CardProps) {
  const { text, index, moveListItem, color } = props;

  const [{ isDragging }, dragRef] = useDrag({
    type: types.CARD,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // useDrop - the list item is also a drop area
  const [, dropRef] = useDrop({
    accept: types.CARD,
    hover: (
      item: { text: string; index: number },
      monitor: { [key: string]: any }
    ) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      if (!hoverBoundingRect) return;

      // hover item 的 1/2 高度 :)
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // 如果 drag item 是被向下拖曳，且 hover 到的位置不及 drag item 的 1/2，不做任何事
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // 如果 drag item 是被向上拖曳，且 hover 到的位置不及 drag item 的 1/2，不做任何事
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // Join the 2 refs together into one (both draggable and can be dropped on)
  const ref = useRef<HTMLDivElement>(null);
  dragRef(dropRef(ref));

  return (
    <Container ref={ref} $isDragging={isDragging} $backgroundColor={color}>
      <Text>{text}</Text>
    </Container>
  );
}

export default Card;
