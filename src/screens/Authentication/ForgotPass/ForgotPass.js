import React, { useState } from "react";
import { View } from "react-native";
import KeyboardWithoutWrapper from "../../../components/KeyboardWithoutWrapper";
import GradientBackground from "../../../components/GradientBG";
import { Text } from "react-native";
import ConstInput from "../../../components/ConstInput";
import ConstButton from "../../../components/ConstButton";

function ForgotPass(props) {
  const [visible, isVisivle] = useState(false);

  return (
    <KeyboardWithoutWrapper>
      <View style={{ height: 890, width: "100%", flex: 1 }}>
        <GradientBackground />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: 1,
            position: "absolute",
            width: "100%",
            marginTop: "40%",
            padding: 30,
          }}
        >
          <Text style={{ fontSize: 25, color: "white", marginBottom: 30 }}>
            Forgot Password
          </Text>
          <ConstInput
            marginBottom={30}
            placeholder="Please enter your email"
          ></ConstInput>
          <ConstButton
            name="mail"
            title="send"
            onPress={() => isVisivle(!visible)}
          ></ConstButton>
        </View>
        {visible ? (
          <View
            style={{
              width: "100%",
              height: 1000,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                width: "100%",
                height: 1000,
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.7,
              }}
            ></View>
            <View
              style={{
                padding: 20,
                backgroundColor: "white",
                width: "80%",
                height: 300,
                position: "absolute",
                top: 1,
                marginTop: "60%",
                borderRadius: 20,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 30, marginTop: 60 }}
              >
                Email sent
              </Text>
              <ConstButton
                onPress={() => isVisivle(!visible)}
                name="check"
                title="Done"
              ></ConstButton>
              <Text>
                Please check your email. We have sent a link for you to update
                your password.
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    </KeyboardWithoutWrapper>
  );
}

export default ForgotPass;
