import styled from "styled-components";
import driverAbout from "../../../images/AboutPage/driverAbout.jpg";
import { mediaQueries } from "../../../styles/mediaQueries";

export const FAQStyled = styled.section`
  padding: 125px 0;
  background-color: var(--secondary);
  background-image: url(${driverAbout});
  background-position: right;
  background-repeat: no-repeat;
  ${mediaQueries("tablet")`background-image: none;`}

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FAQTextStyled = styled.div`
  width: 60%;
  padding: 0 30px 20px 0;
  background-color: var(--secondary);
  ${mediaQueries("tablet")`width: 100%;`}

  > h2 {
    width: 310px;
    margin: 15px 0 50px;
    ${mediaQueries("tablet")`width: 100%;`}
  }
`;

export const QuestionStyled = styled.li<{
  visible: boolean;
}>`
  :not(:last-child) {
    margin-bottom: 44px;
  }

  button {
    display: flex;
    width: 100%;
    padding: 0;
    justify-content: space-between;
    border: none;
    background-color: transparent;

    font-size: 20px;
    color: var(--title);

    :hover {
      cursor: pointer;
    }

    svg {
      align-self: center;
      transition: transform 250ms linear, color 250ms ease;
      transform: rotate(
        ${({ visible }) => (visible ? "0deg" : "-90deg")}
      );
      color: ${({ visible }) =>
        visible ? "var(--primaryYellow)" : "var(--title)"};
    }
  }

  p {
    width: 76%;
    max-height: 0;
    opacity: 0;
    transition: max-height 300ms linear,
      opacity 300ms linear, padding-top 300ms linear;
    ${({ visible }) =>
      visible &&
      "max-height: 100px;opacity: 1;padding-top: 18px;@media screen and (max-width: 767px) {max-height: 300px;}"};
    ${mediaQueries("tablet")`width: 100%;`}
  }
  ${mediaQueries("tablet")`width: 100%;`}
`;

export const FAQContactStyled = styled.div`
  align-self: center;
  width: 448px;
  height: 368px;
  padding: 52px 62px;
  color: #fff;
  background-color: var(--primaryDark);
  ${mediaQueries("tablet")`width: 100%;`}

  h3 {
    margin: 23px 0 21px;

    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export const FAQPhoneStyled = styled.div`
  display: flex;
  margin-bottom: 26px;
  align-items: center;
  gap: 14px;

  p,
  a {
    line-height: 1.35;
    color: #fff;
  }

  a {
    text-decoration-style: none;
    font-family: var(--secondaryFont);
    transition: color 250ms ease;

    :hover,
    :focus {
      color: var(--primaryYellow);
    }
  }
`;
