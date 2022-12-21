import { INumberValue, IStringValueWithPosition, IConfig, IPosition, IMode } from "./types";

export const RATIO_OPTIONS: INumberValue[] = [
  { name: "96:59", value: 59 / 96 },
  { name: "16:9", value: 9 / 16 },
];

export const DEFAULT_RATIO = RATIO_OPTIONS[0];
export const POSITION_OPTIONS = [
  "center",
  "bottomLeft",
  "bottomRight",
  "topLeft",
  "topRight",
] as IPosition[];

export const MODE_OPTIONS = [
  "cover",
  "contain",
] as IMode[];

const DEFAULT_MODE = MODE_OPTIONS[0];

export const DEFAULT_POSITION = POSITION_OPTIONS[0];
export const PADDING_OPTIONS: IStringValueWithPosition[] = [
  {
    name: "small",
    value: {
      center: "8.5,8.2",
      topLeft: "11.3,9.4",
      topRight: "11.3,9.4",
      bottomLeft: "11.3,9.4",
      bottomRight: "11.3,9.4",
    },
  },
  // {
  //   name: "big",
  //   value: {
  //     center: "15,15",
  //     topLeft: "15,15",
  //     topRight: "15,15",
  //     bottomLeft: "15,15",
  //     bottomRight: "15,15",
  //   },
  // },
];
export const DEFAULT_OFFSET = {
  center: "0% 0%",
  topLeft: "0% 0%",
  topRight: "0% 0%",
  bottomLeft: "0% 0%",
  bottomRight: "0% 0%",
};

export const DEFAULT_PADDING = PADDING_OPTIONS[0];

export const SHADOW_OPTIONS: IStringValueWithPosition[] = [
  {
    name: "none",
    value: {
      center: "none",
      bottomLeft: "none",
      bottomRight: "none",
      topLeft: "none",
      topRight: "none",
    },
  },
  {
    name: "small",
    value: {
      center: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      topLeft: "4px 4px 20px rgba(0, 0, 0, 0.2)",
      topRight: "-4px 4px 20px rgba(0, 0, 0, 0.2)",
      bottomLeft: "4px -4px 20px rgba(0, 0, 0, 0.2)",
      bottomRight: "-4px -4px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  {
    name: "big",
    value: {
      center: "0px 16px 30px rgba(0, 0, 0, 0.2)",
      topLeft: "16px 16px 40px rgba(0, 0, 0, 0.2)",
      topRight: "-16px 16px 40px rgba(0, 0, 0, 0.2)",
      bottomLeft: "16px -16px 40px rgba(0, 0, 0, 0.2)",
      bottomRight: "-16px -16px 40px rgba(0, 0, 0, 0.2)",
    },
  },
];
export const DEFAULT_SHADOW = SHADOW_OPTIONS[2];

export const RADIUS_OPTIONS: INumberValue[] = [
  { name: "none", value: 0 },
  { name: "1.25%", value: 0.0125 },
  { name: "1%", value: 0.01 },
  { name: "0.75%", value: 0.0075 },
];
export const DEFAULT_RADIUS = RADIUS_OPTIONS[2];

export const GRADIENT_OPTIONS = [
  {
    name: "blue",
    value: "linear-gradient(102.45deg, #008cff 16.49%, #0047ff 89.22%)",
  },
  {
    name: "green",
    value: "linear-gradient(285.51deg, #00cc76 21.99%, #00af51 96.73%)",
  },
  {
    name: "purple",
    value: "linear-gradient(102.45deg, #6100ff 16.49%, #8000ff 89.22%)",
  },
  {
    name: "orange",
    value: "linear-gradient(102.45deg, #ff8a00 16.49%, #ef7301 89.22%)",
  },
  {
    name: "lime",
    value: "linear-gradient(102.45deg, #9eff00 16.49%, #01ef6f 89.22%)",
  },
];
export const DEFAULT_GRADIENT = GRADIENT_OPTIONS[0];

export const DEFAULT_CONFIG: IConfig = {
  padding: DEFAULT_PADDING,
  ratio: DEFAULT_RATIO,
  shadow: DEFAULT_SHADOW,
  gradient: DEFAULT_GRADIENT,
  position: DEFAULT_POSITION,
  radius: DEFAULT_RADIUS,
  offset: DEFAULT_OFFSET,
  mode: DEFAULT_MODE,
  zoom: 1,
};

export const KEYBINDINGS = {
  toggleRatio: "1",
  togglePosition: "2",
  togglePadding: "3",
  toggleShadow: "4",
  toggleRadius: "5",
  toggleBackground: "6",
  saveImage: "mod+S",
  pasteImage: "mod+V",
  reset: "mod+R",
};
