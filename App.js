import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
  ToastAndroid,
  Modal,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LogInPage from "./pages/LoginPage/Login";
import StartPage from "./pages/StartPage/Start";
import DetailsPage from "./pages/DetailsPage/Details";
import WorksPage from "./pages/WorksPage/Works";
import makeCamera from "./component/MakeCamera";
import sendLocation from "./pages/send location/sendLocation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import Iconmaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import AppStyles from "./AppStyles";

export default function App() {
  const Drawer = createDrawerNavigator();
  const [loadlogin, setloadlogin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [fullDetails, setFullDetails] = useState(false);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("", "Are you sure you want to exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    // const backAction = async () => {
    //   await setShowModal(true);
    //   return (
    //     <Modal
    //       animationType="slide"
    //       transparent={true}
    //       visible={showModal}
    //       onRequestClose={() => {
    //         Alert.alert("Modal has been closed.");
    //       }}
    //     >
    //       <View style={AppStyles.modalView}>
    //         <Text style={AppStyles.modaltext}>
    //           You're sure you want{"\n"}to logout?{" "}
    //         </Text>

    //         <View style={AppStyles.btnmodalView}>
    //           <TouchableOpacity
    //             style={AppStyles.btnmodal}
    //             onPress={() => {
    //               BackHandler.exitApp();
    //             }}
    //           >
    //             <Text style={AppStyles.textbtnmodal}>Yes</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             style={AppStyles.btnmodal}
    //             onPress={() => {
    //               null;
    //             }}
    //           >
    //             <Text style={AppStyles.textbtnmodal}>No</Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </Modal>
    //   );
    // };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const valueemail = await AsyncStorage.getItem("email");
        const valuepassword = await AsyncStorage.getItem("password");
        JSON.parse(valueemail) === "111" && JSON.parse(valuepassword) === "1"
          ? setloadlogin(false)
          : Location.requestPermissionsAsync();
        Camera.requestPermissionsAsync();
      } catch (e) {
        // error reading value
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const storageDetails = await AsyncStorage.getItem("details");
      if (storageDetails) {
        setFullDetails(true);
      }
    })();
  }, []);

  const textDrawer = {
    fontWeight: "700",
    fontSize: 20,
    color: "#000",
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="LogInPage"
        drawerStyle={{
          backgroundColor: "#fff",
          marginTop: 150,
          marginBottom: 100,
          width: "60%",
          borderRadius: 25,
        }}
        drawerContentOptions={{
          activeBackgroundColor: "orange",
          labelStyle: textDrawer,
        }}
      >
        {loadlogin && (
          <Drawer.Screen
            name="LoginPage"
            component={LogInPage}
            options={{
              gestureEnabled: false,
              drawerLabel: () => null,
              unmountOnBlur: true,
            }}
          />
        )}
        {!fullDetails && (
          <Drawer.Screen
            name="StartPage"
            component={StartPage}
            options={{
              gestureEnabled: false,

              title: "Start",
              drawerIcon: ({ focused, size }) => (
                <Icon name="power-off" size={30} />
              ),
            }}
          />
        )}
        {!fullDetails && (
          <Drawer.Screen
            name="DetailsPage"
            component={DetailsPage}
            options={{
              gestureEnabled: false,
              headerLeft: null,
              gesturesEnabled: false,
              headerBackTitle: null,
              header: {
                visible: false,
              },
              title: "Details",
              drawerIcon: ({ focused, size }) => (
                <Iconmaterial name="card-text" size={30} />
              ),
            }}
          />
        )}
        <Drawer.Screen
          name="WorksPage"
          component={WorksPage}
          options={{
            // gestureEnabled: false,

            title: "Works",
            drawerIcon: ({ focused, size }) => (
              <Iconmaterial name="text-box-plus" size={30} />
            ),
          }}
        />
        <Drawer.Screen
          name="makeCamera"
          component={makeCamera}
          options={{
            gestureEnabled: false,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="sendLocation"
          component={sendLocation}
          options={{
            title: "send Location",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
