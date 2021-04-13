import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function MakeCamera({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  let cameraRef;
  const isFocused = useIsFocused();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("WorksPage");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  async function takePicture() {
    if (cameraRef) {
      const options = { quality: 1, base64: true };
      const photo = await cameraRef.takePictureAsync(options);
      setPreviewVisible(true);
      setCapturedImage(photo);
    }
  }

  const CameraPreview = ({ photo }) => {
    const __retakePicture = () => {
      setCapturedImage(null);
      setPreviewVisible(false);
    };

    const __savePicture = () => {
      setPreviewVisible(false);
      // setCameraStart(false);
      // setWorkPage(true);
      // setTheCapturedImage(capturedImage);
      navigation.navigate("WorksPage", capturedImage);
    };

    return (
      <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ImageBackground
            source={{ uri: photo && photo.uri }}
            style={{
              flex: 1,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              height: "8%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#d9d9d9",
                height: "100%",
                width: "50%",
                alignItems: "center",
                borderWidth: 1,
                justifyContent: "center",
              }}
              onPress={__retakePicture}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Retake picture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#d9d9d9",
                height: "100%",
                width: "50%",
                alignItems: "center",
                borderWidth: 1,
                justifyContent: "center",
              }}
              onPress={__savePicture}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Save picture
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      {previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage} />
      ) : (
        <View style={{ flex: 1, marginTop: 30 }}>
          {/* {isFocused&&( */}
          <Camera
            autoFocus={"on"}
            style={{ flex: 1 }}
            ref={(ref) => (cameraRef = ref)}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  flex: 1,
                  width: "100%",
                  padding: 20,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={takePicture}
                    style={{
                      width: 70,
                      height: 70,
                      bottom: 0,
                      borderRadius: 50,
                      backgroundColor: "#fff",
                    }}
                  />
                </View>
              </View>
            </View>
          </Camera>
          {/* )} */}
        </View>
      )}
    </>
  );
}
