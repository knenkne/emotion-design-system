import styled from "@emotion/styled";

export const colorMap = {
  green: `#10ffa4`,
  blue: `#66cbff`,
  red: `#ff4545`
};

const Title = styled.h2`
  position: relative;
  font-family: SBSansText;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: #262626;
  margin: 0 0 32px;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 6px;
    bottom: 0;
    left: 0;
    background-color: ${props => colorMap[props.color] || colorMap.green};
    z-index: -1;
  }
`;

export default Title;
