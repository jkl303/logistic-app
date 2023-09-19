import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  background-color: #09124240;
`;

export const NavBarStyled = styled.div`
  display: flex;
  height: 78px;
  align-items: center;
`;

export const NavStyled = styled.nav`
  display: flex;

  gap: 60px;

  font-weight: 600;
  line-height: 1.35;
  color: #fff;

  > div:not(:last-child) {
    ::after {
      content: " ";
      position: absolute;
      transform: translateX(30px);
      width: 1px;
      height: 19px;
      background-color: var(--text);
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 26px 0;
  border-bottom: 2px solid transparent;
  color: inherit;
  transition: border-color 250ms ease;

  :hover,
  &.active {
    border-color: #fff;
  }
`;

export const PagesStyled = styled.div<{ isShowPages: boolean }>`
  display: inline-block;
  position: relative;

  span {
    padding: 26px 0;
    :hover {
      cursor: pointer;
    }
  }

  svg {
    margin-left: 5px;
    transform: rotate(${({ isShowPages }) => (isShowPages ? "180deg" : "0")});
    transition: transform 250ms linear;
  }

  nav {
    display: flex;
    position: absolute;
    width: 180px;
    top: 36px;
    left: -30px;
    padding: 20px 30px;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    background-color: #fff;
    animation: scale 250ms ease;
  }
`;

export const PagesLinkStyled = styled(NavLink)`
  display: block;
  color: var(--text);
  transition: color 250ms ease;

  :hover {
    color: var(--secondaryDark);
  }

  &.active {
    color: var(--primaryDark);
  }
`;

export const SocialsListStyled = styled.ul`
  display: flex;
  margin: 0 auto 0 277px;
  gap: 24px;

  a {
    color: white;
    transition: color 250ms ease;

    :hover {
      color: var(--primaryYellow);
    }
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

  font-weight: 600;
  line-height: 1.35;
  color: var(--title);

  :hover,
  :focus {
    background-color: var(--primaryYellow);
  }
`;
