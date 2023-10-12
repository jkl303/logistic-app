import { FC } from "react";
import { projects } from "../../../data/projects";
import { ReactComponent as SeeMoreIcon } from "../../../icons/common/seeMore.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import {
  ProjectsListStyled,
  ProjectsStyled,
} from "./Projects.styled";
import { Link } from "react-router-dom";

export const Projects: FC<{ all?: boolean }> = ({
  all,
}) => {
  const renderedProjects = all
    ? projects
    : projects.slice(1, 4);

  return (
    <ProjectsStyled>
      <ContainerStyled>
        {!all && (
          <SectionTitleStyled>
            Related Project
          </SectionTitleStyled>
        )}
        <ProjectsListStyled>
          {renderedProjects.map(
            ({ img, customer, category }) => {
              return (
                <li key={customer}>
                  <Link to={`/project/${customer}`}>
                    <img
                      src={img}
                      alt={customer}
                      width="386px"
                      height="352px"
                      loading="lazy"
                    />
                    <div>
                      <SeeMoreIcon />
                    </div>
                  </Link>
                </li>
              );
            },
          )}
        </ProjectsListStyled>
      </ContainerStyled>
    </ProjectsStyled>
  );
};
