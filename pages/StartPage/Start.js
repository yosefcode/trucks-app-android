import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import StartStyles from "./StartStyles";
import HeadBar from "../../component/HeadBar";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StartPage = ({ navigation }) => {
  const [startTime, setStartTime] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [textLocation, setTextLocation] = useState("");
  const [map, setMap] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  let textlocation = `latitude  ${latitude} longitude  ${longitude}`;

  // let textlocation = "waiting...;"

  // if (errorMsg) {
  //   textlocation = errorMsg;
  // } else if (location) {
  //   textlocation = JSON.stringify(
  //     // location
  //     `קו רוחב  ${location.coords.latitude} קו אורך  ${location.coords.longitude}`
  //   );
  // }
  // var latitude = location.coords.latitude;
  // var longitude = location.coords.longitude;

  const mapview = (
    <MapView
      style={{ height: 150, width: 300 }}
      initialRegion={{
        // latitude: 31.8800332,
        // longitude: 35.2398698,
        latitude: latitude ? latitude : 0,
        longitude: longitude ? longitude : 0,
        latitudeDelta: 0.00292,
        longitudeDelta: 0.00242,
      }}
    >
      <Marker
        coordinate={{
          latitude: latitude ? latitude : 0,
          longitude: longitude ? longitude : 0,
        }}
      />
    </MapView>
  );

  const onPress = async () => {
    await setStartTime(`${days[new Date().getDay()]}     ${
      date < 10 ? "0" + date : date
    }/${
      month < 10 ? "0" + month : month
    }/${new Date().getFullYear().toString().substr(-2)}     ${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}
    `);
    let theStartTime = JSON.stringify(`${days[new Date().getDay()]}     ${
      date < 10 ? "0" + date : date
    }/${
      month < 10 ? "0" + month : month
    }/${new Date().getFullYear().toString().substr(-2)}     ${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}
    `);
    await AsyncStorage.setItem("startTime", theStartTime);
    let timenumjob = JSON.stringify(`${date < 10 ? "0" + date : date}${
      month < 10 ? "0" + month : month
    }${new Date().getFullYear().toString().substr(-2)}${
      hours < 10 ? "0" + hours : hours
    }${minutes < 10 ? "0" + minutes : minutes}
    `);
    await AsyncStorage.setItem("timenumjob", timenumjob);
    setTextLocation(textlocation);
    setMap(mapview);
    navigation.navigate("DetailsPage");
  };

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <View style={StartStyles.container}>
        <TouchableOpacity onPress={onPress} style={StartStyles.Btnstart}>
          <Text style={StartStyles.loginText}>Start Job</Text>
        </TouchableOpacity>
        {/* <Text>
          {"\n"}
          {startTime}
          {textLocation}
        </Text>
        {map} */}
      </View>
    </View>
  );
};

export default StartPage;
