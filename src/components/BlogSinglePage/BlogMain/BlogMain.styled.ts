import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const BlogMainStyled = styled.section`
  > div {
    display: flex;
    justify-content: space-between;
    ${mediaQueries("tablet")`flex-direction: column;`}
  }
`;

export const BlogTextStyled = styled.div`
  width: 664px;
  ${mediaQueries("tablet")`width: 100%;`}

  p {
    margin: 12px 0 30px;
  }

  img {
    ${mediaQueries(
      "tablet",
    )`width: 664px; margin-left: auto; margin-right: auto;`}
    ${mediaQueries("mobile")`width: 100%; height: auto;`}
  }
`;

export const BlogQuoteStyled = styled.div`
  display: flex;
  height: 172px;
  margin-bottom: 40px;
  padding: 0 55px;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryDark);
  ${mediaQueries("mobile")`padding: 0 30px; height: 220px;`}

  p {
    margin: 0;

    text-align: center;
    font-family: var(--primaryFont);
    font-size: 20px;
    font-style: italic;
    color: #fff;
  }
`;

export const ImgDescriptionStyled = styled.p`
  text-align: center;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text);
`;

export const SocialsStyled = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  ${mediaQueries("mobile")`height: 100px;
  flex-direction: column;
  justify-content: space-evenly;`}

  ul {
    display: flex;
    gap: 20px;

    a {
      color: var(--title);

      svg {
        transition: transform 250ms ease;
      }

      :hover {
        svg {
          transform: translateY(-4px);
        }
      }
    }
  }

  p {
    margin: 0;

    font-family: var(--secondaryFont);
    font-weight: 500;
    line-height: 1.5;
    color: var(--text);

    > a {
      font-family: inherit;
      color: inherit;
      transition: color 250ms ease;

      :hover {
        color: var(--primaryDark);
      }
    }
  }
`;
