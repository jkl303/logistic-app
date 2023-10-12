import truckServiceSingle from "../../../images/ServiceSinglePage/truckServiceSingle.jpg";
import { ReactComponent as ArrowRight } from "../../../icons/common/arrowRight.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  BenefitsListStyled,
  ServiceMidSectionStyled,
  ServiceMidTextStyled,
} from "./ServiceMidSection.styled";

export const ServiceMidSection = () => {
  return (
    <ServiceMidSectionStyled>
      <ContainerStyled>
        <ServiceMidTextStyled>
          <SectionTitleStyled>
            Benefit of Service
          </SectionTitleStyled>
          <TextStyled>
            Wherever your cargo is going, we can arrange the
            shipment for you and remain competitive with the
            business market.
          </TextStyled>
          <BenefitsListStyled>
            <li>
              <ArrowRight />
              <p>Clearance and compliance service</p>
            </li>
            <li>
              <ArrowRight />
              <p>
                Saving Time to Deal with commodo iaculis
              </p>
            </li>
            <li>
              <ArrowRight />
              <p>Automate your business elis tristique</p>
            </li>
            <li>
              <ArrowRight />
              <p>
                Saving Time to Deal with commodo iaculis
              </p>
            </li>
          </BenefitsListStyled>
        </ServiceMidTextStyled>
        <img
          src={truckServiceSingle}
          alt="Truck"
          width="665px"
          height="365px"
        />
      </ContainerStyled>
    </ServiceMidSectionStyled>
  );
};
