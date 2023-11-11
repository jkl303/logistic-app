import { FC } from "react";

import cargoBlogSingle from "../../../images/others/cargoBlogSingle.jpg";
import { ReactComponent as InstIcon } from "../../../icons/socials/instagtam.svg";
import { ReactComponent as TwitterIcon } from "../../../icons/socials/twitter.svg";
import { ReactComponent as FBIcon } from "../../../icons/socials/facebook.svg";
import { ReactComponent as InIcon } from "../../../icons/socials/in.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { TextStyled } from "../../../styles/Text.styled";
import {
  BlogMainStyled,
  BlogQuoteStyled,
  BlogTextStyled,
  ImgDescriptionStyled,
  SocialsStyled,
} from "./BlogMain.styled";
import { Link } from "react-router-dom";
import { BlogLinks } from "./BlogLinks/BlogLinks";

export const BlogMain: FC<{ category: string }> = ({
  category,
}) => {
  return (
    <BlogMainStyled>
      <ContainerStyled>
        <BlogTextStyled>
          <SectionTitleStyled>
            Your Logistics Solutions
          </SectionTitleStyled>
          <TextStyled>
            Leverage agile frameworks to provide a robust
            synopsis for high level overviews. Iterative
            approaches to corporate strategy foster
            collaborative thinking to further the overall
            value proposition. Organically grow the holistic
            world view of disruptive innovation via
            workplace diversity and empowerment.
          </TextStyled>
          <BlogQuoteStyled>
            <p>
              “Digitization within transport and logistics
              means seamless service to our customers,
              visibility in the supply chain, and driving a
              more efficient business.”
            </p>
          </BlogQuoteStyled>
          <SectionTitleStyled>
            Safest Logistics Solutions Provider With
            Integrity
          </SectionTitleStyled>
          <TextStyled>
            Bring to the table win-win survival strategies
            to ensure proactive domination. At the end of
            the day, going forward, a new normal that has
            evolved from generation X is on the runway
            heading towards a streamlined cloud solution.
            User generated content in real-time will have
            multiple touchpoints for offshoring.
          </TextStyled>
          <img
            src={cargoBlogSingle}
            alt="The Cargo Ship"
            width="100%"
            height="274px"
          />
          <ImgDescriptionStyled>
            The Cargo Ship
          </ImgDescriptionStyled>
          <TextStyled>
            Capitalize on low hanging fruit to identify a
            ballpark value added activity to beta test.
            Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology
            immersion along the information highway will
            close the loop on focusing solely on the bottom
            line. Podcasting operational change management
            inside of workflows to establish a framework.
            <br />
            <br />
            Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your
            eye on the ball while performing a deep dive on
            the start-up mentality to derive convergence on
            cross-platform integration.
          </TextStyled>
          <SocialsStyled>
            <ul>
              <li>
                <a href="https://www.instagram.com/">
                  <InstIcon />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FBIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vladyslav-zoz-15a8ba1a8/">
                  <InIcon />
                </a>
              </li>
            </ul>
            <p>
              Category :&nbsp;
              <Link to={`/blog/${category}`}>
                {category}
              </Link>
            </p>
          </SocialsStyled>
        </BlogTextStyled>
        <BlogLinks />
      </ContainerStyled>
    </BlogMainStyled>
  );
};
