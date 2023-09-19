import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--primaryDark);
  color: #fff;
`;

export const UpperFooterWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
`;

export const UpperFooterStyled = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1292px;
  align-items: center;

  a {
    width: 428px;
    padding: 43px 45px;
    background-color: var(--primaryDark);
  }

  > h2 {
    :nth-child(2) {
      margin: 0 378px 0 54px;
    }
  }
`;

export const MidFooterStyled = styled.div`
  display: flex;
  padding: 30px 0 43px;
`;

export const FooterContactsStyled = styled.div`
  > p {
    margin-bottom: 33px;
    width: 320px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 14px;

    :last-child {
      margin-top: 30px;
    }

    p,
    a {
      font-size: 14px;
      line-height: 1.5;
      font-weight: 500;
      color: white;
    }
  }
`;

export const FooterPagesStyled = styled.ul`
  display: flex;
  margin-left: 117px;
  flex-direction: column;

  a {
    font-family: Krub;
    line-height: 2.5;
    color: #fff;
  }
`;

export const FooterFormStyled = styled.form`
  display: flex;
  margin-left: auto;
  width: 317px;
  height: 140px;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 35px;

  input {
    width: 100%;
    height: 60px;
    padding: 0 30px;
    border: 1px solid #4e5683;
    background-color: var(--primaryDark);

    font-size: 18px;
    color: #fff;
  }

  button {
    height: 60px;
  }

  ul {
    display: flex;
    gap: 27px;

    a {
      color: #fff;
      svg {
        transition: transform 200ms linear;
      }

      :hover,
      :focus {
        svg {
          transform: translateY(-5px);
        }
      }
    }
  }
`;

export const LowerFooterStyled = styled.div`
  padding: 15px 0 18px;
  border-top: 1px solid #4e5683;

  p {
    font-family: Krub;
    line-height: 2.5;
  }
`;
