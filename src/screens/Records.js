import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button, PaperProvider, DataTable } from "react-native-paper";
import GradientBackground from "../components/GradientBG";
import KeyboardWithoutWrapper from "../components/KeyboardWithoutWrapper";
import Icon from "react-native-vector-icons/AntDesign";

function Records({ navigation }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const handleDetails = () => {
    navigation.navigate("RecordDetails");
  };

  return (
    <KeyboardWithoutWrapper>
      <View style={{ height: 900 }}>
        <GradientBackground></GradientBackground>
        <View style={{ padding: 20 }}>
          <View
            style={{
              backgroundColor: "white",
              height: "100%",
              borderRadius: 40,
            }}
          >
            <View style={{ padding: 10, marginTop: 20 }}>
              <TextInput
                style={{
                  borderRadius: 20,
                  height: 60,
                  paddingLeft: 20,
                  paddingRight: 20,
                  backgroundColor: "#E0E0E0",
                  textAlign: "left",
                }}
              >
                <Icon name="search1" style={{ fontSize: 25 }}></Icon>
              </TextInput>
            </View>
            <View style={{ marginBottom: 10 }}>
              <TouchableOpacity onPress={handleDetails}>
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      width: "97%",
                      flexDirection: "row",
                      backgroundColor: "#CAD7EE",
                      borderRadius: 20,
                      height: 135,
                    }}
                  >
                    <DataTable
                      style={{
                        padding: 15,
                        border: 0,
                        borderColor: "transparent",
                      }}
                    >
                      <DataTable.Row
                        style={{
                          marginBottom: -20,
                          border: 0,
                          borderColor: "transparent",
                          height: 33,
                        }}
                      >
                        <DataTable.Cell
                          style={{ height: 25, borderColor: "transparent" }}
                        >
                          <Text style={{ fontSize: 22, color: "blue" }}>
                            20230803
                          </Text>
                        </DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row
                        style={{
                          marginBottom: -20,
                          border: 0,
                          borderColor: "transparent",
                          height: 33,
                        }}
                      >
                        <DataTable.Cell
                          style={{ height: 20, borderColor: "transparent" }}
                        >
                          <Text style={{ fontSize: 17 }}>
                            Anna Nicole Gabriento
                          </Text>
                        </DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row
                        style={{
                          marginBottom: -20,
                          border: 0,
                          borderColor: "transparent",
                          height: 33,
                        }}
                      >
                        <DataTable.Cell
                          style={{ height: 20, borderColor: "transparent" }}
                        >
                          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                            Driving without a helmet
                          </Text>
                        </DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row style={{ borderColor: "transparent" }}>
                        <DataTable.Cell
                          style={{
                            height: 20,
                            border: 0,
                            borderColor: "transparent",
                          }}
                        >
                          <Text style={{ color: "grey", fontSize: 17 }}>
                            GA23-294329345-SADF
                          </Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    </DataTable>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardWithoutWrapper>
  );
}

export default Records;
