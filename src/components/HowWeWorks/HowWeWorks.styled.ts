import styled from "styled-components";
import loaderServices from "../../images/ServicesPage/loaderServices.jpg";

export const HowWeWorksStyled = styled.section`
  padding-bottom: 150px;
  background-color: var(--secondary);
  background-image: url(${loaderServices});
  background-position: 210px 220px;
  background-repeat: no-repeat;
  text-align: center;

  h2 {
    margin: 15px 0 35px;
  }
`;

export const FrontImgStyled = styled.div`
  position: absolute;
  bottom: -36px;
  left: 276px;
  padding: 28px 0 0 28px;
  background-color: var(--secondary);
`;

export const GoodnessesListStyled = styled.ul`
  margin-left: auto;
  width: 550px;
  padding-top: 50px;

  li {
    display: flex;
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
        font-weight: 400;
        color: var(--title);
      }

      p {
        margin-top: 12px;
      }
    }
  }
`;
