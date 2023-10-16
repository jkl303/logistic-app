import { goodnesses } from "../../data/goodnesses";
import buildingServices from "../../images/ServicesPage/buildingServices.jpg";
import { ContainerStyled } from "../../styles/Container.styled";
import { SectionTitleStyled } from "../../styles/SectionTitle.styled";
import { SpanStyled } from "../../styles/Span.styled";
import { TextStyled } from "../../styles/Text.styled";
import {
  FrontImgStyled,
  GoodnessesListStyled,
  HowWeWorksStyled,
} from "./HowWeWorks.styled";

export const HowWeWorks = () => {
  return (
    <HowWeWorksStyled>
      <ContainerStyled>
        <SpanStyled>Our Goodness</SpanStyled>
        <SectionTitleStyled>
          How We Works
        </SectionTitleStyled>
        <div>
          <FrontImgStyled data-aos="fade-left">
            <img
              src={buildingServices}
              alt="Plane"
              width="300px"
              height="285px"
              loading="lazy"
            />
          </FrontImgStyled>
          <GoodnessesListStyled>
            {goodnesses.map(({ title, svg, text }) => {
              return (
                <li>
                  <img
                    src={require(`../../icons/common/${svg}.svg`)}
                    alt={title}
                  />
                  <div>
                    <h3>{title}</h3>
                    <TextStyled>{text}</TextStyled>
                  </div>
                </li>
              );
            })}
          </GoodnessesListStyled>
        </div>
      </ContainerStyled>
    </HowWeWorksStyled>
  );
};
