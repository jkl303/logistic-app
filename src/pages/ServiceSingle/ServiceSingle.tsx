import { ServiceLowerSection } from "../../components/ServiceSingle/ServiceLowerSection/ServiceLowerSection";
import { ServiceMidSection } from "../../components/ServiceSingle/ServiceMidSection/ServiceMidSection";
import { UpperSection } from "../../components/ServiceSingle/UpperSection/UpperSection";
import { Hero } from "../../components/common/Hero/Hero";
import heroServiceSingle from "../../images/ServiceSinglePage/heroServiceSingle.jpg";

const ServiceSingle = () => {
  return (
    <>
      <Hero
        text="Service Single"
        title="Service Details"
        img={heroServiceSingle}
      />
      <UpperSection />
      <ServiceMidSection />
      <ServiceLowerSection />
    </>
  );
};

export default ServiceSingle;
