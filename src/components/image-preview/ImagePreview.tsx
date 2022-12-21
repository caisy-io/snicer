import React from "react";
import { useStore } from "../../context/store";
import { SImagePreview } from "./styles/SImagePreview";
import { SImagePreviewCenterWrapper } from "./styles/SImagePreviewCenterWrapper";
import { SImagePreviewHiddenRenderContainer } from "./styles/SImagePreviewHiddenRenderContainer";
import { SImagePreviewMainContainer } from "./styles/SImagePreviewMainContainer";

interface IImagePreview {
  children?: React.ReactNode;
}

export const ImagePreview: React.FC<IImagePreview> = ({ ...props }) => {
  const { images, config, imageResolution, setImageResolution } = useStore();

  // console.log(` config`, config);
  if (!images[0] || !config.ratio.value) return null;

  return (
    <>
      <SImagePreviewMainContainer>
        <SImagePreviewHiddenRenderContainer>
          <SImagePreview
            config={config}
            targetWidth={4096}
            imageResolution={imageResolution}
            id={"image_preview_4k"}
          >
            <div className="container">
              <img
                src={images[0].url}
                onLoad={(event) => {
                  const image = event.target as HTMLImageElement;
                  setImageResolution({
                    height: image.naturalHeight,
                    width: image.naturalWidth,
                  });
                }}
              ></img>
            </div>
          </SImagePreview>
        </SImagePreviewHiddenRenderContainer>
        <SImagePreviewCenterWrapper>
          <SImagePreview
            config={config}
            targetWidth={720}
            imageResolution={imageResolution}
          >
            <div className="container">
              <img src={images[0].url}></img>
            </div>
          </SImagePreview>
        </SImagePreviewCenterWrapper>
      </SImagePreviewMainContainer>
    </>
  );
};
