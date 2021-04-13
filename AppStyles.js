import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
  modalView: {
    backgroundColor: "#fff",
    width: "80%",
    height: 210,
    borderRadius: 20,
    borderWidth: 2,
    padding: 20,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 200,
  },

  modaltext: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 40,
    textAlign: "center",
  },

  btnmodalView: {
    marginTop: 20,
    flexDirection: "row",
    padding: 10,
    height: 80,
    width: "80%",
    justifyContent: "space-between",
  },
  btnmodal: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "orange",
    padding: 10,
    height: 50,
    borderRadius: 15,
  },
  textbtnmodal: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AppStyles;
