import styled from "styled-components";
import truckAbout from "../../images/AboutPage/truckAbout.jpg";
import { mediaQueries } from "../../styles/mediaQueries";

export const OverviewStyled = styled.section`
  padding: 120px 0;
  background-image: url(${truckAbout});
  background-position: 7%;
  background-repeat: no-repeat;
  ${mediaQueries("tablet")`background-position: left;`}
  ${mediaQueries("mobile")`background-image: none;`}
`;

export const FrontImgStyled = styled.div`
  position: absolute;
  bottom: -70px;
  left: 25%;
  padding: 28px;
  background-color: #fff;
  ${mediaQueries("tablet")`display: none;`}
`;

export const OverviewTextStyled = styled.div`
  max-width: 620px;
  margin-left: auto;
  padding: 30px 0 30px 40px;
  background-color: #fff;
  ${mediaQueries("mobile")`padding: 0;`}

  h2 {
    margin: 15px 0 12px;
  }

  a {
    margin-top: 35px;
  }
`;

export const SwitchBtnsStyled = styled.div`
  display: flex;
  margin: 19px 0 27px;
  gap: 14px;
  ${mediaQueries("mobile")`gap: 4px;`}

  button {
    padding: 15px 39px;
    border: none;
    background-color: var(--secondary);
    transition: color 250ms ease,
      background-color 250ms ease;
    ${mediaQueries("mobile")`padding: 15px 10px;`}

    font-size: 19px;
    font-weight: 600;
    line-height: 1.5;
    color: var(--title);

    :hover,
    :focus {
      cursor: pointer;
      color: #fff;
      background-color: var(--primaryYellow);
    }
  }
`;
