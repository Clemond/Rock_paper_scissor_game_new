import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import ActionButtons from "./Components/ActionButtons";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const handlePress = (choice) => {
    console.log(`You chose:${choice}`);
  };

  return (
    <LinearGradient colors={["#FF6347", "#FFD700"]} style={styles.container}>
      <Header />
      <ActionButtons onPress={handlePress} />
    </LinearGradient>
  );
}

// STYLESHEETS

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
