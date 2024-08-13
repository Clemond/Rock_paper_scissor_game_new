import { Text, View, StyleSheet, Pressable } from "react-native";

export default function ActionButtons({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Pressable
          onPress={() => onPress("Rock")}
          style={[styles.circle, styles.topLeft]}
        >
          <Text>Rock</Text>
        </Pressable>
        <Pressable
          onPress={() => onPress("Paper")}
          style={[styles.circle, styles.centerBaseLine]}
        >
          <Text>Paper</Text>
        </Pressable>
        <Pressable
          onPress={() => onPress("Scissors")}
          style={[styles.circle, styles.topRight]}
        >
          <Text>Scissors</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 50,
  },
  box: {
    width: 350,
    height: 350,
    backgroundColor: "#2C3E50",
    borderWidth: 3,
    borderRadius: 175,
    //position: "relative",  // No need?
  },
  circle: {
    width: 155,
    height: 155,
    borderRadius: 77.5,
    borderWidth: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  topLeft: {
    top: 0,
    left: 0,
    margin: 10,
  },
  topRight: {
    top: 0,
    right: 0,
    margin: 10,
  },
  centerBaseLine: {
    bottom: 0,
    left: "50%",
    marginLeft: -77.5,
    margin: 10,
  },
});
