import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTextLarge}>Welcome to</Text>
      <Text style={styles.headerTextMedium}>The Rock Paper Scissors Game</Text>
      <Text style={styles.headerTextSmall}>Pick an item and start playing</Text>
    </View>
  );
}

// STYLESHEETS

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    marginHorizontal: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextSmall: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    color: "white",

    // Shadow properties for text
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,

    // Adding a bit of elevation on Android (if needed)
    elevation: 5,
  },
  headerTextLarge: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 28,
    color: "white",

    // Shadow properties for text
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,

    // Adding a bit of elevation on Android (if needed)
    elevation: 5,
  },
  headerTextMedium: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 22,
    color: "white",

    // Shadow properties for text
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,

    // Adding a bit of elevation on Android (if needed)
    elevation: 5,
  },
});
