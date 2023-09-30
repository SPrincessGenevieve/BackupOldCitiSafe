import React, { useState, useEffect, Children } from "react";
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
import GradientBackground from "../../../components/GradientBG";
import { useFonts } from "expo-font";
import ConstInput from "../../../components/ConstInput";
import KeyboardWithoutWrapper from "../../../components/KeyboardWithoutWrapper";
import ConstButton from "../../../components/ConstButton";
import Title from "../../../components/Title";
import TextButton from "../../../components/TextButton";

function FirstScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Zen Dots Regular": require("./../../../../assets/fonts/ZenDots-Regular.ttf"),
  });

  const [textInputFocused, setTextInputFocused] = useState(false);
  const [animationValue] = useState(new Animated.Value(1));

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = () => {
    navigation.navigate("HomeScreen");
  };
  const handleForgotPass = () => {
    navigation.navigate("ForgotPass");
  };

  return (
    <KeyboardWithoutWrapper>
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./../../../../assets/images/BGPhoto.png")}
            style={{ position: "absolute", height: "100%", opacity: 0.7 }}
          />
          <GradientBackground></GradientBackground>
          <Image
            style={{
              height: 200,
              width: 245,
              position: "absolute",
              top: 1,
              marginTop: "30%",
            }}
            source={require("./../../../../assets/images/logo.png")}
          />

          <View
            style={{
              width: "80%",
              marginTop: 250,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title></Title>

            <ConstInput placeholder="username"></ConstInput>
            <ConstInput placeholder="password"></ConstInput>

            <View style={{ width: "100%", marginTop: 20 }}>
              <ConstButton
                name="login"
                title="Sign In"
                onPress={handleLogin}
              ></ConstButton>
              <TextButton onPress={handleForgotPass}></TextButton>
            </View>
          </View>
        </View>
      </View>
    </KeyboardWithoutWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    height: 900,
  },
});

export default FirstScreen;
