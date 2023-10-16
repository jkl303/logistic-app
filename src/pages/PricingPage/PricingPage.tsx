import { Hero } from "../../components/common/Hero/Hero";
import { Pricing } from "../../components/common/Pricing/Pricing";
import { Reviews } from "../../components/common/Reviews/Reviews";
import heroPricing from "../../images/others/heroPricing.jpg";

const PricingPage = () => {
  return (
    <>
      <Hero
        text="Pricing"
        title="Our Best Price"
        img={heroPricing}
      />
      <Pricing />
      <Reviews darkBG />
    </>
  );
};

export default PricingPage;
