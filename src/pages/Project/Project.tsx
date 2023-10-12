import { Hero } from "../../components/common/Hero/Hero";
import { Projects } from "../../components/common/Projects/Projects";
import { Stats } from "../../components/common/Stats/Stats";
import heroProject from "../../images/ProjectPage/heroProject.jpg";

const Project = () => {
  return (
    <>
      <Hero
        text="Gallery"
        title="Our Project"
        img={heroProject}
      />
      <Projects all />
      <Stats />
    </>
  );
};

export default Project;
