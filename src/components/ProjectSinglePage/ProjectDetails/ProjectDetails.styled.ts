import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const ProjectDetailsStyled = styled.section`
  background-color: var(--secondary);

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 40px;

    img {
      margin-right: 60px;
      ${mediaQueries("tablet")`width: 100%;
      height: auto;
      margin-right: 0;`}
    }
  }
`;

export const DetailsListStyled = styled.ul`
  margin-top: 40px;

  li {
    display: flex;
    max-width: 426px;

    :not(:last-child) {
      margin-bottom: 20px;
    }

    p {
      font-family: var(--primaryFont);
      font-size: 20px;
    }

    div {
      display: flex;
      width: 113px;
      justify-content: space-between;
      margin-right: 28px;

      font-weight: 500;
      ${mediaQueries(
        "mobile",
      )`justify-content: flex-start;`}
    }
  }
`;
