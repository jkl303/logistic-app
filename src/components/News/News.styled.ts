import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewsStyled = styled.section`
  padding: 100px 0;
`;

export const NewsTitleStyled = styled.div`
  text-align: center;
  margin-bottom: 40px;

  span {
    margin-bottom: 13px;
  }
`;

export const NewsListStyled = styled.ul`
  margin-bottom: 39px;

  > li {
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
    border-top: 1px solid #d6d6d6;

    :not(:last-child) {
      margin-bottom: 35px;
    }

    :last-child {
      padding-bottom: 30px;
      border-bottom: 1px solid #d6d6d6;
    }
  }
`;

export const ImgLinkStyled = styled(Link)`
  display: inline-block;
  position: relative;

  :hover,
  :focus {
    div {
      opacity: 1;
    }
  }

  div {
    display: flex;
    position: absolute;
    width: 350px;
    height: 226px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    background-color: #1c1f35e8;
    opacity: 0;
    transition: opacity 300ms linear;

    p {
      font-weight: 600;
      color: #fff;
    }
  }
`;

export const DateStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: Rubik;
    font-size: 40px;
    font-weight: 600;
    color: var(--title);
  }

  p {
    font-weight: 500;
    color: var(--text);
  }
`;

export const NewsTextStyled = styled.div`
  max-width: 370px;
  padding: 0 4px 0 29px;
  border-left: 1px solid #d6d6d6;

  a {
    font-family: Rubik;
    font-size: 25px;
    color: var(--title);
    transition: color 250ms ease;

    :hover,
    :focus {
      color: var(--primaryYellow);
    }
  }

  > p {
    margin: 16px 0 18px;

    font-weight: 500;
    line-height: 1.5;
    color: var(--text);
  }

  ul {
    list-style: disc;

    p {
      font-weight: 500;
      line-height: 1.66;
      color: var(--title);
    }
  }
`;
