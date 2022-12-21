import React, { FC } from "react";
import {
  INumberValue,
  IStringValue,
  IStringValueWithPosition,
} from "../../constants/config/types";
import { useStore } from "../../context/store";
import { SSidebarSection } from "./styles/SSidebarSection";
import { SSidebarSectionButton } from "./styles/SSidebarSectionButton";

interface ISidebarSection {
  children?: React.ReactNode;
  options?:
    | string[]
    | IStringValue[]
    | INumberValue[]
    | IStringValueWithPosition[];
  optionKey: string;
}

export const SidebarSection: FC<ISidebarSection> = ({
  optionKey,
  options,
  ...props
}) => {
  const { config, setConfig } = useStore();

  return (
    <SSidebarSection>
      <h2>{optionKey}</h2>
      <div>
        {options?.map((option, index) => {
          const isActive =
            JSON.stringify((config as any)[optionKey]) ==
            JSON.stringify(option);

          return (
            <SSidebarSectionButton
              isActive={isActive}
              key={index}
              onClick={() =>
                setConfig((curr) => ({ ...curr, [optionKey]: option }))
              }
            >
              {(option as any).name || option}
            </SSidebarSectionButton>
          );
        })}
      </div>
      {props.children}
    </SSidebarSection>
  );
};
