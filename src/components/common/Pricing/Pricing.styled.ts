import styled from "styled-components";

export const PricingStyled = styled.section`
  padding: 100px 0;
  text-align: center;

  h2 {
    margin: 15px 0 64px;
  }
`;

export const PriceList = styled.ul`
  display: flex;
  justify-content: space-between;

  > li {
    width: 380px;
    padding: 61px 50px;
    color: var(--title);
    background-color: var(--secondary);
    transition: color 300ms ease,
      background-color 300ms ease;

    :hover,
    :focus {
      color: #fff;
      background-color: var(--primaryDark);

      a {
        background: var(--gradient);

        span {
          color: #23212a;
        }

        div {
          background-color: #fff;
        }
      }
    }

    h3 {
      margin-bottom: 38px;

      font-size: 30px;
      font-weight: 500;
    }

    > p {
      font-family: var(--primaryFont);
      font-size: 22px;

      span {
        font-size: 85px;
        font-weight: 500;
      }
    }
  }
`;

export const InfoListStyled = styled.ul`
  margin: 50px 0;

  li {
    display: block;
    padding: 17px 0;
    border-bottom: 1px solid #d6d6d6;

    :first-child {
      border-top: 1px solid #d6d6d6;
    }

    p {
      font-family: Rubik;
      font-size: 20px;
    }
  }
`;
