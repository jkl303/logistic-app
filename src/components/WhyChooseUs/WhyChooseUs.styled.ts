import styled from "styled-components";
import cargoTeam from "../../images/TeamPage/cargoTeam.png";

export const WhyChooseUsStyled = styled.section`
  padding: 168px 0 118px;
  background-image: url(${cargoTeam});
  background-position: 175px 100px;
  background-repeat: no-repeat;
`;

export const FrontImgStyled = styled.div`
  position: absolute;
  bottom: -10px;
  left: 276px;
  padding: 28px 0 0 28px;
  background-color: #fff;
`;

export const WhyChooseUsTextStyled = styled.div`
  width: 560px;
  margin-left: auto;

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
  padding-right: 25px;

  div {
    h2 {
      margin: 11px 0 12px;

      font-size: 25px;
      font-weight: 500;
    }

    :first-child {
      margin-right: 83px;
    }
  }
`;
