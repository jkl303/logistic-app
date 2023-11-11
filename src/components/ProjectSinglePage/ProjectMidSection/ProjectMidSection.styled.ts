import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const ProjectMidSectionStyled = styled.section``;

export const ProjectMidTextStyled = styled.div`
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
      flex-shrink: 10;
      font-family: var(--primaryFont);
      font-size: 20px;
      color: var(--title);
    }
  }
`;
