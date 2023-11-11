import { FC } from "react";
import { ReactSVG } from "react-svg";

import { companies } from "../../../data/companies";

import { CompaniesListStyled } from "./Companies.styled";
import { ContainerStyled } from "../../../styles/Container.styled";

export const Companies: FC<{ dark?: boolean }> = ({
  dark,
}) => {
  return (
    <section>
      <ContainerStyled>
        <CompaniesListStyled dark={dark}>
          {companies.map(({ name, img }) => {
            return (
              <li key={name} data-aos="flip-right">
                <img
                  src={img}
                  alt={name}
                  width="100%"
                  height="234px"
                />
                <div>
                  <ReactSVG
                    src={require(`../../../icons/companies/${name}.svg`)}
                  />
                </div>
              </li>
            );
          })}
        </CompaniesListStyled>
      </ContainerStyled>
    </section>
  );
};
