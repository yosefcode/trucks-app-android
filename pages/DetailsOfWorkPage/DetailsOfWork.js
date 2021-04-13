import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import DetailsOfWorkStyles from "./DetailsOfWorkStyles";
import { Picker } from "@react-native-picker/picker";
import { Camera } from "expo-camera";
import Icond from "react-native-vector-icons/MaterialCommunityIcons";
import MakeCamera from "../../component/MakeCamera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Icon } from "native-base";

const DetailsOfWork = (props) => {
  const { navigation } = props;
  const { setWorkPage, setCameraStart } = props;
  const { jobs, setJobs } = props;
  const { setShow, image } = props;
  const products = ["apple", "banana", "egg"];
  const [theDetails, setTheDetails] = useState({});
  const [value, setValue] = useState();
  const [ticketnumber, setTicketnumber] = useState();

  useEffect(() => {
    if (image) {
      const objDetails = {};
      objDetails.Image = image.uri;
      setTheDetails({ ...theDetails, ...objDetails });
    }
  }, [image]);

  const onChangeText = (text) => {
    setValue(text);
    const obj = {};
    obj["TonsOrLoad"] = text;
    setTheDetails({ ...theDetails, ...obj });
  };
  const onChangeticketnumber = (text) => {
    setTicketnumber(text);
    const obj = {};
    obj["ticketnumber"] = text;
    setTheDetails({ ...theDetails, ...obj });
  };

  const onPress = async () => {
    let theJobs = jobs;
    theJobs.push(theDetails);
    await setJobs(theJobs);
    const newJobs = JSON.stringify(jobs);
    await AsyncStorage.setItem("loads", newJobs);
    // let theWorks = works;
    // theWorks.push(theDetails);
    // setWorks(theWorks);
    setShow(false);
  };

  const __startCamera = async () => {
    // setWorkPage(false);
    // setCameraStart(true)
    navigation.navigate("makeCamera");
  };

  return (
    <>
      <View style={DetailsOfWorkStyles.container}>
        <ScrollView>
          <View style={DetailsOfWorkStyles.background}>
            <Text style={DetailsOfWorkStyles.headertext}>ADD LOAD</Text>

            <Text style={DetailsOfWorkStyles.titletext}>Tons or Load</Text>

            <TextInput
              style={DetailsOfWorkStyles.TextInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              numeric
              keyboardType={"numeric"}
            />

            <Text style={DetailsOfWorkStyles.titletext}>Ticket Number</Text>

            <TextInput
              style={DetailsOfWorkStyles.TextInput}
              onChangeText={(text) => onChangeticketnumber(text)}
              value={ticketnumber}
              numeric
              keyboardType={"numeric"}
            />

            <Text style={DetailsOfWorkStyles.titletext}>Product</Text>

            <View style={DetailsOfWorkStyles.picker}>
              <Icon
                name="arrow-drop-down"
                type="MaterialIcons"
                style={DetailsOfWorkStyles.pickerIcon}
              />
              <Picker
                style={DetailsOfWorkStyles.pickerContent}
                mode="dropdown"
                selectedValue={theDetails.Product}
                onValueChange={(itemValue, itemIndex) => {
                  const detailsObj = {};
                  detailsObj.Product = itemValue;
                  setTheDetails({ ...theDetails, ...detailsObj });
                }}
              >
                <Picker.Item
                  color="#ccc"
                  label="Please select an option..."
                  value={null}
                />
                {products.map((product, index) => (
                  <Picker.Item label={product} value={product} key={index} />
                ))}
              </Picker>
            </View>

            <Text style={DetailsOfWorkStyles.titletext}>Add Ticket</Text>
            {image ? (
              <View>
                <Image
                  source={{ uri: image.uri }}
                  style={{ marginTop: 15, width: 80, height: 120 }}
                ></Image>
              </View>
            ) : (
              <TouchableOpacity
                style={DetailsOfWorkStyles.btnCamera}
                onPress={__startCamera}
              >
                <Icond
                  name="camera"
                  size={40}
                  style={{ alignSelf: "center", marginTop: 3 }}
                  color={"orange"}
                />
              </TouchableOpacity>
            )}

            <View style={DetailsOfWorkStyles.btnView}>
              <TouchableOpacity
                style={DetailsOfWorkStyles.btn}
                onPress={() => {
                  setShow(false);
                }}
              >
                <Text style={DetailsOfWorkStyles.btntext}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={DetailsOfWorkStyles.btn}
                onPress={onPress}
              >
                <Text style={DetailsOfWorkStyles.btntext}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DetailsOfWork;
