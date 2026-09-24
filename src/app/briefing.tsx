import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MusicBar, PlayFrame, SideMenu } from "../components/play/PlayChrome";

/** Figma: Simulation (1595:548), 812×375. */
export default function BriefingScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PlayFrame>
      <MusicBar onMenu={() => setMenuOpen((open) => !open)} />
      <View style={styles.card}>
        <Image source={require("../../assets/figma/play/briefing.png")} style={styles.photo} />
        <LinearGradient
          colors={["#020618", "rgba(2,6,24,0.4)", "transparent"]}
          locations={[0, 0.5, 1]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.shade}
        />
        <Text style={styles.kicker}>Scenario Briefing</Text>
        <Text style={styles.title}>Iraq War</Text>
        <Text style={styles.body}>
          2003. The chemical weapon allegations are on your desk. Your decision will determine the fate of millions.
        </Text>
        <Pressable accessibilityRole="button" onPress={() => router.push("/video")} style={styles.button}>
          <Text style={styles.buttonLabel}>Start Simulation</Text>
        </Pressable>
      </View>
      {menuOpen ? (
        <SideMenu
          active="scenarios"
          onScenarios={() => {
            setMenuOpen(false);
            router.replace("/home");
          }}
          onDna={() => router.push("/dna")}
        />
      ) : null}
    </PlayFrame>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: 64,
    left: 42,
    width: 728,
    height: 292,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#1D293D",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  photo: {
    ...StyleSheet.absoluteFill,
    width: 728,
    height: 292,
  },
  shade: {
    ...StyleSheet.absoluteFill,
  },
  kicker: {
    fontFamily: "Menlo",
    fontWeight: "700",
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 1,
    color: "#00D3F3",
    textTransform: "uppercase",
  },
  title: {
    fontFamily: "Inter_900Black_Italic",
    fontSize: 28,
    lineHeight: 34,
    color: "#F8FAFC",
    textTransform: "uppercase",
  },
  body: {
    width: 497,
    opacity: 0.8,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#E2E8F0",
    textAlign: "center",
    textTransform: "capitalize",
  },
  button: {
    backgroundColor: "rgba(0,184,219,0.14)",
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonLabel: {
    fontFamily: "Inter_900Black",
    fontSize: 16,
    lineHeight: 24,
    color: "#00D3F3",
  },
});
