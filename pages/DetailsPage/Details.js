import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import DetailsStyles from "./DetailsStyles";
import HeadBar from "../../component/HeadBar";
import { Picker } from "@react-native-picker/picker";
import DetailsPicker from "../../component/DetailsPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRoute } from "@react-navigation/native";

const DetailsPage = ({ navigation }) => {
  // const route = useRoute();
  const [value, setValue] = useState();
  const [numjob, setNumjob] = useState("");
  const [details, setDetails] = useState({});
  const options = {
    TrucksTypes: ["Citroen", "Fiat", "Ferrari", "Dodge"],
    Contractors: ["A", "B", "C", "D"],
    Customers: ["avraham", "ytzchak", "yaakov", "yosef"],
    Origins: ["#", "$", "%", "&"],
    Destinations: ["#", "$", "%", "&"],
    Cities: ["Jerusalem", "TelAviv", "Hayfa", "Ashdod"],
  };

  const onChangeText = (text) => {
    setValue(text);
    const obj = {};
    obj["TruckNumber"] = text;
    obj["jobnumb"] = numjob;
    setDetails({ ...details, ...obj });
  };

  const onPress = async () => {
    const theDetails = await JSON.stringify(details);
    await AsyncStorage.setItem("details", theDetails);
    navigation.navigate("WorksPage");
  };
  const funcnumjob = async () => {
    let theStartTime = await AsyncStorage.getItem("timenumjob");
    let theStartTime1 = JSON.parse(theStartTime);
    const numuser = await AsyncStorage.getItem("email");
    let numuser1 = JSON.parse(numuser);
    setNumjob(`${numuser1}${theStartTime1}`);
  };
  funcnumjob();

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <View>
        <View>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              {/* <Text>DETAILS</Text> */}
              <Text style={DetailsStyles.Texttitle}>Job Number</Text>

              <TextInput
                style={DetailsStyles.TextInput1}
                value={numjob}
                editable={false}
                selectTextOnFocus={false}
                autoFocus={false}
              />
              <Text style={DetailsStyles.Texttitle}>Truck Number</Text>

              <TextInput
                style={DetailsStyles.TextInput}
                onChangeText={(text) => onChangeText(text)}
                value={value}
                autoFocus={true}
                numeric
                keyboardType={"numeric"}
              />
              <DetailsPicker
                theOption="TrucksTypes"
                detail="TruckType"
                options={options}
                details={details}
                setDetails={setDetails}
              />
              <DetailsPicker
                theOption="Contractors"
                detail="Contractor"
                options={options}
                details={details}
                setDetails={setDetails}
              />
              <DetailsPicker
                theOption="Customers"
                detail="Customer"
                options={options}
                details={details}
                setDetails={setDetails}
              />
              <DetailsPicker
                theOption="Origins"
                detail="Origin"
                options={options}
                details={details}
                setDetails={setDetails}
              />
              <DetailsPicker
                theOption="Destinations"
                detail="Destination"
                options={options}
                details={details}
                setDetails={setDetails}
              />
              <DetailsPicker
                theOption="Cities"
                detail="City"
                options={options}
                details={details}
                setDetails={setDetails}
              />
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "orange",
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                  width: 200,
                  marginBottom: 150,
                }}
                onPress={onPress}
              >
                <Text
                  style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailsPage;
