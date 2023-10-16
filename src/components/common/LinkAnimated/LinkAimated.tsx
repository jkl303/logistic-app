import { FC } from "react";
import { LinkAnimatedStyled } from "./LinkAnimated.styled";

interface LinkProps {
  href: string;
  title: string;
  dark?: boolean;
  center?: boolean;
  width?: number;
  nodiv?: boolean;
}

export const LinkAnimated: FC<LinkProps> = ({
  href,
  title,
  dark,
  center,
  width,
  nodiv,
}) => {
  return (
    <LinkAnimatedStyled
      href={href}
      dark={dark}
      center={center}
      width={width}>
      <span>{title}</span>
      {!nodiv && <div />}
    </LinkAnimatedStyled>
  );
};
