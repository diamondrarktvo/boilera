import { useTheme } from "@shopify/restyle";
import { Alert, Pressable, StyleSheet } from "react-native";
import {
  Button,
  Column,
  Icon,
  Input,
  MainScreen,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { Size, Theme } from "_theme";

export default function SearchScreen() {
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;

  return (
    <MainScreen typeOfScreen="tab">
      <TouchableOpacity
        onPress={() => Alert.alert("touché")}
        activeOpacity={0.2}
      >
        <Row
          alignItems="center"
          borderWidth={1}
          borderRadius="md"
          borderColor="offWhite"
          padding="xs"
          marginBottom="s"
        >
          <Icon name="mic" size={Size.ICON_SMALL} color={colors.primary} />
          <Column flex={2} marginHorizontal="xs">
            <Text variant={"primaryBold"}>Destination</Text>
            <Text variant={"tertiary"}>
              N'importe où * faite vos recherches
            </Text>
          </Column>
          <Pressable
            onPress={() => console.log("tay ohh")}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: colors.offWhite,
              padding: 4,
            }}
          >
            <Icon name="tune" size={Size.ICON_SMALL} color={colors.primary} />
          </Pressable>
        </Row>
      </TouchableOpacity>
      <Button label="Search" />
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
