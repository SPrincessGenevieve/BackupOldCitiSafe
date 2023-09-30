import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Class from "./Class.json";

function ClassDisplay(props) {
  const [selectedClass, setSelectedClass] = useState(null);

  const toggleClassSelection = (className) => {
    if (selectedClass === className) {
      setSelectedClass(null);
      props.onClassSelection(null); // Call the callback function to send selected class to the parent component
    } else {
      setSelectedClass(className);
      props.onClassSelection(className);
    }
  };

  const renderClassOptions = () => {
    const rows = [];
    for (let i = 0; i < Class.length; i += 4) {
      const rowOptions = Class.slice(i, i + 4);
      const row = (
        <View style={styles.row} key={i}>
          {rowOptions.map((vehicleClass) => (
            <TouchableOpacity
              key={vehicleClass.className}
              style={[
                styles.classOption,
                selectedClass === vehicleClass.className &&
                  styles.selectedOption,
              ]}
              onPress={() => toggleClassSelection(vehicleClass.className)}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color:
                    selectedClass === vehicleClass.className
                      ? "#4465BA"
                      : "white",
                }}
              >
                {vehicleClass.className}
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
        Vehicle Classification
      </Text>
      {renderClassOptions()}
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
  classOption: {
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

export default ClassDisplay;
