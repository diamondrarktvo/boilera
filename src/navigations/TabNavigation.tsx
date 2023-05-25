//IMPORT FROM NODE_MODULES
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

//LOCAL IMPORT
import { TabParamList } from "./Types";
import { Icon } from "_shared";
import { TABROUTES } from "_utils";

//IMPORT SCREEN

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home_screen"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {TABROUTES.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "grey",
            tabBarActiveBackgroundColor: route.color,
            tabBarInactiveBackgroundColor: route.color,
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "white" }}>{route.tabLabel}</Text>
              ) : (
                ""
              ),
            tabBarIcon: ({ focused, color }) => (
              <Icon name={route.icon} color={color} size={focused ? 26 : 30} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
