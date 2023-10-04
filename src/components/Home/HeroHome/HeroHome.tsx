import { LinkAnimated } from "../../common/LinkAnimated/LinkAimated";
import { ContainerStyled } from "../../../styles/Container.styled";
import {
  HeroHomeContentStyled,
  HeroHomeStyled,
} from "./HeroHome.styled";
import { SpanStyled } from "../../../styles/Span.styled";

export const HeroHome = () => {
  return (
    <HeroHomeStyled>
      <ContainerStyled>
        <HeroHomeContentStyled>
          <SpanStyled bgColor="hero">
            Logistics & Suspaply Chain Solutions
          </SpanStyled>
          <h1>
            Your Gateway
            <br />
            to any Destination in the World
          </h1>
          <p>
            In augue ligula, feugiat ut nulla consequat. Ut
            est lacus, molestie in arcu no, iaculis vehicula
            ipsum. Nunc faucibus, nisl id dapibus finibus,
            enim diam interdum nulla, sed laoreet risus
            lectus.{" "}
          </p>
          <LinkAnimated
            href={"/about-us"}
            title={"Explore More"}
          />
        </HeroHomeContentStyled>
      </ContainerStyled>
    </HeroHomeStyled>
  );
};
