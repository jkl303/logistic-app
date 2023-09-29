import { FC } from "react";
import { LinkAnimatedStyled } from "./LinkAnimated.styled";

interface LinkProps {
  href: string;
  title: string;
  dark?: boolean;
  center?: boolean;
}

export const LinkAnimated: FC<LinkProps> = ({
  href,
  title,
  dark,
  center,
}) => {
  return (
    <LinkAnimatedStyled
      href={href}
      dark={dark}
      center={center}>
      <span>{title}</span>
      <div />
    </LinkAnimatedStyled>
  );
};
