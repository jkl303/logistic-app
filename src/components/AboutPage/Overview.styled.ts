import styled from "styled-components";

export const OverviewStyled = styled.section`
  padding: 100px 0;
`;

export const OverviewContentStyled = styled.div`
  display: flex;
  gap: 130px;
`;

export const ImgsStyled = styled.div`
  position: relative;
  background-color: #fff;

  div {
    position: absolute;
    bottom: -72px;
    right: -68px;
    padding: 28px;
    background-color: #fff;
  }
`;

export const OverviewTextStyled = styled.div`
  width: 620px;

  h2 {
    margin: 15px 0 12px;
  }

  a {
    margin-top: 35px;
  }
`;

export const SwitchBtnsStyled = styled.div`
  display: flex;
  margin: 19px 0 27px;
  gap: 14px;

  button {
    padding: 15px 39px;
    border: none;
    background-color: var(--secondary);
    transition: color 250ms ease,
      background-color 250ms ease;

    font-size: 19px;
    font-weight: 600;
    line-height: 1.5;
    color: var(--title);

    :hover,
    :focus {
      cursor: pointer;
      color: #fff;
      background-color: var(--primaryYellow);
    }
  }
`;
