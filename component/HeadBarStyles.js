import { StyleSheet } from "react-native";

const HeadBarStyles = StyleSheet.create({
  allitems: {
    backgroundColor: "orange",
    height: 60,
    flexDirection: "row",
  },

  logout: {
    alignItems: "center",
    width: "25%",
    justifyContent: "center",
  },
  Button: {
    alignItems: "center",
    // width: "30%",
    // justifyContent: "center",
  },

  logo: {
    alignItems: "center",
    width: "50%",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 50,
  },

  call: {
    width: "25%",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
  },

  iconphone: {
    color: "black",
  },

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

export default HeadBarStyles;
