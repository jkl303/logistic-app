import styled from "styled-components";
import truckAbout from "../../images/AboutPage/truckAbout.jpg";

export const OverviewStyled = styled.section`
  padding: 150px 0;
  background-image: url(${truckAbout});
  background-position: 78px;
  background-repeat: no-repeat;
`;

export const FrontImgStyled = styled.div`
  position: absolute;
  bottom: -70px;
  left: 220px;
  padding: 28px 0 0 28px;
  background-color: #fff;
`;

export const OverviewTextStyled = styled.div`
  width: 620px;
  margin-left: auto;

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

  button {
    padding: 15px 39px;
    border: none;
    background-color: var(--secondary);
    transition: color 250ms ease,
      background-color 250ms ease;

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
