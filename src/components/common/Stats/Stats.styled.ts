import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const StatsStyled = styled.section`
  padding: 0;

  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    ${mediaQueries(
      "mobile",
    )`border-top: 1px solid #d4d4d4;`}

    li {
      display: flex;
      width: 25%;
      height: 145px;
      gap: 16px;
      align-items: center;
      justify-content: center;
      border-top: 1px solid #d4d4d4;
      border-bottom: 1px solid #d4d4d4;
      ${mediaQueries("tablet")`width: 50%;`}
      ${mediaQueries("mobile")`width: 100%;`}

      :not(:last-child) {
        border-right: 1px solid #d4d4d4;
      }

      span {
        font-size: 50px;
        font-weight: 600;
      }

      p {
        font-size: 20px;
        color: var(--title);
      }
    }
  }
`;

export const CubeYellowStyled = styled.div`
  width: 17px;
  height: 17px;
  background: linear-gradient(
    to right,
    #ffb629 0%,
    #ffda56 50%,
    #ffd7a6 100%
  );
`;
