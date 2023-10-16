import { NotFoundSection } from "../../components/NotFoundSection/NotFoundSection";
import { Hero } from "../../components/common/Hero/Hero";
import hero404 from "../../images/others/heroContact.jpg";

const NotFound = () => {
  return (
    <>
      <Hero
        text="Pricing"
        title="Our Best Price"
        img={hero404}
      />
      <NotFoundSection />
    </>
  );
};

export default NotFound;
