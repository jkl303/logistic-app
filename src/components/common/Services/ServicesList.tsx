import { Link } from "react-router-dom";
import { services } from "../../../data/services";

import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import {
  ServicesListStyled,
  ServicesStyled,
  TitleStyled,
} from "./Services.styled";
import { TextStyled } from "../../../styles/Text.styled";
import { ContainerStyled } from "../../../styles/Container.styled";
import { LinkAnimated } from "../LinkAnimated/LinkAimated";

export const ServicesList = () => {
  return (
    <ServicesStyled>
      <ContainerStyled>
        <TitleStyled>
          <SpanStyled>What We Do</SpanStyled>
          <SectionTitleStyled>
            Safe & Reliable Cargo Solutions
          </SectionTitleStyled>
        </TitleStyled>
        <ServicesListStyled>
          {services.map(({ svg, title, text }) => {
            return (
              <li key={svg}>
                <img
                  src={require(`../../../icons/common/${svg}.svg`)}
                  alt={title}
                />
                <Link to="/service-single">{title}</Link>
                <TextStyled>{text}</TextStyled>
              </li>
            );
          })}
        </ServicesListStyled>
        <LinkAnimated
          href="/service"
          title="More Works"
          dark
          center
        />
      </ContainerStyled>
    </ServicesStyled>
  );
};
