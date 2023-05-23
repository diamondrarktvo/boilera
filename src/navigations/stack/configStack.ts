import { CardStyleInterpolators } from "@react-navigation/stack";
import { Easing } from "react-native";

//config for transitionSpec
const transitionConfig = {
  animation: "timing",
  config: {
    duration: 60,
    easing: Easing.linear,
  },
};

export const stackNavigationConfig = {
  screenOptionsForDisplayedHeader: {
    headerShown: true,
    gestureEnabled: true,
    //CardStyleInterpolators est utile pour regler la transition durant le changement de screen, gestureEnabled doit être activé | gestureDirection peut aussi le faire|
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, //on utilise la transition par défaut de IOS
    transitionSpec: {
      open: transitionConfig,
      close: transitionConfig,
    },
    headerTitleAlign: "center",
  },
  screenOptionsForHiddenHeader: {},
  screenOptionsTransparentHeader: {},
};
