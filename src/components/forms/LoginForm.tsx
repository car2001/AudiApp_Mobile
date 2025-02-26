import { StyleSheet, TouchableOpacity, Platform, Pressable, useColorScheme } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

import { LoginUsuarioRequest } from "@/src/types/auth";
import { View, Text, TextInput } from "../Themed";
import CustomButton from "@/src/components/CustomButton"


interface LoginFormProps {
  handleLogin: (credentials: LoginUsuarioRequest) => Promise<void>;
}

const LoginForm = ({ handleLogin }: LoginFormProps) => {

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
        style={styles.input}
        placeholder='DNI'
        placeholderTextColor="#888"
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder='Contraseña'
        secureTextEntry
        placeholderTextColor="#888"
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
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
  input: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  button: {
    backgroundColor: "#5964E8",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPasswordText: {
    color: "#4CABEB",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default LoginForm;