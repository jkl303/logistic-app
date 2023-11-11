import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const TeamStyled = styled.section<{
  all?: boolean;
}>`
  ${(props) =>
    props.all && "background-color: var(--secondary);"}
`;

export const TeamTitleStyled = styled.div`
  text-align: center;
  margin-bottom: 40px;

  span {
    margin-bottom: 16px;
  }
`;

export const TeamListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 54px;

  > li {
    position: relative;
    background-color: var(--primaryDark);

    img {
      ${mediaQueries("mobile")`width: 280px;
    height: 328px;`}
    }

    div {
      padding: 42px 34px 20px;
      color: #fff;

      h3 {
        margin-bottom: 2px;

        font-size: 20px;
        font-weight: 500;
      }

      p {
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }
`;

export const TeamSocialsStyled = styled.ul`
  display: flex;
  position: absolute;
  bottom: 80px;
  right: 0;
  padding: 20px 17px;
  align-items: center;
  gap: 25px;
  background: linear-gradient(
    94deg,
    #ffb629 -1.21%,
    #ffda56 58.66%,
    #ffd7a6 116.84%
  );

  a {
    color: var(--title);

    svg {
      transition: transform 250ms ease;
    }

    :hover,
    :focus {
      svg {
        transform: translateY(-4px);
      }
    }
  }
`;
