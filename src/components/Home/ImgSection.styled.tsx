import styled from "styled-components";
import cargoFront from "../../images/HomePage/cargoWide.jpg";

export const ImgSection = styled.section`
  padding: 0;
  height: 400px;
  background-color: var(--primaryDark);
  background-image: url(${cargoFront});
  background-size: cover;
  background-repeat: no-repeat;
`;
