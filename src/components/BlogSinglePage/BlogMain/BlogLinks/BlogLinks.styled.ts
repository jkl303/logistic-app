import styled from "styled-components";

export const BlogLinksStyled = styled.div`
  width: 424px;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: var(--title);
  }
`;

export const CategoriesStyled = styled.div`
  margin-bottom: 46px;
  padding: 46px 42px;
  background-color: var(--secondary);

  ul {
    margin-top: 30px;

    li {
      display: flex;
      justify-content: space-between;

      :not(:last-child) {
        margin-bottom: 19px;
        padding-bottom: 15px;
        border-bottom: 1px solid #d6d6d6;
      }

      a {
        transition: color 250ms ease;

        font-size: 18px;
        color: var(--text);

        :hover,
        :focus {
          color: var(--primaryYellow);
        }
      }

      span {
        font-weight: 500;
        color: var(--title);
      }
    }
  }
`;

export const HelpStyled = styled.div`
  margin-bottom: 46px;
  padding: 46px 42px;
  background-color: var(--secondary);

  p {
    margin: 12px 0 30px;
  }
`;

export const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 35px 43px;
  background-color: var(--primaryDark);

  p,
  a {
    font-family: var(--primaryFont);
    line-height: 1.25;
    color: #fff;
  }

  h2 {
    position: relative;
    padding-left: 14px;
    color: #fff;

    ::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--primaryYellow);
    }
  }
`;

export const BorderLineStyled = styled.div`
  height: 1px;
  background-color: #1d2342;
`;
