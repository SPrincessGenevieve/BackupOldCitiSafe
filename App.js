import { StyleSheet, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import store from "./plugins/store";

const Stack = createNativeStackNavigator();
const { height } = Dimensions.get("window");

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    height,
  },
});
