import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import KeyboardWithoutWrapper from "../components/KeyboardWithoutWrapper";
import ConstInput from "../components/ConstInput";
import ConstInputShort from "../components/ConstInputShort";
import ConstButtonShort from "../components/ConstButtonShort";
import Confirm from "./ConfirmScreen";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import moment from "moment";
import predefinedColors from "./../components/PredefineColor.json";
import MapLocation from "../components/MapLocation";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import ColorSelector from "../components/ColorSelector";

function FormScreen({ navigation, route }) {
  const ocrText = useSelector((state) => state.infoText.extractedInfo);
  const ocrTextOCR = useSelector((state) => state.infoTextOCR.extractedInfo);
  const [showMap, setShowMap] = useState(true);
  const [form, setForm] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    route.params?.selectedColor || ""
  );
  const [selectedClass, setSelectedClass] = useState(
    route.params?.selectedClass || ""
  );
  const [selectedMarkings, setSelectedMarkings] = useState(
    route.params?.selectedMarkings || ""
  );
  const [location, setLocation] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [selectedPin, setSelectedPin] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment().format("hh:mm A"));
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));

  if (!route.params) {
    return null;
  }

  const getColorName = (colorHex) => {
    const selectedColorObject = predefinedColors.find(
      (color) => color.hex === colorHex
    );
    return selectedColorObject ? selectedColorObject.name : "";
  };

  const handleViolation = () => {
    navigation.navigate("ViolationScreen");
  };

  const handleHome = () => {
    navigation.navigate("HomeScreen");
  };

  const handleCam = () => {
    navigation.navigate("CameraProof");
    navigation.setOptions({
      setImageUri: setImageUri,
    });
  };

  const fetchTime = () => {
    const currentTimeFormatted = moment().format("hh:mm A");
    setCurrentTime(currentTimeFormatted);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleClassSelection = (classCode) => {
    setSelectedClass(classCode);
  };

  const handleBodyMarkingsSelection = (markings) => {
    setSelectedMarkings(markings);
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
  };

  const getAddressFromCoordinates = async (coordinate) => {
    try {
      const addressResponse = await Location.reverseGeocodeAsync({
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,    
      });

      if (addressResponse && addressResponse.length > 0) {
        const { name, street, region, city, postalCode, country } =
          addressResponse[0];
        return `${name || ""} ${street || ""}, ${region || ""}, ${
          city || ""
        }, ${postalCode || ""}, ${country || ""}`;
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
    return "Address not found";
  };

  const handleMapPress = async (e) => {
    const newPin = {
      coordinate: e.nativeEvent.coordinate,
      address: await getAddressFromCoordinates(e.nativeEvent.coordinate),
    };
    setSelectedPin(newPin);
    onUpdateLocation(e.nativeEvent.coordinate);
  };

  const [mfrtaTctNo, setMfrtaTctNo] = useState("");

  const generateMfrtaTctNo = () => {
    const year = moment().format("YYYY");
    const month = moment().format("MM");
    const unique = generateUniqueNumber().toString().padStart(2, "0");
    const tctNo = `${year}${month}${unique}`;
    setMfrtaTctNo(tctNo);
  };

  useEffect(() => {
    generateMfrtaTctNo();
  }, []);

  let uniqueNumber = 1;

  const generateUniqueNumber = () => {
    return uniqueNumber++;
  };

  useEffect(() => {
    const fetchTime = () => {
      const currentTimeFormatted = moment().format("hh:mm A");
      setCurrentTime(currentTimeFormatted);
    };

    const fetchDate = () => {
      const currentDateFormatted = moment().format("YYYY-MM-DD");
      setCurrentDate(currentDateFormatted);
    };

    fetchTime();
    fetchDate();
  }, []);

  useEffect(() => {
    setSelectedColor(route.params?.selectedColor || "");
    setSelectedClass(route.params?.selectedClass || "");
    setSelectedMarkings(route.params?.selectedMarkings || "");
  }, []);

  useEffect(() => {
    if (location) {
      getAddressFromCoordinates(location).then((currentAddress) =>
        setCurrentAddress(currentAddress)
      );
    }
  }, [location]);

  return (
    <View style={{ flex: 1 }}>
      {showMap ? (
        <MapLocation
          location={location}
          selectedPin={selectedPin}
          currentAddress={currentAddress}
          handleMapPress={handleMapPress}
          getLocation={getLocation}
          showMap={showMap}
          setShowMap={setShowMap}
          form={form}
          setForm={setForm}
        ></MapLocation>
      ) : (
        <>
          <KeyboardWithoutWrapper>
            <View style={styles.contanier}>
              <View style={{ padding: 30, paddingTop: 50 }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <ConstInputShort
                    editable={false}
                    marginRight={55}
                    width={165}
                    value={mfrtaTctNo}
                    text="MFRTA TCT No"
                  ></ConstInputShort>
                  <ConstInputShort
                    editable={false}
                    width={165}
                    value={currentDate}
                    text="Date"
                  ></ConstInputShort>
                </View>
                <ConstInput
                  value={ocrText.name}
                  autoCapitalize="characters"
                  text="Last Name, First Name, Middle Name"
                ></ConstInput>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <ConstInputShort
                    value={ocrText.nationality}
                    text="Nationality"
                  ></ConstInputShort>
                  <ConstInputShort
                    value={ocrText.sex}
                    text="Sex"
                  ></ConstInputShort>
                  <ConstInputShort
                    value={ocrText.type}
                    text="Type"
                  ></ConstInputShort>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 30 }}>
                  <ConstInputShort
                    value={ocrText.weight}
                    text="Weight"
                  ></ConstInputShort>
                  <ConstInputShort
                    value={ocrText.height}
                    text="Height"
                  ></ConstInputShort>
                  <ConstInputShort
                    value={ocrText.dateOfBirth}
                    text="Date of Birth"
                  ></ConstInputShort>
                </View>
                <ConstInput value={ocrText.address} text="Address"></ConstInput>
                <ConstInput
                  marginTop={30}
                  value={ocrText.licenseNumber}
                  text="Driver License Number"
                ></ConstInput>
                <View style={{ flexDirection: "row", marginTop: 30 }}>
                  <ConstInputShort
                    value={ocrTextOCR.plate_no}
                    text="Vehicle Plate No."
                  ></ConstInputShort>
                  <ConstInputShort
                    value={ocrTextOCR.make}
                    text="Make"
                  ></ConstInputShort>
                  <ConstInputShort
                    value={ocrTextOCR.series}
                    text="Model"
                  ></ConstInputShort>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <ConstInputShort
                    value={getColorName(selectedColor)}
                    text="Color"
                  ></ConstInputShort>
                  <ConstInputShort
                    value={selectedClass}
                    text="Class"
                  ></ConstInputShort>
                  <ConstInputShort
                    value={selectedMarkings}
                    text="Body Markings"
                  ></ConstInputShort>
                </View>
                <ConstInput
                  value={ocrTextOCR.complete_owners_name}
                  text="Registered Owner"
                ></ConstInput>
                <ConstInput
                  value={ocrTextOCR.complete_address}
                  marginTop="10%"
                  text="Address"
                ></ConstInput>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <ConstInputShort
                    marginRight={55}
                    width={165}
                    value={ocrTextOCR.telephone_no_contact_details}
                    text="Contact No."
                  ></ConstInputShort>
                  <ConstInputShort
                    editable={false}
                    width={165}
                    value={currentTime}
                    text="Time of Violation"
                  ></ConstInputShort>
                </View>
                <ConstInput
                  value={selectedPin ? selectedPin.address : "N/A"}
                  text="Place of Violation"
                ></ConstInput>
                <ConstInput
                  editable={false}
                  marginTop={30}
                  marginBottom={30}
                  value="ANNA NICOLE GABRIENTO"
                  text="Apprehending Officer"
                ></ConstInput>
              </View>
            </View>
          </KeyboardWithoutWrapper>

          <View
            style={{
              backgroundColor: "#3C66D2",
              width: "100%",
              height: 87,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ConstButtonShort
              onPress={() => setIsVisible(!isVisible)}
              name="close"
              title="Cancel"
              backgroundColor="#C8B23D"
            ></ConstButtonShort>
            <ConstButtonShort
              onPress={handleViolation}
              name="check"
              title="Next"
              backgroundColor="#5F5DC5"
            ></ConstButtonShort>
          </View>
        </>
      )}

      {isVisible ? (
        <>
          <Confirm
            YesBtn={handleHome}
            NoBtn={() => setIsVisible(!isVisible)}
          ></Confirm>
        </>
      ) : null}
    </View>
  );
}

export default FormScreen;

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: "#3C66D2",
    flex: 1,
    height: "100%",
  },
});
