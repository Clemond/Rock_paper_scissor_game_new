import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function PickDisplay({ choice }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is your choice: {choice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
});
