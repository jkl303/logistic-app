import styled from "styled-components";

export const ContactStyled = styled.section`
  padding: 143px 0;
  background-color: var(--primaryDark);
`;

export const ContactContentStyled = styled.div`
  display: flex;
  margin-bottom: 70px;
  justify-content: space-between;
`;

export const ContactTextStyled = styled.div`
  width: 353px;

  h2 {
    margin: 13px 0 3px;
  }
`;

export const IconsListStyled = styled.ul`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  gap: 30px;

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
        color: white;
      }
    }
  }
`;

export const ContactFormStyled = styled.form`
  display: flex;
  position: relative;
  padding-top: 42px;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
  width: 758px;

  input {
    width: 365px;
    height: 60px;
    padding: 0 30px;
    border: 1px solid #4e5683;
    background-color: transparent;

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

  textarea {
    width: 100%;
    height: 154px;
    padding: 21px 24px;
    border: 1px solid #4e5683;
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
`;

export const SubmitMessageStyled = styled.p`
  width: 100%;
  height: 70px;
  padding: 20px 30px;
  border: 3px solid var(--primaryYellow);
  background-color: #fff;

  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;
