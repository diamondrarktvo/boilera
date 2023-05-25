import { StackNavigationOptions } from "@react-navigation/stack";

export interface StackNavigationConfig {
  screenOptionsForDisplayedHeader: StackNavigationOptions;
  screenOptionsForHiddenHeader: StackNavigationOptions;
}

export type StackParamList = {
  main_tabs: undefined;
  details_book: undefined;
};

export type TabParamList = {
  home_screen: undefined;
  search_screen: undefined;
};
