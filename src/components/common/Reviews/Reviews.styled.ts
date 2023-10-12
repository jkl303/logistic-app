import styled from "styled-components";

export const ReviewsStyled = styled.section<{
  darkBG?: boolean;
}>`
  padding: 100px 0;
  background-color: ${(props) =>
    props.darkBG ? "var(--secondary)" : "#fff"};

  > div {
    overflow: hidden;
  }
`;

export const ReviewsUpperStyled = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;

  h2 {
    margin-top: 13px;
  }
`;

export const ButtonsStyled = styled.div`
  align-self: flex-end;

  button {
    width: 45px;
    height: 45px;
    padding: 14px;
    border: none;
    border-radius: 50%;
    color: var(--primaryDark);
    background-color: var(--primaryYellow);
    transition: color 250ms ease,
      background-color 250ms ease;

    :first-child {
      margin-right: 12px;
    }

    :hover {
      cursor: pointer;
      color: #fff;
      background-color: var(--primaryDark);
    }

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;

export const ReviewsListStyled = styled.ul<{
  position: string;
}>`
  display: flex;
  transition: transform 300ms ease-in-out;
  ${({ position }) =>
    position === "right" && "transform: translateX(-50%);"};
`;

export const ReviewStyled = styled.li`
  min-width: 50%;
  padding: 62px 72px;
  background-color: var(--secondary);

  :nth-child(2n) {
    background-color: var(--primaryDark);

    h3 {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }
`;

export const ReviewTopStyled = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 9px;
    border-radius: 50%;
  }

  svg {
    margin-left: auto;
  }
`;

export const ReviewTitleStyled = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: var(--primaryDark);
  }

  p {
    margin-top: 2px;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--primaryDark);
  }
`;

export const ReviewTextStyled = styled.p`
  margin: 24px 0 32px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text);
`;
