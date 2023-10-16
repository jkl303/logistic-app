import styled from "styled-components";

export const ProjectsStyled = styled.section`
  h2 {
    margin-bottom: 35px;
  }
`;

export const ProjectsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;

  a {
    position: relative;

    :hover,
    :focus {
      cursor: pointer;

      div {
        opacity: 1;
      }
    }

    div {
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 310px;
      height: 275px;
      justify-content: center;
      align-items: center;
      opacity: 0;
      background-color: #1c1f35e8;
      transition: opacity 250ms linear;
    }
  }
`;
