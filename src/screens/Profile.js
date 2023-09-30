import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native";
import ConstInput from "../components/ConstInput";
import Icon from "react-native-vector-icons/AntDesign";

function Profile({ onPress, handleLogout }) {
  const [edit, setEdit] = useState(true);

  return (
    <View
      style={{
        position: "absolute",
        height: 500,
        width: 400,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 2000,
          width: 450,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "rgba(45, 82, 178, 1)",
          position: "absolute",
          height: 400,
          width: 450,
          top: 1,
          marginTop: -300,
        }}
      ></View>
      <LinearGradient
        colors={[
          "rgba(45, 82, 178, 1)",
          "rgba(45, 82, 178, 1)",
          "rgba(100, 127, 198, 1)",
          "rgba(rgba(255, 255, 255, 1)",
        ]}
        style={{
          height: "100%",
          width: "130%",
          borderRadius: 290,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {edit ? (
          <View
            style={{
              width: 300,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 1,
            }}
          >
            <View style={{ width: "100%" }}>
              <ConstInput
                marginBottom={20}
                editable={false}
                text="Name"
                textAlign="center"
                value="Jayde Mike Engracia"
              ></ConstInput>
              <ConstInput
                marginBottom={20}
                editable={false}
                text="Username"
                textAlign="center"
                value="JaydeMikeUsername"
              ></ConstInput>
              <ConstInput
                marginBottom={20}
                editable={false}
                text="Position"
                textAlign="center"
                value="Traffic Enforcer"
              ></ConstInput>
              <ConstInput
                marginBottom={20}
                editable={false}
                text="Password"
                textAlign="center"
                value="Traffic Enforcer"
                secureTextEntry={true}
              ></ConstInput>
            </View>
            <View
              style={{
                bckgroundColor: "red",
                width: 300,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 1,
                marginTop: 320,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <Icon style={styles.icon} name="picture"></Icon>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setEdit(!edit)}>
                <Icon style={styles.icon} name="edit"></Icon>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleLogout}>
                <Icon style={styles.icon} name="logout"></Icon>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{
              width: 300,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 1,
            }}
          >
            <View style={{ width: "100%" }}>
              <ConstInput
                marginBottom={20}
                editable={true}
                text="Name"
                textAlign="center"
                value="Jayde Mike Engracia"
              ></ConstInput>
              <ConstInput
                marginBottom={20}
                editable={true}
                text="Username"
                textAlign="center"
                value="JaydeMikeUsername"
              ></ConstInput>
              <ConstInput
                marginBottom={20}
                editable={true}
                text="Position"
                textAlign="center"
                value="Traffic Enforcer"
              ></ConstInput>
              <ConstInput
                marginBottom={20}
                editable={true}
                text="New Password"
                textAlign="center"
                value="Traffic Enforcer"
                secureTextEntry={true}
              ></ConstInput>
              <ConstInput
                marginBottom={20}
                editable={true}
                text="Confirm Password"
                textAlign="center"
                value="Traffic Enforcer"
                secureTextEntry={true}
              ></ConstInput>
            </View>
            <View
              style={{
                bckgroundColor: "red",
                width: 300,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 1,
                marginTop: 365,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity onPress={() => setEdit(!edit)}>
                <Icon style={styles.icon} name="save"></Icon>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </LinearGradient>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              position: "absolute",
              width: 120,
              height: 120,
              borderRadius: 50,
            }}
            source={require("./../../assets/images/profile.jpg")}
          ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;

styles = StyleSheet.create({
  icon: {
    fontSize: 40,
    margin: 10,
    color: "white",
  },
});
