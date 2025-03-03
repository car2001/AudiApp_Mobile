import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';
import { Platform } from 'react-native';

import CustomDrawer from '@/src/components/CustomDrawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerType: Platform.OS === "web" ? "permanent" : "slide",
          headerShown: true,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          headerRight: () => <UserProfileHeader />,
        }}
        drawerContent={props => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            title: 'Overview',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// ✅ Componente del icono de usuario en el header
function UserProfileHeader() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
      <Text style={{ marginRight: 10, fontSize: 16, fontWeight: 'bold' }}>
        John Doe
      </Text>
      <Ionicons name="person-circle" size={30} color="black" />
    </View>
  );
}
