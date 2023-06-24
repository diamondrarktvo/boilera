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
  search_screen: undefined;
  favorite_screen: undefined;
  publish_screen: undefined;
  message_and_notification_screen: undefined;
  account_screen: undefined;
};
