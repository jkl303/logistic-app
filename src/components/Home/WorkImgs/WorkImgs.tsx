import { workImgs } from "../../../data/workImgs";

import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { ContainerStyled } from "../../../styles/Container.styled";
import { LinkAnimated } from "../../common/LinkAnimated/LinkAimated";
import {
  BGStyled,
  ImgList,
  ImgTextStyled,
  WorkImgsStyled,
} from "./WorkImgs.styled";

export const WorkImgs = () => {
  return (
    <WorkImgsStyled>
      <ContainerStyled width={1672}>
        <SectionTitleStyled>
          Transporting Across The World
        </SectionTitleStyled>
        <ImgList>
          {workImgs.map(({ title, text, img }) => {
            return (
              <li key={title} data-aos="flip-down">
                <img
                  src={img}
                  alt={text}
                  width="320px"
                  height="408px"
                  loading="lazy"
                />
                <ImgTextStyled>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </ImgTextStyled>
              </li>
            );
          })}
        </ImgList>
        <LinkAnimated
          href={"/our-project"}
          title={"More Work"}
          dark
          center
        />
      </ContainerStyled>
      <BGStyled />
    </WorkImgsStyled>
  );
};
