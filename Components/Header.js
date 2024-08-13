import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Welcome to the Rock Paper Scissors Game
      </Text>
      <Text style={styles.headerText}>Pick an item and start playing</Text>
    </View>
  );
}

// STYLESHEETS

const styles = StyleSheet.create({
  header: {
    //backgroundColor: "#556B2F",
    //borderWidth: 1.5,
    //borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
    marginTop: 30,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    color: "white",
  },
});
