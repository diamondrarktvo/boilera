import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "_features";
import { stackNavigationConfig } from "./configStack";
import { StackParamsList } from "./Types";

const Stack = createStackNavigator<StackParamsList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"home_screen"}>

        <Stack.Group
          screenOptions={stackNavigationConfig.screenOptionsForDisplayedHeader}
        >
          <Stack.Screen name={"home_screen"} component={HomeScreen} options={{title: "Accueil"}} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
