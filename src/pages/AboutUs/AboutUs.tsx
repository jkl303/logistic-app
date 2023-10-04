import { Overview } from "../../components/AboutPage/Overview";
import { Services } from "../../components/common/Services/Services";
import { Companies } from "../../components/common/Companies/Companies";
import { Hero } from "../../components/common/Hero/Hero";
import { Reviews } from "../../components/common/Reviews/Reviews";
import { Team } from "../../components/common/Team/Team";

import heroAbout from "../../images/AboutPage/heroAbout.jpg";
import { Pricing } from "../../components/common/Pricing/Pricing";
import { FAQ } from "../../components/common/FAQ/FAQ";

const AboutUs = () => {
  return (
    <>
      <Hero
        text="About Us"
        title="About Our Logistics"
        img={heroAbout}
      />
      <Overview />
      <Services />
      <Team />
      <Reviews />
      <Pricing />
      <FAQ />
      <Companies />
    </>
  );
};

export default AboutUs;
