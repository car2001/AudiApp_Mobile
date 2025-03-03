import React from 'react';
import { ImageBackground, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{ padding:0, backgroundColor: "#5964E8"}}>
        
        {/* Sección del usuario */}
        <View style={styles.profileContainer}>
          <Image source={require('@/assets/images/user-profile.jpg')} style={styles.profileImage} />
          <Text style={styles.profileName}>John Doe</Text>
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
  profileContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  drawerItemsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10 // Para mejorar el diseño
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
