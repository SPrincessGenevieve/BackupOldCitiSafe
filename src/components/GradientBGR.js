import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function GradientBackground(props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(45, 82, 178, 1)",
          "rgba(45, 82, 178, 0.7)",
          "rgba(45, 82, 178, 0.5)",
        ]}
        style={{ height: "100%", width: "100%", position: "absolute" }}
        start={[0, 0]}
        end={[0, 1]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default GradientBackground;
