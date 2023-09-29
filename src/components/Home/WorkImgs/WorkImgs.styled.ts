import styled from "styled-components";

export const WorkImgsStyled = styled.section`
  position: relative;
  padding: 100px 0;

  h2 {
    text-align: center;
  }
`;

export const BGStyled = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 500px;
  background: linear-gradient(
    95deg,
    #ffb629 -1.19%,
    #ffda56 57.78%,
    #ffd7a6 115.08%
  );
`;

export const ImgList = styled.ul`
  display: flex;
  margin: 35px 0 65px;
  justify-content: space-between;

  li {
    position: relative;
  }
`;

export const ImgTextStyled = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px 25px;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    0deg,
    #091242 14.34%,
    rgba(60, 60, 60, 0) 43.86%
  );

  h3 {
    margin-bottom: 4px;

    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  p {
    font-weight: 500;
    line-height: 1.5;
    color: var(--primaryYellow);
  }
`;
