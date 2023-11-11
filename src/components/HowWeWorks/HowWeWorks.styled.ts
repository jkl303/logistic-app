import styled from "styled-components";
import loaderServices from "../../images/ServicesPage/loaderServices.jpg";
import { mediaQueries } from "../../styles/mediaQueries";

export const HowWeWorksStyled = styled.section`
  background-color: var(--secondary);
  background-image: url(${loaderServices});
  background-position: 8% 214px;
  background-repeat: no-repeat;
  text-align: center;
  ${mediaQueries("tablet")`background-position: 0 214px;`}
  ${mediaQueries("mobile")`background-image: none;`}

  > div > div {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  h2 {
    margin: 15px 0 35px;
  }
`;

export const FrontImgStyled = styled.div`
  padding: 28px;
  background-color: var(--secondary);
  ${mediaQueries("tablet")`display: none;`}
`;

export const GoodnessesListStyled = styled.ul`
  padding: 54px;
  padding-right: 0;
  background-color: var(--secondary);
  ${mediaQueries("mobile")`padding-left: 0;`}

  li {
    display: flex;
    max-width: 550px;
    align-items: flex-start;
    text-align: start;

    :not(:last-child) {
      margin-bottom: 55px;
    }

    div {
      position: relative;
      margin-left: 19px;
      padding-top: 11px;

      h3 {
        font-size: 25px;
        font-weight: 500;
        color: var(--title);
      }

      p {
        margin-top: 12px;
      }
    }
  }
`;
