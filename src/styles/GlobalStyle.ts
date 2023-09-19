import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { variables } from "./variables";
import { animations } from "./animations";

export const GlobalStyle = createGlobalStyle`

${variables}
${animations}

body {
  font-family: var(--primaryFont);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

p {font-family: var(--secondaryFont);}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a, span {text-decoration:none;
font-family: var(--secondaryFont);}
`;
