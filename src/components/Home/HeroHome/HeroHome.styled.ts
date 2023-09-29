import styled from "styled-components";
import shipWide from "../../../images/HomePage/shipWide.jpg";

export const HeroHomeStyled = styled.section`
  background-color: var(--primaryDark);
  background-image: url(${shipWide});
  background-size: cover;
  background-position: center;
`;

export const HeroHomeContentStyled = styled.div`
  width: 571px;
  padding: 225px 0 250px;
  color: white;

  p:nth-child(3) {
    margin: 6px 0 24px;

    font-weight: 500;
    line-height: 1.51;
  }

  h1 {
    margin-top: 8px;

    font-size: 60px;
    font-weight: 700;
  }
`;
