import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Grid from "../grid/grid.jsx";
import List from "./list.jsx";
import Versions from "./versions.jsx";
import { useTheme } from "react-jss";
import { useStyles } from "../../styles";

const items = [
  {
    title: `Design Guidelines`,
    description: `Как устроены дизайн-процессы, как делать хороший\u00A0дизайн, используя гайды. Много текста\u00A0и\u00A0ещё больше красивых картинок`,
  },
  {
    title: `Components`,
    description: `Будет полезным посмотреть, как\u00A0компоненты\u00A0выглядят в реальных условиях\u00A0в\u00A0коде`,
  },
  {
    title: `Resources`,
    description: `Всё, что нужно для успешного развёртывания\u00A0проекта. Дистрибутивы, доступы,\u00A0настройки`,
  },
];

const Headline = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return <h1 className={classes.headline}>{children}</h1>;
};

const Wrapper = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return <div className={classes.wrapper}>{children}</div>;
};

const Intro = () => {
  return (
    <Wrapper>
      <Grid>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h1
            css={css`
              width: 169px;
              font-family: SBSansText;
              font-size: 20px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.2;
              letter-spacing: 0.3px;
              color: #262626;
            `}
          >{`Web SBOL Design\u00A0System`}</h1>
          <Versions />
        </div>
        <Headline>
          {`Дизайн-система, помогающая выстраивать процессы для Web SBOL и\u00A0внутренних сервисов`}
        </Headline>
        <List items={items} colored />
      </Grid>
    </Wrapper>
  );
};

export default Intro;
