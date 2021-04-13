import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, Icon } from "native-base";

const DetailsPicker = (props) => {
  const { theOption, options, details, setDetails, detail } = props;
  const detailsObj = {};
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          marginTop: 10,
          color: "#333333",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {detail}
      </Text>
      {/* <View
        style={{
          borderColor: "#000",
          backgroundColor: "#ffffff",
          borderWidth: 1,
          width: 250,
          borderRadius: 10,
          alignItems: "center",
        }}
      > */}
      <View style={Style.pickerWrapper}>
        <Icon
          name="arrow-drop-down"
          type="MaterialIcons"
          style={Style.pickerIcon}
        />

        <Picker
          mode="dropdown"
          style={Style.pickerContent}
          selectedValue={details[detail]}
          onValueChange={(itemValue, itemIndex) => {
            detailsObj[detail] = itemValue;
            setDetails({ ...details, ...detailsObj });
          }}
        >
          <Picker.Item
            color="#ccc"
            label="Please select an option..."
            value={null}
          />

          {options[theOption].map((option, index) => (
            <Picker.Item label={option} value={option} key={index} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
export default DetailsPicker;

const Style = StyleSheet.create({
  pickerWrapper: {
    borderRadius: 10,
    width: 250,
    height: 40,
    borderColor: "orange",
    borderWidth: 1.5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },

  pickerIcon: {
    color: "orange",
    position: "absolute",
    fontSize: 34,
    left: "90%",
    // width: "10%",
  },

  pickerContent: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    color: "#404040",
    backgroundColor: "transparent",
  },
});
