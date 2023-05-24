//IMPORT FROM NODE_MODULES
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//LOCAL IMPORT
import { TabParamList } from './Types';

//IMPORT SCREEN
import { HomeScreen, SearchScreen } from '_features';

const Tab = createMaterialBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='home_screen' component={HomeScreen} options={{title: "Accueil"}} />
            <Tab.Screen name='search_screen' component={SearchScreen} options={{title: "Recherche"}} />
        </Tab.Navigator>
    )
}

export default TabNavigation;