import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import ConstButtonShort from "../components/ConstButtonShort";

function Confirm({ container, NoBtn, YesBtn }) {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        height: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <View
        onPress={container}
        style={{
          backgroundColor: "black",
          height: "100%",
          position: "absolute",
          opacity: 0.5,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <View style={{ marginTop: "60%" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: 300,
            margin: 20,
            padding: 10,
            borderRadius: 30,
          }}
        >
          <Text style={{ color: "black", fontSize: 17, textAlign: "center" }}>
            All data will be unsaved, do you wish to continue?
          </Text>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10%",
            }}
          >
            <ConstButtonShort
              onPress={YesBtn}
              name="check"
              title="Yes"
              backgroundColor="green"
            ></ConstButtonShort>
            <ConstButtonShort
              onPress={NoBtn}
              name="close"
              title="No"
              backgroundColor="red"
            ></ConstButtonShort>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Confirm;
