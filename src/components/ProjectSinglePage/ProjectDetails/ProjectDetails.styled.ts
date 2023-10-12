import styled from "styled-components";

export const ProjectDetailsStyled = styled.section`
  padding: 100px 0;
  background-color: var(--secondary);

  > div {
    display: flex;
    align-items: center;

    img {
      margin-right: 60px;
    }
  }
`;

export const DetailsListStyled = styled.ul`
  margin-top: 40px;

  li {
    display: flex;
    width: 426px;

    :not(:last-child) {
      margin-bottom: 20px;
    }

    p {
      font-family: var(--primaryFont);
      font-size: 20px;
    }

    div {
      display: flex;
      width: 113px;
      justify-content: space-between;
      margin-right: 28px;

      font-weight: 500;
    }
  }
`;
