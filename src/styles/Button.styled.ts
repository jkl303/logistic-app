import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  padding: 19px 36px;
  background: linear-gradient(
    127deg,
    #ffb629 0%,
    #ffda56 12.5%,
    #ffd7a6 25%,
    white 100%
  );
  color: #23212a;
  font-family: var(--secondaryFont);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.35;
  background-size: 400%;
  background-position: left;
  transition: background-position 300ms ease;

  :hover,
  :focus {
    cursor: pointer;
    background-position: right;
  }
`;
