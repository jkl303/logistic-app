import styled from "styled-components";

export const WhatWeDoStyled = styled.div`
  display: flex;
  padding: 120px 0;
  justify-content: space-between;
`;

export const TitleStyled = styled.div`
  h2 {
    margin-top: 15px;
  }
`;

export const ServicesStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 83px 70px;
  justify-content: flex-end;

  li {
    display: flex;
    align-items: flex-start;

    div {
      position: relative;
      margin-left: 40px;
      max-width: 277px;

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
        height: 110px;
        background-color: #d8d8d8;
      }
    }
  }
`;
