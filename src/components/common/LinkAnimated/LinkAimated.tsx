import { FC } from "react";
import { LinkAnimatedStyled } from "./LinkAnimated.styled";

interface LinkProps {
  href: string;
  title: string;
  dark?: boolean;
  center?: boolean;
  width?: number;
}

export const LinkAnimated: FC<LinkProps> = ({
  href,
  title,
  dark,
  center,
  width,
}) => {
  return (
    <LinkAnimatedStyled
      href={href}
      dark={dark}
      center={center}
      width={width}>
      <span>{title}</span>
      <div />
    </LinkAnimatedStyled>
  );
};
