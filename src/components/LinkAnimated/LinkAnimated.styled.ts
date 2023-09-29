import styled from "styled-components";

export const LinkAnimatedStyled = styled.a<{
  dark?: boolean;
  center?: boolean;
}>`
  display: block;
  position: relative;
  overflow: hidden;
  width: 194px;
  height: 60px;
  border: none;
  ${(props) =>
    props.center &&
    "margin-left: auto; margin-right: auto;"};
  background: ${(props) =>
    props.dark ? "var(--primaryDark)" : "var(--gradient)"};

  span {
    position: absolute;
    min-width: 100px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    font-family: var(--secondaryFont);
    font-weight: 600;
    line-height: 1.35;
    color: ${(props) => (props.dark ? "#fff" : "#23212a")};
  }

  div {
    position: absolute;
    width: 120px;
    height: 120px;
    transform: translate(150px, 16px);
    border-radius: 50%;
    background-color: ${(props) =>
      props.dark ? "var(--secondaryDark)" : "white"};
    transition: transform 600ms ease;
  }

  :hover,
  :focus {
    cursor: pointer;

    div {
      transform: scale(2.5);
    }
  }
`;
