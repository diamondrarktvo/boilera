import { TFunction } from 'i18next';
import { StackRouteTypes } from '../Types/Types';
import TabNavigation from '../TabNavigation';

export const getStackNavigationData = (t: TFunction<'common'>): StackRouteTypes[] => {
   return [
      {
         name: 'main_tabs',
         component: TabNavigation,
      },
   ];
};
