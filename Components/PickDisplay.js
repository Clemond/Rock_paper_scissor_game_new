import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function PickDisplay({ choice, computerChoice }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your choice: {choice}</Text>
      <Text style={styles.text}>Computers choice: {computerChoice}</Text>
      <Text style={styles.text}>Winner: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});
