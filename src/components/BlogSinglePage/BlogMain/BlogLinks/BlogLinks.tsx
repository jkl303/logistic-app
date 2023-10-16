import { Link } from "react-router-dom";
import {
  BlogLinksStyled,
  BorderLineStyled,
  CategoriesStyled,
  ContactStyled,
  HelpStyled,
} from "./BlogLinks.styled";
import { LinkAnimated } from "../../../common/LinkAnimated/LinkAimated";
import { TextStyled } from "../../../../styles/Text.styled";

export const BlogLinks = () => {
  return (
    <BlogLinksStyled>
      <CategoriesStyled>
        <h2>Categories</h2>
        <ul>
          <li>
            <Link to="/blog/Shipping">Shipping</Link>
            <span>(3)</span>
          </li>
          <li>
            <Link to="/blog/Services">Services</Link>
            <span>(5)</span>
          </li>
          <li>
            <Link to="/blog/Transport">Transport</Link>
            <span>(2)</span>
          </li>
          <li>
            <Link to="/blog/Warehouse">Warehouse</Link>
            <span>(2)</span>
          </li>
          <li>
            <Link to="/blog/Transport Industries">
              Transport Industries
            </Link>
            <span>(5)</span>
          </li>
        </ul>
      </CategoriesStyled>
      <HelpStyled>
        <h2>How can we help you?</h2>
        <TextStyled>
          We appreciate your interest please complete the
          form below and we will contact you to discuss your
          warehousing, distribution, air, ocean freight or
          any other logistics needs.
        </TextStyled>
        <LinkAnimated
          href="/contact"
          title="Contact"
          width={148}
        />
      </HelpStyled>
      <ContactStyled data-aos="fade-left">
        <h2>Get In Touch</h2>
        <div>
          <p>Need help?</p>
          <a href="tel:00112365489">(00) 112 365 489</a>
        </div>
        <BorderLineStyled />
        <div>
          <p>Email</p>
          <a href="mailto:contact@logistics.com">
            contact@logistics.com
          </a>
        </div>
      </ContactStyled>
    </BlogLinksStyled>
  );
};
