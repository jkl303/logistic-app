import styled from "styled-components";
import driverAbout from "../../../images/AboutPage/driverAbout.jpg";

export const FAQStyled = styled.section`
  padding: 125px 0;
  background-color: #f4f4f4;
  background-image: url(${driverAbout});
  background-position: right;
  background-repeat: no-repeat;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const FAQTextStyled = styled.div`
  width: 681px;

  > h2 {
    width: 310px;
    margin: 15px 0 50px;
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
    width: 569px;
    max-height: 0;
    opacity: 0;
    transition: max-height 300ms linear,
      opacity 300ms linear, padding-top 300ms linear;
    ${({ visible }) =>
      visible &&
      "max-height: 100px; opacity: 1;padding-top: 18px;"};
  }
`;

export const FAQContactStyled = styled.div`
  width: 448px;
  max-height: 368px;
  align-self: center;
  padding: 52px 62px;
  color: #fff;
  background-color: var(--primaryDark);

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
  gap: 14px;
  align-items: center;

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
