import { useState } from "react";
import { questions } from "../../../data/questions";

import { ReactComponent as PhoneIcon } from "../../../icons/common/phone.svg";
import { ReactComponent as Dropdown } from "../../../icons/common/dropdown.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  FAQContactStyled,
  FAQPhoneStyled,
  FAQStyled,
  FAQTextStyled,
  QuestionStyled,
} from "./FAQ.styled";
import { LinkAnimated } from "../LinkAnimated/LinkAimated";

export const FAQ = () => {
  const [visibleAnswer, setVisibleAnswer] =
    useState<number>(0);

  return (
    <FAQStyled>
      <ContainerStyled>
        <FAQTextStyled>
          <SpanStyled>FAQ</SpanStyled>
          <SectionTitleStyled>
            Frequently Asked Questions
          </SectionTitleStyled>
          <ul>
            {questions.map(({ id, question, answer }) => {
              return (
                <QuestionStyled
                  key={question}
                  visible={visibleAnswer === id}>
                  <button
                    type="button"
                    onClick={() =>
                      visibleAnswer === id
                        ? setVisibleAnswer(0)
                        : setVisibleAnswer(id)
                    }>
                    {question}
                    <Dropdown />
                  </button>
                  <TextStyled>{answer}</TextStyled>
                </QuestionStyled>
              );
            })}
          </ul>
        </FAQTextStyled>
        <FAQContactStyled>
          <SpanStyled bgColor="dark">Let’s Talk</SpanStyled>
          <h3>You need any help? get free consultation</h3>
          <FAQPhoneStyled>
            <PhoneIcon />
            <div>
              <p>Have Any Questions</p>
              <a href="tel:00112365489">(00) 112 365 489</a>
            </div>
          </FAQPhoneStyled>
          <LinkAnimated
            href="/contact-us"
            title="Contact Us"
            width={142}
          />
        </FAQContactStyled>
      </ContainerStyled>
    </FAQStyled>
  );
};
