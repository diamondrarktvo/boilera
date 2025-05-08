import { SettingScreen } from '_features';
import { TabRouteTypes } from '../Types/Types';
import i18next from '../../i18n/i18n';

export const TABROUTES: TabRouteTypes[] = [
   {
      name: 'setting_screen',
      component: SettingScreen,
      tabLabel: i18next.t('tab_navigation.label.setting'),
      icon: 'settings',
   },
];
