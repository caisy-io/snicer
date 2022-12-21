import styled, { css } from "styled-components";
import { IConfig } from "../../../constants/config/types";

interface ISImagePreview {
  config: IConfig;
  targetWidth: number;
}

const getValuesFromProps = ({ config, targetWidth }: ISImagePreview) => {
  const frameWidth = targetWidth;
  const frameHeight = targetWidth * config.ratio.value;
  const paddingChunks = (config.padding.value as any)[config.position].split(
    ","
  );
  const paddingHeight = (frameHeight * parseFloat(paddingChunks[0])) / 100;
  const paddingWidth = (frameWidth * parseFloat(paddingChunks[1])) / 100;

  const containerWidth =
    targetWidth - paddingWidth * (config.position === "center" ? 2 : 1);
  const containerHeight =
    frameHeight - paddingHeight * (config.position === "center" ? 2 : 1);

  const borderRadius = config.radius.value * frameWidth;

  return {
    borderRadius,
    containerWidth,
    containerHeight,
    paddingWidth,
    paddingHeight,
    frameWidth,
    frameHeight,
  };
};

const CSSRoot = css<ISImagePreview>`
  width: ${(props) => getValuesFromProps(props).frameWidth}px;
  height: ${(props) => getValuesFromProps(props).frameHeight}px;
  background: ${(props) => props.config.gradient.value};
  padding: ${(props) => {
    switch (props.config.position) {
      case "topLeft":
        return `0 ${getValuesFromProps(props).paddingWidth}px ${
          getValuesFromProps(props).paddingHeight
        }px 0`;
      case "topRight":
        return `0 0 ${getValuesFromProps(props).paddingHeight}px ${
          getValuesFromProps(props).paddingWidth
        }px`;
      case "bottomLeft":
        return `${getValuesFromProps(props).paddingHeight}px ${
          getValuesFromProps(props).paddingWidth
        }px 0 0`;
      case "bottomRight":
        return `${getValuesFromProps(props).paddingHeight}px 0 0 ${
          getValuesFromProps(props).paddingWidth
        }px`;
      default:
        return `${getValuesFromProps(props).paddingHeight}px ${
          getValuesFromProps(props).paddingWidth
        }px`;
    }
  }};

  ${(props) =>
    props.config.mode == "contain"
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ""};
`;

const CSSContainer = css<ISImagePreview>`
  width: 100%;
  ${(props) => {
    if (props.config.mode == "cover") {
      return css<ISImagePreview>`
        border-radius: ${(props) => {
          switch (props.config.position) {
            case "topLeft":
              return `0 0 ${getValuesFromProps(props).borderRadius}px 0`;
            case "topRight":
              return `0 0 0 ${getValuesFromProps(props).borderRadius}px`;
            case "bottomLeft":
              return `0 ${getValuesFromProps(props).borderRadius}px 0 0`;
            case "bottomRight":
              return `${getValuesFromProps(props).borderRadius}px 0 0 0`;
            default:
              return `${getValuesFromProps(props).borderRadius}px`;
          }
        }};
        box-shadow: ${(props) =>
          (props.config.shadow.value as any)[props.config.position]};
        overflow: hidden;
        height: 100%;
      `;
    } else {
      return "";
    }
  }};
`;

const CSSImage = css<ISImagePreview>`
  object-fit: ${(props) => props.config.mode};
  background-color: red;
  height: 100%;
  width: 100%;
  object-position: ${(props) =>
    (props.config.offset as any)[props.config.position]};

${(props) => {
  if (props.config.mode == "contain") {
    // this double border radius fixes 1px gap between image and container that is there for now reason in chrome
    return css<ISImagePreview>`
      border-radius: ${getValuesFromProps(props).borderRadius}px;
      box-shadow: ${(props) =>
        (props.config.shadow.value as any)[props.config.position]};
    `;
  } else {
    return "";
  }
}}};  
`;

export const SImagePreview = styled.div<ISImagePreview>`
  ${CSSRoot}
  .container {
    ${CSSContainer}
  }
  img {
    ${CSSImage}
  }
`;
