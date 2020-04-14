// import styled from "@emotion/styled";
import { useTheme } from "react-jss";
import { useStyles } from "../../styles";

// const Grid = styled.div`
//   width: 1312px;
//   box-sizing: border-box;
//   padding: ${props => props.padding || 0};
//   margin: 0 auto;
//   background-color: ${props => props.color || transparent};
// `;

const Grid = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return <div className={classes.grid}>{children}</div>;
};

export default Grid;
