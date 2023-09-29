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
    animation: scale 300ms ease;

    div {
      position: relative;
      margin-left: 40px;
      max-width: 277px;

      h3 {
        margin-bottom: 13px;

        font-size: 25px;
        font-weight: 400;
        color: var(--title);
      }

      ::before {
        content: "";
        position: absolute;
        left: -25px;
        width: 1px;
        height: 105px;
        background-color: #d8d8d8;
      }
    }
  }
`;
