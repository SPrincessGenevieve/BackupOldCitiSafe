import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import GradientBackground from "../components/GradientBGR";
import ConstButton from "../components/ConstButton";
import Title from "../components/Title";
import { useFonts } from "expo-font";
import Profile from "./Profile";
import KeyboardWithoutWrapper from "./../components/KeyboardWithoutWrapper";

function HomeScreen({ navigation }) {
  const [showProfile, setShowProfile] = useState(false); // Initially set to false
  const slideAnimation = useRef(new Animated.Value(0)).current; // Initially set to 0

  const [fontsLoaded] = useFonts({
    "Roboto Light": require("./../../assets/fonts/Roboto-Light.ttf"),
    "Montserrat Bold": require("./../../assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    if (showProfile) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [showProfile]);

  if (!fontsLoaded) {
    return null;
  }

  const screenHeight = Dimensions.get("window").height;

  const profileSlide = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-0.5 * screenHeight, 140], // Adjust the values to control the initial visibility and sliding distance
  });

  const handleRecord = () => {
    navigation.navigate("Records");
  };

  const handleOCRSreen = () => {
    navigation.navigate("OCRScan");
  };

  const handleForm = () => {
    navigation.navigate("FormScreen");
  };

  const handleLogout = () => {
    navigation.navigate("FirstScreen");
  };

  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GradientBackground></GradientBackground>
      <Animated.View
        style={{ transform: [{ translateY: profileSlide }], zIndex: 1 }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Profile
            handleLogout={handleLogout}
            onPress={() => setShowProfile(!showProfile)}
          ></Profile>
        </View>
      </Animated.View>

      <View
        style={{ top: 1, position: "absolute", marginTop: "50%", width: "80%" }}
      >
        <Title></Title>
        <Text
          style={{
            marginTop: "20%",
            color: "white",
            fontSize: 20,
            fontFamily: "Roboto Light",
          }}
        >
          Good day
        </Text>
        <Text
          style={{
            marginTop: 20,
            color: "white",
            fontSize: 20,
            fontFamily: "Montserrat Bold",
          }}
        >
          Mr. John Wick Batumbakal
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginTop: "40%",
        }}
      >
        <ConstButton
          onPress={handleRecord}
          name="book"
          title="Check Records"
        ></ConstButton>
        <ConstButton
          onPress={handleOCRSreen}
          name="scan1"
          title="Scan Driver's License and OR/CR"
        ></ConstButton>
      </View>
    </View>
  );
}

export default HomeScreen;
