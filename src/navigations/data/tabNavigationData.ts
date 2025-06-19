import { TFunction } from 'i18next';
import { TabRouteTypes } from '../Types/Types';
import { HomeScreen, SettingScreen } from '_features';

export const getTabNavigationData = (t: TFunction<'common'>): TabRouteTypes[] => {
   return [
      {
         name: 'home_screen',
         component: HomeScreen,
         tabLabel: t('tab_navigation.label.home'),
         icon: 'home',
      },
      {
         name: 'setting_screen',
         component: SettingScreen,
         tabLabel: t('tab_navigation.label.setting'),
         icon: 'settings',
      },
   ];
};
