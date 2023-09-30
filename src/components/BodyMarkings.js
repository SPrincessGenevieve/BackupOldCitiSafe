import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import BodyMarks from "./BodyMarks.json"; // Assuming you have a valid JSON file for Body Marks

function BodyMarkings(props) {
  const [selectedBody, setSelectedBody] = useState(null);

  const toggleBodySelection = (bodyName) => {
    if (selectedBody === bodyName) {
      setSelectedBody(null);
      props.onBodySelection(null); // Call the callback function to send selected body markings to the parent component
    } else {
      setSelectedBody(bodyName);
      props.onBodySelection(bodyName);
    }
  };

  const renderBodyOptions = () => {
    const rows = [];
    for (let i = 0; i < BodyMarks.length; i += 4) {
      const rowOptions = BodyMarks.slice(i, i + 4);
      const row = (
        <View style={styles.row} key={i}>
          {rowOptions.map((bodyMark) => (
            <TouchableOpacity
              key={bodyMark.bodyName}
              style={[
                styles.bodyOption,
                selectedBody === bodyMark.bodyName && styles.selectedOption,
              ]}
              onPress={() => toggleBodySelection(bodyMark.bodyName)}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color:
                    selectedBody === bodyMark.bodyName ? "#4465BA" : "white",
                }}
              >
                {bodyMark.bodyName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          color: "white",
          marginBottom: 20,
        }}
      >
        Vehicle Body Markings
      </Text>
      {renderBodyOptions()}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: 400,
    borderRadius: 20,
  },
  bodyOption: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
  },
  selectedOption: {
    backgroundColor: "#e0e0e0",
  },
});

export default BodyMarkings;
