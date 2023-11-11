import styled from "styled-components";
import plane from "../../../images/HomePage/plane.jpg";
import { mediaQueries } from "../../../styles/mediaQueries";

export const FeaturesStyled = styled.section`
  position: relative;
  padding: 142px 0 145px;
  background: linear-gradient(
    to right,
    var(--primaryDark) 50%,
    var(--secondary) 50%
  );
  ${mediaQueries("tablet")`background: var(--secondary);`}

  > div {
    display: flex;
    align-items: center;
    gap: 53px;
    ${mediaQueries("tablet")`flex-wrap: wrap;`}
  }
`;

export const BGImgStyled = styled.div`
  position: relative;
  display: flex;
  width: 56.7%;
  height: 610px;
  align-items: end;
  justify-content: center;
  background-image: url(${plane});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${mediaQueries("tablet")`width: 100%;`}
  ${mediaQueries("mobile")`height: 460px;`}
`;

export const PlaneSignStyled = styled.div`
  display: flex;
  width: 417px;
  height: 139px;
  align-items: center;
  justify-content: center;
  gap: 21px;
  background: linear-gradient(
    94deg,
    #ffb629 -1.21%,
    #ffda56 58.66%,
    #ffd7a6 116.84%
  );
  ${mediaQueries("mobile")`width: 100%;`}

  p {
    width: 260px;

    font-size: 25px;
    color: var(--title);
  }
`;

export const FeatureTextStyled = styled.div`
  max-width: 593px;

  h2 {
    margin: 12px 0 18px;
  }

  p {
    max-width: 486px;
  }
`;

export const FeaturesListStyled = styled.ul`
  display: flex;
  margin-top: 61px;
  flex-wrap: wrap;
  gap: 20px 72px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;

    :not(:last-child) {
      width: 223px;
    }

    h3 {
      font-size: 20px;
      font-weight: 400;
      color: var(--title);
    }
  }
`;
