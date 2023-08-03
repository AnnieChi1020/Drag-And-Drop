import React from "react";
import Card from "./Card";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface ListProps {
  list: { id: number; text: string }[];
}

const List: React.FC<ListProps> = (props) => {
  const { list } = props;
  return (
    <Container>
      {list.map((item, i) => (
        <Card text={item.text} key={i} />
      ))}
    </Container>
  );
};

export default List;
