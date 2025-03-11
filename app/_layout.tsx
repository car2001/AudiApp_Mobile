import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import UserProfileHeader from '@/src/components/UserProfileHeader';


import { useColorScheme } from '@/src/components/useColorScheme';
import { AuthProvider } from '@/src/context/AuthContext';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerTitleAlign: "center"
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="signup"
        />
        <Stack.Screen
          name="MiEmpresa"
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name="(dashboard)" 
          options={{ headerShown: false }} />
        </Stack>
    </ThemeProvider>
  );
}
