import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const NotFoundSectionStyled = styled.section`
  text-align: center;

  > div > {
    span {
      font-family: var(--primaryFont);
      font-size: 350px;
      font-style: normal;
      font-weight: 600;
      color: var(--title);
      ${mediaQueries("tablet")`font-size: 250px;`}
      ${mediaQueries("mobile")`font-size: 140px;`}

      span {
        color: var(--primaryYellow);
      }
    }
  }

  p {
    margin: 7px 0 26px;
  }
`;
