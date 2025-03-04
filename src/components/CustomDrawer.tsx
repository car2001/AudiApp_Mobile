import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const CustomDrawer = (props: any) => {
  const { authState } = useAuth();
  const userStored = authState?.user;

  return (
    <View style={styles.container}>
      <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{ padding: 0, backgroundColor: "#5964E8" }}>
        
        {/* Sección del usuario */}
        <View style={styles.profileContainer}>
          <Text style={styles.logo}>AUDITA</Text>

          {/* Contenedor de avatar y datos del usuario */}
          <View style={styles.userData}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle" size={70} color="#fff" />
            </View>

            {/* Datos del usuario */}
            <View style={styles.userDetails}>
              <Text style={styles.profileName}>
                {`${userStored?.nombre} ${userStored?.apellidos}`}
              </Text>
              <Text style={styles.profileDNI}>
                {`DNI: ${userStored?.dni}`}
              </Text>
            </View>
          </View>
        </View>

        {/* Sección del Menú */}
        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>

      </DrawerContentScrollView>

      {/* Botón de Cerrar Sesión */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.logoutButton}>
          <Ionicons name="exit-outline" size={22} color="#5964E8" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    color: "#f7f7f7",
    fontWeight: "bold",
    fontSize: 32,  // Reducido el tamaño del logo para que se vea más equilibrado
    marginVertical: 20,
    textAlign: 'center',  // Centrado el logo
  },
  profileContainer: {
    height: 200,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userData: {
    flexDirection: 'row',
    alignItems: 'center',  // Centrado verticalmente el avatar y texto
    justifyContent: 'center', // Centrado de forma horizontal
  },
  avatarContainer: {
    marginRight: 15,  // Separación entre el avatar y el texto
  },
  userDetails: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profileName: {
    color: '#f7f7f7',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,  // Espacio entre nombre y DNI
  },
  profileDNI: {
    color: '#f7f7f7',
    fontSize: 12,  // Texto más pequeño para el DNI
  },
  drawerItemsContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,  // Para mejorar el diseño
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#5964E8',
    marginLeft: 8,
  },
});
