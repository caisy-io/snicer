import { createGlobalStyle } from "styled-components";
import { CSSColors } from "./colours/CSSColors";
import { CSSReset } from "./css-reset";
import { CSSScrollbars } from "./css-scrollbars";

export const GSBase = createGlobalStyle`
  ${CSSReset};
  ${CSSScrollbars};
  ${CSSColors}
  
  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  

  html, body, #__next, #__next > main {
    height: 100%;
  }

  a{
    color: inherit;
  }

  strong, b {
    font-weight: bold;
  }
`;
