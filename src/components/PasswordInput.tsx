import React, { useState } from "react";
import { TouchableOpacity, StyleSheet , StyleProp, TextStyle} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { TextInput, View } from "./Themed";

const PasswordInput = ({
    placeholder,
    value,
    onChangeText,
    style
}:{
    placeholder?:string;
    value: string;
    onChangeText: (...event: any[]) => void;
    style?: StyleProp<TextStyle>
}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        secureTextEntry={secureText}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity
        onPress={() => setSecureText(!secureText)}
        style={styles.icon}
        accessibilityLabel="Mostrar u ocultar contraseña"
        accessibilityRole="button"
      >
        <FontAwesome
          name={secureText ? "eye-slash" : "eye"}
          size={20}
          color="#888"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    paddingRight: 40,
  },
  icon: {
    position: "absolute",
    right: 15,
  },
});

export default PasswordInput;
