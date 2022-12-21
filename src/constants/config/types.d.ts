export interface INumberValue {
  name: string;
  value: number;
}
export interface IStringValue {
  name: string;
  value: string;
}
export interface IStringValueWithPosition {
  name: string;
  value: IValuePositiond<string>;
}
export interface IValuePositiond<T> {
  center: T;
  bottomLeft: T;
  bottomRight: T;
  topLeft: T;
  topRight: T;
}

type IPosition =
  | "center"
  | "bottomLeft"
  | "bottomRight"
  | "topLeft"
  | "topRight";
  
type IMode = "cover" | "contain";

export interface IConfig {
  padding: IStringValueWithPosition;
  radius: INumberValue;
  shadow: IStringValueWithPosition;
  gradient: IStringValue;
  position: IPosition;
  ratio: INumberValue;
  offset: IValuePositiond<string>;
  mode: IMode;
}
