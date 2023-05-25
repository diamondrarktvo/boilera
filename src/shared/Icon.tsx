import React from 'react';
import { Icon as RNEIcon, IconProps } from "@rneui/themed";

//BOTTOM TAB
const Icon = ({name, size, color}: IconProps) => {
  return (
      <RNEIcon name={name} size={size} color={color} />
  );
};
export default Icon;