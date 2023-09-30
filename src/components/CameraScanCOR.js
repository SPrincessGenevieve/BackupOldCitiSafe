import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Text,
} from "react-native";
import {
  Camera,
  CameraType,
  requestCameraPermissionsAsync,
  getCameraPermissionsAsync, // Fixed typo here
} from "expo-camera";
import Feather from "@expo/vector-icons/Feather";
import * as ImageManipulator from "expo-image-manipulator";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { setRecognizedText } from "./camera/infoSliceCOR";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function CameraScanCOR() {
  const [cameraMode, setCameraMode] = useState(CameraType.back);
  const [flash, setFlash] = useState("off"); // Changed to string type
  const [pictureUri, setPictureUri] = useState("");
  const cameraRef = useRef();
  const [showPicture, setShowPicture] = useState(false); // New state variable to control showing the picturerrr

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [data, setData] = useState({
    plate_no: "",
    make: "",
    date: "",
    series: "",
    make: "",
    complete_owners_name: "",
    complete_address: "",
    telephone_no_contact_details: "",
  });

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    await requestCameraPermissionsAsync();
  };

  const getPermission = async () => {
    const cameraPermission = await getCameraPermissionsAsync();
    return cameraPermission.granted;
  };

  const takePicture = async () => {
    try {
      const { uri } = await cameraRef?.current.takePictureAsync();

      setPictureUri(uri);
      setShowPicture(true);
    } catch (error) {
      console.log("Error taking picture:", error);
    }
  };

  const cancelPicture = () => {
    setPictureUri("");
    setShowPicture(false);
  };

  const handleNextButton = async () => {
    try {
      if (!pictureUri) {
        Alert.alert("Please take a picture first.");
        return;
      }

      const apiKey = "8e467a5f1e58b9b383da543d49105ce5";
      const apiUrl =
        "https://api.mindee.net/v1/products/SPrincessGenevieve/cor/v1/predict";

      const formData = new FormData();
      formData.append("document", {
        uri: pictureUri,
        name: "image.jpg",
        type: "image/jpeg",
      });

      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${apiKey}`,
        },
      });

      if (response?.data?.document !== undefined) {
        const extractedData =
          response.data.document.inference.pages[0].prediction;

        const concatenatedFields = {
          plate_no: "",
          make: "",
          date: "",
          series: "",
          make: "",
          complete_owners_name: "",
          complete_address: "",
          telephone_no_contact_details: "",
        };

        for (const fieldName in concatenatedFields) {
          if (extractedData[fieldName]?.values) {
            let concatenatedValue = "";
            for (const value of extractedData[fieldName]?.values || []) {
              concatenatedValue += value.content + " ";
            }
            concatenatedFields[fieldName] = concatenatedValue.trim();
          }
        }

        setData({
          ...data,
          ...concatenatedFields,
        });

        dispatch(
          setRecognizedText({
            plate_no: concatenatedFields.plate_no,
            make: concatenatedFields.make,
            date: concatenatedFields.date,
            series: concatenatedFields.series,
            make: concatenatedFields.make,
            complete_owners_name: concatenatedFields.complete_owners_name,
            complete_address: concatenatedFields.complete_address,
            telephone_no_contact_details:
              concatenatedFields.telephone_no_contact_details,
          })
        );
      } else {
        Alert.alert("Text extraction failed. Please try again later.");
      }
    } catch (error) {
      console.log("Error extracting text:", error);
      Alert.alert("Error extracting text. Please try again later.");
    }
    navigation.navigate("ColorSelector");
  };

  useEffect(() => {
    console.log("Updated Data:", data);
  }, [data]);

  if (!getPermission()) {
    return Alert.alert(
      "Permission Required!",
      "You need to provide the permissions to access the camera",
      [{ text: "Got it" }]
    );
  }

  const switchFlashMode = () => {
    setFlash(flash === "off" ? "on" : "off");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false, // Set to false to disable cropping
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setPictureUri(result.uri); // Use result.uri directly
      setShowPicture(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Show the camera preview or the captured picture */}
      {showPicture ? (
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={{ uri: pictureUri }} />

          <TouchableOpacity style={styles.nextBtn} onPress={handleNextButton}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtn} onPress={cancelPicture}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cameraContainer}>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            type={cameraMode}
            flashMode={flash}
          ></Camera>
          <View style={styles.controlsContainer}>
            <Feather name="image" size={35} color="white" onPress={pickImage} />
            <TouchableOpacity
              style={styles.takePictureBtn}
              onPress={takePicture}
            />
            <Feather
              name={flash === "off" ? "zap-off" : "zap"}
              size={30}
              onPress={switchFlashMode}
              color="white"
            />
          </View>
        </View>
      )}
      {!showPicture && (
        <View style={styles.cardoutline}>
          <Text style={styles.cardText}>
            Place the Certificate of Registration here
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  cameraContainer: {
    flex: 1,
    position: "relative",
  },
  camera: {
    flex: 1,
  },
  controlsContainer: {
    backgroundColor: "rgba(57, 92, 219, 1)",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  takePictureBtn: {
    backgroundColor: "#fff",
    borderRadius: 35,
    height: 70,
    width: 70,
    marginVertical: 10,
  },
  cardoutline: {
    width: 390,
    height: 745,
    borderWidth: 3,
    borderRadius: 19,
    borderColor: "white",
    position: "absolute",
    zIndex: 1,
    top: "45%",
    left: "45%",
    marginLeft: -173,
    marginTop: -370,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "white",
    letterSpacing: 1.5,
    textAlign: "justify",
  },
  pictureContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cancelBtn: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    right: 95,
  },
  cancelText: {
    color: "red",
    fontSize: 16,
  },
  nextBtn: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    left: 95,
  },
  nextText: {
    color: "green",
    fontSize: 16,
  },
});
