import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
> div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-right: 8px;
  margin-left: 8px;
};
button{
  font-weight: 300;
}
> h2{
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 300;
}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarSection = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

