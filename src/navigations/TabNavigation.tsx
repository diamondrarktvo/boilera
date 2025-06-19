//IMPORT FROM NODE_MODULES
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//LOCAL IMPORT
import { TabParamList, TabRouteTypes } from './Types/Types';
import { useTheme } from '@shopify/restyle';
import { ThemeT } from '_theme';
import { Icon, Text } from '_shared';
import { Layouts } from '_utils';
import { useTranslation } from 'react-i18next';
import { DEFAULT_TAB_ROUTE } from './data/constant';
import { useMemo } from 'react';
import { getTabNavigationData } from './data/tabNavigationData';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
   const { t } = useTranslation('common');
   const theme = useTheme<ThemeT>();
   const { primary, mainForeground, mainBackground, black } = theme.colors;

   //routes
   const TAB_ROUTES: TabRouteTypes[] = useMemo(() => getTabNavigationData(t), [t]);

   return (
      <Tab.Navigator
         initialRouteName={DEFAULT_TAB_ROUTE}
         screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: [
               {
                  backgroundColor: mainBackground,
               },
            ],
         }}>
         {TAB_ROUTES.map((route, index) => (
            <Tab.Screen
               key={route.name + '_' + index}
               name={route.name}
               component={route.component}
               options={{
                  title: route.tabLabel,
                  tabBarActiveTintColor: primary,
                  tabBarInactiveTintColor: mainForeground,
                  tabBarIcon: ({ focused }) => (
                     <Icon
                        name={route.icon}
                        color={focused ? primary : black}
                        size={focused ? Layouts.RFValue(20) : Layouts.RFValue(16)}
                     />
                  ),
                  tabBarLabel: ({ focused }) => (
                     <Text
                        variant={focused ? 'primaryBold' : 'primary'}
                        color={focused ? 'primary' : 'black'}>
                        {route.tabLabel}
                     </Text>
                  ),
               }}
            />
         ))}
      </Tab.Navigator>
   );
};

export default TabNavigation;
