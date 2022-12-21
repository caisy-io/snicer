import React, {
  createContext,
  FC,
  useContext,
  useState,
} from "react";
import { DEFAULT_CONFIG } from "../constants/config/constants";
import { IConfig } from "../constants/config/types";
import { toBlob } from "html-to-image";
import download from "downloadjs";
import useKeyboardShortcut from "../hooks/useKeyboardShorcut";

export interface IImage {
  name: string;
  type?: string;
  size?: number;
  url: any;
  blob?: any;
}

export interface IStore {
  config: IConfig;
  setConfig: React.Dispatch<React.SetStateAction<IConfig>>;
  images: IImage[];
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>;
  onImageSave: () => void;
  onImageReset: () => void;
}

const StoreProviderContext = createContext<IStore>({} as any);

export const useStore = () => {
  return useContext(StoreProviderContext);
};

export const StoreProvider: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [config, setConfigLocal] = useState<IConfig>(DEFAULT_CONFIG);
  const [images, setImages] = useState<IImage[]>([]);
  // const [finalImage, setFinalImage] = useState<IImage | null>(null);

  const onImageReset = () => {
    setImages([]);
  };

  const setConfig = (setC: (x: IConfig) => IConfig) => {
    const newConfig = setC(config);

    if ( newConfig.position != config.position && newConfig.position != "center" && newConfig.mode == "contain") {
      newConfig.mode = "cover";
    } else if (newConfig.mode != config.mode && newConfig.mode == "contain") {
      newConfig.position = "center";
    }

    setConfigLocal(newConfig);
  };

  const onImageSave = async () => {
    const htmlEle = document.getElementById("image_preview_4k");
    if (!htmlEle) {
      return;
    }
    /**
     * calling toBlob twice is just a workaround for a bug in the library
     * https://github.com/tsayen/dom-to-image/issues/343
     */
    await toBlob(htmlEle);
    const blob = await toBlob(htmlEle);
    if (blob == null) {
      return;
    }

    // const data = URL.createObjectURL(blob);
    // setFinalImage({ blob, url: data, name: images[0].name+"_snizer" });
    const buffer = await blob.arrayBuffer();
    download(new Uint8Array(buffer), "image.png", "image/png");
  };

  useKeyboardShortcut(
    ["meta", "s"],
    () => {
      onImageSave();
    },
    { overrideSystem: true }
  );

  useKeyboardShortcut(
    ["meta", "r"],
    () => {
      onImageReset();
    },
    { overrideSystem: true }
  );

  return (
    <StoreProviderContext.Provider
      value={{
        config,
        setConfig: setConfig as React.Dispatch<React.SetStateAction<IConfig>>,
        setImages,
        images,
        onImageSave,
        onImageReset,
      }}
    >
      {children}
    </StoreProviderContext.Provider>
  );
};
