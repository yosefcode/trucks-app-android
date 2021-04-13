import React, { useState } from "react";
import {
  ScrollView,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,
  Alert,
} from "react-native";
import DaySummaryStyles from "./DaySummaryStyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

const DaySummary = ({
  jobs,
  setJobs,
  startTime,
  endTime,
  details,
  setSummary,
}) => {
  const [currentWork, setCurrentWork] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState();
  const [imageStyle, setImageStyle] = useState({
    width: 50,
    height: 60,
    marginTop: -10,
  });

  const TheModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={DaySummaryStyles.modalView}>
          {status === "remove" ? (
            <Text style={DaySummaryStyles.modaltext}>
              Tons or Load - {currentWork.TonsOrLoad},{"\n"}Product -
              {currentWork.Product} {"\n"}
              Remove this row?
            </Text>
          ) : (
            <Text style={DaySummaryStyles.modaltext}>
              Are you sure you want to end the Job?
            </Text>
          )}
          <View style={DaySummaryStyles.btnmodalView}>
            <TouchableOpacity
              style={DaySummaryStyles.btnmodal}
              onPress={async () => {
                if (status === "remove") {
                  let theJobs = jobs;
                  let theNewJob = theJobs.filter(
                    (x, ind) => ind !== currentWork.index
                  );
                  await setJobs(theNewJob);
                  const newJobs = JSON.stringify(theNewJob);
                  await AsyncStorage.setItem("loads", newJobs);
                  setShowModal(false);
                } else {
                  await AsyncStorage.removeItem("loads");
                  await AsyncStorage.removeItem("details");
                  await Updates.reloadAsync();
                  // setShowModal(false);
                }
              }}
            >
              <Text style={DaySummaryStyles.textbtnmodal}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={DaySummaryStyles.btnmodal}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text style={DaySummaryStyles.textbtnmodal}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={DaySummaryStyles.container}>
      <View style={{ flex: 0.9 }}>
        <ScrollView>
          <Text style={DaySummaryStyles.headertext}>JOB DETAILS</Text>
          <View style={DaySummaryStyles.details}>
            <Text style={DaySummaryStyles.txttitle}>Job Number:</Text>
            <Text
              style={
                details.jobnumb
                  ? DaySummaryStyles.txtdetails1
                  : DaySummaryStyles.txtdetails
              }
            >
              {details.jobnumb}
            </Text>
            <Text style={DaySummaryStyles.txttitle}>Start:</Text>
            <Text style={DaySummaryStyles.txtdetails1}>{startTime}</Text>
            <Text style={DaySummaryStyles.txttitle}>End:</Text>
            <Text style={DaySummaryStyles.txtdetails1}>{endTime}</Text>
            <Text style={DaySummaryStyles.txttitle}>Truck number:</Text>
            <Text style={DaySummaryStyles.txtdetails}>
              {details.TruckNumber}
            </Text>
            <Text style={DaySummaryStyles.txttitle}>Truck type:</Text>
            <Text style={DaySummaryStyles.txtdetails}>{details.TruckType}</Text>
            <Text style={DaySummaryStyles.txttitle}>Contractor:</Text>
            <Text style={DaySummaryStyles.txtdetails}>
              {details.Contractor}
            </Text>
            <Text style={DaySummaryStyles.txttitle}>Origin:</Text>
            <Text style={DaySummaryStyles.txtdetails}>{details.Origin}</Text>
            <Text style={DaySummaryStyles.txttitle}>Destination: </Text>
            <Text style={DaySummaryStyles.txtdetails}>
              {details.Destination}
            </Text>
            <Text style={DaySummaryStyles.txttitle}>City: </Text>
            <Text style={DaySummaryStyles.txtdetails}>{details.City}</Text>
          </View>

          <View
            style={{
              marginBottom: 20,
            }}
          >
            <Text style={DaySummaryStyles.headertext}>DAILY LOADS</Text>

            <View style={DaySummaryStyles.headeritems}>
              <View style={DaySummaryStyles.row1}>
                <Text style={DaySummaryStyles.titleheader}>Tons or Load</Text>
              </View>

              <View style={DaySummaryStyles.row2}>
                <Text style={DaySummaryStyles.titleheader}>Product</Text>
              </View>

              <View style={DaySummaryStyles.row3}>
                <Text style={DaySummaryStyles.titleheader}>Ticket num</Text>
              </View>

              <View style={DaySummaryStyles.row4}>
                <Text style={DaySummaryStyles.titleheader}>Ticket</Text>
              </View>

              <View style={DaySummaryStyles.row5} />
            </View>
            {jobs &&
              jobs.map((work, index) => (
                <View key={index} style={DaySummaryStyles.allitems}>
                  <View style={DaySummaryStyles.row1}>
                    <Text style={DaySummaryStyles.titletext}>
                      {work.TonsOrLoad}
                    </Text>
                  </View>

                  <View style={DaySummaryStyles.row2}>
                    <Text style={DaySummaryStyles.titletext}>
                      {work.Product}
                    </Text>
                  </View>

                  <View style={DaySummaryStyles.row3}>
                    <Text style={DaySummaryStyles.titletext}>
                      {work.ticketnumber}
                    </Text>
                  </View>

                  <View style={DaySummaryStyles.row4}>
                    {work.Image ? (
                      <Image
                        source={{ uri: work.Image }}
                        style={imageStyle}
                      ></Image>
                    ) : (
                      <Text style={DaySummaryStyles.titletext}>----</Text>
                    )}
                  </View>

                  <View style={DaySummaryStyles.row5}>
                    <TouchableOpacity
                      onPress={() => {
                        setShowModal(true);
                        setStatus("remove");
                        let theWork = work;
                        theWork.index = index;
                        setCurrentWork(theWork);
                      }}
                    >
                      <Icon name="delete" size={25} color={"orange"} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
      <TheModal />

      <View style={DaySummaryStyles.btnmodalView}>
        <View style={DaySummaryStyles.btn}>
          <TouchableOpacity
            onPress={() => {
              // setStatus("exit");
              setSummary(false);
            }}
          >
            <Text style={DaySummaryStyles.textbtn}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={DaySummaryStyles.btn}>
          <TouchableOpacity
            onPress={() => {
              setStatus("exit");
              setShowModal(true);
            }}
          >
            <Text style={DaySummaryStyles.textbtn}>End Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DaySummary;
