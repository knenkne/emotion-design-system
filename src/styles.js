import { createUseStyles, useTheme, ThemeProvider } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  wrapper: {
    boxSizing: "border-box",
    padding: "88px 0 0",
    "min-height": "100vh",
    background: theme.colorPrimary,
  },
  grid: {
    width: "1312px",
    boxSizing: "border-box",
    padding: "64px 64px 96px",
    margin: "0 auto",
    background: theme.colorSecondary,
  },
  headline: {
    width: "768px",
    fontFamily: "Prata",
    fontSize: "36px",
    lineHeight: 1.33,
    letterSpacing: "-0.68px",
    color: theme.textColor,
    margin: "96px 0",
  },
}));
