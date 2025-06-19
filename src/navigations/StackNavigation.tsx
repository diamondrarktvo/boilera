//IMPORT FROM NODE_MODULES
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//LOCAL IMPORT
import { stackNavigationConfig } from './configStack';
import { StackParamList, StackRouteTypes } from './Types/Types';

//IMPORT NAVIGATION TAB
import { DEFAULT_STACK_ROUTE } from './data/constant';
import { useMemo } from 'react';
import { getStackNavigationData } from './data/stackNavigationData';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
   const { t } = useTranslation('common');

   const STACK_ROUTE: StackRouteTypes[] = useMemo(() => getStackNavigationData(t), [t]);

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName={DEFAULT_STACK_ROUTE}>
            <Stack.Group screenOptions={stackNavigationConfig.screenOptionsForHiddenHeader}>
               {STACK_ROUTE.map((route, index) => (
                  <Stack.Screen
                     key={route.name + '_' + index}
                     name={route.name}
                     component={route.component}
                  />
               ))}
            </Stack.Group>
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default StackNavigation;
