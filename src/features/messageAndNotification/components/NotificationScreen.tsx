import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Icon } from "_shared";


export default function NotificationScreen() {

  //const navigation = useNavigation<>();

  return (
    <View style={styles.container}>
        <Text>Notification </Text>
        <Text>Show notification book</Text>
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
