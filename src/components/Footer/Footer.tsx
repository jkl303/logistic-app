import { Link } from "react-router-dom";
import { ReactComponent as LetterIcon } from "../../icons/common/letter.svg";
import { ReactComponent as PhoneIcon } from "../../icons/common/phone.svg";
import { ReactComponent as InIcon } from "../../icons/socials/in.svg";
import { ReactComponent as TwitterIcon } from "../../icons/socials/twitter.svg";
import { ReactComponent as FBIcon } from "../../icons/socials/facebook.svg";
import { ButtonStyled } from "../../styles/Button.styled";
import {
  FooterContactsStyled,
  FooterFormStyled,
  FooterPagesStyled,
  FooterStyled,
  LowerFooterStyled,
  MidFooterStyled,
  UpperFooterStyled,
  UpperFooterWrapper,
} from "./Footer.styled";
import { ContainerStyled } from "../../styles/Container.styled";
import { useState } from "react";

export const Footer = () => {
  const [submitted, setSubmitted] =
    useState<boolean>(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <FooterStyled>
      <UpperFooterWrapper>
        <UpperFooterStyled>
          <Link to="/">
            <img
              src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cf9bc5db063a81fc859659_transitflow-logo.svg"
              loading="lazy"
              alt="Logistics Logo"
            />
          </Link>
          <h2>Pages</h2>
          <h2>Subscribe</h2>
        </UpperFooterStyled>
      </UpperFooterWrapper>
      <ContainerStyled>
        <MidFooterStyled>
          <FooterContactsStyled data-aos="fade-right">
            <p>
              Leverage agile frameworks to provide a robust
              synopsis for strategy collaborative thinking
              to further the overall value proposition.
            </p>
            <div>
              <LetterIcon />
              <div>
                <p>Email</p>
                <a href="mailto:contact@logistics.com">
                  contact@logistics.com
                </a>
              </div>
            </div>
            <div>
              <PhoneIcon />
              <div>
                <p>Call Us</p>
                <a href="tel:00112365489">
                  (00) 112 365 489
                </a>
              </div>
            </div>
          </FooterContactsStyled>

          <FooterPagesStyled>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/about-us">Our Team</Link>
            </li>
            <li>
              <Link to="/about-us">Our Project</Link>
            </li>
            <li>
              <Link to="/about-us">Pricing</Link>
            </li>
            <li>
              <Link to="/about-us">Contact</Link>
            </li>
          </FooterPagesStyled>

          <FooterFormStyled
            onSubmit={handleSubmit}
            data-aos="fade-left">
            <input
              type="email"
              placeholder="Email here*"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            />
            <ButtonStyled type="submit">
              {submitted ? "Submited" : "Send Now"}
            </ButtonStyled>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/vladyslav-zoz-15a8ba1a8/">
                  <InIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FBIcon />
                </a>
              </li>
            </ul>
          </FooterFormStyled>
        </MidFooterStyled>
      </ContainerStyled>
      <LowerFooterStyled>
        <ContainerStyled>
          <p>
            Copyright © TransitFlow | Designed by VictorFlow
            - Powered by Webflow.
          </p>
        </ContainerStyled>
      </LowerFooterStyled>
    </FooterStyled>
  );
};
