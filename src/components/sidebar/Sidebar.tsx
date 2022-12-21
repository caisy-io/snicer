import React from "react";
import {
  GRADIENT_OPTIONS,
  MODE_OPTIONS,
  PADDING_OPTIONS,
  POSITION_OPTIONS,
  RADIUS_OPTIONS,
  RATIO_OPTIONS,
  SHADOW_OPTIONS,
} from "../../constants/config/constants";

import { useStore } from "../../context/store";
import { SidebarOffset } from "../sidebar-offset/SidebarOffset";
import { SidebarSection } from "../sidebar-section/SidebarSection";
import { SSidebar } from "./styles/SSidebar";

interface ISidebar {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<ISidebar> = ({ ...props }) => {
  const { config } = useStore();

  return (
    <SSidebar>
      {props.children}
      <SidebarSection
        options={RATIO_OPTIONS}
        optionKey={"ratio"}
      ></SidebarSection>
      <SidebarSection
        options={POSITION_OPTIONS}
        optionKey={"position"}
      ></SidebarSection>
      <SidebarSection
        optionKey={"mode"}
        options={MODE_OPTIONS}
      ></SidebarSection>
      <SidebarSection
        options={PADDING_OPTIONS}
        optionKey={"padding"}
      ></SidebarSection>
      <SidebarSection
        options={SHADOW_OPTIONS}
        optionKey={"shadow"}
      ></SidebarSection>
      <SidebarSection
        options={RADIUS_OPTIONS}
        optionKey={"radius"}
      ></SidebarSection>
      <SidebarSection
        optionKey={"gradient"}
        options={GRADIENT_OPTIONS}
      ></SidebarSection>

      {config.mode == "cover" ? <SidebarOffset></SidebarOffset> : null}
    </SSidebar>
  );
};
