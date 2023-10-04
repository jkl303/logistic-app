import { pricing } from "../../../data/pricing";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import { LinkAnimated } from "../LinkAnimated/LinkAimated";
import {
  InfoListStyled,
  PriceList,
  PricingStyled,
} from "./Pricing.styled";

export const Pricing = () => {
  return (
    <PricingStyled>
      <ContainerStyled>
        <SpanStyled>Pricing</SpanStyled>
        <SectionTitleStyled>
          Our Best Pricing
        </SectionTitleStyled>
        <PriceList>
          {pricing.map(
            ({ title, price, trucks, distance }) => {
              return (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>
                    <span>{price}</span>/month
                  </p>
                  <InfoListStyled>
                    <li>
                      <p>{trucks}</p>
                    </li>
                    <li>
                      <p>Full Insurance</p>
                    </li>
                    <li>
                      <p>{distance}</p>
                    </li>
                    <li>
                      <p>Real-time rate shopping</p>
                    </li>
                  </InfoListStyled>
                  <LinkAnimated
                    href="/pricing"
                    title="Choose Plan"
                    dark
                    center
                  />
                </li>
              );
            },
          )}
        </PriceList>
      </ContainerStyled>
    </PricingStyled>
  );
};
