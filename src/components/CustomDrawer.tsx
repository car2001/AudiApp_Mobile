import React from 'react';
import { ImageBackground, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{ padding:0}}>
        
        {/* Sección del usuario */}
        <ImageBackground 
          source={require('@/assets/images/menu-bg.jpeg')} 
          style={styles.backgroundImage} 
          resizeMode="cover"
        >
          <View style={styles.profileContainer}>
            <Image source={require('@/assets/images/user-profile.jpg')} style={styles.profileImage} />
            <Text style={styles.profileName}>John Doe</Text>
            <View style={styles.coinContainer}>
              <Text style={styles.coinText}>280 Coins</Text>
              <Ionicons name="wallet" size={16} color="#FFD700" style={{ marginLeft: 5 }} />
            </View>
          </View>
        </ImageBackground>

        {/* Sección del Menú */}
        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>

      </DrawerContentScrollView>

      {/* Botón de Cerrar Sesión */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.logoutButton}>
          <Ionicons name="exit-outline" size={22} color="#8200d6" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
        <DrawerItem label={'Logout'} onPress={() => {}} />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerScroll: {
    backgroundColor: '#8200d6',
    padding: 0
  },
  backgroundImage: {
    height: 200, // Ajusta la altura para que no se expanda innecesariamente
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 15,
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
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  coinText: {
    color: '#FFD700',
    fontWeight: '600',
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
    color: '#8200d6',
    marginLeft: 8,
  },
});
