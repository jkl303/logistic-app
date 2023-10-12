import { FC } from "react";

import { ReactComponent as ArrowRight } from "../../../icons/common/arrowRight.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  BenefitsListStyled,
  ProjectMidSectionStyled,
  ProjectMidTextStyled,
} from "./ProjectMidSection.styled";

export const ProjectMidSection: FC<{ title: string }> = ({
  title,
}) => {
  return (
    <ProjectMidSectionStyled>
      <ContainerStyled>
        <ProjectMidTextStyled>
          <SectionTitleStyled>{title}</SectionTitleStyled>
          <TextStyled>
            Leverage agile frameworks to provide a robust
            synopsis for high level overviews. Iterative
            approaches to corporate strategy foster
            collaborative thinking to further the overall
            value proposition. Organically grow the holistic
            world view of disruptive innovation via
            workplace diversity and empowerment. Bring to
            the table win-win survival strategies to ensure
            proactive domination. At the end of the day,
            going forward, a new normal that has evolved
            from generation X is on the runway heading
            towards a streamlined cloud solution. User
            generated content in real-time will have
            multiple touchpoints for offshoring.
          </TextStyled>
          <BenefitsListStyled>
            <li>
              <ArrowRight />
              <p>
                National Customer Service Center – 24 hours
                a day
              </p>
            </li>
            <li>
              <ArrowRight />
              <p>
                Online shipping navigator lets you quote,
                book, and track shipments
              </p>
            </li>
            <li>
              <ArrowRight />
              <p>
                Your Logistics Needs Are At The Heart Of Our
                Business
              </p>
            </li>
            <li>
              <ArrowRight />
              <p>Very careful handling of valuable goods</p>
            </li>
            <li>
              <ArrowRight />
              <p>
                Time saving and convenient transportation
                services in your area
              </p>
            </li>
          </BenefitsListStyled>
        </ProjectMidTextStyled>
      </ContainerStyled>
    </ProjectMidSectionStyled>
  );
};
