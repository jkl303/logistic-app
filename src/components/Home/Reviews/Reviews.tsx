import { HiOutlineArrowLeft } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { ReactComponent as QuoteIcon } from "../../../icons/yellow/quote.svg";
import { ReactComponent as StarsIcon } from "../../../icons/common/stars.svg";
import KathleenSmith from "../../../images/customers/KathleenSmith.jpg";
import JohnMartin from "../../../images/customers/JohnMartin.jpg";
import KathyTaylor from "../../../images/customers/KathyTaylor.jpg";
import { ContainerStyled } from "../../../styles/Container.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import {
  ButtonsStyled,
  ReviewStyled,
  ReviewTextStyled,
  ReviewTitleStyled,
  ReviewTopStyled,
  ReviewsListStyled,
  ReviewsStyled,
  ReviewsUpperStyled,
} from "./Reviews.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { useState } from "react";

export const Reviews = () => {
  const [reviewsPositon, setReviewsPosition] = useState<
    "left" | "right"
  >("left");

  return (
    <section>
      <ContainerStyled>
        <ReviewsStyled>
          <ReviewsUpperStyled>
            <div>
              <SpanStyled>Testimonial</SpanStyled>
              <SectionTitleStyled>
                What Our Customer Say
              </SectionTitleStyled>
            </div>
            <ButtonsStyled>
              <button
                type="button"
                onClick={() => setReviewsPosition("left")}>
                <HiOutlineArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => {
                  reviewsPositon === "right"
                    ? setReviewsPosition("left")
                    : setReviewsPosition("right");
                }}>
                <HiOutlineArrowRight />
              </button>
            </ButtonsStyled>
          </ReviewsUpperStyled>
          <ReviewsListStyled position={reviewsPositon}>
            <ReviewStyled>
              <ReviewTopStyled>
                <img
                  src={KathleenSmith}
                  alt="Kathleen Smith"
                  width="90px"
                  height="90px"
                  loading="lazy"
                />
                <ReviewTitleStyled>
                  <h3>Kathleen Smith</h3>
                  <p>Fuel Company</p>
                </ReviewTitleStyled>
                <QuoteIcon />
              </ReviewTopStyled>
              <ReviewTextStyled>
                Leverage agile frameworks to provide a
                robust synopsis for strategy foster
                collaborative thinking to further the
                overall value proposition. Organically grow
                the holistic world view of disruptive
                innovation via workplace diversity and
                empowerment.
              </ReviewTextStyled>
              <StarsIcon />
            </ReviewStyled>
            <ReviewStyled>
              <ReviewTopStyled>
                <img
                  src={JohnMartin}
                  alt="JohnMartin"
                  width="90px"
                  height="90px"
                  loading="lazy"
                />
                <ReviewTitleStyled>
                  <h3>John Martin</h3>
                  <p>Restoration Company</p>
                </ReviewTitleStyled>
                <QuoteIcon />
              </ReviewTopStyled>
              <ReviewTextStyled>
                Leverage agile frameworks to provide a
                robust synopsis for strategy foster
                collaborative thinking to further the
                overall value proposition. Organically grow
                the holistic world view of disruptive
                innovation via workplace diversity and
                empowerment.
              </ReviewTextStyled>
              <StarsIcon />
            </ReviewStyled>
            <ReviewStyled>
              <ReviewTopStyled>
                <img
                  src={KathyTaylor}
                  alt="Kathy Taylor"
                  width="90px"
                  height="90px"
                  loading="lazy"
                />
                <ReviewTitleStyled>
                  <h3>Kathy Taylor</h3>
                  <p>Rapids Industrial Products</p>
                </ReviewTitleStyled>
                <QuoteIcon />
              </ReviewTopStyled>
              <ReviewTextStyled>
                We have been using Logistics Transportation
                for several years for our Logistic moves to
                some of our biggest customers. They have
                been very reliable and have provided great
                service to ourselves and to our customers.
              </ReviewTextStyled>
              <StarsIcon />
            </ReviewStyled>
          </ReviewsListStyled>
        </ReviewsStyled>
      </ContainerStyled>
    </section>
  );
};
