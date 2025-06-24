import { TFunction } from 'i18next';
import { StackRouteTypes } from '../Types/Types';
import TabNavigation from '../TabNavigation';
import { LoginScreen } from '_features';

export const getStackNavigationData = (t: TFunction<'common'>): StackRouteTypes[] => {
   return [
      {
         name: 'main_tabs',
         component: TabNavigation,
      },
      {
         name: 'login_screen',
         component: LoginScreen,
      }
   ];
};
