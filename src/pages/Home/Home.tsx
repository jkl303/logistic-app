import { About } from "../../components/Home/About/About";
import { Features } from "../../components/Home/Features/Features";
import { HeroHome } from "../../components/Home/HeroHome/HeroHome";
import { Reviews } from "../../components/common/Reviews/Reviews";
import { WhatWeDo } from "../../components/Home/WhatWeDo/WhatWeDo";
import { WorkImgs } from "../../components/Home/WorkImgs/WorkImgs";
import { Team } from "../../components/common/Team/Team";
import { Contact } from "../../components/Home/Contact/Contact";
import { News } from "../../components/common/News/News";
import { ImgSection } from "../../components/Home/ImgSection.styled";

const Home = () => {
  return (
    <>
      <HeroHome />
      <WhatWeDo />
      <About />
      <WorkImgs />
      <Reviews />
      <Features />
      <Team />
      <Contact />
      <News />
      <ImgSection />
    </>
  );
};

export default Home;
