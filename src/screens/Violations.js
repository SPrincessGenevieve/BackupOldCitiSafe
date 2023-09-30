import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ViolationCheck from "../components/ViolationCheck";
import KeyboardWithoutWrapper from "../components/KeyboardWithoutWrapper";
import violationData from "../components/ViolationList.json";
import ConstButtonShort from "./../components/ConstButtonShort";
import Confirm from "./ConfirmScreen";

function Violations({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = violationData.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [isAtLeastOneChecked, setIsAtLeastOneChecked] = useState(false); // New state

  const handleHome = () => {
    navigation.navigate("HomeScreen");
  };

  const handleRecord = () => {
    navigation.navigate("Records");
  };

  const [checkedViolations, setCheckedViolations] = useState([]);

  const handleCheckboxChange = (text, isChecked) => {
    if (isChecked) {
      setCheckedViolations([...checkedViolations, text]);
    } else {
      setCheckedViolations(
        checkedViolations.filter((violationText) => violationText !== text)
      );
    }
    setIsAtLeastOneChecked(checkedViolations.length > 0);
  };

  useEffect(() => {
    setIsAtLeastOneChecked(checkedViolations.length > 0);
  }, [checkedViolations]);

  return (
    <View style={{ backgroundColor: "#3C66D2", flex: 1 }}>
      <KeyboardWithoutWrapper>
        <View style={styles.container}>
          <TextInput
            placeholder="Search violation"
            placeholderTextColor="white"
            style={{
              borderBottomWidth: 1,
              color: "white",
              borderColor: "white",
              marginBottom: 40,
              marginTop: 30,
            }}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <View style={{}}>
            {filteredData.map((item) => (
              <ViolationCheck
                key={item.id}
                id={item.id}
                text={item.text}
                isChecked={checkedViolations.includes(item.text)}
                handleCheckboxChange={(isChecked) =>
                  handleCheckboxChange(item.text, isChecked)
                }
              />
            ))}
          </View>
        </View>
      </KeyboardWithoutWrapper>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <ConstButtonShort
          onPress={() => setIsVisible(!isVisible)}
          name="close"
          title="Cancel"
          backgroundColor="#C8B23D"
        ></ConstButtonShort>
        <ConstButtonShort
          name="check"
          title="Submit"
          onPress={() => {
            if (isAtLeastOneChecked) {
              setSuccess(!success);
            } else {
              alert("Please select at least one violation to proceed");
            }
          }}
          backgroundColor="#5F5DC5"
        />
      </View>
      {isVisible ? (
        <>
          <Confirm
            YesBtn={handleHome}
            NoBtn={() => setIsVisible(!isVisible)}
          ></Confirm>
        </>
      ) : null}
      {success ? (
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              opacity: 0.5,
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              height: 300,
              width: 350,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, marginBottom: 34 }}>
              Successfully Recorded
            </Text>
            <ConstButtonShort
              name="check"
              title="Proceed"
              backgroundColor="#5F5DC5"
              onPress={handleHome}
            ></ConstButtonShort>
          </View>
        </View>
      ) : null}
    </View>
  );
}
export default Violations;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C66D2",
    flex: 1,
    height: 1360,
    padding: 30,
    paddingTop: 40,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 87,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
