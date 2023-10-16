import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Companies } from "../../components/common/Companies/Companies";
import { FAQ } from "../../components/common/FAQ/FAQ";
import { Hero } from "../../components/common/Hero/Hero";
import heroContact from "../../images/others/heroContact.jpg";

const Contact = () => {
  return (
    <>
      <Hero
        text="Contact"
        title="Contact Us"
        img={heroContact}
      />
      <ContactForm />
      <Companies />
      <FAQ />
    </>
  );
};

export default Contact;
