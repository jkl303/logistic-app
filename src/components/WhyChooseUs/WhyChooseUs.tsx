import { ReactComponent as ManIcon } from "../../icons/common/man.svg";
import { ReactComponent as SandClockIcon } from "../../icons/common/sandClock.svg";

import truckTeam from "../../images/TeamPage/truckTeam.jpg";

import { ContainerStyled } from "../../styles/Container.styled";
import { SectionTitleStyled } from "../../styles/SectionTitle.styled";
import { SpanStyled } from "../../styles/Span.styled";
import { TextStyled } from "../../styles/Text.styled";
import {
  FrontImgStyled,
  WhyChooseUsTextStyled,
  WhyChooseUsStyled,
  WhyChooseUsLineStyled,
  TeamFeaturesStyled,
} from "./WhyChooseUs.styled";

export const WhyChooseUs = () => {
  return (
    <WhyChooseUsStyled>
      <ContainerStyled>
        <FrontImgStyled data-aos="fade-left">
          <img
            src={truckTeam}
            alt="Plane"
            width="264px"
            height="251px"
            loading="lazy"
          />
        </FrontImgStyled>
        <WhyChooseUsTextStyled>
          <SpanStyled>About</SpanStyled>
          <SectionTitleStyled>
            Why Choose Us
          </SectionTitleStyled>
          <TextStyled>
            Our global reach, deep industry knowledge,
            innovative technology, and extensive
            transportation network have allowed us to bring
            the latest learning to bear on our customers’
            unique challenges and desires.
          </TextStyled>
          <WhyChooseUsLineStyled />
          <TeamFeaturesStyled>
            <div>
              <ManIcon />
              <h2>Our Vision</h2>
              <TextStyled>
                To be the industry leader, globally
                recognized for effective & efficient
                solutions.
              </TextStyled>
            </div>
            <div>
              <SandClockIcon />
              <h2>Estimate Shipping</h2>
              <TextStyled>
                To provide innovative solutions delivering
                quality, excellence and speed.
              </TextStyled>
            </div>
          </TeamFeaturesStyled>
        </WhyChooseUsTextStyled>
      </ContainerStyled>
    </WhyChooseUsStyled>
  );
};
