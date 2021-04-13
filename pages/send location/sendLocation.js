import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import sendLocationStyle from "./sendLocationStyle";
import HeadBar from "../../component/HeadBar";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const sendLocation = ({ navigation }) => {
  const [startTime, setStartTime] = useState([
    {
      aaa: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    },
  ]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [textLocation, setTextLocation] = useState("");
  const [map, setMap] = useState();
  const [cartproduct, setCartproduct] = useState([{ a: "jjjjjj" }]);
  const [errorMsg, setErrorMsg] = useState(null);

  // const month = Date().getMonth() + 1;
  // const date = Date().getDate();
  // const hours = Date().getHours();
  // const minutes = Date().getMinutes();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // useEffect(() => {
  //   (async () => {
  //     let location = await Location.getCurrentPositionAsync({});
  //     setLatitude(location.coords.latitude);
  //     setLongitude(location.coords.longitude);
  //   })();
  // }, []);

  let textlocationaa = `קו רוחב  ${latitude} קו אורך  ${longitude}`;
  // setInterval(() => {
  //   // setUserNames((userNames) => [
  //   //   ...userNames,
  //   //   { ...inputValue, id: (max + 1).toString() },
  //   // ]);

  //   setStartTime((userNames) => [
  //     ...userNames,
  //     {
  //       aaa: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  //     },
  //   ]);
  //   // const coordinates = async () => {
  //   //   let location = await Location.getCurrentPositionAsync({});
  //   //   setLatitude(location.coords.latitude);
  //   //   setLongitude(location.coords.longitude);
  //   // };
  //   console.log(startTime);
  //   // coordinates();
  // }, 3000);
  let az = { aaa: `asdf` };
  let usernames = startTime;

  const onPress = () => {
    console.log(startTime);

    usernames.push({ ...az });

    setStartTime(usernames);
    // setStartTime((aaa) => [
    //   ...aaa,
    //   {
    //     // ...startTime,
    //     ...az,
    //     aaa: `asdf`,
    //   },
    // ]);
  };

  // useEffect(() => {
  //   // setInterval(() => {
  //   //   setStartTime(
  //   //     `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  //   //   );
  //   //   // console.log("aaaa");
  //   // }, 3000);

  //   // setInterval(() => {
  //   async () => {
  //     let location = await Location.getCurrentPositionAsync({});
  //     setLatitude(location.coords.latitude);
  //     setLongitude(location.coords.longitude);
  //     setTextLocation(textlocationaa);
  //   };
  //   // }, 3000);
  // }, []);

  // const mapview = (
  //   <MapView
  //     style={{ height: 150, width: 300 }}
  //     initialRegion={{
  //       // latitude: 31.8800332,
  //       // longitude: 35.2398698,
  //       latitude: latitude ? latitude : 0,
  //       longitude: longitude ? longitude : 0,
  //       latitudeDelta: 0.00292,
  //       longitudeDelta: 0.00242,
  //     }}
  //   >
  //     <Marker
  //       coordinate={{
  //         latitude: latitude ? latitude : 0,
  //         longitude: longitude ? longitude : 0,
  //       }}
  //     />
  //   </MapView>
  // );

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <View>
        <Text>
          {"\n"}
          {/* time: {startTime} */}
          time:
          {startTime.map((work, index) => (
            <View key={index}>
              <Text>{work.aaa}</Text>
            </View>
          ))}
          {"\n"}
          {"\n"}
          Location: {latitude}
        </Text>

        {/* {map} */}
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text>vvvvv</Text>
      </TouchableOpacity>
      {/* {cartproduct.map((work, index) => (
        <View key={index} style={{ height: 20, width: 300 }}>
          <View>
            <Text>{work.a}</Text>
          </View>
        </View>
      ))} */}
    </View>
  );
};

export default sendLocation;

// import React, { useState, useEffect } from "react";
// import { Platform, Text, View, StyleSheet } from "react-native";
// import Constants from "expo-constants";
// import * as Location from "expo-location";

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === "android" && !Constants.isDevice) {
//         setErrorMsg(
//           "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
//         );
//         return;
//       }
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{text}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: "center",
//   },
// });
