import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 100;
background-color: var(--ui-03);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SImagePreviewCenterWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

