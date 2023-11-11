import styled from "styled-components";
import cargoTeam from "../../images/TeamPage/cargoTeam.png";
import { mediaQueries } from "../../styles/mediaQueries";

export const WhyChooseUsStyled = styled.section`
  padding-bottom: 0;
  background-image: url(${cargoTeam});
  background-position: 12.5% 120px;
  background-repeat: no-repeat;
  ${mediaQueries("tablet")`background-position: 0 120px;`}
  ${mediaQueries("mobile")`background-image: none;`}

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const FrontImgStyled = styled.div`
  margin-left: auto;
  padding: 28px;
  background-color: #fff;
  ${mediaQueries("tablet")`display: none;`}
`;

export const WhyChooseUsTextStyled = styled.div`
  max-width: 560px;
  padding: 68px 32px;
  background-color: #fff;
  ${mediaQueries("mobile")`padding: 0;`}

  h2 {
    margin: 15px 0 12px;
  }
`;

export const WhyChooseUsLineStyled = styled.div`
  height: 1px;
  margin: 30px 0;
  background-color: #d6d6d6;
`;

export const TeamFeaturesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  > div {
    max-width: 230px;

    h2 {
      margin: 11px 0 12px;

      font-size: 25px;
      font-weight: 500;
    }
  }
`;
