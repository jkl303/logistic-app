import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const ServiceMidSectionStyled = styled.section`
  padding: 0;

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    row-gap: 30px;

    img {
      ${mediaQueries("tablet")`width: 100%;
      height: auto;`}
    }
  }
`;

export const ServiceMidTextStyled = styled.div`
  width: 472px;
  ${mediaQueries("tablet")`width: 100%;`}

  > p {
    margin: 12px 0 40px;
  }
`;

export const BenefitsListStyled = styled.ul`
  li {
    display: flex;
    align-items: center;
    gap: 12px;

    :not(:last-child) {
      margin-bottom: 25px;
    }

    p {
      font-family: var(--primaryFont);
      font-size: 20px;
      color: var(--title);
    }
  }
`;
