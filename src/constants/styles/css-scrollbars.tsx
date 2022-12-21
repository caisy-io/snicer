import { css } from "styled-components";

export const CSSScrollbars = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    /* background: #3547ffcc; */
    background: trasparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #0c1527cc;
    transition: 400ms background-color;
    cursor: pointer;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #0c1527;
  }
`;
