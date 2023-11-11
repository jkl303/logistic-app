import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const NewsStyled = styled.section`
  > div {
    > a {
      margin-top: 39px;
    }
  }
`;

export const NewsTitleStyled = styled.div`
  text-align: center;
  margin-bottom: 40px;

  span {
    margin-bottom: 13px;
  }
`;

export const NewsListStyled = styled.ul`
  max-width: 948px;
  margin-left: auto;
  margin-right: auto;

  > li {
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
    border-top: 1px solid #d6d6d6;
    ${mediaQueries("tablet")`
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 60px;`}
    ${mediaQueries("mobile")`
  row-gap: 30px;`}

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
  position: relative;
  width: 456px;

  :hover,
  :focus {
    div {
      opacity: 1;
    }
  }

  div {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 226px;
    align-items: center;
    justify-content: center;
    background-color: #1c1f35e8;
    opacity: 0;
    transition: opacity 300ms linear;
    ${mediaQueries("mobile")`width: 230px;
    height: 140px;`}

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
  ${mediaQueries("tablet")`
  width: 86px;`}

  span {
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
  width: 370px;
  padding: 0 4px 0 29px;
  border-left: 1px solid #d6d6d6;
  ${mediaQueries("tablet")`
  width: 100%;
  padding: 0;
  border-left: none;`}

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
    padding-left: 20px;

    p {
      font-weight: 500;
      line-height: 1.66;
      color: var(--title);
    }
  }
`;
