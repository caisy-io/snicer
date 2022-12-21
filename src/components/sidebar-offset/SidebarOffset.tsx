import React, { FC } from "react";
import { useStore } from "../../context/store";
import { SSidebarOffset } from "./styles/SSidebarOffset";

interface ISidebarOffset {
  children?: React.ReactNode;
}

export const SidebarOffset: FC<ISidebarOffset> = ({ ...props }) => {
  const { config, setConfig } = useStore();

  const currentString = config.offset[config.position];
  console.log(` currentString`, currentString);
  const x = currentString.split(" ")[0].replace("%", "");
  const y = currentString.split(" ")[1].replace("%", "");

  const onChangeX = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newX = e.target.value;
    const newY = y;
    const newOffset = `${newX}% ${newY}%`;
    setConfig((curr) => ({
      ...curr,
      offset: { ...curr.offset, [config.position]: newOffset },
    }));
  };

  const onChangeY = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newX = x;
    const newY = e.target.value;
    const newOffset = `${newX}% ${newY}%`;
    setConfig((curr) => ({
      ...curr,
      offset: { ...curr.offset, [config.position]: newOffset },
    }));
  };

  return (
    <SSidebarOffset>
      <div>
        <label htmlFor="xOffset">Offset X</label>
        <input
          type="range"
          min="0"
          max="100"
          value={x}
          onChange={onChangeX}
          id="xOffset"
        />
        {" "}({x})
      </div>
      <div>
        <label htmlFor="yOffset">Offset Y</label>
        <input
          type="range"
          min="0"
          max="100"
          onChange={onChangeY}
          value={y}
          id="yOffset"
        />
        {" "}({y})

      </div>
    </SSidebarOffset>
  );
};
