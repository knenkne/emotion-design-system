import styled from "@emotion/styled";

const Paragraph = styled.p`
  font-family: SBSansText;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: ${props => props.color || `#262626`};
  margin: 0;
`;

export default Paragraph;
