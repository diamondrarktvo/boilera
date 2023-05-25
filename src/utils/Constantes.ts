//ROUTE FOR NAVIGATION
import { RouteTypes } from "./Types";
import { HomeScreen, SearchScreen } from "_features";

export const TABROUTES: RouteTypes[] = [
  {
    name: "home_screen",
    component: HomeScreen,
    tabLabel: "Accueil",
    icon: "home",
    color: "red",
  },
  {
    name: "search_screen",
    component: SearchScreen,
    tabLabel: "Recherche",
    icon: "search",
    color: "blue",
  },
];
