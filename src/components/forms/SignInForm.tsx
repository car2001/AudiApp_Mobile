import { StyleSheet, TouchableOpacity, Platform, Pressable, useColorScheme } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

import { LoginUsuarioRequest } from "@/src/types/auth";
import { View, Text, TextInput } from "../Themed";
import MainStyles from "@/src/styles/styles";


interface LoginFormProps {
  handleLogin: (credentials: LoginUsuarioRequest) => Promise<void>;
}

const SignInForm = ({ handleLogin }: LoginFormProps) => {

  const colorScheme = useColorScheme();
  console.log(colorScheme)
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await handleLogin({ dni, clave: password })
    setDni('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        value={dni}
        onChangeText={text => setDni(text)}
        placeholder='DNI'
      />
      <TextInput
        value={password}
        placeholder='Contraseña'
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      <Link href="/signup" asChild>
        <Pressable>
          {({ pressed }) => (
            <Text 
              style={[styles.forgotPasswordText,{opacity: pressed ? 0.5: 1}]}>
                Registrar Nuevo Usuario
            </Text>
          )}
        </Pressable>
      </Link>
      <TouchableOpacity style={MainStyles.mainButton} onPress={handleSubmit}>
        <Text style={MainStyles.mainButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === "web" ? "100%" : "auto",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: "#4CABEB",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default SignInForm;