import { stats } from "../../../data/stats";
import { ReactComponent as BoxIcon } from "../../../icons/yellow/box.svg";
import { ReactComponent as MoneyIcon } from "../../../icons/yellow/money.svg";
import planeHalf from "../../../images/HomePage/planeHalf.jpg";
import writing from "../../../images/HomePage/writing.jpg";
import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  AboutContentStyled,
  AboutListStyled,
  AboutStyled,
  AboutTextStyled,
  CubeYellowStyled,
  FrontImgStyled,
  StatsStyled,
} from "./About.styled";

export const About = () => {
  return (
    <AboutStyled>
      <ContainerStyled>
        <AboutContentStyled>
          <AboutTextStyled>
            <SpanStyled>Why Us</SpanStyled>
            <SectionTitleStyled>
              We provide full range global logistics
              solution
            </SectionTitleStyled>
            <TextStyled>
              Leverage agile frameworks to provide a robust
              synopsis for strategy foster collaborative
              thinking to further the overall value
              proposition.
              <br />
              <br />
              Organically grow the holistic world view of
              disruptive innovation via workplace diversity
              and empowerment.
            </TextStyled>
            <AboutListStyled data-aos="fade-up">
              <li>
                <BoxIcon />
                <h3>Delivery on Time</h3>
              </li>
              <li>
                <MoneyIcon />
                <h3>Optimized Travel Cost</h3>
              </li>
            </AboutListStyled>
          </AboutTextStyled>
          <FrontImgStyled data-aos="fade-left">
            <img
              src={writing}
              alt="Plane"
              width="272px"
              height="195px"
              loading="lazy"
            />
          </FrontImgStyled>
          <img
            src={planeHalf}
            alt="Plane"
            width="460px"
            height="415px"
            loading="lazy"
          />
          <StatsStyled>
            {stats.slice(1, 3).map(({ number, text }) => {
              return (
                <li key={number}>
                  <span>{number}</span>
                  <CubeYellowStyled />
                  <p>{text}</p>
                </li>
              );
            })}
          </StatsStyled>
        </AboutContentStyled>
      </ContainerStyled>
    </AboutStyled>
  );
};
