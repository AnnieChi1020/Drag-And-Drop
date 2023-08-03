import React from "react";
import List from "./List";
import { styled } from "styled-components";

const Container = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 40px 0 0 0;
`;

function UpAndDown() {
  const list = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 6" },
    { id: 7, text: "Item 7" },
    { id: 8, text: "Item 8" },
    { id: 9, text: "Item 9" },
  ];

  return (
    <Container>
      <List list={list} />
    </Container>
  );
}

export default UpAndDown;
