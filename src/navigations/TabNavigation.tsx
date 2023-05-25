//IMPORT FROM NODE_MODULES
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


//LOCAL IMPORT
import { TabParamList } from "./Types";
import { Icon } from "_shared";


//IMPORT SCREEN
import { HomeScreen, SearchScreen } from "_features";

const Tab = createMaterialBottomTabNavigator<TabParamList>();

const TabNavigation = () => {

  return (
    <Tab.Navigator 
      initialRouteName="home_screen"
      shifting={true}
    >
      <Tab.Screen
        name="home_screen"
        component={HomeScreen}
        options={{ 
          tabBarLabel: "Accueil",
          tabBarIcon: ({ focused,  color }) => (
              <Icon name="home" color={color} size={focused ? 26 : 30} />
          )
          }}
      />
      <Tab.Screen
        name="search_screen"
        component={SearchScreen}
        options={{ 
          tabBarLabel: "Recherche",
          tabBarIcon: ({ focused, color }) => (
              <Icon name="search" color={color} size={focused ? 26 : 30} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
