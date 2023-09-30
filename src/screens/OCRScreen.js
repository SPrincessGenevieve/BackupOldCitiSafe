import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CameraScan from "../components/CameraScan";

function OCRScreen(props) {
  return (
    <CameraScan
      style={styles.cardoutlineID}
      title="Place the Driver's License Card Here"
    ></CameraScan>
  );
}

export default OCRScreen;

const styles = StyleSheet.create({
  cardoutlineID: {
    width: 346,
    height: 245,
    borderWidth: 3,
    borderRadius: 19,
    borderColor: "white",
    position: "absolute",
    zIndex: 1,
    top: "45%",
    left: "50%",
    marginLeft: -173,
    marginTop: -123,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
