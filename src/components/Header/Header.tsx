import { ContainerStyled } from "../../styles/Container.styled";
import { HeaderStyled, UpperSectionStyled } from "./Header.styled";

export const Header = () => {
  return (
    <UpperSectionStyled>
      <HeaderStyled></HeaderStyled>
      <ContainerStyled>
        <p>Header</p>
      </ContainerStyled>
    </UpperSectionStyled>
  );
};
