import React from "react";
import styled from "@emotion/styled";
import Paragraph from "../paragraph/paragraph.jsx";
import Title, { colorMap } from "../title/title.jsx";

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  width: 352px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const colors = Object.keys(colorMap);

export default ({ items, colored }) => (
  <List>
    {items.map(({ title, description }, i) => (
      <ListItem key={title}>
        <Title color={colored && colors[i]}>{title}</Title>
        <Paragraph color={`rgba(38, 38, 38, 0.7)`}>{description}</Paragraph>
      </ListItem>
    ))}
  </List>
);
