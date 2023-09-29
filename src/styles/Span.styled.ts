import styled from "styled-components";

const changeColorType = (bgColor: "dark" | "hero") => {
  switch (bgColor) {
    case "dark":
      return "#e8e8e81a";
    case "hero":
      return "#041c3780";
    default:
      return "#e8e8e880";
  }
};

export const SpanStyled = styled.span<{
  bgColor?: "dark" | "hero";
}>`
  display: inline-block;
  position: relative;
  padding: 0 9px 0 13px;
  background-color: ${(props) =>
    props.bgColor
      ? changeColorType(props.bgColor)
      : "#e8e8e880"};

  font-family: var(----primaryFont);
  font-size: 14px;
  line-height: 1.65;
  ${(props) =>
    props.bgColor &&
    props.bgColor === "dark" &&
    "color: #fff"};

  ::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--primaryYellow);
  }
`;
