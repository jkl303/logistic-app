import { FC } from "react";

import { ReactComponent as CalendarIcon } from "../../../icons/common/calendar.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import {
  DateStyled,
  HeroBlogContentStyled,
  HeroBlogStyled,
} from "./HeroBlog.styled";

interface IBlog {
  blog: {
    date: string;
    title: string;
    imgHero: string;
  };
}

export const HeroBlog: FC<IBlog> = ({
  blog: { date, title, imgHero },
}) => {
  return (
    <HeroBlogStyled img={imgHero}>
      <ContainerStyled>
        <HeroBlogContentStyled>
          <DateStyled>
            <CalendarIcon />
            <div>
              <span>{date}</span>
              <p>September</p>
            </div>
          </DateStyled>
          <h1>{title}</h1>
        </HeroBlogContentStyled>
      </ContainerStyled>
    </HeroBlogStyled>
  );
};
