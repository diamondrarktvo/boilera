import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { detailScreenNavigationType } from "../types/navigationTypes";
import { Icon } from "_shared";


export default function HomeScreen() {

  const navigation = useNavigation<detailScreenNavigationType>();

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity 
      style={{display: 'flex', flexDirection: 'row'}}
        onPress={() => {
          navigation.navigate('details_book');
        }}
      >
        <Icon name="list" size={24} color="red" />
        <Text>Show detail book</Text>
      </TouchableOpacity>
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
