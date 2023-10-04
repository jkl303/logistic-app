import styled from "styled-components";

export const CompaniesListStyled = styled.ul<{
  dark?: boolean;
}>`
  display: flex;

  li {
    position: relative;
    border: 1px solid var(--text);
    background-color: transparent;

    :not(:last-child) {
      border-right: none;
    }

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
      top: 0;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: ${(props) =>
        props.dark ? "#fff" : "var(--primaryDark)"};
      ${(props) =>
        props.dark &&
        "background: linear-gradient( transparent 0%, #09124280 100%)"};
      transition: color 250ms ease;
    }
  }
`;
