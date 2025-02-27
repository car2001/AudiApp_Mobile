import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

type MessageProps = {
  message: string,
  isError: boolean,
  onClose: () => void
}

const Message = ({ message, isError, onClose }: MessageProps) => {
  if (!message) return null; // No mostrar nada si no hay mensaje

  return (
    <View style={[styles.messageContainer, isError ? styles.errorMessage : styles.successMessage]}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>✖</Text>
      </TouchableOpacity>
      <Text style={[styles.messageText,isError ? styles.errorMessageText : styles.successMessageText ]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    position: "relative",
    padding: 15,
    borderRadius: 8,
    marginTop: 5,
    maxWidth: 350,
    alignSelf:"center"
  },
  messageText: {
    fontSize: 14,
    textAlign: "justify",
  },
  errorMessage: { 
    backgroundColor: "#f8d7da", 
  },
  errorMessageText: { 
    color: "#842029" 
  },
  successMessage: { 
    backgroundColor: "#d1e7dd", 
  },
  successMessageText: { 
    color: "#0f5132" 
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 5,
    paddingBottom: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default Message;
