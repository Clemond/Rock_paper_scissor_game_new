import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import ActionButtons from "./Components/ActionButtons";
import PickDisplay from "./Components/PickDisplay";
import ComputerLogic from "./Logic/ComputerLogic";
import WinnerLogic from "./Logic/WinnerLogic";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";

export default function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    const computerPick = ComputerLogic();
    setUserChoice(choice);
    setComputerChoice(computerPick);

    console.log(`User choice:${choice}`);
    console.log(`Computer choice: ${computerPick}`);
  };

  useEffect(() => {
    if (userChoice && computerChoice) {
      const winner = WinnerLogic(userChoice, computerChoice);
      setResult(winner);
      console.log(`Winner:${winner}`);
    }
  });

  return (
    <LinearGradient colors={["#FF6347", "#FFD700"]} style={styles.container}>
      <Header />
      <ActionButtons onPress={handleUserChoice} />
      <PickDisplay
        choice={userChoice}
        computerChoice={computerChoice}
        result={result}
      />
    </LinearGradient>
  );
}

// STYLESHEETS

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
