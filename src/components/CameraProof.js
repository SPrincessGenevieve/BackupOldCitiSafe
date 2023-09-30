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
import { setRecognizedText } from "./camera/infoSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function CameraProof() {
  const [cameraMode, setCameraMode] = useState(CameraType.back);
  const [flash, setFlash] = useState("off");
  const [pictureUri, setPictureUri] = useState("");
  const cameraRef = useRef();
  const [showPicture, setShowPicture] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const permissionGranted = await getPermission();
    if (!permissionGranted) {
      await requestCameraPermissionsAsync();
    }
  };

  const getPermission = async () => {
    const cameraPermission = await getCameraPermissionsAsync();
    return cameraPermission.granted;
  };

  const takePicture = async () => {
    if (cameraRef?.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setPictureUri(uri);
      setShowPicture(true);
    }
  };

  const cancelPicture = () => {
    setPictureUri("");
    setShowPicture(false);
  };

  const handleNextButton = () => {
    navigation.navigate("ColorSelector", {
      imageUri: pictureUri,
    });
  };

  const switchFlashMode = () => {
    setFlash(flash === "off" ? "on" : "off");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      setPictureUri(result.uri);
      setShowPicture(true);
    }
  };

  return (
    <View style={styles.container}>
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
    aspectRatio: 3 / 4,
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
    width: 346,
    height: 245,
    borderWidth: 3,
    borderRadius: 19,
    borderColor: "white",
    position: "absolute",
    zIndex: 1,
    top: "45%",
    left: "50%",
    marginLeft: -173,
    marginTop: -123,
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
