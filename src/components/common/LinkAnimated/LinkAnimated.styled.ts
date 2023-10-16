import styled from "styled-components";

interface LinkStylesProps {
  dark?: boolean;
  center?: boolean;
  width?: number;
}

export const LinkAnimatedStyled = styled.a<LinkStylesProps>`
  display: block;
  position: relative;
  overflow: hidden;
  width: ${(props) =>
    props.width ? props.width : "194"}px;
  height: 60px;
  border: none;
  ${(props) =>
    props.center &&
    "margin-left: auto; margin-right: auto;"};
  background: ${(props) =>
    props.dark ? "var(--primaryDark)" : "var(--gradient)"};
  transition: background-color 200ms ease;

  span {
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: color 200ms ease;

    text-align: center;
    font-family: var(--secondaryFont);
    font-weight: 600;
    line-height: 1.35;
    color: ${(props) => (props.dark ? "#fff" : "#23212a")};
  }

  div {
    position: absolute;
    width: ${(props) => (props.width ? "60" : "150")}px;
    height: ${(props) => (props.width ? "60" : "150")}px;
    transform: translate(
      ${(props) =>
        props.width ? "115px, 32px" : "150px , 16px"}
    );
    border-radius: 50%;
    background-color: ${(props) =>
      props.dark ? "var(--secondaryDark)" : "#fff"};
    transition: transform 600ms ease,
      background-color 200ms ease;
  }

  :hover,
  :focus {
    cursor: pointer;

    div {
      transform: scale(4);
    }
  }
`;
