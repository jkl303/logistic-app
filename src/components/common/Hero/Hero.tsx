import { FC } from "react";
import { ContainerStyled } from "../../../styles/Container.styled";
import {
  HeroContentStyled,
  HeroStyled,
} from "./Hero.styled";
import { SpanStyled } from "../../../styles/Span.styled";

interface HeroProps {
  text: string;
  title: string;
  img: string;
}

export const Hero: FC<HeroProps> = ({
  text,
  title,
  img,
}) => {
  return (
    <HeroStyled img={img}>
      <ContainerStyled>
        <HeroContentStyled>
          <SpanStyled bgColor="hero">{text}</SpanStyled>
          <h1>{title}</h1>
        </HeroContentStyled>
      </ContainerStyled>
    </HeroStyled>
  );
};
