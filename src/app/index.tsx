import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { AppleIcon, EmailIcon, GoogleIcon } from "../components/icons/FigmaIcons";

/** Figma: Playground / Sign in/up (1691:14715), 375×812. */
export default function WelcomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.frame}>
        <View style={styles.hero}>
          <Image source={require("../../assets/figma/app-icon.png")} style={styles.logo} />
          <View style={styles.titles}>
            <Text style={styles.title}>Welcome to Fateful Moment</Text>
            <Text style={styles.subtitle}>Sign in to continue your journey</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable accessibilityRole="button" onPress={() => router.push("/sign-in")} style={styles.emailButton}>
            <EmailIcon />
            <Text style={styles.emailLabel}>Continue with Email</Text>
          </Pressable>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.social}>
            <Pressable accessibilityRole="button" style={styles.socialButton}>
              <AppleIcon />
              <Text style={styles.socialLabel}>Continue with Apple</Text>
            </Pressable>
            <Pressable accessibilityRole="button" style={styles.socialButton}>
              <GoogleIcon />
              <Text style={styles.socialLabel}>Continue with Google</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.legal}>
          By continuing you agree to the <Text style={styles.legalLink}>Terms of Use</Text> and{" "}
          <Text style={styles.legalLink}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#020618",
    alignItems: "center",
  },
  frame: {
    width: 375,
    height: 812,
    maxWidth: "100%",
  },
  hero: {
    position: "absolute",
    top: 82,
    left: 24,
    width: 327,
    height: 248,
    alignItems: "center",
  },
  logo: {
    width: 148,
    height: 148,
    borderRadius: 74,
  },
  titles: {
    position: "absolute",
    top: 184,
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    lineHeight: 25,
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#90A1B9",
    textAlign: "center",
  },
  buttons: {
    position: "absolute",
    top: 370,
    left: 24,
    width: 327,
    gap: 24,
  },
  emailButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "rgba(0,211,243,0.14)",
  },
  emailLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#00D3F3",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  or: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    lineHeight: 19.5,
    letterSpacing: 0.65,
    color: "#62748E",
    textTransform: "uppercase",
  },
  social: {
    gap: 16,
    borderRadius: 32,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 12.5,
    shadowOffset: { width: 0, height: 20 },
  },
  socialButton: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "rgba(17,24,39,0.8)",
  },
  socialLabel: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  legal: {
    position: "absolute",
    top: 724,
    left: 24,
    width: 327,
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 20,
    color: "#6A7282",
    textAlign: "center",
  },
  legalLink: {
    color: "#00B8DB",
  },
});
