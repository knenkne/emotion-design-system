import React from "react";
import styled from "@emotion/styled";
import Grid from "../grid/grid.jsx";

const Title = styled.h2`
  width: 768px;
  font-family: Prata;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.68px;
  color: #262626;
  margin: 96px 0;
`;

const Intro = () => {
  return (
    <Grid>
      <Title>
        {`Дизайн-система, помогающая выстраивать процессы для Web SBOL и\u00A0внутренних
      сервисов`}
      </Title>
    </Grid>
  );
};

export default Intro;
