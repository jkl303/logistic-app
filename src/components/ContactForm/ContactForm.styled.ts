import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const ContactSectionStyled = styled.section`
  padding-bottom: 50px;

  > div {
    text-align: center;

    h2 {
      margin: 12px 0 3px;
    }

    > p {
      padding: 0 16px;
    }
  }
`;

export const ContactSectionWrapper = styled.div`
  max-width: 954px;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
  background-color: var(--primaryDark);
  ${mediaQueries("tablet")`padding: 100px 60px;`}
  ${mediaQueries("mobile")`padding: 50px 20px;`}
`;

export const IconsListStyled = styled.ul`
  display: flex;
  margin: 40px 0;
  padding: 0 40px;
  justify-content: space-between;
  ${mediaQueries(
    "mobile",
  )`flex-direction: column; align-items: center; row-gap: 20px;`}

  li {
    display: flex;
    max-width: 160px;
    flex-direction: column;
    align-items: center;
    gap: 11px;

    p,
    a {
      font-family: var(--secondaryFont);
      font-size: 14px;
      line-height: 1.35;
      font-weight: 500;
      color: white;
    }
  }
`;

export const ContactFormStyled = styled.form`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;

  input {
    width: 48%;
    height: 60px;
    padding: 0 30px;
    border: 1px solid #e0e0e0;
    background-color: transparent;

    font-size: 20px;
    color: #fff;
    ${mediaQueries("mobile")`width: 100%;`}

    ::placeholder {
      font-size: 18px;
      color: #fff;
    }

    :focus {
      border-color: var(--primaryYellow);
      outline: none;
    }
  }

  textarea {
    width: 100%;
    height: 154px;
    padding: 21px 24px;
    border: 1px solid #e0e0e0;
    background-color: transparent;
    resize: none;

    font-size: 20px;
    color: #fff;

    ::placeholder {
      font-size: 18px;
      color: #fff;
    }

    :focus {
      border-color: var(--primaryYellow);
      outline: none;
    }
  }

  button {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SubmitMessageStyled = styled.p`
  width: 100%;
  height: 50px;
  border: 3px solid var(--primaryYellow);
  background-color: #fff;

  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;
