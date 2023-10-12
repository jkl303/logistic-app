import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  ServiceLowerSectionStyled,
  ServiceLowerTextStyled,
} from "./ServiceLowerSection.styled";

export const ServiceLowerSection = () => {
  return (
    <ServiceLowerSectionStyled>
      <ContainerStyled>
        <iframe
          width="650px"
          height="376px"
          src="https://www.youtube.com/embed/5ye6OEhLFZc?si=4aDOjPa3UJaUyI7R"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <ServiceLowerTextStyled>
          <SectionTitleStyled>
            How It Works
          </SectionTitleStyled>
          <TextStyled>
            To be a sustainable, conscious, and innovative
            leader in the trucking industry. We always keep
            our promises and go extra mile for our
            customers!!!
            <br />
            <br />
            Be an example for transportation companies in
            diversity, technological innovation, and driver
            development, and to provide the most valuable
            supply chain efficiencies our customers have
            ever seen.
          </TextStyled>
        </ServiceLowerTextStyled>
      </ContainerStyled>
    </ServiceLowerSectionStyled>
  );
};
