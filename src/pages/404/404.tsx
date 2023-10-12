import { Hero } from "../../components/common/Hero/Hero";
import hero404 from "../../images/others/hero404.jpg";

const NotFound = () => {
  return (
    <>
      <Hero
        text="Pricing"
        title="Our Best Price"
        img={hero404}
      />
    </>
  );
};

export default NotFound;
