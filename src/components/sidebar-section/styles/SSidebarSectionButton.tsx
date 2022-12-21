import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const CSSDefault = css<ISSidebarSectionButton>`
  outline: none;
  border-radius: 8px;
  border: 1px solid white;
  background-color: var(--ui-02);
  opacity: 0.8;
  color:  var(--active-text-01-1);
  transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  padding: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const CSSISActive = css`
  opacity: 1;
  color:  var(--active-text-01);
  background-color: var(--ui-03);
`;

export interface ISSidebarSectionButton {
  isActive?: boolean;
}

export const SSidebarSectionButton = styled.button<ISSidebarSectionButton>`
 ${CSSDefault};
 :hover {
    ${CSSISActive};
  }
  ${(props) => (props.isActive ? CSSISActive : "")}
`;
