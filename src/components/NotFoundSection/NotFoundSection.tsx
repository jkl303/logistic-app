import { ContainerStyled } from "../../styles/Container.styled";
import { SectionTitleStyled } from "../../styles/SectionTitle.styled";
import { TextStyled } from "../../styles/Text.styled";
import { LinkAnimated } from "../common/LinkAnimated/LinkAimated";
import { NotFoundSectionStyled } from "./NotFoundSection.styled";

export const NotFoundSection = () => {
  return (
    <NotFoundSectionStyled>
      <ContainerStyled>
        <span>
          4<span>0</span>4
        </span>
        <SectionTitleStyled>
          Oops! Page not found.
        </SectionTitleStyled>
        <TextStyled>
          Let’s get you to where you need to be.
        </TextStyled>
        <LinkAnimated
          href="/"
          title="Back to home"
          center
          nodiv
        />
      </ContainerStyled>
    </NotFoundSectionStyled>
  );
};
