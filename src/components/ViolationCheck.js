import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";

function ViolationCheck({ text, isChecked, handleCheckboxChange }) {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
    >
      <CheckBox
        borderColor="white"
        color={isChecked ? "#8CACFF" : "white"}
        value={isChecked}
        onValueChange={handleCheckboxChange}
        style={{
          height: 30,
          width: 30,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 2,
        }}
      />
      <Text style={{ fontSize: 15, marginLeft: 20, color: "white" }}>
        {text}
      </Text>
    </View>
  );
}

export default ViolationCheck;
