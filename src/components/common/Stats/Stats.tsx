import { stats } from "../../../data/stats";
import {
  CubeYellowStyled,
  StatsStyled,
} from "./Stats.styled";

export const Stats = () => {
  return (
    <StatsStyled>
      <ul>
        {stats.map(({ number, text }) => {
          return (
            <li key={number}>
              <span>{number}</span>
              <CubeYellowStyled />
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </StatsStyled>
  );
};
