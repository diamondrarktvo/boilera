import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "_features";
import { navigationName } from "_utils";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={navigationName.home}>
                <Stack.Screen name={navigationName.home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;