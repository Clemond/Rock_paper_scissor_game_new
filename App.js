import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import ActionButtons from "./Components/ActionButtons";
import PickDisplay from "./Components/PickDisplay";
import ComputerLogic from "./Logic/ComputerLogic";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const handleUserChoice = (choice) => {
    setUserChoice(choice);

    const computerPick = ComputerLogic();
    setComputerChoice(computerPick);

    console.log(`User choice:${choice}`);
    console.log(`Computer choice: ${computerPick}`);
  };

  return (
    <LinearGradient colors={["#FF6347", "#FFD700"]} style={styles.container}>
      <Header />
      <ActionButtons onPress={handleUserChoice} />
      <PickDisplay choice={userChoice} computerChoice={computerChoice} />
    </LinearGradient>
  );
}

// STYLESHEETS

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
