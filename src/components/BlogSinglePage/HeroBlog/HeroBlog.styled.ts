import styled from "styled-components";

export const HeroBlogStyled = styled.section<{
  img: string;
}>`
  background-color: var(--primaryDark);
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroBlogContentStyled = styled.div`
  max-width: 1100px;
  padding: 198px 0;
  color: white;

  h1 {
    margin-top: 8px;

    font-size: 60px;
    font-weight: 700;
  }
`;

export const DateStyled = styled.div`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #fff;
    }

    p {
      font-weight: 500;
      color: #fff;
    }
  }
`;
