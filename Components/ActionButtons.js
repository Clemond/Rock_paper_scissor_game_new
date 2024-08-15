import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export default function ActionButtons({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Pressable
          onPress={() => onPress("Rock")}
          style={[styles.circle, styles.topLeft]}
        >
          <Image source={require("../assets/rock.png")} />
          <Text>Rock</Text>
        </Pressable>

        <Pressable
          onPress={() => onPress("Paper")}
          style={[styles.circle, styles.centerBaseLine]}
        >
          <Image
            source={require("../assets/paper.png")}
            style={styles.imagePaperStyle}
          />

          <Text>Paper</Text>
        </Pressable>

        <Pressable
          onPress={() => onPress("Scissors")}
          style={[styles.circle, styles.topRight]}
        >
          <Image source={require("../assets/scissors.png")} />
          <Text>Scissors</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

    // IOS Shadow (Elevation)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    // Android Shadow (Elevation)
    elevation: 20,
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
  imagePaperStyle: {
    marginLeft: -3,
  },
});
