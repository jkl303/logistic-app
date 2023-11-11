import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarMobStyled = styled.div`
  position: relative;
  z-index: 2;
  background-color: #09124240;

  > div {
    display: flex;
    height: 78px;
    padding: 0;
    align-items: center;
  }
`;

export const RequestLinkStyled = styled(Link)`
  display: flex;
  width: 216px;
  height: 78px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: background-color 250ms ease;

  font-family: var(--secondaryFont);
  font-weight: 600;
  line-height: 1.35;
  color: var(--title);

  :hover,
  :focus {
    background-color: var(--primaryYellow);
  }
`;

export const SocialsListStyled = styled.ul`
  display: flex;
  margin-left: 20px;
  gap: 24px;

  a {
    color: white;
    transition: color 250ms ease;

    :hover {
      color: var(--primaryYellow);
    }
  }
`;

export const MenuButtonStyled = styled.button`
  width: 78px;
  height: 78px;
  margin-left: auto;
  padding: 0;
  border: none;

  background-color: transparent;

  svg {
    width: 50px;
    height: 50px;
    fill: var(--primaryYellow);
  }
`;

export const NavMobWrapper = styled.div`
  > div {
    height: 330px;
    overflow: hidden;
  }
`;

export const NavMobStyled = styled.nav<{
  visible: boolean;
}>`
  position: absolute;
  transform: translateX(260px);
  z-index: 1;
  right: 0;
  width: 260px;
  padding: 30px 0;
  border-bottom-left-radius: 8px;
  background-color: var(--primaryDark);
  transition: transform 250ms linear;

  ${({ visible }) => visible && "transform: translatex(0);"}
`;

export const NavLinkMobStyled = styled(NavLink)`
  display: block;
  padding: 4px 0;
  color: inherit;
  transition: color 250ms ease;

  font-family: var(--secondaryFont);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;

  :focus,
  :active {
    color: var(--primaryYellow);
  }
`;
