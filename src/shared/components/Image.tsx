import React from "react";
import {
  Image as ExpoImage,
  ImageProps as ExpoImageProps
} from "expo-image";

const Image = ({ ...props }: ExpoImageProps) => {
  return <ExpoImage {...props} />;
};

export type ImageProps = ExpoImageProps;
export default Image;
