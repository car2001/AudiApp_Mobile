import { View, Text } from "./Themed";
import { Ionicons } from "@expo/vector-icons";
import { Modal, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import { useAuth } from "../context/AuthContext";

export default function UserProfileHeader() {

  const { onLogout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [usuario, setUsuario] = useState("Juan Pérez"); // Aquí puedes obtener el nombre del usuario dinámicamente

  const handleLogout = async () => {
    await onLogout();
    setModalVisible(false);
    router.navigate("/");
  };

  const handleProfile = () => {
    // Lógica para ver perfil
    console.log("Ver perfil...");
    setModalVisible(false); // Cerrar el modal
  };

  const handleChangePassword = () => {
    // Lógica para cambiar contraseña
    console.log("Cambiar contraseña...");
    setModalVisible(false); // Cerrar el modal
  };

  const handleAccountSettings = () => {
    // Lógica para configurar cuenta
    console.log("Configuración de cuenta...");
    setModalVisible(false); // Cerrar el modal
  };

  return (
    <>
      {/* Barra de navegación (sin mostrar el nombre del usuario) */}
      <View style={{ flexDirection: "row", alignItems: "center", marginRight: 15 }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="person-circle" size={30} color="#5964E8" />
        </TouchableOpacity>
      </View>

      {/* Modal para opciones de configuración */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Nombre del usuario dentro del modal */}
            <Text style={styles.modalTitle}>Hola, {usuario}!</Text>

            {/* Opciones dentro del modal */}
            <ScrollView style={styles.optionsContainer}>
              {/* <TouchableOpacity onPress={handleProfile} style={styles.optionButton}>
                <Text style={styles.optionText}>Ver Perfil</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleChangePassword} style={styles.optionButton}>
                <Text style={styles.optionText}>Cambiar Contraseña</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleAccountSettings} style={styles.optionButton}>
                <Text style={styles.optionText}>Configuración de Cuenta</Text>
              </TouchableOpacity> */}

              <TouchableOpacity onPress={handleLogout} style={[styles.optionButton, styles.logoutButton]}>
                <Text style={styles.optionText}>Cerrar Sesión</Text>
              </TouchableOpacity>
            </ScrollView>

            {/* Botón de cancelar */}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#5964E8",
  },
  optionsContainer: {
    width: "100%",
  },
  optionButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#FF6347",
  },
  cancelButton: {
    backgroundColor: "#5964E8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
