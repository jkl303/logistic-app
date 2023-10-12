import { FC } from "react";

import { ContainerStyled } from "../../../styles/Container.styled";
import {
  DetailsListStyled,
  ProjectDetailsStyled,
} from "./ProjectDetails.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";

interface IProjectDetails {
  projectDetails: {
    wideImg: string;
    customer: string;
    category: string;
    status: string;
  };
}

export const ProjectDetails: FC<IProjectDetails> = ({
  projectDetails: { wideImg, customer, category, status },
}) => {
  return (
    <ProjectDetailsStyled>
      <ContainerStyled>
        <img
          src={wideImg}
          alt={category}
          width="642px"
          height="380px"
        />
        <div>
          <SectionTitleStyled>
            Project Details
          </SectionTitleStyled>
          <DetailsListStyled>
            <li>
              <div>
                <p>Customer</p>
                <span>:</span>
              </div>
              <p>{customer}</p>
            </li>
            <li>
              <div>
                <p>Category</p>
                <span>:</span>
              </div>
              <p>{category}</p>
            </li>
            <li>
              <div>
                <p>Date</p>
                <span>:</span>
              </div>
              <p>12 December, 2023</p>
            </li>
            <li>
              <div>
                <p>Status</p>
                <span>:</span>
              </div>
              <p>{status}</p>
            </li>
            <li>
              <div>
                <p>Tags</p>
                <span>:</span>
              </div>
              <p>Life Style Travel , Best Delivery</p>
            </li>
          </DetailsListStyled>
        </div>
      </ContainerStyled>
    </ProjectDetailsStyled>
  );
};
