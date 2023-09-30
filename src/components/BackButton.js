import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";

function BackButton({ onPress, style }) {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} style={{}}>
        <Icon name="back" color="white" size={30}></Icon>
      </TouchableOpacity>
    </View>
  );
}

export default BackButton;
