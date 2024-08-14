import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import ActionButtons from "./Components/ActionButtons";
import PickDisplay from "./Components/PickDisplay";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userChoice, setUserChoice] = useState("non right now");

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    console.log(`You chose:${choice}`);
  };

  return (
    <LinearGradient colors={["#FF6347", "#FFD700"]} style={styles.container}>
      <Header />
      <ActionButtons onPress={handleUserChoice} />
      <PickDisplay choice={userChoice} />
    </LinearGradient>
  );
}

// STYLESHEETS

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
