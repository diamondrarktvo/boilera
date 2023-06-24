import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Icon } from "_shared";


export default function MessageScreen() {

  //const navigation = useNavigation<>();

  return (
    <View style={styles.container}>
        <Text>Message </Text>
        <Text>Show message book</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
