import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 19px 36px;
  border: none;
  background: linear-gradient(
    127deg,
    #ffb629 0%,
    #ffda56 12.5%,
    #ffd7a6 25%,
    white 100%
  );

  font-family: var(--secondaryFont);
  font-weight: 600;
  line-height: 1.35;
  background-size: 400%;
  background-position: left;
  color: #23212a;
  transition: background-position 300ms ease;

  :hover,
  :focus {
    cursor: pointer;
    background-position: right;
  }
`;
