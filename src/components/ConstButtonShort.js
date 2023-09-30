import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function ConstButtonShort({ onPress, title, name, disabled, backgroundColor }) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disable={disabled}
        style={{
          backgroundColor: backgroundColor,
          width: "35%",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          flexDirection: "row",
          marginTop: 15,
          marginBottom: 15,
          shadowColor: "black",
          shadowOpacity: 0.1,
          elevation: 10,
          margin: 10,
        }}
      >
        <Icon name={name} size={25} color="white"></Icon>
        <Text style={{ marginLeft: 20, fontSize: 15, color: "white" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
}
export default ConstButtonShort;
