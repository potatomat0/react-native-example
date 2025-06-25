import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    // The <> and </> are a "Fragment" that lets us return multiple elements
    <>
      {/* Set the status bar icons (time, battery) to be light-colored */}
      <StatusBar style="light" />

      {/* This is the Stack Navigator */}
      <Stack
        screenOptions={{
          // These options apply to ALL screens in the stack
          headerStyle: {
            backgroundColor: '#121212', // Dark header for a consistent look
          },
          headerTintColor: '#fff', // Color of the back arrow and header title
          headerBackTitleVisible: false, // Hides the "Back" text on iOS
          headerShadowVisible: false, // Removes the line under the header
        }}
      >
        {/*
          Each Stack.Screen defines a route. The "name" corresponds to the
          filename in the 'app' directory.
        */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerTitle: '' }} />
        <Stack.Screen name="phone-login" options={{ headerTitle: '' }} />
        <Stack.Screen name="sign-up" options={{ headerTitle: '' }} />
        
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    </>
  );
}
