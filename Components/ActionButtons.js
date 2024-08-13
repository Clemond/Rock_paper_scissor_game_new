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
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  box: {
    width: 300,
    height: 280,
    backgroundColor: "red",
    borderWidth: 3,
    position: "relative",
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
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
    marginLeft: -65,
    margin: 10,
  },
});
