import React from "react";
import ReactDOM from "react-dom";
import App from "./components/intro/intro.jsx";
import { ThemeProvider } from "react-jss";

export const theme = {
  colorPrimary: "#f8f8f8",
  colorSecondary: "#ffffff",
  textColor: "#262626",
};

export const darkTheme = {
  colorPrimary: "#20252B",
  colorSecondary: "#262c31",
  textColor: "#e52a77",
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById(`app`)
);
