import styled from "styled-components";

export const SectionTitleStyled = styled.h2<{
  white?: boolean;
}>`
  font-size: 35px;
  font-weight: 600;
  color: ${(props) =>
    props.white ? "#fff" : "var(--title)"};
`;
