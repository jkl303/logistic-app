import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const ServicesStyled = styled.div`
  padding: 120px 0;
`;

export const TitleStyled = styled.div`
  text-align: center;

  h2 {
    margin-top: 15px;
  }
`;

export const ServicesListStyled = styled.ul`
  display: flex;
  margin: 55px 0;
  flex-wrap: wrap;
  row-gap: 53px;
  justify-content: space-between;
  ${mediaQueries("tablet")`justify-content: space-evenly;`}

  li {
    display: flex;
    width: 350px;
    flex-direction: column;
    align-items: flex-start;
    ${mediaQueries("tablet")`width: 300px;`}
    ${mediaQueries("mobile")`width: 100%;
    align-items: center;`}

    a {
      margin: 22px 0 13px;
      transition: color 250ms ease;

      font-size: 25px;
      font-weight: 400;
      color: var(--title);

      :hover,
      :focus {
        color: var(--primaryYellow);
      }
    }
  }
`;
