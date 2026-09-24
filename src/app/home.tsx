import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { MusicBar, PlayFrame, ScenarioRow, SideMenu, type Scenario } from "../components/play/PlayChrome";

const scenarios: Scenario[] = [
  {
    minutes: "1:37 min",
    title: "Iraq War",
    body: "2003. The chemical weapon allegations are on your desk. Your decision will determine the fate of millions.",
    enabled: true,
  },
  {
    minutes: "1:25 min",
    title: "Cuban Missile Crisis (1962)",
    body: "A world on the brink of nuclear annihilation. You are in Kennedy's seat.",
  },
  {
    minutes: "1:37 min",
    title: "Iraq War",
    body: "2003. The chemical weapon allegations are on your desk. Your decision will determine the fate of millions.",
  },
  {
    minutes: "1:25 min",
    title: "Cuban Missile Crisis (1962)",
    body: "A world on the brink of nuclear annihilation. You are in Kennedy's seat.",
  },
  {
    minutes: "1:25 min",
    title: "Cuban Missile Crisis (1962)",
    body: "A world on the brink of nuclear annihilation. You are in Kennedy's seat.",
  },
  {
    minutes: "1:25 min",
    title: "Cuban Missile Crisis (1962)",
    body: "A world on the brink of nuclear annihilation. You are in Kennedy's seat.",
  },
];

/** Figma: Home V2 (1682:1320), 812×375. */
export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PlayFrame>
      <MusicBar onMenu={() => setMenuOpen((open) => !open)} />
      <Text style={styles.heading}>Scenarios</Text>
      <Text style={styles.prompt}>
        {'Choose a scenario and ask yourself, "If you were in that situation, what would you do?"'}
      </Text>
      <Text style={styles.count}>30 Scenarios</Text>
      <ScenarioRow
        scenarios={scenarios}
        onStart={() => router.push("/briefing")}
      />
      {menuOpen ? (
        <SideMenu
          active="scenarios"
          onScenarios={() => setMenuOpen(false)}
          onDna={() => router.push("/dna")}
        />
      ) : null}
    </PlayFrame>
  );
}

const styles = StyleSheet.create({
  heading: {
    position: "absolute",
    left: 66,
    top: 64,
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    lineHeight: 20,
    color: "#E2E8F0",
    textTransform: "capitalize",
  },
  prompt: {
    position: "absolute",
    left: 66,
    top: 97,
    fontFamily: "Menlo",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
    color: "#00D3F3",
    textTransform: "capitalize",
  },
  count: {
    position: "absolute",
    left: 66,
    top: 127,
    fontFamily: "Inter_900Black",
    fontSize: 12,
    lineHeight: 16,
    color: "#62748E",
    textTransform: "capitalize",
  },
});
