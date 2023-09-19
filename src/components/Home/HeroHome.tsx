import { ContainerStyled } from "../../styles/Container.styled";
import { LinkAnimated } from "../LinkAnimated/LinkAimated";
import { HeroContentStyled, HeroHomeStyled } from "./HeroHome.styled";

export const HeroHome = () => {
  return (
    <HeroHomeStyled>
      <ContainerStyled>
        <HeroContentStyled>
          <p>Logistics & Supply Chain Solutions</p>
          <h1>
            Your Gateway
            <br />
            to any Destination in the World
          </h1>
          <p>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </p>
          <LinkAnimated href={"/about-us"} title={"Explore More"} />
        </HeroContentStyled>
      </ContainerStyled>
    </HeroHomeStyled>
  );
};
