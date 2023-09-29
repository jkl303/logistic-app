import { ReactComponent as ShipIcon } from "../../../icons/common/shipTranspatent.svg";
import { ReactComponent as CargoIcon } from "../../../icons/common/cargo.svg";
import { ReactComponent as PlaneIcon } from "../../../icons/common/plane.svg";
import { ReactComponent as TruckIcon } from "../../../icons/common/truck.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import {
  ServicesStyled,
  TitleStyled,
  WhatWeDoStyled,
} from "./WhatWeDo.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";

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
            <li>
              <ShipIcon />
              <div>
                <h3>Sea Transport Services</h3>
                <TextStyled>
                  Following the quality of our service thus
                  having gained trust of our many clients.
                </TextStyled>
              </div>
            </li>
            <li>
              <CargoIcon />
              <div>
                <h3>Warehousing Services</h3>
                <TextStyled>
                  Following the quality of our service thus
                  having gained trust of our many clients.
                </TextStyled>
              </div>
            </li>
            <li>
              <PlaneIcon />
              <div>
                <h3>Air Fright Services</h3>
                <TextStyled>
                  Following the quality of our service thus
                  having gained trust of our many clients.
                </TextStyled>
              </div>
            </li>
            <li>
              <TruckIcon />
              <div>
                <h3>Local Shipping Services</h3>
                <TextStyled>
                  Following the quality of our service thus
                  having gained trust of our many clients.
                </TextStyled>
              </div>
            </li>
          </ServicesStyled>
        </WhatWeDoStyled>
      </ContainerStyled>
    </section>
  );
};
