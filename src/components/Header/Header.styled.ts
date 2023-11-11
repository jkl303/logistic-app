import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const UpperSectionStyled = styled.div``;

export const HeaderStyled = styled.header`
  position: relative;
  z-index: 2;
  padding: 46px 0;
  background-color: var(--primaryDark);

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ${mediaQueries("tablet")`justify-content: center;`}
  }
`;

export const ContactsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 39px;
  padding: 2px 0;

  ${mediaQueries("tablet")`
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  gap: 0;
  `}

  ${mediaQueries("mobile")`
flex-direction: column;
gap: 20px;`}

  li {
    display: flex;
    align-items: center;
    justify-content: center;
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

      p {
        width: 150px;
      }
    }
  }
`;
