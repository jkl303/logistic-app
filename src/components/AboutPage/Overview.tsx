import truckAbout from "../../images/AboutPage/truckAbout.jpg";
import loaderAbout from "../../images/AboutPage/loaderAbout.jpg";

import { ContainerStyled } from "../../styles/Container.styled";
import {
  ImgsStyled,
  OverviewContentStyled,
  OverviewStyled,
  OverviewTextStyled,
  SwitchBtnsStyled,
} from "./Overview.styled";
import { SpanStyled } from "../../styles/Span.styled";
import { SectionTitleStyled } from "../../styles/SectionTitle.styled";
import { TextStyled } from "../../styles/Text.styled";
import { LinkAnimated } from "../common/LinkAnimated/LinkAimated";
import { useState } from "react";

export const Overview = () => {
  const [visibleText, setVisibleText] = useState<
    "Approach" | "Goal" | "Mission"
  >("Approach");

  return (
    <OverviewStyled>
      <ContainerStyled width={1740}>
        <OverviewContentStyled>
          <ImgsStyled>
            <img
              src={truckAbout}
              alt="Plane"
              width="707px"
              height="474px"
              loading="lazy"
            />
            <div data-aos="fade-right">
              <img
                src={loaderAbout}
                alt="Plane"
                width="235px"
                height="230px"
                loading="lazy"
              />
            </div>
          </ImgsStyled>
          <OverviewTextStyled>
            <SpanStyled>About Us</SpanStyled>
            <SectionTitleStyled>
              Our Company Overview
            </SectionTitleStyled>
            <TextStyled>
              Our global reach, deep industry knowledge,
              innovative technology, and extensive
              transportation network have allowed us to
              bring the latest learning to bear on our
              customers’ unique challenges and desires.
            </TextStyled>
            <SwitchBtnsStyled>
              <button
                type="button"
                onClick={() => setVisibleText("Approach")}>
                Our Approach
              </button>
              <button
                type="button"
                onClick={() => setVisibleText("Goal")}>
                Our Goal
              </button>
              <button
                type="button"
                onClick={() => setVisibleText("Mission")}>
                Our Mission
              </button>
            </SwitchBtnsStyled>
            {visibleText === "Approach" && (
              <TextStyled>
                We leverage our scale to create innovative
                and tailored solutions that help our
                customers optimize their supply chains to
                stay ahead of their competition in a market
                that changes every single day.
              </TextStyled>
            )}
            {visibleText === "Goal" && (
              <TextStyled>
                Whether you've been shipping for years, or
                this is your first time crossing a new
                border, there are shipments to book, customs
                to clear and warehouses to manage. We're
                with you every step of the way.
              </TextStyled>
            )}
            {visibleText === "Mission" && (
              <TextStyled>
                Our most advanced logistic solution yet. It
                incorporates all eServices into one portal,
                giving you maximum support at every stage of
                your supply chain. From tracking and
                scheduling to booking and reporting,
                eSchenker has your logistics covered.
              </TextStyled>
            )}
            <LinkAnimated
              href="/service"
              title="Learn More"
              dark
            />
          </OverviewTextStyled>
        </OverviewContentStyled>
      </ContainerStyled>
    </OverviewStyled>
  );
};
