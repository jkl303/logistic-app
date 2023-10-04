import tank from "../../../images/HomePage/tank.jpg";
import work from "../../../images/HomePage/work.jpg";
import truck from "../../../images/HomePage/truck.jpg";
import cargoAbove from "../../../images/HomePage/cargoAbove.jpg";
import shipGrimal from "../../../images/HomePage/shipGrimal.jpg";

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
        <ImgList data-aos="flip-down">
          <li>
            <img
              src={tank}
              alt="tank"
              width="320px"
              height="408px"
              loading="lazy"
            />
            <ImgTextStyled>
              <h3>Liquid Transportation</h3>
              <p>Premium Tankers</p>
            </ImgTextStyled>
          </li>
          <li>
            <img
              src={work}
              alt="work"
              width="320px"
              height="408px"
              loading="lazy"
            />
            <ImgTextStyled>
              <h3>Packaging Solutions</h3>
              <p>Warehouse Management</p>
            </ImgTextStyled>
          </li>
          <li>
            <img
              src={truck}
              alt="truck"
              width="320px"
              height="408px"
              loading="lazy"
            />
            <ImgTextStyled>
              <h3>Contract Logistics</h3>
              <p>Road Transportation</p>
            </ImgTextStyled>
          </li>
          <li>
            <img
              src={cargoAbove}
              alt="cargo"
              width="320px"
              height="408px"
              loading="lazy"
            />
            <ImgTextStyled>
              <h3>Warehouse & Distribution</h3>
              <p>Large Warehouse</p>
            </ImgTextStyled>
          </li>
          <li>
            <img
              src={shipGrimal}
              alt="ship"
              width="320px"
              height="408px"
              loading="lazy"
            />
            <ImgTextStyled>
              <h3>Specialized Transport</h3>
              <p>Ocean Transports</p>
            </ImgTextStyled>
          </li>
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
