import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import { useState } from "react";

const LoginForm = () => {

  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(dni);
    console.log(password);
    const apiUrl = 'http://localhost:5213/api/Auth/login'; // o la IP de tu máquina local

    // Realizando la solicitud POST
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Asegúrate de que la API acepte JSON
      },
      body: JSON.stringify({
        Dni: dni,       // Enviar el valor de dni
        Clave: password, // Enviar el valor de password
      }),
    })
    .then((response) => response.json())  // Convertir la respuesta a JSON
    .then((data) => {
      console.log('Success:', data);  // Manejar la respuesta exitosa
    })
    .catch((error) => {
      console.error('Error:', error);  // Manejar errores
    });
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Text style={styles.text}>Información de Cuenta</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    marginHorizontal:15
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 10,
  },
  text: {
    color: "#555",
    fontWeight: "bold",
    marginVertical: 5,
  },
  input: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
    color: "#333", 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: "#5964E8",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
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
    fontWeight:"bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default LoginForm;