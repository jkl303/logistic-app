import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const FooterStyled = styled.footer`
  background-color: var(--primaryDark);
  color: #fff;

  > div:nth-child(2) {
    display: flex;
    padding-bottom: 44px;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 44px;
    ${mediaQueries("mobile")`padding:0 20px 44px;
    flex-direction: column;`}
  }
`;

export const UpperFooterBGStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 118px;
  background-color: rgba(255, 255, 255, 0.08);
`;

export const UpperFooterStyled = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const FooterContactsStyled = styled.div`
  max-width: 427px;

  > a {
    display: block;
    width: 100%;
    padding: 41px 0 41px 45px;
    background-color: var(--primaryDark);
  }
`;

export const FooterTextStyled = styled.div`
  margin-top: 39px;
  padding: 0 63px 0 45px;
  ${mediaQueries("mobile")`padding:0;`}

  > p {
    margin-bottom: 33px;

    line-height: 1.5;
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
      font-family: var(--secondaryFont);
      font-size: 14px;
      line-height: 1.35;
      font-weight: 500;
      color: white;
    }

    a {
      transition: color 250ms ease;

      :hover,
      :focus {
        color: var(--primaryYellow);
      }
    }
  }
`;

export const FooterPagesStyled = styled.div`
  padding-top: 44px;
  margin: 0 60px;
  ${mediaQueries("mobile")`margin: 0;
  padding: 0;
  `}

  ul {
    display: flex;
    margin-top: 74px;
    flex-direction: column;
    ${mediaQueries("mobile")`margin-top: 20px;`}

    a {
      font-family: var(--secondaryFont);
      line-height: 2.5;
      color: #fff;
      transition: color 250ms ease;

      :hover,
      :focus {
        color: var(--primaryYellow);
      }
    }
  }
`;

export const FooterFormStyled = styled.form`
  max-width: 317px;
  padding-top: 44px;
  gap: 20px 35px;
  ${mediaQueries("tablet")`padding-left: 45px;`}
  ${mediaQueries("mobile")`padding: 0;`}

  input {
    width: 100%;
    height: 60px;
    margin: 85px 0 20px;
    padding: 0 30px;
    border: 1px solid #4e5683;
    background-color: var(--primaryDark);

    font-size: 18px;
    color: #fff;
    ${mediaQueries("mobile")`margin-top: 30px;`}
  }

  button {
    height: 60px;
    margin-right: 35px;
  }

  ul {
    display: inline-flex;
    width: 120px;
    align-items: center;
    justify-content: space-between;
    ${mediaQueries("tablet")`width: 80px;`}

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

  > div {
    padding-left: 45px;
  }

  p {
    font-family: Krub;
    line-height: 2.5;
  }
`;
