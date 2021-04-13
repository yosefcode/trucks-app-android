import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Modal,
} from "react-native";
import IconPhone from "react-native-vector-icons/Feather";
import HeadBarStyles from "./HeadBarStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Iconmaterial from "react-native-vector-icons/MaterialCommunityIcons";
import * as Updates from "expo-updates";

const HeadBar = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  const pressCall = () => {
    const url = "tel:+19705844550";
    Linking.openURL(url);
  };

  const clearAsyncStorage = () => {
    AsyncStorage.clear();
  };

  async function reloadApp() {
    await Updates.reloadAsync();
  }

  const theModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={HeadBarStyles.modalView}>
          <Text style={HeadBarStyles.modaltext}>
            You're sure you want{"\n"}to logout?{" "}
          </Text>

          <View style={HeadBarStyles.btnmodalView}>
            <TouchableOpacity
              style={HeadBarStyles.btnmodal}
              onPress={() => {
                clearAsyncStorage();
                setShowModal(false);
                reloadApp();
                // navigation.navigate("LogInPage");
              }}
            >
              <Text style={HeadBarStyles.textbtnmodal}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={HeadBarStyles.btnmodal}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text style={HeadBarStyles.textbtnmodal}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <View style={HeadBarStyles.allitems}>
        <View style={HeadBarStyles.logout}>
          <TouchableOpacity
            style={HeadBarStyles.Button}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Iconmaterial name="logout" size={35} />
          </TouchableOpacity>
        </View>

        <View style={HeadBarStyles.logo}>
          <Image style={HeadBarStyles.image} source={require("./logo.png")} />
        </View>

        <View style={HeadBarStyles.call}>
          <TouchableOpacity onPress={pressCall} style={HeadBarStyles.iconphone}>
            <IconPhone
              name="phone-call"
              backgroundColor="transparent"
              size={30}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        {theModal()}
      </View>
    </>
  );
};

export default HeadBar;
