import styled from "styled-components";
import { mediaQueries } from "../../../styles/mediaQueries";

export const ServiceLowerSectionStyled = styled.section`
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    iframe {
      ${mediaQueries("tablet")`width: 100%;
    height: 642px;
    margin-bottom: 40px;`}
      ${mediaQueries("mobile")`
    height: 340px;
    margin-bottom: 30px;`}
    }
  }
`;

export const ServiceLowerTextStyled = styled.div`
  width: 490px;
  ${mediaQueries("tablet")`width: 100%;`}

  h2 {
    margin-bottom: 15px;
  }
`;
