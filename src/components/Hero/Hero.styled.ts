import styled from "styled-components";

export const HeroStyled = styled.section<{ img: string }>`
  background-color: var(--primaryDark);
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroContentStyled = styled.div`
  width: 600px;
  padding: 198px 0;
  color: white;

  h1 {
    margin-top: 8px;

    font-size: 60px;
    font-weight: 700;
  }
`;
