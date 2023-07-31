import styled from "styled-components";

export const ContainerStyled = styled.div<{ width?: number }>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: blue;
  max-width: ${(props) => `${props.width || 1200}px`};
  overflow: hidden;
`;
