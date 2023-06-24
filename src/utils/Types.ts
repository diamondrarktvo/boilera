import React from "react";
import { TabParamList } from "src/navigations/Types";

export interface RouteTypes {
  name: keyof TabParamList;
  component: React.FC<unknown>;
  tabLabel: string;
  icon: string;
}
