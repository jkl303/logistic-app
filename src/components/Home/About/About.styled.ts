import styled from "styled-components";
import cargo from "../../../images/HomePage/cargo.jpg";

export const AboutStyled = styled.section`
  padding-top: 366px;
  background-image: url(${cargo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const AboutContentStyled = styled.div`
  display: flex;
  padding: 85px;
  padding-bottom: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 138px;
  background-color: #fff;
`;

export const AboutTextStyled = styled.div`
  width: 472px;

  h2 {
    margin: 15px 0 12px;
  }
`;

export const AboutListStyled = styled.ul`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  gap: 22px;

  li {
    display: flex;
    align-items: center;
    gap: 15px;

    h3 {
      font-size: 25px;
      font-weight: 400;
      color: var(--title);
    }
  }
`;

export const FrontImgStyled = styled.div`
  position: absolute;
  padding: 25px;
  top: 322px;
  right: 356px;
  background-color: #fff;
`;

export const StatsStyled = styled.ul`
  display: flex;
  width: 100%;
  height: 145px;

  li {
    display: flex;
    width: 50%;
    gap: 16px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;

    :first-child {
      border-right: 1px solid #d4d4d4;
    }

    span {
      font-family: Rubik;
      font-size: 50px;
      font-weight: 600;
    }

    p {
      font-size: 20px;
      color: var(--title);
    }
  }
`;

export const CubeYellowStyled = styled.div`
  width: 17px;
  height: 17px;
  background: linear-gradient(
    to right,
    #ffb629 0%,
    #ffda56 50%,
    #ffd7a6 100%
  );
`;
