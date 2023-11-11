import styled from "styled-components";
import cargoFront from "../../images/HomePage/cargoWide.jpg";

export const ImgSection = styled.section`
  height: 400px;
  padding: 0;
  background-color: var(--primaryDark);
  background-image: url(${cargoFront});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
