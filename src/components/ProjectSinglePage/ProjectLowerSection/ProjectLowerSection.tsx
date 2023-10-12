import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";
import { ProjectLowerSectionStyled } from "./ProjectLowerSection.styled";

export const ProjectLowerSection = () => {
  return (
    <ProjectLowerSectionStyled>
      <ContainerStyled>
        <SectionTitleStyled>
          Our Project Transportation
        </SectionTitleStyled>
        <TextStyled>
          Duis semper lacus scelerisque, aliquam leo quis,
          porttitor leo. Etiam lobortis dapibus libero vel
          porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam id elit hendrerit semper
          feugiat id nunc. Morbi quis justo velit. Duis
          semper lacus scelerisque, aliquam leo quis,
          porttitor leo. Fusce lectus ex, pretium efficitur
          suscipit sed, faucibus vel elit Integer adipiscing
          erat eget risus sollicitudin pellentesque non
          erat. Maecenas nibh dolor malesuada sagittis
          accumsan ipsum. Pellentesque ultrices ultrices
          sapien, nec tincidunt nunc posuere.
        </TextStyled>
        <iframe
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/5ye6OEhLFZc?si=4aDOjPa3UJaUyI7R"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </ContainerStyled>
    </ProjectLowerSectionStyled>
  );
};
