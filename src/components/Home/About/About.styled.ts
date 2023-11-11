import styled from "styled-components";
import cargo from "../../../images/HomePage/cargo.jpg";
import { mediaQueries } from "../../../styles/mediaQueries";

export const AboutStyled = styled.section`
  padding: 366px 0 0;
  background-image: url(${cargo});
  background-size: contain;
  background-repeat: no-repeat;
  ${mediaQueries("tablet")`padding-top: 120px;`}
  ${mediaQueries("mobile")`padding-top: 220px;`}
`;

export const AboutContentStyled = styled.div`
  display: flex;
  padding: 85px;
  padding-bottom: 0;
  justify-content: space-between;
  gap: 40px;
  background-color: #fff;
  ${mediaQueries("mobile")`padding: 0;`}

  img {
    ${mediaQueries("tablet")`display: none;`}
  }
`;

export const AboutTextStyled = styled.div`
  width: 472px;
  ${mediaQueries("tablet")`width: 100%;`}

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
  ${mediaQueries("tablet")`display: none;`}
`;

export const StatsStyled = styled.ul`
  display: flex;
  width: 86%;
  margin-top: 100px auto 0 auto;
  flex-wrap: wrap;

  ${mediaQueries("tablet")`width: 100%;
  margin-top: 60px;`}

  li {
    display: flex;
    width: 50%;
    height: 145px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-top: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
    ${mediaQueries("mobile")`width: 100%;`}

    :first-child {
      border-right: 1px solid #d4d4d4;
      ${mediaQueries("mobile")`border-right: none;`}
    }

    span {
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
