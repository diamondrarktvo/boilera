import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainScreen, Text } from "_shared";

export default function MainScreenMessAndNotif() {
  //const navigation = useNavigation<>();

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Boite de réception">
      <Text variant="bigTitle">Main </Text>
      <Text variant="tertiary">Show main book</Text>
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
