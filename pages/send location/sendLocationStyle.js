import { StyleSheet } from "react-native";

const sendLocationStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
    color: "#000",
  },

  Btnstart: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginTop: 80,
    justifyContent: "center",
    backgroundColor: "#8080ff",
    borderColor: "blue",
    borderWidth: 3,
    opacity: 0.6,
    zIndex: 0,
  },

  loginText: {
    zIndex: 1,
    marginTop: 120,
    width: 250,
    position: "absolute",
    textAlign: "center",
    fontSize: 50,
    color: "#000",
    fontWeight: "bold",
  },
});

export default sendLocationStyle;
