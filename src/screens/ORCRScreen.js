import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CameraScan from "../components/CameraScan";

function ORCRScreen(props) {
  return (
    <CameraScan
      style={styles.cardoutlineORCR}
      title="Place the OR/CR Card Here"
    ></CameraScan>
  );
}

export default ORCRScreen;

const styles = StyleSheet.create({
  cardoutlineORCR: {
    width: 346,
    height: 700,
    borderWidth: 3,
    borderRadius: 19,
    borderColor: "white",
    position: "absolute",
    zIndex: 1,
    top: "20%",
    left: "50%",
    marginLeft: -173,
    marginTop: -123,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
