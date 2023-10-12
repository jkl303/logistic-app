import shipServiceSingle from "../../../images/ServiceSinglePage/shipServiceSingle.jpg";

import { ReactComponent as Ship } from "../../../icons/common/ship.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import {
  ServiceTitleStyled,
  UpperSectionStyled,
} from "./UpperSection.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";

export const UpperSection = () => {
  return (
    <UpperSectionStyled>
      <ContainerStyled>
        <img
          src={shipServiceSingle}
          alt="Ship"
          width="100%"
          height="510px"
        />
        <ServiceTitleStyled>
          <Ship />
          <SectionTitleStyled>
            Sea Transport Services
          </SectionTitleStyled>
        </ServiceTitleStyled>
        <TextStyled>
          Logistics operates under country-specific freight
          forward industry terms. We are members of
          Logistics and Freight Association. Logistics can
          also offer specific insurance cover on request. We
          regularly review our transport providers and only
          work with professional and experienced carriers.
          To be the industry leader, globally recognized for
          effective and efficient solutions. To provide
          innovative customer solutions delivering quality,
          excellence and speed.We appreciate your interest
          in our global organization. Please complete the
          form below and we will contact you immediately to
          discuss your warehousing and distribution, air
          freight, ocean freight or any other logistics
          needs.
          <br />
          <br />
          Logistics is a distinguished supply chain
          management firm which provides comprehensive
          solutions for warehousing, transportation and a
          host of logistics services. Global freight supply
          chains are complex systems composed of steamship
          lines; truckers; railroads; ports; drayage
          providers; owners of truck chassis, shipping
          containers and warehouses; manufacturers;
          wholesalers and retailers of goods. All
          stakeholders must do their part to maintain a
          consistent flow of freight at every step of the
          process to avoid bottlenecks and ensure that
          freight is delivered safely, efficiently and when
          expected.
        </TextStyled>
      </ContainerStyled>
    </UpperSectionStyled>
  );
};
