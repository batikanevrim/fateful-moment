import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { BackButton, PhoneFrame } from "../components/auth/AuthFrame";
import { CheckBadge } from "../components/icons/FigmaIcons";

/** Figma: Check your email (1691:21783). */
export default function CheckEmailScreen() {
  const { email } = useLocalSearchParams<{ email?: string }>();
  const address = email || "johndoe@mail.com";

  return (
    <PhoneFrame>
      <BackButton />
      <View style={styles.block}>
        <View style={styles.badge}>
          <CheckBadge />
        </View>
        <Text style={styles.title}>Check Your Email</Text>
        <Text style={styles.copy}>
          {"We've sent password reset instructions to "}
          <Text style={styles.email}>{address}</Text>
        </Text>
        <Pressable accessibilityRole="button" onPress={() => router.replace("/sign-in")} style={styles.button}>
          <Text style={styles.buttonLabel}>Back to Sign in</Text>
        </Pressable>
      </View>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  block: {
    position: "absolute",
    top: 211,
    left: 24,
    width: 327,
    height: 280,
  },
  badge: {
    position: "absolute",
    top: 0,
    left: 124,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(0,211,243,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    top: 104,
    left: 24,
    width: 282,
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    lineHeight: 32,
    color: "#FFFFFF",
    textAlign: "center",
  },
  copy: {
    position: "absolute",
    top: 144,
    left: 24,
    width: 282,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#90A1B9",
    textAlign: "center",
  },
  email: {
    fontFamily: "Inter_700Bold",
    color: "#FFFFFF",
  },
  button: {
    position: "absolute",
    top: 224,
    left: 0,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(0,211,243,0.14)",
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#00D3F3",
  },
});
