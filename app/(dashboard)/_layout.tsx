import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Redirect } from 'expo-router';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import CustomDrawer from '@/src/components/CustomDrawer';
import UserProfileHeader from '@/src/components/UserProfileHeader';
import { useAuth } from '@/src/context/AuthContext';

export default function Layout() {

  const { authState } = useAuth();
  const authenticated = authState?.authenticated;
  const userStored = authState?.user;
  const theme = useColorScheme() ?? 'light';
  const drawerActiveBackgroungColor = Colors[theme]["drawerActiveBackgroungColor"];
  const drawerInactiveTintColor = Colors[theme]["drawerInactiveTintColor"];
  const drawerActiveTintColor = Colors[theme]["drawerActiveTintColor"];

  return !authenticated ? <Redirect href="/" /> :
  (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerType: Platform.OS === "web" ? "permanent" : "slide",
          headerShown: true,
          drawerActiveBackgroundColor: drawerActiveBackgroungColor,
          drawerActiveTintColor: drawerActiveTintColor,
          drawerInactiveTintColor: drawerInactiveTintColor,
          headerRight: () => <UserProfileHeader usuario={`${userStored?.nombre} ${userStored?.apellidos}`} />,
        }}
        drawerContent={props => <CustomDrawer {...props}/>}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
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
