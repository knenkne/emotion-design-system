import styled from "@emotion/styled";

const Grid = styled.div`
  width: 1312px;
  box-sizing: border-box;
  padding: ${props => props.padding || 0};
  margin: 0 auto;
  background-color: ${props => props.color || transparent};
`;

export default Grid;
