import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Pick an item and start playing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "beige",
    borderWidth: 1.5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
  },
});
