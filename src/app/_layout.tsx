import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_700Bold_Italic,
  Inter_900Black,
  Inter_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { colors } from "../theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_700Bold_Italic,
    Inter_900Black,
    Inter_900Black_Italic,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: "none",
          orientation: "portrait",
        }}
      >
        <Stack.Screen name="home" options={{ orientation: "landscape" }} />
        <Stack.Screen name="briefing" options={{ orientation: "landscape" }} />
        <Stack.Screen name="video" options={{ orientation: "landscape" }} />
        <Stack.Screen name="choices" options={{ orientation: "landscape" }} />
        <Stack.Screen name="outcome" options={{ orientation: "landscape" }} />
        <Stack.Screen name="dna" options={{ orientation: "landscape" }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
