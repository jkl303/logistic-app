import { useState } from "react";

import { ReactComponent as InstIcon } from "../../../icons/socials/instagtam.svg";
import { ReactComponent as TwitterIcon } from "../../../icons/socials/twitter.svg";
import { ReactComponent as FBIcon } from "../../../icons/socials/facebook.svg";
import { ReactComponent as InIcon } from "../../../icons/socials/linkedIn.svg";
import { ReactComponent as MenuIcon } from "../../../icons/common/menuIcon.svg";
import { ReactComponent as CrossIcon } from "../../../icons/common/cross.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import {
  MenuButtonStyled,
  NavBarMobStyled,
  NavLinkMobStyled,
  NavMobStyled,
  NavMobWrapper,
  RequestLinkStyled,
  SocialsListStyled,
} from "./NavBarMob.styled";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export const NavBarMob = () => {
  const width = useWindowWidth();
  const [showMenu, setIsShowMenu] = useState(false);

  return (
    <>
      <NavBarMobStyled>
        <ContainerStyled>
          <RequestLinkStyled to="/contact-us">
            Request Quote
          </RequestLinkStyled>
          {width > 767 && (
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
          )}
          <MenuButtonStyled
            type="button"
            onClick={() =>
              setIsShowMenu((prevState) => !prevState)
            }>
            {showMenu ? <CrossIcon /> : <MenuIcon />}
          </MenuButtonStyled>
        </ContainerStyled>
      </NavBarMobStyled>
      <NavMobWrapper>
        <ContainerStyled>
          <NavMobStyled visible={showMenu}>
            <NavLinkMobStyled to="/">Home</NavLinkMobStyled>
            <NavLinkMobStyled to="/about-us">
              About
            </NavLinkMobStyled>
            <NavLinkMobStyled to="/service">
              Services
            </NavLinkMobStyled>
            <NavLinkMobStyled to="/our-team">
              Our Team
            </NavLinkMobStyled>
            <NavLinkMobStyled to="/pricing">
              Pricing
            </NavLinkMobStyled>
            <NavLinkMobStyled to="/blog">
              Blog
            </NavLinkMobStyled>
            <NavLinkMobStyled to="/our-project">
              Project
            </NavLinkMobStyled>
          </NavMobStyled>
        </ContainerStyled>
      </NavMobWrapper>
    </>
  );
};
