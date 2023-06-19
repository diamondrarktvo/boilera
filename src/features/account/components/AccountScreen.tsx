import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image, MainScreen, Row, Text } from "_shared";
import { Size } from "_theme";

export default function AccountScreen() {
  //const navigation = useNavigation<>();

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Menu">
      <Row>
        <Image
          source={require("_images/logoASA.jpeg")}
          style={{ width: Size.IMAGE_SMALL, height: Size.IMAGE_SMALL }}
        />
      </Row>
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
