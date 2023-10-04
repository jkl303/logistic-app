import styled from "styled-components";

export const UpperSectionStyled = styled.div`
  height: 160px;
  background-color: var(--primaryDark);
`;

export const HeaderStyled = styled.header`
  display: flex;
  padding: 46px 0;
  align-items: center;
  justify-content: space-between;
`;

export const ContactsStyled = styled.ul`
  display: flex;
  gap: 39px;
  padding: 2px 0;

  li {
    display: flex;
    align-items: center;
    gap: 14px;

    > div {
      max-width: 176px;

      p,
      a {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        color: #fff;
      }

      a {
        transition: color 250ms ease;
        font-family: var(--secondaryFont);

        :hover,
        :focus {
          color: var(--primaryYellow);
        }
      }
    }
  }
`;
