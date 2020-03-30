import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const items = [
  {
    name: `UI Components`,
    version: `3.0.3`
  },
  {
    name: `UI Templates`,
    version: `3.0.1`
  },
  {
    name: `Lib.ui`,
    version: `3.0.15`
  }
];

export default () => (
  <ul
    css={css`
      font-family: SBSansText;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: -0.3px;
      text-align: right;
      color: rgba(38, 38, 38, 0.55);
      list-style: none;
      padding: 0;
    `}
  >
    {items.map(({ name, version }) => (
      <li key={name}>{`${name} - ${version}`}</li>
    ))}
  </ul>
);
