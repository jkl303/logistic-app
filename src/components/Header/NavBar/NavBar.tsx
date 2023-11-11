import { useState } from "react";
import { ReactComponent as DropdownIndicator } from "../../../icons/common/dropdown.svg";
import { ReactComponent as InstIcon } from "../../../icons/socials/instagtam.svg";
import { ReactComponent as TwitterIcon } from "../../../icons/socials/twitter.svg";
import { ReactComponent as FBIcon } from "../../../icons/socials/facebook.svg";
import { ReactComponent as InIcon } from "../../../icons/socials/in.svg";

import {
  NavBarStyled,
  NavLinkStyled,
  NavStyled,
  PagesLinkStyled,
  PagesStyled,
  RequestLinkStyled,
  SocialsListStyled,
} from "./NavBar.styled";
import { ContainerStyled } from "../../../styles/Container.styled";

export const NavBar = () => {
  const [isShowPages, setIsShowPages] = useState(false);

  return (
    <NavBarStyled>
      <ContainerStyled>
        <NavStyled>
          <div>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </div>
          <div>
            <NavLinkStyled to="/about-us">
              About
            </NavLinkStyled>
          </div>
          <div>
            <PagesStyled
              onMouseOver={() => setIsShowPages(true)}
              onMouseOut={() => setIsShowPages(false)}
              isShowPages={isShowPages}>
              <span>
                Pages
                <DropdownIndicator />
              </span>
              {isShowPages && (
                <nav>
                  <PagesLinkStyled to="/service">
                    Services
                  </PagesLinkStyled>
                  <PagesLinkStyled to="/service-single">
                    Service Single
                  </PagesLinkStyled>
                  <PagesLinkStyled to="/our-team">
                    Our Team
                  </PagesLinkStyled>
                  <PagesLinkStyled to="/pricing">
                    Pricing
                  </PagesLinkStyled>
                  <PagesLinkStyled to="/blog">
                    Blog
                  </PagesLinkStyled>
                </nav>
              )}
            </PagesStyled>
          </div>
          <div>
            <NavLinkStyled to="/our-project">
              Project
            </NavLinkStyled>
          </div>
          <div>
            <NavLinkStyled to="/contact-us">
              Contact
            </NavLinkStyled>
          </div>
        </NavStyled>

        <SocialsListStyled>
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
        </SocialsListStyled>
        <RequestLinkStyled to="/contact-us">
          Request Quote
        </RequestLinkStyled>
      </ContainerStyled>
    </NavBarStyled>
  );
};
