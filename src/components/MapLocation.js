import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ConstButton from "./ConstButton";

export default function MapLocation({
  location,
  selectedPin,
  currentAddress,
  handleMapPress,
  getLocation,
  showMap,
  setShowMap,
  form,
  setForm,
}) {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location ? location.latitude : 14.5995,
          longitude: location ? location.longitude : 120.9842,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        {selectedPin && (
          <Marker
            coordinate={selectedPin.coordinate}
            title={selectedPin.address}
          />
        )}
      </MapView>

      <View style={{ padding: 16 }}>
        {selectedPin ? (
          <>
            <Text>Selected Location: {selectedPin.address}</Text>
            <ConstButton
              title={"NEXT"}
              onPress={() => setShowMap(!showMap) & setForm(!form)}
            />
          </>
        ) : (
          <>
            <ConstButton
              name={"antdesign"}
              title={"Get Location"}
              onPress={getLocation}
            />
            <ConstButton
              name={"arrowright"} // Using FontAwesome5Pro name for a right arrow icon
              title={"NEXT"}
              onPress={() => setShowMap(!showMap) & setForm(!form)}
            />
            <Text>Current Address: {currentAddress || "N/A"}</Text>
          </>
        )}
      </View>
    </View>
  );
}
