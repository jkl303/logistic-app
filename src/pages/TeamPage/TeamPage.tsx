import { Companies } from "../../components/common/Companies/Companies";
import { Hero } from "../../components/common/Hero/Hero";
import { Team } from "../../components/common/Team/Team";
import heroTeam from "../../images/TeamPage/heroTeam.png";

const TeamPage = () => {
  return (
    <>
      <Hero text="Team" title="Our Team" img={heroTeam} />
      <Team all />
      <Companies />
    </>
  );
};

export default TeamPage;
