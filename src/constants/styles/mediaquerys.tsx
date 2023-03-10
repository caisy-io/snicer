import { css } from "styled-components";

export const BREAKPOINTS = {
  DIAMOND: 1920,
  PLATINUM: 1440,
  GOLD: 1280,
  SILVER: 768,
  BRONZE: 0,
};

export const MIN_SILVER = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.SILVER / 16}em) {
    ${css(() => args)};
  }
`;

export const MIN_GOLD = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.GOLD / 16}em) {
    ${css(() => args)};
  }
`;
export const MIN_PLATINUM = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.PLATINUM / 16}em) {
    ${css(() => args)};
  }
`;
export const MIN_DIAMOND = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.DIAMOND / 16}em) {
    ${css(() => args)};
  }
`;
