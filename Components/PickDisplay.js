import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function PickDisplay({ choice }) {
  return (
    <View styles={styles.container}>
      <Text>This is your choice: {choice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
