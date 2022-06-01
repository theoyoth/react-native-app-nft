import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Theoyoth expo nft app</Text>
      <StatusBar style="auto" />
    </View>
  );
}
npx expo install react-native-gesture-handler@~2.2.1 react-native-safe-area-context@4.2.4
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
