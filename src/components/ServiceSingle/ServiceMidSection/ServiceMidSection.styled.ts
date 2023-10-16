import styled from "styled-components";

export const ServiceMidSectionStyled = styled.section`
  padding: 0;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ServiceMidTextStyled = styled.div`
  max-width: 472px;

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
