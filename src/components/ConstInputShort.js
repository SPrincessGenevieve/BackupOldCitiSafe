import React from "react";
import { Toucha } from "react-native";
import { Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";

function ConstInputShort({
  editable,
  disabled,
  marginRight,
  marginLeft,
  width,
  placeholder,
  text,
  onPress,
  autoCapitalize,
  value,
}) {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./../../assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        width: "33.3%",
        marginLeft: marginLeft,
        marginRight: marginRight,
      }}
    >
      <Text
        style={{
          fontSize: 10,
          color: "white",
          fontFamily: "Roboto-Light",
          marginLeft: 7,
        }}
      >
        {text}
      </Text>
      <TextInput
        editable={editable}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="white"
        autoCapitalize={autoCapitalize}
        style={{
          color: "white",
          borderBottomWidth: 0.9,
          borderRadius: 10,
          padding: 10,
          borderColor: "white",
          fontSize: 17,
          width: width,
        }}
      ></TextInput>
    </View>
  );
}

export default ConstInputShort;
