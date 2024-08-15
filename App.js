import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import ActionButtons from "./Components/ActionButtons";
import PickDisplay from "./Components/PickDisplay";
import ComputerLogic from "./Logic/ComputerLogic";
import WinnerLogic from "./Logic/WinnerLogic";

export default function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleChoices = (choice) => {
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
      <ActionButtons onPress={handleChoices} />
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
