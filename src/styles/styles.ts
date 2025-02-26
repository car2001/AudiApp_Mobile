import { StyleSheet } from "react-native";

const MainStyles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  mainButton: {
    backgroundColor: "#5964E8",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    elevation: 5,
  },
  mainButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
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
    color: "#a61414",
    fontSize: 12,
    position: "absolute",
    top:0 ,
  },
  inputContainer: {
    position: "relative"
  }
});

export default MainStyles;