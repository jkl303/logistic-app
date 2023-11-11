import { useState } from "react";
import { ReactComponent as ClockIcon } from "../../icons/common/clockDark.svg";
import { ReactComponent as LetterIcon } from "../../icons/common/letter.svg";
import { ReactComponent as PhoneIcon } from "../../icons/common/phone.svg";
import { ButtonStyled } from "../../styles/Button.styled";

import { ContainerStyled } from "../../styles/Container.styled";
import { SectionTitleStyled } from "../../styles/SectionTitle.styled";
import { SpanStyled } from "../../styles/Span.styled";
import { TextStyled } from "../../styles/Text.styled";
import {
  ContactSectionStyled,
  ContactFormStyled,
  IconsListStyled,
  SubmitMessageStyled,
  ContactSectionWrapper,
} from "./ContactForm.styled";

export const ContactForm = () => {
  const [submitted, setSubmitted] =
    useState<boolean>(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ContactSectionStyled>
      <ContainerStyled>
        <ContactSectionWrapper>
          <SpanStyled bgColor="dark">Contact</SpanStyled>
          <SectionTitleStyled white>
            Get in touch with us
          </SectionTitleStyled>
          <TextStyled white>
            Leverage agile frameworks to provide a robust
            synopsis for strategy foster collaborative
            thinking to further the overall value.
          </TextStyled>
          <IconsListStyled>
            <li data-aos="flip-up">
              <LetterIcon />
              <a href="mailto:contact@logistics.com">
                contact@logistics.com
              </a>
            </li>

            <li data-aos="flip-up">
              <PhoneIcon />
              <a href="tel:00112365489">(00) 112 365 489</a>
            </li>

            <li data-aos="flip-up">
              <ClockIcon />
              <p>Mon - Sat 9.00 - 18.00 Sunday Closed</p>
            </li>
          </IconsListStyled>
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
        </ContactSectionWrapper>
      </ContainerStyled>
    </ContactSectionStyled>
  );
};
