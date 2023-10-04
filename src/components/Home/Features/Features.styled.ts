import styled from "styled-components";

export const FeaturesStyled = styled.section`
  position: relative;
  padding: 142px 0 145px;
  background: linear-gradient(
    to right,
    var(--primaryDark) 50%,
    var(--secondary) 50%
  );

  > div {
    display: flex;
  }
`;

export const FeaturesIMGWrapper = styled.div`
  position: relative;

  div {
    display: flex;
    position: absolute;
    left: 220px;
    bottom: 0;
    padding: 30px 33px;
    width: 417px;
    gap: 21px;
    align-items: center;
    background: linear-gradient(
      94deg,
      #ffb629 -1.21%,
      #ffda56 58.66%,
      #ffd7a6 116.84%
    );

    p {
      width: 260px;

      font-size: 25px;
      color: var(--title);
    }
  }
`;

export const FeatureTextStyled = styled.div`
  max-width: 710px;
  padding: 58px 53px;

  h2 {
    margin: 12px 0 18px;
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
