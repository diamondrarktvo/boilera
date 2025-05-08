import { HomeScreen, SettingScreen } from '_features';
import { TabRouteTypes } from '../Types/Types';
import i18next from '../../i18n/i18n';

export const TABROUTES: TabRouteTypes[] = [
   {
      name: 'home_screen',
      component: HomeScreen,
      tabLabel: i18next.t('common:tab_navigation.label.home'),
      icon: 'home',
   },
   {
      name: 'setting_screen',
      component: SettingScreen,
      tabLabel: i18next.t('common:tab_navigation.label.setting'),
      icon: 'settings',
   },
];
