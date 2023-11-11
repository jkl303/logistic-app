import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const WhatWeDoStyled = styled.div`
  display: flex;
  padding: 100px 0;
  justify-content: space-between;
  ${mediaQueries("tablet")`flex-wrap: wrap;`}
`;

export const TitleStyled = styled.div`
  h2 {
    margin-top: 15px;
  }
`;

export const ServicesStyled = styled.ul`
  display: flex;
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 70px 83px;
  ${mediaQueries("tablet")`gap: 60px 0;
  justify-content: space-between;`}

  li {
    display: flex;
    align-items: flex-start;
  }
`;

export const ServiceImgWrapper = styled.div`
  width: 75px;

  img {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ServiceTextStyled = styled.div`
  position: relative;
  flex-shrink: 2;
  max-width: 270px;
  margin-left: 40px;
  ${mediaQueries("tablet")`max-width: 220px;`}
  ${mediaQueries("mobile")`max-width: none;`}

  a {
    transition: color 250ms ease;

    font-family: var(--primaryFont);
    font-size: 25px;
    font-weight: 400;
    color: var(--title);

    :hover,
    :focus {
      color: var(--primaryYellow);
    }
  }

  p {
    margin-top: 13px;
  }

  ::before {
    content: "";
    position: absolute;
    left: -25px;
    width: 1px;
    height: 90%;
    background-color: #d8d8d8;
  }
`;
