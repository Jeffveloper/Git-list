import { createGlobalStyle } from "styled-components";
import COLOR from "./Colors";
import TYPOGRAPHY from "./Typography";
import FONTS from "./Fonts";

const GlobalStylesStyled = createGlobalStyle`
  ${FONTS}
  :root{
    ${COLOR}
    ${TYPOGRAPHY}
  }
  body{
    margin: 0;  
    background-color: var(--bg);
    color: var(--grey);
    font: var(--body1-regular);
  }
  /* html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  } */
  `;

export default GlobalStylesStyled;
