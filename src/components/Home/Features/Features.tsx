import { ReactComponent as PlanePale } from "../../../icons/common/planePale.svg";
import { ReactComponent as Box } from "../../../icons/yellow/box.svg";
import { ReactComponent as Ship } from "../../../icons/yellow//ship.svg";
import { ReactComponent as Planet } from "../../../icons/yellow/planet.svg";
import { ReactComponent as Headphones } from "../../../icons/yellow/headphones.svg";
import { ReactComponent as Clock } from "../../../icons/yellow/clock.svg";
import { ReactComponent as Coin } from "../../../icons/yellow/coin.svg";
import plane from "../../../images/HomePage/plane.jpg";
import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  FeatureTextStyled,
  FeaturesIMGWrapper,
  FeaturesListStyled,
  FeaturesStyled,
} from "./Features.styled";

export const Features = () => {
  return (
    <FeaturesStyled>
      <ContainerStyled width={1640}>
        <FeaturesIMGWrapper>
          <img
            src={plane}
            alt="Plane"
            width="929px"
            height="610px"
          />
          <div data-aos="flip-down">
            <PlanePale />
            <p>Moving your products across borders</p>
          </div>
        </FeaturesIMGWrapper>
        <FeatureTextStyled>
          <SpanStyled>Why Choose</SpanStyled>
          <SectionTitleStyled>
            We create opportunity to reach potential
          </SectionTitleStyled>
          <TextStyled>
            Leverage agile frameworks to provide a robust
            synopsis for strategy foster collaborative
            thinking to further the overall value
            proposition.
          </TextStyled>
          <FeaturesListStyled data-aos="fade-left">
            <li>
              <Box />
              <h3>Safe Package</h3>
            </li>
            <li>
              <Ship />
              <h3>Ship Everyware</h3>
            </li>
            <li>
              <Planet />
              <h3>Global Tracking</h3>
            </li>
            <li>
              <Headphones />
              <h3>24/7 Support</h3>
            </li>
            <li>
              <Clock />
              <h3>In Time Delivery</h3>
            </li>
            <li>
              <Coin />
              <h3>Transparant Pricing</h3>
            </li>
          </FeaturesListStyled>
        </FeatureTextStyled>
      </ContainerStyled>
    </FeaturesStyled>
  );
};
