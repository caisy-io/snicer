import React, { FC } from "react";
import { useStore } from "../../context/store";
import { SSidebarZoom } from "./styles/SSidebarZoom";

interface ISidebarOffset {
  children?: React.ReactNode;
}

export const SidebarZoom: FC<ISidebarOffset> = ({ ...props }) => {
  const { config, setConfig } = useStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig((curr) => ({
      ...curr,
      zoom: parseFloat(e.target.value) / 100,
    }));
  };

  if (config.mode == "contain") return null;

  return (
    <SSidebarZoom>
      <div>
        <label htmlFor="zoom">Zoom</label>
        <input
          type="range"
          min="100"
          max="300"
          value={config.zoom * 100}
          onChange={onChange}
          id="zoom"
        />
        {" "}({config.zoom})
      </div>
      
    </SSidebarZoom>
  );
};
