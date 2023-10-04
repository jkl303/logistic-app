import { Link } from "react-router-dom";

import { services } from "../../../data/services";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  ServicesStyled,
  TitleStyled,
  WhatWeDoStyled,
} from "./WhatWeDo.styled";

export const WhatWeDo = () => {
  return (
    <section>
      <ContainerStyled>
        <WhatWeDoStyled>
          <TitleStyled data-aos="fade-right">
            <SpanStyled>What We Do</SpanStyled>
            <SectionTitleStyled>
              Safe & Reliable Cargo Solutions
            </SectionTitleStyled>
          </TitleStyled>
          <ServicesStyled>
            {services
              .slice(0, 4)
              .map(({ svg, title, text }) => {
                return (
                  <li key={svg}>
                    <img
                      src={require(`../../../icons/common/${svg}.svg`)}
                      alt={title}
                    />
                    <div>
                      <Link to="/service-single">
                        {title}
                      </Link>
                      <TextStyled>{text}</TextStyled>
                    </div>
                  </li>
                );
              })}
          </ServicesStyled>
        </WhatWeDoStyled>
      </ContainerStyled>
    </section>
  );
};
