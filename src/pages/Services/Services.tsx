import { HowWeWorks } from "../../components/HowWeWorks/HowWeWorks";
import { Hero } from "../../components/common/Hero/Hero";
import { Reviews } from "../../components/common/Reviews/Reviews";
import { ServicesList } from "../../components/common/Services/ServicesList";
import { Stats } from "../../components/common/Stats/Stats";
import heroServices from "../../images/ServicesPage/heroServices.jpg";

const Services = () => {
  return (
    <>
      <Hero
        text="Services"
        title="Our Logistics Service"
        img={heroServices}
      />
      <HowWeWorks />
      <ServicesList />
      <Reviews />
      <Stats />
    </>
  );
};

export default Services;
