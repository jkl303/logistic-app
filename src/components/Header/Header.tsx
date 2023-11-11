import { Link } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { ReactComponent as ClockIcon } from "../../icons/common/clockDark.svg";
import { ReactComponent as LetterIcon } from "../../icons/common/letter.svg";
import { ReactComponent as PhoneIcon } from "../../icons/common/phone.svg";
import { ContainerStyled } from "../../styles/Container.styled";
import {
  ContactsStyled,
  HeaderStyled,
  UpperSectionStyled,
} from "./Header.styled";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { NavBarMob } from "./NavBarMob/NavBarMob";

export const Header = () => {
  const width = useWindowWidth();

  return (
    <UpperSectionStyled>
      <HeaderStyled>
        <ContainerStyled>
          <Link to="/">
            <img
              src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cf9bc5db063a81fc859659_transitflow-logo.svg"
              loading="lazy"
              alt="Logistics Logo"
            />
          </Link>
          <ContactsStyled>
            <li>
              <ClockIcon />
              <div>
                <p>Mon - Sat 9.00 - 18.00</p>
                <p>Sunday Closed</p>
              </div>
            </li>
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
          </ContactsStyled>
        </ContainerStyled>
      </HeaderStyled>
      {width > 1199 ? <NavBar /> : <NavBarMob />}
    </UpperSectionStyled>
  );
};
