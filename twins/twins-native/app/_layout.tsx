import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // Using system fonts; no async loading required.

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="questionnaire" options={{ title: 'Questionnaire' }} />
        <Stack.Screen name="results" options={{ title: 'Results' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
