import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "_features";
import { navigationName } from "_utils";
import { stackNavigationConfig } from "./configStack";
import { StackNavigationParams } from "./Types";

const Stack = createStackNavigator<StackNavigationParams>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationName.home}>
        <Stack.Screen name={navigationName.home} component={HomeScreen} />

        <Stack.Group
          screenOptions={stackNavigationConfig.screenOptionsForDisplayedHeader}
        >
          <Stack.Screen name={navigationName.home} component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
