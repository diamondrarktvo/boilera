import { StackNavigationOptions } from '@react-navigation/stack';

export interface StackNavigationConfig {
   screenOptionsForDisplayedHeader: StackNavigationOptions;
   screenOptionsForHiddenHeader: StackNavigationOptions;
}

export type StackParamList = {
   main_tabs: undefined;
   login_screen: undefined;
};

export type TabParamList = {
   home_screen: undefined;
   setting_screen: undefined;
};

export interface TabRouteTypes {
   name: keyof TabParamList;
   component: React.FC<unknown>;
   tabLabel: string;
   icon: string;
}

export interface StackRouteTypes {
   name: keyof StackParamList;
   component: React.FC<unknown>;
}
