import { useParams } from "react-router-dom";

import { projects } from "../../data/projects";

import { Hero } from "../../components/common/Hero/Hero";
import heroProjectSingle from "../../images/ProjectPage/heroProjectSingle.jpg";
import { ProjectDetails } from "../../components/ProjectSinglePage/ProjectDetails/ProjectDetails";
import { ProjectMidSection } from "../../components/ProjectSinglePage/ProjectMidSection/ProjectMidSection";
import { ProjectLowerSection } from "../../components/ProjectSinglePage/ProjectLowerSection/ProjectLowerSection";
import { Projects } from "../../components/common/Projects/Projects";

const ProjectSingle = () => {
  const { name } = useParams();

  const currentProject = projects.filter((project) => {
    return project.customer === name;
  })[0];

  const { customer, category } = currentProject;

  return (
    <>
      <Hero
        text={category}
        title={customer}
        img={heroProjectSingle}
      />
      <ProjectDetails projectDetails={currentProject} />
      <ProjectMidSection title={category} />
      <ProjectLowerSection />
      <Projects />
    </>
  );
};

export default ProjectSingle;
