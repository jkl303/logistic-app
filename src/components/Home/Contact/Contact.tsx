import { useState } from "react";
import { ReactSVG } from "react-svg";
import { companies } from "../../../data/companies";

import { ReactComponent as ClockIcon } from "../../../icons/common/clockDark.svg";
import { ReactComponent as LetterIcon } from "../../../icons/common/letter.svg";
import { ReactComponent as PhoneIcon } from "../../../icons/common/phone.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  CompaniesListStyled,
  ContactContentStyled,
  ContactFormStyled,
  ContactStyled,
  ContactTextStyled,
  IconsListStyled,
  SubmitMessageStyled,
} from "./Contact.styled";
import { ButtonStyled } from "../../../styles/Button.styled";

export const Contact = () => {
  const [submitted, setSubmitted] =
    useState<boolean>(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ContactStyled>
      <ContainerStyled>
        <ContactContentStyled>
          <ContactTextStyled>
            <SpanStyled bgColor="dark">Contact</SpanStyled>
            <SectionTitleStyled white>
              Get in touch with us
            </SectionTitleStyled>
            <TextStyled white>
              Leverage agile frameworks to provide a robust
              synopsis for strategy foster collaborative
              thinking to further the overall value.
            </TextStyled>
            <IconsListStyled data-aos="fade-right">
              <li>
                <LetterIcon />
                <div>
                  <p>Email</p>
                  <a href="mailto:contact@logistics.com">
                    contact@logistics.com
                  </a>
                </div>
              </li>
              <li>
                <PhoneIcon />
                <div>
                  <p>Call Us</p>
                  <a href="tel:00112365489">
                    (00) 112 365 489
                  </a>
                </div>
              </li>
              <li>
                <ClockIcon />
                <div>
                  <p>
                    Mon - Sat 9.00 - 18.00 Sunday Closed
                  </p>
                </div>
              </li>
            </IconsListStyled>
          </ContactTextStyled>
          {!submitted ? (
            <ContactFormStyled onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name*"
                required
              />
              <input
                type="email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                placeholder="Email*"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                required
              />
              <input
                type="text"
                placeholder="City*"
                required
              />
              <textarea placeholder="Your message" />
              <ButtonStyled type="submit">
                Submit Message
              </ButtonStyled>
            </ContactFormStyled>
          ) : (
            <SubmitMessageStyled>
              Thank you! Your submission has been received!
            </SubmitMessageStyled>
          )}
        </ContactContentStyled>
        <CompaniesListStyled>
          {companies.map(({ name, img }) => {
            return (
              <li key={name} data-aos="flip-right">
                <img
                  src={img}
                  alt={name}
                  width="300px"
                  height="234px"
                />
                <div>
                  <ReactSVG
                    src={require(`../../../icons/companies/${name}.svg`)}
                  />
                </div>
              </li>
            );
          })}
        </CompaniesListStyled>
      </ContainerStyled>
    </ContactStyled>
  );
};
