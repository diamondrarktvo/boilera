import { StackParamList } from "./Types";

// To type the navigation object obtained from useNavigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList, DrawerParamList {}
  }
}
