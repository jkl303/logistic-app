import styled from "styled-components";

export const NotFoundSectionStyled = styled.section`
  text-align: center;

  > div > {
    span {
      font-family: var(--primaryFont);
      font-size: 350px;
      font-style: normal;
      font-weight: 600;
      color: var(--title);

      span {
        color: var(--primaryYellow);
      }
    }
  }

  p {
    margin: 7px 0 26px;
  }
`;
