import { StyleSheet } from "react-native";

const DetailsOfWorkStyles = StyleSheet.create({
  container: {
    height: "100%",
  },

  background: {
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    borderRadius: 50,
    marginBottom: 80,
  },

  headertext: {
    marginTop: 20,
    fontSize: 25,
    color: "orange",
    fontWeight: "bold",
  },

  titletext: {
    color: "#000",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },

  TextInput: {
    // padding: 15,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderColor: "orange",
    width: "80%",
    height: 45,
    borderWidth: 2,
    textAlign: "center",
  },

  picker: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderColor: "#000",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    width: "80%",
    borderRadius: 20,
    borderColor: "orange",
    paddingLeft: 20,
  },

  btnView: {
    marginTop: 15,
    flexDirection: "row",
    padding: 10,
    height: 80,
    width: "90%",
    justifyContent: "space-between",
  },

  btnCamera: {
    // padding: 15,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "orange",
  },

  btn: {
    // marginTop: 25,
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 7,
    width: "45%",
    height: 50,
    alignItems: "center",
  },

  btntext: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
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
    left: "10%",
    color: "#404040",
    backgroundColor: "transparent",
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
});

export default DetailsOfWorkStyles;
