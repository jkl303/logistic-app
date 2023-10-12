import styled from "styled-components";

export const StatsStyled = styled.section`
  ul {
    display: flex;
    width: 100%;
    height: 145px;

    li {
      display: flex;
      width: 50%;
      gap: 16px;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #d4d4d4;
      border-bottom: 1px solid #d4d4d4;

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
