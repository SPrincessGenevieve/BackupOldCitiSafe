import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function ConstButton({
  onPress,
  title,
  name,
  disabled,
  left,
  top,
  right,
  marginLeft,
  marginRight,
}) {
  return (
    <View
      style={{
        width: "100%",
        top: top,
        left: left,
        right: right,
        marginLeft: marginLeft,
        marginRight: marginRight,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        disable={disabled}
        style={{
          backgroundColor: "#395CDB",
          width: "100%",
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          flexDirection: "row",
          marginTop: 15,
          marginBottom: 15,
          shadowColor: "black",
          shadowOpacity: 0.1,
          elevation: 10,
        }}
      >
        <Icon name={name} size={30} color="white"></Icon>
        <Text style={{ marginLeft: 20, fontSize: 17, color: "white" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ConstButton;
