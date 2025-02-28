import { StyleSheet, Platform } from "react-native";

const MainStyles = StyleSheet.create({
  textInput: {
    marginBottom: 0,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  mainButton: {
    backgroundColor: "#5964E8",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5,
  },
  mainButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  messageText: {
    fontSize: 14,
    textAlign: "justify",
  },
  errorMessageContainer: {
    position: "relative",
    paddingBottom:10,
    paddingTop:5
  },
  errorMessage: {
    fontSize: 12,
    position: "absolute",
    top:0
  },
  inputContainer: {
    position: "relative"
  }
});

export default MainStyles;