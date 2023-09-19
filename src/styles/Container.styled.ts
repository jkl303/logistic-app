import styled from "styled-components";

export const ContainerStyled = styled.div<{ width?: number }>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => `${props.width || 1200}px`};
`;
