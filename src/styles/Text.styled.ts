import styled from "styled-components";

export const TextStyled = styled.p<{
  white?: boolean;
}>`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) =>
    props.white ? "#fff" : "var(--text)"};
`;
