import styled from "styled-components";
import shipWide from "../../images/HomePage/shipWide.jpg";

export const HeroHomeStyled = styled.section`
  background-color: var(--primaryDark);
  background-image: url(${shipWide});
  background-size: cover;
  background-position: center;
`;

export const HeroContentStyled = styled.div`
  width: 571px;
  padding: 225px 0 250px;
  color: white;

  p {
    :first-child {
      display: flex;
      width: 248px;
      height: 23px;
      margin-bottom: 8px;
      align-items: center;
      justify-content: center;
      background-color: #041c3780;

      font-family: var(----primaryFont);
      font-size: 14px;

      ::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 23px;
        left: 0;
        background-color: var(--primaryYellow);
      }
    }

    :nth-child(3) {
      margin: 6px 0 24px;

      font-weight: 500;
      line-height: 1.51;
    }
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
  }
`;
