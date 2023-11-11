import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const ProjectLowerSectionStyled = styled.section`
  padding: 0;

  iframe {
    ${mediaQueries("tablet")`
    height: 642px;
    margin-bottom: 40px;`}
    ${mediaQueries("mobile")`
    height: 340px;
    margin-bottom: 30px;`}
  }

  p {
    margin: 12px 0 30px;
  }
`;
