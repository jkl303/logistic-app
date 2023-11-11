import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const HeroStyled = styled.section<{ img: string }>`
  position: relative;
  margin-top: -78px;
  background-color: var(--primaryDark);
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  ${mediaQueries("tablet")`margin-top: -408px;`}
`;

export const HeroContentStyled = styled.div`
  max-width: 600px;
  padding: 198px 0;
  color: white;

  h1 {
    margin-top: 8px;

    font-size: 60px;
    font-weight: 700;
    ${mediaQueries("mobile")`font-size: 38px;`}
  }
`;
