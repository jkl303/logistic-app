import styled from "styled-components";

export const BlogMainStyled = styled.section`
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const BlogTextStyled = styled.div`
  width: 664px;

  p {
    margin: 12px 0 30px;
  }
`;

export const BlogQuoteStyled = styled.div`
  height: 172px;
  margin-bottom: 40px;
  padding: 50px 55px;
  background-color: var(--primaryDark);

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
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;

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
