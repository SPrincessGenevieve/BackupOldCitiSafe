import React from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
function Title(props) {
  const [fontsLoaded] = useFonts({
    "Zen Dots Regular": require("./../../assets/fonts/ZenDots-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      style={{
        fontSize: 50,
        color: "white",
        fontFamily: "Zen Dots Regular",
        textAlign: "center",
      }}
    >
      CITISAFE
    </Text>
  );
}

export default Title;
