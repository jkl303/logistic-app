const breakpionts = {
  tablet: 1199,
  mobile: 767,
};

export const mediaQueries = (
  key: keyof typeof breakpionts,
) => {
  return (style: TemplateStringsArray) =>
    `@media screen and (max-width: ${breakpionts[key]}px) {${style}}`;
};
