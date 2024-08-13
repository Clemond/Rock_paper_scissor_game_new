import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import ActionButtons from "./Components/ActionButtons";

export default function App() {
  const handlePress = (choice) => {
    console.log(`You chose:${choice}`);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View>
        <ActionButtons onPress={handlePress} />
      </View>
    </View>
  );
}

// STYLESHEETS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  actionButtonBox: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});
