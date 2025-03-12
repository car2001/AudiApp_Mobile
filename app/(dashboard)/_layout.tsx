import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Redirect } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useMemo, useCallback } from 'react';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import CustomDrawer from '@/src/components/CustomDrawer';
import UserProfileHeader from '@/src/components/UserProfileHeader';
import { useAuth } from '@/src/context/AuthContext';
import useEmpresaStore from '@/src/stores/EnterpriseStore';

const DrawerNavigation = () => {
    
  const theme = useColorScheme() ?? 'light';

  const drawerStylesTheme = useMemo( () => ({
    drawerActiveBackgroungColor: Colors[theme]["drawerActiveBackgroungColor"],
    drawerInactiveTintColor: Colors[theme]["drawerInactiveTintColor"],
    drawerActiveTintColor: Colors[theme]["drawerActiveTintColor"]
  }),[theme]);

  const renderCustomDrawer = useCallback((props:any) => <CustomDrawer {...props} />, []);
  
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerType: Platform.OS === "web" ? "slide" : "slide",
            headerShown: true,
            drawerActiveBackgroundColor: drawerStylesTheme.drawerActiveBackgroungColor,
            drawerActiveTintColor: drawerStylesTheme.drawerActiveTintColor,
            drawerInactiveTintColor: drawerStylesTheme.drawerInactiveTintColor,
            headerRight: () => <UserProfileHeader />,
          }}
          drawerContent={renderCustomDrawer}
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
            name="MiMonitor"
            options={{
              drawerLabel: 'Mi Monitor',
              title: 'Mi Monitor',
              drawerIcon: ({ size, color }) => (
                <AntDesign name="dashboard" size={size} color={color} />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    );
}

export default function Layout() {

  const { authState } = useAuth();
  const authenticated = authState?.authenticated;
  const userStored = authState?.user;
  const { hasEnterprise } = useEmpresaStore();

  return (
    !authenticated 
      ? <Redirect href="/" /> 
      : 
      (
        !hasEnterprise ? <Redirect href="/MiEmpresa" /> :
        <DrawerNavigation />
      )
  )
}