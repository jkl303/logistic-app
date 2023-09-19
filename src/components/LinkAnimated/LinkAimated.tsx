import { FC } from "react";
import { LinkAnimatedStyled } from "./LinkAnimated.styled";

interface LinkProps {
  href: string;
  title: string;
  dark?: boolean;
}

export const LinkAnimated: FC<LinkProps> = ({ href, title, dark }) => {
  return (
    <LinkAnimatedStyled href={href} dark={dark}>
      <span>{title}</span>
      <div />
    </LinkAnimatedStyled>
  );
};
