import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function TextButton({ onPress }) {
  return (
    <>
      <TouchableOpacity
        style={{ alignItems: "center", marginTop: 10 }}
        onPress={onPress}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Forgot Password?</Text>
      </TouchableOpacity>
    </>
  );
}

export default TextButton;
