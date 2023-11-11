import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const CompaniesListStyled = styled.ul<{
  dark?: boolean;
}>`
  display: flex;
  ${mediaQueries("tablet")`flex-wrap: wrap;`}

  li {
    position: relative;
    border: 1px solid var(--text);
    background-color: transparent;
    ${mediaQueries("tablet")`width: 50%;`}
    ${mediaQueries("mobile")`width: 100%;`}

    img {
      opacity: 0;
      transition: opacity 300ms ease;
    }

    :hover,
    :focus {
      img {
        opacity: 1;
      }

      div {
        color: ${(props) => !props.dark && "#fff"};
      }
    }

    div {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      top: 0;
      align-items: center;
      justify-content: center;
      color: ${(props) =>
        props.dark ? "#fff" : "var(--primaryDark)"};
      ${(props) =>
        props.dark &&
        "background: linear-gradient( transparent 0%, #09124280 100%)"};
      transition: color 250ms ease;
    }
  }
`;
