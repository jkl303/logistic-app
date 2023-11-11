import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ContainerStyled = styled.div<{
  width?: number;
}>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => `${props.width || 1200}px`};

  ${mediaQueries("tablet")`max-width: 1199px;
  padding: 0 40px;`}
  ${mediaQueries(
    "mobile",
  )`max-width: 767px;padding: 0 20px;`}
`;
