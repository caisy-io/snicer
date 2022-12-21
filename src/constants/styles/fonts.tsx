import { createGlobalStyle } from "styled-components";

export const GSFonts = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url('/fonts/inter-var.woff2') format('woff2');
  }
`;
